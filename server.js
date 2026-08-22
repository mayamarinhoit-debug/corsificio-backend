// ============================================================================
// CORSIFICIO — BACKEND (Node.js / Express)
// ============================================================================
// Este arquivo implementa os endpoints referenciados pelo frontend
// (BACKEND_BASE + "/genera", "/genera-anteprima", "/genera-premium",
// "/crea-pagamento") com as correções discutidas:
//
// FIX 1 — Free-tier real: o limite de gerações gratuitas agora é contado no
//         banco (Supabase), vinculado a user_id OU a um device_id anônimo,
//         nunca confiando em contadores enviados pelo cliente.
// FIX 2 — Retry automático de JSON malformado, centralizado aqui (o
//         frontend também tem sua própria camada de retry como segunda
//         linha de defesa, mas o ideal é nunca deixar o front pagar o custo
//         de uma resposta malformada vinda da IA).
// FIX 3 — Reconciliação de pagamento: o Stripe webhook é a fonte da verdade
//         sobre "o pagamento foi aprovado", não o retorno da URL de sucesso.
//         Isso resolve o cenário "paguei mas o navegador foi fechado antes
//         da geração terminar".
// ============================================================================

// FIX DEFINITIVO: descobrimos que o editor de variáveis do Railway estava
// salvando uma quebra de linha invisível ("\n") no final de alguns valores
// colados (ex: "price_xxx\n" em vez de "price_xxx"). Isso quebrava tanto
// Price IDs da Stripe ("No such price") quanto URLs de retorno ("Not a
// valid URL") — o valor PARECIA certo ao olhar na tela, mas tinha esse
// caractere extra escondido no fim. Em vez de depender de colar perfeito
// no painel do Railway pra sempre, todo valor de variável de ambiente
// sensível passa por essa função, que remove espaços/quebras de linha nas
// pontas automaticamente.
function env(name) {
  const value = process.env[name];
  return typeof value === 'string' ? value.trim() : value;
}

const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');
const Anthropic = require('@anthropic-ai/sdk');

const app = express();

// FIX: se STRIPE_SECRET_KEY ainda não estiver configurada (ex: testando só a
// geração gratuita, antes de configurar pagamento), o servidor não deve
// travar na inicialização — só os endpoints de pagamento ficarão indisponíveis.
const stripe = env('STRIPE_SECRET_KEY')
  ? new Stripe(env('STRIPE_SECRET_KEY'))
  : null;
if (!stripe) {
  console.warn('[startup] STRIPE_SECRET_KEY não configurada — /crea-pagamento e /genera-premium ficarão indisponíveis até configurar.');
}
// Log de inicialização — confirma que as variáveis essenciais chegaram
// (só presença, nunca o valor) — útil pra depurar deploy sem vazar segredo
// nenhum no log.
console.log('[startup] variáveis de ambiente:', {
  SUPABASE_URL: !!env('SUPABASE_URL'),
  SUPABASE_SERVICE_ROLE_KEY: !!env('SUPABASE_SERVICE_ROLE_KEY'),
  ANTHROPIC_API_KEY: !!env('ANTHROPIC_API_KEY'),
  STRIPE_SECRET_KEY: !!env('STRIPE_SECRET_KEY'),
  APP_URL: !!env('APP_URL'),
});

const supabase = createClient(
  env('SUPABASE_URL'),
  env('SUPABASE_SERVICE_ROLE_KEY') // service role: só o backend usa isso, nunca o front
);
const anthropic = new Anthropic({ apiKey: env('ANTHROPIC_API_KEY') });

// Resend é usado só para o e-mail de entrega assíncrona (FIX 4, abaixo).
// Qualquer provedor de e-mail transacional serve aqui; troquei por Resend
// por ser a integração mais simples de configurar.
const { Resend } = require('resend');
const resend = env('RESEND_API_KEY') ? new Resend(env('RESEND_API_KEY')) : null;

const FREE_ANON_LIMIT = 1;   // sem login: 1 geração, depois exige conta
const FREE_ACCOUNT_LIMIT = 3; // com conta: total de 3 gerações gratuitas

// Stripe webhook precisa do corpo bruto (raw), então essa rota é registrada
// ANTES do express.json() global.
app.post('/stripe-webhook', express.raw({ type: 'application/json' }), stripeWebhookHandler);

app.use(cors());
app.use(express.json({ limit: '1mb' }));

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------

// FIX 5: instrumentação de BI. Todo evento vira uma linha em
// analytics_events — nunca bloqueia o fluxo principal se falhar (por isso
// o catch silencioso: perder uma métrica é bem melhor que quebrar geração
// de curso ou pagamento por causa de tracking).
async function trackEvent(eventName, { userId, deviceId, sessionId, metadata } = {}) {
  try {
    await supabase.from('analytics_events').insert({
      event_name: eventName,
      user_id: userId || null,
      device_id: deviceId || null,
      session_id: sessionId || null,
      metadata: metadata || {},
    });
  } catch (err) {
    console.error(`[trackEvent] falha ao registrar "${eventName}":`, err.message);
  }
}

// Extrai o usuário autenticado (se houver) a partir do header Authorization.
// Retorna null se não houver sessão válida — o endpoint decide o que fazer.
async function getAuthedUser(req) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');
  if (!token) return null;
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user) return null;
  return data.user;
}

// FIX 1: contador de uso gratuito vive no banco, nunca no cliente.
// Tabela sugerida (ver schema.sql):
//   free_usage(id, user_id nullable, device_id nullable, used_count, updated_at)
// FIX: separado em "verificar" (só leitura, não gasta cota) e "confirmar
// consumo" (só chamado depois que a geração realmente deu certo). Antes,
// a cota era debitada ANTES de chamar a IA — se a chamada falhasse por
// qualquer motivo nosso (chave inválida, erro de rede, etc), a pessoa
// perdia a tentativa gratuita sem culpa dela.
async function checkFreeUsage({ userId, deviceId }) {
  const filterCol = userId ? 'user_id' : 'device_id';
  const filterVal = userId || deviceId;

  const { data: existing, error: selectErr } = await supabase
    .from('free_usage')
    .select('id, used_count')
    .eq(filterCol, filterVal)
    .maybeSingle();

  if (selectErr) throw selectErr;

  const limit = userId ? FREE_ACCOUNT_LIMIT : FREE_ANON_LIMIT;
  const currentCount = existing?.used_count ?? 0;

  return {
    allowed: currentCount < limit,
    remaining: Math.max(0, limit - currentCount),
    _existingId: existing?.id || null,
    _currentCount: currentCount,
  };
}

async function confirmFreeUsageConsumed({ userId, deviceId }, checkResult) {
  const filterCol = userId ? 'user_id' : 'device_id';
  const filterVal = userId || deviceId;
  const limit = userId ? FREE_ACCOUNT_LIMIT : FREE_ANON_LIMIT;

  if (checkResult._existingId) {
    const { error } = await supabase
      .from('free_usage')
      .update({ used_count: checkResult._currentCount + 1, updated_at: new Date().toISOString() })
      .eq('id', checkResult._existingId);
    if (error) throw error;
  } else {
    const { error } = await supabase
      .from('free_usage')
      .insert({ [filterCol]: filterVal, used_count: 1 });
    if (error) throw error;
  }
  return { remaining: limit - (checkResult._currentCount + 1) };
}

// FIX 2: chamada à IA com um retry automático se o JSON vier malformado —
// mesma lógica que já existe no frontend, replicada aqui como camada
// primária (o front só deveria precisar do dele em casos extremos).
function extractCourseJSON(rawText) {
  if (!rawText || typeof rawText !== 'string') throw new Error('Resposta vazia do modelo');
  const cleaned = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    const start = cleaned.indexOf('{');
    if (start === -1) throw new Error('O modelo não retornou um JSON válido');
    let depth = 0;
    for (let i = start; i < cleaned.length; i++) {
      if (cleaned[i] === '{') depth++;
      if (cleaned[i] === '}') depth--;
      if (depth === 0) {
        return JSON.parse(cleaned.slice(start, i + 1));
      }
    }
    throw new Error('O modelo não retornou um JSON válido');
  }
}

function validateCourse(course) {
  const errors = [];
  if (!course || typeof course !== 'object' || Array.isArray(course)) {
    errors.push('formato inválido');
    return errors;
  }
  if (!course.title) errors.push('faltando título');
  if (!Array.isArray(course.modules) || course.modules.length === 0) errors.push('nenhum módulo gerado');
  return errors;
}

async function callClaudeWithRetry(prompt, { maxTokens = 4096, trackContext = {} } = {}) {
  const attempt = async (promptToUse) => {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: maxTokens,
      messages: [{ role: 'user', content: promptToUse }],
    });
    const text = response.content
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n');
    return text;
  };

  const firstText = await attempt(prompt);
  try {
    const parsed = extractCourseJSON(firstText);
    const errors = validateCourse(parsed);
    if (errors.length === 0) {
      trackEvent('generation_success_first_try', trackContext);
      return parsed;
    }
    throw new Error(errors.join('; '));
  } catch (e) {
    // Retry único e automático com prompt corretivo — nunca cobramos o
    // usuário duas vezes por essa falha; é custo nosso, não dele.
    trackEvent('generation_needed_retry', { ...trackContext, metadata: { reason: e.message } });
    const correctivePrompt =
      prompt +
      `\n\nIMPORTANT: your previous response failed to parse as valid JSON (reason: "${e.message}"). ` +
      `Respond again with ONLY the raw JSON object described above — no markdown code fences, no commentary.`;
    const secondText = await attempt(correctivePrompt);
    const parsed = extractCourseJSON(secondText);
    const errors = validateCourse(parsed);
    if (errors.length > 0) throw new Error('Resposta incompleta: ' + errors.join('; '));
    return parsed;
  }
}

// ----------------------------------------------------------------------------
// POST /genera — fluxo gratuito
// ----------------------------------------------------------------------------
app.post('/genera', async (req, res) => {
  try {
    const { prompt, deviceId } = req.body;
    if (!prompt) return res.status(400).json({ error: 'prompt ausente' });

    const user = await getAuthedUser(req);

    if (!user && !deviceId) {
      return res.status(400).json({ error: 'deviceId obrigatório para uso anônimo' });
    }

    // FIX PRODUTO 1: assinante ativo com cota do mês disponível pula
    // inteiramente a lógica de free-tier — gera direto, sem gastar a cota
    // gratuita nem pedir pagamento avulso.
    const activeSub = user ? await getActiveSubscription(user.id) : null;
    if (activeSub) {
      if (activeSub.used_count >= activeSub.monthly_quota) {
        trackEvent('subscription_quota_esgotada', { userId: user.id });
        return res.status(403).json({ error: 'quota_mensile_esgotada', renewsAt: activeSub.current_period_end });
      }
      const course = await callClaudeWithRetry(prompt, { trackContext: { userId: user.id } });
      await incrementSubscriptionUsage(activeSub.id, activeSub.used_count);
      return res.json({
        text: JSON.stringify(course),
        subscriptionUsage: { used: activeSub.used_count + 1, quota: activeSub.monthly_quota },
      });
    }

    const usageCheck = await checkFreeUsage({
      userId: user?.id || null,
      deviceId: user ? null : deviceId,
    });

    if (!usageCheck.allowed) {
      trackEvent(user ? 'free_limit_reached' : 'login_gate_shown', {
        userId: user?.id,
        deviceId: user ? null : deviceId,
      });
      return res.status(403).json({
        error: user ? 'limite_gratuito_atingido' : 'login_necessario',
      });
    }

    const course = await callClaudeWithRetry(prompt, {
      trackContext: { userId: user?.id, deviceId: user ? null : deviceId },
    });

    // Só debita a cota gratuita AGORA que a geração deu certo de verdade.
    const { remaining } = await confirmFreeUsageConsumed(
      { userId: user?.id || null, deviceId: user ? null : deviceId },
      usageCheck
    );

    return res.json({ text: JSON.stringify(course), remaining });
  } catch (err) {
    console.error('[/genera]', err);
    return res.status(500).json({ error: err.message || 'erro interno' });
  }
});

// ----------------------------------------------------------------------------
// POST /track — eventos que só acontecem no client (preview visualizado na
// tela, resultado do quiz, cadastro completado após o gate de login).
// Lista fechada de eventos aceitos, para não virar um endpoint de "log
// qualquer coisa" sem controle.
// ----------------------------------------------------------------------------
const ALLOWED_CLIENT_EVENTS = new Set([
  'preview_shown',
  'quiz_passed',
  'quiz_failed',
  'login_gate_converted',
]);

app.post('/track', async (req, res) => {
  try {
    const { event, deviceId, sessionId, metadata } = req.body;
    if (!ALLOWED_CLIENT_EVENTS.has(event)) {
      return res.status(400).json({ error: 'evento não permitido' });
    }
    const user = await getAuthedUser(req);
    await trackEvent(event, { userId: user?.id, deviceId, sessionId, metadata });
    return res.json({ ok: true });
  } catch (err) {
    // Tracking nunca deve quebrar a experiência do usuário — loga e segue.
    console.error('[/track]', err);
    return res.json({ ok: false });
  }
});

// ----------------------------------------------------------------------------
// POST /genera-anteprima — preview do Módulo 1 (não consome cota gratuita,
// é a isca para o plano pago; sem alterações de política aqui)
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// GET /stats/course-count — contador ao vivo pro selo de confiança da hero.
// FIX DESIGN 5: número real, não inventado — soma generation_success_first_try
// + generation_needed_retry em analytics_events (toda geração bem-sucedida
// passa por um desses dois eventos). Cacheável por alguns minutos: não
// precisa ser exato ao segundo, só real.
// ----------------------------------------------------------------------------
let _courseCountCache = { count: null, at: 0 };
app.get('/stats/course-count', async (req, res) => {
  try {
    const CACHE_MS = 5 * 60 * 1000;
    if (_courseCountCache.count !== null && Date.now() - _courseCountCache.at < CACHE_MS) {
      return res.json({ count: _courseCountCache.count });
    }
    const { count, error } = await supabase
      .from('analytics_events')
      .select('id', { count: 'exact', head: true })
      .in('event_name', ['generation_success_first_try', 'generation_needed_retry']);
    if (error) throw error;
    _courseCountCache = { count: count || 0, at: Date.now() };
    return res.json({ count: count || 0 });
  } catch (err) {
    console.error('[/stats/course-count]', err);
    // Falha aqui nunca deve quebrar a landing — o frontend já trata
    // ausência de resposta mantendo o texto genérico.
    return res.status(500).json({ error: 'stats indisponível' });
  }
});

app.post('/genera-anteprima', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'prompt ausente' });
    const course = await callClaudeWithRetry(prompt, { maxTokens: 2048 });
    return res.json({ text: JSON.stringify(course) });
  } catch (err) {
    console.error('[/genera-anteprima]', err);
    return res.status(500).json({ error: err.message || 'erro interno' });
  }
});

// ----------------------------------------------------------------------------
// FIX MERCADO: POST /genera-struttura — gera SÓ título + subtítulo + títulos
// e resumos dos módulos (sem o conteúdo pesado de cada aula). É rápido e
// barato, então não gasta cota gratuita nem de assinatura — o objetivo é a
// pessoa aprovar o direcionamento antes de comprometer a geração completa
// (padrão comum em ferramentas de curso por IA: "veja a estrutura primeiro").
// Usa streaming de verdade (a Anthropic manda token a token) — o frontend
// mostra os títulos aparecendo ao vivo, em vez de uma tela de espera.
app.post('/genera-struttura', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'prompt ausente' });

    const structurePrompt = prompt +
      `\n\nIMPORTANT: for this request, respond with ONLY title, subtitle, categoria, and for each module ONLY title + a 1-sentence summary (no "content" field, no key_points, no quiz — just title and summary per module). Keep the same JSON structure otherwise, just omit those heavier fields.`;

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('X-Accel-Buffering', 'no'); // evita buffering em proxies (Railway/nginx)

    const stream = anthropic.messages.stream({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      messages: [{ role: 'user', content: structurePrompt }],
    });

    stream.on('text', (chunk) => { res.write(chunk); });
    stream.on('error', (err) => {
      console.error('[/genera-struttura] erro no stream:', err);
      if (!res.headersSent) res.status(500);
      res.end();
    });
    await stream.finalMessage();
    res.end();
  } catch (err) {
    console.error('[/genera-struttura]', err);
    if (!res.headersSent) return res.status(500).json({ error: err.message || 'erro interno' });
    res.end();
  }
});

// ----------------------------------------------------------------------------
// FIX GAP 2: POST /rigenera-modulo — reescreve SÓ um módulo já existente,
// mantendo coerência com o resto do curso (recebe título do curso + títulos
// dos outros módulos como contexto), sem precisar regenerar tudo de novo.
// Contrato de resposta é mais enxuto que o do curso completo: só o que
// aquele módulo precisa pra ser re-renderizado.
// ----------------------------------------------------------------------------
function validateModuleJSON(mod) {
  const errors = [];
  if (!mod || typeof mod !== 'object' || Array.isArray(mod)) { errors.push('formato inválido'); return errors; }
  if (!mod.content) errors.push('faltando content');
  return errors;
}

async function regenerateModuleWithRetry(prompt) {
  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 2048,
    messages: [{ role: 'user', content: prompt }],
  });
  const text = response.content.filter(b => b.type === 'text').map(b => b.text).join('\n');
  try {
    const parsed = extractCourseJSON(text);
    const errors = validateModuleJSON(parsed);
    if (errors.length === 0) return parsed;
    throw new Error(errors.join('; '));
  } catch (e) {
    const correctivePrompt = prompt + `\n\nIMPORTANT: your previous response failed to parse as valid JSON (reason: "${e.message}"). Respond again with ONLY the raw JSON object — no markdown, no commentary.`;
    const response2 = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 2048,
      messages: [{ role: 'user', content: correctivePrompt }],
    });
    const text2 = response2.content.filter(b => b.type === 'text').map(b => b.text).join('\n');
    const parsed2 = extractCourseJSON(text2);
    const errors2 = validateModuleJSON(parsed2);
    if (errors2.length > 0) throw new Error('Resposta incompleta: ' + errors2.join('; '));
    return parsed2;
  }
}

app.post('/rigenera-modulo', async (req, res) => {
  try {
    const { courseTitle, moduleTitle, moduleIndex, totalModules, otherModuleTitles, langName } = req.body;
    if (!courseTitle || !moduleTitle) return res.status(400).json({ error: 'dados insuficientes' });

    const lang = langName || 'Italian';
    const contextLine = (otherModuleTitles && otherModuleTitles.length)
      ? `The other modules in this course are titled: ${otherModuleTitles.join('; ')}. Keep this module distinct from those — don't repeat their content.`
      : '';

    const prompt = `You are an instructional designer rewriting ONE module of an existing micro-course, without touching the rest of the course.
Course title: ${courseTitle}
This is module ${(moduleIndex || 0) + 1} of ${totalModules || '?'}, titled: "${moduleTitle}"
${contextLine}

Rewrite this module's teaching content from scratch — a fresh take, different wording and examples than before, but following this exact 5-part pedagogical structure, in ${lang}: (1) THE HOOK — a real relatable problem this module solves, in the first 2-3 sentences; (2) THE CONCEPT — explain the underlying idea simply; (3) THE STEP-BY-STEP — a practical method to follow; (4) THE EXAMPLE — a concrete case study; (5) THE CHALLENGE — one specific actionable task, plus a one-line bridge to what's next. Length: 700-1000 words max.

Respond ONLY with a valid JSON object, no text before or after, no markdown, with this exact structure:
{
  "content": "the full module content, in ${lang}, following the 5-part structure above",
  "key_points": ["key point 1", "key point 2", "key point 3"] (in ${lang}),
  "quiz_question": "a relevant check-in question, in ${lang}, tied to THE CHALLENGE or THE CONCEPT",
  "quiz_answer": "short correct answer, in ${lang}"
}`;

    const result = await regenerateModuleWithRetry(prompt);
    trackEvent('module_regenerated', { metadata: { moduleIndex } });
    return res.json(result);
  } catch (err) {
    console.error('[/rigenera-modulo]', err);
    return res.status(500).json({ error: err.message || 'erro interno' });
  }
});

// ----------------------------------------------------------------------------
// POST /crea-pagamento — cria a sessão de checkout no Stripe
// ----------------------------------------------------------------------------
app.post('/crea-pagamento', async (req, res) => {
  if (!stripe) return res.status(503).json({ error: 'pagamento_nao_configurado' });
  try {
    const { plan, prompt, currency } = req.body;
    // FIX PRODUTO 3: escolhe o Price ID pelo par moeda+plano, com fallback
    // pro Price ID antigo (EUR) se a moeda não tiver preço-base configurado.
    const priceId = getRegionPriceId((currency || 'EUR').toUpperCase(), plan) || PLAN_TO_PRICE_ID[plan];
    if (!priceId) return res.status(400).json({ error: 'plano inválido' });

    const user = await getAuthedUser(req);

    // FIX 3 (parte 1): guardamos o prompt já agora, associado ao
    // session.id que o Stripe vai gerar — não dependemos do sessionStorage
    // do navegador sobreviver até o usuário voltar da tela de pagamento.
    // Também coletamos e-mail no próprio Checkout do Stripe, mesmo para
    // quem não tem conta — é o que permite a entrega assíncrona (FIX 4)
    // independente do usuário voltar ao site.
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: user?.email || undefined,
      // FIX: descobrimos que combinar {CHECKOUT_SESSION_ID} com outro
      // parâmetro ANTES dele na mesma URL ("paid=1&session_id=...") quebra
      // a validação do Stripe ("Not a valid URL") — mesmo sendo sintaxe
      // documentada oficialmente. Sozinho (ou por último), funciona.
      success_url: `${env('APP_URL')}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${env('APP_URL')}?paid=0`,
      metadata: { user_id: user?.id || '' },
    });

    const { error } = await supabase.from('pending_generations').insert({
      session_id: session.id,
      plan,
      prompt,
      user_id: user?.id || null,
      status: 'pending_payment',
    });
    if (error) throw error;

    trackEvent('checkout_created', { userId: user?.id, sessionId: session.id, metadata: { plan } });

    return res.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    console.error('[/crea-pagamento]', err);
    return res.status(500).json({ error: err.message || 'erro interno' });
  }
});

// ----------------------------------------------------------------------------
// FIX 4: geração + entrega assíncrona, disparada diretamente pelo webhook.
// Não depende do usuário voltar ao site: se o pagamento foi confirmado,
// o curso é gerado e entregue por e-mail de qualquer forma.
// Idempotente — reaproveita o resultado se /genera-premium já tiver
// gerado antes (ex.: o usuário voltou ao site rápido o suficiente).
// ----------------------------------------------------------------------------
async function generateAndDeliverCourse({ sessionId, prompt, userId, customerEmail, plan }) {
  try {
    const { data: pending } = await supabase
      .from('pending_generations')
      .select('status, course_json')
      .eq('session_id', sessionId)
      .maybeSingle();

    let course = pending?.course_json;

    if (!course) {
      course = await callClaudeWithRetry(prompt, { maxTokens: 8192 });
      await supabase
        .from('pending_generations')
        .update({ status: 'completed', course_json: course })
        .eq('session_id', sessionId);
    }

    if (userId) {
      await supabase.from('purchases').insert({
        user_id: userId,
        title: course.title || '',
        plan,
        course,
      });
    }

    if (resend && customerEmail) {
      await resend.emails.send({
        from: env('EMAIL_FROM') || 'Corsificio <noreply@corsificio.com>',
        to: customerEmail,
        subject: `O seu curso "${course.title || 'Corsificio'}" está pronto`,
        html: buildDeliveryEmailHtml({ course, sessionId, userId }),
      });
    } else if (!resend) {
      console.warn('[generateAndDeliverCourse] RESEND_API_KEY não configurada — pulando envio de e-mail');
    }
  } catch (err) {
    // Isso roda fora do ciclo de request/response do webhook, então o
    // erro precisa ser logado com contexto suficiente para investigação
    // manual — o Stripe já recebeu 200 e não vai reenviar o evento.
    console.error(`[generateAndDeliverCourse] falha para session ${sessionId}:`, err);
    await supabase
      .from('pending_generations')
      .update({ status: 'generation_failed', last_error: err.message })
      .eq('session_id', sessionId);

    // FIX 6: alerta em tempo real pro time — isso é dinheiro do cliente já
    // recebido e um curso que não foi entregue, então merece notificação
    // imediata, não só uma linha no banco esperando alguém olhar depois.
    await alertTeamOfFailure({
      sessionId,
      userId,
      customerEmail,
      reason: err.message,
    });
  }
}

// FIX 6: alerta de falha via webhook genérico — funciona com Slack, Discord
// e Microsoft Teams (todos aceitam um POST simples com {"text": "..."} ou
// equivalente; Slack/Discord usam "text", ajuste ALERT_WEBHOOK_FORMAT se o
// canal de vocês exigir outro payload). Sem ALERT_WEBHOOK_URL configurada,
// o alerta vira só um log — não quebra o fluxo principal.
async function alertTeamOfFailure({ sessionId, userId, customerEmail, reason }) {
  if (!env('ALERT_WEBHOOK_URL')) {
    console.warn('[alertTeamOfFailure] ALERT_WEBHOOK_URL não configurada — alerta ficou só no log/banco');
    return;
  }
  const text =
    `🚨 *Falha na geração de um curso pago*\n` +
    `Session: \`${sessionId}\`\n` +
    `Cliente: ${customerEmail || '(sem e-mail)'} ${userId ? `(user_id: ${userId})` : '(sem conta)'}\n` +
    `Motivo: ${reason}\n` +
    `Ação: reprocessar chamando /genera-premium com esse sessionId, ou investigar em pending_generations.`;
  try {
    await fetch(env('ALERT_WEBHOOK_URL'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
  } catch (alertErr) {
    // Se até o alerta falhar, não há mais rede de segurança automática —
    // por isso o registro em pending_generations.last_error (acima) é a
    // fonte de verdade que sobrevive independente disso funcionar.
    console.error('[alertTeamOfFailure] falha ao enviar webhook de alerta:', alertErr.message);
  }
}

function buildDeliveryEmailHtml({ course, sessionId, userId }) {
  const modulesList = (course.modules || [])
    .map((m, i) => `<li><strong>Módulo ${i + 1}:</strong> ${escapeHtml(m.title || '')}</li>`)
    .join('');
  const accessLine = userId
    ? `Ele já está salvo na sua conta — acesse em ${env('APP_URL')}?tab=account`
    : `Guarde este e-mail: seu curso não está vinculado a uma conta. Se quiser criar uma para acessá-lo depois, cadastre-se com este mesmo e-mail em ${env('APP_URL')}`;
  return `
    <h2>${escapeHtml(course.title || 'Seu curso')}</h2>
    <p>${escapeHtml(course.subtitle || '')}</p>
    <ul>${modulesList}</ul>
    <p>${accessLine}</p>
    <p style="color:#888;font-size:12px">Referência do pedido: ${sessionId}</p>
  `;
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ----------------------------------------------------------------------------
// POST /genera-premium — gera o curso completo após confirmação de pagamento
// ----------------------------------------------------------------------------
app.post('/genera-premium', async (req, res) => {
  if (!stripe) return res.status(503).json({ error: 'pagamento_nao_configurado' });
  try {
    const { sessionId } = req.body;
    if (!sessionId) return res.status(400).json({ error: 'sessionId ausente' });

    const { data: pending, error: fetchErr } = await supabase
      .from('pending_generations')
      .select('*')
      .eq('session_id', sessionId)
      .maybeSingle();

    if (fetchErr) throw fetchErr;
    if (!pending) return res.status(404).json({ error: 'sessão não encontrada' });

    // FIX 3 (parte 2): nunca confiamos apenas em "o usuário voltou do
    // Stripe com paid=1" — verificamos o status real da sessão. Isso
    // impede geração/liberação de conteúdo sem pagamento confirmado.
    if (pending.status === 'completed' && pending.course_json) {
      // Idempotência: se já foi gerado (ex.: o usuário deu F5), devolve o
      // mesmo resultado em vez de chamar a IA (e cobrar) de novo.
      return res.json({ course: pending.course_json });
    }

    const stripeSession = await stripe.checkout.sessions.retrieve(sessionId);
    if (stripeSession.payment_status !== 'paid') {
      return res.status(402).json({ error: 'pagamento_nao_confirmado' });
    }

    const course = await callClaudeWithRetry(pending.prompt, { maxTokens: 8192 });

    await supabase
      .from('pending_generations')
      .update({ status: 'completed', course_json: course })
      .eq('session_id', sessionId);

    return res.json({ course });
  } catch (err) {
    console.error('[/genera-premium]', err);
    // FIX 6: mesmo alerta do fluxo assíncrono — aqui o pagamento também já
    // está confirmado (checamos acima), então uma falha aqui é igualmente
    // "dinheiro recebido, curso não entregue".
    alertTeamOfFailure({
      sessionId: req.body?.sessionId,
      reason: err.message,
    }).catch(() => {});
    return res.status(500).json({ error: err.message || 'erro interno' });
  }
});

// ----------------------------------------------------------------------------
// Stripe webhook — fonte da verdade sobre pagamentos aprovados.
// Isso é o que resolve de vez o cenário "paguei mas fechei a aba antes da
// IA responder": mesmo que o usuário nunca volte, o webhook já marca a
// sessão como paga e paga zero risco de "leak" de conteúdo sem pagamento.
// ----------------------------------------------------------------------------
async function stripeWebhookHandler(req, res) {
  if (!stripe) return res.status(503).send('pagamento_nao_configurado');
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, env('STRIPE_WEBHOOK_SECRET'));
  } catch (err) {
    console.error('[stripe-webhook] assinatura inválida', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // FIX PRODUTO 1: checkout de assinatura é um fluxo separado do de
    // curso avulso — não tem pending_generations, o que existe é ativar
    // a linha em `subscriptions` vinculada ao usuário.
    if (session.mode === 'subscription') {
      const userId = session.metadata?.user_id || null;
      if (!userId) {
        console.error('[stripe-webhook] checkout de assinatura sem user_id no metadata, sessão', session.id);
      } else {
        try {
          const sub = await stripe.subscriptions.retrieve(session.subscription);
          await supabase.from('subscriptions').upsert({
            user_id: userId,
            stripe_customer_id: session.customer,
            stripe_subscription_id: sub.id,
            status: sub.status,
            plan_type: 'professionale_mensile',
            monthly_quota: 15,
            used_count: 0,
            current_period_start: new Date(sub.current_period_start * 1000).toISOString(),
            current_period_end: new Date(sub.current_period_end * 1000).toISOString(),
            updated_at: new Date().toISOString(),
          }, { onConflict: 'user_id' });
          trackEvent('subscription_started', { userId, metadata: { subscriptionId: sub.id } });
        } catch (err) {
          console.error('[stripe-webhook] falha ao ativar assinatura', err);
        }
      }
      return res.json({ received: true });
    }

    const { data: pending } = await supabase
      .from('pending_generations')
      .select('prompt, plan, user_id')
      .eq('session_id', session.id)
      .maybeSingle();

    await supabase
      .from('pending_generations')
      .update({ status: 'paid_awaiting_generation' })
      .eq('session_id', session.id);

    trackEvent('payment_completed', {
      userId: pending?.user_id,
      sessionId: session.id,
      metadata: { plan: pending?.plan },
    });

    // FIX 4: responde 200 ao Stripe IMEDIATAMENTE (linha abaixo) e só
    // depois dispara a geração+entrega em background. O Stripe tem um
    // timeout curto para o webhook responder — não podemos fazer o
    // usuário (ou o Stripe) esperar a IA gerar 8k tokens aqui dentro.
    if (pending) {
      generateAndDeliverCourse({
        sessionId: session.id,
        prompt: pending.prompt,
        userId: pending.user_id || null,
        customerEmail: session.customer_details?.email || session.customer_email || null,
        plan: pending.plan,
      }).catch((err) => console.error('[stripe-webhook] geração em background falhou:', err));
    } else {
      console.error(`[stripe-webhook] pending_generations não encontrado para session ${session.id}`);
    }
  }

  // FIX PRODUTO 1: renovação de ciclo — reseta a cota usada quando um novo
  // período de cobrança começa. Também cobre mudança de status (ex: cartão
  // recusado -> past_due).
  if (event.type === 'customer.subscription.updated') {
    const sub = event.data.object;
    const { data: existing } = await supabase
      .from('subscriptions')
      .select('current_period_start, used_count')
      .eq('stripe_subscription_id', sub.id)
      .maybeSingle();

    const newPeriodStart = new Date(sub.current_period_start * 1000).toISOString();
    const isNewPeriod = !existing || existing.current_period_start !== newPeriodStart;

    await supabase
      .from('subscriptions')
      .update({
        status: sub.status,
        current_period_start: newPeriodStart,
        current_period_end: new Date(sub.current_period_end * 1000).toISOString(),
        used_count: isNewPeriod ? 0 : (existing?.used_count ?? 0),
        updated_at: new Date().toISOString(),
      })
      .eq('stripe_subscription_id', sub.id);
  }

  if (event.type === 'customer.subscription.deleted') {
    const sub = event.data.object;
    await supabase
      .from('subscriptions')
      .update({ status: 'canceled', updated_at: new Date().toISOString() })
      .eq('stripe_subscription_id', sub.id);
  }

  res.json({ received: true });
}

// ============================================================================
// FIX PRODUTO 1: assinatura mensal — helpers e endpoints
// ============================================================================

async function getActiveSubscription(userId) {
  if (!userId) return null;
  const { data, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'active')
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function incrementSubscriptionUsage(subscriptionRowId, currentUsedCount) {
  const { error } = await supabase
    .from('subscriptions')
    .update({ used_count: currentUsedCount + 1, updated_at: new Date().toISOString() })
    .eq('id', subscriptionRowId);
  if (error) throw error;
}

app.post('/crea-abbonamento', async (req, res) => {
  if (!stripe) return res.status(503).json({ error: 'pagamento_nao_configurado' });
  try {
    const user = await getAuthedUser(req);
    if (!user) return res.status(401).json({ error: 'login_necessario' });

    const currency = (req.body.currency || 'EUR').toUpperCase();
    const priceId = getRegionPriceId(currency, 'abbonamento');
    if (!priceId) return res.status(400).json({ error: 'plano_indisponivel' });

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: user.email || undefined,
      success_url: `${env('APP_URL')}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${env('APP_URL')}?sub=0`,
      metadata: { user_id: user.id },
    });

    return res.json({ url: session.url });
  } catch (err) {
    console.error('[/crea-abbonamento]', err);
    return res.status(500).json({ error: err.message || 'erro interno' });
  }
});

// Portal do Stripe: cancelamento/upgrade/downgrade/troca de cartão ficam
// inteiramente a cargo do Stripe — não precisamos construir nada disso.
app.post('/portale-cliente', async (req, res) => {
  if (!stripe) return res.status(503).json({ error: 'pagamento_nao_configurado' });
  try {
    const user = await getAuthedUser(req);
    if (!user) return res.status(401).json({ error: 'login_necessario' });

    const { data: sub } = await supabase
      .from('subscriptions')
      .select('stripe_customer_id')
      .eq('user_id', user.id)
      .maybeSingle();

    if (!sub?.stripe_customer_id) return res.status(404).json({ error: 'assinatura_nao_encontrada' });

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: sub.stripe_customer_id,
      return_url: env('APP_URL'),
    });

    return res.json({ url: portalSession.url });
  } catch (err) {
    console.error('[/portale-cliente]', err);
    return res.status(500).json({ error: err.message || 'erro interno' });
  }
});

app.get('/assinatura/stato', async (req, res) => {
  try {
    const user = await getAuthedUser(req);
    if (!user) return res.status(401).json({ error: 'login_necessario' });
    const sub = await getActiveSubscription(user.id);
    if (!sub) return res.json({ active: false });
    return res.json({
      active: true,
      usedCount: sub.used_count,
      monthlyQuota: sub.monthly_quota,
      currentPeriodEnd: sub.current_period_end,
    });
  } catch (err) {
    console.error('[/assinatura/stato]', err);
    return res.status(500).json({ error: err.message || 'erro interno' });
  }
});

// ----------------------------------------------------------------------------
// FIX PRODUTO (vertical por nicho): lê/salva a vertical preferida do modo
// profissional (saúde, fitness, negócios, coaching), pra sugerir de novo
// automaticamente da próxima vez que a pessoa gerar um curso profissional.
// ----------------------------------------------------------------------------
const ALLOWED_VERTICALS = new Set(['salute', 'fitness', 'business', 'coaching']);

app.get('/profilo/vertical', async (req, res) => {
  try {
    const user = await getAuthedUser(req);
    if (!user) return res.status(401).json({ error: 'login_necessario' });
    const { data, error } = await supabase
      .from('user_profiles')
      .select('preferred_vertical')
      .eq('user_id', user.id)
      .maybeSingle();
    if (error) throw error;
    return res.json({ preferredVertical: data?.preferred_vertical || null });
  } catch (err) {
    console.error('[/profilo/vertical GET]', err);
    return res.status(500).json({ error: err.message || 'erro interno' });
  }
});

app.post('/profilo/vertical', async (req, res) => {
  try {
    const user = await getAuthedUser(req);
    if (!user) return res.status(401).json({ error: 'login_necessario' });
    const { vertical } = req.body;
    if (vertical !== null && !ALLOWED_VERTICALS.has(vertical)) {
      return res.status(400).json({ error: 'vertical_invalida' });
    }
    const { error } = await supabase.from('user_profiles').upsert({
      user_id: user.id,
      preferred_vertical: vertical,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id' });
    if (error) throw error;
    return res.json({ ok: true });
  } catch (err) {
    console.error('[/profilo/vertical POST]', err);
    return res.status(500).json({ error: err.message || 'erro interno' });
  }
});

// ============================================================================
// FIX PRODUTO 2: certificados públicos — endpoints
// ============================================================================

function generateCertSlug() {
  return Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4);
}

app.post('/certificato/pubblica', async (req, res) => {
  try {
    const { courseTitle, studentName, completionDate, moduleCount } = req.body;
    if (!courseTitle || !studentName) return res.status(400).json({ error: 'dados insuficientes' });

    const user = await getAuthedUser(req); // opcional — funciona também no fluxo gratuito sem login
    const slug = generateCertSlug();

    const { error } = await supabase.from('public_certificates').insert({
      slug,
      user_id: user?.id || null,
      course_title: courseTitle,
      student_name: studentName,
      completion_date: completionDate || new Date().toISOString(),
      module_count: moduleCount || null,
    });
    if (error) throw error;

    trackEvent('certificate_shared', { userId: user?.id, metadata: { slug } });
    return res.json({ slug, url: `${env('APP_URL')}?cert=${slug}` });
  } catch (err) {
    console.error('[/certificato/pubblica]', err);
    return res.status(500).json({ error: err.message || 'erro interno' });
  }
});

app.get('/certificato/:slug', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('public_certificates')
      .select('course_title, student_name, completion_date, module_count')
      .eq('slug', req.params.slug)
      .maybeSingle();
    if (error) throw error;
    if (!data) return res.status(404).json({ error: 'certificado_nao_encontrado' });
    return res.json(data);
  } catch (err) {
    console.error('[/certificato/:slug]', err);
    return res.status(500).json({ error: err.message || 'erro interno' });
  }
});

// ============================================================================
// FIX PRODUTO 3: preço-base por região/moeda
// ============================================================================
// Cada moeda tem seu próprio conjunto de Price IDs no Stripe (preço-base
// diferente, não conversão cambial do mesmo valor). O valor numérico em si
// é configurado direto no Stripe — aqui só mapeamos qual Price ID usar.
const REGION_PRICE_MAP = {
  EUR: {
    completo: env('STRIPE_PRICE_COMPLETO_EUR') || env('STRIPE_PRICE_COMPLETO'),
    professionale: env('STRIPE_PRICE_PROFESSIONALE_EUR') || env('STRIPE_PRICE_PROFESSIONALE'),
    abbonamento: env('STRIPE_PRICE_ABBONAMENTO_EUR'),
  },
  USD: {
    completo: env('STRIPE_PRICE_COMPLETO_USD') || env('STRIPE_PRICE_COMPLETO'),
    professionale: env('STRIPE_PRICE_PROFESSIONALE_USD') || env('STRIPE_PRICE_PROFESSIONALE'),
    abbonamento: env('STRIPE_PRICE_ABBONAMENTO_USD') || env('STRIPE_PRICE_ABBONAMENTO_EUR'),
  },
  default: {
    completo: env('STRIPE_PRICE_COMPLETO'),
    professionale: env('STRIPE_PRICE_PROFESSIONALE'),
    abbonamento: env('STRIPE_PRICE_ABBONAMENTO_EUR'),
  },
};

function getRegionPriceId(currency, planKey) {
  const region = REGION_PRICE_MAP[currency] || REGION_PRICE_MAP.default;
  return region[planKey] || REGION_PRICE_MAP.default[planKey];
}

const PLAN_TO_PRICE_ID = {
  completo: env('STRIPE_PRICE_COMPLETO'),
  professionale: env('STRIPE_PRICE_PROFESSIONALE'),
};

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Corsificio backend rodando na porta ${port}`));
