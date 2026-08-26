<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Corsificio — genera micro-corsi con l'IA</title>
<link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEZklEQVR4nMVXTWhcVRT+zn0/M9NOXpqKIA3dlGoxlSIMZCFKKAoWo7UWUpAiQoUIQjeF4kZ4HdwUwYV21a5cSoq0m9K4nC7cuShitNaFtWlJS9tJ8zc/993zuXgzySRO5q+IB87q3fPuOd/5vnPvBf5nk87f2EM4AUi3hf1ZHMdmgLBOxfQeFMexKRaLOjEV53Mv7DZPnjwBsLttsJ+pMtq5R2YvfLQEACAF0h8amxOIaVAUfePj85NBNvedOuuT3BYNAur5GUNnS7y9dLxUKiYApZ+WbCQwNeNhZkpfP/X1ZBgEVwj6VAdIZ2SpiiC3E7ayes3SffjT3rVVFM+x1yQa1VFw+YS+9slXec/ge4K+c9aRJNV1dACsry3XMvldkz680ygWtTB9ye8VgVZ4mdSyAtBRHSX9JikEnRwiEOOsVQIZAFIp3xf0SMr2/ZUuuENafD3EGCIBwLmZcxYbGu74r77kJiIgCdK1uKauDk5dbv+R09HYiTMj4yfjqBHGlJjbl4Imc8dPfhPlsvW7Yrwo7e8GEmI81CvLWC0/bF+UAKTWQNYIUc8LDF1Surn6y3GUSgk2ptYACIhBvbKMlccLoDYq3oqCcwAlI+JFRswudTbywux7h/KvXD1w9NQQELflRQ8JCKhJWnmDcuslt/JA0gJJJakEQFtfq4XZocnQZU8DRS0Upv+ljp7l0sekbVkoRhOr0IY6KuVmxuut6COBHvZt12VjjBiTAOCvczNWNgaUAGg3ZsX1vbWYlAvOgbrFXQJn67nd+8ejvWNvj+wfP9KijvWGpiooTF0czkdLjyFGQG0OG5AOTx/cBemwCWECxvdRXVnEysP5bbokIF0NRI2EijFGyBvzc88dAy67BgJCxLF5ulytErgeZHcYknWQNnXYtr82BtWVRSwt3IGqSxXSBgEQGYhEYmQXqJH4wbujLz+6cuDA0aHWcgQAJibOeXgxuprZOTyptg404H105xbIppzXK0P571ugatdDC63sIK0XZEJna1+2kFAIUNIjNT52+CVzlmSoqlC6DOnOAJJp9m5TF3sTyCZ1kE5JZtqFtp1Yh975bFHEG25oPOWGOpTn/wB1Cze6GZEY3/ddYs+3kyEBSGH6ol8p35fcyB5Wyr8PYaXGwS5dnW27OcCfL31q0UBj31ufu3xQHyKpGPDut511G8UEYmP8taoIr/th1gCsE7BN/68TAFDkn7MX6jdXn/8gsZVrYS7K+EE2CMJcEITZ4FkT6BXOlJgTE/6r+UNnlQwBwCX1zOK922dAbFZHN2shYT/9bKuO0bHDixAZBjlQAv0cRqk6CtN+pVKWXG6EDyp/DRF20FcRIdRBGS0AOLKvMLwjGz1Gu0tix61pjR8GztlvB3mCNc2UzdMqgVnjh4bpmZF0cxJWjPFVXSLEj8+i6UbshDd60PvBeMFRqvZwJAhIrSdq31+YK80+61BpEtMfPfjmFwRDqLYkt2WxiBPP95jUbtz77cb1QqEQ/AMeyoy3CCR9+AAAAABJRU5ErkJggg==">
<meta name="theme-color" content="#2E4A6B">
<meta name="description" content="Descrivi un argomento e ottieni un micro-corso completo in pochi secondi: moduli, lezioni, quiz e certificato. Gratis per iniziare.">
<meta property="og:type" content="website">
<meta property="og:title" content="Corsificio — genera micro-corsi con l'IA">
<meta property="og:description" content="Descrivi un argomento e ottieni un micro-corso completo in pochi secondi: moduli, lezioni, quiz e certificato. Gratis per iniziare.">
<!-- FIX SEO: og:image precisa de uma URL http(s) real e hospedada -->
<!-- (crawlers do WhatsApp/X/LinkedIn não renderizam data: URIs). -->
<!-- Trocar pelo caminho real assim que o domínio estiver no ar, ex: -->
<!-- <meta property="og:image" content="https://corsificio.com/og-image.png"> -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Corsificio — genera micro-corsi con l'IA">
<meta name="twitter:description" content="Descrivi un argomento e ottieni un micro-corso completo in pochi secondi: moduli, lezioni, quiz e certificato.">
<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=Nunito+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

:root{
  --bg: #F4F5F8;
  --surface: #FFFFFF;
  --surface-2: #E8EBF1;
  --card-bg: #FFFFFF;
  --ink: #1E2A3A;
  --ink-dim: #5B6B7F;
  --brass: #2E4A6B;
  --brass-bright: #3F638C;
  --brass-dim: #1B2A41;
  --on-brass: #FFFFFF;
  --rust: #A8763A;
  --rust-bright: #C89257;
  --line: rgba(30,42,56,0.13);
  --error-bg: #FBEBE3;
  --error-border: #E3B090;
  --error-text: #8A3D19;
}

*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
html,body{margin:0;padding:0;}
body{
  background: var(--bg);
  color: var(--ink);
  font-family: 'Nunito Sans', sans-serif;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

.wrap{
  max-width: 1400px;
  margin: 0 auto;
  padding: 64px clamp(24px, 4vw, 64px) 110px;
}

/* ---------- HERO ---------- */
@keyframes fadeInUp{
  from{ opacity:0; transform: translateY(16px); }
  to{ opacity:1; transform: translateY(0); }
}
.hero{
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:32px;
  flex-wrap:wrap;
  padding-bottom: 0;
  border-bottom: none;
  margin-bottom: 64px;
  position: relative;
}
.hero-pattern{
  content:'';
  position:absolute;
  top:-10px; right:-10px;
  width:140px; height:140px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'%3E%3Crect x='7' y='7' width='24' height='24' rx='5' fill='%233F638C'/%3E%3Crect x='17' y='17' width='24' height='24' rx='5' fill='%232E4A6B'/%3E%3Crect x='27' y='27' width='24' height='24' rx='5' fill='%231B2A41'/%3E%3C/svg%3E");
  background-repeat:no-repeat;
  background-size:contain;
  opacity:0.035;
  pointer-events:none;
  z-index:0;
  transform: rotate(0deg);
  will-change: transform;
}
.hero > div:not(.hero-pattern){ position:relative; z-index:1; animation: fadeInUp 0.6s ease both; }
.hero-meta{ position:relative; z-index:1; animation: fadeInUp 0.6s ease 0.1s both; }
.stamp{
  display:inline-flex;
  align-items:center;
  gap:10px;
  font-family:'IBM Plex Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--brass);
  border: 1px solid var(--brass);
  padding: 5px 10px;
  border-radius: 3px;
  margin-bottom: 22px;
}
.stamp::before{ content:"●"; font-size:8px; }
h1.title{
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: clamp(42px, 6.4vw, 68px);
  line-height: 1.04;
  margin: 0 0 20px;
  letter-spacing: -0.01em;
  color: var(--ink);
}
h1.title em{
  font-style: italic;
  font-weight: 400;
  color: var(--brass);
  position: relative;
}
.hero p.sub{
  max-width: 480px;
  color: var(--ink-dim);
  font-size: 17px;
  line-height: 1.65;
  margin: 0;
}
.header-lockup{
  display:flex; flex-direction:row; align-items:center; gap:12px;
}
.header-lockup .seal-glow-wrap{ position:relative; display:flex; }
.header-lockup .seal-glow-wrap::before{
  content:''; position:absolute; z-index:-1; width:70px; height:70px; border-radius:50%;
  background:var(--brass-bright); filter:blur(20px); opacity:0.3;
  top:50%; left:50%; transform:translate(-50%,-50%); pointer-events:none;
}

/* ---------- selo 3D riutilizzabile: sostituisce il PNG piatto con vera profondità ---------- */
/* v2: "scala diagonale" — 3 moduli che salgono a gradini fissi (rappresenta i moduli
   di un corso che si accumulano), invece di quadrati sparsi casualmente. Distinto da
   loghi "a barre orizzontali" (es. Runway) perché mantiene la diagonale caratteristica
   del segno originale. */
.seal-3d{ position:relative; display:inline-block; filter: drop-shadow(0 6px 10px rgba(27,42,65,0.28)); }
.seal-3d .sq{ position:absolute; border-radius:22%; overflow:hidden; }
.seal-3d .sq1{ width:47%; height:47%; top:14%; left:14%; background:var(--brass-bright); box-shadow:2px 3px 5px rgba(27,42,65,0.35); }
.seal-3d .sq2{ width:47%; height:47%; top:32%; left:32%; background:var(--brass); box-shadow:2px 3px 5px rgba(27,42,65,0.4); }
.seal-3d .sq3{ width:47%; height:47%; top:50%; left:50%; background:var(--brass-dim); box-shadow:2px 4px 7px rgba(0,0,0,0.3); }
.seal-3d .sq1::after, .seal-3d .sq2::after, .seal-3d .sq3::after{
  content:''; position:absolute; inset:0;
  background: linear-gradient(135deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.12) 28%, rgba(255,255,255,0) 55%);
}
.seal-3d .sq3::after{ background: linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 28%, rgba(255,255,255,0) 55%); }
.empty-state-seal{ animation: sealFloat 3.2s ease-in-out infinite; }
@keyframes sealFloat{ 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-6px); } }

.hero-rotator{
  margin-top: 16px;
  font-family:'IBM Plex Mono', monospace;
  font-size: 12.5px;
  letter-spacing: 0.04em;
  color: var(--brass);
  min-height: 18px;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.hero-rotator::before{ content: '✦ '; }
.hero-rotator.show{ opacity: 1; transform: translateY(0); }

.hero-cta{
  margin-top: 26px; display:inline-block;
  font-family:'Nunito Sans',sans-serif; font-weight:700; font-size: 14.5px;
  color: var(--on-brass); border:none; cursor:pointer;
  padding: 13px 26px; border-radius: 14px;
  background: linear-gradient(135deg, var(--brass), var(--brass-bright), var(--rust-bright), var(--brass));
  background-size: 300% 300%;
  animation: btnGradientMove 5s ease infinite;
  box-shadow: 0 6px 16px color-mix(in srgb, var(--brass) 25%, transparent);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.hero-cta:hover{ transform: translateY(-2px); box-shadow: 0 10px 22px color-mix(in srgb, var(--brass) 32%, transparent); }
.hero-cta:active{ transform: translateY(0); }

.diff-strip{  display:flex; flex-wrap:wrap; justify-content:center; gap:10px;
  margin: 0 0 40px; padding: 0 4px;
}
.diff-chip{
  display:inline-flex; align-items:center; gap:7px;
  font-family:'Nunito Sans', sans-serif; font-weight:600; font-size:12.5px;
  color: var(--ink-dim); background: var(--surface);
  border:1px solid var(--line); border-radius:999px;
  padding: 8px 14px; white-space:nowrap;
  transition: border-color 0.15s ease, color 0.15s ease, transform 0.15s ease;
}
.diff-chip:hover{ border-color: var(--brass); color: var(--brass); transform: translateY(-1px); }
.diff-chip-ico{ font-size:13px; }

.stats-strip-wrap{
  margin: 0 0 40px;
}
.stats-strip{
  display:flex; flex-wrap:wrap; justify-content:center; gap:10px 8px;
}
@media (max-width: 640px){ .stats-strip{ gap:8px 6px; } }
.stat-item{
  position:relative;
  display:inline-flex; align-items:baseline; gap:5px;
  font-family:'Nunito Sans', sans-serif; font-size:12.5px;
  color: var(--ink-dim); background: var(--surface);
  border:1px solid var(--line); border-radius:999px;
  padding: 7px 13px; cursor:default;
  transition: border-color 0.15s ease, color 0.15s ease;
}
.stat-item:not(:first-child)::before{ display:none; }
.stat-item:hover, .stat-item:focus{
  border-color: var(--brass); color: var(--brass); outline:none;
}
.stat-number{
  font-family:'Nunito Sans', sans-serif; font-weight:700; font-size: 12.5px; color: inherit; line-height:1;
}
.stat-label{
  font-size: 12.5px; color: inherit;
  border-bottom: none;
}
.stat-tooltip{
  position:absolute; left:50%; bottom: calc(100% + 8px); transform:translateX(-50%) translateY(4px);
  width:200px; background: var(--ink); color:#fff; font-size:11px; line-height:1.5;
  padding:8px 10px; border-radius:8px; box-shadow:0 8px 20px rgba(30,42,58,0.2);
  opacity:0; pointer-events:none; transition: opacity 0.15s ease, transform 0.15s ease; z-index:5;
}
.stat-tooltip::after{
  content:''; position:absolute; top:100%; left:50%; transform:translateX(-50%);
  border:5px solid transparent; border-top-color:var(--ink);
}
.stat-item:hover .stat-tooltip, .stat-item:focus .stat-tooltip{
  opacity:1; transform:translateX(-50%) translateY(0);
}
@media (max-width: 640px){ .stat-tooltip{ width:160px; font-size:10.5px; } }

.sample-preview{ margin: 0 0 48px; }
.sample-preview-label{
  font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:0.12em; text-transform:uppercase;
  color:var(--brass); text-align:center; margin-bottom:14px;
}
.sample-preview-card{
  position:relative; overflow:hidden; isolation:isolate;
  background:var(--surface); border:1px solid var(--line); border-radius:20px;
  padding:32px; box-shadow:0 1px 3px rgba(30,42,58,0.05);
}
.sample-preview-card::before{
  content:''; position:absolute; width:220px; height:220px; border-radius:50%;
  background:var(--brass-bright); filter:blur(56px); opacity:0.08;
  top:-70px; right:-50px; pointer-events:none;
}
.sample-preview-card{
  animation: sampleFadeIn 0.35s ease;
}
.sample-preview-card.sample-fade-out{ animation: sampleFadeOut 0.3s ease forwards; }
@keyframes sampleFadeIn{ from{ opacity:0; transform:translateY(6px); } to{ opacity:1; transform:translateY(0); } }
@keyframes sampleFadeOut{ from{ opacity:1; } to{ opacity:0; } }
.sample-preview-caption{
  font-size:12.5px; color:var(--ink-dim); text-align:center; margin-bottom:10px;
  position:relative; z-index:1; font-style:italic;
}
.sample-preview-title{
  font-family:'Lora',serif; font-weight:700; font-size:clamp(20px,2.4vw,26px); color:var(--ink);
  text-align:center; margin-bottom:24px; position:relative; z-index:1;
}
.sample-preview-modules{
  display:grid; grid-template-columns:repeat(3,1fr); gap:20px; position:relative; z-index:1;
}
@media (max-width:720px){ .sample-preview-modules{ grid-template-columns:1fr; } }
.sample-module{ padding:18px; border-radius:14px; background:var(--bg); border:1px solid var(--line); }
.sample-module-num{
  width:26px; height:26px; border-radius:50%; margin-bottom:10px;
  background:linear-gradient(135deg, var(--brass-bright), var(--brass));
  box-shadow:0 3px 6px rgba(27,42,65,0.3), inset 0 1px 0 rgba(255,255,255,0.3);
  display:flex; align-items:center; justify-content:center;
  font-family:'IBM Plex Mono',monospace; font-size:12px; font-weight:600; color:#fff;
}
.sample-module-title{ font-weight:700; font-size:14.5px; color:var(--ink); margin-bottom:6px; }
.sample-module-text{ font-size:13px; color:var(--ink-dim); line-height:1.55; }
.sample-dots{
  display:flex; justify-content:center; gap:7px; margin-top:20px; position:relative; z-index:1;
}
.sample-dot{
  width:6px; height:6px; border-radius:50%; background:var(--line);
  transition: background 0.3s ease, transform 0.3s ease;
}
.sample-dot.active{ background:var(--brass-bright); transform:scale(1.3); }
.sample-cta{
  display:block; margin:28px auto 0; position:relative; z-index:1;
  font-family:'Nunito Sans',sans-serif; font-weight:700; font-size:14px;
  color:var(--on-brass); border:none; cursor:pointer;
  padding:12px 24px; border-radius:12px;
  background:linear-gradient(135deg, var(--brass), var(--brass-bright), var(--rust-bright), var(--brass));
  background-size:300% 300%; animation: btnGradientMove 5s ease infinite;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.sample-cta:hover{ transform:translateY(-2px); box-shadow:0 8px 18px color-mix(in srgb, var(--brass) 28%, transparent); }

.hero-meta{
  font-family:'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--ink-dim);
  text-align: right;
  line-height: 1.8;
}

/* ---------- LAYOUT ---------- */
.grid{
  display:grid;
  grid-template-columns: minmax(340px, 420px) 1fr;
  gap: 48px;
  align-items:start;
  margin-bottom: 56px;
}
@media (max-width: 900px){
  .grid{ grid-template-columns: 1fr; }
}

/* ---------- FORM ---------- */
.panel{
  position: relative; overflow:hidden; isolation:isolate;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(30,42,58,0.06);
}
@media (min-width: 901px){ .panel{ position: sticky; top: 24px; } }
.panel::before{
  content:''; position:absolute; z-index:0; width:200px; height:200px; border-radius:50%;
  background:var(--brass-bright); filter:blur(60px); opacity:0.08;
  top:-70px; left:-60px; pointer-events:none;
}
.panel > *{ position:relative; z-index:1; }
.panel label{
  display:block;
  font-family:'IBM Plex Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--brass);
  margin: 24px 0 9px;
}
.panel label:first-child{ margin-top:0; }
.panel input, .panel select, .panel textarea{
  width: 100%;
  background: var(--bg);
  border: 1px solid var(--line);
  color: var(--ink);
  font-family:'Nunito Sans', sans-serif;
  font-size: 15px;
  padding: 11px 12px;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.15s;
}
.panel input::placeholder, .panel textarea::placeholder{ color: var(--ink-dim); opacity: 0.7; }
.panel input:focus, .panel select:focus, .panel textarea:focus{
  border-color: var(--brass);
}
.panel textarea{ resize: vertical; min-height: 64px; font-family:'Nunito Sans', sans-serif; }
.row2{ display:grid; grid-template-columns: 1fr 1fr; gap: 12px; }
@media (max-width: 420px){ .row2{ grid-template-columns: 1fr; } }

.btn-generate{
  width:100%;
  margin-top: 28px;
  background: linear-gradient(135deg, var(--brass), var(--brass-bright), var(--rust-bright), var(--brass));
  background-size: 300% 300%;
  animation: btnGradientMove 5s ease infinite;
  color: var(--on-brass);
  border: none;
  font-family:'IBM Plex Mono', monospace;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 15px;
  border-radius: 14px;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}
@keyframes btnGradientMove{ 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
.btn-generate:hover:not(:disabled){ transform: translateY(-2px); box-shadow: 0 10px 22px color-mix(in srgb, var(--brass) 32%, transparent); }
.btn-generate:active:not(:disabled){ transform: translateY(0); box-shadow: 0 2px 6px color-mix(in srgb, var(--brass) 25%, transparent); }
.btn-generate:disabled{ opacity:0.55; cursor:wait; animation-play-state:paused; }

.hint{
  margin-top:14px;
  font-size: 12.5px;
  color: var(--ink-dim);
  line-height:1.5;
}

/* ---------- OUTPUT ---------- */
.output{ min-height: 320px; }
.empty-state{
  position:relative; overflow:hidden; isolation:isolate;
  border: 1px dashed var(--line);
  border-radius: 20px;
  padding: 64px 32px;
  text-align:center;
  color: var(--ink-dim);
}
.empty-state::before{
  content:''; position:absolute; z-index:0; width:220px; height:220px; border-radius:50%;
  background:var(--rust-bright); filter:blur(64px); opacity:0.1;
  bottom:-80px; right:-60px; pointer-events:none;
}
.empty-state > *{ position:relative; z-index:1; }
.empty-state .glyph{
  font-family:'Lora', serif;
  font-size: 40px;
  color: var(--brass);
  margin-bottom: 14px;
}
.empty-state p{ max-width: 360px; margin: 0 auto; font-size:14px; line-height:1.6; }

.course-head{
  margin-bottom: 28px;
}
.course-head .eyebrow{
  font-family:'IBM Plex Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--rust);
  margin-bottom: 10px;
}
.course-head h2{
  font-family:'Lora', serif;
  font-size: clamp(24px, 3.2vw, 32px);
  margin: 0 0 10px;
  line-height:1.15;
  color: var(--ink);
}
.course-head p{ color: var(--ink-dim); font-size:14.5px; line-height:1.55; max-width:640px; margin:0; }
.editable-hint{ font-size:11.5px !important; color: var(--brass) !important; opacity:0.75; margin-top:10px !important; max-width:none !important; }
[contenteditable="true"]{ outline: none; border-radius: 4px; transition: background 0.15s; cursor: text; }
[contenteditable="true"]:hover{ background: color-mix(in srgb, var(--brass) 6%, transparent); }
[contenteditable="true"]:focus{ background: color-mix(in srgb, var(--brass) 10%, transparent); box-shadow: 0 0 0 2px var(--brass); }

.cards{
  display:flex;
  flex-direction: column;
  gap: 22px;
  position:relative;
}
.cards::before{
  content:''; position:absolute; inset-inline-start:44px; top:22px; bottom:22px; width:2px;
  background: linear-gradient(to bottom, var(--brass-bright), var(--line) 90%);
  opacity:0.35; z-index:0;
}
.card{
  background: var(--card-bg);
  color: var(--ink);
  border-radius: 10px;
  padding: 28px 28px 30px;
  position: relative;
  box-shadow: 0 1px 3px rgba(30,42,58,0.08), 0 4px 14px rgba(30,42,58,0.05);
  opacity:0;
  transform: translateY(14px);
  animation: stampIn 0.5s ease forwards;
  border-inline-start: 4px solid var(--brass-bright);
  border-top: 1px solid var(--line);
  border-inline-end: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.card:hover{
  box-shadow: 0 10px 24px rgba(30,42,58,0.14), 0 4px 10px rgba(30,42,58,0.08);
  transform: translateY(-3px) perspective(800px) rotateX(0.6deg);
}
@keyframes stampIn{
  to{ opacity:1; transform: translateY(0); }
}
.card-num-row{ display:flex; align-items:center; gap:10px; margin-bottom: 14px; position:relative; z-index:1; flex-wrap:wrap; }
@media (max-width: 480px){
  .card-num-row{ gap:6px 8px; }
  .module-regenerate-btn{ margin-left:0; }
  .module-regenerate-btn, .module-social-btn{ font-size:10.5px; padding:5px 8px; }
}
.module-regenerate-btn{
  margin-left:auto; font-family:'Nunito Sans', sans-serif; font-size:11px; font-weight:600;
  color:var(--ink-dim); background:var(--surface-2); border:1px solid var(--line); border-radius:999px;
  padding:5px 10px; cursor:pointer; transition: border-color 0.15s ease, color 0.15s ease;
}
.module-regenerate-btn:hover:not(:disabled){ border-color:var(--brass); color:var(--brass); }
.module-regenerate-btn:disabled{ opacity:0.6; cursor:default; }
.module-social-btn{
  font-family:'Nunito Sans', sans-serif; font-size:11px; font-weight:600;
  color:var(--ink-dim); background:var(--surface-2); border:1px solid var(--line); border-radius:999px;
  padding:5px 10px; cursor:pointer; transition: border-color 0.15s ease, color 0.15s ease;
}
.module-social-btn:hover{ border-color:var(--brass); color:var(--brass); }
.card-num-badge{
  flex-shrink:0; width:26px; height:26px; border-radius:50%;
  background: linear-gradient(135deg, var(--brass-bright), var(--brass));
  box-shadow: 0 3px 6px rgba(27,42,65,0.35), inset 0 1px 0 rgba(255,255,255,0.3);
  display:flex; align-items:center; justify-content:center;
}
.card-num-badge span{
  font-family:'IBM Plex Mono', monospace; font-size:12px; font-weight:600; color:#fff;
}
.card-num{
  font-family:'IBM Plex Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--rust);
  text-transform: uppercase;
  margin-bottom: 0;
}
.card h3{
  font-family:'Lora', serif;
  font-size: 20px;
  margin: 0 0 8px;
  line-height:1.25;
  color: var(--ink);
}
.card p.summary{
  font-size: 14.5px;
  line-height: 1.6;
  margin: 0 0 14px;
  color: var(--ink-dim);
}
.card ul.points{
  margin: 0 0 14px;
  padding-left: 18px;
}
.card ul.points li{
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 4px;
  color: var(--ink-dim);
}
.quiz{
  background: rgba(168,90,38,0.07);
  border: 1px solid rgba(168,90,38,0.22);
  border-radius: 4px;
  padding: 12px 14px;
  font-size: 13.5px;
}
.quiz .q-label{
  font-family:'IBM Plex Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--rust);
  margin-bottom: 5px;
}
.quiz .q-text{ font-weight:600; margin-bottom:4px; color: var(--ink); }
.quiz .a-text{ color:var(--ink-dim); font-style:italic; }

.actions{
  display:flex;
  gap:10px;
  margin-top: 26px;
  flex-wrap: wrap;
}
.btn-secondary{
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--ink);
  font-family:'IBM Plex Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 10px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s, transform 0.15s;
}
.btn-secondary:hover{ border-color: var(--brass); color: var(--brass); transform: translateY(-1px); }
.btn-secondary:active{ transform: translateY(0); }

.share-row{
  display:flex; align-items:center; gap:10px; margin-top:14px;
}
.share-label{ font-size:12px; color:var(--ink-dim); margin-right:2px; }
.share-btn{
  width:34px; height:34px; border-radius:50%;
  transition: border-color 0.15s, transform 0.15s, background 0.15s, color 0.15s, box-shadow 0.15s;
}
.share-btn:hover{ transform: translateY(-3px) scale(1.06); box-shadow:0 6px 14px rgba(30,42,58,0.18); }
.share-btn[title="WhatsApp"]:hover{ background:#25D366; border-color:#25D366; color:#fff; }
.share-btn[title="X"]:hover{ background:#000; border-color:#000; color:#fff; }
.share-btn[title="LinkedIn"]:hover{ background:#0A66C2; border-color:#0A66C2; color:#fff; }
.share-btn.copied{ background:var(--brass); border-color:var(--brass); color:#fff; }

.error-box{
  background: var(--error-bg);
  border: 1px solid var(--error-border);
  color: var(--error-text);
  border-radius: 6px;
  padding: 14px 16px;
  font-size: 13.5px;
  margin-bottom: 20px;
  line-height:1.5;
}

.paywall-card{
  background: var(--surface-2);
  border: 1px dashed var(--brass);
  border-radius: 8px;
  padding: 24px 26px;
  text-align: center;
  margin-top: 8px;
}
.paywall-card p{
  color: var(--ink-dim);
  font-size: 13.5px;
  line-height: 1.6;
  margin: 0 0 16px;
}
.paywall-card .btn-generate{
  width: auto;
  margin: 0 auto;
  padding: 13px 24px;
}

.further-reading-block{
  background: var(--surface-2); border:1px solid var(--line); border-radius:14px;
  padding:18px 20px; margin:22px 0 0;
}
.further-reading-block h4{ font-family:'Lora', serif; font-size:14.5px; color:var(--ink); margin:0 0 6px; }
.further-reading-disclaimer{ font-size:11px; color:var(--ink-dim); font-style:italic; margin:0 0 10px; }
.further-reading-list{ margin:0; padding-left:20px; }
.further-reading-list li{ font-size:13px; color:var(--ink); line-height:1.6; margin-bottom:4px; }

.sales-kit{
  background: var(--surface);
  border: 1px solid var(--brass);
  border-radius: 8px;
  padding: 22px 24px;
  margin-top: 20px;
}
.sales-kit-block{ margin-bottom: 18px; }
.sales-kit-block:last-child{ margin-bottom: 0; }
.sales-kit-block h4{
  font-family:'IBM Plex Mono', monospace; font-size: 11px; letter-spacing:0.08em; text-transform:uppercase;
  color: var(--brass); margin: 0 0 8px;
}
.sales-kit-block p{ color: var(--ink); font-size: 13.5px; line-height:1.6; margin:0; }
.faq-item{ margin-bottom: 12px; }
.faq-item:last-child{ margin-bottom: 0; }
.faq-q{ color: var(--ink); font-size: 13.5px; font-weight:600; margin-bottom: 3px; }
.faq-a{ color: var(--ink-dim); font-size: 13px; line-height:1.55; }

.lang-picker{
  display:flex; align-items:center; gap:6px; background:var(--surface);
  border:1px solid var(--line); border-radius:6px; padding:4px 10px 4px 12px;
}
.lang-picker-icon{ font-size:13px; }
.lang-picker select{
  background:transparent; color:var(--brass); border:none; outline:none;
  font-family:'IBM Plex Mono',monospace; font-size:12px; padding:5px 4px; cursor:pointer;
}

.plan-cards{
  display:grid; grid-template-columns: repeat(4, 1fr); gap:20px;
  margin: 72px 0 0;
  padding-top: 56px;
  border-top: 1px solid var(--line);
}
@media (max-width: 980px){ .plan-cards{ grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px){ .plan-cards{ grid-template-columns: 1fr; } }
.plan-cards-title{
  grid-column: 1 / -1;
  font-family:'Lora', serif;
  font-size: 22px;
  color: var(--ink);
  margin: 0 0 4px;
  text-align: center;
}
.plan-cards-sub{
  grid-column: 1 / -1;
  font-size: 13.5px;
  color: var(--ink-dim);
  text-align: center;
  margin: 0 0 20px;
}
.plan-card{
  background: var(--surface); border:1px solid var(--line); border-radius:20px;
  padding:20px 18px 22px; text-align:left; position:relative; overflow:hidden; isolation:isolate;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  cursor:pointer;
}
#plan-card-abbonamento{ cursor:default; } /* card de assinatura só age pelo botão, não pelo card inteiro — evita clique acidental disparando pagamento */
.plan-card::before{
  content:''; position:absolute; z-index:-1; width:150px; height:150px; border-radius:50%;
  background:var(--brass-bright); filter:blur(44px); opacity:0.12;
  top:-50px; right:-50px; pointer-events:none;
}
.plan-card:hover{ transform: translateY(-4px); box-shadow: 0 10px 26px rgba(0,0,0,0.08); border-color: var(--brass); }
.plan-card.featured{
  border: 2px solid var(--brass); box-shadow: 0 2px 10px color-mix(in srgb, var(--brass) 14%, transparent); padding-top:28px;
}
.plan-card.featured::before{
  width:200px; height:200px; opacity:0.4; filter:blur(44px);
  top:-50px; right:-50px;
}
.plan-card.featured::after{
  content:''; position:absolute; z-index:-1; width:150px; height:150px; border-radius:50%;
  background:var(--rust-bright); filter:blur(38px); opacity:0.3;
  bottom:-36px; left:-36px; pointer-events:none;
}
.plan-card.featured:hover{ box-shadow: 0 14px 30px color-mix(in srgb, var(--brass) 20%, transparent); }
.plan-card-badge{
  position:absolute; top:10px; left:18px; background:var(--brass); color:var(--on-brass);
  font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.05em; text-transform:uppercase;
  padding:4px 10px; border-radius:20px; z-index:2;
}
.plan-card-name{
  font-family:'Lora',serif; font-size:19px; color:var(--ink); margin-bottom:4px;
}
.plan-card.featured .plan-card-name{ margin-top:20px; }
.plan-card-tag{
  font-family:'IBM Plex Mono',monospace; font-size:20px; font-weight:600; color:var(--brass); margin-bottom:8px;
}
.plan-card-tag-local{ font-size:12px; font-weight:500; color:var(--ink-dim); }
.plan-card-tag-period{ font-size:12px; font-weight:500; color:var(--ink-dim); margin-left:2px; }
.subscription-status-note{
  font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--ink-dim);
  text-align:center; margin-top:8px;
}
#plan-card-abbonamento .btn-secondary{ width:100%; margin-top:10px; }
.plan-card-tagline{
  font-size:12.5px; color:var(--ink); font-weight:600; line-height:1.4; margin-bottom:14px;
}
.plan-card-features{ list-style:none; margin:0; padding:0; }
.plan-card-features li{
  font-size:13px; color:var(--ink-dim); line-height:1.5; margin-bottom:8px; padding-left:18px; position:relative;
}
.plan-card-features li::before{
  content:"✓"; position:absolute; left:0; color:var(--brass); font-weight:600;
}
.reveal{ opacity:0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible{ opacity:1; transform: translateY(0); }

.currency-note{
  grid-column: 1 / -1; text-align:center; font-size:11.5px; color:var(--ink-dim);
  opacity:0.75; margin-top:14px;
}
.trust-bar{
  grid-column: 1 / -1; display:flex; flex-wrap:wrap; justify-content:center; gap:28px;
  margin-top:32px; padding-top:24px; border-top:1px solid var(--line);
}
.trust-item{
  display:flex; align-items:center; gap:8px; font-size:12.5px; color:var(--ink-dim);
}
.trust-item svg{ color:var(--brass); flex-shrink:0; }

.hero-meta-row{ display:flex; align-items:center; gap:8px; }
.icon-btn{
  background:var(--surface); border:1px solid var(--line); border-radius:6px;
  width:38px; height:38px; font-size:16px; cursor:pointer; color:var(--ink);
  display:flex; align-items:center; justify-content:center;
  transition: border-color 0.15s, transform 0.15s;
}
.icon-btn:hover{ border-color:var(--brass); transform: translateY(-2px); }

.sidebar-overlay{
  display:none; position:fixed; inset:0; background:rgba(15,23,34,0.45); backdrop-filter:blur(2px); z-index:40;
}
.sidebar-overlay.show{ display:block; }
.sidebar{
  position:fixed; top:0; inset-inline-end:-360px; width:320px; height:100%; background:var(--surface);
  box-shadow:-6px 0 24px rgba(15,23,34,0.18); z-index:50; padding:24px; overflow-y:auto;
  transition: inset-inline-end 0.3s cubic-bezier(0.22,1,0.36,1);
}
.sidebar::before{
  content:''; position:absolute; top:0; left:0; right:0; height:3px;
  background:linear-gradient(90deg, var(--brass), var(--brass-bright), var(--rust-bright), var(--brass));
  background-size:300% 100%;
  animation: showcaseBarMove 5s ease infinite;
}
.sidebar.show{ inset-inline-end:0; }
.sidebar-header{ display:flex; justify-content:space-between; align-items:center; margin-bottom:28px; }
.sidebar-close{ background:none; border:none; font-size:18px; cursor:pointer; color:var(--ink-dim); transition:color 0.15s, transform 0.15s; }
.sidebar-close:hover{ color:var(--brass); transform:rotate(90deg); }
.sidebar-section{ margin-bottom:28px; padding-bottom:24px; border-bottom:1px solid var(--line); }
.sidebar-section:last-child{ border-bottom:none; }
.sidebar-label{
  font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:0.08em; text-transform:uppercase;
  color:var(--brass); margin-bottom:10px;
}
.sidebar-note{ font-size:12.5px; color:var(--ink-dim); line-height:1.5; margin:0 0 12px; }
.delete-account-link{
  display:block; text-align:center; margin-top:14px; font-size:11.5px;
  color: var(--ink-dim); text-decoration:none; opacity:0.65;
}
.delete-account-link:hover{ color:#b5431f; opacity:1; }
.sidebar-course-item{
  padding:10px 12px; margin:0 -12px; border-radius:10px; border-bottom:1px dashed var(--line); cursor:pointer;
  transition: background 0.15s ease, transform 0.15s ease;
}
.sidebar-course-item:hover{ background:var(--surface-2); transform:translateX(-3px); }
.sidebar-course-item:hover .sidebar-course-title{ color:var(--brass); }
.sidebar-course-title{ font-size:13px; font-weight:600; color:var(--ink); margin-bottom:2px; }
.sidebar-course-meta{ font-size:11px; color:var(--ink-dim); }

.referral-code{
  background: var(--bg); border:1.5px dashed var(--brass); border-radius:6px;
  padding:10px 12px; font-family:'IBM Plex Mono',monospace; font-weight:600; font-size:13px;
  color:var(--brass); text-align:center; cursor:pointer; letter-spacing:0.04em;
  display:flex; align-items:center; justify-content:center; gap:8px; flex-wrap:wrap;
}
.referral-copy-hint{ font-family:'Nunito Sans',sans-serif; font-weight:400; font-size:10.5px; color:var(--ink-dim); text-transform:none; letter-spacing:0; }

.modal-overlay{
  display:none; position:fixed; inset:0; background:rgba(15,23,34,0.55); backdrop-filter:blur(3px); z-index:60;
  align-items:center; justify-content:center;
}
.modal-overlay.show{ display:flex; animation: modalOverlayIn 0.2s ease; }
@keyframes modalOverlayIn{ from{ opacity:0; } to{ opacity:1; } }
.modal-box{
  position:relative; overflow:hidden; isolation:isolate;
  background:var(--surface); border-radius:20px; padding:32px;
  width:90%; max-width:380px;
  box-shadow:0 24px 60px rgba(15,23,34,0.35);
  animation: modalBoxIn 0.28s cubic-bezier(0.22,1,0.36,1);
}
@keyframes modalBoxIn{ from{ opacity:0; transform:translateY(16px) scale(0.97); } to{ opacity:1; transform:translateY(0) scale(1); } }
.modal-box::before{
  content:''; position:absolute; top:0; inset-inline-start:0; right:0; height:3px;
  background:linear-gradient(90deg, var(--brass), var(--brass-bright), var(--rust-bright), var(--brass));
  background-size:300% 100%;
  animation: showcaseBarMove 5s ease infinite;
}
.modal-box::after{
  content:''; position:absolute; z-index:-1; width:160px; height:160px; border-radius:50%;
  background:var(--brass-bright); filter:blur(46px); opacity:0.1;
  top:-50px; inset-inline-end:-40px; pointer-events:none;
}
.modal-box h3{ font-family:'Lora',serif; margin:0 0 8px; color:var(--ink); font-size:20px; }
.modal-box label{
  display:block; font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:0.08em;
  text-transform:uppercase; color:var(--brass); margin:16px 0 6px;
}
.modal-box input{
  width:100%; background:var(--bg); border:1px solid var(--line); color:var(--ink);
  font-family:'Nunito Sans',sans-serif; font-size:14px; padding:10px 12px; border-radius:10px; outline:none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.modal-box input:focus{ border-color:var(--brass-bright); box-shadow:0 0 0 3px color-mix(in srgb, var(--brass) 12%, transparent); }
.modal-box .sidebar-close{ position:absolute; top:16px; inset-inline-end:16px; }

.showcase{
  display:grid; grid-template-columns: repeat(5, 1fr); gap:16px; margin:16px 0 20px;
}
@media (max-width: 860px){ .showcase{ grid-template-columns: repeat(2, 1fr); } }
.showcase-item{
  text-align:left; cursor:pointer; perspective:500px;
  background:var(--surface); border:1px solid var(--line); border-radius:16px;
  overflow:hidden; transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
}
.showcase-item:hover, .showcase-item.active{
  border-color: var(--brass); box-shadow: 0 14px 28px rgba(30,42,58,0.14); transform: translateY(-2px);
}
.showcase-example-list{ display:flex; flex-direction:column; gap:9px; margin-top:16px; }
.showcase-example-list .showcase-example-btn{
  position:relative; text-align:start; width:100%; border-radius:12px;
  padding:13px 40px 13px 18px; background:var(--surface); border:1px solid var(--line);
  font-size:13.5px; color:var(--ink);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  overflow:hidden;
}
.showcase-example-list .showcase-example-btn::before{
  content:''; position:absolute; top:0; left:0; bottom:0; width:3px;
  background:var(--brass-bright); transform:scaleY(0); transform-origin:center;
  transition: transform 0.2s ease;
}
.showcase-example-list .showcase-example-btn::after{
  content:'→'; position:absolute; right:16px; top:50%; transform:translate(6px,-50%); opacity:0;
  color:var(--brass-bright); font-weight:700;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.showcase-example-list .showcase-example-btn:hover{
  border-color:var(--brass-bright); transform:translateX(3px); color:var(--ink);
  box-shadow: 0 6px 16px color-mix(in srgb, var(--brass) 12%, transparent);
  background: linear-gradient(90deg, color-mix(in srgb, var(--brass) 5%, transparent), transparent 60%);
}
.showcase-example-list .showcase-example-btn:hover::before{ transform:scaleY(1); }
.showcase-example-list .showcase-example-btn:hover::after{ transform:translate(0,-50%); opacity:1; }
.showcase-icon{
  position:relative; aspect-ratio:16/10; overflow:hidden;
  transform-style:preserve-3d; will-change:transform;
}
.showcase-icon img{ width:100%; height:100%; object-fit:cover; display:block; transition: transform 0.35s ease; }
.showcase-item:hover .showcase-icon img{ transform: scale(1.06); }
.showcase-badge{
  position:absolute; top:10px; right:10px; z-index:1;
  font-family:'IBM Plex Mono', monospace; font-size:9.5px; letter-spacing:0.06em; text-transform:uppercase;
  color:var(--ink); background:rgba(255,255,255,0.88); backdrop-filter:blur(2px);
  padding:4px 9px; border-radius:999px;
}
.showcase-body{ padding:14px 14px 16px; }
.showcase-title{
  font-family:'Lora', serif; font-weight:600; font-size:14.5px; color:var(--ink);
  margin:0 0 6px; line-height:1.3;
}
.showcase-desc{
  font-family:'Nunito Sans', sans-serif; font-size:12px; color:var(--ink-dim);
  line-height:1.5; margin:0 0 12px;
  display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;
}
.showcase-footer{
  display:flex; align-items:center; justify-content:space-between;
  padding-top:10px; border-top:1px solid var(--line);
  font-family:'IBM Plex Mono', monospace; font-size:10.5px;
}
.showcase-footer-modules{ color:var(--ink-dim); }
.showcase-footer-price{ color:var(--brass); font-weight:600; }
@media (max-width: 860px){ .showcase-desc{ -webkit-line-clamp:3; } }

.showcase-panel{
  max-height:0; overflow:hidden; opacity:0;
  transition: max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease, margin-bottom 0.4s ease;
  margin-bottom:0;
  grid-column: 1 / -1; /* quando movido pra dentro do #showcase (grid), ocupa a largura toda */
}
.showcase-panel.open{ opacity:1; margin-bottom:56px; }
.showcase-panel-inner{
  position:relative; overflow:hidden; isolation:isolate;
  background: var(--surface); border:1px solid var(--line);
  border-radius:20px; padding:26px 28px 28px; text-align:left;
  box-shadow: 0 4px 20px rgba(30,42,58,0.07);
}
.showcase-panel-inner::before{
  content:''; position:absolute; z-index:-1; width:220px; height:220px; border-radius:50%;
  background:var(--brass-bright); filter:blur(60px); opacity:0.14;
  top:-70px; right:-60px; pointer-events:none;
}
.showcase-panel-inner::after{
  content:''; position:absolute; top:0; left:0; right:0; height:3px;
  background:linear-gradient(90deg, var(--brass), var(--brass-bright), var(--rust-bright), var(--brass));
  background-size:300% 100%;
  animation: showcaseBarMove 5s ease infinite;
}
@keyframes showcaseBarMove{ 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
.showcase-panel-title{ font-family:'Lora',serif; font-size:17px; color:var(--ink); margin-bottom:4px; }
.showcase-panel-intro{ font-size:12.5px; color:var(--ink-dim); margin:0; }
@media (max-width: 640px){ .showcase-example-list{ flex-direction:column; } }

.quiz-progress-wrap{
  height:8px; border-radius:20px; background:var(--surface-2); overflow:hidden; margin-bottom:6px;
}
.quiz-progress-bar{
  height:100%; border-radius:20px;
  background: linear-gradient(90deg, var(--brass), var(--brass-bright), var(--rust-bright));
  background-size:200% 100%;
  transition: width 0.35s cubic-bezier(0.22,1,0.36,1);
  box-shadow: 0 0 8px color-mix(in srgb, var(--brass) 40%, transparent);
}
.quiz-progress-label{
  font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--ink-dim);
  text-align:end; margin-bottom:20px;
}
.quiz-form{
  background: var(--surface); border:1px solid var(--line); border-radius:10px; padding:24px;
}
.quiz-form label{
  display:block; font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:0.08em;
  text-transform:uppercase; color:var(--brass); margin-bottom:8px;
}
.quiz-form input[type="text"]{
  width:100%; background:var(--bg); border:1px solid var(--line); color:var(--ink);
  font-family:'Nunito Sans',sans-serif; font-size:14px; padding:10px 12px; border-radius:5px;
  outline:none; margin-bottom:20px;
}
.quiz-form-item{ margin-bottom:20px; padding-bottom:20px; border-bottom:1px dashed var(--line); }
.quiz-form-item:last-of-type{ border-bottom:none; }
.quiz-answer-input{
  width:100%; background:var(--bg); border:1px solid var(--line); color:var(--ink);
  font-family:'Nunito Sans',sans-serif; font-size:13.5px; padding:10px 12px; border-radius:5px;
  outline:none; margin-top:8px; resize:vertical;
}

.certificate{
  background: var(--card-bg); border:1px solid var(--brass); padding:2px;
  box-shadow:0 4px 20px rgba(0,0,0,0.08); max-width:560px; margin:0 auto;
}
.certificate-inner{
  position:relative; overflow:hidden; isolation:isolate;
  border:1px solid var(--line); padding:44px 36px; text-align:center;
}
.certificate-inner::before{
  content:''; position:absolute; inset:0; z-index:-1; pointer-events:none;
  background-image: repeating-linear-gradient(45deg, color-mix(in srgb, var(--brass) 4%, transparent) 0px, color-mix(in srgb, var(--brass) 4%, transparent) 1px, transparent 1px, transparent 10px);
}
.certificate-inner::after{
  content:''; position:absolute; z-index:-1; width:180px; height:180px; border-radius:50%;
  background:var(--brass-bright); filter:blur(50px); opacity:0.08;
  top:-60px; right:-40px; pointer-events:none;
}
.certificate-brand-row{
  display:flex; align-items:center; justify-content:center; gap:10px; margin-bottom:6px;
}
.certificate-brand-row img{ width:34px; height:34px; }
.certificate-wordmark{ font-family:'IBM Plex Mono',monospace; font-weight:600; font-size:15px; letter-spacing:0.04em; }
.certificate-wordmark .ci{ color:var(--ink); }
.certificate-wordmark .cf{ color:var(--brass); }
.certificate-tagline{ font-family:'Lora',serif; font-style:italic; font-size:11px; color:var(--ink-dim); opacity:0.75; margin-bottom:26px; }
.certificate-eyebrow{
  font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.2em; text-transform:uppercase;
  color:var(--rust); margin-bottom:6px;
}
.certificate-rule{ height:1.5px; background:var(--rust); width:56px; margin:0 auto 24px; opacity:0.8; }
.certificate-rule.short{ width:48px; }
.certificate-rule.name-rule{ width:200px; height:1px; background:var(--line); opacity:1; margin:0 auto 20px; }
.certificate-rule.footer-rule{ background:var(--line); width:36px; margin:0 auto 12px; }
.certificate-issued-to{ font-size:11px; color:var(--ink-dim); margin-bottom:16px; }
.certificate-name{
  font-family:'Lora',serif; font-size:30px; color:var(--ink); margin-bottom:6px; font-weight:700;
}
.certificate-body{ font-size:12.5px; color:var(--ink-dim); line-height:1.6; margin-bottom:6px; }
.certificate-course{ font-family:'Lora',serif; font-size:18px; color:var(--brass); font-style:italic; font-weight:600; margin-bottom:6px; }
.certificate-modules{ font-size:10.5px; color:var(--ink-dim); opacity:0.75; margin-bottom:6px; }
.certificate-date{ font-family:'IBM Plex Mono',monospace; font-size:9.5px; color:var(--ink-dim); margin-bottom:3px; }
.certificate-num{ font-family:'IBM Plex Mono',monospace; font-size:8.5px; color:var(--ink-dim); opacity:0.55; }
.certificate-method{ margin-bottom:6px; }
.certificate-method-label{
  display:block; font-family:'IBM Plex Mono',monospace; font-size:8.5px; letter-spacing:0.14em; text-transform:uppercase;
  color:var(--brass); margin-bottom:8px;
}
.certificate-method-steps{
  display:flex; align-items:center; justify-content:center; flex-wrap:wrap; gap:5px;
  font-family:'Nunito Sans',sans-serif; font-size:9.5px; color:var(--ink-dim);
}
.certificate-method-step{
  border:1px solid var(--line); border-radius:999px; padding:3px 8px; white-space:nowrap;
}
.certificate-method-arrow{ color:var(--line); font-size:9px; }
.certificate-disclaimer{
  font-size:8px; color:var(--ink-dim); opacity:0.6; margin-top:14px; line-height:1.4;
}

.about-section{
  margin: 72px 0 56px;
  padding-top: 56px;
  border-top: 1px solid var(--line);
  text-align: center;
}
.about-title{
  font-family:'Lora', serif; font-size: clamp(24px, 3vw, 32px); color: var(--ink); margin-bottom: 14px;
}
.about-intro{
  max-width: 620px; margin: 0 auto 40px; color: var(--ink-dim); font-size: 15.5px; line-height: 1.65;
}
.about-grid{
  display:grid; grid-template-columns: repeat(3, 1fr); gap: 24px; text-align:left;
}
@media (max-width: 720px){ .about-grid{ grid-template-columns: 1fr; } }
.about-block{
  position:relative; overflow:hidden; isolation:isolate;
  background:var(--surface); border:1px solid var(--line); border-radius:16px;
  padding:26px 24px; transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.about-block:hover{ transform:translateY(-3px); box-shadow:0 12px 26px rgba(30,42,58,0.1); }
.about-block::before{
  content:''; position:absolute; z-index:-1; width:140px; height:140px; border-radius:50%;
  background:var(--brass-bright); filter:blur(40px); opacity:0.1;
  top:-50px; right:-40px; pointer-events:none;
}
.about-block-num{
  font-family:'Lora',serif; font-size:34px; font-weight:700; color:var(--brass);
  opacity:0.18; line-height:1; margin-bottom:8px;
}
.about-block h4{
  font-family:'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--brass); margin: 0 0 10px;
}
.about-block p{ color: var(--ink-dim); font-size: 14px; line-height: 1.65; margin: 0; }

.faq-section{ margin: 64px 0 0; padding-top: 48px; border-top: 1px solid var(--line); text-align: center; }
.faq-list{ max-width: 640px; margin: 24px auto 0; text-align: left; }
.faq-entry{
  padding: 0 16px; border-radius:14px; border-bottom: 1px solid var(--line);
  transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.faq-entry:hover{ background:var(--surface); box-shadow:0 4px 14px rgba(30,42,58,0.06); }
.faq-entry:last-child{ border-bottom: none; }
.faq-entry-q{
  display:flex; align-items:center; justify-content:space-between; gap:16px; width:100%;
  background:none; border:none; cursor:pointer; text-align:left; padding:16px 0;
  font-family:'Lora',serif; font-weight: 700; font-size: 15px; color: var(--ink);
}
.faq-caret{
  font-family:'IBM Plex Mono',monospace; font-size:15px; color:var(--brass); flex-shrink:0;
  display:inline-block; transition: transform 0.2s ease;
}
.faq-entry[data-open="true"] .faq-caret{ transform:scale(1.15); }
.faq-entry-a{
  font-size: 13.5px; color: var(--ink-dim); line-height: 1.6;
  max-height:0; overflow:hidden; transition: max-height 0.3s ease, padding 0.3s ease;
}
.faq-entry[data-open="true"] .faq-entry-a{ padding-bottom: 16px; }

.newsletter-section{
  margin: 64px 0 0; padding: 40px 32px; border-radius: 14px; background: var(--surface-2);
  text-align: center;
}
.newsletter-title{ font-family:'Lora',serif; font-size: 22px; color: var(--ink); margin-bottom: 8px; }
.newsletter-sub{ font-size: 13.5px; color: var(--ink-dim); margin: 0 0 20px; max-width: 440px; margin-left:auto; margin-right:auto; }
.newsletter-form{ display:flex; gap:10px; justify-content:center; flex-wrap:wrap; max-width: 420px; margin: 0 auto; }
.newsletter-form input{
  flex:1; min-width:200px; background: var(--bg); border:1px solid var(--line); color: var(--ink);
  font-family:'Nunito Sans',sans-serif; font-size:14px; padding:11px 14px; border-radius:5px; outline:none;
}
.newsletter-message{ font-size:12.5px; margin-top:12px; min-height:16px; }
.newsletter-message.success{ color: var(--brass); }
.newsletter-message.error{ color: var(--rust); }

.site-footer{
  position:relative;
  margin: 64px 0 0; padding: 40px 0 0;
  text-align: center; display: flex; flex-direction: column; align-items:center; gap: 14px;
}
.site-footer::before{
  content:''; position:absolute; top:0; left:50%; transform:translateX(-50%);
  width:120px; height:2px;
  background: linear-gradient(90deg, transparent, var(--brass-bright), var(--rust-bright), transparent);
}
.footer-seal{ opacity:0.7; }
.footer-links{ display: flex; justify-content: center; gap: 24px; }
.footer-links a{ position:relative; color: var(--ink-dim); font-size: 12.5px; text-decoration: none; }
.footer-links a::after{
  content:''; position:absolute; left:0; right:100%; bottom:-3px; height:1px;
  background:var(--brass-bright); transition: right 0.2s ease;
}
.footer-links a:hover{ color: var(--brass); }
.footer-links a:hover::after{ right:0; }
.footer-rights{ font-size: 11.5px; color: var(--ink-dim); opacity: 0.65; }

.legal-modal-box{ max-width: 560px; max-height: 80vh; overflow-y: auto; text-align: start; }
.legal-modal-body{ margin-top: 16px; font-size: 13.5px; line-height: 1.7; color: var(--ink-dim); }
.legal-modal-body p{ margin: 0 0 14px; }
.legal-modal-body strong{ color: var(--ink); }
.legal-modal-body ul{ margin: 0 0 14px; padding-left: 20px; }
.legal-modal-body li{ margin-bottom: 6px; }

.cookie-banner{
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 45;
  background: var(--ink); color: var(--bg); padding: 16px 24px;
  display: flex; align-items: center; justify-content: center; gap: 20px; flex-wrap: wrap;
  font-size: 12.5px; box-shadow: 0 -4px 16px rgba(0,0,0,0.15);
}
.cookie-banner span{ max-width: 560px; }

.example-chips{ display:flex; flex-wrap:wrap; gap:6px; margin:8px 0 18px; }

.input-mode-toggle{ display:flex; gap:8px; margin-bottom:16px; }
.input-mode-btn{
  flex:1; font-family:'Nunito Sans', sans-serif; font-weight:600; font-size:12.5px;
  padding:9px 10px; border-radius:10px; border:1px solid var(--line); background:var(--surface);
  color:var(--ink-dim); cursor:pointer; transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;
}
.input-mode-btn.active{ border-color:var(--brass); color:var(--brass); background: color-mix(in srgb, var(--brass) 6%, transparent); }
.file-upload-label{ display:block; font-size:12px; color:var(--ink-dim); margin:10px 0 6px; }
.file-upload-status{ font-size:11.5px; color:var(--brass); margin:6px 0 0; min-height:14px; }
.example-chip{
  background:var(--surface-2); border:1px solid var(--line); color:var(--ink-dim);
  border-radius:20px; padding:5px 12px; font-size:12px; cursor:pointer;
  transition: border-color 0.15s, color 0.15s, transform 0.15s, box-shadow 0.15s, background 0.15s;
}
.example-chip:hover{
  border-color:var(--brass-bright); color:var(--brass-bright); background:var(--surface);
  transform: translateY(-2px); box-shadow: 0 4px 10px color-mix(in srgb, var(--brass) 15%, transparent);
}

.plan-picker{
  display:grid; grid-template-columns: repeat(2, 1fr); gap:8px; margin-top:2px;
}
@media (max-width: 420px){
  .plan-picker{ grid-template-columns: 1fr; }
  .plan-pill{ display:flex; align-items:center; justify-content:space-between; padding:10px 14px; }
  .plan-pill-name, .plan-pill-price{ display:inline; margin-bottom:0; }
}
.plan-pill{
  background: var(--bg); border:1.5px solid var(--line); border-radius:10px;
  padding:10px 6px; text-align:center; cursor:pointer; font-family:'Nunito Sans',sans-serif;
  transition: border-color 0.15s, background 0.15s, transform 0.15s, box-shadow 0.15s;
}
.plan-pill-name{ display:block; font-size:12.5px; font-weight:700; color:var(--ink); margin-bottom:3px; }
.plan-pill-price{ display:block; font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--ink-dim); }
.plan-pill:hover{ border-color:var(--brass-bright); transform: translateY(-2px); box-shadow: 0 6px 14px color-mix(in srgb, var(--brass) 14%, transparent); }
.plan-pill.active{ border-color:var(--brass); background: color-mix(in srgb, var(--brass) 8%, transparent); box-shadow: 0 4px 12px color-mix(in srgb, var(--brass) 16%, transparent); }
.plan-pill.active .plan-pill-name{ color:var(--brass); }
.plan-picker-note{
  font-size:12px; color:var(--ink-dim); margin:8px 0 0; font-style:italic;
}

.more-details-toggle{
  display:inline-block; color:var(--brass); font-size:12.5px; text-decoration:none;
  margin: 4px 0 4px; border-bottom:1px dotted var(--brass);
}
.more-details-toggle:hover{ color:var(--brass-dim); }
.more-details-hint{ font-size:11.5px; color:var(--ink-dim); margin:0 0 18px; }

.translate-panel{ margin-top:18px; }
.translate-lang-options{ display:flex; flex-wrap:wrap; gap:10px 16px; margin:10px 0 14px; }
.translate-lang-check{ font-size:12.5px; color:var(--ink); display:flex; align-items:center; gap:6px; cursor:pointer; }
.translate-status{ font-size:11.5px; color:var(--brass); margin-top:8px; min-height:14px; }
.translate-tabs{ display:flex; flex-wrap:wrap; align-items:center; gap:6px; margin-top:14px; }
.translate-tabs-label{ font-size:11.5px; color:var(--ink-dim); margin-right:4px; }
.translate-tab{
  font-family:'Nunito Sans', sans-serif; font-size:11.5px; font-weight:600;
  color:var(--ink-dim); background:var(--surface-2); border:1px solid var(--line); border-radius:999px;
  padding:5px 12px; cursor:pointer; transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;
}
.translate-tab:hover{ border-color:var(--brass); color:var(--brass); }
.translate-tab.active{ background:var(--brass); border-color:var(--brass); color:#fff; }

.verify-badge{
  display:inline-flex; align-items:center; gap:6px; margin:0 auto 16px; padding:6px 14px;
  background: var(--surface-2); border:1px solid var(--brass); border-radius:999px;
  font-family:'IBM Plex Mono', monospace; font-size:11.5px; color:var(--brass);
  width:fit-content;
}

.loading{
  font-family:'IBM Plex Mono', monospace;
  font-size: 12.5px;
  letter-spacing: 0.02em;
  background: var(--ink);
  border-radius: 16px;
  padding: 20px 22px;
  color: #B9D3EC;
}
.loading .loading-line{
  margin-bottom: 6px;
  opacity: 0;
  animation: loadingLineIn 0.35s ease forwards;
}
@keyframes loadingLineIn{ to{ opacity:1; } }
.loading .loading-line.done{ color: rgba(185,211,236,0.55); }
.loading .loading-line.done::before{ content:'✓ '; color: var(--rust-bright); }
.loading .loading-line.active::before{ content:'> '; color: var(--rust-bright); }
.loading .cursor3{
  display:inline-block; width:6px; height:12px; background:#B9D3EC; margin-left:2px;
  animation: loadingBlink 1s step-end infinite; vertical-align:middle;
}
@keyframes loadingBlink{ 50%{ opacity:0; } }

.gen-progress-wrap{
  margin-top: 14px; height:4px; border-radius:999px;
  background: rgba(185,211,236,0.18); overflow:hidden;
}
.gen-progress-bar{
  height:100%; width:0%; border-radius:999px;
  background: linear-gradient(90deg, var(--rust-bright), #B9D3EC);
  transition: width 0.3s ease;
}

/* FIX MERCADO: painel de streaming ao vivo da estrutura do curso */
.structure-stream{
  background: var(--ink); border-radius:16px; padding:20px 22px; color:#B9D3EC;
}
.structure-stream-label{
  font-family:'IBM Plex Mono', monospace; font-size:11.5px; letter-spacing:0.06em; text-transform:uppercase;
  color: var(--rust-bright); margin-bottom:10px;
}
.structure-stream-raw{
  font-family:'IBM Plex Mono', monospace; font-size:11.5px; line-height:1.6;
  white-space: pre-wrap; word-break: break-word; max-height:220px; overflow-y:auto;
  margin:0; color: rgba(185,211,236,0.85);
}

.structure-preview{
  background: var(--surface); border:1px solid var(--line); border-radius:16px; padding:26px 24px;
}
.structure-preview-eyebrow{
  font-family:'IBM Plex Mono', monospace; font-size:11px; letter-spacing:0.1em; text-transform:uppercase;
  color: var(--brass); margin-bottom:10px;
}
.structure-preview h3{ font-family:'Lora', serif; font-size:19px; color:var(--ink); margin:0 0 6px; }
.structure-preview-sub{ font-size:13.5px; color:var(--ink-dim); margin:0 0 18px; }
.structure-modules{ margin:0 0 22px; padding-left:20px; }
.structure-modules li{ font-size:13.5px; color:var(--ink); line-height:1.6; margin-bottom:10px; }
.structure-modules li strong{ color:var(--ink); }
.structure-preview-actions{ display:flex; gap:10px; flex-wrap:wrap; }
.structure-preview-actions .btn-generate{ flex:1; min-width:200px; }

.module-image{ width:100%; border-radius:6px; margin-bottom:14px; display:block; }
.lesson-content{ margin: 0 0 14px; }
.lesson-content p{ font-size:14.5px; line-height:1.65; color:var(--ink-dim); margin:0 0 12px; }

@media print{
  body{ background:#fff !important; }
  .hero, .plan-cards, .panel, .actions, .offline-banner, .showcase, .about-section, .faq-section, .site-footer, .cookie-banner, .editable-hint{ display:none !important; }
  .grid{ display:block !important; }
  .card, .sales-kit, .course-head{
    background:#fff !important; color:#1a1a1a !important; box-shadow:none !important;
    border:1px solid #ccc !important; page-break-inside: avoid;
  }
  .card p, .lesson-content p, .card li{ color:#2a2a2a !important; }
  .wrap{ padding:0 !important; max-width:100% !important; }
  .certificate{ border-color:#2E4A6B !important; box-shadow:none !important; }
  .certificate-inner{ border-color:#ccc !important; }
  .certificate-inner::after{ display:none !important; }
  .certificate-name, .certificate-course{ color:#1a1a1a !important; }
  .seal-3d{ filter:none !important; }
  * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
</style>
<!-- FIX: leitura de PDF direto no navegador, sem precisar de backend novo pra isso -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<!-- FIX PRODUTO 2: captura o certificado como imagem, 100% no navegador -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
</head>
<body>

<div class="sidebar-overlay" id="sidebar-overlay" onclick="closeSidebar()"></div>
<div class="sidebar" id="sidebar">
  <div class="sidebar-header">
    <span class="stamp">Corsificio</span>
    <button class="sidebar-close" onclick="closeSidebar()" aria-label="Chiudi menu">✕</button>
  </div>

  <div class="sidebar-section" id="sidebar-account">
    <div class="sidebar-label" data-i18n="sidebarProfile">Profilo</div>
    <div id="sidebar-account-content">
      <p class="sidebar-note" data-i18n="sidebarNotLoggedIn">Non hai effettuato l'accesso.</p>
      <button class="btn-secondary" onclick="openAuthModal()" data-i18n="btnLoginSignup">Accedi o registrati</button>
    </div>
  </div>

  <div class="sidebar-section">
    <div class="sidebar-label" data-i18n="sidebarMyCourses">I miei corsi</div>
    <div id="sidebar-courses-list"><p class="sidebar-note" data-i18n="sidebarLoginToSee">Accedi per vedere i corsi che hai acquistato.</p></div>
  </div>

  <div class="sidebar-section" id="sidebar-referral"></div>

  <div class="sidebar-section">
    <div class="sidebar-label" data-i18n="sidebarSettings">Impostazioni</div>
    <p class="sidebar-note" data-i18n="sidebarSettingsHint">Lingua e altre preferenze si trovano in alto nella pagina principale.</p>
  </div>
</div>

<div class="modal-overlay" id="auth-modal-overlay" onclick="closeAuthModal(event)">
  <div class="modal-box" onclick="event.stopPropagation()">
    <button class="sidebar-close" onclick="closeAuthModal()" aria-label="Chiudi finestra">✕</button>
    <h3 data-i18n="authTitle">Accedi o crea un account</h3>
    <p class="sidebar-note" data-i18n="authIntro">Salva i corsi che acquisti e ritrovali quando vuoi.</p>
    <label data-i18n="authEmailLabel">Email</label>
    <input type="email" id="auth-email" placeholder="tu@esempio.com" autocomplete="email">
    <label data-i18n="authPasswordLabel">Password</label>
    <input type="password" id="auth-password" placeholder="••••••••" autocomplete="current-password">
    <div id="auth-error" class="error-box" style="display:none; margin-top:12px;"></div>
    <button class="btn-generate" style="margin-top:18px;" onclick="handleSignIn()" data-i18n="btnLogin">Accedi</button>
    <button class="btn-secondary" style="width:100%; margin-top:10px; justify-content:center;" onclick="handleSignUp()" data-i18n="btnSignup">Crea account</button>
    <a href="#" class="more-details-toggle" style="display:block; text-align:center; margin-top:14px;" onclick="handleForgotPassword(event)" data-i18n="btnForgotPassword">Password dimenticata?</a>
  </div>
</div>

<!-- FIX AUDITORIA: modal que faltava — sem ele, quem clicava no link de
     recuperação de senha do e-mail ficava logado, mas sem nenhuma tela pra
     de fato digitar a senha nova. Abre sozinho quando o Supabase confirma
     o evento PASSWORD_RECOVERY (ver listener em onAuthStateChange). -->
<div class="modal-overlay" id="new-password-modal-overlay">
  <div class="modal-box" onclick="event.stopPropagation()">
    <h3 data-i18n="newPasswordTitle">Imposta la tua nuova password</h3>
    <p class="sidebar-note" data-i18n="newPasswordIntro">Scegli una nuova password per accedere al tuo account.</p>
    <label data-i18n="newPasswordLabel">Nuova password</label>
    <input type="password" id="new-password-input" placeholder="••••••••" autocomplete="new-password">
    <div id="new-password-error" class="error-box" style="display:none; margin-top:12px;"></div>
    <button class="btn-generate" style="margin-top:18px;" onclick="handleSetNewPassword()" data-i18n="btnSetNewPassword">Salva la nuova password</button>
  </div>
</div>

<div class="modal-overlay" id="legal-modal-overlay" onclick="closeLegalModal(event)">
  <div class="modal-box legal-modal-box" onclick="event.stopPropagation()">
    <button class="sidebar-close" onclick="closeLegalModal()" aria-label="Chiudi finestra">✕</button>
    <h3 id="legal-modal-title"></h3>
    <div id="legal-modal-body" class="legal-modal-body"></div>
  </div>
</div>

<div class="wrap">
  <div class="hero">
    <div class="hero-pattern" id="hero-pattern"></div>
    <div>
      <div class="header-lockup" style="margin-bottom:26px;">
        <div class="seal-glow-wrap">
          <div class="seal-3d" style="width:40px;height:40px;">
            <div class="sq sq1"></div><div class="sq sq2"></div><div class="sq sq3"></div>
          </div>
        </div>
        <div>
          <span style="font-family:'IBM Plex Mono',monospace;font-weight:600;font-size:26px;letter-spacing:0.03em;"><span style="color:var(--ink);">CORSI</span><span style="color:var(--brass);">FICIO</span></span>
          <div style="font-family:'Lora',serif;font-style:italic;font-size:12px;color:var(--ink-dim);opacity:0.75;margin-top:2px;">micro-corsi con IA</div>
        </div>
      </div>
      <h1 class="title"><span data-i18n="titleMain">Ogni competenza</span><br><em data-i18n="titleEm">è un corso</em> <span data-i18n="titleEnd">pronto</span></h1>
      <p class="sub" data-i18n="sub">Descrivi un argomento, per chiunque tu voglia insegnarlo. In pochi secondi ottieni un micro-corso completo: moduli, lezioni, punti chiave e quiz.</p>
      <div class="hero-rotator" id="hero-rotator"></div>
      <button class="hero-cta" onclick="document.getElementById('f-expertise').scrollIntoView({behavior:'smooth', block:'center'}); setTimeout(() => document.getElementById('f-expertise').focus(), 400);" data-i18n="heroCtaButton">Provalo gratis ↓</button>
    </div>
    <div class="hero-meta">
      <div class="hero-meta-row">
        <button class="icon-btn" onclick="openSidebar()" title="Menu" aria-label="Apri menu">☰</button>
        <button class="icon-btn" id="account-btn" onclick="openAuthModal()" title="Account" aria-label="Account">👤</button>
        <div class="lang-picker">
          <span class="lang-picker-icon">🌐</span>
          <select id="f-language">
            <option value="it">Italiano</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="pt">Português</option>
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
            <option value="ar">العربية</option>
            <option value="ru">Русский</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <div class="stats-strip-wrap">
    <div class="stats-strip reveal" id="stats-strip"></div>
  </div>

  <div class="grid">
    <div class="panel">
      <div class="input-mode-toggle" id="input-mode-toggle">
        <button type="button" class="input-mode-btn active" data-mode="topic" onclick="setInputMode('topic')" data-i18n="modeTopicBtn">✏️ Descrivi un argomento</button>
        <button type="button" class="input-mode-btn" data-mode="material" onclick="setInputMode('material')" data-i18n="modeMaterialBtn">📄 Incolla il tuo materiale</button>
      </div>

      <div id="topic-mode-block">
        <label for="f-expertise" data-i18n="labelTopic">Argomento del corso</label>
        <input id="f-expertise" type="text" data-i18n-ph="phTopic" placeholder="Es. giardinaggio urbano, marketing per PMI, chitarra per principianti, storia dell'arte">
        <div class="example-chips" id="example-chips"></div>
      </div>

      <div id="material-mode-block" style="display:none;">
        <label for="f-source-material" data-i18n="labelMaterial">Le tue note, appunti o testo di partenza</label>
        <textarea id="f-source-material" rows="6" data-i18n-ph="phMaterial" placeholder="Incolla qui appunti, una bozza, il testo di una lezione già fatta... l'IA li trasforma in un corso strutturato."></textarea>
        <label for="f-material-file" class="file-upload-label" data-i18n="labelUploadFile">Oppure carica un file (.pdf, .txt)</label>
        <input id="f-material-file" type="file" accept=".pdf,.txt" onchange="handleMaterialFile(event)">
        <p class="file-upload-status" id="file-upload-status"></p>
      </div>

      <div id="level-block">
        <label for="f-level" data-i18n="labelLevel">Il tuo livello di partenza</label>
        <select id="f-level" onchange="syncAudienceFromLevel()">
          <option value="principianti assoluti, senza nessuna esperienza pregressa" data-i18n="levelBeginner">Principiante</option>
          <option value="livello intermedio, con qualche base già acquisita" data-i18n="levelIntermediate">Intermedio</option>
          <option value="livello avanzato, per approfondire" data-i18n="levelAdvanced">Avanzato</option>
        </select>
      </div>

      <div id="audience-block" style="display:none;">
        <label for="f-audience" data-i18n="labelAudience">A chi si rivolge il corso</label>
        <input id="f-audience" type="text" data-i18n-ph="phAudiencePro" placeholder="Es. professionisti che vogliono migliorare le vendite, aziende, freelance">

        <label for="f-vertical" data-i18n="labelVertical">Il tuo settore</label>
        <select id="f-vertical" onchange="saveVerticalPreference()">
          <option value="" data-i18n="verticalGeneric">Generico</option>
          <option value="salute" data-i18n="verticalSalute">Salute e benessere (terapeuti, coach del benessere)</option>
          <option value="fitness" data-i18n="verticalFitness">Fitness (personal trainer)</option>
          <option value="business" data-i18n="verticalBusiness">Business e consulenza</option>
          <option value="coaching" data-i18n="verticalCoaching">Coaching</option>
        </select>
      </div>

      <label data-i18n="labelPlanPicker">Scegli il tuo piano</label>
      <div class="plan-picker" id="plan-picker">
        <button type="button" class="plan-pill active" data-plan="free" onclick="selectPlan('free')">
          <span class="plan-pill-name" data-i18n="pillFreeName">Gratis</span>
          <span class="plan-pill-price" data-i18n="priceFreeValue">Gratis</span>
        </button>
        <button type="button" class="plan-pill" data-plan="completo" onclick="selectPlan('completo')">
          <span class="plan-pill-name" data-i18n="pillCompletoName">Completo</span>
          <span class="plan-pill-price" data-i18n="priceCompletoValue">€3,49</span>
        </button>
        <button type="button" class="plan-pill" data-plan="pro" onclick="selectPlan('pro')">
          <span class="plan-pill-name" data-i18n="pillProName">Professionale</span>
          <span class="plan-pill-price" data-i18n="priceProValue">€4,99</span>
        </button>
        <button type="button" class="plan-pill" data-plan="creator" id="plan-pill-creator" onclick="selectPlan('creator')">
          <span class="plan-pill-name" data-i18n="planMensileName">Piano Creator</span>
          <span class="plan-pill-price">€19,90<span data-i18n="perMonthLabel">/mese</span></span>
        </button>
      </div>
      <p class="plan-picker-note" id="plan-picker-note" data-i18n="planFreeTagline">Un assaggio veloce, senza carta di credito</p>

      <input type="hidden" id="f-length" value="sintetico">
      <input type="hidden" id="f-usage" value="generale">

      <a href="#" class="more-details-toggle" id="more-details-toggle" data-i18n="moreDetailsToggle" onclick="toggleMoreDetails(event)">+ Personalizza (facoltativo)</a>
      <p class="more-details-hint" data-i18n="moreDetailsHint">L'IA sceglie già tono e obiettivo sensati da sola — personalizza solo se vuoi controllare di più.</p>
      <div id="more-details-block" style="display:none;">
        <label for="f-goal" data-i18n="labelGoal">Cosa deve saper fare chi lo finisce</label>
        <textarea id="f-goal" data-i18n-ph="phGoal" placeholder="Es. valutare un immobile e presentarlo a un acquirente in modo efficace"></textarea>

        <div class="row2">
          <div>
            <label for="f-modules" data-i18n="labelModules">Numero moduli</label>
            <select id="f-modules">
              <option value="3">3</option>
              <option value="4" selected>4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div>
            <label for="f-tone" data-i18n="labelTone">Tono</label>
            <select id="f-tone">
              <option value="pratico e diretto" data-i18n="tonePratico">Pratico</option>
              <option value="professionale e autorevole" data-i18n="toneAutorevole">Autorevole</option>
              <option value="amichevole e motivante" data-i18n="toneAmichevole">Amichevole</option>
            </select>
          </div>
        </div>
      </div>

      <button class="btn-generate" id="btn-generate" onclick="generateCourse()" data-i18n="btnGenerate">Genera il corso</button>
      <p class="hint" id="hint-text" data-i18n="hintGeneral">Il testo generato è un punto di partenza: rivedilo e personalizzalo prima di condividerlo.</p>
    </div>

    <div class="output" id="output">
      <div class="empty-state">
        <div class="seal-3d empty-state-seal" style="width:48px;height:48px;margin:0 auto 14px;">
          <div class="sq sq1"></div><div class="sq sq2"></div><div class="sq sq3"></div>
        </div>
        <p data-i18n="emptyState">Compila i campi a sinistra e premi "Genera il corso". Qui apparirà la struttura completa, modulo per modulo.</p>
      </div>
    </div>
  </div>

  <div class="showcase reveal" id="showcase"></div>
  <div class="showcase-panel" id="showcase-panel"></div>

  <div class="sample-preview reveal" id="sample-preview"></div>

  <div class="about-section reveal" id="about-section"></div>

  <!-- FIX DESIGN 1 (v2): faixa compacta de diferenciais, DEPOIS do gerador —
     reforça a decisão de quem já viu o formulário, sem competir com ele.
     Só ícone + rótulo curto, sem parágrafo — pra não pesar visualmente. -->
  <div class="diff-strip reveal" id="diff-strip">
    <span class="diff-chip" title="Ogni corso segue un metodo fisso in 5 parti — non un riassunto qualsiasi."><span class="diff-chip-ico">🎯</span><span data-i18n="diff1Title">Mai generico</span></span>
    <span class="diff-chip" title="Mostriamo la struttura pedagogica di ogni modulo, verificabile prima di comprare."><span class="diff-chip-ico">🔍</span><span data-i18n="diff2Title">Metodo trasparente</span></span>
    <span class="diff-chip" title="Barra di progresso, quiz per modulo e certificato finale."><span class="diff-chip-ico">📊</span><span data-i18n="diff3Title">Progresso visibile</span></span>
    <span class="diff-chip" title="Anteprima gratuita, pagamento sicuro in un clic con Stripe."><span class="diff-chip-ico">💳</span><span data-i18n="diff4Title">Zero attrito</span></span>
    <span class="diff-chip" title="Nessuna promessa impossibile. Solo un corso ben strutturato, in secondi."><span class="diff-chip-ico">🤝</span><span data-i18n="diff5Title">Promessa onesta</span></span>
  </div>

  <div class="faq-section reveal" id="faq-section"></div>

  <div class="newsletter-section reveal" id="newsletter-section"></div>

  <div class="site-footer reveal" id="site-footer"></div>

  <div class="cookie-banner" id="cookie-banner" style="display:none;">
    <span id="cookie-text"></span>
    <button class="btn-generate" id="cookie-accept" style="width:auto; padding:9px 20px; margin-top:0;" onclick="acceptCookies()"></button>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>
<script>
const I18N = {
  it: {
    langNameForPrompt: 'Italian',
    titleMain: 'Ciò che sai', titleEm: 'diventa un corso', titleEnd: 'in un minuto',
    sub: "Scrivi un solo argomento. In pochi secondi hai moduli, lezioni e quiz pronti — gratis per iniziare, potenziato con IA quando vuoi trasformarlo in un prodotto da vendere.", heroCtaButton: 'Provalo gratis ↓', sampleLabel: 'ECCO UN ESEMPIO VERO', sampleCta: 'Crea il tuo, gratis →', sampleCaption: 'Un esempio tra infiniti argomenti possibili — cambia ogni 10 secondi',
    labelTopic: 'Argomento del corso', phTopic: "Es. giardinaggio urbano, marketing per PMI, chitarra per principianti, storia dell'arte",
    labelAudience: 'A chi si rivolge il corso', phAudience: 'Es. chiunque sia curioso di iniziare, genitori, studenti, appassionati',
    phAudiencePro: 'Es. professionisti che vogliono migliorare le vendite, aziende, freelance',
    labelVertical: 'Il tuo settore', verticalGeneric: 'Generico', verticalSalute: 'Salute e benessere (terapeuti, coach del benessere)', verticalFitness: 'Fitness (personal trainer)', verticalBusiness: 'Business e consulenza', verticalCoaching: 'Coaching',
    labelLevel: 'Il tuo livello di partenza', levelBeginner: 'Principiante', levelIntermediate: 'Intermedio', levelAdvanced: 'Avanzato',
    labelGoal: 'Cosa deve saper fare chi lo finisce', phGoal: 'Es. valutare un immobile e presentarlo a un acquirente in modo efficace',
    labelModules: 'Numero moduli', labelTone: 'Tono',
    tonePratico: 'Pratico', toneAutorevole: 'Autorevole', toneAmichevole: 'Amichevole',
    labelLength: 'Lunghezza contenuto', lengthSintetico: 'Sintetico (solo struttura)', lengthCompleto: 'Formazione completa (testo esteso per lezione)',
    labelTier: 'Livello', tierFreeName: 'Gratis', tierFreeDesc: 'illustrazioni vettoriali',
    tierPremiumName: 'Premium', tierPremiumDesc: 'immagini generate da IA',
    btnGenerate: 'Genera il corso', btnGenerating: 'Generazione in corso…', btnRedirecting: 'Reindirizzamento al pagamento…', btnGeneratingPremium: 'Generazione in corso (con immagini)…',
    hintGeneral: 'Il testo generato è un punto di partenza: rivedilo e personalizzalo prima di condividerlo.',
    hintPro: 'Il testo generato è un punto di partenza: rivedilo e personalizzalo prima di venderlo ai tuoi clienti.',
    labelUsage: 'A chi serve questo corso', usageGeneral: 'Per me stesso o per hobby', usagePro: 'Devo venderlo professionalmente',
    btnPreviewPro: 'Genera anteprima gratuita', btnUnlockCompleto: 'Sblocca la formazione completa (€3,49)', btnUnlockPro: 'Sblocca il corso completo (€4,99)',
    previewLabel: 'Anteprima gratuita — Modulo 1', previewLockedNote: 'Gli altri moduli e le immagini si sbloccano con il pagamento.', errorPreviewPrefix: "Non sono riuscito a generare l'anteprima: ",
    salesKitLabel: 'Kit vendita', salesPitchLabel: 'Testo di vendita', priceLabel: 'Fascia di prezzo consigliata', faqLabel: 'Domande frequenti', deliveryTipLabel: 'Consiglio per la lezione',
    priceFreeValue: 'Gratis', priceCompletoValue: '€3,49', priceProValue: '€4,99',
    planCardsTitle: 'Scegli il tuo piano', planCardsSub: 'Ecco esattamente cosa cambia da un pacchetto all\'altro.', trustSecure: 'Pagamento sicuro con Stripe', trustNoSub: 'Nessun abbonamento nascosto', trustRefund: 'Rimborso per errori tecnici',
    labelPlanPicker: 'Scegli il tuo piano', pillFreeName: 'Gratis', pillCompletoName: 'Completo', pillProName: 'Pro',
    currencyNote: 'I prezzi convertiti sono indicativi. L\'addebito finale avviene tramite Stripe, in euro o nella tua valuta locale.',
    sidebarProfile: 'Profilo', sidebarNotLoggedIn: "Non hai effettuato l'accesso.", btnLoginSignup: 'Accedi o registrati',
    sidebarMyCourses: 'I miei corsi', sidebarLoginToSee: 'Accedi per vedere i corsi che hai acquistato.', sidebarNoCourses: 'Non hai ancora acquistato corsi.',
    sidebarSettings: 'Impostazioni', sidebarSettingsHint: 'Lingua e altre preferenze si trovano in alto nella pagina principale.',
    authTitle: 'Accedi o crea un account', authIntro: 'Salva i corsi che acquisti e ritrovali quando vuoi.',
    authEmailLabel: 'Email', authPasswordLabel: 'Password', btnLogin: 'Accedi', btnSignup: 'Crea account', btnLogout: 'Esci',
    showcaseBusiness: 'Business', showcaseCreative: 'Creatività', showcaseWellness: 'Benessere', showcaseTech: 'Tecnologia', showcaseFood: 'Cucina',
    btnStartQuiz: 'Fai il quiz finale', quizFinalLabel: 'Quiz finale', certNameLabel: 'Il tuo nome (per il certificato)', certNamePlaceholder: 'Mario Rossi',
    btnSubmitQuiz: 'Invia risposte', certNameRequired: 'Inserisci il tuo nome per generare il certificato.',
    quizFailMessage: 'Rivedi i moduli e riprova: alcune risposte non corrispondono ai concetti chiave.',
    certLabel: 'Certificato di completamento', certBodyText: 'ha completato con successo il corso', printCertLabel: 'Scarica certificato',
    certIssuedTo: 'Il presente certificato viene rilasciato a', certModulesLabel: 'moduli · formazione completa',
    certMethodLabel: 'Metodo seguito da ogni modulo', certMethodSteps: ['Aggancio', 'Concetto', 'Passo dopo passo', 'Esempio', 'Sfida'],
    certDisclaimer: 'Registro informale di completamento generato da Corsificio — non è un titolo o una certificazione ufficiale riconosciuta da enti o scuole.',
    certShareText: 'Ho appena completato il corso "{title}" su Corsificio —', showcaseFromLabel: 'Da',
    planMensileName: 'Piano Creator', priceMensileValue: '€19,90', perMonthLabel: '/mese',
    planMensileTagline: '15 corsi Completo al mese, per chi genera con frequenza',
    mensileFeature1: '15 generazioni "Completo" incluse al mese', mensileFeature2: 'Extra disponibili come acquisto singolo', mensileFeature3: 'Gestisci o cancella quando vuoi',
    btnSubscribeMonthly: 'Abbonati', btnManageSubscription: 'Gestisci abbonamento', usedThisMonthLabel: 'usati questo mese', subscriptionActivatedMsg: 'Abbonamento attivato! Puoi generare i tuoi corsi ora.',
    quotaEsgotataTitle: 'Hai usato tutte le generazioni del mese', quotaEsgotataMsg: 'Puoi comprare un corso singolo adesso, oppure aspettare il rinnovo del prossimo ciclo.', quotaRenewsOn: 'Si rinnova il {date}.', btnBuySingleInstead: 'Compra un corso singolo', subPaymentFailedTitle: 'Non siamo riusciti ad addebitare il tuo abbonamento', subPaymentFailedMsg: 'Aggiorna il tuo metodo di pagamento per continuare a usare il piano Creator.', btnUpdatePayment: 'Aggiorna metodo di pagamento',
    shareAsImageButton: 'Condividi come immagine', generatingImageLabel: 'Un attimo...', generatingImageError: "Non è stato possibile generare l'immagine.",
    generatePublicLinkButton: 'Genera link pubblico', generatingLinkLabel: 'Un attimo...', generatingLinkError: 'Non è stato possibile generare il link pubblico.', publicLinkReadyLabel: 'Link pubblico pronto — copialo:',
    faqTitle: 'Domande frequenti',
    faq1Q: 'Il piano gratuito è davvero gratis?', faq1A: 'Sì. Il piano Sintetico non richiede carta di credito e resta gratuito per sempre — non è una prova a tempo.',
    faq2Q: 'Come funziona il pagamento? È sicuro?', faq2A: 'I pagamenti sono gestiti interamente da Stripe. Non vediamo né conserviamo mai i dati della tua carta.',
    faq3Q: 'Posso avere un rimborso?', faq3A: "In generale no, perché il contenuto viene consegnato subito dopo il pagamento. Rimborsiamo in caso di errore tecnico o addebito duplicato — vedi la nostra politica di rimborso.",
    faq4Q: 'Il certificato è un titolo ufficiale?', faq4A: 'No. È un attestato informale di completamento del quiz all\'interno dell\'app, non una certificazione riconosciuta da enti o scuole.',
    faq5Q: 'In quali lingue funziona Corsificio?', faq5A: 'In 10 lingue: italiano, inglese, spagnolo, francese, tedesco, portoghese, cinese, giapponese, arabo e russo.',
    footerRights: 'Tutti i diritti riservati.', footerContact: 'Contatti', footerPrivacy: 'Privacy', footerTerms: 'Termini', footerRefund: 'Rimborsi',
    cookieText: 'Usiamo solo cookie necessari per il login e i pagamenti — nessun tracciamento pubblicitario.', cookieAccept: 'Capito', editableHint: 'Clicca su un testo per modificarlo direttamente.', shareLabel: 'Condividi:', shareCopyLink: 'Copia link', shareText: 'Ho appena creato il corso "{title}" con Corsificio —', newsletterTitle: 'Resta aggiornato', newsletterSub: 'Novità sui corsi e sui piani, senza spam. Puoi disiscriverti quando vuoi.', newsletterPlaceholder: 'tu@esempio.com', newsletterButton: 'Iscriviti', newsletterSuccess: 'Iscrizione confermata, grazie!', newsletterInvalid: 'Inserisci un\'email valida.', referralLabel: 'Invita un amico', referralText: 'Condividi questo codice: chi lo usa ottiene uno sconto.', referralCopyHint: '(clic per copiare)', referralCopied: 'Copiato!', showcaseExamplesIntro: 'Scegli un\'idea per iniziare subito, oppure scrivi la tua.', exBusiness1: 'Piano di marketing per una piccola impresa', exBusiness2: 'Le basi della negoziazione', exBusiness3: 'Introduzione alla contabilità per imprenditori', exBusiness4: 'Come lanciare un prodotto sul mercato', exCreative1: 'Disegno e schizzo per principianti', exCreative2: 'Scrittura creativa: come iniziare', exCreative3: 'Fotografia con lo smartphone', exCreative4: 'Fondamenti del design grafico', exWellness1: 'Meditazione per principianti', exWellness2: 'Yoga da fare a casa', exWellness3: 'Alimentazione consapevole', exWellness4: 'Gestire lo stress quotidiano', exTech1: 'Introduzione alla programmazione', exTech2: 'Intelligenza artificiale per principianti', exTech3: 'Sicurezza informatica di base', exTech4: 'Creare il tuo primo sito web', exFood1: 'Pasta fatta in casa da zero', exFood2: 'Panificazione per principianti', exFood3: 'Cucina vegetariana veloce', exFood4: 'Tecniche base di pasticceria',
    planFreeName: 'Sintetico', planFreeTagline: 'Il primo corso è gratis, senza carta di credito', planFreeFeatures: ['1 corso gratis, poi altri 2 creando un account', 'Struttura del corso in pochi secondi', 'Niente immagini, niente kit vendita'],
    planCompletoName: 'Completo', planCompletoTagline: 'Il salto di qualità: lezioni vere, non solo un indice', planCompletoFeatures: ['Fino a 5 volte più contenuto per modulo (700+ parole)', 'Immagine unica generata da IA per ogni modulo', 'Pagamento unico — resta tuo per sempre'],
    planProName: 'Professionale', planProTagline: 'Tutto incluso, pronto per insegnare o vendere',
    planProBadge: 'Consigliato per vendere', planProFeatures: ['Testo esteso e immagini IA come nel piano Completo', 'Consigli pratici per insegnare ogni modulo', 'Kit vendita pronto: pitch, prezzo, FAQ', 'Prova il Modulo 1 gratis prima di decidere'],
    aboutTitle: 'Chi siamo', aboutIntro: 'Corsificio è uno strumento piccolo e indipendente, pensato per rendere la creazione di corsi veloce, onesta e accessibile a chiunque.',
    aboutWhatTitle: 'Cosa facciamo', aboutWhatText: "Usiamo l'IA per trasformare un singolo argomento in un micro-corso strutturato in pochi minuti: moduli, lezioni, quiz e, per i professionisti, un kit vendita pronto all'uso.",
    aboutGoalTitle: 'Il nostro obiettivo', aboutGoalText: 'Abbassare la distanza tra ciò che sai e un corso che puoi davvero insegnare o vendere — che tu sia un professionista o semplicemente curioso.',
    aboutValuesTitle: 'In cosa crediamo', aboutValuesText: 'Prezzi chiari senza costi nascosti, un vero piano gratuito che resta gratuito, e contenuti che rivedi e rendi tuoi prima di condividerli con chiunque.',
    moreDetailsToggle: '+ Personalizza (facoltativo)', moreDetailsHint: "L'IA sceglie già tono e obiettivo sensati da sola — personalizza solo se vuoi controllare di più.", printButton: 'Scarica PDF',
    structureStreamLabel: 'IA sta pensando la struttura del corso…', structurePreviewEyebrow: 'Struttura proposta', btnApproveStructure: 'Genera il corso completo', btnRestartStructure: 'Cambia argomento',
    exampleChips: ['Yoga', 'Marketing', 'Chitarra', 'Cucina italiana', 'Fotografia'],
    loadingMessages: ['Sto strutturando il corso…', 'Sto scrivendo i moduli…', 'Sto rifinendo i dettagli…'],
    emptyState: 'Compila i campi a sinistra e premi "Genera il corso". Qui apparirà la struttura completa, modulo per modulo.',
    errorFillFields: "Inserisci almeno l'argomento e il pubblico del corso.", regenerateModuleBtn: 'Rigenera', regenerateModuleTip: 'Rigenera questo modulo con IA, senza toccare gli altri', regeneratingLabel: 'Un attimo...', regenerateErrorLabel: 'Errore, riprova', copyModuleSocialBtn: 'Per i social', copyModuleSocialTip: 'Copia questo modulo in formato breve per i social', socialPostCourseCredit: 'Corso completo: ',
    translateToggleLabel: 'Genera anche in altre lingue', moreActionsToggle: 'Altre azioni (traduzioni, condividi)', furtherReadingLabel: 'Punti di partenza per approfondire', furtherReadingDisclaimer: "Suggerimenti generali, non fonti usate per generare questo corso — l'IA non fa ricerche in tempo reale.", btnTranslateNow: 'Traduci', translateMaxLangs: 'Puoi selezionare fino a 3 lingue per volta.', translatingLabel: 'Traduzione in corso:', translateError: 'Errore traducendo in', translateDoneLabel: 'Fatto!', translateTabsLabel: 'Versioni:', translateOriginalLabel: 'Originale', verifiedBadgeLabel: 'Certificato verificato', quizScoreLabel: 'al quiz', issuedByLabel: 'Rilasciato da', errorFillMaterial: 'Incolla almeno qualche riga di materiale (minimo 40 caratteri).', modeTopicBtn: '✏️ Descrivi un argomento', modeMaterialBtn: '📄 Incolla il tuo materiale', labelMaterial: 'Le tue note, appunti o testo di partenza', phMaterial: "Incolla qui appunti, una bozza, il testo di una lezione già fatta... l'IA li trasforma in un corso strutturato.", labelUploadFile: 'Oppure carica un file (.pdf, .txt)', fileReading: 'Leggendo il file...', fileReadOk: 'File caricato — puoi modificare il testo qui sotto.', fileReadError: 'Non è stato possibile leggere il file. Prova a incollare il testo direttamente.', errorNetworkFriendly: 'Non riusciamo a raggiungere il server. Controlla la tua connessione e riprova tra poco.',
    courseGeneratedLabel: 'Micro-corso generato', premiumSuffix: ' — Premium', modulePrefix: 'Modulo', quizLabel: 'Verifica di apprendimento',
    copyButton: 'Copia come testo', copiedButton: 'Copiato ✓', retryButton: 'RIPROVA',
    errorPrefix: 'Non sono riuscito a generare il corso: ', errorPaymentStartPrefix: 'Non sono riuscito ad avviare il pagamento: ', errorPremiumPrefix: 'Non sono riuscito a generare il corso premium: ',
    paymentCancelled: 'Pagamento annullato. Nessun addebito effettuato.', paymentLostPrompt: 'Il pagamento è andato a buon fine, ma non troviamo i dettagli del corso da generare (può succedere se la memoria del browser è stata svuotata). Scrivici con questo codice e lo sblocchiamo per te.', btnForgotPassword: 'Password dimenticata?', forgotPasswordNeedEmail: 'Inserisci la tua email qui sopra, poi clicca di nuovo.', forgotPasswordSent: 'Ti abbiamo inviato un\'email per reimpostare la password.', newPasswordTitle: 'Imposta la tua nuova password', newPasswordIntro: 'Scegli una nuova password per accedere al tuo account.', newPasswordLabel: 'Nuova password', btnSetNewPassword: 'Salva la nuova password', newPasswordTooShort: 'La password deve avere almeno 6 caratteri.', newPasswordSuccess: 'Password aggiornata! Ora sei connesso con la nuova password.', subscriptionAlreadyActiveMsg: 'Hai già un abbonamento attivo. Vuoi aprire la gestione abbonamento?', btnDeleteAccount: 'Elimina il mio account', deleteAccountConfirm1: 'Questo eliminerà definitivamente il tuo account, i corsi salvati e annullerà qualsiasi abbonamento attivo. Non si può annullare. Continuare?', deleteAccountConfirm2: 'Sei sicuro? Non c\'è modo di recuperare dopo.', deleteAccountSuccess: 'Account eliminato. Ci mancherai.', newsletterUnavailable: 'Servizio non disponibile al momento. Riprova più tardi.', rotatorPhrases: ['Da un\'idea a un corso in un minuto', 'Il tuo sapere merita di essere insegnato', 'Zero esperienza tecnica richiesta', 'Gratis per iniziare, senza carta di credito'], statLanguages: 'lingue disponibili', statSeconds: 'secondi per la struttura', statFromPrice: 'corso gratis, senza account', statCertificate: 'certificato incluso', statLanguagesTip: 'Italiano, Inglese, Spagnolo, Francese, Tedesco, Portoghese, Cinese, Giapponese, Arabo, Russo', statSecondsTip: 'Tempo medio per generare la struttura completa del corso', statFromPriceTip: 'Poi altri 2 gratis creando un account, o passa subito al piano Completo da €3,49', statCertificateTip: 'Superando il quiz finale del corso', freeLimitTitle: 'Hai usato i tuoi corsi gratuiti', freeLimitMsg: 'Hai generato tutti e 3 i corsi gratuiti disponibili. Passa al piano Completo per continuare a creare corsi.', btnUpgradeNow: 'Passa al piano Completo', freeRemainingLabel: 'Ti restano {n} corsi gratuiti', freeLoginGateTitle: 'Crea un account per continuare gratis', freeLoginGateMsg: 'Hai usato la tua generazione anonima gratuita. Accedi o registrati (gratis) per sbloccare altre 2 generazioni gratuite legate al tuo account.',
    diffEyebrow: 'Perché Corsificio è diverso',
    diff1Title: 'Mai generico', diff1Body: 'Ogni corso segue un metodo fisso in 5 parti — Aggancio, Concetto, Passo dopo passo, Esempio, Sfida — non un riassunto qualsiasi. È lo stesso motivo per cui i corsi generici oggi non si vendono più.',
    diff2Title: 'Metodo trasparente', diff2Body: 'Non nascondiamo che è IA — mostriamo esattamente la struttura pedagogica che segue ogni modulo, verificabile prima di comprare. La fiducia si costruisce mostrando il metodo, non nascondendolo.',
    diff3Title: 'Progresso visibile', diff3Body: 'Barra di progresso, quiz per modulo e certificato finale — il motivo #1 per cui le persone abbandonano un corso è non vedere quanto hanno già fatto.',
    diff4Title: 'Zero attrito', diff4Body: 'Anteprima gratuita del primo modulo prima di pagare, pagamento sicuro in un clic con Stripe. Il 73% degli utenti abbandona per attrito nel pagamento — noi lo abbiamo tolto.',
    diff5Title: 'Promessa onesta', diff5Body: 'Non promettiamo risultati impossibili. Promettiamo un corso ben strutturato sul tuo argomento, in secondi invece che settimane — punto.',
    compareEyebrow: 'Vedi la differenza tu stesso', compareGenericLabel: 'Prompt qualsiasi a una IA generica', compareGenericText: '"La meditazione ha molti benefici. Aiuta a ridurre lo stress e migliorare la concentrazione. Ecco alcuni passaggi: respira profondamente, trova un posto tranquillo, pratica regolarmente."', compareCorsificioLabel: 'Modulo generato dal Corsificio', compareCorsificioText: '"Sono le 22h e la tua mente corre ancora sulle email di domani — familiare? Il problema non è la forza di volontà, è che non hai ancora un metodo. Ecco la tecnica 4-7-8: inspira contando fino a 4, trattieni per 7, espira per 8. Provala ora, prima di continuare a leggere. Sfida: fallo per 3 notti di fila e nota cosa cambia."', compareCaption: 'Stessa domanda, stesso tempo di generazione. La differenza è il metodo, non la fortuna.',
    chatAskTopic: 'Su cosa ne sai abbastanza da poterlo insegnare?', chatAskAudience: 'Perfetto. E a chi si rivolge questo corso?', chatAskPlan: 'Ottimo, ho abbastanza informazioni. Che livello di corso vuoi?',
    heroTicker: 'corsi generati finora',
  },
  en: {
    langNameForPrompt: 'English',
    titleMain: 'What you know', titleEm: 'becomes a course', titleEnd: 'in a minute',
    sub: "Type a single topic. In seconds you get modules, lessons and a quiz — free to start, supercharged with AI when you're ready to sell it.", heroCtaButton: 'Try it free ↓', sampleLabel: "HERE'S A REAL EXAMPLE", sampleCta: 'Create yours, free →', sampleCaption: 'One example among endless possible topics — changes every 10 seconds',
    labelTopic: 'Course topic', phTopic: 'E.g. urban gardening, marketing for small businesses, beginner guitar, art history',
    labelAudience: 'Who the course is for', phAudience: 'E.g. anyone curious to start, parents, students, enthusiasts',
    phAudiencePro: 'E.g. professionals looking to improve sales, businesses, freelancers',
    labelVertical: 'Your field', verticalGeneric: 'Generic', verticalSalute: 'Health & wellness (therapists, wellness coaches)', verticalFitness: 'Fitness (personal trainers)', verticalBusiness: 'Business & consulting', verticalCoaching: 'Coaching',
    labelLevel: 'Your starting level', levelBeginner: 'Beginner', levelIntermediate: 'Intermediate', levelAdvanced: 'Advanced',
    labelGoal: 'What learners should be able to do by the end', phGoal: 'E.g. evaluate a property and present it effectively to a buyer',
    labelModules: 'Number of modules', labelTone: 'Tone',
    tonePratico: 'Practical', toneAutorevole: 'Authoritative', toneAmichevole: 'Friendly',
    labelLength: 'Content length', lengthSintetico: 'Concise (structure only)', lengthCompleto: 'Full training (extended text per lesson)',
    labelTier: 'Tier', tierFreeName: 'Free', tierFreeDesc: 'vector illustrations',
    tierPremiumName: 'Premium', tierPremiumDesc: 'AI-generated images',
    btnGenerate: 'Generate course', btnGenerating: 'Generating…', btnRedirecting: 'Redirecting to payment…', btnGeneratingPremium: 'Generating (with images)…',
    hintGeneral: 'The generated text is a starting point: review and personalize it before sharing it.',
    hintPro: 'The generated text is a starting point: review and personalize it before selling it to your clients.',
    labelUsage: 'Who this course is for', usageGeneral: 'For myself or as a hobby', usagePro: "I'll sell it professionally",
    btnPreviewPro: 'Generate free preview', btnUnlockCompleto: 'Unlock full training (€3.49)', btnUnlockPro: 'Unlock full course (€4.99)',
    previewLabel: 'Free preview — Module 1', previewLockedNote: 'The remaining modules and images unlock with payment.', errorPreviewPrefix: "Couldn't generate the preview: ",
    salesKitLabel: 'Sales kit', salesPitchLabel: 'Sales pitch', priceLabel: 'Suggested price range', faqLabel: 'Frequently asked questions', deliveryTipLabel: 'Delivery tip',
    priceFreeValue: 'Free', priceCompletoValue: '€3.49', priceProValue: '€4.99',
    planCardsTitle: 'Choose your plan', planCardsSub: "Here's exactly what changes from one package to the next.", trustSecure: 'Secure payment via Stripe', trustNoSub: 'No hidden subscription', trustRefund: 'Refund for technical issues',
    labelPlanPicker: 'Choose your plan', pillFreeName: 'Free', pillCompletoName: 'Full', pillProName: 'Pro',
    currencyNote: 'Converted prices are approximate. The final charge is processed by Stripe, in euros or your local currency.',
    sidebarProfile: 'Profile', sidebarNotLoggedIn: "You're not signed in.", btnLoginSignup: 'Sign in or sign up',
    sidebarMyCourses: 'My courses', sidebarLoginToSee: 'Sign in to see the courses you\'ve purchased.', sidebarNoCourses: "You haven't purchased any courses yet.",
    sidebarSettings: 'Settings', sidebarSettingsHint: 'Language and other preferences are at the top of the main page.',
    authTitle: 'Sign in or create an account', authIntro: 'Save the courses you buy and find them again anytime.',
    authEmailLabel: 'Email', authPasswordLabel: 'Password', btnLogin: 'Sign in', btnSignup: 'Create account', btnLogout: 'Sign out',
    showcaseBusiness: 'Business', showcaseCreative: 'Creative', showcaseWellness: 'Wellness', showcaseTech: 'Technology', showcaseFood: 'Cooking',
    btnStartQuiz: 'Take the final quiz', quizFinalLabel: 'Final quiz', certNameLabel: 'Your name (for the certificate)', certNamePlaceholder: 'Jane Smith',
    btnSubmitQuiz: 'Submit answers', certNameRequired: 'Enter your name to generate the certificate.',
    quizFailMessage: "Review the modules and try again: some answers don't match the key concepts.",
    certLabel: 'Certificate of completion', certBodyText: 'has successfully completed the course', printCertLabel: 'Download certificate',
    certIssuedTo: 'This certificate is presented to', certModulesLabel: 'modules · full training',
    certMethodLabel: 'Method followed by every module', certMethodSteps: ['Hook', 'Concept', 'Step-by-step', 'Example', 'Challenge'],
    certDisclaimer: 'Informal completion record generated by Corsificio — not an official title or certification recognized by any institution.',
    certShareText: 'I just completed the course "{title}" on Corsificio —', showcaseFromLabel: 'From',
    planMensileName: 'Creator Plan', priceMensileValue: '€19.90', perMonthLabel: '/month',
    planMensileTagline: '15 Complete courses per month, for frequent creators',
    mensileFeature1: '15 "Complete" generations included per month', mensileFeature2: 'Extra available as single purchase', mensileFeature3: 'Manage or cancel anytime',
    btnSubscribeMonthly: 'Subscribe', btnManageSubscription: 'Manage subscription', usedThisMonthLabel: 'used this month',
    quotaEsgotataTitle: "You've used all your generations this month", quotaEsgotataMsg: 'You can buy a single course now, or wait for the next billing cycle.', quotaRenewsOn: 'Renews on {date}.', btnBuySingleInstead: 'Buy a single course', subPaymentFailedTitle: "We couldn't charge your subscription", subPaymentFailedMsg: 'Update your payment method to keep using the Creator plan.', btnUpdatePayment: 'Update payment method',
    shareAsImageButton: 'Share as image', generatingImageLabel: 'One moment...', generatingImageError: 'Could not generate the image.',
    generatePublicLinkButton: 'Generate public link', generatingLinkLabel: 'One moment...', generatingLinkError: 'Could not generate the public link.', publicLinkReadyLabel: 'Public link ready — copy it:',
    faqTitle: 'Frequently asked questions',
    faq1Q: 'Is the free plan really free?', faq1A: "Yes. The Concise plan doesn't require a credit card and stays free forever — it's not a timed trial.",
    faq2Q: 'How does payment work? Is it secure?', faq2A: "Payments are handled entirely by Stripe. We never see or store your card details.",
    faq3Q: 'Can I get a refund?', faq3A: "Generally no, since content is delivered right after payment. We refund technical errors or duplicate charges — see our refund policy.",
    faq4Q: 'Is the certificate an official credential?', faq4A: "No. It's an informal record of completing the in-app quiz, not a certification recognized by any institution or school.",
    faq5Q: 'What languages does Corsificio support?', faq5A: '10 languages: Italian, English, Spanish, French, German, Portuguese, Chinese, Japanese, Arabic and Russian.',
    footerRights: 'All rights reserved.', footerContact: 'Contact', footerPrivacy: 'Privacy', footerTerms: 'Terms', footerRefund: 'Refunds',
    cookieText: "We only use cookies necessary for login and payments — no advertising tracking.", cookieAccept: 'Got it', editableHint: 'Click on any text to edit it directly.', shareLabel: 'Share:', shareCopyLink: 'Copy link', shareText: 'I just created the course "{title}" with Corsificio —', newsletterTitle: 'Stay updated', newsletterSub: 'News about courses and plans, no spam. Unsubscribe anytime.', newsletterPlaceholder: 'you@example.com', newsletterButton: 'Subscribe', newsletterSuccess: "You're subscribed, thank you!", newsletterInvalid: 'Enter a valid email.',
    planFreeName: 'Concise', planFreeTagline: 'Your first course is free, no card required', planFreeFeatures: ['1 free course, then 2 more by creating an account', 'Course structure in seconds', 'No images, no sales kit'], referralLabel: 'Invite a friend', referralText: 'Share this code: whoever uses it gets a discount.', referralCopyHint: '(click to copy)', referralCopied: 'Copied!', showcaseExamplesIntro: 'Pick an idea to start right away, or write your own.', exBusiness1: 'Marketing plan for a small business', exBusiness2: 'Negotiation basics', exBusiness3: 'Bookkeeping for entrepreneurs', exBusiness4: 'How to launch a product', exCreative1: 'Drawing and sketching for beginners', exCreative2: 'Creative writing: getting started', exCreative3: 'Smartphone photography', exCreative4: 'Graphic design fundamentals', exWellness1: 'Meditation for beginners', exWellness2: 'Yoga at home', exWellness3: 'Mindful eating', exWellness4: 'Managing everyday stress', exTech1: 'Introduction to programming', exTech2: 'AI for beginners', exTech3: 'Cybersecurity basics', exTech4: 'Build your first website', exFood1: 'Homemade pasta from scratch', exFood2: 'Bread baking for beginners', exFood3: 'Quick vegetarian cooking', exFood4: 'Basic pastry techniques',
    planCompletoName: 'Full training', planCompletoTagline: 'The real upgrade: full lessons, not just an outline', planCompletoFeatures: ['Up to 5× more content per module (700+ words)', 'Unique AI-generated image for every module', 'One-time payment — yours forever'],
    planProName: 'Professional', planProTagline: 'Everything included, ready to teach or sell',
    planProBadge: 'Recommended to sell', planProFeatures: ['Extended text and AI images, just like Full training', 'Practical tips for teaching every module', 'Done-for-you sales kit: pitch, price, FAQ', 'Try Module 1 free before you decide'],
    aboutTitle: 'About Corsificio', aboutIntro: 'Corsificio is a small, independent tool built to make course creation fast, honest, and accessible to anyone.',
    aboutWhatTitle: 'What we do', aboutWhatText: 'We use AI to turn a single topic into a structured micro-course in minutes — modules, lessons, quizzes, and, for professionals, a ready-to-use sales kit.',
    aboutGoalTitle: 'Our goal', aboutGoalText: "To shorten the distance between what you know and a course you can actually teach or sell — whether you're a working professional or just curious.",
    aboutValuesTitle: 'What we believe in', aboutValuesText: 'Clear pricing with no hidden costs, a real free tier that stays free, and content you review and make your own before sharing it with anyone.',
    moreDetailsToggle: '+ Customize (optional)', moreDetailsHint: 'The AI already picks a sensible tone and goal on its own — customize only if you want more control.', printButton: 'Download PDF',
    structureStreamLabel: 'AI is thinking through the course structure…', structurePreviewEyebrow: 'Proposed structure', btnApproveStructure: 'Generate the full course', btnRestartStructure: 'Change topic',
    exampleChips: ['Yoga', 'Marketing', 'Guitar', 'Italian cooking', 'Photography'],
    loadingMessages: ['Structuring the course…', 'Writing the modules…', 'Polishing the details…'],
    emptyState: 'Fill in the fields on the left and press "Generate course". The full structure will appear here, module by module.',
    errorFillFields: 'Please enter at least the topic and the audience for the course.', regenerateModuleBtn: 'Regenerate', regenerateModuleTip: 'Regenerate this module with AI, without touching the others', regeneratingLabel: 'One moment...', regenerateErrorLabel: 'Error, try again', copyModuleSocialBtn: 'For social', copyModuleSocialTip: 'Copy this module in a short format for social media', socialPostCourseCredit: 'Full course: ',
    translateToggleLabel: 'Also generate in other languages', moreActionsToggle: 'More actions (translations, share)', furtherReadingLabel: 'Starting points to go deeper', furtherReadingDisclaimer: "General suggestions, not sources used to generate this course — the AI doesn't do real-time research.", btnTranslateNow: 'Translate', translateMaxLangs: 'You can select up to 3 languages at a time.', translatingLabel: 'Translating:', translateError: 'Error translating to', translateDoneLabel: 'Done!', translateTabsLabel: 'Versions:', translateOriginalLabel: 'Original', verifiedBadgeLabel: 'Verified certificate', quizScoreLabel: 'on quiz', issuedByLabel: 'Issued by', errorFillMaterial: 'Paste at least a few lines of material (minimum 40 characters).', modeTopicBtn: '✏️ Describe a topic', modeMaterialBtn: '📄 Paste your material', labelMaterial: 'Your notes, draft, or source text', phMaterial: "Paste notes, a draft, or the text of a lesson you've already written... the AI turns it into a structured course.", labelUploadFile: 'Or upload a file (.pdf, .txt)', fileReading: 'Reading file...', fileReadOk: "File loaded — you can edit the text below.", fileReadError: "Couldn't read the file. Try pasting the text directly.", errorNetworkFriendly: "We can't reach the server right now. Check your connection and try again shortly.",
    courseGeneratedLabel: 'Generated micro-course', premiumSuffix: ' — Premium', modulePrefix: 'Module', quizLabel: 'Knowledge check',
    copyButton: 'Copy as text', copiedButton: 'Copied ✓', retryButton: 'RETRY',
    errorPrefix: "Couldn't generate the course: ", errorPaymentStartPrefix: "Couldn't start the payment: ", errorPremiumPrefix: "Couldn't generate the premium course: ",
    paymentCancelled: 'Payment cancelled. No charge was made.', paymentLostPrompt: "Your payment went through, but we can't find the course details to generate (this can happen if your browser storage was cleared). Contact us with this code and we'll unlock it for you.", btnForgotPassword: 'Forgot password?', forgotPasswordNeedEmail: 'Enter your email above, then click again.', forgotPasswordSent: "We've sent you an email to reset your password.", newPasswordTitle: 'Set your new password', newPasswordIntro: 'Choose a new password to access your account.', newPasswordLabel: 'New password', btnSetNewPassword: 'Save new password', newPasswordTooShort: 'Password must be at least 6 characters.', newPasswordSuccess: "Password updated! You're now signed in with the new password.", subscriptionAlreadyActiveMsg: 'You already have an active subscription. Open subscription management?', btnDeleteAccount: 'Delete my account', deleteAccountConfirm1: 'This will permanently delete your account, saved courses, and cancel any active subscription. This cannot be undone. Continue?', deleteAccountConfirm2: "Are you really sure? There's no way to recover this afterwards.", deleteAccountSuccess: "Account deleted. We'll miss you.", newsletterUnavailable: 'Service unavailable right now. Please try again later.', rotatorPhrases: ['From idea to course in one minute', 'What you know deserves to be taught', 'Zero technical experience needed', 'Free to start, no credit card'], statLanguages: 'languages available', statSeconds: 'seconds for the structure', statFromPrice: 'free course, no account', statCertificate: 'certificate included', statLanguagesTip: 'Italian, English, Spanish, French, German, Portuguese, Chinese, Japanese, Arabic, Russian', statSecondsTip: 'Average time to generate the full course structure', statFromPriceTip: 'Then 2 more free by creating an account, or switch straight to the Completo plan from €3.49', statCertificateTip: 'By passing the course final quiz', freeLimitTitle: "You've used your free courses", freeLimitMsg: "You've generated all 3 free courses available. Switch to the Completo plan to keep creating courses.", btnUpgradeNow: 'Switch to Completo plan', freeRemainingLabel: '{n} free courses left', freeLoginGateTitle: 'Create an account to keep going free', freeLoginGateMsg: "You've used your free anonymous generation. Sign in or sign up (free) to unlock 2 more free generations tied to your account.",
    diffEyebrow: 'Why Corsificio is different',
    diff1Title: 'Never generic', diff1Body: 'Every course follows a fixed 5-part method — Hook, Concept, Step-by-step, Example, Challenge — not just any summary. This is exactly why generic courses stopped selling.',
    diff2Title: 'Transparent method', diff2Body: "We don't hide that it's AI — we show you the exact pedagogical structure every module follows, verifiable before you buy. Trust is built by showing the method, not hiding it.",
    diff3Title: 'Visible progress', diff3Body: "Progress bar, quiz per module, final certificate — the #1 reason people abandon a course is not seeing how far they've come.",
    diff4Title: 'Zero friction', diff4Body: "Free preview of module 1 before paying, secure one-click checkout with Stripe. 73% of users abandon due to payment friction — we removed it.",
    diff5Title: 'Honest promise', diff5Body: "We don't promise impossible results. We promise a well-structured course on your topic, in seconds instead of weeks — full stop.",
    compareEyebrow: 'See the difference yourself', compareGenericLabel: 'Any prompt to a generic AI', compareGenericText: '"Meditation has many benefits. It helps reduce stress and improve focus. Here are some steps: breathe deeply, find a quiet spot, practice regularly."', compareCorsificioLabel: 'Module generated by Corsificio', compareCorsificioText: '"It\'s 10pm and your mind is still racing through tomorrow\'s emails — sound familiar? The problem isn\'t willpower, it\'s that you don\'t have a method yet. Here\'s the 4-7-8 technique: inhale for 4 counts, hold for 7, exhale for 8. Try it right now, before reading on. Challenge: do it for 3 nights in a row and notice what changes."', compareCaption: 'Same question, same generation time. The difference is the method, not luck.',
    chatAskTopic: 'What do you know enough about to teach it?', chatAskAudience: 'Perfect. And who is this course for?', chatAskPlan: "Great, that's enough for now. What level of course do you want?",
    heroTicker: 'courses generated so far',
  },
  es: {
    langNameForPrompt: 'Spanish',
    titleMain: 'Lo que sabes', titleEm: 'se convierte en curso', titleEnd: 'en un minuto',
    sub: 'Escribe un solo tema. En segundos tienes módulos, lecciones y cuestionario — gratis para empezar, potenciado con IA cuando quieras venderlo.', heroCtaButton: 'Pruébalo gratis ↓', sampleLabel: 'AQUÍ TIENES UN EJEMPLO REAL', sampleCta: 'Crea el tuyo, gratis →', sampleCaption: 'Un ejemplo entre infinitos temas posibles — cambia cada 10 segundos',
    labelTopic: 'Tema del curso', phTopic: 'Ej. jardinería urbana, marketing para pymes, guitarra para principiantes, historia del arte',
    labelAudience: 'A quién se dirige el curso', phAudience: 'Ej. cualquiera con curiosidad por empezar, padres, estudiantes, aficionados',
    labelGoal: 'Qué debe saber hacer quien lo termine', phGoal: 'Ej. evaluar un inmueble y presentarlo eficazmente a un comprador',
    labelModules: 'Número de módulos', labelTone: 'Tono',
    tonePratico: 'Práctico', toneAutorevole: 'Autorizado', toneAmichevole: 'Cercano',
    labelLength: 'Extensión del contenido', lengthSintetico: 'Sintético (solo estructura)', lengthCompleto: 'Formación completa (texto extenso por lección)',
    labelTier: 'Nivel', tierFreeName: 'Gratis', tierFreeDesc: 'ilustraciones vectoriales',
    tierPremiumName: 'Premium', tierPremiumDesc: 'imágenes generadas por IA',
    btnGenerate: 'Generar curso', btnGenerating: 'Generando…', btnRedirecting: 'Redirigiendo al pago…', btnGeneratingPremium: 'Generando (con imágenes)…',
    hintGeneral: 'El texto generado es un punto de partida: revísalo y personalízalo antes de compartirlo.',
    hintPro: 'El texto generado es un punto de partida: revísalo y personalízalo antes de vendérselo a tus clientes.',
    labelUsage: 'Para qué es este curso', usageGeneral: 'Para mí mismo o como hobby', usagePro: 'Voy a venderlo profesionalmente',
    btnPreviewPro: 'Generar vista previa gratis', btnUnlockCompleto: 'Desbloquear formación completa (€3,49)', btnUnlockPro: 'Desbloquear curso completo (€4,99)',
    previewLabel: 'Vista previa gratis — Módulo 1', previewLockedNote: 'Los demás módulos e imágenes se desbloquean con el pago.', errorPreviewPrefix: 'No pude generar la vista previa: ',
    salesKitLabel: 'Kit de venta', salesPitchLabel: 'Texto de venta', priceLabel: 'Rango de precio sugerido', faqLabel: 'Preguntas frecuentes', deliveryTipLabel: 'Consejo para impartir la clase',
    priceFreeValue: 'Gratis', priceCompletoValue: '€3,49', priceProValue: '€4,99',
    planCardsTitle: 'Elige tu plan', planCardsSub: 'Esto es exactamente lo que cambia de un paquete a otro.', trustSecure: 'Pago seguro con Stripe', trustNoSub: 'Sin suscripción oculta', trustRefund: 'Reembolso por errores técnicos',
    labelPlanPicker: 'Elige tu plan', pillFreeName: 'Gratis', pillCompletoName: 'Completo', pillProName: 'Pro',
    currencyNote: 'Los precios convertidos son orientativos. El cobro final lo procesa Stripe, en euros o en tu moneda local.',
    sidebarProfile: 'Perfil', sidebarNotLoggedIn: 'No has iniciado sesión.', btnLoginSignup: 'Inicia sesión o regístrate',
    sidebarMyCourses: 'Mis cursos', sidebarLoginToSee: 'Inicia sesión para ver los cursos que compraste.', sidebarNoCourses: 'Todavía no has comprado ningún curso.',
    sidebarSettings: 'Configuración', sidebarSettingsHint: 'El idioma y otras preferencias están arriba en la página principal.',
    authTitle: 'Inicia sesión o crea una cuenta', authIntro: 'Guarda los cursos que compras y encuéntralos cuando quieras.',
    authEmailLabel: 'Email', authPasswordLabel: 'Contraseña', btnLogin: 'Iniciar sesión', btnSignup: 'Crear cuenta', btnLogout: 'Cerrar sesión',
    showcaseBusiness: 'Negocios', showcaseCreative: 'Creatividad', showcaseWellness: 'Bienestar', showcaseTech: 'Tecnología', showcaseFood: 'Cocina',
    btnStartQuiz: 'Hacer el cuestionario final', quizFinalLabel: 'Cuestionario final', certNameLabel: 'Tu nombre (para el certificado)', certNamePlaceholder: 'Juan Pérez',
    btnSubmitQuiz: 'Enviar respuestas', certNameRequired: 'Introduce tu nombre para generar el certificado.',
    quizFailMessage: 'Revisa los módulos e inténtalo de nuevo: algunas respuestas no coinciden con los conceptos clave.',
    certLabel: 'Certificado de finalización', certBodyText: 'ha completado con éxito el curso', printCertLabel: 'Descargar certificado',
    certIssuedTo: 'El presente certificado se otorga a', certModulesLabel: 'módulos · formación completa',
    faqTitle: 'Preguntas frecuentes',
    faq1Q: '¿El plan gratuito es realmente gratis?', faq1A: 'Sí. El plan Sintético no pide tarjeta de crédito y sigue siendo gratis para siempre — no es una prueba con límite de tiempo.',
    faq2Q: '¿Cómo funciona el pago? ¿Es seguro?', faq2A: 'Los pagos los procesa Stripe por completo. Nunca vemos ni guardamos los datos de tu tarjeta.',
    faq3Q: '¿Puedo pedir un reembolso?', faq3A: 'En general no, porque el contenido se entrega justo después del pago. Reembolsamos errores técnicos o cobros duplicados — mira nuestra política de reembolso.',
    faq4Q: '¿El certificado es un título oficial?', faq4A: 'No. Es un registro informal de haber completado el cuestionario dentro de la app, no una certificación reconocida por ninguna institución.',
    faq5Q: '¿En qué idiomas funciona Corsificio?', faq5A: 'En 10 idiomas: italiano, inglés, español, francés, alemán, portugués, chino, japonés, árabe y ruso.',
    footerRights: 'Todos los derechos reservados.', footerContact: 'Contacto', footerPrivacy: 'Privacidad', footerTerms: 'Términos', footerRefund: 'Reembolsos',
    cookieText: 'Solo usamos cookies necesarias para el inicio de sesión y los pagos — sin rastreo publicitario.', cookieAccept: 'Entendido', editableHint: 'Haz clic en cualquier texto para editarlo directamente.', shareLabel: 'Compartir:', shareCopyLink: 'Copiar enlace', shareText: 'Acabo de crear el curso "{title}" con Corsificio —', newsletterTitle: 'Mantente al día', newsletterSub: 'Novedades sobre cursos y planes, sin spam. Puedes darte de baja cuando quieras.', newsletterPlaceholder: 'tu@ejemplo.com', newsletterButton: 'Suscribirse', newsletterSuccess: '¡Suscripción confirmada, gracias!', newsletterInvalid: 'Introduce un email válido.',
    planFreeName: 'Sintético', planFreeTagline: 'Tu primer curso es gratis, sin tarjeta', planFreeFeatures: ['1 curso gratis, luego 2 más creando una cuenta', 'Estructura del curso en segundos', 'Sin imágenes, sin kit de venta'],
    planCompletoName: 'Completo', planCompletoTagline: 'El salto de calidad: lecciones reales, no solo un índice', planCompletoFeatures: ['Hasta 5 veces más contenido por módulo (700+ palabras)', 'Imagen única generada por IA en cada módulo', 'Pago único — tuyo para siempre'], referralLabel: 'Invita a un amigo', referralText: 'Comparte este código: quien lo use obtiene un descuento.', referralCopyHint: '(clic para copiar)', referralCopied: '¡Copiado!', showcaseExamplesIntro: 'Elige una idea para empezar ya, o escribe la tuya.', exBusiness1: 'Plan de marketing para una pequeña empresa', exBusiness2: 'Fundamentos de negociación', exBusiness3: 'Contabilidad para emprendedores', exBusiness4: 'Cómo lanzar un producto al mercado', exCreative1: 'Dibujo y boceto para principiantes', exCreative2: 'Escritura creativa: cómo empezar', exCreative3: 'Fotografía con el móvil', exCreative4: 'Fundamentos del diseño gráfico', exWellness1: 'Meditación para principiantes', exWellness2: 'Yoga en casa', exWellness3: 'Alimentación consciente', exWellness4: 'Gestionar el estrés diario', exTech1: 'Introducción a la programación', exTech2: 'IA para principiantes', exTech3: 'Ciberseguridad básica', exTech4: 'Crea tu primera página web', exFood1: 'Pasta casera desde cero', exFood2: 'Panadería para principiantes', exFood3: 'Cocina vegetariana rápida', exFood4: 'Técnicas básicas de repostería',
    planProName: 'Profesional', planProTagline: 'Todo incluido, listo para enseñar o vender',
    planProBadge: 'Recomendado para vender', planProFeatures: ['Texto extenso e imágenes IA, como en el plan Completo', 'Consejos prácticos para dar cada módulo', 'Kit de venta listo: pitch, precio, FAQ', 'Prueba el Módulo 1 gratis antes de decidir'],
    aboutTitle: 'Quiénes somos', aboutIntro: 'Corsificio es una herramienta pequeña e independiente, creada para que hacer cursos sea rápido, honesto y accesible para cualquiera.',
    aboutWhatTitle: 'Qué hacemos', aboutWhatText: 'Usamos IA para convertir un solo tema en un micro-curso estructurado en minutos: módulos, lecciones, cuestionarios y, para profesionales, un kit de venta listo para usar.',
    aboutGoalTitle: 'Nuestro objetivo', aboutGoalText: 'Reducir la distancia entre lo que sabes y un curso que realmente puedas enseñar o vender — seas profesional o simplemente curioso.',
    aboutValuesTitle: 'En qué creemos', aboutValuesText: 'Precios claros sin costos ocultos, un plan gratuito real que sigue siendo gratis, y contenido que revisas y haces tuyo antes de compartirlo con quien sea.',
    moreDetailsToggle: '+ Personalizar (módulos, tono, objetivo)', printButton: 'Descargar PDF',
    exampleChips: ['Yoga', 'Marketing', 'Guitarra', 'Cocina italiana', 'Fotografía'],
    loadingMessages: ['Estructurando el curso…', 'Escribiendo los módulos…', 'Puliendo los detalles…'],
    emptyState: 'Completa los campos de la izquierda y pulsa "Generar curso". Aquí aparecerá la estructura completa, módulo por módulo.',
    errorFillFields: 'Introduce al menos el tema y el público del curso.', errorNetworkFriendly: 'No podemos conectar con el servidor en este momento. Revisa tu conexión e inténtalo de nuevo en breve.',
    courseGeneratedLabel: 'Micro-curso generado', premiumSuffix: ' — Premium', modulePrefix: 'Módulo', quizLabel: 'Verificación de aprendizaje',
    copyButton: 'Copiar como texto', copiedButton: 'Copiado ✓', retryButton: 'REINTENTAR',
    errorPrefix: 'No pude generar el curso: ', errorPaymentStartPrefix: 'No pude iniciar el pago: ', errorPremiumPrefix: 'No pude generar el curso premium: ',
    paymentCancelled: 'Pago cancelado. No se realizó ningún cargo.', paymentLostPrompt: 'El pago se realizó correctamente, pero no encontramos los datos del curso a generar (puede pasar si se borró la memoria del navegador). Escríbenos con este código y lo desbloqueamos por ti.', btnForgotPassword: '¿Olvidaste tu contraseña?', forgotPasswordNeedEmail: 'Introduce tu email arriba y vuelve a hacer clic.', forgotPasswordSent: 'Te hemos enviado un email para restablecer tu contraseña.', newsletterUnavailable: 'Servicio no disponible en este momento. Inténtalo más tarde.', rotatorPhrases: ['De una idea a un curso en un minuto', 'Lo que sabes merece ser enseñado', 'Cero experiencia técnica necesaria', 'Gratis para empezar, sin tarjeta'], statLanguages: 'idiomas disponibles', statSeconds: 'segundos para la estructura', statFromPrice: 'curso gratis, sin cuenta', statCertificate: 'certificado incluido', statLanguagesTip: 'Italiano, inglés, español, francés, alemán, portugués, chino, japonés, árabe, ruso', statSecondsTip: 'Tiempo medio para generar la estructura completa del curso', statFromPriceTip: 'Luego pasa al plan Completo desde €3,49', statCertificateTip: 'Al aprobar el cuestionario final del curso', freeLimitTitle: 'Has usado tus cursos gratis', freeLimitMsg: 'Has generado los 3 cursos gratis disponibles. Pasa al plan Completo para seguir creando cursos.', btnUpgradeNow: 'Pasar al plan Completo', freeRemainingLabel: 'Te quedan {n} cursos gratis',
  btnApproveStructure: 'Generar el curso completo', btnBuySingleInstead: 'Comprar un curso suelto', btnManageSubscription: 'Gestionar suscripción', btnRestartStructure: 'Cambiar de tema', btnSubscribeMonthly: 'Suscribirse', btnTranslateNow: 'Traducir', certDisclaimer: 'Registro informal de finalización generado por Corsificio — no es un título ni una certificación oficial reconocida por ninguna institución.', certMethodLabel: 'Método seguido por cada módulo', certMethodSteps: ['Gancho', 'Concepto', 'Paso a paso', 'Ejemplo', 'Desafío'], certShareText: 'Acabo de completar el curso "{title}" en Corsificio —', chatAskAudience: 'Perfecto. ¿Y para quién es este curso?', chatAskPlan: 'Genial, con esto ya basta. ¿Qué nivel de curso quieres?', chatAskTopic: '¿Sobre qué sabes lo suficiente como para enseñarlo?', compareCaption: 'Misma pregunta, mismo tiempo de generación. La diferencia es el método, no la suerte.', compareCorsificioLabel: 'Módulo generado por Corsificio', compareCorsificioText: '"Son las 22h y tu cabeza sigue en los correos de mañana — ¿te suena? El problema no es la fuerza de voluntad, es que aún no tienes un método. Aquí va la técnica 4-7-8: inhala contando hasta 4, mantén 7, exhala en 8. Pruébalo ahora mismo, antes de seguir leyendo. Desafío: hazlo 3 noches seguidas y observa qué cambia."', compareEyebrow: 'Mira la diferencia tú mismo', compareGenericLabel: 'Cualquier prompt a una IA genérica', compareGenericText: '"La meditación tiene muchos beneficios. Ayuda a reducir el estrés y mejorar la concentración. Aquí van algunos pasos: respira profundo, busca un lugar tranquilo, practica con regularidad."', copyModuleSocialBtn: 'Para redes', copyModuleSocialTip: 'Copia este módulo en formato breve para redes sociales', diff1Body: 'Cada curso sigue un método fijo de 5 partes — Gancho, Concepto, Paso a paso, Ejemplo, Desafío — no es un resumen cualquiera. Por eso los cursos genéricos dejaron de venderse.', diff1Title: 'Nunca genérico', diff2Body: 'No escondemos que es IA — te mostramos la estructura pedagógica exacta que sigue cada módulo, verificable antes de comprar. La confianza se construye mostrando el método, no ocultándolo.', diff2Title: 'Método transparente', diff3Body: 'Barra de progreso, quiz por módulo, certificado final — el motivo #1 por el que la gente abandona un curso es no ver cuánto ha avanzado.', diff3Title: 'Progreso visible', diff4Body: 'Vista previa gratis del módulo 1 antes de pagar, pago seguro en un clic con Stripe. El 73% de los usuarios abandona por fricción en el pago — nosotros la eliminamos.', diff4Title: 'Fricción cero', diff5Body: 'No prometemos resultados imposibles. Prometemos un curso bien estructurado sobre tu tema, en segundos en vez de semanas — y punto.', diff5Title: 'Promesa honesta', diffEyebrow: 'Por qué Corsificio es diferente', errorFillMaterial: 'Pega al menos algunas líneas de material (mínimo 40 caracteres).', fileReadError: 'No se pudo leer el archivo. Prueba a pegar el texto directamente.', fileReadOk: 'Archivo cargado — puedes editar el texto abajo.', fileReading: 'Leyendo archivo...', freeLoginGateMsg: 'Ya usaste tu generación anónima gratis. Inicia sesión o regístrate (gratis) para desbloquear 2 generaciones gratis más vinculadas a tu cuenta.', freeLoginGateTitle: 'Crea una cuenta para seguir gratis', generatePublicLinkButton: 'Generar enlace público', generatingImageError: 'No se pudo generar la imagen.', generatingImageLabel: 'Un momento...', generatingLinkError: 'No se pudo generar el enlace público.', generatingLinkLabel: 'Un momento...', issuedByLabel: 'Emitido por', labelLevel: 'Tu nivel de partida', labelMaterial: 'Tus notas, borrador o texto de partida', labelUploadFile: 'O sube un archivo (.pdf, .txt)', labelVertical: 'Tu sector', levelAdvanced: 'Avanzado', levelBeginner: 'Principiante', levelIntermediate: 'Intermedio', mensileFeature1: '15 generaciones "Completo" incluidas al mes', mensileFeature2: 'Extras disponibles como compra suelta', mensileFeature3: 'Gestiona o cancela cuando quieras', modeMaterialBtn: '📄 Pega tu material', modeTopicBtn: '✏️ Describe un tema', moreDetailsHint: 'La IA ya elige un tono y objetivo razonables por su cuenta — personaliza solo si quieres más control.', perMonthLabel: '/mes', phAudiencePro: 'Ej. profesionales que quieren mejorar ventas, empresas, autónomos', phMaterial: 'Pega apuntes, un borrador o el texto de una clase que ya diste... la IA lo convierte en un curso estructurado.', planMensileName: 'Plan Creator', planMensileTagline: '15 cursos Completo al mes, para quien crea con frecuencia', priceMensileValue: '€19,90', publicLinkReadyLabel: 'Enlace público listo — cópialo:', quizScoreLabel: 'en el quiz', quotaEsgotataMsg: 'Puedes comprar un curso suelto ahora, o esperar la renovación del próximo ciclo.', quotaEsgotataTitle: 'Has usado todas las generaciones del mes', quotaRenewsOn: 'Se renueva el {date}.', regenerateErrorLabel: 'Error, inténtalo de nuevo', regenerateModuleBtn: 'Regenerar', regenerateModuleTip: 'Regenera solo este módulo con IA, sin tocar los demás', regeneratingLabel: 'Un momento...', shareAsImageButton: 'Compartir como imagen', showcaseFromLabel: 'Desde', socialPostCourseCredit: 'Curso completo: ', structurePreviewEyebrow: 'Estructura propuesta', structureStreamLabel: 'La IA está pensando la estructura del curso…', subscriptionActivatedMsg: '¡Suscripción activada! Ya puedes generar tus cursos.', translateDoneLabel: '¡Listo!', translateError: 'Error traduciendo a', translateMaxLangs: 'Puedes seleccionar hasta 3 idiomas a la vez.', translateOriginalLabel: 'Original', translateTabsLabel: 'Versiones:', translateToggleLabel: 'Generar también en otros idiomas', translatingLabel: 'Traduciendo:', usedThisMonthLabel: 'usados este mes', verifiedBadgeLabel: 'Certificado verificado', verticalBusiness: 'Negocios y consultoría', verticalCoaching: 'Coaching', verticalFitness: 'Fitness (entrenadores personales)', verticalGeneric: 'Genérico', verticalSalute: 'Salud y bienestar (terapeutas, coaches de bienestar)', },
  fr: {
    langNameForPrompt: 'French',
    titleMain: 'Ce que vous savez', titleEm: 'devient un cours', titleEnd: 'en une minute',
    sub: "Tapez un seul sujet. En quelques secondes, vous avez modules, leçons et quiz — gratuit pour commencer, boosté à l'IA quand vous êtes prêt à le vendre.", heroCtaButton: 'Essayez gratuitement ↓', sampleLabel: 'VOICI UN VRAI EXEMPLE', sampleCta: 'Créez le vôtre, gratuit →', sampleCaption: 'Un exemple parmi une infinité de sujets possibles — change toutes les 10 secondes',
    labelTopic: 'Sujet du cours', phTopic: 'Ex. jardinage urbain, marketing pour PME, guitare pour débutants, histoire de l\'art',
    labelAudience: 'À qui s\'adresse le cours', phAudience: 'Ex. toute personne curieuse de commencer, parents, étudiants, passionnés',
    labelGoal: 'Ce que les apprenants doivent savoir faire à la fin', phGoal: 'Ex. évaluer un bien immobilier et le présenter efficacement à un acheteur',
    labelModules: 'Nombre de modules', labelTone: 'Ton',
    tonePratico: 'Pratique', toneAutorevole: 'Autoritaire', toneAmichevole: 'Amical',
    labelLength: 'Longueur du contenu', lengthSintetico: 'Synthétique (structure seule)', lengthCompleto: 'Formation complète (texte détaillé par leçon)',
    labelTier: 'Niveau', tierFreeName: 'Gratuit', tierFreeDesc: 'illustrations vectorielles',
    tierPremiumName: 'Premium', tierPremiumDesc: 'images générées par IA',
    btnGenerate: 'Générer le cours', btnGenerating: 'Génération en cours…', btnRedirecting: 'Redirection vers le paiement…', btnGeneratingPremium: 'Génération en cours (avec images)…',
    hintGeneral: 'Le texte généré est un point de départ : relisez-le et personnalisez-le avant de le partager.',
    hintPro: 'Le texte généré est un point de départ : relisez-le et personnalisez-le avant de le vendre à vos clients.',
    labelUsage: 'À quoi sert ce cours', usageGeneral: 'Pour moi-même ou en tant que hobby', usagePro: 'Je vais le vendre professionnellement',
    btnPreviewPro: 'Générer un aperçu gratuit', btnUnlockCompleto: 'Débloquer la formation complète (3,49 €)', btnUnlockPro: 'Débloquer le cours complet (4,99 €)',
    previewLabel: 'Aperçu gratuit — Module 1', previewLockedNote: 'Les autres modules et images se débloquent avec le paiement.', errorPreviewPrefix: "Impossible de générer l'aperçu : ",
    salesKitLabel: 'Kit de vente', salesPitchLabel: 'Argumentaire de vente', priceLabel: 'Fourchette de prix suggérée', faqLabel: 'Questions fréquentes', deliveryTipLabel: 'Conseil pour animer la leçon',
    priceFreeValue: 'Gratuit', priceCompletoValue: '3,49 €', priceProValue: '4,99 €',
    planCardsTitle: 'Choisissez votre plan', planCardsSub: "Voici exactement ce qui change d'un forfait à l'autre.", trustSecure: 'Paiement sécurisé avec Stripe', trustNoSub: "Pas d'abonnement caché", trustRefund: 'Remboursement en cas d\'erreur technique',
    labelPlanPicker: 'Choisissez votre plan', pillFreeName: 'Gratuit', pillCompletoName: 'Complet', pillProName: 'Pro',
    currencyNote: 'Les prix convertis sont indicatifs. Le montant final est traité par Stripe, en euros ou dans votre devise locale.',
    sidebarProfile: 'Profil', sidebarNotLoggedIn: "Vous n'êtes pas connecté.", btnLoginSignup: 'Connexion ou inscription',
    sidebarMyCourses: 'Mes cours', sidebarLoginToSee: 'Connectez-vous pour voir les cours que vous avez achetés.', sidebarNoCourses: "Vous n'avez pas encore acheté de cours.",
    sidebarSettings: 'Paramètres', sidebarSettingsHint: 'La langue et les autres préférences se trouvent en haut de la page principale.',
    authTitle: 'Connectez-vous ou créez un compte', authIntro: 'Enregistrez les cours que vous achetez et retrouvez-les à tout moment.',
    authEmailLabel: 'Email', authPasswordLabel: 'Mot de passe', btnLogin: 'Se connecter', btnSignup: 'Créer un compte', btnLogout: 'Se déconnecter',
    showcaseBusiness: 'Business', showcaseCreative: 'Créativité', showcaseWellness: 'Bien-être', showcaseTech: 'Technologie', showcaseFood: 'Cuisine',
    btnStartQuiz: 'Faire le quiz final', quizFinalLabel: 'Quiz final', certNameLabel: 'Votre nom (pour le certificat)', certNamePlaceholder: 'Jean Dupont',
    btnSubmitQuiz: 'Envoyer les réponses', certNameRequired: 'Entrez votre nom pour générer le certificat.',
    quizFailMessage: 'Revoyez les modules et réessayez : certaines réponses ne correspondent pas aux concepts clés.',
    certLabel: "Certificat d'achèvement", certBodyText: 'a terminé avec succès le cours', printCertLabel: 'Télécharger le certificat',
    certIssuedTo: 'Ce certificat est décerné à', certModulesLabel: 'modules · formation complète',
    faqTitle: 'Questions fréquentes',
    faq1Q: 'Le plan gratuit est-il vraiment gratuit ?', faq1A: "Oui. Le plan Synthétique ne demande pas de carte bancaire et reste gratuit pour toujours — ce n'est pas un essai limité dans le temps.",
    faq2Q: 'Comment fonctionne le paiement ? Est-il sécurisé ?', faq2A: 'Les paiements sont entièrement gérés par Stripe. Nous ne voyons ni ne stockons jamais les données de votre carte.',
    faq3Q: 'Puis-je obtenir un remboursement ?', faq3A: 'En général non, car le contenu est livré juste après le paiement. Nous remboursons les erreurs techniques ou les doubles paiements — voir notre politique de remboursement.',
    faq4Q: 'Le certificat est-il un titre officiel ?', faq4A: "Non. C'est une attestation informelle d'avoir terminé le quiz dans l'application, pas une certification reconnue par un établissement.",
    faq5Q: 'Dans quelles langues Corsificio fonctionne-t-il ?', faq5A: 'En 10 langues : italien, anglais, espagnol, français, allemand, portugais, chinois, japonais, arabe et russe.',
    footerRights: 'Tous droits réservés.', footerContact: 'Contact', footerPrivacy: 'Confidentialité', footerTerms: 'Conditions', footerRefund: 'Remboursements',
    cookieText: 'Nous utilisons uniquement les cookies nécessaires à la connexion et aux paiements — aucun suivi publicitaire.', cookieAccept: 'Compris', editableHint: "Cliquez sur un texte pour le modifier directement.", shareLabel: 'Partager :', shareCopyLink: 'Copier le lien', shareText: 'Je viens de créer le cours "{title}" avec Corsificio —', newsletterTitle: 'Restez informé', newsletterSub: "Actualités sur les cours et les forfaits, sans spam. Désabonnement à tout moment.", newsletterPlaceholder: 'vous@exemple.com', newsletterButton: "S'inscrire", newsletterSuccess: 'Inscription confirmée, merci !', newsletterInvalid: 'Entrez un email valide.',
    planFreeName: 'Synthétique', planFreeTagline: 'Ton premier cours est gratuit, sans carte', planFreeFeatures: ['1 cours gratuit, puis 2 de plus en créant un compte', 'Structure du cours en quelques secondes', "Pas d'images, pas de kit de vente"],
    planCompletoName: 'Complet', planCompletoTagline: 'Le vrai saut de qualité : des leçons complètes, pas juste un plan', planCompletoFeatures: ['Jusqu\'à 5 fois plus de contenu par module (700+ mots)', 'Image unique générée par IA pour chaque module', 'Paiement unique — à vous pour toujours'],
    planProName: 'Professionnel', planProTagline: 'Tout inclus, prêt à enseigner ou à vendre', referralLabel: 'Invitez un ami', referralText: 'Partagez ce code : celui qui l\'utilise obtient une réduction.', referralCopyHint: '(cliquez pour copier)', referralCopied: 'Copié !', showcaseExamplesIntro: 'Choisissez une idée pour commencer tout de suite, ou écrivez la vôtre.', exBusiness1: 'Plan marketing pour une petite entreprise', exBusiness2: 'Les bases de la négociation', exBusiness3: 'Comptabilité pour entrepreneurs', exBusiness4: 'Comment lancer un produit', exCreative1: 'Dessin et croquis pour débutants', exCreative2: "Écriture créative : par où commencer", exCreative3: 'Photographie avec smartphone', exCreative4: 'Fondamentaux du design graphique', exWellness1: 'Méditation pour débutants', exWellness2: 'Yoga à la maison', exWellness3: 'Alimentation consciente', exWellness4: 'Gérer le stress au quotidien', exTech1: 'Introduction à la programmation', exTech2: "L'IA pour débutants", exTech3: 'Cybersécurité de base', exTech4: 'Créez votre premier site web', exFood1: 'Pâtes maison à partir de zéro', exFood2: 'Boulangerie pour débutants', exFood3: 'Cuisine végétarienne rapide', exFood4: 'Techniques de pâtisserie de base',
    planProBadge: 'Recommandé pour vendre', planProFeatures: ['Texte détaillé et images IA, comme le plan Complet', 'Conseils pratiques pour animer chaque module', "Kit de vente prêt à l'emploi : argumentaire, prix, FAQ", 'Essayez le Module 1 gratuitement avant de décider'],
    aboutTitle: 'Qui sommes-nous', aboutIntro: 'Corsificio est un outil petit et indépendant, conçu pour rendre la création de cours rapide, honnête et accessible à tous.',
    aboutWhatTitle: 'Ce que nous faisons', aboutWhatText: "Nous utilisons l'IA pour transformer un seul sujet en micro-cours structuré en quelques minutes : modules, leçons, quiz et, pour les professionnels, un kit de vente prêt à l'emploi.",
    aboutGoalTitle: 'Notre objectif', aboutGoalText: 'Réduire l\'écart entre ce que vous savez et un cours que vous pouvez vraiment enseigner ou vendre — que vous soyez professionnel ou simplement curieux.',
    aboutValuesTitle: 'Ce en quoi nous croyons', aboutValuesText: 'Des prix clairs sans frais cachés, un vrai plan gratuit qui le reste, et un contenu que vous relisez et rendez vôtre avant de le partager avec qui que ce soit.',
    moreDetailsToggle: '+ Personnaliser (modules, ton, objectif)', printButton: 'Télécharger le PDF',
    exampleChips: ['Yoga', 'Marketing', 'Guitare', 'Cuisine italienne', 'Photographie'],
    loadingMessages: ['Structuration du cours…', 'Rédaction des modules…', 'Peaufinage des détails…'],
    emptyState: 'Remplissez les champs à gauche et appuyez sur "Générer le cours". La structure complète apparaîtra ici, module par module.',
    errorFillFields: 'Veuillez indiquer au moins le sujet et le public du cours.', errorNetworkFriendly: "Impossible de joindre le serveur pour le moment. Vérifiez votre connexion et réessayez sous peu.",
    courseGeneratedLabel: 'Micro-cours généré', premiumSuffix: ' — Premium', modulePrefix: 'Module', quizLabel: 'Vérification des acquis',
    copyButton: 'Copier comme texte', copiedButton: 'Copié ✓', retryButton: 'RÉESSAYER',
    errorPrefix: "Impossible de générer le cours : ", errorPaymentStartPrefix: 'Impossible de démarrer le paiement : ', errorPremiumPrefix: 'Impossible de générer le cours premium : ',
    paymentCancelled: 'Paiement annulé. Aucun débit effectué.', paymentLostPrompt: "Le paiement a bien été effectué, mais nous ne trouvons pas les détails du cours à générer (cela peut arriver si la mémoire du navigateur a été effacée). Contactez-nous avec ce code et nous le débloquerons pour vous.", btnForgotPassword: 'Mot de passe oublié ?', forgotPasswordNeedEmail: 'Entrez votre email ci-dessus, puis cliquez à nouveau.', forgotPasswordSent: 'Nous vous avons envoyé un email pour réinitialiser votre mot de passe.', newsletterUnavailable: 'Service indisponible pour le moment. Réessayez plus tard.', rotatorPhrases: ["D'une idée à un cours en une minute", 'Ce que vous savez mérite d\'être enseigné', 'Aucune expérience technique requise', 'Gratuit pour commencer, sans carte'], statLanguages: 'langues disponibles', statSeconds: 'secondes pour la structure', statFromPrice: 'cours gratuit, sans compte', statCertificate: 'certificat inclus', statLanguagesTip: 'Italien, anglais, espagnol, français, allemand, portugais, chinois, japonais, arabe, russe', statSecondsTip: 'Temps moyen pour générer la structure complète du cours', statFromPriceTip: 'Puis passez au forfait Completo à partir de 3,49 €', statCertificateTip: 'En réussissant le quiz final du cours', freeLimitTitle: 'Vous avez utilisé vos cours gratuits', freeLimitMsg: 'Vous avez généré les 3 cours gratuits disponibles. Passez au forfait Completo pour continuer à créer des cours.', btnUpgradeNow: 'Passer au forfait Completo', freeRemainingLabel: 'Il vous reste {n} cours gratuits',
  btnApproveStructure: 'Générer le cours complet', btnBuySingleInstead: 'Acheter un cours à l\'unité', btnManageSubscription: 'Gérer l\'abonnement', btnRestartStructure: 'Changer de sujet', btnSubscribeMonthly: 'S\'abonner', btnTranslateNow: 'Traduire', certDisclaimer: 'Attestation informelle de réussite générée par Corsificio — ce n\'est pas un titre ni une certification officielle reconnue par un organisme.', certMethodLabel: 'Méthode suivie par chaque module', certMethodSteps: ['Accroche', 'Concept', 'Étapes', 'Exemple', 'Défi'], certShareText: 'Je viens de terminer le cours "{title}" sur Corsificio —', chatAskAudience: 'Parfait. Et à qui s\'adresse ce cours ?', chatAskPlan: 'Super, ça suffit pour l\'instant. Quel niveau de cours veux-tu ?', chatAskTopic: 'Sur quoi en sais-tu assez pour l\'enseigner ?', compareCaption: 'Même question, même temps de génération. La différence, c\'est la méthode, pas la chance.', compareCorsificioLabel: 'Module généré par Corsificio', compareCorsificioText: '"Il est 22h et ta tête est encore dans les e-mails de demain — ça te parle ? Le problème, ce n\'est pas la volonté, c\'est que tu n\'as pas encore de méthode. Voici la technique 4-7-8 : inspire en comptant jusqu\'à 4, retiens 7, expire en 8. Essaie tout de suite, avant de continuer à lire. Défi : fais-le 3 nuits de suite et observe ce qui change."', compareEyebrow: 'Vois la différence par toi-même', compareGenericLabel: 'N\'importe quel prompt à une IA générique', compareGenericText: '"La méditation a de nombreux bienfaits. Elle aide à réduire le stress et à améliorer la concentration. Voici quelques étapes : respirez profondément, trouvez un endroit calme, pratiquez régulièrement."', copyModuleSocialBtn: 'Pour les réseaux', copyModuleSocialTip: 'Copie ce module dans un format court pour les réseaux sociaux', diff1Body: 'Chaque cours suit une méthode fixe en 5 parties — Accroche, Concept, Étapes, Exemple, Défi — pas un résumé quelconque. C\'est exactement pour ça que les cours génériques ne se vendent plus.', diff1Title: 'Jamais générique', diff2Body: 'On ne cache pas que c\'est de l\'IA — on te montre la structure pédagogique exacte que suit chaque module, vérifiable avant d\'acheter. La confiance se construit en montrant la méthode, pas en la cachant.', diff2Title: 'Méthode transparente', diff3Body: 'Barre de progression, quiz par module, certificat final — la raison n°1 pour laquelle on abandonne un cours, c\'est de ne pas voir où on en est.', diff3Title: 'Progression visible', diff4Body: 'Aperçu gratuit du module 1 avant de payer, paiement sécurisé en un clic avec Stripe. 73% des utilisateurs abandonnent à cause de la friction au paiement — on l\'a supprimée.', diff4Title: 'Zéro friction', diff5Body: 'On ne promet pas de résultats impossibles. On promet un cours bien structuré sur ton sujet, en quelques secondes au lieu de semaines — un point c\'est tout.', diff5Title: 'Promesse honnête', diffEyebrow: 'Pourquoi Corsificio est différent', errorFillMaterial: 'Colle au moins quelques lignes de matériel (minimum 40 caractères).', fileReadError: 'Impossible de lire le fichier. Essaie de coller le texte directement.', fileReadOk: 'Fichier chargé — tu peux modifier le texte ci-dessous.', fileReading: 'Lecture du fichier...', freeLoginGateMsg: 'Tu as utilisé ta génération anonyme gratuite. Connecte-toi ou inscris-toi (gratuit) pour débloquer 2 générations gratuites de plus liées à ton compte.', freeLoginGateTitle: 'Crée un compte pour continuer gratuitement', generatePublicLinkButton: 'Générer un lien public', generatingImageError: 'Impossible de générer l\'image.', generatingImageLabel: 'Un instant...', generatingLinkError: 'Impossible de générer le lien public.', generatingLinkLabel: 'Un instant...', issuedByLabel: 'Délivré par', labelLevel: 'Ton niveau de départ', labelMaterial: 'Tes notes, brouillon ou texte de départ', labelUploadFile: 'Ou importe un fichier (.pdf, .txt)', labelVertical: 'Ton secteur', levelAdvanced: 'Avancé', levelBeginner: 'Débutant', levelIntermediate: 'Intermédiaire', mensileFeature1: '15 générations "Complet" incluses par mois', mensileFeature2: 'Extras disponibles à l\'achat unitaire', mensileFeature3: 'Gère ou annule quand tu veux', modeMaterialBtn: '📄 Colle ton matériel', modeTopicBtn: '✏️ Décris un sujet', moreDetailsHint: 'L\'IA choisit déjà un ton et un objectif pertinents toute seule — personnalise seulement si tu veux plus de contrôle.', perMonthLabel: '/mois', phAudiencePro: 'Ex. professionnels qui veulent améliorer leurs ventes, entreprises, freelances', phMaterial: 'Colle des notes, un brouillon, ou le texte d\'une leçon déjà écrite... l\'IA la transforme en cours structuré.', planMensileName: 'Plan Creator', planMensileTagline: '15 cours Complet par mois, pour les créateurs réguliers', priceMensileValue: '19,90€', publicLinkReadyLabel: 'Lien public prêt — copie-le :', quizScoreLabel: 'au quiz', quotaEsgotataMsg: 'Tu peux acheter un cours à l\'unité maintenant, ou attendre le renouvellement du prochain cycle.', quotaEsgotataTitle: 'Tu as utilisé toutes les générations du mois', quotaRenewsOn: 'Renouvellement le {date}.', regenerateErrorLabel: 'Erreur, réessaie', regenerateModuleBtn: 'Régénérer', regenerateModuleTip: 'Régénère uniquement ce module avec l\'IA, sans toucher aux autres', regeneratingLabel: 'Un instant...', shareAsImageButton: 'Partager en image', showcaseFromLabel: 'À partir de', socialPostCourseCredit: 'Cours complet : ', structurePreviewEyebrow: 'Structure proposée', structureStreamLabel: 'L\'IA réfléchit à la structure du cours…', subscriptionActivatedMsg: 'Abonnement activé ! Tu peux générer tes cours maintenant.', translateDoneLabel: 'Terminé !', translateError: 'Erreur de traduction vers', translateMaxLangs: 'Tu peux sélectionner jusqu\'à 3 langues à la fois.', translateOriginalLabel: 'Original', translateTabsLabel: 'Versions :', translateToggleLabel: 'Générer aussi dans d\'autres langues', translatingLabel: 'Traduction en cours :', usedThisMonthLabel: 'utilisées ce mois-ci', verifiedBadgeLabel: 'Certificat vérifié', verticalBusiness: 'Business et conseil', verticalCoaching: 'Coaching', verticalFitness: 'Fitness (coachs sportifs)', verticalGeneric: 'Générique', verticalSalute: 'Santé et bien-être (thérapeutes, coachs bien-être)', },
  de: {
    langNameForPrompt: 'German',
    titleMain: 'Was du weißt', titleEm: 'wird ein Kurs', titleEnd: 'in einer Minute',
    sub: 'Tippe ein einziges Thema ein. In Sekunden hast du Module, Lektionen und Quiz — kostenlos zum Start, mit KI aufgewertet, wenn du bereit bist zu verkaufen.', heroCtaButton: 'Kostenlos testen ↓', sampleLabel: 'HIER EIN ECHTES BEISPIEL', sampleCta: 'Erstelle deins, kostenlos →', sampleCaption: 'Nur eines von unendlich vielen möglichen Themen — wechselt alle 10 Sekunden',
    labelTopic: 'Thema des Kurses', phTopic: 'Z.B. urbanes Gärtnern, Marketing für KMU, Gitarre für Anfänger, Kunstgeschichte',
    labelAudience: 'An wen sich der Kurs richtet', phAudience: 'Z.B. alle Neugierigen, Eltern, Studierende, Hobbyisten',
    labelGoal: 'Was Teilnehmer am Ende können sollen', phGoal: 'Z.B. eine Immobilie bewerten und einem Käufer wirkungsvoll präsentieren',
    labelModules: 'Anzahl der Module', labelTone: 'Ton',
    tonePratico: 'Praktisch', toneAutorevole: 'Autoritativ', toneAmichevole: 'Freundlich',
    labelLength: 'Inhaltslänge', lengthSintetico: 'Kurz (nur Struktur)', lengthCompleto: 'Vollständige Ausbildung (ausführlicher Text pro Lektion)',
    labelTier: 'Stufe', tierFreeName: 'Kostenlos', tierFreeDesc: 'Vektorillustrationen',
    tierPremiumName: 'Premium', tierPremiumDesc: 'KI-generierte Bilder',
    btnGenerate: 'Kurs erstellen', btnGenerating: 'Wird erstellt…', btnRedirecting: 'Weiterleitung zur Zahlung…', btnGeneratingPremium: 'Wird erstellt (mit Bildern)…',
    hintGeneral: 'Der generierte Text ist ein Ausgangspunkt: überprüfe und personalisiere ihn, bevor du ihn weitergibst.',
    hintPro: 'Der generierte Text ist ein Ausgangspunkt: überprüfe und personalisiere ihn, bevor du ihn an deine Kunden verkaufst.',
    labelUsage: 'Wofür ist dieser Kurs', usageGeneral: 'Für mich selbst oder als Hobby', usagePro: 'Ich werde ihn professionell verkaufen',
    btnPreviewPro: 'Kostenlose Vorschau erstellen', btnUnlockCompleto: 'Vollständige Ausbildung freischalten (3,49 €)', btnUnlockPro: 'Vollständigen Kurs freischalten (4,99 €)',
    previewLabel: 'Kostenlose Vorschau — Modul 1', previewLockedNote: 'Die restlichen Module und Bilder werden nach der Zahlung freigeschaltet.', errorPreviewPrefix: 'Vorschau konnte nicht erstellt werden: ',
    salesKitLabel: 'Verkaufskit', salesPitchLabel: 'Verkaufstext', priceLabel: 'Empfohlene Preisspanne', faqLabel: 'Häufige Fragen', deliveryTipLabel: 'Tipp zur Durchführung',
    priceFreeValue: 'Kostenlos', priceCompletoValue: '3,49 €', priceProValue: '4,99 €',
    planCardsTitle: 'Wähle deinen Plan', planCardsSub: 'Das ändert sich genau von einem Paket zum nächsten.', trustSecure: 'Sichere Zahlung mit Stripe', trustNoSub: 'Kein verstecktes Abo', trustRefund: 'Rückerstattung bei technischen Fehlern',
    labelPlanPicker: 'Wähle deinen Plan', pillFreeName: 'Kostenlos', pillCompletoName: 'Vollständig', pillProName: 'Pro',
    currencyNote: 'Umgerechnete Preise sind ungefähr. Die endgültige Abbuchung erfolgt über Stripe, in Euro oder deiner lokalen Währung.',
    sidebarProfile: 'Profil', sidebarNotLoggedIn: 'Du bist nicht angemeldet.', btnLoginSignup: 'Anmelden oder registrieren',
    sidebarMyCourses: 'Meine Kurse', sidebarLoginToSee: 'Melde dich an, um deine gekauften Kurse zu sehen.', sidebarNoCourses: 'Du hast noch keine Kurse gekauft.',
    sidebarSettings: 'Einstellungen', sidebarSettingsHint: 'Sprache und andere Einstellungen findest du oben auf der Hauptseite.',
    authTitle: 'Anmelden oder Konto erstellen', authIntro: 'Speichere gekaufte Kurse und finde sie jederzeit wieder.',
    authEmailLabel: 'E-Mail', authPasswordLabel: 'Passwort', btnLogin: 'Anmelden', btnSignup: 'Konto erstellen', btnLogout: 'Abmelden',
    showcaseBusiness: 'Business', showcaseCreative: 'Kreativität', showcaseWellness: 'Wohlbefinden', showcaseTech: 'Technologie', showcaseFood: 'Kochen',
    btnStartQuiz: 'Abschlussquiz starten', quizFinalLabel: 'Abschlussquiz', certNameLabel: 'Dein Name (für das Zertifikat)', certNamePlaceholder: 'Max Mustermann',
    btnSubmitQuiz: 'Antworten senden', certNameRequired: 'Gib deinen Namen ein, um das Zertifikat zu erstellen.',
    quizFailMessage: 'Sieh dir die Module noch einmal an und versuche es erneut: einige Antworten stimmen nicht mit den Kernkonzepten überein.',
    certLabel: 'Abschlusszertifikat', certBodyText: 'hat den Kurs erfolgreich abgeschlossen', printCertLabel: 'Zertifikat herunterladen',
    certIssuedTo: 'Dieses Zertifikat wird verliehen an', certModulesLabel: 'Module · vollständige Ausbildung',
    faqTitle: 'Häufig gestellte Fragen',
    faq1Q: 'Ist der kostenlose Plan wirklich kostenlos?', faq1A: 'Ja. Der Kurz-Plan benötigt keine Kreditkarte und bleibt für immer kostenlos — kein zeitlich begrenztes Testangebot.',
    faq2Q: 'Wie funktioniert die Zahlung? Ist sie sicher?', faq2A: 'Zahlungen werden vollständig über Stripe abgewickelt. Wir sehen oder speichern niemals deine Kartendaten.',
    faq3Q: 'Kann ich eine Rückerstattung bekommen?', faq3A: 'Generell nein, da der Inhalt sofort nach der Zahlung geliefert wird. Wir erstatten bei technischen Fehlern oder doppelten Abbuchungen — siehe unsere Rückerstattungsrichtlinie.',
    faq4Q: 'Ist das Zertifikat ein offizieller Abschluss?', faq4A: 'Nein. Es ist ein informeller Nachweis über das Bestehen des Quiz in der App, keine von einer Institution anerkannte Zertifizierung.',
    faq5Q: 'In welchen Sprachen funktioniert Corsificio?', faq5A: 'In 10 Sprachen: Italienisch, Englisch, Spanisch, Französisch, Deutsch, Portugiesisch, Chinesisch, Japanisch, Arabisch und Russisch.',
    footerRights: 'Alle Rechte vorbehalten.', footerContact: 'Kontakt', footerPrivacy: 'Datenschutz', footerTerms: 'AGB', footerRefund: 'Rückerstattungen',
    cookieText: 'Wir verwenden nur Cookies, die für Login und Zahlungen notwendig sind — kein Werbe-Tracking.', cookieAccept: 'Verstanden', editableHint: 'Klicke auf einen Text, um ihn direkt zu bearbeiten.', shareLabel: 'Teilen:', shareCopyLink: 'Link kopieren', shareText: 'Ich habe gerade den Kurs "{title}" mit Corsificio erstellt —', newsletterTitle: 'Bleib auf dem Laufenden', newsletterSub: 'Neuigkeiten zu Kursen und Plänen, ohne Spam. Jederzeit abbestellbar.', newsletterPlaceholder: 'du@beispiel.com', newsletterButton: 'Abonnieren', newsletterSuccess: 'Anmeldung bestätigt, danke!', newsletterInvalid: 'Gib eine gültige E-Mail ein.',
    planFreeName: 'Kurz', planFreeTagline: 'Dein erster Kurs ist kostenlos, keine Kreditkarte nötig', planFreeFeatures: ['1 kostenloser Kurs, dann 2 weitere mit Konto', 'Kursstruktur in Sekunden', 'Keine Bilder, kein Verkaufskit'],
    planCompletoName: 'Vollständig', planCompletoTagline: 'Der echte Qualitätssprung: vollständige Lektionen, nicht nur eine Gliederung', planCompletoFeatures: ['Bis zu 5× mehr Inhalt pro Modul (700+ Wörter)', 'Einzigartiges KI-Bild für jedes Modul', 'Einmalzahlung — für immer deins'],
    planProName: 'Professionell', planProTagline: 'Alles inklusive, bereit zum Lehren oder Verkaufen',
    planProBadge: 'Empfohlen zum Verkauf', planProFeatures: ['Ausführlicher Text und KI-Bilder, wie im Plan Vollständig', 'Praktische Tipps für jedes Modul', 'Fertiges Verkaufskit: Verkaufstext, Preis, FAQ', 'Modul 1 vor der Entscheidung kostenlos testen'], referralLabel: 'Lade einen Freund ein', referralText: 'Teile diesen Code: wer ihn nutzt, erhält einen Rabatt.', referralCopyHint: '(klicken zum Kopieren)', referralCopied: 'Kopiert!', showcaseExamplesIntro: 'Wähle eine Idee zum sofortigen Start oder schreibe deine eigene.', exBusiness1: 'Marketingplan für ein kleines Unternehmen', exBusiness2: 'Verhandlungsgrundlagen', exBusiness3: 'Buchhaltung für Unternehmer', exBusiness4: 'Wie man ein Produkt launcht', exCreative1: 'Zeichnen und Skizzieren für Anfänger', exCreative2: 'Kreatives Schreiben: der Einstieg', exCreative3: 'Smartphone-Fotografie', exCreative4: 'Grundlagen des Grafikdesigns', exWellness1: 'Meditation für Anfänger', exWellness2: 'Yoga zu Hause', exWellness3: 'Achtsames Essen', exWellness4: 'Alltäglichen Stress bewältigen', exTech1: 'Einführung in die Programmierung', exTech2: 'KI für Anfänger', exTech3: 'Cybersicherheit Grundlagen', exTech4: 'Erstelle deine erste Website', exFood1: 'Hausgemachte Pasta von Grund auf', exFood2: 'Brotbacken für Anfänger', exFood3: 'Schnelle vegetarische Küche', exFood4: 'Grundlegende Patisserie-Techniken',
    aboutTitle: 'Wer wir sind', aboutIntro: 'Corsificio ist ein kleines, unabhängiges Tool, das die Kurserstellung schnell, ehrlich und für alle zugänglich machen soll.',
    aboutWhatTitle: 'Was wir tun', aboutWhatText: 'Wir nutzen KI, um aus einem einzigen Thema in wenigen Minuten einen strukturierten Mikrokurs zu machen: Module, Lektionen, Quiz und, für Profis, ein einsatzbereites Verkaufskit.',
    aboutGoalTitle: 'Unser Ziel', aboutGoalText: 'Die Distanz zwischen dem, was du weißt, und einem Kurs, den du wirklich lehren oder verkaufen kannst, zu verkleinern — egal ob du Profi oder einfach neugierig bist.',
    aboutValuesTitle: 'Woran wir glauben', aboutValuesText: 'Klare Preise ohne versteckte Kosten, ein echter kostenloser Plan, der kostenlos bleibt, und Inhalte, die du überprüfst und dir zu eigen machst, bevor du sie mit jemandem teilst.',
    moreDetailsToggle: '+ Anpassen (Module, Ton, Ziel)', printButton: 'PDF herunterladen',
    exampleChips: ['Yoga', 'Marketing', 'Gitarre', 'Italienisch kochen', 'Fotografie'],
    loadingMessages: ['Kurs wird strukturiert…', 'Module werden geschrieben…', 'Details werden verfeinert…'],
    emptyState: 'Fülle die Felder links aus und klicke auf "Kurs erstellen". Hier erscheint die vollständige Struktur, Modul für Modul.',
    errorFillFields: 'Bitte gib mindestens das Thema und die Zielgruppe des Kurses ein.', errorNetworkFriendly: 'Der Server ist gerade nicht erreichbar. Prüfe deine Verbindung und versuche es gleich noch einmal.',
    courseGeneratedLabel: 'Generierter Mikrokurs', premiumSuffix: ' — Premium', modulePrefix: 'Modul', quizLabel: 'Lernkontrolle',
    copyButton: 'Als Text kopieren', copiedButton: 'Kopiert ✓', retryButton: 'ERNEUT VERSUCHEN',
    errorPrefix: 'Kurs konnte nicht erstellt werden: ', errorPaymentStartPrefix: 'Zahlung konnte nicht gestartet werden: ', errorPremiumPrefix: 'Premium-Kurs konnte nicht erstellt werden: ',
    paymentCancelled: 'Zahlung abgebrochen. Es wurde nichts berechnet.', paymentLostPrompt: 'Die Zahlung war erfolgreich, aber wir finden die Kursdaten zur Generierung nicht (das kann passieren, wenn der Browser-Speicher gelöscht wurde). Schreib uns mit diesem Code und wir schalten ihn für dich frei.', btnForgotPassword: 'Passwort vergessen?', forgotPasswordNeedEmail: 'Gib oben deine E-Mail ein und klicke erneut.', forgotPasswordSent: 'Wir haben dir eine E-Mail zum Zurücksetzen des Passworts geschickt.', newsletterUnavailable: 'Dienst momentan nicht verfügbar. Bitte später erneut versuchen.', rotatorPhrases: ['Von der Idee zum Kurs in einer Minute', 'Was du weißt, verdient es, gelehrt zu werden', 'Keine technischen Kenntnisse nötig', 'Kostenlos starten, ohne Kreditkarte'], statLanguages: 'verfügbare Sprachen', statSeconds: 'Sekunden für die Struktur', statFromPrice: 'kostenloser Kurs, ohne Konto', statCertificate: 'Zertifikat inklusive', statLanguagesTip: 'Italienisch, Englisch, Spanisch, Französisch, Deutsch, Portugiesisch, Chinesisch, Japanisch, Arabisch, Russisch', statSecondsTip: 'Durchschnittliche Zeit für die vollständige Kursstruktur', statFromPriceTip: 'Danach zum Plan Vollständig ab 3,49 € wechseln', statCertificateTip: 'Durch Bestehen des Abschlussquiz', freeLimitTitle: 'Du hast deine kostenlosen Kurse aufgebraucht', freeLimitMsg: 'Du hast alle 3 verfügbaren kostenlosen Kurse erstellt. Wechsle zum Plan Vollständig, um weiter Kurse zu erstellen.', btnUpgradeNow: 'Zum Plan Vollständig wechseln', freeRemainingLabel: 'Noch {n} kostenlose Kurse übrig',
  btnApproveStructure: 'Vollständigen Kurs generieren', btnBuySingleInstead: 'Einzelnen Kurs kaufen', btnManageSubscription: 'Abo verwalten', btnRestartStructure: 'Thema ändern', btnSubscribeMonthly: 'Abonnieren', btnTranslateNow: 'Übersetzen', certDisclaimer: 'Informeller Abschlussnachweis, erstellt von Corsificio — kein offizieller Titel oder eine von einer Institution anerkannte Zertifizierung.', certMethodLabel: 'Methode, der jedes Modul folgt', certMethodSteps: ['Einstieg', 'Konzept', 'Schritt für Schritt', 'Beispiel', 'Herausforderung'], certShareText: 'Ich habe gerade den Kurs "{title}" auf Corsificio abgeschlossen —', chatAskAudience: 'Perfekt. Und für wen ist dieser Kurs?', chatAskPlan: 'Super, das reicht erstmal. Welches Kursniveau möchtest du?', chatAskTopic: 'Worüber weißt du genug, um es zu unterrichten?', compareCaption: 'Gleiche Frage, gleiche Generierungszeit. Der Unterschied ist die Methode, nicht Glück.', compareCorsificioLabel: 'Von Corsificio generiertes Modul', compareCorsificioText: '"Es ist 22 Uhr und du denkst immer noch an die E-Mails von morgen — kommt dir bekannt vor? Das Problem ist nicht Willenskraft, sondern dass du noch keine Methode hast. Hier die 4-7-8-Technik: 4 Sekunden einatmen, 7 halten, 8 ausatmen. Probier es sofort aus, bevor du weiterliest. Herausforderung: mach es 3 Nächte hintereinander und beobachte, was sich verändert."', compareEyebrow: 'Sieh selbst den Unterschied', compareGenericLabel: 'Irgendein Prompt an eine generische KI', compareGenericText: '"Meditation hat viele Vorteile. Sie hilft, Stress zu reduzieren und die Konzentration zu verbessern. Hier ein paar Schritte: tief atmen, einen ruhigen Ort finden, regelmäßig üben."', copyModuleSocialBtn: 'Für Social Media', copyModuleSocialTip: 'Dieses Modul im Kurzformat für Social Media kopieren', diff1Body: 'Jeder Kurs folgt einer festen 5-teiligen Methode — Einstieg, Konzept, Schritt für Schritt, Beispiel, Herausforderung — keine beliebige Zusammenfassung. Genau deshalb verkaufen sich generische Kurse nicht mehr.', diff1Title: 'Nie generisch', diff2Body: 'Wir verstecken nicht, dass es KI ist — wir zeigen dir die genaue pädagogische Struktur, der jedes Modul folgt, überprüfbar vor dem Kauf. Vertrauen entsteht, indem man die Methode zeigt, nicht sie versteckt.', diff2Title: 'Transparente Methode', diff3Body: 'Fortschrittsbalken, Quiz pro Modul, Abschlusszertifikat — Grund Nr. 1, warum Leute einen Kurs abbrechen, ist, nicht zu sehen, wie weit sie schon gekommen sind.', diff3Title: 'Sichtbarer Fortschritt', diff4Body: 'Kostenlose Vorschau von Modul 1 vor der Zahlung, sicherer Ein-Klick-Checkout mit Stripe. 73% der Nutzer brechen wegen Zahlungsreibung ab — wir haben sie entfernt.', diff4Title: 'Null Reibung', diff5Body: 'Wir versprechen keine unmöglichen Ergebnisse. Wir versprechen einen gut strukturierten Kurs zu deinem Thema, in Sekunden statt Wochen — Punkt.', diff5Title: 'Ehrliches Versprechen', diffEyebrow: 'Warum Corsificio anders ist', errorFillMaterial: 'Füge mindestens ein paar Zeilen Material ein (mindestens 40 Zeichen).', fileReadError: 'Die Datei konnte nicht gelesen werden. Versuche, den Text direkt einzufügen.', fileReadOk: 'Datei geladen — du kannst den Text unten bearbeiten.', fileReading: 'Datei wird gelesen...', freeLoginGateMsg: 'Du hast deine kostenlose anonyme Generierung genutzt. Melde dich an oder registriere dich (kostenlos), um 2 weitere kostenlose Generierungen für dein Konto freizuschalten.', freeLoginGateTitle: 'Erstelle ein Konto, um kostenlos weiterzumachen', generatePublicLinkButton: 'Öffentlichen Link erstellen', generatingImageError: 'Das Bild konnte nicht erstellt werden.', generatingImageLabel: 'Einen Moment...', generatingLinkError: 'Der öffentliche Link konnte nicht erstellt werden.', generatingLinkLabel: 'Einen Moment...', issuedByLabel: 'Ausgestellt von', labelLevel: 'Dein Ausgangsniveau', labelMaterial: 'Deine Notizen, Entwurf oder Ausgangstext', labelUploadFile: 'Oder lade eine Datei hoch (.pdf, .txt)', labelVertical: 'Dein Bereich', levelAdvanced: 'Fortgeschritten', levelBeginner: 'Anfänger', levelIntermediate: 'Mittelstufe', mensileFeature1: '15 "Complete"-Generierungen pro Monat inklusive', mensileFeature2: 'Extras als Einzelkauf verfügbar', mensileFeature3: 'Jederzeit verwalten oder kündigen', modeMaterialBtn: '📄 Dein Material einfügen', modeTopicBtn: '✏️ Ein Thema beschreiben', moreDetailsHint: 'Die KI wählt bereits selbst einen sinnvollen Ton und ein Ziel — passe nur an, wenn du mehr Kontrolle möchtest.', perMonthLabel: '/Monat', phAudiencePro: 'Z.B. Fachleute, die ihren Verkauf verbessern wollen, Unternehmen, Freelancer', phMaterial: 'Füge Notizen, einen Entwurf oder den Text einer bereits gehaltenen Lektion ein... die KI verwandelt es in einen strukturierten Kurs.', planMensileName: 'Creator-Plan', planMensileTagline: '15 Complete-Kurse pro Monat, für regelmäßige Ersteller', priceMensileValue: '19,90€', publicLinkReadyLabel: 'Öffentlicher Link bereit — kopiere ihn:', quizScoreLabel: 'im Quiz', quotaEsgotataMsg: 'Du kannst jetzt einen Einzelkurs kaufen oder auf die Erneuerung des nächsten Zyklus warten.', quotaEsgotataTitle: 'Du hast alle Generierungen diesen Monats verbraucht', quotaRenewsOn: 'Erneuert sich am {date}.', regenerateErrorLabel: 'Fehler, versuch es erneut', regenerateModuleBtn: 'Neu generieren', regenerateModuleTip: 'Nur dieses Modul mit KI neu generieren, ohne die anderen zu ändern', regeneratingLabel: 'Einen Moment...', shareAsImageButton: 'Als Bild teilen', showcaseFromLabel: 'Ab', socialPostCourseCredit: 'Vollständiger Kurs: ', structurePreviewEyebrow: 'Vorgeschlagene Struktur', structureStreamLabel: 'Die KI denkt sich die Kursstruktur aus…', subscriptionActivatedMsg: 'Abo aktiviert! Du kannst jetzt deine Kurse generieren.', translateDoneLabel: 'Fertig!', translateError: 'Fehler beim Übersetzen nach', translateMaxLangs: 'Du kannst bis zu 3 Sprachen gleichzeitig auswählen.', translateOriginalLabel: 'Original', translateTabsLabel: 'Versionen:', translateToggleLabel: 'Auch in anderen Sprachen generieren', translatingLabel: 'Übersetzung läuft:', usedThisMonthLabel: 'diesen Monat genutzt', verifiedBadgeLabel: 'Verifiziertes Zertifikat', verticalBusiness: 'Business & Beratung', verticalCoaching: 'Coaching', verticalFitness: 'Fitness (Personal Trainer)', verticalGeneric: 'Allgemein', verticalSalute: 'Gesundheit & Wohlbefinden (Therapeuten, Wellness-Coaches)', },
  pt: {
    langNameForPrompt: 'Portuguese',
    titleMain: 'O que você sabe', titleEm: 'vira um curso', titleEnd: 'em um minuto',
    sub: 'Digite só um tema. Em segundos você tem módulos, aulas e quiz prontos — grátis pra começar, turbinado com IA quando quiser vender.', heroCtaButton: 'Testar grátis ↓', sampleLabel: 'AQUI ESTÁ UM EXEMPLO REAL', sampleCta: 'Crie o seu, grátis →', sampleCaption: 'Um exemplo entre infinitos temas possíveis — muda a cada 10 segundos',
    labelTopic: 'Tema do curso', phTopic: 'Ex. jardinagem urbana, marketing para PMEs, violão para iniciantes, história da arte',
    labelAudience: 'Para quem é o curso', phAudience: 'Ex. qualquer pessoa curiosa para começar, pais, estudantes, entusiastas',
    phAudiencePro: 'Ex. profissionais querendo melhorar vendas, empresas, freelancers',
    labelVertical: 'Sua área', verticalGeneric: 'Genérico', verticalSalute: 'Saúde e bem-estar (terapeutas, coaches de bem-estar)', verticalFitness: 'Fitness (personal trainers)', verticalBusiness: 'Negócios e consultoria', verticalCoaching: 'Coaching',
    labelLevel: 'Seu nível de partida', levelBeginner: 'Iniciante', levelIntermediate: 'Intermediário', levelAdvanced: 'Avançado',
    labelGoal: 'O que quem terminar deve saber fazer', phGoal: 'Ex. avaliar um imóvel e apresentá-lo bem a um comprador',
    labelModules: 'Número de módulos', labelTone: 'Tom',
    tonePratico: 'Prático', toneAutorevole: 'Autoritativo', toneAmichevole: 'Amigável',
    labelLength: 'Extensão do conteúdo', lengthSintetico: 'Sintético (só estrutura)', lengthCompleto: 'Formação completa (texto extenso por lição)',
    labelTier: 'Nível', tierFreeName: 'Grátis', tierFreeDesc: 'ilustrações vetoriais',
    tierPremiumName: 'Premium', tierPremiumDesc: 'imagens geradas por IA',
    btnGenerate: 'Gerar curso', btnGenerating: 'Gerando…', btnRedirecting: 'Redirecionando para pagamento…', btnGeneratingPremium: 'Gerando (com imagens)…',
    hintGeneral: 'O texto gerado é um ponto de partida: revise e personalize antes de compartilhar.',
    hintPro: 'O texto gerado é um ponto de partida: revise e personalize antes de vender aos seus clientes.',
    labelUsage: 'Para que é este curso', usageGeneral: 'Para mim mesmo ou como hobby', usagePro: 'Vou vender profissionalmente',
    btnPreviewPro: 'Gerar prévia grátis', btnUnlockCompleto: 'Desbloquear formação completa (€3,49)', btnUnlockPro: 'Desbloquear curso completo (€4,99)',
    previewLabel: 'Prévia grátis — Módulo 1', previewLockedNote: 'Os demais módulos e imagens são desbloqueados com o pagamento.', errorPreviewPrefix: 'Não consegui gerar a prévia: ',
    salesKitLabel: 'Kit de vendas', salesPitchLabel: 'Texto de vendas', priceLabel: 'Faixa de preço sugerida', faqLabel: 'Perguntas frequentes', deliveryTipLabel: 'Dica para aplicar a aula',
    priceFreeValue: 'Grátis', priceCompletoValue: '€3,49', priceProValue: '€4,99',
    planCardsTitle: 'Escolha seu plano', planCardsSub: 'Veja exatamente o que muda de um pacote pro outro.', trustSecure: 'Pagamento seguro com Stripe', trustNoSub: 'Sem assinatura escondida', trustRefund: 'Reembolso por erro técnico',
    labelPlanPicker: 'Escolha seu plano', pillFreeName: 'Grátis', pillCompletoName: 'Completo', pillProName: 'Pro',
    currencyNote: 'Os preços convertidos são aproximados. A cobrança final é feita pela Stripe, em euros ou na sua moeda local.',
    sidebarProfile: 'Perfil', sidebarNotLoggedIn: 'Você não fez login.', btnLoginSignup: 'Entrar ou criar conta',
    sidebarMyCourses: 'Meus cursos', sidebarLoginToSee: 'Faça login pra ver os cursos que você comprou.', sidebarNoCourses: 'Você ainda não comprou nenhum curso.',
    sidebarSettings: 'Configurações', sidebarSettingsHint: 'Idioma e outras preferências ficam no topo da página principal.',
    authTitle: 'Entre ou crie uma conta', authIntro: 'Salve os cursos que você compra e encontre eles quando quiser.',
    authEmailLabel: 'Email', authPasswordLabel: 'Senha', btnLogin: 'Entrar', btnSignup: 'Criar conta', btnLogout: 'Sair',
    showcaseBusiness: 'Negócios', showcaseCreative: 'Criatividade', showcaseWellness: 'Bem-estar', showcaseTech: 'Tecnologia', showcaseFood: 'Culinária',
    btnStartQuiz: 'Fazer o quiz final', quizFinalLabel: 'Quiz final', certNameLabel: 'Seu nome (pro certificado)', certNamePlaceholder: 'Maria Silva',
    btnSubmitQuiz: 'Enviar respostas', certNameRequired: 'Coloca seu nome pra gerar o certificado.',
    quizFailMessage: 'Revê os módulos e tenta de novo: algumas respostas não batem com os conceitos-chave.',
    certLabel: 'Certificado de conclusão', certBodyText: 'concluiu com sucesso o curso', printCertLabel: 'Baixar certificado',
    certIssuedTo: 'Este certificado é concedido a', certModulesLabel: 'módulos · formação completa',
    certMethodLabel: 'Método seguido por cada módulo', certMethodSteps: ['Gancho', 'Conceito', 'Passo a Passo', 'Exemplo', 'Desafio'],
    certDisclaimer: 'Registro informal de conclusão gerado pelo Corsificio — não é um título ou certificação oficial reconhecida por nenhuma instituição.',
    certShareText: 'Acabei de concluir o curso "{title}" no Corsificio —', showcaseFromLabel: 'A partir de',
    planMensileName: 'Plano Creator', priceMensileValue: '€19,90', perMonthLabel: '/mês',
    planMensileTagline: '15 cursos Completo por mês, pra quem gera com frequência',
    mensileFeature1: '15 gerações "Completo" incluídas por mês', mensileFeature2: 'Extras disponíveis como compra avulsa', mensileFeature3: 'Gerencia ou cancela quando quiser',
    btnSubscribeMonthly: 'Assinar', btnManageSubscription: 'Gerenciar assinatura', usedThisMonthLabel: 'usados este mês',
    quotaEsgotataTitle: 'Você usou todas as gerações do mês', quotaEsgotataMsg: 'Pode comprar um curso avulso agora, ou esperar a renovação do próximo ciclo.', quotaRenewsOn: 'Renova em {date}.', btnBuySingleInstead: 'Comprar um curso avulso', subPaymentFailedTitle: 'Não conseguimos cobrar sua assinatura', subPaymentFailedMsg: 'Atualiza seu método de pagamento pra continuar usando o Plano Creator.', btnUpdatePayment: 'Atualizar método de pagamento',
    shareAsImageButton: 'Compartilhar como imagem', generatingImageLabel: 'Só um instante...', generatingImageError: 'Não foi possível gerar a imagem.',
    generatePublicLinkButton: 'Gerar link público', generatingLinkLabel: 'Só um instante...', generatingLinkError: 'Não foi possível gerar o link público.', publicLinkReadyLabel: 'Link público pronto — copia aí:',
    faqTitle: 'Perguntas frequentes',
    faq1Q: 'O plano grátis é mesmo grátis?', faq1A: 'Sim. O plano Sintético não pede cartão de crédito e continua grátis pra sempre — não é um teste com prazo.',
    faq2Q: 'Como funciona o pagamento? É seguro?', faq2A: 'Os pagamentos são processados totalmente pela Stripe. Nunca vemos nem guardamos os dados do seu cartão.',
    faq3Q: 'Posso pedir reembolso?', faq3A: 'Em geral não, porque o conteúdo é entregue logo após o pagamento. Reembolsamos erro técnico ou cobrança duplicada — veja nossa política de reembolso.',
    faq4Q: 'O certificado é um título oficial?', faq4A: 'Não. É um registro informal de conclusão do quiz dentro do app, não uma certificação reconhecida por nenhuma instituição.',
    faq5Q: 'Em quais idiomas o Corsificio funciona?', faq5A: 'Em 10 idiomas: italiano, inglês, espanhol, francês, alemão, português, chinês, japonês, árabe e russo.',
    footerRights: 'Todos os direitos reservados.', footerContact: 'Contato', footerPrivacy: 'Privacidade', footerTerms: 'Termos', footerRefund: 'Reembolsos',
    cookieText: 'Usamos só cookies necessários pro login e pagamentos — sem rastreamento publicitário.', cookieAccept: 'Entendi', editableHint: 'Clique em qualquer texto pra editar direto.', shareLabel: 'Compartilhar:', shareCopyLink: 'Copiar link', shareText: 'Acabei de criar o curso "{title}" com o Corsificio —', newsletterTitle: 'Fique por dentro', newsletterSub: 'Novidades sobre cursos e planos, sem spam. Cancele quando quiser.', newsletterPlaceholder: 'voce@exemplo.com', newsletterButton: 'Inscrever', newsletterSuccess: 'Inscrição confirmada, obrigado!', newsletterInvalid: 'Digite um email válido.',
    planFreeName: 'Sintético', planFreeTagline: 'Seu primeiro curso é grátis, sem cartão', planFreeFeatures: ['1 curso grátis, depois mais 2 criando uma conta', 'Estrutura do curso em segundos', 'Sem imagens, sem kit de vendas'],
    planCompletoName: 'Completo', planCompletoTagline: 'O salto de qualidade: aulas de verdade, não só um índice', planCompletoFeatures: ['Até 5x mais conteúdo por módulo (700+ palavras)', 'Imagem única gerada por IA em cada módulo', 'Pagamento único — seu pra sempre'],
    planProName: 'Profissional', planProTagline: 'Tudo incluso, pronto pra ensinar ou vender',
    planProBadge: 'Recomendado pra vender', planProFeatures: ['Texto extenso e imagens IA, igual no plano Completo', 'Dicas práticas pra aplicar cada módulo', 'Kit de vendas pronto: pitch, preço, FAQ', 'Teste o Módulo 1 grátis antes de decidir'],
    aboutTitle: 'Quem somos', aboutIntro: 'Corsificio é uma ferramenta pequena e independente, criada pra tornar a criação de cursos rápida, honesta e acessível pra qualquer pessoa.', referralLabel: 'Convide um amigo', referralText: 'Compartilhe esse código: quem usar ganha desconto.', referralCopyHint: '(clique pra copiar)', referralCopied: 'Copiado!', showcaseExamplesIntro: 'Escolha uma ideia pra começar agora, ou escreva a sua.', exBusiness1: 'Plano de marketing pra pequena empresa', exBusiness2: 'Fundamentos de negociação', exBusiness3: 'Contabilidade pra empreendedores', exBusiness4: 'Como lançar um produto no mercado', exCreative1: 'Desenho e esboço pra iniciantes', exCreative2: 'Escrita criativa: por onde começar', exCreative3: 'Fotografia com celular', exCreative4: 'Fundamentos do design gráfico', exWellness1: 'Meditação pra iniciantes', exWellness2: 'Yoga em casa', exWellness3: 'Alimentação consciente', exWellness4: 'Gerenciar o estresse do dia a dia', exTech1: 'Introdução à programação', exTech2: 'IA pra iniciantes', exTech3: 'Segurança digital básica', exTech4: 'Crie seu primeiro site', exFood1: 'Massa caseira do zero', exFood2: 'Panificação pra iniciantes', exFood3: 'Culinária vegetariana rápida', exFood4: 'Técnicas básicas de confeitaria',
    aboutWhatTitle: 'O que fazemos', aboutWhatText: 'Usamos IA pra transformar um único tema em um micro-curso estruturado em minutos: módulos, aulas, quiz e, pra profissionais, um kit de vendas pronto pra usar.',
    aboutGoalTitle: 'Nosso objetivo', aboutGoalText: 'Diminuir a distância entre o que você sabe e um curso que você realmente pode ensinar ou vender — seja você profissional ou só curioso.',
    aboutValuesTitle: 'No que acreditamos', aboutValuesText: 'Preços claros sem custos escondidos, um plano grátis de verdade que continua grátis, e conteúdo que você revisa e torna seu antes de compartilhar com quem for.',
    moreDetailsToggle: '+ Personalizar (opcional)', moreDetailsHint: 'A IA já escolhe um tom e objetivo sensatos sozinha — personaliza só se quiser mais controle.', printButton: 'Baixar PDF',
    structureStreamLabel: 'IA está pensando a estrutura do curso…', structurePreviewEyebrow: 'Estrutura proposta', btnApproveStructure: 'Gerar o curso completo', btnRestartStructure: 'Trocar tema',
    exampleChips: ['Yoga', 'Marketing', 'Violão', 'Culinária italiana', 'Fotografia'],
    loadingMessages: ['Estruturando o curso…', 'Escrevendo os módulos…', 'Ajustando os detalhes…'],
    emptyState: 'Preencha os campos à esquerda e clique em "Gerar curso". Aqui vai aparecer a estrutura completa, módulo por módulo.',
    errorFillFields: 'Informe ao menos o tema e o público do curso.', regenerateModuleBtn: 'Regenerar', regenerateModuleTip: 'Regenera só esse módulo com IA, sem mexer nos outros', regeneratingLabel: 'Só um instante...', regenerateErrorLabel: 'Erro, tenta de novo', copyModuleSocialBtn: 'Pras redes', copyModuleSocialTip: 'Copia esse módulo em formato curto pras redes sociais', socialPostCourseCredit: 'Curso completo: ',
    translateToggleLabel: 'Gerar também em outros idiomas', moreActionsToggle: 'Mais ações (traduções, compartilhar)', furtherReadingLabel: 'Pontos de partida pra aprofundar', furtherReadingDisclaimer: 'Sugestões gerais, não fontes usadas pra gerar esse curso — a IA não pesquisa em tempo real.', btnTranslateNow: 'Traduzir', translateMaxLangs: 'Pode selecionar até 3 idiomas por vez.', translatingLabel: 'Traduzindo:', translateError: 'Erro traduzindo pra', translateDoneLabel: 'Pronto!', translateTabsLabel: 'Versões:', translateOriginalLabel: 'Original', verifiedBadgeLabel: 'Certificado verificado', quizScoreLabel: 'no quiz', issuedByLabel: 'Emitido por', errorFillMaterial: 'Cola pelo menos algumas linhas de material (mínimo 40 caracteres).', modeTopicBtn: '✏️ Descrever um tema', modeMaterialBtn: '📄 Colar seu material', labelMaterial: 'Suas anotações, rascunho ou texto de partida', phMaterial: 'Cola aqui anotações, um rascunho, o texto de uma aula que você já deu... a IA transforma isso num curso estruturado.', labelUploadFile: 'Ou envia um arquivo (.pdf, .txt)', fileReading: 'Lendo o arquivo...', fileReadOk: 'Arquivo carregado — você pode editar o texto abaixo.', fileReadError: 'Não foi possível ler o arquivo. Tenta colar o texto direto.', errorNetworkFriendly: 'Não conseguimos falar com o servidor agora. Confira sua conexão e tente de novo daqui a pouco.',
    courseGeneratedLabel: 'Micro-curso gerado', premiumSuffix: ' — Premium', modulePrefix: 'Módulo', quizLabel: 'Verificação de aprendizado',
    copyButton: 'Copiar como texto', copiedButton: 'Copiado ✓', retryButton: 'TENTAR NOVAMENTE',
    errorPrefix: 'Não consegui gerar o curso: ', errorPaymentStartPrefix: 'Não consegui iniciar o pagamento: ', errorPremiumPrefix: 'Não consegui gerar o curso premium: ',
    paymentCancelled: 'Pagamento cancelado. Nenhuma cobrança foi feita.', paymentLostPrompt: 'O pagamento foi feito com sucesso, mas não encontramos os dados do curso pra gerar (pode acontecer se a memória do navegador foi apagada). Fale com a gente com esse código que a gente libera pra você.', btnForgotPassword: 'Esqueceu a senha?', forgotPasswordNeedEmail: 'Coloca seu email ali em cima e clica de novo.', forgotPasswordSent: 'Mandamos um email pra você redefinir a senha.', newPasswordTitle: 'Defina sua nova senha', newPasswordIntro: 'Escolha uma nova senha pra acessar sua conta.', newPasswordLabel: 'Nova senha', btnSetNewPassword: 'Salvar nova senha', newPasswordTooShort: 'A senha precisa ter pelo menos 6 caracteres.', newPasswordSuccess: 'Senha atualizada! Você já está logado com a senha nova.', subscriptionAlreadyActiveMsg: 'Você já tem uma assinatura ativa. Quer abrir o gerenciamento da assinatura?', btnDeleteAccount: 'Excluir minha conta', deleteAccountConfirm1: 'Isso vai apagar permanentemente sua conta, cursos salvos e cancelar qualquer assinatura ativa. Essa ação não pode ser desfeita. Continuar?', deleteAccountConfirm2: 'Tem certeza mesmo? Não tem como recuperar depois disso.', deleteAccountSuccess: 'Conta excluída. Vamos sentir sua falta.', newsletterUnavailable: 'Serviço indisponível no momento. Tenta de novo mais tarde.', rotatorPhrases: ['De uma ideia a um curso em um minuto', 'O que você sabe merece ser ensinado', 'Zero experiência técnica necessária', 'Grátis pra começar, sem cartão'], statLanguages: 'idiomas disponíveis', statSeconds: 'segundos pra estrutura', statFromPrice: 'curso grátis, sem cadastro', statCertificate: 'certificado incluído', statLanguagesTip: 'Italiano, inglês, espanhol, francês, alemão, português, chinês, japonês, árabe, russo', statSecondsTip: 'Tempo médio pra gerar a estrutura completa do curso', statFromPriceTip: 'Depois mais 2 grátis criando uma conta, ou passa direto pro plano Completo a partir de €3,49', statCertificateTip: 'Passando no quiz final do curso', freeLimitTitle: 'Você já usou seus cursos grátis', freeLimitMsg: 'Você já gerou os 3 cursos grátis disponíveis. Passa pro plano Completo pra continuar criando cursos.', btnUpgradeNow: 'Passar pro plano Completo', freeRemainingLabel: 'Faltam {n} cursos grátis',
    freeLoginGateTitle: 'Crie uma conta pra continuar de graça', freeLoginGateMsg: 'Você já usou sua geração anônima grátis. Entre ou crie uma conta (grátis) pra desbloquear mais 2 gerações gratuitas vinculadas à sua conta.',
    diffEyebrow: 'Por que o Corsificio é diferente',
    diff1Title: 'Nunca genérico', diff1Body: 'Todo curso segue um método fixo em 5 partes — Gancho, Conceito, Passo a Passo, Exemplo, Desafio — não um resumo qualquer. É exatamente por isso que cursos genéricos pararam de vender.',
    diff2Title: 'Método transparente', diff2Body: 'Não escondemos que é IA — mostramos exatamente a estrutura pedagógica que cada módulo segue, verificável antes de comprar. Confiança se constrói mostrando o método, não escondendo.',
    diff3Title: 'Progresso visível', diff3Body: 'Barra de progresso, quiz por módulo e certificado final — o motivo #1 de abandono de curso é não ver o quanto já avançou.',
    diff4Title: 'Fricção zero', diff4Body: 'Preview grátis do Módulo 1 antes de pagar, checkout seguro em 1 clique via Stripe. 73% dos usuários abandonam por fricção no pagamento — a gente tirou isso do caminho.',
    diff5Title: 'Promessa honesta', diff5Body: 'A gente não promete resultado impossível. Prometemos um curso bem estruturado sobre o seu tema, em segundos em vez de semanas — só isso.',
    compareEyebrow: 'Veja a diferença você mesmo', compareGenericLabel: 'Prompt qualquer numa IA genérica', compareGenericText: '"A meditação tem muitos benefícios. Ajuda a reduzir o estresse e melhorar o foco. Aqui vão alguns passos: respire fundo, encontre um lugar tranquilo, pratique regularmente."', compareCorsificioLabel: 'Módulo gerado pelo Corsificio', compareCorsificioText: '"São 22h e sua cabeça ainda está nos e-mails de amanhã — familiar? O problema não é força de vontade, é você ainda não ter um método. Aqui vai a técnica 4-7-8: inspire contando até 4, segure por 7, solte em 8. Testa agora, antes de continuar lendo. Desafio: faça por 3 noites seguidas e note o que muda."', compareCaption: 'Mesma pergunta, mesmo tempo de geração. A diferença é o método, não a sorte.',
    chatAskTopic: 'Sobre o que você sabe o suficiente pra ensinar?', chatAskAudience: 'Perfeito. E pra quem é esse curso?', chatAskPlan: 'Ótimo, já tenho o suficiente. Que nível de curso você quer?',
    heroTicker: 'cursos gerados até agora',
  },
  zh: {
    langNameForPrompt: 'Chinese (Simplified)',
    titleMain: '你懂的', titleEm: '变成课程', titleEnd: '只需一分钟',
    sub: '只需输入一个主题。几秒钟内获得模块、课程和测验——免费开始，准备好销售时可用AI升级。', heroCtaButton: '免费试用 ↓', sampleLabel: '这是一个真实示例', sampleCta: '免费创建你的课程 →', sampleCaption: '这只是无数可能主题中的一个示例——每10秒自动切换',
    labelTopic: '课程主题', phTopic: '例如：城市园艺、中小企业营销、吉他入门、艺术史',
    labelAudience: '课程受众', phAudience: '例如：任何有兴趣的人、家长、学生、爱好者',
    labelGoal: '学完后应掌握的能力', phGoal: '例如：评估房产并有效地向买家展示',
    labelModules: '模块数量', labelTone: '语气',
    tonePratico: '实用', toneAutorevole: '权威', toneAmichevole: '亲切',
    labelLength: '内容长度', lengthSintetico: '简洁（仅结构）', lengthCompleto: '完整培训（每节课详细内容）',
    labelTier: '级别', tierFreeName: '免费', tierFreeDesc: '矢量插画',
    tierPremiumName: '高级版', tierPremiumDesc: 'AI生成图像',
    btnGenerate: '生成课程', btnGenerating: '生成中…', btnRedirecting: '正在跳转到支付…', btnGeneratingPremium: '生成中（含图像）…',
    hintGeneral: '生成的文本只是一个起点：分享之前请先检查并调整。',
    hintPro: '生成的文本只是起点：在出售给客户之前请检查并个性化调整。',
    labelUsage: '这门课程是给谁用的', usageGeneral: '自用或作为爱好', usagePro: '我要专业地出售它',
    btnPreviewPro: '生成免费预览', btnUnlockCompleto: '解锁完整培训 (€3.49)', btnUnlockPro: '解锁完整课程 (€4.99)',
    previewLabel: '免费预览 — 模块 1', previewLockedNote: '付款后解锁其余模块和图片。', errorPreviewPrefix: '无法生成预览：',
    salesKitLabel: '销售工具包', salesPitchLabel: '销售文案', priceLabel: '建议价格区间', faqLabel: '常见问题', deliveryTipLabel: '授课建议',
    priceFreeValue: '免费', priceCompletoValue: '€3.49', priceProValue: '€4.99',
    planCardsTitle: '选择您的方案', planCardsSub: '以下是各方案之间的具体区别。', trustSecure: '通过Stripe安全支付', trustNoSub: '无隐藏订阅', trustRefund: '技术故障可退款',
    labelPlanPicker: '选择您的方案', pillFreeName: '免费', pillCompletoName: '完整版', pillProName: '专业版',
    currencyNote: '换算价格仅供参考。最终扣款由Stripe处理，以欧元或您的本地货币计算。',
    sidebarProfile: '个人资料', sidebarNotLoggedIn: '您尚未登录。', btnLoginSignup: '登录或注册',
    sidebarMyCourses: '我的课程', sidebarLoginToSee: '登录查看您购买的课程。', sidebarNoCourses: '您还没有购买任何课程。',
    sidebarSettings: '设置', sidebarSettingsHint: '语言和其他偏好设置在主页顶部。',
    authTitle: '登录或创建账户', authIntro: '保存您购买的课程，随时找回。',
    authEmailLabel: '电子邮箱', authPasswordLabel: '密码', btnLogin: '登录', btnSignup: '创建账户', btnLogout: '退出登录',
    showcaseBusiness: '商业', showcaseCreative: '创意', showcaseWellness: '健康', showcaseTech: '科技', showcaseFood: '烹饪',
    btnStartQuiz: '参加期末测验', quizFinalLabel: '期末测验', certNameLabel: '您的姓名（用于证书）', certNamePlaceholder: '张三',
    btnSubmitQuiz: '提交答案', certNameRequired: '请输入您的姓名以生成证书。',
    quizFailMessage: '请复习模块内容后重试：部分答案与关键概念不符。',
    certLabel: '结业证书', certBodyText: '已成功完成课程', printCertLabel: '下载证书',
    certIssuedTo: '兹证明以下学员', certModulesLabel: '个模块 · 完整培训',
    faqTitle: '常见问题',
    faq1Q: '免费方案真的免费吗？', faq1A: '是的。简洁版无需信用卡，永久免费——不是限时试用。',
    faq2Q: '付款如何运作？安全吗？', faq2A: '付款完全由Stripe处理。我们从不查看或存储您的卡信息。',
    faq3Q: '可以退款吗？', faq3A: '一般不可以，因为内容在付款后立即交付。技术错误或重复扣款可退款——详见我们的退款政策。',
    faq4Q: '证书是官方资质吗？', faq4A: '不是。这是应用内测验完成的非正式记录，不是任何机构认可的资格认证。',
    faq5Q: 'Corsificio支持哪些语言？', faq5A: '支持10种语言：意大利语、英语、西班牙语、法语、德语、葡萄牙语、中文、日语、阿拉伯语和俄语。',
    footerRights: '版权所有。', footerContact: '联系我们', footerPrivacy: '隐私', footerTerms: '条款', footerRefund: '退款',
    cookieText: '我们仅使用登录和付款所需的必要Cookie——不做广告追踪。', cookieAccept: '知道了', editableHint: '点击任意文本即可直接编辑。', shareLabel: '分享：', shareCopyLink: '复制链接', shareText: '我刚用Corsificio创建了课程《{title}》——', newsletterTitle: '保持关注', newsletterSub: '课程和方案的最新消息，绝不打扰。随时可以取消订阅。', newsletterPlaceholder: 'you@example.com', newsletterButton: '订阅', newsletterSuccess: '订阅成功，谢谢！', newsletterInvalid: '请输入有效的邮箱地址。', referralLabel: '邀请朋友', referralText: '分享此代码：使用者可获得折扣。', referralCopyHint: '（点击复制）', referralCopied: '已复制！', showcaseExamplesIntro: '选择一个想法立即开始，或输入您自己的主题。', exBusiness1: '小型企业营销计划', exBusiness2: '谈判基础', exBusiness3: '创业者记账入门', exBusiness4: '如何推出产品', exCreative1: '初学者绘画与素描', exCreative2: '创意写作入门', exCreative3: '手机摄影', exCreative4: '平面设计基础', exWellness1: '初学者冥想', exWellness2: '居家瑜伽', exWellness3: '正念饮食', exWellness4: '管理日常压力', exTech1: '编程入门', exTech2: '人工智能入门', exTech3: '网络安全基础', exTech4: '创建你的第一个网站', exFood1: '从零开始的手工面食', exFood2: '初学者烘焙面包', exFood3: '快手素食料理', exFood4: '基础西点技巧',
    planFreeName: '简洁版', planFreeTagline: '第一个课程免费，无需信用卡', planFreeFeatures: ['1个免费课程，注册账号后再送2个', '几秒内生成课程结构', '无图片，无销售工具包'],
    planCompletoName: '完整版', planCompletoTagline: '真正的品质飞跃：完整课程，而非仅仅大纲', planCompletoFeatures: ['每个模块内容最多多5倍（700+字）', '每个模块独有的AI生成图片', '一次性付款，永久拥有'],
    planProName: '专业版', planProTagline: '一应俱全，可用于教学或销售',
    planProBadge: '推荐用于销售', planProFeatures: ['详细文本和AI图片，与完整版相同', '每个模块的实用教学建议', '现成的销售工具包：文案、价格、常见问题', '付款前可免费试用模块1'],
    aboutTitle: '关于我们', aboutIntro: 'Corsificio是一个小型独立工具，旨在让课程创作变得快速、诚实、人人可用。',
    aboutWhatTitle: '我们做什么', aboutWhatText: '我们用AI在几分钟内把一个主题变成结构化的微课程：模块、课程、测验，专业版还包含现成的销售工具包。',
    aboutGoalTitle: '我们的目标', aboutGoalText: '缩短你所知道的与你真正能教授或销售的课程之间的距离——无论你是专业人士还是单纯好奇。',
    aboutValuesTitle: '我们相信', aboutValuesText: '价格透明无隐藏费用，真正免费且始终免费的方案，以及在分享给任何人之前你可以审阅并个性化的内容。',
    moreDetailsToggle: '+ 自定义（模块、语气、目标）', printButton: '下载PDF',
    exampleChips: ['瑜伽', '营销', '吉他', '意大利烹饪', '摄影'],
    loadingMessages: ['正在构建课程结构…', '正在撰写模块…', '正在完善细节…'],
    emptyState: '填写左侧字段并点击"生成课程"。完整结构将在此逐模块显示。',
    errorFillFields: '请至少输入课程主题和受众。', errorNetworkFriendly: '暂时无法连接服务器。请检查网络连接，稍后再试。',
    courseGeneratedLabel: '已生成微课程', premiumSuffix: ' — 高级版', modulePrefix: '模块', quizLabel: '知识检测',
    copyButton: '复制为文本', copiedButton: '已复制 ✓', retryButton: '重试',
    errorPrefix: '无法生成课程：', errorPaymentStartPrefix: '无法启动支付：', errorPremiumPrefix: '无法生成高级课程：',
    paymentCancelled: '支付已取消，未产生任何费用。', paymentLostPrompt: '付款已成功，但我们找不到要生成的课程信息（浏览器存储被清除时可能发生此情况）。请携带此代码联系我们，我们将为您解锁。', btnForgotPassword: '忘记密码？', forgotPasswordNeedEmail: '请在上方输入您的邮箱，然后重新点击。', forgotPasswordSent: '我们已向您发送重置密码的邮件。', newsletterUnavailable: '服务暂时不可用，请稍后再试。', rotatorPhrases: ['从想法到课程只需一分钟', '你的知识值得被教授', '无需任何技术经验', '免费开始，无需信用卡'], statLanguages: '可用语言', statSeconds: '秒生成课程结构', statFromPrice: '免费课程，无需账号', statCertificate: '含结业证书', statLanguagesTip: '意大利语、英语、西班牙语、法语、德语、葡萄牙语、中文、日语、阿拉伯语、俄语', statSecondsTip: '生成完整课程结构的平均时间', statFromPriceTip: '之后可升级到完整版方案，起价€3.49', statCertificateTip: '通过课程期末测验后获得', freeLimitTitle: '您已用完免费课程', freeLimitMsg: '您已生成全部3个免费课程。升级到完整版方案以继续创建课程。', btnUpgradeNow: '升级到完整版方案', freeRemainingLabel: '还剩{n}个免费课程',
  btnApproveStructure: '生成完整课程', btnBuySingleInstead: '购买单个课程', btnManageSubscription: '管理订阅', btnRestartStructure: '更换主题', btnSubscribeMonthly: '订阅', btnTranslateNow: '翻译', certDisclaimer: '由Corsificio生成的非正式结业记录 — 不是任何机构认可的官方学位或认证。', certMethodLabel: '每个模块遵循的方法', certMethodSteps: ['引入', '概念', '步骤', '示例', '挑战'], certShareText: '我刚在Corsificio完成了课程"{title}" —', chatAskAudience: '很好。这门课程面向谁？', chatAskPlan: '好的，这些信息够了。你想要什么级别的课程？', chatAskTopic: '你对什么话题足够了解，可以教授？', compareCaption: '同样的问题，同样的生成时间。区别在于方法，不是运气。', compareCorsificioLabel: 'Corsificio生成的模块', compareCorsificioText: '"晚上10点了，你的脑子还在想明天的邮件——是不是很熟悉？问题不在于意志力，而在于你还没有方法。这是4-7-8呼吸法：吸气数到4，屏息7秒，呼气8秒。现在就试试，再继续往下读。挑战：连续三个晚上做，观察有什么变化。"', compareEyebrow: '亲自看看区别', compareGenericLabel: '给通用AI的任意提示词', compareGenericText: '"冥想有很多好处。它有助于减轻压力，提高专注力。这里有几个步骤：深呼吸，找一个安静的地方，定期练习。"', copyModuleSocialBtn: '用于社交媒体', copyModuleSocialTip: '将此模块复制为适合社交媒体的简短格式', diff1Body: '每门课程都遵循固定的五段式方法——引入、概念、步骤、示例、挑战——而不是随便的摘要。这正是通用课程不再畅销的原因。', diff1Title: '从不通用', diff2Body: '我们不隐瞒这是AI生成的——我们向你展示每个模块遵循的确切教学结构，购买前即可核实。信任是通过展示方法而不是隐藏方法建立的。', diff2Title: '透明的方法', diff3Body: '进度条、每个模块的测验、结业证书——人们放弃课程的第一大原因是看不到自己已经走了多远。', diff3Title: '可见的进度', diff4Body: '付款前免费预览第一模块，通过Stripe安全一键结账。73%的用户因支付摩擦而放弃——我们已经消除了它。', diff4Title: '零摩擦', diff5Body: '我们不承诺不可能的结果。我们承诺的是关于你主题的结构良好的课程，只需几秒钟而不是几周——仅此而已。', diff5Title: '诚实的承诺', diffEyebrow: '为什么Corsificio与众不同', errorFillMaterial: '请粘贴至少几行材料（最少40个字符）。', fileReadError: '无法读取文件。请尝试直接粘贴文本。', fileReadOk: '文件已加载——你可以在下方编辑文本。', fileReading: '正在读取文件...', freeLoginGateMsg: '你已经使用了免费的匿名生成次数。登录或注册（免费）以解锁与你账户绑定的另外2次免费生成。', freeLoginGateTitle: '创建账户以继续免费使用', generatePublicLinkButton: '生成公开链接', generatingImageError: '无法生成图片。', generatingImageLabel: '请稍候...', generatingLinkError: '无法生成公开链接。', generatingLinkLabel: '请稍候...', issuedByLabel: '颁发者', labelLevel: '你的起始水平', labelMaterial: '你的笔记、草稿或原始文本', labelUploadFile: '或上传文件 (.pdf, .txt)', labelVertical: '你的领域', levelAdvanced: '高级', levelBeginner: '初级', levelIntermediate: '中级', mensileFeature1: '每月包含15次"完整版"生成', mensileFeature2: '额外次数可单独购买', mensileFeature3: '随时管理或取消', modeMaterialBtn: '📄 粘贴你的材料', modeTopicBtn: '✏️ 描述一个主题', moreDetailsHint: 'AI已经能自行选择合理的语气和目标——只有在你想要更多控制时才需要自定义。', perMonthLabel: '/月', phAudiencePro: '例如：想提升销售的专业人士、企业、自由职业者', phMaterial: '粘贴笔记、草稿，或已经写好的课程文本……AI会将其转化为结构化课程。', planMensileName: '创作者计划', planMensileTagline: '每月15门完整课程，适合经常创作的人', priceMensileValue: '€19.90', publicLinkReadyLabel: '公开链接已准备好——复制它：', quizScoreLabel: '测验得分', quotaEsgotataMsg: '你现在可以购买单个课程，或等待下一个计费周期更新。', quotaEsgotataTitle: '你已用完本月的所有生成次数', quotaRenewsOn: '将于{date}更新。', regenerateErrorLabel: '出错了，请重试', regenerateModuleBtn: '重新生成', regenerateModuleTip: '仅用AI重新生成此模块，不影响其他模块', regeneratingLabel: '请稍候...', shareAsImageButton: '以图片形式分享', showcaseFromLabel: '起价', socialPostCourseCredit: '完整课程：', structurePreviewEyebrow: '建议的结构', structureStreamLabel: 'AI正在构思课程结构…', subscriptionActivatedMsg: '订阅已激活！你现在可以生成课程了。', translateDoneLabel: '完成！', translateError: '翻译成以下语言时出错：', translateMaxLangs: '你最多可以同时选择3种语言。', translateOriginalLabel: '原始版本', translateTabsLabel: '版本：', translateToggleLabel: '同时生成其他语言版本', translatingLabel: '正在翻译：', usedThisMonthLabel: '本月已使用', verifiedBadgeLabel: '已验证的证书', verticalBusiness: '商业与咨询', verticalCoaching: '教练指导', verticalFitness: '健身（私人教练）', verticalGeneric: '通用', verticalSalute: '健康与养生（治疗师、健康教练）', },
  ja: {
    langNameForPrompt: 'Japanese',
    titleMain: 'あなたの知識が', titleEm: '講座になる', titleEnd: 'たった1分で',
    sub: 'テーマを一つ入力するだけ。数秒でモジュール、レッスン、クイズが完成——無料で始められ、販売の準備ができたらAIでパワーアップ。', heroCtaButton: '無料で試す ↓', sampleLabel: 'こちらが実際の例です', sampleCta: '無料で自分の講座を作る →', sampleCaption: '無限にあるテーマの中の一例です——10秒ごとに切り替わります',
    labelTopic: '講座のテーマ', phTopic: '例：都市型ガーデニング、中小企業向けマーケティング、初心者ギター、美術史',
    labelAudience: '対象者', phAudience: '例：始めてみたい人なら誰でも、保護者、学生、愛好家',
    labelGoal: '受講後にできるようになること', phGoal: '例：不動産を評価し、買主に効果的に提案する',
    labelModules: 'モジュール数', labelTone: 'トーン',
    tonePratico: '実践的', toneAutorevole: '権威的', toneAmichevole: 'フレンドリー',
    labelLength: 'コンテンツの長さ', lengthSintetico: '簡潔（構成のみ）', lengthCompleto: '完全な研修（各レッスンの詳細な文章）',
    labelTier: 'プラン', tierFreeName: '無料', tierFreeDesc: 'ベクターイラスト',
    tierPremiumName: 'プレミアム', tierPremiumDesc: 'AI生成画像',
    btnGenerate: '講座を生成', btnGenerating: '生成中…', btnRedirecting: '決済ページへ移動中…', btnGeneratingPremium: '生成中（画像あり）…',
    hintGeneral: '生成されたテキストは出発点です。共有する前に見直し、カスタマイズしてください。',
    hintPro: '生成されたテキストは出発点です。クライアントに販売する前に見直し、カスタマイズしてください。',
    labelUsage: 'この講座は誰のためのものか', usageGeneral: '自分用または趣味として', usagePro: 'プロとして販売する予定',
    btnPreviewPro: '無料プレビューを生成', btnUnlockCompleto: '完全な研修をアンロック (€3.49)', btnUnlockPro: '完全な講座をアンロック (€4.99)',
    previewLabel: '無料プレビュー — モジュール1', previewLockedNote: '残りのモジュールと画像は支払い後にアンロックされます。', errorPreviewPrefix: 'プレビューを生成できませんでした：',
    salesKitLabel: 'セールスキット', salesPitchLabel: 'セールス文', priceLabel: '推奨価格帯', faqLabel: 'よくある質問', deliveryTipLabel: '進行のヒント',
    priceFreeValue: '無料', priceCompletoValue: '€3.49', priceProValue: '€4.99',
    planCardsTitle: 'プランを選択', planCardsSub: 'プラン間で何が変わるかをご確認ください。', trustSecure: 'Stripeによる安全な決済', trustNoSub: '隠れたサブスクリプションなし', trustRefund: '技術的な問題は返金対応',
    labelPlanPicker: 'プランを選択', pillFreeName: '無料', pillCompletoName: '完全版', pillProName: 'プロ',
    currencyNote: '換算価格は目安です。最終的な請求はStripeによりユーロまたは現地通貨で処理されます。',
    sidebarProfile: 'プロフィール', sidebarNotLoggedIn: 'ログインしていません。', btnLoginSignup: 'ログイン・登録',
    sidebarMyCourses: 'マイ講座', sidebarLoginToSee: '購入した講座を見るにはログインしてください。', sidebarNoCourses: 'まだ講座を購入していません。',
    sidebarSettings: '設定', sidebarSettingsHint: '言語やその他の設定はメインページ上部にあります。',
    authTitle: 'ログインまたはアカウント作成', authIntro: '購入した講座を保存していつでも見つけられます。',
    authEmailLabel: 'メール', authPasswordLabel: 'パスワード', btnLogin: 'ログイン', btnSignup: 'アカウント作成', btnLogout: 'ログアウト',
    showcaseBusiness: 'ビジネス', showcaseCreative: 'クリエイティブ', showcaseWellness: 'ウェルネス', showcaseTech: 'テクノロジー', showcaseFood: '料理',
    btnStartQuiz: '最終クイズを受ける', quizFinalLabel: '最終クイズ', certNameLabel: 'お名前（証明書用）', certNamePlaceholder: '山田太郎',
    btnSubmitQuiz: '回答を送信', certNameRequired: '証明書を発行するにはお名前を入力してください。',
    quizFailMessage: 'モジュールを見直してもう一度お試しください：一部の回答が重要な概念と一致していません。',
    certLabel: '修了証明書', certBodyText: 'は講座を無事に修了しました', printCertLabel: '証明書をダウンロード',
    certIssuedTo: 'この証明書は下記の方に授与されます', certModulesLabel: 'モジュール・完全版',
    faqTitle: 'よくある質問',
    faq1Q: '無料プランは本当に無料ですか？', faq1A: 'はい。簡潔版プランはクレジットカード不要で、永久に無料です——期間限定の試用ではありません。',
    faq2Q: '決済はどのように行われますか？安全ですか？', faq2A: '決済はすべてStripeが処理します。カード情報を私たちが見たり保存したりすることはありません。',
    faq3Q: '返金は可能ですか？', faq3A: '基本的には不可です。決済直後にコンテンツが提供されるためです。技術的エラーや二重請求の場合は返金します——返金ポリシーをご覧ください。',
    faq4Q: 'この証明書は公式な資格ですか？', faq4A: 'いいえ。アプリ内クイズ完了の非公式な記録であり、機関や学校が認める資格ではありません。',
    faq5Q: 'Corsificioは何languageに対応していますか？', faq5A: '10言語に対応：イタリア語、英語、スペイン語、フランス語、ドイツ語、ポルトガル語、中国語、日本語、アラビア語、ロシア語。',
    footerRights: 'All rights reserved.', footerContact: 'お問い合わせ', footerPrivacy: 'プライバシー', footerTerms: '利用規約', footerRefund: '返金',
    cookieText: 'ログインと決済に必要なCookieのみ使用しています——広告トラッキングは行いません。', cookieAccept: '了解', editableHint: 'テキストをクリックすると直接編集できます。', shareLabel: 'シェア：', shareCopyLink: 'リンクをコピー', shareText: 'Corsificioで講座「{title}」を作成しました——', newsletterTitle: '最新情報を受け取る', newsletterSub: '講座やプランのお知らせ、スパムなし。いつでも解除できます。', newsletterPlaceholder: 'you@example.com', newsletterButton: '登録する', newsletterSuccess: '登録が完了しました、ありがとうございます！', newsletterInvalid: '有効なメールアドレスを入力してください。', referralLabel: '友達を招待', referralText: 'このコードをシェアすると、使った人が割引を受けられます。', referralCopyHint: '（クリックでコピー）', referralCopied: 'コピーしました！', showcaseExamplesIntro: 'すぐ始められるアイデアを選ぶか、ご自身のテーマを入力してください。', exBusiness1: '中小企業のマーケティングプラン', exBusiness2: '交渉の基本', exBusiness3: '起業家のための簿記', exBusiness4: '製品の発売方法', exCreative1: '初心者のためのデッサン・スケッチ', exCreative2: '創作文章の始め方', exCreative3: 'スマホ写真術', exCreative4: 'グラフィックデザインの基礎', exWellness1: '初心者向け瞑想', exWellness2: '自宅でできるヨガ', exWellness3: 'マインドフルイーティング', exWellness4: '日々のストレス管理', exTech1: 'プログラミング入門', exTech2: '初心者向けAI', exTech3: 'サイバーセキュリティの基礎', exTech4: '初めてのウェブサイト作成', exFood1: 'ゼロから作る手打ちパスタ', exFood2: '初心者のパン作り', exFood3: '時短ベジタリアン料理', exFood4: '基本の製菓技術',
    planFreeName: '簡潔版', planFreeTagline: '最初の1講座は無料、クレジットカード不要', planFreeFeatures: ['無料講座1つ、アカウント登録でさらに2つ', '数秒で講座の構成を生成', '画像なし、セールスキットなし'],
    planCompletoName: '完全版', planCompletoTagline: '本当の進化：目次だけでなく本物のレッスン', planCompletoFeatures: ['モジュールごとに最大5倍のコンテンツ量（700語以上）', 'モジュールごとに独自のAI生成画像', '一回払い、ずっとあなたのもの'],
    planProName: 'プロ版', planProTagline: 'すべて込み、指導にも販売にもすぐ使える',
    planProBadge: '販売におすすめ', planProFeatures: ['完全版と同じ詳細な文章とAI画像', '各モジュールの実践的な指導のコツ', 'すぐ使えるセールスキット：セールス文、価格、FAQ', '決める前にモジュール1を無料体験'],
    aboutTitle: '私たちについて', aboutIntro: 'Corsificioは、講座作成を迅速で誠実、そして誰もが利用できるものにするために作られた、小さな独立系ツールです。',
    aboutWhatTitle: '私たちがすること', aboutWhatText: 'AIを使い、一つのテーマを数分で構成されたミニ講座に変えます：モジュール、レッスン、クイズ、そしてプロ向けにはすぐ使えるセールスキットも。',
    aboutGoalTitle: '私たちの目標', aboutGoalText: 'あなたが知っていることと、実際に教えたり販売したりできる講座との距離を縮めること——プロでも、ただ興味があるだけでも。',
    aboutValuesTitle: '私たちが大切にしていること', aboutValuesText: '隠れた費用のない明確な価格、ずっと無料のままの本物の無料プラン、そして誰かと共有する前に見直し自分のものにできるコンテンツ。',
    moreDetailsToggle: '+ カスタマイズ（モジュール、トーン、目標）', printButton: 'PDFをダウンロード',
    exampleChips: ['ヨガ', 'マーケティング', 'ギター', 'イタリア料理', '写真'],
    loadingMessages: ['講座を構成しています…', 'モジュールを執筆しています…', '仕上げをしています…'],
    emptyState: '左側の項目を入力し、「講座を生成」を押してください。ここに全体の構成がモジュールごとに表示されます。',
    errorFillFields: '少なくとも講座のテーマと対象者を入力してください。', errorNetworkFriendly: '現在サーバーに接続できません。接続を確認して、しばらくしてからもう一度お試しください。',
    courseGeneratedLabel: '生成されたミニ講座', premiumSuffix: ' — プレミアム', modulePrefix: 'モジュール', quizLabel: '理解度チェック',
    copyButton: 'テキストとしてコピー', copiedButton: 'コピーしました ✓', retryButton: '再試行',
    errorPrefix: '講座を生成できませんでした：', errorPaymentStartPrefix: '決済を開始できませんでした：', errorPremiumPrefix: 'プレミアム講座を生成できませんでした：',
    paymentCancelled: '決済がキャンセルされました。請求は発生していません。', paymentLostPrompt: 'お支払いは完了しましたが、生成する講座の情報が見つかりません（ブラウザのデータが消去された場合に起こることがあります）。このコードを添えてご連絡いただければ、こちらで解除いたします。', btnForgotPassword: 'パスワードをお忘れですか？', forgotPasswordNeedEmail: '上にメールアドレスを入力してから、もう一度クリックしてください。', forgotPasswordSent: 'パスワード再設定用のメールをお送りしました。', newsletterUnavailable: '現在サービスをご利用いただけません。後でもう一度お試しください。', rotatorPhrases: ['アイデアから講座までたった1分', 'あなたの知識は教える価値がある', '技術的な経験は不要です', 'クレジットカード不要で無料スタート'], statLanguages: '対応言語', statSeconds: '秒で構成が完成', statFromPrice: '無料講座、アカウント不要', statCertificate: '証明書付き', statLanguagesTip: 'イタリア語、英語、スペイン語、フランス語、ドイツ語、ポルトガル語、中国語、日本語、アラビア語、ロシア語', statSecondsTip: '講座の構成全体を生成する平均時間', statFromPriceTip: 'その後は完全版プランに切り替え（€3.49〜）', statCertificateTip: '講座の最終クイズに合格すると取得できます', freeLimitTitle: '無料講座を使い切りました', freeLimitMsg: '利用可能な無料講座3つをすべて生成しました。講座の作成を続けるには完全版プランに切り替えてください。', btnUpgradeNow: '完全版プランに切り替える', freeRemainingLabel: '残り{n}講座無料',
  btnApproveStructure: '完全なコースを生成する', btnBuySingleInstead: '単発コースを購入する', btnManageSubscription: 'サブスクリプションを管理', btnRestartStructure: 'テーマを変更する', btnSubscribeMonthly: '登録する', btnTranslateNow: '翻訳する', certDisclaimer: 'Corsificioが発行する非公式の修了記録です — いかなる機関にも認められた正式な資格や認定ではありません。', certMethodLabel: '各モジュールが従う方法', certMethodSteps: ['導入', 'コンセプト', 'ステップ', '例', '課題'], certShareText: 'Corsificioでコース「{title}」を修了しました —', chatAskAudience: 'いいですね。このコースは誰向けですか？', chatAskPlan: 'よし、これで十分です。どのレベルのコースにしますか？', chatAskTopic: '教えられるくらい詳しいテーマは何ですか？', compareCaption: '同じ質問、同じ生成時間。違いは運ではなく方法です。', compareCorsificioLabel: 'Corsificioが生成したモジュール', compareCorsificioText: '「夜10時なのに、頭の中はまだ明日のメールのことでいっぱい——心当たりありませんか？問題は意志力ではなく、まだ方法を知らないことです。4-7-8呼吸法を試してみましょう：4秒吸って、7秒止めて、8秒吐く。読み続ける前に今すぐ試してみてください。課題：3晩連続で行い、何が変わるか観察しましょう。」', compareEyebrow: '違いを自分の目で確かめてください', compareGenericLabel: '汎用AIへの適当なプロンプト', compareGenericText: '「瞑想には多くの効果があります。ストレスを減らし、集中力を高めるのに役立ちます。手順は次の通りです：深呼吸をする、静かな場所を見つける、定期的に練習する。」', copyModuleSocialBtn: 'SNS用', copyModuleSocialTip: 'このモジュールをSNS向けの短い形式でコピーする', diff1Body: 'すべてのコースは固定の5部構成（導入、コンセプト、ステップ、例、課題）に従います——ただの要約ではありません。汎用的なコースが売れなくなった理由はまさにこれです。', diff1Title: '決して汎用的にしない', diff2Body: 'AIであることを隠しません——各モジュールが従う正確な教育構造を、購入前に確認できる形でお見せします。信頼は方法を隠すのではなく、見せることで築かれます。', diff2Title: '透明な方法', diff3Body: '進捗バー、モジュールごとのクイズ、修了証——コースを途中でやめる一番の理由は、自分がどこまで進んだか分からなくなることです。', diff3Title: '見える進捗', diff4Body: '支払い前にモジュール1を無料プレビュー、Stripeによる安全なワンクリック決済。ユーザーの73％が支払いの手間で離脱します——それを取り除きました。', diff4Title: '摩擦ゼロ', diff5Body: '不可能な結果は約束しません。あなたのテーマについて、数週間ではなく数秒でよく構成されたコースをお約束します——それだけです。', diff5Title: '誠実な約束', diffEyebrow: 'Corsificioが違う理由', errorFillMaterial: '少なくとも数行の資料を貼り付けてください（最低40文字）。', fileReadError: 'ファイルを読み込めませんでした。テキストを直接貼り付けてみてください。', fileReadOk: 'ファイルを読み込みました——下のテキストを編集できます。', fileReading: 'ファイルを読み込み中...', freeLoginGateMsg: '匿名の無料生成を使い切りました。ログインまたは登録（無料）して、アカウントに紐づくあと2回の無料生成を利用できるようにしましょう。', freeLoginGateTitle: '無料で続けるにはアカウントを作成してください', generatePublicLinkButton: '公開リンクを生成する', generatingImageError: '画像を生成できませんでした。', generatingImageLabel: '少々お待ちください...', generatingLinkError: '公開リンクを生成できませんでした。', generatingLinkLabel: '少々お待ちください...', issuedByLabel: '発行者', labelLevel: 'あなたの現在のレベル', labelMaterial: 'あなたのメモ、下書き、または元のテキスト', labelUploadFile: 'またはファイルをアップロード（.pdf、.txt）', labelVertical: 'あなたの分野', levelAdvanced: '上級', levelBeginner: '初級', levelIntermediate: '中級', mensileFeature1: '月15回の「完全版」生成が含まれる', mensileFeature2: '追加分は単発購入で利用可能', mensileFeature3: 'いつでも管理・解約できる', modeMaterialBtn: '📄 資料を貼り付ける', modeTopicBtn: '✏️ テーマを説明する', moreDetailsHint: 'AIはすでに適切なトーンと目標を自分で選んでいます——もっとコントロールしたい場合のみカスタマイズしてください。', perMonthLabel: '/月', phAudiencePro: '例：売上を向上させたい専門家、企業、フリーランス', phMaterial: 'メモ、下書き、またはすでに書いたレッスンのテキストを貼り付けてください... AIがそれを構造化されたコースに変換します。', planMensileName: 'クリエイタープラン', planMensileTagline: '頻繁にコースを作る人向けに、月15コースの完全版', priceMensileValue: '€19.90', publicLinkReadyLabel: '公開リンクの準備ができました——コピーしてください：', quizScoreLabel: 'クイズの得点', quotaEsgotataMsg: '今すぐ単発コースを購入するか、次の請求サイクルの更新をお待ちください。', quotaEsgotataTitle: '今月の生成回数をすべて使い切りました', quotaRenewsOn: '{date}に更新されます。', regenerateErrorLabel: 'エラーです、もう一度お試しください', regenerateModuleBtn: '再生成', regenerateModuleTip: '他のモジュールに影響を与えずに、このモジュールだけAIで再生成する', regeneratingLabel: '少々お待ちください...', shareAsImageButton: '画像として共有', showcaseFromLabel: '～から', socialPostCourseCredit: '完全なコース：', structurePreviewEyebrow: '提案された構成', structureStreamLabel: 'AIがコースの構成を考えています…', subscriptionActivatedMsg: 'サブスクリプションが有効になりました！今すぐコースを生成できます。', translateDoneLabel: '完了！', translateError: '翻訳中にエラーが発生しました：', translateMaxLangs: '一度に選択できる言語は最大3つです。', translateOriginalLabel: 'オリジナル', translateTabsLabel: 'バージョン：', translateToggleLabel: '他の言語でも生成する', translatingLabel: '翻訳中：', usedThisMonthLabel: '今月使用済み', verifiedBadgeLabel: '検証済み証明書', verticalBusiness: 'ビジネス・コンサルティング', verticalCoaching: 'コーチング', verticalFitness: 'フィットネス（パーソナルトレーナー）', verticalGeneric: '汎用', verticalSalute: '健康・ウェルネス（セラピスト、ウェルネスコーチ）', },
  ar: {
    langNameForPrompt: 'Arabic',
    titleMain: 'ما تعرفه', titleEm: 'يصبح دورة', titleEnd: 'خلال دقيقة',
    sub: 'اكتب موضوعًا واحدًا فقط. خلال ثوانٍ تحصل على وحدات ودروس واختبار — مجانًا للبدء، ومعزز بالذكاء الاصطناعي عندما تكون مستعدًا للبيع.', heroCtaButton: 'جرّبه مجانًا ↓', sampleLabel: 'إليك مثال حقيقي', sampleCta: 'أنشئ دورتك، مجانًا ←', sampleCaption: 'مثال واحد من بين مواضيع لا حصر لها — يتغير كل 10 ثوانٍ',
    labelTopic: 'موضوع الدورة', phTopic: 'مثال: البستنة الحضرية، التسويق للشركات الصغيرة، الغيتار للمبتدئين، تاريخ الفن',
    labelAudience: 'الفئة المستهدفة', phAudience: 'مثال: أي شخص فضولي للبدء، الآباء، الطلاب، الهواة',
    labelGoal: 'ما يجب أن يتقنه المتعلم في النهاية', phGoal: 'مثال: تقييم عقار وتقديمه بفعالية لمشترٍ',
    labelModules: 'عدد الوحدات', labelTone: 'النبرة',
    tonePratico: 'عملية', toneAutorevole: 'موثوقة', toneAmichevole: 'ودية',
    labelLength: 'طول المحتوى', lengthSintetico: 'مختصر (الهيكل فقط)', lengthCompleto: 'تدريب كامل (نص موسع لكل درس)',
    labelTier: 'المستوى', tierFreeName: 'مجاني', tierFreeDesc: 'رسوم توضيحية متجهية',
    tierPremiumName: 'مميز', tierPremiumDesc: 'صور مولدة بالذكاء الاصطناعي',
    btnGenerate: 'إنشاء الدورة', btnGenerating: 'جارٍ الإنشاء…', btnRedirecting: 'جارٍ التحويل إلى الدفع…', btnGeneratingPremium: 'جارٍ الإنشاء (مع الصور)…',
    hintGeneral: 'النص الذي تم إنشاؤه هو نقطة انطلاق: راجعه وخصصه قبل مشاركته.',
    hintPro: 'النص الذي تم إنشاؤه هو نقطة انطلاق: راجعه وخصصه قبل بيعه لعملائك.',
    labelUsage: 'لمن هذه الدورة', usageGeneral: 'لنفسي أو كهواية', usagePro: 'سأبيعها باحترافية',
    btnPreviewPro: 'إنشاء معاينة مجانية', btnUnlockCompleto: 'فتح التدريب الكامل (3.49€)', btnUnlockPro: 'فتح الدورة الكاملة (4.99€)',
    previewLabel: 'معاينة مجانية — الوحدة 1', previewLockedNote: 'يتم فتح الوحدات والصور المتبقية بعد الدفع.', errorPreviewPrefix: 'تعذر إنشاء المعاينة: ',
    salesKitLabel: 'حزمة المبيعات', salesPitchLabel: 'نص البيع', priceLabel: 'نطاق السعر المقترح', faqLabel: 'الأسئلة الشائعة', deliveryTipLabel: 'نصيحة لتقديم الدرس',
    priceFreeValue: 'مجاني', priceCompletoValue: '3.49€', priceProValue: '4.99€',
    planCardsTitle: 'اختر خطتك', planCardsSub: 'هذا بالضبط ما يتغير من باقة إلى أخرى.', trustSecure: 'دفع آمن عبر Stripe', trustNoSub: 'بدون اشتراك خفي', trustRefund: 'استرداد في حال وجود خطأ تقني',
    labelPlanPicker: 'اختر خطتك', pillFreeName: 'مجاني', pillCompletoName: 'كامل', pillProName: 'احترافي',
    currencyNote: 'الأسعار المحولة تقريبية. يتم معالجة الدفع النهائي عبر Stripe باليورو أو بعملتك المحلية.',
    sidebarProfile: 'الملف الشخصي', sidebarNotLoggedIn: 'لم تقم بتسجيل الدخول.', btnLoginSignup: 'تسجيل الدخول أو إنشاء حساب',
    sidebarMyCourses: 'دوراتي', sidebarLoginToSee: 'سجّل الدخول لرؤية الدورات التي اشتريتها.', sidebarNoCourses: 'لم تشترِ أي دورة بعد.',
    sidebarSettings: 'الإعدادات', sidebarSettingsHint: 'اللغة والتفضيلات الأخرى موجودة أعلى الصفحة الرئيسية.',
    authTitle: 'سجّل الدخول أو أنشئ حسابًا', authIntro: 'احفظ الدورات التي تشتريها واعثر عليها في أي وقت.',
    authEmailLabel: 'البريد الإلكتروني', authPasswordLabel: 'كلمة المرور', btnLogin: 'تسجيل الدخول', btnSignup: 'إنشاء حساب', btnLogout: 'تسجيل الخروج',
    showcaseBusiness: 'أعمال', showcaseCreative: 'إبداع', showcaseWellness: 'صحة', showcaseTech: 'تقنية', showcaseFood: 'طبخ',
    btnStartQuiz: 'خذ الاختبار النهائي', quizFinalLabel: 'الاختبار النهائي', certNameLabel: 'اسمك (للشهادة)', certNamePlaceholder: 'محمد أحمد',
    btnSubmitQuiz: 'إرسال الإجابات', certNameRequired: 'أدخل اسمك لإنشاء الشهادة.',
    quizFailMessage: 'راجع الوحدات وحاول مرة أخرى: بعض الإجابات لا تتطابق مع المفاهيم الأساسية.',
    certLabel: 'شهادة إتمام', certBodyText: 'أكمل الدورة بنجاح', printCertLabel: 'تنزيل الشهادة',
    certIssuedTo: 'تُمنح هذه الشهادة إلى', certModulesLabel: 'وحدات · تدريب كامل',
    faqTitle: 'الأسئلة الشائعة',
    faq1Q: 'هل الخطة المجانية مجانية حقًا؟', faq1A: 'نعم. الخطة المختصرة لا تتطلب بطاقة ائتمان وتبقى مجانية إلى الأبد — ليست تجربة محدودة المدة.',
    faq2Q: 'كيف يعمل الدفع؟ هل هو آمن؟', faq2A: 'تتم معالجة المدفوعات بالكامل عبر Stripe. لا نرى أو نخزن بيانات بطاقتك أبدًا.',
    faq3Q: 'هل يمكنني استرداد أموالي؟', faq3A: 'بشكل عام لا، لأن المحتوى يُسلَّم فور الدفع. نسترد في حالة خطأ تقني أو دفع مكرر — راجع سياسة الاسترداد الخاصة بنا.',
    faq4Q: 'هل الشهادة مؤهل رسمي؟', faq4A: 'لا. إنها سجل غير رسمي لإتمام الاختبار داخل التطبيق، وليست شهادة معترف بها من أي مؤسسة.',
    faq5Q: 'بأي لغات يعمل Corsificio؟', faq5A: 'بعشر لغات: الإيطالية والإنجليزية والإسبانية والفرنسية والألمانية والبرتغالية والصينية واليابانية والعربية والروسية.',
    footerRights: 'جميع الحقوق محفوظة.', footerContact: 'اتصل بنا', footerPrivacy: 'الخصوصية', footerTerms: 'الشروط', footerRefund: 'الاسترداد',
    cookieText: 'نستخدم فقط ملفات تعريف الارتباط الضرورية لتسجيل الدخول والدفع — بدون تتبع إعلاني.', cookieAccept: 'فهمت', editableHint: 'انقر على أي نص لتعديله مباشرة.', shareLabel: 'شارك:', shareCopyLink: 'نسخ الرابط', shareText: 'لقد أنشأت للتو دورة "{title}" باستخدام Corsificio —', newsletterTitle: 'ابقَ على اطلاع', newsletterSub: 'أخبار حول الدورات والخطط، بدون رسائل مزعجة. يمكنك إلغاء الاشتراك في أي وقت.', newsletterPlaceholder: 'you@example.com', newsletterButton: 'اشترك', newsletterSuccess: 'تم تأكيد الاشتراك، شكرًا لك!', newsletterInvalid: 'أدخل بريدًا إلكترونيًا صالحًا.', referralLabel: 'ادعُ صديقًا', referralText: 'شارك هذا الرمز: من يستخدمه يحصل على خصم.', referralCopyHint: '(انقر للنسخ)', referralCopied: 'تم النسخ!', showcaseExamplesIntro: 'اختر فكرة للبدء فورًا، أو اكتب فكرتك الخاصة.', exBusiness1: 'خطة تسويق لمشروع صغير', exBusiness2: 'أساسيات التفاوض', exBusiness3: 'المحاسبة لرواد الأعمال', exBusiness4: 'كيفية إطلاق منتج', exCreative1: 'الرسم والتخطيط للمبتدئين', exCreative2: 'الكتابة الإبداعية: كيف تبدأ', exCreative3: 'التصوير بالهاتف الذكي', exCreative4: 'أساسيات التصميم الجرافيكي', exWellness1: 'التأمل للمبتدئين', exWellness2: 'اليوغا في المنزل', exWellness3: 'الأكل الواعي', exWellness4: 'إدارة التوتر اليومي', exTech1: 'مقدمة في البرمجة', exTech2: 'الذكاء الاصطناعي للمبتدئين', exTech3: 'أساسيات الأمن السيبراني', exTech4: 'أنشئ موقعك الإلكتروني الأول', exFood1: 'المعكرونة المنزلية من الصفر', exFood2: 'صناعة الخبز للمبتدئين', exFood3: 'طبخ نباتي سريع', exFood4: 'تقنيات أساسية في الحلويات',
    planFreeName: 'مختصر', planFreeTagline: 'أول دورة مجانية، بدون بطاقة ائتمان', planFreeFeatures: ['دورة مجانية واحدة، ثم دورتان إضافيتان بإنشاء حساب', 'هيكل الدورة في ثوانٍ', 'بدون صور، بدون حزمة مبيعات'],
    planCompletoName: 'كامل', planCompletoTagline: 'القفزة الحقيقية: دروس كاملة، وليس مجرد مخطط', planCompletoFeatures: ['محتوى أكثر بخمس مرات لكل وحدة (700+ كلمة)', 'صورة فريدة مولدة بالذكاء الاصطناعي لكل وحدة', 'دفعة واحدة — تبقى ملكك للأبد'],
    planProName: 'احترافي', planProTagline: 'كل شيء متضمن، جاهز للتدريس أو البيع',
    planProBadge: 'موصى به للبيع', planProFeatures: ['نص موسع وصور بالذكاء الاصطناعي، مثل الخطة الكاملة', 'نصائح عملية لتدريس كل وحدة', 'حزمة مبيعات جاهزة: نص بيع، سعر، أسئلة شائعة', 'جرّب الوحدة 1 مجانًا قبل أن تقرر'],
    aboutTitle: 'من نحن', aboutIntro: 'Corsificio أداة صغيرة ومستقلة، صُممت لجعل إنشاء الدورات سريعًا وصادقًا ومتاحًا للجميع.',
    aboutWhatTitle: 'ما الذي نقوم به', aboutWhatText: 'نستخدم الذكاء الاصطناعي لتحويل موضوع واحد إلى دورة مصغرة منظمة في دقائق: وحدات ودروس واختبارات، ولأصحاب المهن، حزمة مبيعات جاهزة للاستخدام.',
    aboutGoalTitle: 'هدفنا', aboutGoalText: 'تقليل المسافة بين ما تعرفه ودورة يمكنك فعلاً تدريسها أو بيعها — سواء كنت محترفًا أو مجرد فضولي.',
    aboutValuesTitle: 'ما نؤمن به', aboutValuesText: 'أسعار واضحة بدون تكاليف خفية، خطة مجانية حقيقية تبقى مجانية، ومحتوى تراجعه وتجعله خاصًا بك قبل مشاركته مع أي شخص.',
    moreDetailsToggle: '+ تخصيص (الوحدات، النبرة، الهدف)', printButton: 'تنزيل PDF',
    exampleChips: ['يوغا', 'تسويق', 'غيتار', 'الطبخ الإيطالي', 'تصوير'],
    loadingMessages: ['جارٍ هيكلة الدورة…', 'جارٍ كتابة الوحدات…', 'جارٍ صقل التفاصيل…'],
    emptyState: 'املأ الحقول على اليسار واضغط على "إنشاء الدورة". سيظهر هنا الهيكل الكامل، وحدة تلو الأخرى.',
    errorFillFields: 'يرجى إدخال موضوع الدورة والفئة المستهدفة على الأقل.', errorNetworkFriendly: 'يتعذر علينا الوصول إلى الخادم الآن. تحقق من اتصالك وحاول مرة أخرى بعد قليل.',
    courseGeneratedLabel: 'الدورة المصغرة المُنشأة', premiumSuffix: ' — مميز', modulePrefix: 'الوحدة', quizLabel: 'اختبار الفهم',
    copyButton: 'نسخ كنص', copiedButton: 'تم النسخ ✓', retryButton: 'إعادة المحاولة',
    errorPrefix: 'تعذر إنشاء الدورة: ', errorPaymentStartPrefix: 'تعذر بدء الدفع: ', errorPremiumPrefix: 'تعذر إنشاء الدورة المميزة: ',
    paymentCancelled: 'تم إلغاء الدفع. لم يتم خصم أي مبلغ.', paymentLostPrompt: 'تم الدفع بنجاح، لكننا لا نجد تفاصيل الدورة المطلوب إنشاؤها (قد يحدث هذا إذا تم مسح ذاكرة المتصفح). تواصل معنا بهذا الرمز وسنقوم بفتحها لك.', btnForgotPassword: 'نسيت كلمة المرور؟', forgotPasswordNeedEmail: 'أدخل بريدك الإلكتروني أعلاه ثم انقر مرة أخرى.', forgotPasswordSent: 'لقد أرسلنا لك بريدًا إلكترونيًا لإعادة تعيين كلمة المرور.', newsletterUnavailable: 'الخدمة غير متاحة حاليًا. حاول مرة أخرى لاحقًا.', rotatorPhrases: ['من فكرة إلى دورة في دقيقة واحدة', 'ما تعرفه يستحق أن يُدرَّس', 'لا حاجة لخبرة تقنية', 'مجاني للبدء، بدون بطاقة ائتمان'], statLanguages: 'لغة متاحة', statSeconds: 'ثانية لإنشاء الهيكل', statFromPrice: 'دورة مجانية، بدون حساب', statCertificate: 'شهادة مضمنة', statLanguagesTip: 'الإيطالية والإنجليزية والإسبانية والفرنسية والألمانية والبرتغالية والصينية واليابانية والعربية والروسية', statSecondsTip: 'متوسط الوقت لإنشاء الهيكل الكامل للدورة', statFromPriceTip: 'ثم انتقل إلى خطة الدورة الكاملة بدءًا من 3.49 يورو', statCertificateTip: 'باجتياز الاختبار النهائي للدورة', freeLimitTitle: 'لقد استخدمت دوراتك المجانية', freeLimitMsg: 'لقد أنشأت جميع الدورات المجانية الثلاث المتاحة. انتقل إلى خطة الدورة الكاملة لمواصلة إنشاء الدورات.', btnUpgradeNow: 'الانتقال إلى الخطة الكاملة', freeRemainingLabel: 'تبقى لديك {n} دورات مجانية',
  btnApproveStructure: 'إنشاء الدورة الكاملة', btnBuySingleInstead: 'شراء دورة واحدة', btnManageSubscription: 'إدارة الاشتراك', btnRestartStructure: 'تغيير الموضوع', btnSubscribeMonthly: 'اشترك', btnTranslateNow: 'ترجم', certDisclaimer: 'سجل إتمام غير رسمي تم إنشاؤه بواسطة Corsificio — وليس شهادة أو اعتمادًا رسميًا معترفًا به من قبل أي مؤسسة.', certMethodLabel: 'المنهجية التي تتبعها كل وحدة', certMethodSteps: ['المقدمة', 'المفهوم', 'خطوة بخطوة', 'مثال', 'التحدي'], certShareText: 'لقد أكملت للتو دورة "{title}" على Corsificio —', chatAskAudience: 'ممتاز. ولمن هذه الدورة؟', chatAskPlan: 'رائع، هذا يكفي الآن. ما مستوى الدورة الذي تريده؟', chatAskTopic: 'عن أي موضوع تعرف ما يكفي لتدريسه؟', compareCaption: 'نفس السؤال، نفس وقت التوليد. الفرق هو المنهجية، وليس الحظ.', compareCorsificioLabel: 'وحدة تم إنشاؤها بواسطة Corsificio', compareCorsificioText: '"الساعة العاشرة مساءً وعقلك ما زال منشغلاً برسائل الغد — يبدو مألوفًا؟ المشكلة ليست في قوة الإرادة، بل في أنك لا تملك منهجية بعد. إليك تقنية 4-7-8: استنشق لمدة 4 عدات، احبس النفس 7 عدات، ازفر لمدة 8 عدات. جربها الآن قبل أن تكمل القراءة. التحدي: افعلها لثلاث ليالٍ متتالية ولاحظ ما يتغير."', compareEyebrow: 'شاهد الفرق بنفسك', compareGenericLabel: 'أي طلب لذكاء اصطناعي عام', compareGenericText: '"للتأمل فوائد عديدة. يساعد على تقليل التوتر وتحسين التركيز. إليك بعض الخطوات: تنفس بعمق، ابحث عن مكان هادئ، مارس بانتظام."', copyModuleSocialBtn: 'لوسائل التواصل', copyModuleSocialTip: 'انسخ هذه الوحدة بصيغة مختصرة لوسائل التواصل الاجتماعي', diff1Body: 'تتبع كل دورة منهجية ثابتة من 5 أجزاء — مقدمة، مفهوم، خطوة بخطوة، مثال، تحدٍ — وليست مجرد ملخص عشوائي. لهذا السبب بالتحديد توقفت الدورات العامة عن البيع.', diff1Title: 'ليست عامة أبدًا', diff2Body: 'لا نخفي أنه ذكاء اصطناعي — نُظهر لك البنية التعليمية الدقيقة التي تتبعها كل وحدة، ويمكن التحقق منها قبل الشراء. تُبنى الثقة بإظهار المنهجية، لا بإخفائها.', diff2Title: 'منهجية شفافة', diff3Body: 'شريط تقدم، اختبار لكل وحدة، شهادة نهائية — السبب الأول لتخلي الناس عن الدورات هو عدم رؤية مدى تقدمهم.', diff3Title: 'تقدم مرئي', diff4Body: 'معاينة مجانية للوحدة الأولى قبل الدفع، دفع آمن بنقرة واحدة عبر Stripe. يتخلى 73% من المستخدمين بسبب صعوبات الدفع — لقد أزلناها.', diff4Title: 'احتكاك صفري', diff5Body: 'نحن لا نعد بنتائج مستحيلة. نعدك بدورة منظمة جيدًا حول موضوعك، في ثوانٍ بدلاً من أسابيع — هذا كل شيء.', diff5Title: 'وعد صادق', diffEyebrow: 'لماذا Corsificio مختلف', errorFillMaterial: 'الصق بضعة أسطر على الأقل من المحتوى (40 حرفًا كحد أدنى).', fileReadError: 'تعذرت قراءة الملف. حاول لصق النص مباشرة.', fileReadOk: 'تم تحميل الملف — يمكنك تعديل النص أدناه.', fileReading: 'جارٍ قراءة الملف...', freeLoginGateMsg: 'لقد استخدمت توليدك المجاني المجهول. سجّل الدخول أو أنشئ حسابًا (مجانًا) لفتح توليدين مجانيين إضافيين مرتبطين بحسابك.', freeLoginGateTitle: 'أنشئ حسابًا للاستمرار مجانًا', generatePublicLinkButton: 'إنشاء رابط عام', generatingImageError: 'تعذر إنشاء الصورة.', generatingImageLabel: 'لحظة من فضلك...', generatingLinkError: 'تعذر إنشاء الرابط العام.', generatingLinkLabel: 'لحظة من فضلك...', issuedByLabel: 'صادر عن', labelLevel: 'مستواك الحالي', labelMaterial: 'ملاحظاتك أو مسودتك أو النص الأصلي', labelUploadFile: 'أو ارفع ملفًا (.pdf، .txt)', labelVertical: 'مجالك', levelAdvanced: 'متقدم', levelBeginner: 'مبتدئ', levelIntermediate: 'متوسط', mensileFeature1: '15 عملية توليد "كاملة" مشمولة شهريًا', mensileFeature2: 'المزيد متاح كشراء فردي', mensileFeature3: 'أدر أو ألغِ في أي وقت', modeMaterialBtn: '📄 الصق محتواك', modeTopicBtn: '✏️ صف موضوعًا', moreDetailsHint: 'يختار الذكاء الاصطناعي بالفعل نبرة وهدفًا مناسبين من تلقاء نفسه — خصص فقط إذا أردت مزيدًا من التحكم.', perMonthLabel: '/شهريًا', phAudiencePro: 'مثال: محترفون يريدون تحسين مبيعاتهم، شركات، مستقلون', phMaterial: 'الصق ملاحظات أو مسودة أو نص درس سبق أن كتبته... سيحوله الذكاء الاصطناعي إلى دورة منظمة.', planMensileName: 'خطة المبدع', planMensileTagline: '15 دورة كاملة شهريًا، لمن ينشئ المحتوى بانتظام', priceMensileValue: '€19.90', publicLinkReadyLabel: 'الرابط العام جاهز — انسخه:', quizScoreLabel: 'في الاختبار', quotaEsgotataMsg: 'يمكنك شراء دورة واحدة الآن، أو الانتظار حتى تجديد الدورة القادمة.', quotaEsgotataTitle: 'لقد استخدمت جميع عمليات التوليد لهذا الشهر', quotaRenewsOn: 'يتجدد في {date}.', regenerateErrorLabel: 'حدث خطأ، حاول مرة أخرى', regenerateModuleBtn: 'إعادة الإنشاء', regenerateModuleTip: 'أعد إنشاء هذه الوحدة فقط بالذكاء الاصطناعي، دون التأثير على البقية', regeneratingLabel: 'لحظة من فضلك...', shareAsImageButton: 'مشاركة كصورة', showcaseFromLabel: 'ابتداءً من', socialPostCourseCredit: 'الدورة الكاملة: ', structurePreviewEyebrow: 'الهيكل المقترح', structureStreamLabel: 'الذكاء الاصطناعي يفكر في هيكل الدورة…', subscriptionActivatedMsg: 'تم تفعيل الاشتراك! يمكنك الآن إنشاء دوراتك.', translateDoneLabel: 'تم!', translateError: 'خطأ في الترجمة إلى', translateMaxLangs: 'يمكنك اختيار حتى 3 لغات في المرة الواحدة.', translateOriginalLabel: 'النسخة الأصلية', translateTabsLabel: 'النسخ:', translateToggleLabel: 'إنشاء أيضًا بلغات أخرى', translatingLabel: 'جارٍ الترجمة:', usedThisMonthLabel: 'المستخدمة هذا الشهر', verifiedBadgeLabel: 'شهادة موثقة', verticalBusiness: 'الأعمال والاستشارات', verticalCoaching: 'التدريب (كوتشينج)', verticalFitness: 'اللياقة البدنية (مدربون شخصيون)', verticalGeneric: 'عام', verticalSalute: 'الصحة والعافية (معالجون، مدربو عافية)', },
  ru: {
    langNameForPrompt: 'Russian',
    titleMain: 'То, что вы знаете', titleEm: 'становится курсом', titleEnd: 'за минуту',
    sub: 'Введите всего одну тему. За секунды вы получите модули, уроки и тест — бесплатно для начала, с усилением ИИ, когда будете готовы продавать.', heroCtaButton: 'Попробовать бесплатно ↓', sampleLabel: 'ВОТ РЕАЛЬНЫЙ ПРИМЕР', sampleCta: 'Создайте свой бесплатно →', sampleCaption: 'Один пример из бесконечного множества тем — меняется каждые 10 секунд',
    labelTopic: 'Тема курса', phTopic: 'Например: городское садоводство, маркетинг для малого бизнеса, гитара для начинающих, история искусства',
    labelAudience: 'Для кого курс', phAudience: 'Например: любой, кому интересно начать, родители, студенты, увлечённые люди',
    labelGoal: 'Что должен уметь ученик по завершении', phGoal: 'Например: оценить недвижимость и эффективно представить её покупателю',
    labelModules: 'Количество модулей', labelTone: 'Тон',
    tonePratico: 'Практичный', toneAutorevole: 'Авторитетный', toneAmichevole: 'Дружелюбный',
    labelLength: 'Длина контента', lengthSintetico: 'Краткий (только структура)', lengthCompleto: 'Полное обучение (развёрнутый текст на урок)',
    labelTier: 'Уровень', tierFreeName: 'Бесплатно', tierFreeDesc: 'векторные иллюстрации',
    tierPremiumName: 'Премиум', tierPremiumDesc: 'изображения, созданные ИИ',
    btnGenerate: 'Создать курс', btnGenerating: 'Создание…', btnRedirecting: 'Перенаправление к оплате…', btnGeneratingPremium: 'Создание (с изображениями)…',
    hintGeneral: 'Сгенерированный текст — это отправная точка: проверьте и персонализируйте его перед тем, как поделиться им.',
    hintPro: 'Сгенерированный текст — это отправная точка: проверьте и персонализируйте его перед продажей клиентам.',
    labelUsage: 'Для чего этот курс', usageGeneral: 'Для себя или как хобби', usagePro: 'Буду продавать его профессионально',
    btnPreviewPro: 'Создать бесплатный превью', btnUnlockCompleto: 'Открыть полное обучение (3,49 €)', btnUnlockPro: 'Открыть полный курс (4,99 €)',
    previewLabel: 'Бесплатный превью — Модуль 1', previewLockedNote: 'Остальные модули и изображения открываются после оплаты.', errorPreviewPrefix: 'Не удалось создать превью: ',
    salesKitLabel: 'Комплект продаж', salesPitchLabel: 'Продающий текст', priceLabel: 'Рекомендуемый диапазон цен', faqLabel: 'Часто задаваемые вопросы', deliveryTipLabel: 'Совет по проведению урока',
    priceFreeValue: 'Бесплатно', priceCompletoValue: '3,49 €', priceProValue: '4,99 €',
    planCardsTitle: 'Выберите свой план', planCardsSub: 'Вот что именно меняется от одного пакета к другому.', trustSecure: 'Безопасная оплата через Stripe', trustNoSub: 'Без скрытой подписки', trustRefund: 'Возврат при технической ошибке',
    labelPlanPicker: 'Выберите свой план', pillFreeName: 'Бесплатно', pillCompletoName: 'Полный', pillProName: 'Про',
    currencyNote: 'Пересчитанные цены являются приблизительными. Окончательное списание обрабатывается Stripe в евро или в вашей местной валюте.',
    sidebarProfile: 'Профиль', sidebarNotLoggedIn: 'Вы не вошли в систему.', btnLoginSignup: 'Войти или зарегистрироваться',
    sidebarMyCourses: 'Мои курсы', sidebarLoginToSee: 'Войдите, чтобы увидеть купленные курсы.', sidebarNoCourses: 'Вы ещё не купили ни одного курса.',
    sidebarSettings: 'Настройки', sidebarSettingsHint: 'Язык и другие настройки находятся вверху главной страницы.',
    authTitle: 'Войдите или создайте аккаунт', authIntro: 'Сохраняйте купленные курсы и находите их в любое время.',
    authEmailLabel: 'Email', authPasswordLabel: 'Пароль', btnLogin: 'Войти', btnSignup: 'Создать аккаунт', btnLogout: 'Выйти',
    showcaseBusiness: 'Бизнес', showcaseCreative: 'Творчество', showcaseWellness: 'Благополучие', showcaseTech: 'Технологии', showcaseFood: 'Кулинария',
    btnStartQuiz: 'Пройти итоговый тест', quizFinalLabel: 'Итоговый тест', certNameLabel: 'Ваше имя (для сертификата)', certNamePlaceholder: 'Иван Иванов',
    btnSubmitQuiz: 'Отправить ответы', certNameRequired: 'Введите имя, чтобы получить сертификат.',
    quizFailMessage: 'Повторите модули и попробуйте снова: некоторые ответы не соответствуют ключевым понятиям.',
    certLabel: 'Сертификат о прохождении', certBodyText: 'успешно завершил(а) курс', printCertLabel: 'Скачать сертификат',
    certIssuedTo: 'Настоящий сертификат выдан', certModulesLabel: 'модулей · полное обучение',
    faqTitle: 'Часто задаваемые вопросы',
    faq1Q: 'Бесплатный план действительно бесплатный?', faq1A: 'Да. Краткий план не требует банковской карты и остаётся бесплатным навсегда — это не пробный период.',
    faq2Q: 'Как работает оплата? Это безопасно?', faq2A: 'Платежи полностью обрабатываются Stripe. Мы никогда не видим и не храним данные вашей карты.',
    faq3Q: 'Могу ли я получить возврат средств?', faq3A: 'Как правило, нет, так как контент предоставляется сразу после оплаты. Мы возвращаем средства при технической ошибке или повторном списании — см. нашу политику возврата.',
    faq4Q: 'Является ли сертификат официальным документом?', faq4A: 'Нет. Это неофициальная запись о прохождении теста в приложении, а не сертификация, признанная каким-либо учреждением.',
    faq5Q: 'На каких языках работает Corsificio?', faq5A: 'На 10 языках: итальянском, английском, испанском, французском, немецком, португальском, китайском, японском, арабском и русском.',
    footerRights: 'Все права защищены.', footerContact: 'Контакты', footerPrivacy: 'Конфиденциальность', footerTerms: 'Условия', footerRefund: 'Возврат средств',
    cookieText: 'Мы используем только куки, необходимые для входа и оплаты — без рекламного отслеживания.', cookieAccept: 'Понятно', editableHint: 'Нажмите на любой текст, чтобы отредактировать его напрямую.', shareLabel: 'Поделиться:', shareCopyLink: 'Скопировать ссылку', shareText: 'Я только что создал(а) курс «{title}» с помощью Corsificio —', newsletterTitle: 'Будьте в курсе', newsletterSub: 'Новости о курсах и планах, без спама. Отписаться можно в любой момент.', newsletterPlaceholder: 'you@example.com', newsletterButton: 'Подписаться', newsletterSuccess: 'Подписка подтверждена, спасибо!', newsletterInvalid: 'Введите действительный email.', referralLabel: 'Пригласить друга', referralText: 'Поделитесь этим кодом: тот, кто им воспользуется, получит скидку.', referralCopyHint: '(нажмите, чтобы скопировать)', referralCopied: 'Скопировано!', showcaseExamplesIntro: 'Выберите идею, чтобы начать сразу, или напишите свою.', exBusiness1: 'Маркетинговый план для малого бизнеса', exBusiness2: 'Основы переговоров', exBusiness3: 'Бухгалтерия для предпринимателей', exBusiness4: 'Как запустить продукт на рынок', exCreative1: 'Рисование и скетчинг для начинающих', exCreative2: 'Творческое письмо: с чего начать', exCreative3: 'Фотография на смартфон', exCreative4: 'Основы графического дизайна', exWellness1: 'Медитация для начинающих', exWellness2: 'Йога дома', exWellness3: 'Осознанное питание', exWellness4: 'Управление повседневным стрессом', exTech1: 'Введение в программирование', exTech2: 'ИИ для начинающих', exTech3: 'Основы кибербезопасности', exTech4: 'Создайте свой первый сайт', exFood1: 'Домашняя паста с нуля', exFood2: 'Выпечка хлеба для начинающих', exFood3: 'Быстрая вегетарианская кухня', exFood4: 'Базовые техники кондитерского дела',
    planFreeName: 'Краткий', planFreeTagline: 'Первый курс бесплатно, без карты', planFreeFeatures: ['1 бесплатный курс, затем ещё 2 при создании аккаунта', 'Структура курса за секунды', 'Без изображений, без комплекта продаж'],
    planCompletoName: 'Полный', planCompletoTagline: 'Настоящий скачок качества: полноценные уроки, а не просто план', planCompletoFeatures: ['До 5 раз больше контента на модуль (700+ слов)', 'Уникальное изображение ИИ для каждого модуля', 'Разовый платёж — навсегда ваш'],
    planProName: 'Профессиональный', planProTagline: 'Всё включено, готово для обучения или продажи',
    planProBadge: 'Рекомендуется для продажи', planProFeatures: ['Развёрнутый текст и изображения ИИ, как в плане Полный', 'Практические советы по каждому модулю', 'Готовый комплект продаж: текст, цена, FAQ', 'Бесплатно попробуйте Модуль 1 перед решением'],
    aboutTitle: 'Кто мы', aboutIntro: 'Corsificio — небольшой независимый инструмент, созданный, чтобы сделать создание курсов быстрым, честным и доступным для всех.',
    aboutWhatTitle: 'Что мы делаем', aboutWhatText: 'Мы используем ИИ, чтобы за минуты превратить одну тему в структурированный мини-курс: модули, уроки, тесты, а для профессионалов — готовый комплект продаж.',
    aboutGoalTitle: 'Наша цель', aboutGoalText: 'Сократить расстояние между тем, что вы знаете, и курсом, который вы действительно можете преподавать или продавать — будь вы профессионал или просто любопытный человек.',
    aboutValuesTitle: 'Во что мы верим', aboutValuesText: 'Прозрачные цены без скрытых платежей, настоящий бесплатный план, который остаётся бесплатным, и контент, который вы проверяете и делаете своим, прежде чем поделиться с кем-либо.',
    moreDetailsToggle: '+ Настроить (модули, тон, цель)', printButton: 'Скачать PDF',
    exampleChips: ['Йога', 'Маркетинг', 'Гитара', 'Итальянская кухня', 'Фотография'],
    loadingMessages: ['Структурируем курс…', 'Пишем модули…', 'Дорабатываем детали…'],
    emptyState: 'Заполните поля слева и нажмите "Создать курс". Здесь появится полная структура, модуль за модулем.',
    errorFillFields: 'Укажите хотя бы тему и аудиторию курса.', errorNetworkFriendly: 'Не удаётся связаться с сервером. Проверьте соединение и попробуйте снова через некоторое время.',
    courseGeneratedLabel: 'Сгенерированный мини-курс', premiumSuffix: ' — Премиум', modulePrefix: 'Модуль', quizLabel: 'Проверка знаний',
    copyButton: 'Копировать как текст', copiedButton: 'Скопировано ✓', retryButton: 'ПОВТОРИТЬ',
    errorPrefix: 'Не удалось создать курс: ', errorPaymentStartPrefix: 'Не удалось начать оплату: ', errorPremiumPrefix: 'Не удалось создать премиум-курс: ',
    paymentCancelled: 'Оплата отменена. Списание не производилось.', paymentLostPrompt: 'Оплата прошла успешно, но мы не можем найти данные курса для генерации (это может произойти, если хранилище браузера было очищено). Напишите нам с этим кодом, и мы разблокируем его для вас.', btnForgotPassword: 'Забыли пароль?', forgotPasswordNeedEmail: 'Введите email выше и нажмите ещё раз.', forgotPasswordSent: 'Мы отправили вам email для сброса пароля.', newsletterUnavailable: 'Сервис временно недоступен. Попробуйте позже.', rotatorPhrases: ['От идеи до курса за минуту', 'То, что вы знаете, заслуживает быть преподанным', 'Технический опыт не требуется', 'Бесплатный старт, без карты'], statLanguages: 'доступных языков', statSeconds: 'секунд на структуру', statFromPrice: 'бесплатный курс, без аккаунта', statCertificate: 'сертификат включён', statLanguagesTip: 'Итальянский, английский, испанский, французский, немецкий, португальский, китайский, японский, арабский, русский', statSecondsTip: 'Среднее время для генерации полной структуры курса', statFromPriceTip: 'Затем переход на план Полный от €3,49', statCertificateTip: 'После прохождения финального теста курса', freeLimitTitle: 'Вы использовали бесплатные курсы', freeLimitMsg: 'Вы создали все 3 доступных бесплатных курса. Перейдите на план Полный, чтобы продолжить создавать курсы.', btnUpgradeNow: 'Перейти на план Полный', freeRemainingLabel: 'Осталось {n} бесплатных курсов',
  btnApproveStructure: 'Сгенерировать полный курс', btnBuySingleInstead: 'Купить один курс', btnManageSubscription: 'Управление подпиской', btnRestartStructure: 'Изменить тему', btnSubscribeMonthly: 'Подписаться', btnTranslateNow: 'Перевести', certDisclaimer: 'Неофициальная запись о прохождении, созданная Corsificio — не является официальным дипломом или сертификатом, признанным каким-либо учреждением.', certMethodLabel: 'Метод, которому следует каждый модуль', certMethodSteps: ['Зацепка', 'Концепция', 'Пошагово', 'Пример', 'Задание'], certShareText: 'Я только что завершил курс "{title}" на Corsificio —', chatAskAudience: 'Отлично. А для кого этот курс?', chatAskPlan: 'Хорошо, этого пока достаточно. Какой уровень курса вам нужен?', chatAskTopic: 'О чём вы знаете достаточно, чтобы преподавать это?', compareCaption: 'Один и тот же вопрос, одно и то же время генерации. Разница — в методе, а не в удаче.', compareCorsificioLabel: 'Модуль, созданный Corsificio', compareCorsificioText: '"22:00, а мысли всё ещё о завтрашних письмах — знакомо? Проблема не в силе воли, а в том, что у вас пока нет метода. Вот техника 4-7-8: вдох на 4 счёта, задержка на 7, выдох на 8. Попробуйте прямо сейчас, прежде чем читать дальше. Задание: делайте это 3 ночи подряд и наблюдайте, что изменится."', compareEyebrow: 'Убедитесь в разнице сами', compareGenericLabel: 'Любой запрос обычному ИИ', compareGenericText: '"У медитации много преимуществ. Она помогает снизить стресс и улучшить концентрацию. Вот несколько шагов: дышите глубоко, найдите тихое место, практикуйтесь регулярно."', copyModuleSocialBtn: 'Для соцсетей', copyModuleSocialTip: 'Скопировать этот модуль в кратком формате для соцсетей', diff1Body: 'Каждый курс следует фиксированному методу из 5 частей — зацепка, концепция, пошагово, пример, задание — а не просто конспекту. Именно поэтому обычные курсы перестали продаваться.', diff1Title: 'Никогда не шаблонно', diff2Body: 'Мы не скрываем, что это ИИ — мы показываем вам точную педагогическую структуру, которой следует каждый модуль, и её можно проверить перед покупкой. Доверие строится через прозрачность метода, а не его сокрытие.', diff2Title: 'Прозрачный метод', diff3Body: 'Индикатор прогресса, тест по каждому модулю, итоговый сертификат — главная причина, по которой люди бросают курсы, — не видеть, как далеко они продвинулись.', diff3Title: 'Видимый прогресс', diff4Body: 'Бесплатный предпросмотр модуля 1 перед оплатой, безопасная оплата в один клик через Stripe. 73% пользователей уходят из-за сложностей с оплатой — мы их устранили.', diff4Title: 'Ноль препятствий', diff5Body: 'Мы не обещаем невозможных результатов. Мы обещаем хорошо структурированный курс по вашей теме за секунды, а не недели — и всё.', diff5Title: 'Честное обещание', diffEyebrow: 'Почему Corsificio отличается', errorFillMaterial: 'Вставьте хотя бы несколько строк материала (минимум 40 символов).', fileReadError: 'Не удалось прочитать файл. Попробуйте вставить текст напрямую.', fileReadOk: 'Файл загружен — вы можете отредактировать текст ниже.', fileReading: 'Чтение файла...', freeLoginGateMsg: 'Вы использовали бесплатную анонимную генерацию. Войдите или зарегистрируйтесь (бесплатно), чтобы разблокировать ещё 2 бесплатные генерации, привязанные к вашему аккаунту.', freeLoginGateTitle: 'Создайте аккаунт, чтобы продолжить бесплатно', generatePublicLinkButton: 'Создать публичную ссылку', generatingImageError: 'Не удалось создать изображение.', generatingImageLabel: 'Один момент...', generatingLinkError: 'Не удалось создать публичную ссылку.', generatingLinkLabel: 'Один момент...', issuedByLabel: 'Выдано', labelLevel: 'Ваш начальный уровень', labelMaterial: 'Ваши заметки, черновик или исходный текст', labelUploadFile: 'Или загрузите файл (.pdf, .txt)', labelVertical: 'Ваша сфера', levelAdvanced: 'Продвинутый', levelBeginner: 'Начинающий', levelIntermediate: 'Средний', mensileFeature1: '15 генераций "Complete" включены каждый месяц', mensileFeature2: 'Дополнительные доступны как разовая покупка', mensileFeature3: 'Управляйте или отмените в любой момент', modeMaterialBtn: '📄 Вставить свой материал', modeTopicBtn: '✏️ Описать тему', moreDetailsHint: 'ИИ уже сам выбирает разумный тон и цель — настраивайте только если хотите больше контроля.', perMonthLabel: '/месяц', phAudiencePro: 'Например: специалисты, желающие увеличить продажи, компании, фрилансеры', phMaterial: 'Вставьте заметки, черновик или текст уже проведённого урока... ИИ превратит это в структурированный курс.', planMensileName: 'Тариф Creator', planMensileTagline: '15 полных курсов в месяц для тех, кто создаёт контент регулярно', priceMensileValue: '€19,90', publicLinkReadyLabel: 'Публичная ссылка готова — скопируйте её:', quizScoreLabel: 'по тесту', quotaEsgotataMsg: 'Вы можете купить отдельный курс сейчас или подождать обновления следующего цикла.', quotaEsgotataTitle: 'Вы использовали все генерации за этот месяц', quotaRenewsOn: 'Обновится {date}.', regenerateErrorLabel: 'Ошибка, попробуйте снова', regenerateModuleBtn: 'Пересоздать', regenerateModuleTip: 'Пересоздать только этот модуль с помощью ИИ, не затрагивая остальные', regeneratingLabel: 'Один момент...', shareAsImageButton: 'Поделиться как изображением', showcaseFromLabel: 'От', socialPostCourseCredit: 'Полный курс: ', structurePreviewEyebrow: 'Предложенная структура', structureStreamLabel: 'ИИ продумывает структуру курса…', subscriptionActivatedMsg: 'Подписка активирована! Теперь вы можете генерировать свои курсы.', translateDoneLabel: 'Готово!', translateError: 'Ошибка перевода на', translateMaxLangs: 'Вы можете выбрать до 3 языков одновременно.', translateOriginalLabel: 'Оригинал', translateTabsLabel: 'Версии:', translateToggleLabel: 'Также сгенерировать на других языках', translatingLabel: 'Перевод:', usedThisMonthLabel: 'использовано в этом месяце', verifiedBadgeLabel: 'Проверенный сертификат', verticalBusiness: 'Бизнес и консалтинг', verticalCoaching: 'Коучинг', verticalFitness: 'Фитнес (персональные тренеры)', verticalGeneric: 'Общее', verticalSalute: 'Здоровье и благополучие (терапевты, велнес-коучи)', }
};

let currentLang = 'it';

function applyLanguage(lang){
  currentLang = I18N[lang] ? lang : 'it';
  const t = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  updateHintText();
  populateExampleChips();
  renderAboutSection();
  renderShowcase();
  renderStatsStrip();
  renderSamplePreview(true);
  startHeroRotator();
  renderFAQ();
  renderNewsletter();
  renderReferral();
  renderFooter();
  updateCookieBanner();
  updateFreeUsageIndicator();
}

function renderAboutSection(){
  const t = I18N[currentLang];
  const container = document.getElementById('about-section');
  if (!container) return;

  let html = '';
  html += '<div class="about-title">' + escapeHtml(t.aboutTitle) + '</div>';
  html += '<p class="about-intro">' + escapeHtml(t.aboutIntro) + '</p>';
  html += '<div class="about-grid">';
  html += '<div class="about-block"><div class="about-block-num">01</div><h4>' + escapeHtml(t.aboutWhatTitle) + '</h4><p>' + escapeHtml(t.aboutWhatText) + '</p></div>';
  html += '<div class="about-block"><div class="about-block-num">02</div><h4>' + escapeHtml(t.aboutGoalTitle) + '</h4><p>' + escapeHtml(t.aboutGoalText) + '</p></div>';
  html += '<div class="about-block"><div class="about-block-num">03</div><h4>' + escapeHtml(t.aboutValuesTitle) + '</h4><p>' + escapeHtml(t.aboutValuesText) + '</p></div>';
  html += '</div>';

  container.innerHTML = html;
}

function renderFAQ(){
  const t = I18N[currentLang];
  const container = document.getElementById('faq-section');
  if (!container) return;

  const items = [
    [t.faq1Q, t.faq1A], [t.faq2Q, t.faq2A], [t.faq3Q, t.faq3A], [t.faq4Q, t.faq4A], [t.faq5Q, t.faq5A]
  ];
  let html = '<div class="about-title">' + escapeHtml(t.faqTitle) + '</div>';
  html += '<div class="faq-list">';
  items.forEach(([q, a], i) => {
    html += '<div class="faq-entry" data-open="false">';
    html += '<button class="faq-entry-q" onclick="toggleFaq(' + i + ')"><span>' + escapeHtml(q) + '</span><span class="faq-caret" id="faq-caret-' + i + '">＋</span></button>';
    html += '<div class="faq-entry-a" id="faq-answer-' + i + '" style="max-height:0;">' + escapeHtml(a) + '</div>';
    html += '</div>';
  });
  html += '</div>';
  container.innerHTML = html;
}

function toggleFaq(i){
  const answer = document.getElementById('faq-answer-' + i);
  const caret = document.getElementById('faq-caret-' + i);
  const entry = answer.closest('.faq-entry');
  const isOpen = entry.getAttribute('data-open') === 'true';
  if (isOpen) {
    answer.style.maxHeight = '0';
    entry.setAttribute('data-open', 'false');
    caret.textContent = '＋';
  } else {
    answer.style.maxHeight = answer.scrollHeight + 'px';
    entry.setAttribute('data-open', 'true');
    caret.textContent = '－';
  }
}

// Codice sconto condiviso da mostrare agli utenti per invitare amici.
// Per farlo funzionare davvero, crea un coupon con questo stesso nome nella dashboard Stripe
// (Prodotti → Coupon) e applicalo manualmente, oppure collegalo al Checkout se vuoi automatizzarlo.
const REFERRAL_CODE = 'CORSIAMICI10';

function renderReferral(){
  const t = I18N[currentLang];
  const container = document.getElementById('sidebar-referral');
  if (!container) return;
  let html = '<div class="sidebar-label">' + escapeHtml(t.referralLabel) + '</div>';
  html += '<p class="sidebar-note">' + escapeHtml(t.referralText) + '</p>';
  html += '<div class="referral-code" onclick="copyReferralCode()">' + REFERRAL_CODE + ' <span class="referral-copy-hint">' + escapeHtml(t.referralCopyHint) + '</span></div>';
  container.innerHTML = html;
}

function copyReferralCode(){
  navigator.clipboard.writeText(REFERRAL_CODE);
  const el = document.querySelector('.referral-copy-hint');
  const t = I18N[currentLang];
  if (el) { const orig = el.textContent; el.textContent = t.referralCopied; setTimeout(() => el.textContent = orig, 1400); }
}

function renderNewsletter(){
  const t = I18N[currentLang];
  const container = document.getElementById('newsletter-section');
  if (!container) return;
  let html = '<div class="newsletter-title">' + escapeHtml(t.newsletterTitle) + '</div>';
  html += '<p class="newsletter-sub">' + escapeHtml(t.newsletterSub) + '</p>';
  html += '<div class="newsletter-form">';
  html += '<input type="email" id="newsletter-email" placeholder="' + escapeHtml(t.newsletterPlaceholder) + '" autocomplete="email">';
  html += '<button class="btn-generate" style="width:auto; margin-top:0;" onclick="subscribeNewsletter()">' + escapeHtml(t.newsletterButton) + '</button>';
  html += '</div>';
  html += '<div id="newsletter-message" class="newsletter-message"></div>';
  container.innerHTML = html;
}

async function subscribeNewsletter(){
  const t = I18N[currentLang];
  const input = document.getElementById('newsletter-email');
  const msgEl = document.getElementById('newsletter-message');
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    msgEl.textContent = t.newsletterInvalid;
    msgEl.className = 'newsletter-message error';
    return;
  }
  if (!supabaseClient) {
    msgEl.textContent = t.newsletterUnavailable;
    msgEl.className = 'newsletter-message error';
    return;
  }
  try {
    const { error } = await supabaseClient.from('newsletter_subscribers').insert({ email });
    if (error) throw error;
    msgEl.textContent = t.newsletterSuccess;
    msgEl.className = 'newsletter-message success';
    input.value = '';
  } catch (e) {
    console.error('Iscrizione newsletter non riuscita:', e);
    msgEl.textContent = t.newsletterUnavailable;
    msgEl.className = 'newsletter-message error';
  }
}

function renderFooter(){
  const t = I18N[currentLang];
  const container = document.getElementById('site-footer');
  if (!container) return;

  let html = '<div class="footer-seal"><div class="seal-3d" style="width:20px;height:20px;"><div class="sq sq1"></div><div class="sq sq2"></div><div class="sq sq3"></div></div></div>';
  html += '<div class="footer-links">';
  html += '<a href="mailto:supporto@corsificio.com">' + escapeHtml(t.footerContact) + '</a>';
  html += '<a href="#" onclick="openLegalModal(\'privacy\'); return false;">' + escapeHtml(t.footerPrivacy) + '</a>';
  html += '<a href="#" onclick="openLegalModal(\'terms\'); return false;">' + escapeHtml(t.footerTerms) + '</a>';
  html += '<a href="#" onclick="openLegalModal(\'refund\'); return false;">' + escapeHtml(t.footerRefund) + '</a>';
  html += '</div>';
  html += '<div class="footer-rights">Corsificio — © ' + new Date().getFullYear() + '. ' + escapeHtml(t.footerRights) + '</div>';
  container.innerHTML = html;
}

function updateCookieBanner(){
  const t = I18N[currentLang];
  const textEl = document.getElementById('cookie-text');
  const btnEl = document.getElementById('cookie-accept');
  if (textEl) textEl.textContent = t.cookieText;
  if (btnEl) btnEl.textContent = t.cookieAccept;
  const banner = document.getElementById('cookie-banner');
  if (banner && !localStorage.getItem('corsificio_cookie_consent')) {
    banner.style.display = 'flex';
    requestAnimationFrame(() => {
      document.body.style.paddingBottom = banner.offsetHeight + 'px';
    });
  }
}
function acceptCookies(){
  localStorage.setItem('corsificio_cookie_consent', '1');
  const banner = document.getElementById('cookie-banner');
  if (banner) banner.style.display = 'none';
  document.body.style.paddingBottom = '';
}


// Stima del prezzo in valuta locale, solo per visualizzazione (tassi approssimativi).
// L'addebito reale avviene tramite Stripe, in EUR o nella valuta gestita da Stripe Adaptive Pricing.
const CURRENCY_RATES = { USD:1.09, GBP:0.85, BRL:6.10, JPY:171, CNY:7.85, INR:91, MXN:19.8, CAD:1.49, AUD:1.65, CHF:0.94, ARS:1450, KRW:1480 };
const REGION_CURRENCY = {
  US:'USD', GB:'GBP', BR:'BRL', JP:'JPY', CN:'CNY', IN:'INR', MX:'MXN', CA:'CAD', AU:'AUD', CH:'CHF', AR:'ARS', KR:'KRW'
};
function detectLocalCurrency(){
  try{
    const locale = navigator.language || 'it-IT';
    const parts = locale.split('-');
    const region = (parts[1] || '').toUpperCase();
    return REGION_CURRENCY[region] || null;
  }catch(e){ return null; }
}
function estimateLocalPrice(eurValue){
  const currency = detectLocalCurrency();
  if (!currency || !CURRENCY_RATES[currency]) return '';
  const converted = eurValue * CURRENCY_RATES[currency];
  try{
    const formatted = new Intl.NumberFormat(navigator.language, { style:'currency', currency, maximumFractionDigits: converted >= 100 ? 0 : 2 }).format(converted);
    return ' (~' + formatted + ')';
  }catch(e){ return ''; }
}

// FIX PRODUTO 3: qual "balde" de preço-base mandar pro backend. Hoje só
// EUR/USD têm Price IDs próprios configurados (ver REGION_PRICE_MAP no
// server.js) — qualquer outra região cai em EUR por padrão. É simples de
// estender depois, bastando configurar mais Price IDs no backend.
function getCheckoutCurrencyBucket(){
  const currency = detectLocalCurrency();
  return currency === 'USD' ? 'USD' : 'EUR';
}

function populateExampleChips(){
  const t = I18N[currentLang];
  const container = document.getElementById('example-chips');
  if (!container || !t.exampleChips) return;
  container.innerHTML = '';
  t.exampleChips.forEach(word => {
    const chip = document.createElement('span');
    chip.className = 'example-chip';
    chip.textContent = word;
    chip.onclick = () => { document.getElementById('f-expertise').value = word; };
    container.appendChild(chip);
  });
}

function toggleMoreDetails(evt){
  evt.preventDefault();
  const block = document.getElementById('more-details-block');
  const toggle = document.getElementById('more-details-toggle');
  const hint = document.querySelector('.more-details-hint');
  const isHidden = block.style.display === 'none';
  block.style.display = isHidden ? 'block' : 'none';
  toggle.style.display = isHidden ? 'none' : 'inline-block';
  if (hint) hint.style.display = isHidden ? 'none' : 'block';
}

function selectPlan(plan){
  // FIX (auditoria de design): "Piano Creator" não é um nível de conteúdo
  // como os outros 3 — é uma assinatura de verdade. Clicar nele dispara o
  // checkout direto, sem ficar marcado como "selecionado" (senão a pessoa
  // acharia que só precisa clicar em "Genera" depois, mas na real ele já
  // redireciona pro pagamento).
  if (plan === 'creator') {
    avviaAbbonamento();
    return;
  }

  const lengthField = document.getElementById('f-length');
  const usageField = document.getElementById('f-usage');
  if (plan === 'free'){ lengthField.value = 'sintetico'; usageField.value = 'generale'; }
  else if (plan === 'completo'){ lengthField.value = 'completo'; usageField.value = 'generale'; }
  else { lengthField.value = 'completo'; usageField.value = 'professionale'; }

  // FIX: o campo "a chi si rivolge" só faz sentido pra quem vai vender/ensinar
  // pra outros (plano Professionale, que gera o kit de vendas). Pra quem só
  // quer aprender pra si (Gratis/Completo), pedir "público-alvo" cria uma
  // fricção mental estranha — trocamos por "seu nível de partida", que é a
  // pergunta que faz sentido do ponto de vista de quem está aprendendo.
  const isPro = usageField.value === 'professionale';
  document.getElementById('level-block').style.display = isPro ? 'none' : 'block';
  document.getElementById('audience-block').style.display = isPro ? 'block' : 'none';
  if (!isPro) syncAudienceFromLevel();

  document.querySelectorAll('.plan-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-plan') === plan);
  });

  const t = I18N[currentLang];
  const noteEl = document.getElementById('plan-picker-note');
  const noteKey = plan === 'free' ? 'planFreeTagline' : plan === 'completo' ? 'planCompletoTagline' : 'planProTagline';
  noteEl.setAttribute('data-i18n', noteKey);
  noteEl.textContent = t[noteKey];
  if (plan === 'free') updateFreeUsageIndicator();

  updateHintText();
  updateButtonState();
}

// Copia a opção escolhida no seletor de nível pro campo real (f-audience,
// que é o que buildPrompt() lê) — assim o resto do pipeline não muda nada.
function syncAudienceFromLevel(){
  const level = document.getElementById('f-level');
  const audience = document.getElementById('f-audience');
  if (level && audience) audience.value = level.value;
}

function updateHintText(){
  const t = I18N[currentLang];
  const usageSel = document.getElementById('f-usage');
  const hintEl = document.getElementById('hint-text');
  if (!usageSel || !hintEl) return;
  const key = usageSel.value === 'professionale' ? 'hintPro' : 'hintGeneral';
  hintEl.setAttribute('data-i18n', key);
  hintEl.textContent = t[key];
}

// Determina il flusso attivo in base a lunghezza + uso:
// - sintetico (qualsiasi uso) -> gratis
// - completo + generale -> a pagamento, sblocco diretto (senza preview)
// - completo + professionale -> preview gratuita del modulo 1, poi sblocco a pagamento
function getActiveFlow(){
  const length = document.getElementById('f-length').value;
  const usage = document.getElementById('f-usage').value;
  if (length === 'sintetico') return 'free';
  if (usage === 'professionale') return 'preview-pro';
  return 'paid-completo';
}

function updateButtonState(){
  const t = I18N[currentLang];
  const btn = document.getElementById('btn-generate');
  const flow = getActiveFlow();
  if (flow === 'free') btn.textContent = t.btnGenerate;
  else if (flow === 'paid-completo') btn.textContent = t.btnUnlockCompleto;
  else btn.textContent = t.btnPreviewPro;
}

document.addEventListener('DOMContentLoaded', () => {
  const sel = document.getElementById('f-language');
  if (sel) {
    sel.addEventListener('change', () => { applyLanguage(sel.value); updateButtonState(); });
  }
  const usageSel = document.getElementById('f-usage');
  if (usageSel) {
    usageSel.addEventListener('change', () => { updateHintText(); updateButtonState(); });
  }
  const lengthSel = document.getElementById('f-length');
  if (lengthSel) {
    lengthSel.addEventListener('change', updateButtonState);
  }
  applyLanguage('it');
  updateButtonState();
  refreshAccountUI();

  // Sincronizza le modifiche fatte a mano (contenteditable) nell'oggetto corso in memoria,
  // così copia/stampa/certificato riflettono sempre l'ultima versione modificata dall'utente.
  const outputEl = document.getElementById('output');
  if (outputEl) {
    outputEl.addEventListener('focusout', (evt) => {
      const el = evt.target;
      const field = el.getAttribute && el.getAttribute('data-editable');
      if (!field || !window.__lastCourse) return;
      const idx = el.getAttribute('data-idx');
      const value = field === 'module-content' ? el.innerText.trim() : el.textContent.trim();
      if (field === 'title') window.__lastCourse.title = value;
      else if (field === 'subtitle') window.__lastCourse.subtitle = value;
      else if (idx !== null && window.__lastCourse.modules && window.__lastCourse.modules[idx]) {
        if (field === 'module-title') window.__lastCourse.modules[idx].title = value;
        else if (field === 'module-summary') window.__lastCourse.modules[idx].summary = value;
        else if (field === 'module-content') window.__lastCourse.modules[idx].content = value;
      }
    });
  }

  // Anima le sezioni principali quando entrano nello schermo scorrendo la pagina.
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }

  // Parallax leggero: il pattern decorativo dell'hero si muove più lento dello scroll,
  // dando un senso di profondità. Disattivato per chi preferisce meno movimento.
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const heroPattern = document.getElementById('hero-pattern');
  if (heroPattern && !prefersReducedMotion) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        heroPattern.style.transform = 'translateY(' + (y * 0.18) + 'px) rotate(' + (8 + y * 0.02) + 'deg)';
        ticking = false;
      });
    }, { passive: true });
  }

  // Leggero effetto di inclinazione 3D sui box dei piani, al passaggio del mouse.
  if (!prefersReducedMotion && window.matchMedia && window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', (evt) => {
      const card = evt.target.closest('.plan-card');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const px = (evt.clientX - rect.left) / rect.width - 0.5;
      const py = (evt.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = 'perspective(600px) rotateY(' + (px * 6) + 'deg) rotateX(' + (py * -6) + 'deg) translateY(-4px)';
    });
    document.addEventListener('mouseout', (evt) => {
      const card = evt.target.closest('.plan-card');
      if (card && !card.contains(evt.relatedTarget)) card.style.transform = '';
    });
  }
});

// Lettura robusta della risposta della IA: gestisce testo extra intorno al JSON,
// blocchi ```json, campi mancanti — stessa logica testata con 10 scenari diversi.
// Converte errori tecnici di rete (es. "Failed to fetch", che appare quando il
// browser non riesce proprio a contattare il server) in un messaggio comprensibile
// per chi usa il sito. Gli errori che arrivano già dal backend con un dettaglio utile
// (es. "Richiesta non riuscita (500) — manca ANTHROPIC_API_KEY") restano invariati.
function friendlyErrorMessage(err, t){
  const raw = (err && err.message) || '';
  const isNetworkFailure = /failed to fetch|networkerror|load failed|network request failed/i.test(raw);
  if (isNetworkFailure) return t.errorNetworkFriendly || raw;
  return raw;
}

function extractCourseJSON(rawText) {
  if (!rawText || typeof rawText !== 'string') throw new Error('Risposta vuota dal modello');
  let cleaned = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();
  try { return JSON.parse(cleaned); } catch (e) { /* continua */ }
  const start = cleaned.indexOf('{');
  if (start !== -1) {
    let depth = 0;
    for (let i = start; i < cleaned.length; i++) {
      if (cleaned[i] === '{') depth++;
      if (cleaned[i] === '}') depth--;
      if (depth === 0) {
        const candidate = cleaned.slice(start, i + 1);
        try { return JSON.parse(candidate); } catch (e) { break; }
      }
    }
  }
  throw new Error('il modello non ha restituito un JSON valido');
}
function validateCourse(course) {
  const errors = [];
  if (!course || typeof course !== 'object' || Array.isArray(course)) { errors.push('formato non valido'); return errors; }
  if (!course.title) errors.push('manca il titolo');
  if (!Array.isArray(course.modules) || course.modules.length === 0) errors.push('nessun modulo generato');
  return errors;
}
function normalizeCourse(course) {
  return {
    title: course.title || 'Corso senza titolo',
    subtitle: course.subtitle || '',
    // FIX: rede de segurança — se a IA devolver por engano uma palavra da
    // vertical profissional (fitness/business/coaching) em vez de uma das 9
    // categorias válidas de cor, mapeia pra uma equivalente sensata em vez
    // de cair no tema cinza genérico.
    categoria: (() => {
      const raw = (course.categoria && typeof course.categoria === 'string') ? course.categoria.trim().toLowerCase() : 'generale';
      const VERTICAL_TO_THEME_FALLBACK = { fitness: 'sport', business: 'finanza', coaching: 'spiritualita' };
      return VERTICAL_TO_THEME_FALLBACK[raw] || raw;
    })(),
    // Fix: questi tre campi venivano richiesti al modello (vedi buildPrompt) ma non erano
    // mai riportati nell'oggetto normalizzato, quindi il sales kit spariva prima del render.
    sales_pitch: (typeof course.sales_pitch === 'string') ? course.sales_pitch : '',
    suggested_price_range: (typeof course.suggested_price_range === 'string') ? course.suggested_price_range : '',
    faq: Array.isArray(course.faq) ? course.faq.filter(f => f && f.question && f.answer) : [],
    // FIX: sugestões honestas de aprofundamento — nunca "fontes usadas",
    // só pontos de partida pra continuar estudando (ver instrução no prompt
    // contra invenção de citações específicas).
    further_reading: Array.isArray(course.further_reading) ? course.further_reading.filter(Boolean).slice(0, 4) : [],
    modules: Array.isArray(course.modules) ? course.modules.map(m => ({
      title: (m && m.title) || 'Modulo senza titolo',
      summary: (m && m.summary) || '',
      content: (m && m.content) || '',
      key_points: (m && Array.isArray(m.key_points)) ? m.key_points.filter(Boolean) : [],
      estimated_minutes: (m && Number.isFinite(m.estimated_minutes)) ? Math.min(15, Math.max(1, Math.round(m.estimated_minutes))) : null,
      quiz_question: (m && m.quiz_question) || '',
      quiz_answer: (m && m.quiz_answer) || ''
    })) : []
  };
}

const BACKEND_BASE = "https://bubbly-purpose-production-928e.up.railway.app";

// Contenuto legale disponibile solo in italiano e inglese (il resto dell'app è tradotto in 10 lingue,
// ma per testi legali una traduzione automatica rischia di introdurre errori — meglio pochi testi accurati
// che molti poco affidabili). Le altre lingue mostrano la versione inglese.
const LEGAL_CONTENT = {
  it: {
    privacyTitle: 'Informativa sulla Privacy',
    privacyBody: `<p><em>Ultimo aggiornamento: agosto 2026</em></p>
<p><strong>Chi siamo.</strong> Corsificio è un servizio che genera micro-corsi tramite intelligenza artificiale. Titolare del trattamento: Maya Marinho.</p>
<p><strong>Dati che raccogliamo.</strong> Quando generi un corso, inviamo il testo che scrivi (argomento, pubblico, obiettivo) a fornitori di intelligenza artificiale per elaborarlo. Se crei un account, raccogliamo email e password (gestite in modo sicuro da Supabase). Se acquisti un piano a pagamento, il pagamento è gestito interamente da Stripe: non vediamo né salviamo i dati della tua carta.</p>
<p><strong>Fornitori terzi coinvolti nell'elaborazione:</strong></p>
<ul>
<li>Anthropic — genera il testo del corso</li>
<li>OpenAI — genera le immagini del piano Professionale/Completo</li>
<li>Stripe — elabora i pagamenti</li>
<li>Supabase — gestisce account e corsi salvati</li>
</ul>
<p><strong>Cookie.</strong> Usiamo solo cookie strettamente necessari al funzionamento del sito (login e pagamento). Non usiamo cookie pubblicitari o di tracciamento di terze parti per profilazione.</p>
<p><strong>Conservazione.</strong> I corsi generati nel piano gratuito non vengono salvati sui nostri server. I corsi acquistati vengono salvati nel tuo account finché non richiedi la cancellazione.</p>
<p><strong>I tuoi diritti.</strong> Puoi richiedere accesso, correzione o cancellazione dei tuoi dati in qualsiasi momento scrivendo all'indirizzo di contatto qui sotto.</p>
<p><strong>Contatti:</strong> supporto@corsificio.com</p>`,

    termsTitle: 'Termini di Servizio',
    termsBody: `<p><em>Ultimo aggiornamento: agosto 2026</em></p>
<p><strong>Il servizio.</strong> Corsificio genera strutture di micro-corsi tramite intelligenza artificiale a partire da un argomento che fornisci. Il contenuto generato è un punto di partenza: sei responsabile di rivederlo, correggerlo e personalizzarlo prima di usarlo o condividerlo con altri.</p>
<p><strong>Nessuna certificazione ufficiale.</strong> Il "certificato di completamento" generato da Corsificio non è una certificazione riconosciuta da alcun ente, scuola o albo professionale. È un attestato informale di completamento del quiz all'interno dell'app.</p>
<p><strong>Account.</strong> Sei responsabile di mantenere riservate le credenziali del tuo account e di tutte le attività che avvengono con esso.</p>
<p><strong>Pagamenti.</strong> I prezzi sono indicati in euro; eventuali conversioni in altre valute mostrate nell'app sono puramente indicative. L'addebito effettivo avviene tramite Stripe.</p>
<p><strong>Proprietà del contenuto generato.</strong> Il testo e le immagini generati per te sono tuoi da usare, modificare e vendere come preferisci, nei limiti delle licenze dei fornitori di IA sottostanti.</p>
<p><strong>Limitazione di responsabilità.</strong> Il contenuto generato dall'IA può contenere imprecisioni. Corsificio non garantisce l'accuratezza, la completezza o l'idoneità del contenuto per uno scopo specifico. Non siamo responsabili per danni derivanti dall'uso del contenuto generato.</p>
<p><strong>Modifiche.</strong> Possiamo aggiornare questi termini; le modifiche sostanziali saranno comunicate tramite l'app.</p>`,

    refundTitle: 'Politica di Rimborso',
    refundBody: `<p><em>Ultimo aggiornamento: agosto 2026</em></p>
<p>I piani <strong>Completo</strong> e <strong>Professionale</strong> generano contenuto digitale consegnato immediatamente dopo il pagamento. Procedendo con l'acquisto, accetti che il servizio inizi subito e riconosci che questo può limitare il diritto di recesso previsto per gli acquisti a distanza, come consentito dalla normativa europea sui contenuti digitali.</p>
<p><strong>Quando rimborsiamo comunque:</strong></p>
<ul>
<li>Il pagamento è stato addebitato ma non hai ricevuto alcun contenuto generato (errore tecnico)</li>
<li>Addebito duplicato per lo stesso acquisto</li>
<li>Richiesta entro 7 giorni dall'acquisto, in questi casi specifici</li>
</ul>
<p>Per richiedere un rimborso in questi casi, scrivi a supporto@corsificio.com indicando la data e il piano acquistato.</p>`
  },
  en: {
    privacyTitle: 'Privacy Policy',
    privacyBody: `<p><em>Last updated: August 2026</em></p>
<p><strong>Who we are.</strong> Corsificio is a service that generates micro-courses using artificial intelligence. Data controller: Maya Marinho.</p>
<p><strong>Data we collect.</strong> When you generate a course, we send the text you write (topic, audience, goal) to AI providers for processing. If you create an account, we collect your email and password (securely managed by Supabase). If you buy a paid plan, payment is handled entirely by Stripe: we never see or store your card details.</p>
<p><strong>Third-party processors involved:</strong></p>
<ul>
<li>Anthropic — generates the course text</li>
<li>OpenAI — generates images for the Professional/Full plans</li>
<li>Stripe — processes payments</li>
<li>Supabase — manages accounts and saved courses</li>
</ul>
<p><strong>Cookies.</strong> We only use cookies strictly necessary for the site to function (login and payment). We don't use advertising or third-party tracking cookies for profiling.</p>
<p><strong>Retention.</strong> Courses generated on the free plan are not saved on our servers. Purchased courses are saved to your account until you request deletion.</p>
<p><strong>Your rights.</strong> You can request access, correction, or deletion of your data at any time by writing to the contact address below.</p>
<p><strong>Contact:</strong> supporto@corsificio.com</p>`,

    termsTitle: 'Terms of Service',
    termsBody: `<p><em>Last updated: August 2026</em></p>
<p><strong>The service.</strong> Corsificio generates micro-course structures using AI, based on a topic you provide. The generated content is a starting point: you're responsible for reviewing, correcting, and personalizing it before using or sharing it with others.</p>
<p><strong>No official certification.</strong> The "certificate of completion" generated by Corsificio is not a certification recognized by any institution, school, or professional body. It's an informal record of completing the quiz within the app.</p>
<p><strong>Accounts.</strong> You're responsible for keeping your account credentials confidential and for all activity under your account.</p>
<p><strong>Payments.</strong> Prices are listed in euros; any currency conversions shown in the app are for reference only. The actual charge is processed by Stripe.</p>
<p><strong>Ownership of generated content.</strong> The text and images generated for you are yours to use, edit, and sell as you see fit, within the limits of the underlying AI providers' licenses.</p>
<p><strong>Limitation of liability.</strong> AI-generated content may contain inaccuracies. Corsificio does not guarantee the accuracy, completeness, or fitness of the content for any particular purpose. We are not liable for damages arising from use of the generated content.</p>
<p><strong>Changes.</strong> We may update these terms; material changes will be communicated through the app.</p>`,

    refundTitle: 'Refund Policy',
    refundBody: `<p><em>Last updated: August 2026</em></p>
<p>The <strong>Full</strong> and <strong>Professional</strong> plans generate digital content delivered immediately after payment. By completing the purchase, you agree that the service begins right away, which may limit the withdrawal right normally available for distance purchases, as permitted under EU digital content rules.</p>
<p><strong>When we still refund:</strong></p>
<ul>
<li>Payment was charged but you received no generated content (technical error)</li>
<li>Duplicate charge for the same purchase</li>
<li>Request made within 7 days of purchase, in these specific cases</li>
</ul>
<p>To request a refund in these cases, write to supporto@corsificio.com with the purchase date and plan.</p>`
  },
  es: {
    privacyTitle: 'Política de Privacidad',
    privacyBody: `<p><em>Última actualización: agosto de 2026</em></p>
<p><strong>Quiénes somos.</strong> Corsificio es un servicio que genera micro-cursos mediante inteligencia artificial. Responsable del tratamiento: Maya Marinho.</p>
<p><strong>Datos que recopilamos.</strong> Cuando generas un curso, enviamos el texto que escribes (tema, público, objetivo) a proveedores de inteligencia artificial para procesarlo. Si creas una cuenta, recopilamos tu email y contraseña (gestionados de forma segura por Supabase). Si compras un plan de pago, el pago lo gestiona íntegramente Stripe: nunca vemos ni guardamos los datos de tu tarjeta.</p>
<p><strong>Proveedores externos implicados en el procesamiento:</strong></p>
<ul>
<li>Anthropic — genera el texto del curso</li>
<li>OpenAI — genera las imágenes de los planes Profesional/Completo</li>
<li>Stripe — procesa los pagos</li>
<li>Supabase — gestiona cuentas y cursos guardados</li>
</ul>
<p><strong>Cookies.</strong> Solo usamos cookies estrictamente necesarias para el funcionamiento del sitio (inicio de sesión y pago). No usamos cookies publicitarias ni de rastreo de terceros para perfilado.</p>
<p><strong>Conservación.</strong> Los cursos generados en el plan gratuito no se guardan en nuestros servidores. Los cursos comprados se guardan en tu cuenta hasta que solicites su eliminación.</p>
<p><strong>Tus derechos.</strong> Puedes solicitar acceso, corrección o eliminación de tus datos en cualquier momento escribiendo a la dirección de contacto abajo.</p>
<p><strong>Contacto:</strong> supporto@corsificio.com</p>`,

    termsTitle: 'Términos de Servicio',
    termsBody: `<p><em>Última actualización: agosto de 2026</em></p>
<p><strong>El servicio.</strong> Corsificio genera estructuras de micro-cursos mediante IA a partir de un tema que proporcionas. El contenido generado es un punto de partida: eres responsable de revisarlo, corregirlo y personalizarlo antes de usarlo o compartirlo con otros.</p>
<p><strong>Sin certificación oficial.</strong> El "certificado de finalización" generado por Corsificio no es una certificación reconocida por ninguna institución, escuela o colegio profesional. Es un registro informal de haber completado el cuestionario dentro de la app.</p>
<p><strong>Cuentas.</strong> Eres responsable de mantener la confidencialidad de las credenciales de tu cuenta y de toda actividad realizada con ella.</p>
<p><strong>Pagos.</strong> Los precios se indican en euros; cualquier conversión a otras monedas mostrada en la app es meramente orientativa. El cobro real se procesa mediante Stripe.</p>
<p><strong>Propiedad del contenido generado.</strong> El texto y las imágenes generados son tuyos para usar, modificar y vender como prefieras, dentro de los límites de las licencias de los proveedores de IA subyacentes.</p>
<p><strong>Limitación de responsabilidad.</strong> El contenido generado por IA puede contener imprecisiones. Corsificio no garantiza la exactitud, integridad o idoneidad del contenido para un propósito específico. No somos responsables de daños derivados del uso del contenido generado.</p>
<p><strong>Cambios.</strong> Podemos actualizar estos términos; los cambios sustanciales se comunicarán a través de la app.</p>`,

    refundTitle: 'Política de Reembolso',
    refundBody: `<p><em>Última actualización: agosto de 2026</em></p>
<p>Los planes <strong>Completo</strong> y <strong>Profesional</strong> generan contenido digital entregado inmediatamente tras el pago. Al completar la compra, aceptas que el servicio comience de inmediato, lo que puede limitar el derecho de desistimiento normalmente disponible en compras a distancia, según lo permitido por la normativa europea sobre contenido digital.</p>
<p><strong>Cuándo reembolsamos igualmente:</strong></p>
<ul>
<li>Se realizó el cobro pero no recibiste ningún contenido generado (error técnico)</li>
<li>Cobro duplicado por la misma compra</li>
<li>Solicitud dentro de los 7 días posteriores a la compra, en estos casos específicos</li>
</ul>
<p>Para solicitar un reembolso en estos casos, escribe a supporto@corsificio.com indicando la fecha de compra y el plan.</p>`
  },
  fr: {
    privacyTitle: 'Politique de Confidentialité',
    privacyBody: `<p><em>Dernière mise à jour : août 2026</em></p>
<p><strong>Qui sommes-nous.</strong> Corsificio est un service qui génère des micro-cours grâce à l'intelligence artificielle. Responsable du traitement : Maya Marinho.</p>
<p><strong>Données que nous collectons.</strong> Lorsque vous générez un cours, nous envoyons le texte que vous rédigez (sujet, public, objectif) à des fournisseurs d'IA pour le traiter. Si vous créez un compte, nous collectons votre email et votre mot de passe (gérés en toute sécurité par Supabase). Si vous achetez un forfait payant, le paiement est entièrement géré par Stripe : nous ne voyons ni ne stockons jamais les données de votre carte.</p>
<p><strong>Fournisseurs tiers impliqués dans le traitement :</strong></p>
<ul>
<li>Anthropic — génère le texte du cours</li>
<li>OpenAI — génère les images des forfaits Professionnel/Complet</li>
<li>Stripe — traite les paiements</li>
<li>Supabase — gère les comptes et les cours enregistrés</li>
</ul>
<p><strong>Cookies.</strong> Nous utilisons uniquement des cookies strictement nécessaires au fonctionnement du site (connexion et paiement). Nous n'utilisons pas de cookies publicitaires ou de suivi tiers à des fins de profilage.</p>
<p><strong>Conservation.</strong> Les cours générés avec le forfait gratuit ne sont pas enregistrés sur nos serveurs. Les cours achetés sont enregistrés dans votre compte jusqu'à ce que vous demandiez leur suppression.</p>
<p><strong>Vos droits.</strong> Vous pouvez demander l'accès, la correction ou la suppression de vos données à tout moment en écrivant à l'adresse de contact ci-dessous.</p>
<p><strong>Contact :</strong> supporto@corsificio.com</p>`,

    termsTitle: 'Conditions d\'Utilisation',
    termsBody: `<p><em>Dernière mise à jour : août 2026</em></p>
<p><strong>Le service.</strong> Corsificio génère des structures de micro-cours grâce à l'IA à partir d'un sujet que vous fournissez. Le contenu généré est un point de départ : vous êtes responsable de le relire, de le corriger et de le personnaliser avant de l'utiliser ou de le partager avec d'autres.</p>
<p><strong>Aucune certification officielle.</strong> Le « certificat de réussite » généré par Corsificio n'est pas une certification reconnue par un établissement, une école ou un ordre professionnel. Il s'agit d'une attestation informelle d'achèvement du quiz au sein de l'application.</p>
<p><strong>Comptes.</strong> Vous êtes responsable de la confidentialité des identifiants de votre compte et de toute activité effectuée avec celui-ci.</p>
<p><strong>Paiements.</strong> Les prix sont indiqués en euros ; toute conversion vers d'autres devises affichée dans l'application est purement indicative. Le débit réel est traité par Stripe.</p>
<p><strong>Propriété du contenu généré.</strong> Le texte et les images générés pour vous sont à vous : vous pouvez les utiliser, les modifier et les vendre comme bon vous semble, dans les limites des licences des fournisseurs d'IA sous-jacents.</p>
<p><strong>Limitation de responsabilité.</strong> Le contenu généré par IA peut contenir des inexactitudes. Corsificio ne garantit ni l'exactitude, ni l'exhaustivité, ni l'adéquation du contenu à un usage particulier. Nous ne sommes pas responsables des dommages résultant de l'utilisation du contenu généré.</p>
<p><strong>Modifications.</strong> Nous pouvons mettre à jour ces conditions ; les changements substantiels seront communiqués via l'application.</p>`,

    refundTitle: 'Politique de Remboursement',
    refundBody: `<p><em>Dernière mise à jour : août 2026</em></p>
<p>Les forfaits <strong>Complet</strong> et <strong>Professionnel</strong> génèrent un contenu numérique livré immédiatement après le paiement. En finalisant l'achat, vous acceptez que le service commence immédiatement, ce qui peut limiter le droit de rétractation normalement applicable aux achats à distance, comme le permet la réglementation européenne sur le contenu numérique.</p>
<p><strong>Quand nous remboursons quand même :</strong></p>
<ul>
<li>Le paiement a été débité mais vous n'avez reçu aucun contenu généré (erreur technique)</li>
<li>Débit en double pour le même achat</li>
<li>Demande effectuée dans les 7 jours suivant l'achat, dans ces cas précis</li>
</ul>
<p>Pour demander un remboursement dans ces cas, écrivez à supporto@corsificio.com en indiquant la date d'achat et le forfait.</p>`
  },
  de: {
    privacyTitle: 'Datenschutzerklärung',
    privacyBody: `<p><em>Letzte Aktualisierung: August 2026</em></p>
<p><strong>Wer wir sind.</strong> Corsificio ist ein Dienst, der Mikrokurse mithilfe künstlicher Intelligenz erstellt. Verantwortliche für die Datenverarbeitung: Maya Marinho.</p>
<p><strong>Daten, die wir erheben.</strong> Wenn du einen Kurs erstellst, senden wir den von dir eingegebenen Text (Thema, Zielgruppe, Ziel) zur Verarbeitung an KI-Anbieter. Wenn du ein Konto erstellst, erheben wir deine E-Mail-Adresse und dein Passwort (sicher verwaltet von Supabase). Beim Kauf eines kostenpflichtigen Plans wird die Zahlung vollständig von Stripe abgewickelt: Wir sehen oder speichern niemals deine Kartendaten.</p>
<p><strong>Beteiligte Drittanbieter bei der Verarbeitung:</strong></p>
<ul>
<li>Anthropic — erstellt den Kurstext</li>
<li>OpenAI — erstellt die Bilder für die Pläne Professionell/Vollständig</li>
<li>Stripe — verarbeitet Zahlungen</li>
<li>Supabase — verwaltet Konten und gespeicherte Kurse</li>
</ul>
<p><strong>Cookies.</strong> Wir verwenden nur Cookies, die für den Betrieb der Website unbedingt notwendig sind (Anmeldung und Zahlung). Wir verwenden keine Werbe- oder Tracking-Cookies Dritter zu Profiling-Zwecken.</p>
<p><strong>Speicherung.</strong> Im kostenlosen Plan erstellte Kurse werden nicht auf unseren Servern gespeichert. Gekaufte Kurse werden in deinem Konto gespeichert, bis du deren Löschung beantragst.</p>
<p><strong>Deine Rechte.</strong> Du kannst jederzeit Zugriff, Berichtigung oder Löschung deiner Daten beantragen, indem du an die unten stehende Kontaktadresse schreibst.</p>
<p><strong>Kontakt:</strong> supporto@corsificio.com</p>`,

    termsTitle: 'Nutzungsbedingungen',
    termsBody: `<p><em>Letzte Aktualisierung: August 2026</em></p>
<p><strong>Der Dienst.</strong> Corsificio erstellt Mikrokurs-Strukturen mithilfe von KI basierend auf einem von dir angegebenen Thema. Der generierte Inhalt ist ein Ausgangspunkt: Du bist dafür verantwortlich, ihn zu überprüfen, zu korrigieren und zu personalisieren, bevor du ihn verwendest oder mit anderen teilst.</p>
<p><strong>Keine offizielle Zertifizierung.</strong> Das von Corsificio erstellte "Abschlusszertifikat" ist keine von einer Institution, Schule oder Berufskammer anerkannte Zertifizierung. Es handelt sich um einen informellen Nachweis über den Abschluss des Quiz innerhalb der App.</p>
<p><strong>Konten.</strong> Du bist dafür verantwortlich, die Zugangsdaten deines Kontos vertraulich zu behandeln und für alle Aktivitäten, die über dein Konto erfolgen.</p>
<p><strong>Zahlungen.</strong> Preise werden in Euro angegeben; etwaige in der App angezeigte Umrechnungen in andere Währungen dienen nur zur Orientierung. Die tatsächliche Abbuchung erfolgt über Stripe.</p>
<p><strong>Eigentum an generierten Inhalten.</strong> Die für dich generierten Texte und Bilder gehören dir und dürfen von dir verwendet, bearbeitet und verkauft werden, im Rahmen der Lizenzen der zugrunde liegenden KI-Anbieter.</p>
<p><strong>Haftungsbeschränkung.</strong> KI-generierte Inhalte können Ungenauigkeiten enthalten. Corsificio garantiert nicht die Richtigkeit, Vollständigkeit oder Eignung der Inhalte für einen bestimmten Zweck. Wir haften nicht für Schäden, die aus der Nutzung der generierten Inhalte entstehen.</p>
<p><strong>Änderungen.</strong> Wir können diese Bedingungen aktualisieren; wesentliche Änderungen werden über die App mitgeteilt.</p>`,

    refundTitle: 'Rückerstattungsrichtlinie',
    refundBody: `<p><em>Letzte Aktualisierung: August 2026</em></p>
<p>Die Pläne <strong>Vollständig</strong> und <strong>Professionell</strong> erzeugen digitale Inhalte, die sofort nach der Zahlung bereitgestellt werden. Mit Abschluss des Kaufs stimmst du zu, dass der Dienst sofort beginnt, was das bei Fernabsatzverträgen normalerweise geltende Widerrufsrecht gemäß den EU-Vorschriften für digitale Inhalte einschränken kann.</p>
<p><strong>Wann wir trotzdem erstatten:</strong></p>
<ul>
<li>Die Zahlung wurde abgebucht, du hast aber keinen generierten Inhalt erhalten (technischer Fehler)</li>
<li>Doppelte Abbuchung für denselben Kauf</li>
<li>Anfrage innerhalb von 7 Tagen nach dem Kauf, in diesen spezifischen Fällen</li>
</ul>
<p>Um in diesen Fällen eine Rückerstattung zu beantragen, schreibe an supporto@corsificio.com mit Angabe des Kaufdatums und des Plans.</p>`
  },
  pt: {
    privacyTitle: 'Política de Privacidade',
    privacyBody: `<p><em>Última atualização: agosto de 2026</em></p>
<p><strong>Quem somos.</strong> Corsificio é um serviço que gera micro-cursos usando inteligência artificial. Responsável pelo tratamento: Maya Marinho.</p>
<p><strong>Dados que coletamos.</strong> Quando você gera um curso, enviamos o texto que você escreve (tema, público, objetivo) para provedores de IA processarem. Se você cria uma conta, coletamos seu email e senha (gerenciados com segurança pela Supabase). Se você compra um plano pago, o pagamento é gerenciado inteiramente pela Stripe: nunca vemos nem guardamos os dados do seu cartão.</p>
<p><strong>Fornecedores terceiros envolvidos no processamento:</strong></p>
<ul>
<li>Anthropic — gera o texto do curso</li>
<li>OpenAI — gera as imagens dos planos Profissional/Completo</li>
<li>Stripe — processa os pagamentos</li>
<li>Supabase — gerencia contas e cursos salvos</li>
</ul>
<p><strong>Cookies.</strong> Usamos apenas cookies estritamente necessários pro funcionamento do site (login e pagamento). Não usamos cookies publicitários ou de rastreamento de terceiros pra perfilamento.</p>
<p><strong>Retenção.</strong> Cursos gerados no plano gratuito não são salvos em nossos servidores. Cursos comprados ficam salvos na sua conta até você pedir a exclusão.</p>
<p><strong>Seus direitos.</strong> Você pode pedir acesso, correção ou exclusão dos seus dados a qualquer momento escrevendo pro endereço de contato abaixo.</p>
<p><strong>Contato:</strong> supporto@corsificio.com</p>`,

    termsTitle: 'Termos de Serviço',
    termsBody: `<p><em>Última atualização: agosto de 2026</em></p>
<p><strong>O serviço.</strong> Corsificio gera estruturas de micro-cursos usando IA a partir de um tema que você fornece. O conteúdo gerado é um ponto de partida: você é responsável por revisar, corrigir e personalizar antes de usar ou compartilhar com outras pessoas.</p>
<p><strong>Sem certificação oficial.</strong> O "certificado de conclusão" gerado pelo Corsificio não é uma certificação reconhecida por nenhuma instituição, escola ou órgão profissional. É um registro informal de conclusão do quiz dentro do app.</p>
<p><strong>Contas.</strong> Você é responsável por manter as credenciais da sua conta em sigilo e por toda atividade realizada com ela.</p>
<p><strong>Pagamentos.</strong> Os preços são exibidos em euros; conversões pra outras moedas mostradas no app são apenas indicativas. A cobrança real é processada pela Stripe.</p>
<p><strong>Propriedade do conteúdo gerado.</strong> O texto e as imagens gerados são seus, pra usar, editar e vender como preferir, dentro dos limites das licenças dos provedores de IA usados.</p>
<p><strong>Limitação de responsabilidade.</strong> Conteúdo gerado por IA pode conter imprecisões. Corsificio não garante a exatidão, completude ou adequação do conteúdo pra um propósito específico. Não nos responsabilizamos por danos decorrentes do uso do conteúdo gerado.</p>
<p><strong>Alterações.</strong> Podemos atualizar estes termos; mudanças relevantes serão comunicadas pelo app.</p>`,

    refundTitle: 'Política de Reembolso',
    refundBody: `<p><em>Última atualização: agosto de 2026</em></p>
<p>Os planos <strong>Completo</strong> e <strong>Profissional</strong> geram conteúdo digital entregue imediatamente após o pagamento. Ao concluir a compra, você concorda que o serviço começa na hora, o que pode limitar o direito de arrependimento normalmente disponível em compras à distância, conforme permitido pelas regras europeias de conteúdo digital.</p>
<p><strong>Quando reembolsamos mesmo assim:</strong></p>
<ul>
<li>O pagamento foi cobrado mas você não recebeu nenhum conteúdo gerado (erro técnico)</li>
<li>Cobrança duplicada pra mesma compra</li>
<li>Pedido feito em até 7 dias da compra, nesses casos específicos</li>
</ul>
<p>Pra pedir reembolso nesses casos, escreva pra supporto@corsificio.com informando a data da compra e o plano.</p>`
  },
  zh: {
    privacyTitle: '隐私政策',
    privacyBody: `<p><em>最后更新：2026年8月</em></p>
<p><strong>我们是谁。</strong> Corsificio是一项利用人工智能生成微课程的服务。数据控制者：Maya Marinho。</p>
<p><strong>我们收集的数据。</strong> 当您生成课程时，我们会将您撰写的文本（主题、受众、目标）发送给AI服务商进行处理。如果您创建账户，我们会收集您的邮箱和密码（由Supabase安全管理）。如果您购买付费方案，付款完全由Stripe处理：我们从不查看或存储您的银行卡信息。</p>
<p><strong>参与处理的第三方服务商：</strong></p>
<ul>
<li>Anthropic — 生成课程文本</li>
<li>OpenAI — 为专业版/完整版方案生成图片</li>
<li>Stripe — 处理付款</li>
<li>Supabase — 管理账户与已保存课程</li>
</ul>
<p><strong>Cookie。</strong> 我们仅使用网站运行严格必需的Cookie（登录和付款）。我们不使用广告或第三方追踪Cookie进行用户画像分析。</p>
<p><strong>数据保留。</strong> 免费方案生成的课程不会保存在我们的服务器上。已购买的课程会保存在您的账户中，直到您申请删除。</p>
<p><strong>您的权利。</strong> 您可以随时通过下方联系地址申请访问、更正或删除您的数据。</p>
<p><strong>联系方式：</strong> supporto@corsificio.com</p>`,

    termsTitle: '服务条款',
    termsBody: `<p><em>最后更新：2026年8月</em></p>
<p><strong>本服务。</strong> Corsificio根据您提供的主题，利用AI生成微课程结构。生成的内容只是一个起点：您有责任在使用或与他人分享之前对其进行审核、修正和个性化处理。</p>
<p><strong>非官方认证。</strong> Corsificio生成的"结业证书"并非任何机构、学校或专业协会认可的资格证书，只是应用内测验完成情况的非正式记录。</p>
<p><strong>账户。</strong> 您有责任对账户凭证保密，并对账户下的所有活动负责。</p>
<p><strong>付款。</strong> 价格以欧元标示；应用内显示的其他货币换算仅供参考。实际扣款由Stripe处理。</p>
<p><strong>生成内容的所有权。</strong> 为您生成的文本和图片归您所有，您可以在底层AI服务商许可范围内自由使用、编辑和销售。</p>
<p><strong>责任限制。</strong> AI生成的内容可能存在不准确之处。Corsificio不保证内容的准确性、完整性或适用于特定目的。我们对因使用生成内容而产生的损害不承担责任。</p>
<p><strong>条款变更。</strong> 我们可能会更新本条款；重大变更将通过应用内通知告知。</p>`,

    refundTitle: '退款政策',
    refundBody: `<p><em>最后更新：2026年8月</em></p>
<p><strong>完整版</strong>和<strong>专业版</strong>方案生成的数字内容会在付款后立即交付。完成购买即表示您同意服务立即开始，这可能会限制远程购买通常适用的撤回权，此做法符合欧盟数字内容相关规定。</p>
<p><strong>以下情况仍可退款：</strong></p>
<ul>
<li>已扣款但未收到任何生成内容（技术故障）</li>
<li>同一笔购买被重复扣款</li>
<li>在购买后7天内提出申请，且属于上述具体情形</li>
</ul>
<p>如需在这些情况下申请退款，请发送邮件至supporto@corsificio.com，并注明购买日期和方案。</p>`
  },
  ja: {
    privacyTitle: 'プライバシーポリシー',
    privacyBody: `<p><em>最終更新日：2026年8月</em></p>
<p><strong>私たちについて。</strong> Corsificioは人工知能を使ってミニ講座を生成するサービスです。データ管理者：Maya Marinho。</p>
<p><strong>収集するデータ。</strong> 講座を生成する際、入力いただいたテキスト（テーマ、対象者、目的）をAIプロバイダーに送信し処理します。アカウントを作成すると、メールアドレスとパスワードを収集します（Supabaseにより安全に管理）。有料プランを購入すると、決済はすべてStripeが処理します：カード情報を当社が閲覧・保存することはありません。</p>
<p><strong>処理に関わる第三者プロバイダー：</strong></p>
<ul>
<li>Anthropic — 講座のテキストを生成</li>
<li>OpenAI — プロフェッショナル／完全版プランの画像を生成</li>
<li>Stripe — 決済を処理</li>
<li>Supabase — アカウントと保存済み講座を管理</li>
</ul>
<p><strong>Cookie。</strong> サイトの動作（ログインと決済）に厳密に必要なCookieのみ使用しています。広告目的や第三者によるプロファイリング用の追跡Cookieは使用していません。</p>
<p><strong>保存期間。</strong> 無料プランで生成された講座は当社サーバーに保存されません。購入済みの講座は、削除を申請するまでアカウントに保存されます。</p>
<p><strong>お客様の権利。</strong> いつでも下記の連絡先にご連絡いただくことで、データへのアクセス、訂正、削除を請求できます。</p>
<p><strong>連絡先：</strong> supporto@corsificio.com</p>`,

    termsTitle: '利用規約',
    termsBody: `<p><em>最終更新日：2026年8月</em></p>
<p><strong>サービス内容。</strong> Corsificioは、お客様が指定したテーマをもとにAIでミニ講座の構成を生成します。生成されたコンテンツはあくまで出発点であり、使用または他者と共有する前に、確認・修正・カスタマイズを行う責任はお客様にあります。</p>
<p><strong>公式認定ではありません。</strong> Corsificioが発行する「修了証」は、いかなる機関・学校・専門団体からも認定されたものではなく、アプリ内クイズの完了を示す非公式な記録です。</p>
<p><strong>アカウント。</strong> アカウントの認証情報を機密に保ち、アカウントで行われるすべての活動について責任を負うのはお客様です。</p>
<p><strong>お支払い。</strong> 価格はユーロで表示されます。アプリ内で表示される他通貨への換算は参考値です。実際の請求はStripeが処理します。</p>
<p><strong>生成コンテンツの所有権。</strong> お客様のために生成されたテキストと画像はお客様のものであり、基盤となるAIプロバイダーのライセンス範囲内で自由に使用・編集・販売いただけます。</p>
<p><strong>責任の制限。</strong> AI生成コンテンツには不正確な内容が含まれる場合があります。Corsificioはコンテンツの正確性、完全性、特定目的への適合性を保証しません。生成コンテンツの使用により生じた損害について、当社は責任を負いません。</p>
<p><strong>変更について。</strong> 本規約は更新される場合があり、重要な変更はアプリを通じてお知らせします。</p>`,

    refundTitle: '返金ポリシー',
    refundBody: `<p><em>最終更新日：2026年8月</em></p>
<p><strong>完全版</strong>および<strong>プロフェッショナル</strong>プランは、決済後すぐにデジタルコンテンツが提供されます。購入を完了することで、サービスがすぐに開始されることに同意したものとみなされ、これはEUのデジタルコンテンツ規則で認められている通り、通常の通信販売で適用されるクーリングオフの権利を制限する場合があります。</p>
<p><strong>それでも返金する場合：</strong></p>
<ul>
<li>決済されたが生成コンテンツを受け取れなかった（技術的エラー）</li>
<li>同一購入への二重請求</li>
<li>これらの特定のケースにおいて、購入から7日以内に申請があった場合</li>
</ul>
<p>これらのケースで返金を申請するには、購入日とプランを明記の上、supporto@corsificio.comまでご連絡ください。</p>`
  },
  ar: {
    privacyTitle: 'سياسة الخصوصية',
    privacyBody: `<p><em>آخر تحديث: أغسطس 2026</em></p>
<p><strong>من نحن.</strong> Corsificio هي خدمة تُنشئ دورات مصغرة باستخدام الذكاء الاصطناعي. المسؤول عن معالجة البيانات: Maya Marinho.</p>
<p><strong>البيانات التي نجمعها.</strong> عند إنشاء دورة، نرسل النص الذي تكتبه (الموضوع، الجمهور، الهدف) إلى مزوّدي الذكاء الاصطناعي لمعالجته. إذا أنشأت حسابًا، نجمع بريدك الإلكتروني وكلمة المرور (يديرها Supabase بأمان). إذا اشتريت خطة مدفوعة، تتم معالجة الدفع بالكامل عبر Stripe: لا نرى ولا نحفظ بيانات بطاقتك أبدًا.</p>
<p><strong>مزودو الخدمة الخارجيون المشاركون في المعالجة:</strong></p>
<ul>
<li>Anthropic — ينشئ نص الدورة</li>
<li>OpenAI — ينشئ صور خطتي الاحترافية/الكاملة</li>
<li>Stripe — يعالج المدفوعات</li>
<li>Supabase — يدير الحسابات والدورات المحفوظة</li>
</ul>
<p><strong>ملفات تعريف الارتباط.</strong> نستخدم فقط ملفات تعريف الارتباط الضرورية بشكل صارم لتشغيل الموقع (تسجيل الدخول والدفع). لا نستخدم ملفات تعريف ارتباط إعلانية أو تتبع من جهات خارجية لأغراض التنميط.</p>
<p><strong>الاحتفاظ بالبيانات.</strong> الدورات المُنشأة في الخطة المجانية لا تُحفظ على خوادمنا. الدورات المشتراة تُحفظ في حسابك حتى تطلب حذفها.</p>
<p><strong>حقوقك.</strong> يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها في أي وقت بالكتابة إلى عنوان الاتصال أدناه.</p>
<p><strong>التواصل:</strong> supporto@corsificio.com</p>`,

    termsTitle: 'شروط الخدمة',
    termsBody: `<p><em>آخر تحديث: أغسطس 2026</em></p>
<p><strong>الخدمة.</strong> ينشئ Corsificio هياكل دورات مصغرة باستخدام الذكاء الاصطناعي بناءً على موضوع تقدمه. المحتوى المُنشأ هو نقطة انطلاق: أنت مسؤول عن مراجعته وتصحيحه وتخصيصه قبل استخدامه أو مشاركته مع الآخرين.</p>
<p><strong>لا يوجد اعتماد رسمي.</strong> "شهادة الإتمام" التي ينشئها Corsificio ليست اعتمادًا معترفًا به من أي مؤسسة أو مدرسة أو هيئة مهنية. إنها سجل غير رسمي لإتمام الاختبار داخل التطبيق.</p>
<p><strong>الحسابات.</strong> أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك وعن جميع الأنشطة التي تتم من خلاله.</p>
<p><strong>المدفوعات.</strong> الأسعار مُدرجة باليورو؛ أي تحويلات إلى عملات أخرى تظهر في التطبيق هي لأغراض إرشادية فقط. تتم معالجة الرسوم الفعلية عبر Stripe.</p>
<p><strong>ملكية المحتوى المُنشأ.</strong> النص والصور المُنشأة لك ملك لك لاستخدامها وتعديلها وبيعها كما تشاء، ضمن حدود تراخيص مزودي الذكاء الاصطناعي الأساسيين.</p>
<p><strong>تحديد المسؤولية.</strong> قد يحتوي المحتوى المُنشأ بالذكاء الاصطناعي على معلومات غير دقيقة. لا يضمن Corsificio دقة أو اكتمال أو ملاءمة المحتوى لغرض معين. نحن غير مسؤولين عن أي أضرار ناتجة عن استخدام المحتوى المُنشأ.</p>
<p><strong>التغييرات.</strong> يجوز لنا تحديث هذه الشروط؛ وسيتم إبلاغكم بالتغييرات الجوهرية عبر التطبيق.</p>`,

    refundTitle: 'سياسة الاسترداد',
    refundBody: `<p><em>آخر تحديث: أغسطس 2026</em></p>
<p>تُنشئ خطتا <strong>الكاملة</strong> و<strong>الاحترافية</strong> محتوى رقميًا يُسلَّم فور الدفع. بإتمام عملية الشراء، فإنك توافق على أن الخدمة تبدأ فورًا، مما قد يحد من حق الانسحاب المتاح عادة في عمليات الشراء عن بُعد، وذلك وفقًا لما تسمح به قواعد الاتحاد الأوروبي بشأن المحتوى الرقمي.</p>
<p><strong>متى نسترد الأموال رغم ذلك:</strong></p>
<ul>
<li>تم خصم المبلغ لكن لم تتلقَّ أي محتوى مُنشأ (خطأ تقني)</li>
<li>خصم مكرر لنفس عملية الشراء</li>
<li>طلب مُقدَّم خلال 7 أيام من الشراء، في هذه الحالات المحددة</li>
</ul>
<p>لطلب استرداد في هذه الحالات، اكتب إلى supporto@corsificio.com مع ذكر تاريخ الشراء والخطة.</p>`
  },
  ru: {
    privacyTitle: 'Политика конфиденциальности',
    privacyBody: `<p><em>Последнее обновление: август 2026</em></p>
<p><strong>Кто мы.</strong> Corsificio — это сервис, создающий мини-курсы с помощью искусственного интеллекта. Ответственный за обработку данных: Maya Marinho.</p>
<p><strong>Какие данные мы собираем.</strong> Когда вы создаёте курс, мы отправляем введённый вами текст (тема, аудитория, цель) поставщикам ИИ для обработки. При создании аккаунта мы собираем ваш email и пароль (безопасно управляются Supabase). При покупке платного плана оплата полностью обрабатывается Stripe: мы никогда не видим и не храним данные вашей карты.</p>
<p><strong>Сторонние поставщики, участвующие в обработке:</strong></p>
<ul>
<li>Anthropic — генерирует текст курса</li>
<li>OpenAI — генерирует изображения для планов Профессиональный/Полный</li>
<li>Stripe — обрабатывает платежи</li>
<li>Supabase — управляет аккаунтами и сохранёнными курсами</li>
</ul>
<p><strong>Cookie.</strong> Мы используем только те cookie, которые строго необходимы для работы сайта (вход и оплата). Мы не используем рекламные или отслеживающие cookie третьих сторон для профилирования.</p>
<p><strong>Хранение.</strong> Курсы, созданные на бесплатном плане, не сохраняются на наших серверах. Купленные курсы сохраняются в вашем аккаунте до тех пор, пока вы не запросите их удаление.</p>
<p><strong>Ваши права.</strong> Вы можете в любой момент запросить доступ, исправление или удаление ваших данных, написав по контактному адресу ниже.</p>
<p><strong>Контакты:</strong> supporto@corsificio.com</p>`,

    termsTitle: 'Условия использования',
    termsBody: `<p><em>Последнее обновление: август 2026</em></p>
<p><strong>Сервис.</strong> Corsificio создаёт структуры мини-курсов с помощью ИИ на основе указанной вами темы. Сгенерированный контент — это отправная точка: вы несёте ответственность за его проверку, исправление и адаптацию перед использованием или передачей другим лицам.</p>
<p><strong>Не является официальной сертификацией.</strong> «Сертификат об окончании», созданный Corsificio, не является сертификацией, признанной каким-либо учебным заведением, школой или профессиональным объединением. Это неформальная запись о прохождении теста внутри приложения.</p>
<p><strong>Аккаунты.</strong> Вы несёте ответственность за сохранение конфиденциальности учётных данных вашего аккаунта и за всю активность, происходящую под ним.</p>
<p><strong>Платежи.</strong> Цены указаны в евро; любые конвертации в другие валюты, показанные в приложении, носят исключительно ориентировочный характер. Фактическое списание обрабатывается через Stripe.</p>
<p><strong>Права на сгенерированный контент.</strong> Текст и изображения, созданные для вас, принадлежат вам: вы можете использовать, редактировать и продавать их по своему усмотрению, в пределах лицензий базовых поставщиков ИИ.</p>
<p><strong>Ограничение ответственности.</strong> Контент, сгенерированный ИИ, может содержать неточности. Corsificio не гарантирует точность, полноту или пригодность контента для конкретной цели. Мы не несём ответственности за ущерб, возникший в результате использования сгенерированного контента.</p>
<p><strong>Изменения.</strong> Мы можем обновлять данные условия; о существенных изменениях будет сообщено через приложение.</p>`,

    refundTitle: 'Политика возврата средств',
    refundBody: `<p><em>Последнее обновление: август 2026</em></p>
<p>Планы <strong>Полный</strong> и <strong>Профессиональный</strong> предоставляют цифровой контент сразу после оплаты. Завершая покупку, вы соглашаетесь с тем, что услуга начинается немедленно, что может ограничивать право на отказ, обычно доступное при дистанционных покупках, как это допускается правилами ЕС о цифровом контенте.</p>
<p><strong>Когда мы всё же возвращаем средства:</strong></p>
<ul>
<li>Платёж списан, но вы не получили сгенерированный контент (техническая ошибка)</li>
<li>Повторное списание за одну и ту же покупку</li>
<li>Запрос подан в течение 7 дней с момента покупки, в этих конкретных случаях</li>
</ul>
<p>Чтобы запросить возврат средств в этих случаях, напишите на supporto@corsificio.com, указав дату покупки и план.</p>`
  }
};

function getLegalContent(){
  return LEGAL_CONTENT[currentLang] || LEGAL_CONTENT.en;
}

function openLegalModal(type){
  const legal = getLegalContent();
  const titleKey = type + 'Title';
  const bodyKey = type + 'Body';
  document.getElementById('legal-modal-title').textContent = legal[titleKey];
  document.getElementById('legal-modal-body').innerHTML = legal[bodyKey];
  document.getElementById('legal-modal-overlay').classList.add('show');
}
function closeLegalModal(evt){
  if (evt && evt.target !== evt.currentTarget) return;
  document.getElementById('legal-modal-overlay').classList.remove('show');
}


// --- Supabase (login + storico corsi acquistati) -----------------------------------
// SUPABASE_URL e SUPABASE_ANON_KEY sono pubblici per design (protetti da Row Level Security
// lato Supabase, non da segretezza). Sostituisci con i valori del tuo progetto.
const SUPABASE_URL = "https://xlttbbqsdyhhtbsgabhl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsdHRiYnFzZHloaHRic2dhYmhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3NDM0NjksImV4cCI6MjEwMTMxOTQ2OX0.RYoLCI8KG37yzOW-cmNTiId7dAVQDx8MsIz23aX9bRg";
let supabaseClient = null;
try {
  if (window.supabase && SUPABASE_URL.indexOf('TUO-PROGETTO') === -1) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    // FIX AUDITORIA: sem este listener, quem clicava no link de recuperação
    // de senha do e-mail ficava autenticado (o Supabase já faz isso
    // sozinho), mas o site nunca abria nenhuma tela pra digitar a senha
    // nova — a pessoa ficava presa, logada, sem conseguir trocar a senha.
    supabaseClient.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        openNewPasswordModal();
      }
    });
  }
} catch (e) { console.error('Supabase non inizializzato:', e); }

function openNewPasswordModal(){
  document.getElementById('new-password-modal-overlay').classList.add('show');
}
function closeNewPasswordModal(){
  document.getElementById('new-password-modal-overlay').classList.remove('show');
}
async function handleSetNewPassword(){
  const t = I18N[currentLang];
  const errBox = document.getElementById('new-password-error');
  const newPassword = document.getElementById('new-password-input').value;
  if (!newPassword || newPassword.length < 6) {
    errBox.textContent = t.newPasswordTooShort || 'La password deve avere almeno 6 caratteri.';
    errBox.style.display = 'block';
    return;
  }
  const { error } = await supabaseClient.auth.updateUser({ password: newPassword });
  if (error) {
    errBox.textContent = error.message;
    errBox.style.display = 'block';
    return;
  }
  closeNewPasswordModal();
  await refreshAccountUI();
  alert(t.newPasswordSuccess || 'Password aggiornata! Ora sei connesso con la nuova password.');
}

function openSidebar(){
  document.getElementById('sidebar').classList.add('show');
  document.getElementById('sidebar-overlay').classList.add('show');
  if (supabaseClient) loadMyCourses();
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('show');
  document.getElementById('sidebar-overlay').classList.remove('show');
}
function openAuthModal(){
  document.getElementById('auth-modal-overlay').classList.add('show');
}
function closeAuthModal(evt){
  document.getElementById('auth-modal-overlay').classList.remove('show');
  const errBox = document.getElementById('auth-error');
  errBox.style.display = 'none';
}

function showAuthError(message){
  const errBox = document.getElementById('auth-error');
  errBox.textContent = message;
  errBox.style.display = 'block';
  errBox.style.color = '';
}

async function handleSignIn(){
  if (!supabaseClient) { showAuthError('Login non configurato: manca la connessione a Supabase.'); return; }
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) { showAuthError(error.message); return; }
  closeAuthModal();
  await refreshAccountUI();
}

async function handleSignUp(){
  if (!supabaseClient) { showAuthError('Registrazione non configurata: manca la connessione a Supabase.'); return; }
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  if (!email || password.length < 6) { showAuthError('Email valida e password di almeno 6 caratteri.'); return; }
  const { data, error } = await supabaseClient.auth.signUp({ email, password });
  if (error) { showAuthError(error.message); return; }
  // BI FIX 5: registra a conversão do gate de login (só dispara se o
  // cadastro veio de alguém que tinha batido no limite gratuito antes;
  // trackClientEvent ignora silenciosamente se o /track falhar).
  if (localStorage.getItem('corsificio_saw_login_gate') === '1') {
    trackClientEvent('login_gate_converted');
    localStorage.removeItem('corsificio_saw_login_gate');
  }
  closeAuthModal();
  await refreshAccountUI();
}

async function handleForgotPassword(evt){
  evt.preventDefault();
  const t = I18N[currentLang];
  if (!supabaseClient) { showAuthError('Non configurato: manca la connessione a Supabase.'); return; }
  const email = document.getElementById('auth-email').value.trim();
  if (!email) { showAuthError(t.forgotPasswordNeedEmail); return; }
  const { error } = await supabaseClient.auth.resetPasswordForEmail(email, { redirectTo: window.location.href.split('?')[0] });
  if (error) { showAuthError(error.message); return; }
  showAuthError(t.forgotPasswordSent);
  const errBox = document.getElementById('auth-error');
  if (errBox) errBox.style.color = 'var(--brass)';
}

async function handleSignOut(){
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
  await refreshAccountUI();
}

// FIX AUDITORIA (LGPD/GDPR): apagar a conta é uma ação irreversível — pede
// confirmação em duas etapas de propósito, pra evitar clique acidental.
async function handleDeleteAccount(evt){
  evt.preventDefault();
  const t = I18N[currentLang];
  if (!confirm(t.deleteAccountConfirm1 || 'Isso vai apagar permanentemente a sua conta, cursos salvos e cancelar qualquer assinatura ativa. Essa ação não pode ser desfeita. Continuar?')) return;
  if (!confirm(t.deleteAccountConfirm2 || 'Tem certeza mesmo? Não tem como recuperar depois disso.')) return;

  try {
    const response = await fetch(BACKEND_BASE + '/conta/elimina', {
      method: 'POST',
      headers: await buildAuthHeaders(),
    });
    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}));
      throw new Error(errBody.error || 'Richiesta non riuscita');
    }
    alert(t.deleteAccountSuccess || 'Conta apagada. Sentiremos sua falta.');
    if (supabaseClient) await supabaseClient.auth.signOut();
    window.location.href = window.location.pathname;
  } catch (err) {
    alert(friendlyErrorMessage(err, t));
  }
}

async function refreshAccountUI(){
  const accountContent = document.getElementById('sidebar-account-content');
  const accountBtn = document.getElementById('account-btn');
  if (!supabaseClient) return;
  const { data: { session } } = await supabaseClient.auth.getSession();
  window.__corsificioSession = session || null; // usato da generateCourse() per il gate del free tier
  loadVerticalPreference(); // FIX PRODUTO (vertical): recarrega sempre que o estado de login muda
  const t = I18N[currentLang];
  if (session && session.user) {
    accountBtn.textContent = '👤✓';
    accountContent.innerHTML =
      '<p class="sidebar-note">' + escapeHtml(session.user.email) + '</p>' +
      '<div id="sidebar-subscription-status"></div>' +
      '<button class="btn-secondary" onclick="handleSignOut()" data-i18n="btnLogout">' + t.btnLogout + '</button>' +
      '<a href="#" class="delete-account-link" onclick="handleDeleteAccount(event)" data-i18n="btnDeleteAccount">' + escapeHtml(t.btnDeleteAccount || 'Elimina il mio account') + '</a>';
    loadMyCourses();
    renderSidebarSubscriptionStatus(); // FIX (auditoria de design): status da assinatura mora aqui agora, não numa seção de marketing separada
  } else {
    accountBtn.textContent = '👤';
    accountContent.innerHTML =
      '<p class="sidebar-note" data-i18n="sidebarNotLoggedIn">' + t.sidebarNotLoggedIn + '</p>' +
      '<button class="btn-secondary" onclick="openAuthModal()" data-i18n="btnLoginSignup">' + t.btnLoginSignup + '</button>';
  }
}

async function loadMyCourses(){
  const listEl = document.getElementById('sidebar-courses-list');
  if (!supabaseClient) return;
  const { data: { session } } = await supabaseClient.auth.getSession();
  const t = I18N[currentLang];
  if (!session) {
    listEl.innerHTML = '<p class="sidebar-note" data-i18n="sidebarLoginToSee">' + t.sidebarLoginToSee + '</p>';
    return;
  }
  listEl.innerHTML = '<p class="sidebar-note">…</p>';
  const { data, error } = await supabaseClient
    .from('purchases')
    .select('id, title, plan, created_at, course')
    .eq('user_id', session.user.id)
    .order('created_at', { ascending: false });
  if (error || !data || data.length === 0) {
    listEl.innerHTML = '<p class="sidebar-note" data-i18n="sidebarNoCourses">' + t.sidebarNoCourses + '</p>';
    return;
  }
  listEl.innerHTML = data.map((row, i) =>
    '<div class="sidebar-course-item" onclick=\'openSavedCourse(' + i + ')\'>' +
      '<div class="sidebar-course-title">' + escapeHtml(row.title || '') + '</div>' +
      '<div class="sidebar-course-meta">' + escapeHtml(row.plan || '') + ' — ' + new Date(row.created_at).toLocaleDateString(currentLang) + '</div>' +
    '</div>'
  ).join('');
  window.__myCourses = data;
}

function openSavedCourse(i){
  const row = window.__myCourses && window.__myCourses[i];
  if (!row) return;
  closeSidebar();
  renderCourse(row.course, row.plan !== 'sintetico');
}

// Salva un corso a pagamento nell'account dell'utente, se ha effettuato l'accesso.
async function saveCourseToAccount(course, plan){
  if (!supabaseClient) return;
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) return;
  try {
    await supabaseClient.from('purchases').insert({
      user_id: session.user.id,
      title: course.title || '',
      plan: plan,
      course: course
    });
  } catch (e) { console.error('Impossibile salvare il corso:', e); }
}

const SHOWCASE_TOPICS = [
  { key: 'showcaseBusiness', img: 'data:image/jpeg;base64,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' },
  { key: 'showcaseCreative', img: 'data:image/jpeg;base64,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' },
  { key: 'showcaseFood', img: 'data:image/jpeg;base64,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' },
  { key: 'showcaseTech', img: 'data:image/jpeg;base64,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' },
  { key: 'showcaseWellness', img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAHgAeADASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABAECAwUGBwAI/8QASRAAAgEDAwIEAwQHBgMHBAIDAQIDAAQRBRIhMUEGE1FhInGBFDKRsQcjQqHB0fAVM1JicuEWJDUlNGNzgpLxJkNTohc2RLLC/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJBEBAQACAgIDAQADAQEAAAAAAAECEQMhEjETQVEEIjJhFHH/2gAMAwEAAhEDEQA/APou7/7pN/oP5VhbD/qMn0rdXQzaTf6D+VYSw41B/pRK1lufgFEChbc/AKIBqshdZ50S8/8AKb8q5Geldb1f/o15/wCU35VyQnis5NRDJ0NUWrY3R/6qvZelUeqdU+dZWPWvSj06igLXmrBMAipAfCPho2HpigISTjmj4jgVQdEMGjIuoqujyTR8AxirAZHRKZoZGAGakWQtwK1tNCgwA5pwYn5VCBzzUykD51U0kWpFpimn5+lEOzzil+tMDDPWlL4oqSkOKaH4qInLUNJgeaUjPWmI3FPBoEximMM81IaYTgdKEMJwOajzmnuc4qM1GniaTikxSjIPrQSLgUpOaaOtLRCDrTWGafxSEgUEYHOKft4pBjOaU9aqGHINMfkVKwyKhcGosRHqa8KQ9eaQ0V4EbzTs4NMrxPFAucmlpitSlsj0NBG/Wm07FIMUHu9ePSnUh6UDMYr1OpOlAlRynjHrUmagkbmgiYDPFKMYzSe9e6Cg8XBNIT6UmM0nTiiE5717GK8a9iitnD4llktmjniVnK4DKcfuqjs2xqUg+Va3UNHtWieVYwjgE5XisZbH/tOQ/KiNfbN8AotTQFo3wCjlNVkNq3/R7v8A8pvyrkZ6Cuuar/0i6/8AKb8q5Geg+VZyaiKTpVJqn7H+qrqXpVJqvIT/AFVlqPW3GKKTcz9aEt+VoyH79SA+BDgGj4lOKDgOMCrCLkVUERcUbE5oSPpgCioxxzVgLQ5WpUODxQ0eaIU7V461oEK2D1qVW5oVfXNTJ0oCQ4I4r3JpijHWn7uOKIcDivE5OabnNeoH5GKaK8acBRSqcU/f7UwDFKOaIXf601jyAKVh6VG2Qc0V48Gm4PpUgGeaRhQR16lJpMjFBIOgrxpoPbvTs460CdqYxzSl6aTmgTOKcGpppM4oJM5FRSMM0oYetMYA0TSI0h5FPKgUmKKjNITxTmHNMJ4oFBwAadgEZqIt2pVfANAjE5Ipe1NHqa8zZOBQLmvUn3h70hbaOaB1NY+9eD56U08mgQnjionAY5qXOKYcGgiKlRnqKaWqXHvTWQN7UEROBSD4qkMeK90OKgaBilPNLTTVHU7oZtpf9J/Kue2g/wC0X+ldDn/uJP8ASfyrntn/ANTcfKiVprXhRRydKEt1+EUUtVlFqXOlXI/8JvyrkWeBXXdQ/wCm3H/lt+Vci7VnJqIJelUmqHCr86u5elUuqcqvzrLUNtz8NGRjvQVvgCjUbHFSCwgkAA9aOiYetVUPWrKBciqiwikyBxRMZJPJoOL4TjmjIhmgMjAojqvFDx4xRCDNbD41BqdeBTVGBTqB2acOlMFOFA8ClHWkzSjrQPxxXhSDmnAHFB6vdKcKR+nFAhrxXNNTBPJpxbBoHYPFMcEjpTg3HWkGD1oIcE9sUmCKnOFFREE0DQ2O1eLE14pjvTe9A7BIpCpp6/drxOKCMnFMJpzcmmGg9Xs4NJXm6UCE5NIelJzXsZoENMIGelSYppHxUDClRlQM1MwzUTgjtQeQZzTtgHNLEMLn1pHbqBQNbHaoyec04g96YaBd47CvAZNMAyalU4oG4H1pCMDpmlxgk+tITigYV5pDxUgOaRhQRGoyRnrUj/D61AeTmiFNNLAHFKenJppGaK6zN/cv/pNc8tP+qv8ASuhyj9U4/wAprntr/wBWeiVqrf7oohaHtuVFFAVWUF//ANOuP/Lb8q5EeBXXb7/uE/8Aob8q5A1ZyaiKXkVS6qfhX/VVzJ0ql1T7o+dZUyA4FGQ/EeaCgHFGw8EVIo+FOAasYDigbfAo6Pg1UFxjnNGRGhIjRcVUFxDGKKSho+RRCnFaEoNPFRg1IvNA+nDmm5ApymgdjFKBmvA5pwFAoGKfTTxXg1A4nApmd1OIyKTGBQNx7UlONNNB7d7Uopq808DNAjcjikJ4p+1fSmkUEZpvU1IR7UwjFB4PgYppkJ7V7qa8VoGEmkzXndY0LyOqKOrMcAfWqq68TaPZgma+QBecqrN+QoLXOKTOazn/AB94YLbW1eFCcffDL/Cru1vLW9QPbXMM6nkGNw35UE+KbnmndKQ0HutNNL2pKBCcU089acaacUCAbRimHOeadmmu3eg8Rmo3FPL8cUw885oGjn6UoPNNycnua9gmgeW4qPkilBwPU0oBJoPKOKRjTicVGxz3oGOCwxmoCecelSu+0cVDgls1Nha9260rcGoy3PFUdck/u2+RrnVucau9dFk/u2+RrnUAxrD0StZa/cFFChLU/AKMHStMob3/ALjP/oP5Vx412G7GbOYf5D+VceYcmsZNRDIOKpdU/ux86upOlU+pjKD51lYhtz0o6MZNBQDAFHIeKkUfbirCJe/agLY8VYRH4aqCohijI1oSMijI2HFWAqOp1GagQggUShrSH4xUi8UwHJp4Hein8Gl9qQUvNA5etSDOeKYhFSA4zQNJ5wa8ODSHmkPNBJvr2SaYKcDxig8T3qMnK09ulMz8PNA5KeetNTlacaBRyKTHNJnFeJzQefpUZ5NPNRk0CHrWf8TeK7bw/bHjzrlvuxjnHuaL8Qawuj6Y0u5FlbIQseB6sfYfyrkM51PxheTR6NC80W7Et04O0n0A71m5Se1xxuV1Fb4j8faxfTMTcKig8KGHH0Gayk3iXUpn2vcvID6np8q3kn6Jb44a6uuTyQKmXwHY2QXCBnHUnnNcbz4x6Mf5sq51d27mITzt8R5CjtntigrfULnTrgTWdxLBKpyHjcgg1t/EGiNGpMajaBj1NYG7ha3mKsOPWt8fJMo58nHcL2694B/S/JcXUWleJXTMhCRXuNvPYSDpz/iH19a7CRivjo8AEjIrvH6H/Gc2taZLot9KZbmwQNFIerw9MH3U4HyIrq5OmZGKYWxSE5pMZoPE5puc0pppNAhOKYWxTmwaaRzU2EL03OaX6UznFAucGvZ+KmZ5xXl5PFNiQcmnk1F2pPM49abD2NQue/akJL17bxgmmwzINNBwaewAOBTCOM1AjEmmd68xIpKDr0n3D8q53Ef+2H/rvXRH+6flXO4/+sP/AF3rSVqbX7gowdKDtfuCjB0qsmXPNrL/AKD+Vccc/EfnXYrj/usv+g/lXG3PxH51nJqIpDxVTqX3B86tZOlVOpZ8v61lYigIxRkfWgYM+tGJnNSLVjA2BR8T8DFVsJ4AqwhIwKqDYutGxUDEcUbGaA2MYohTxQsRx1NEISRWxMualXPzqFW7VKpzQPFPFR54pQaCUdK8TUZbFIXoJM0meaYGr2TQSA5pwOKaOBTqBTzTCvWng5pcZFA1OGx61JTAMUuaDzYpO1KabzQeNMYU+k6MPnQcy8Q293408fjQbVitvb4SVx+yByx/Hge/PpXU7XRtO8PaDFYWFukUUS4AA5PufesX+iONbuTWtSKgzy3TKzd+WJP8Pwre6vIkNsfMbn0rz5fdd8PcjI39wXZuelZu+cYOOvrVvcTiS4b0qpvjEOARxXivb6WHTM36ebkGsbr2hqyGRB26Vurl7cN/fx5+dUmooJFdQeo4rWFuNM5Mo5TMDBIUI4Har/wBrbeHvHGnXm7EDyCGX3R/hP4cH6VUa1C8F4yuCCTQUbkA7eo5Hzr6Uu5t8fKaun2KRgn2rwPFB6Rdm+0Wxuz1nt45D8yoNF96qPGmnpTqQioIzkmkxUhHNIx7VAwLxTGFPNMNBGQaTODSue1Rk89agkLVEWp/GOvNRuvcUCqw9aRpMN86jAJavMM1Q92wQaQHIpoHPPNOoGsM14L9aUkV4cVR1p/un5Vzxf8ArL/X866I33T8q50P+tP8z+dVK1Nr9wUYOlBWv3BRi1pk2cf8tJ/pNcamwHbjua7NP/3eT/Sa4vM3618+p/OsZLEMh4qp1I/q/rVo5GKq9R5iPzrLUQW5JNHITVfCcUZbzRSMVWRGYds1mLVhAc4o+JsCgEkSJcuwUepOKIguoJTiOVHPoDmtIs4n9qNiJoCHsaMRwo57UB0ZwOtTh8CqC68SWFmCok82QD7qc1ltS1i91K5X9a0KdQqNjArnnzY4sXOR02Ns1OprnPhTVdUlvmjti15AMqxY/CvvmugoW2jdjOOcVvjzmc3Fl2mJ4pNx9aj3AUx37V0aSF8n2pQahB4pwPvUE4ang96gU1IpqidTT6hXipAeKBwpSeKbk0vagUV7NJmvUDs16m5r1B44pp6g0pNNJwKDKfoztptPh8Tw5aIRaq0agdcBAQP/ANs1U+K21Gy1Qs+q3K7jnaSCv4V0vR7KOWyv5Y41ikluSWbH3iqKu4/hj6VyHx5pviTU9V2mGKNN20OHLFueuO3415OWV7ODVva1hWeTQGvN/m7erisXMkmsaiYZbmRE3fdDYrp1vpJ0D9GrxXXM0m3JIxk1zhdM+2rJ5crQzFg6OvYjPB9ua8+tV65fKH3ei6dpbeWI9zAcliTmqwwxhyYdwQ/sk5A+VTzeHNcuboGe/Vos8sIwGIo/+zIrKAjLMcYJY5NLf+rJ/wAYfxZZI1iXK/Gh4NYiNHcfArO/+FRknHtXSdfhFxpsq9+1U3hXSViv3c3HlzGFlxggjd3B+lenjz8cHk5ePy5I7/4WGzwfo68jFnF1HP3BVoDzVJ4RaU+D9NMxJfyup64ycfuq6BrvLt48p42w/NJmkBrzdK1tHs5zTTTA3WlB9ayGtSCnHpSEgUEUgqMipnwaZigaOBXiRTsVGwNA0+1N70/FMPWgceKjJpxNRk80Hu9OLcU0V4mqOvv0PyrnZ/62/wAz+ddEboflXOn41x/mfzrSNRa/cFGCgbX7go1arL039w/+k1xO5bE7/wCo/nXbJTmJ/ka4ddn/AJmX/WfzrOTUQyPxVZfv+qPzo2VuKqr9/wBU3zrKpLe2kvj9miIDyDAJqo1Hw3quk6kLYROZcblaPJDD51Z2M5imjkXqpBFdIbbe6eiucF04YdRXm5c7hdpXE9Vt9ZwJrqKcxgYznIH4ULbzyW7LJHIyNjOQa6zp1i0aXNtdEOcnAb91Yq7sbOa+ljjgQDdg4rjP6P2MWH6V4vvbW6hF3KJYGIBz1A9a2moago0xmibJlGFwa5tqWkPbSeYpzB057Vb2QkisoVMjNkcA84rpeb/HcZuVk1TgrAAAEl+BV3Z6FLqAEZLRhhh3P7I9B70un6eBcxs+CUUZ+fpWoilVcBeBWeLh8u8jDD7o7TLK10qyS1tIwkajt396O83iq+KbNS7817Z1OnYQZc03zOagZwB1pok5psGB+KUPk0J5ue9TQDOCTQFruIB7U9QVNIrAcV7fk8VoEqDilBxUaNml3DNUTjpTSeaapz8qWg9S5pprwNA7PNLTetKaBGPFR555qQjimFaCzsZdmmOicHcxP1rP3E9vbXXnXLAgH0q1tnKxSqPTNZq40uXUNVjWV/Ltwdx9TjtXj5d7e7gks3RH6SNTiXRYLbhCw3sueV9q5bp10ba+iV2G2U4U5rd+LvC1sUPl3Ega9m8xvNkJVfhO4jJ+EHHyrm9to1raFSsjbI2LABsjPrmuWXd7erjkmPTa3NwqQYB7VltSvSAUBzmiLu/zHgHPGKoZi0rk9TWI6UNeK0sOwd+tOtNNlvdVto4Y9kjShFAPL54+g71PFbSXMsdtCnmTSsERemSa6h4e8JWuhkXLsJ7wrjeFwqeoUfxP7q7YY2vLyckw7vteRxpDEkUYASNQigegGBTsU05zT8V63zXgKQ80pFKBiqImUg8UnNSNUbcCgYTXjyKYeacQQOKgQ03BxS5yacFoGAGvFak200kd6CJlxTCKmJpPegHc4OKj6mppRuGaiCH5UCZxTO/WnlfwqP8AaoOxtXO5ONdf/UfzrojVzuf/AK8/+o/nW0aW1PwijAaCtT8Ao1elaZLJ/dN8jXC7sn7XMP8AO3513Ns+W3yrht4cX844/vG/M1jJYDmB25xVPqH9y1XMgJXuTVbqkMiwbmXAPQ1loNan4a0vh+5dJ3R5SUYcBj0rNW4CrknAHNLHr1grMPOKleM4rjyYTOaK29/I2xp1G6RFP/qHpWW06xVS1w5yDlzTNI8XQyX/ANkmmV43/unPr6GrOaDy5zbqwEUmZAB3HcV8zPG45arFC/YvtmmXAYcOuRntQE2qWekQPPJ8UkY2xx+p9attavotN0R2yAxXoK5Xf3kt5M8jhhzwCO1d+HHfTFm+xEniDV5b6W7W6kiDNkIp4Fb/AMM+M0n00/2k3lzRcZx98VzmEIIvjwOcgVd+HrOS7vVndR9miPQ/tGvdOvTc26ZofiJdXadoomWGNsKx/aq9S4BHWstaTRwRhIUWNfRRVlDc7h1ro2tzL70wzc9aDWUmnb8mgNjfcaLjlwAKrkOB1qZHPFBarLlMd6cjc9aCST4eetTJIAKA9JAB1qTqc0CkmaJiYmtSggOBxXi4PQ1ESB868Digl3cc0hakGSM0uOaoUNg9afupmK9mgdmkY5NLXqCW1cJcqW6H4T9aqdf07VLnV7MaVepZMhJeR4vNGP8ATkZo8miYbmMsPMwGPAavNy477d+HPXTmHjvRobRlNxrV5LcSf3jPGpD/AC9ulc4+x3Mkx+z3c0Yz3AGfpXcPGMVjKA0ih5Ox9K5teSwQysMAemK4XOyvp45eWPYSCEW1iI5JWlkUfebqaHJWMe55NNudQjClV69zQXnvcNtXgetYiWth4Bs1u/ET3DDItoi4+ZO0fxrpnasL+jKID+036n9Wv/8Asa3ZFezjn+L5nPd5mEU4UmPWvV0cS14kUmaTrVCHk0xxxUmD6UhGaCAilxkc08rzS4+GoISPWlIpcc5rxIFA3pTGNJI3oaTdlaDxOa91rwHGad0FBE3Wom9DRBHeomU56UQ3ggDtTGTnipBikJorrZrnVwca7KP8zfnXRTXObsY8Qy5/xt+dbRpLP7go5TVfZn4BRy9KrNPY/CflXCr7/qVwP/Fb8zXcyfhPyrhOosV1K69pXH7zWcmoGlkKk4PTvQFy7yoRy9EsylhuJC9yKZZ2OnypJ50kpL5GC2K458kw9lugqhSm3HBGDVBqmjyRLvCZh/xDtVpLZz6OzSRsbm0Y/Cf2l9jVnaSxXdqH+8jdQaTKZTcPbAxIu/BOPRv41urHWku9FgkMg+0W33gep9fxFVGt+HSI2urEZA5aP+VZmATNKPIOJCQu3OM1w5sPKM602nibVITFCqKJDOoJB52rV9Y3OlzeHQZ7WEhR3Arn19F9nlSATCYxrhmByMnqKSG/kFu9uzEIRg89K8kxE+uxadJcEQwiME8lTRcGuwx2kNpZW5EmNoB9fWqKFZ9Rult4FLk9B/E1O0i+Hrsu2ye8xhVHKp7mvVx+XpfTaWLzQwqkz73HU1b285OMdK5qfE2ouAAVBPotGWnia/tR8bLJ7EV6ZV3HT45MLUwcYqj0nUl1GwjuFGN3Uehq0R61tRqydOeanWUCqvzMHrT0nJ4qi2WbtU8bnNVsT5NGxPQHRtnvRaOcVXo+KKjPFASpy2TUgbmhwfenq+e9UFbhXg1RKa9nnrVglzXh1pm8UoOTVEw5FIeKQGvFsigaTzU9koa7iBAILYINDEHIqz02ykEyzyDYqcgHqa52/q4ztR+IPCkGobjHcTwHrhSCP39K5Tr/AIbexnYeY747sa7rcti4HHB61gvGKx+cwCHivBl16fT48t9VyI2m1jvFTpEFHAqxlt/MuMKvGaZJblTjHFTbpppv0a3SpqV9aMcGaNZF9yp5/c1dDPHFcUs7i406/iu7V9ksTblOP3H1FdL0bxhp+qRqk7LZ3R4KOfhY/wCVv4HmvVxZzWq8XPx3flF8aaaUnkUuK7vIaBzzSk817NNqhwOetIcdqSkINAjGmGQUpJ6U3AFA0tmo2bNPI4qM8E1AwnjmkUHFeY0qnNBKvC1480gOKQnAojxppNIXNJuopp65pppWOaYT2oNPD4q1Jz8Ri/8AZVVLI0mqCRj8T5Jros1vCykeUnT0rnd2AurlQPusR++tDRWTfqxVilVVkfgFWcfStRmpTgg1wXWTjVLrGeJn/Ou9D7p+VcM1oq+sXiDnEjY+eamUJVKzZFBXblUJBII7ijmjYn4FJoK/gkSM7lIPpXPTSW2vJCu1sMO4PeniNLWVpIMqj8suOBQtqMAZFWEQ59q5+H50aFW1xG428n+NZ3X9BWGU6hZLhM/rUA/eKuns/i82A7XH7PY1XT65K1vNBDGGlYFSGOCtc7bJrMv/AFlJ3VB97JHpUdnDLqV7HYwfflOCfQU25tbiIqso2Fm2jJq1tseEg1yJYbm+lXaijkRj1PvXLHD7SddrPVxa+EtJNvaEfbJRjeeW9zWKjR5WLElnbkk1cQWF/r9408oeVmOWduAK0Vt4etbFA0oDkDJJ6CvVO/Se2QiQRjnJJ9OatdO01rmTc8LLEOrN1NWL+JNFgcxxxF8HGVTip4Nf0+5fy1coT0DDFFmh2kWX2KbdHO/lY4jPStDHNke9UsB2kEHOasoWBArUaG7sjNPiPNQqfhqWIgck1QfCaMjNUj6ksUiRRKXkcEgew70XpmoPcTmORSDt3fL2qeU3pNryMZxRCtxihVYnGOBRMY45rQk3H1qRDTNoYVIBt4FBMDxTSeabu4601mCgsxAA6knFUShqkQ5OO9ZrV/FdnpiMI8TyDjg4UfzrFX/jDUtSZkaXy4T+wnAI961MKzt02617TbSVopLyNpl5aOM72HzA6fWhbTXxqWq2trB/y8UkmHklXJIAzgDPBPTJrmkWpFYwi4UZzgDA/AUfY6r9mPmKw3BvMBIzhv5Vu4dde1mXfbtyRwwgbFA9z1ohbhThVOc1ktI8T2GuwCNLlYbpQA8Dtg5/y/4h8quba5jtOGOT71822zLWT2yS49PXs3wyOD9w81iPEFz9pzxmtXqF7Db2c7MMiXPfpWVtbI6g5HPXrXO9u+E12yrW5BZyuBQUsRZC1bzWNB8nTwI8IpPLnv8AKqFtKkaIIi5A71i9O0u4z32TIHGTUken7u3FXFzaLp0Pm3txBaxgfekcL+dYzWfH1tbboNIT7VJ085wRGPkOp/cK3jhll6jGXJjhO60knieXwlaCWS6PlfsQN8W8+ig9Pn2p+g/pjtLqV49atDaKzfq5YAXVV9GH3vqPwFcfury51G6a5vZmmlbu3b2HoK9GwX1Jr6HHx+M1a+byZzO7kfT2m6rYaza/adOvIrqIcFo2ztPoR1H1oyvmbTdXudJuRc2dxPbzj9uJ9p+R9R7Guh+Hf0uPvSDXIfMQ8faIVww9yvQ/TFa8a5uq9aRqgsNQtNTs1urG5juIG6Ohzz6H0Psan+fSsiMjmkNOPtUZ6UDS2PeonYZqTFRSCgYTmno1NA4pVXmgdkmvZxS4rxQBaCJ+DmoySakI5ppHHSgaOlepV78UjDig623SudXw/wC3JB/nP510Vulc61BiNcl93NbF1ZHCCrOM5FVVn90VZRnFVKI7GuE6sANcvQTnE7/ma7oDxXBtbl26/fjoTM4z6c1KkiISCNckfezioJ4i9oxWIscdetI8yfZ9obdtHBx3qJ7mRLZjHKVIHOKztdIk3rGDJFtA7mmNqtukwVAWX19KjWWO5tmmlyydyaq7iS1b+5V8eorjblrcTtrYpUYAqwORmqbxDo8kqfb7T4Zo+XUftD1oS38x3WSGQkxjPHUj5UbfeIJorHzbKGOcKMSK3VffFZmUymsl+mTvLv8AtOzUCB5bhWwWQdPeifDeiS6ndnzEIijPxs35UJNqtxKjLkQIeSsa7RROnatc6WpeGfap5K4yDXPCydaTbojw29hZ9FhiQfKsHreuz6kXt7TMdv0LDq1OvfEa30JaeOVyRhdx+HPyqlh1FllDLGrheSprt5W9Rrxt9Eh0uc4KxNt9cVZ22hTSfEsZX3NWNj4qhKqlxbhF6Bk6CrxJkmjDxEMpqTFPj17NtkMUCITkqADVjBIAKrS5BqUXKwRmSRgqjkmttLRp1jXcxwKC1DUGjtm25RiAB7ZOBVO+oNqL25jOFll2Kvt3NXN9pvm3DO06rv2/B1OB0wK5ZZb6jPv0dNG1vqlvKlzkiLywo6n1rTWEIiTeVw7DmqTT7FYR5zKSx53P1q2TUbS3jZ57iNAvJywrphjrurpdR9KJjz61ij45haUi0s5Jo84Dsdu75Cio/GDSERCALO3RN2T9a15xNtiGwOtLv5rJrrmpyTLHGiSEnkqOPl71oLQ3RQG6CKx/w0mUvpR+c1j/ABXrZS/WyibAjjMje56fu5/GtNPP5Fu75AIHGa5zqrG48RyuW/8A8WR8D0BXH8a78c+2cqzOo6uZpZMn7vvUFhLJeybhyi8nH7hWanunku5F5wzdK1nhgeZG3AIB610ndTWklzL9nKLnJOcgdBTknDcZBOM8DpQ+t5+1bV4AGCait3WOBjzlj0HftVRNiScgISOM5Pb3ouLxXr2llIYdUmAPKpK28Yx/mzxTtPCbbiY8BV259Kx+oXT3F+VyTjgk+lZyxl9tY2z02V1+kPxBc2oSU20sTftGPbnn1GKlsf0pa7aFYobOxZj0+A89f81ZeTa8cSAjZCOg9ahkTyy8ztsGNgx1965/Fh+Ony5/rWaj+lPxLqFuuRZom7C7Ysn95NUGpeMvFD7Ul1WSAPzshAQ/iBQth5YhLuhEUfxDPUkVWzyNeX5cgdfwp8WE+k+TL9R3Hn3EokuppJpCu4tIxY/iaGOB0GBVjdD4CcY3DA+VBbRvx6VrTOyRoWpzsIziiooxFDvPeq+V98hI9aCdAWyaex2dqdbJkf71BeSATCJaot9D8T6l4fu/tFhdNETgMp5Rx6MvcV9AaBrcHiHQbbUrfCiVcOmc+W44ZT8j+7FfMkh2gID25ro/6HddNvrlxpEr/qr5PMjB7SqO3zXP/tFYyg7KcVG2ACScAU81E3PHb0rmpsciSjKMGHtTigNV91bSLIs9o3lunLKBw49KfpmqJqcLsIpISjFdrjBPvU33qoLZAOlQzuYIHkC7iozipzQeos32KUJjJGOaX0ptpqUF3Grow5HSii4bvXOLDUW029eOTcg3eua2lrfLKgOetc+Pk84g88mmk0gfIphcBgpPJrqp+CDn1pH4FJvqGW4UOFAZjnHHam9DsLHiuc6l/wBekH+c10Yiub6qdviCT/Wa1Re2a/AKPSgLI/AKsF6VYlSA8VwfWoWl8Q6gBgYnckntzXdweK4jrlzHHrV8nl/F9obJ9eaUUFxCYh94Nnnig2uPK3MeRjkUfduUmZehPIqsngldWCqSawou0e38vaImIYc814+GxfNi2kEO496mtbYw2QQgCVhn3+VF28pVAoJ3HqPSpYmmduNM1bT5PKWEs6ngr3o2Oxg1K0LzgWc/QtnqaN1CLU7q22QXzjH7Ld/rWauHuobZre4hdGXkE9D9a8+WWU9xmSwFdaVcTmS2jaNcHHmluMetG2usWulWwtYbNJtgw0j/ALR9apri7kCB3XCDgYqKFXu5BhTsB596mFrXod9hv9ZmLpFhCc56KtA32n3Wk3QWZBhhwy8hq1Jmllt0jBMUCgDanFFW+hpf6bLFPuCOwMZ7qfWuku2sM+9MLby7pSn7Lfurbfo7RdU1c2lzIwSFd+B+0M9KzWq+HL3SZd2fMgJ+GUDp8/SrjwBew6f4tgaaZB5qtHwepNbr0Y6ro3irQ44Cb60GIxhXTsPQisLrMqtPa2gzulbJFdVu/wBfod+hGcR4H4ZFcXuzPrcdtdWWUnify3/y89az/wATmw16ae10xV02xIiYvHnJzjmre3jgtBuldBI/dj+7mhbGD7JbJEHZyo5Zjkk1k/HFhfXmo20kD4hC7W+LAT3rUxk7cJIl8R+IZ724eCK7FvZxNtLK2C5pmiaSNQAZEuHXPBZGwffnrQmiXWi6TPgQR3bpjdNLzk/5RXSdJ1y11S3DQsiEfsAjipqZJqBrPw3JHGNu1M/eLnJP07UbB4WhjlDlo89yFOTVksh3YBolX4rUwxE1nbQWahYkCgUXvzQiPxmpBJzWgD4gn26dMASCI2PHyrnNzf8An39rOrYWS2nDEevlHj9wrZ63dCY3UAPBiZPriuaaXN5t9NZMMiOOTZ7fAa9MmpphkcFro47mt/4fjFraBj8JIyFArG2luUumZwDtP0rbadn7Ezk5YjOPSmJaA1Q77kcdqBzgBckgHHzNH3q5mY9dvGcdTVfhuAOucn+VVFg85g0pkJwWJJGKx5x9pPpV5qE5EAUHg55qi4Ehc96zWotbe4G7BwFwK9NIbiRvRmwPagEfaoYnAJoq0LS3AYjCrzgigIuW8uBYR0znH5ULBF5ZkLDndgVZCASENt3MSc5pJ4NlyF25AwT8z3qorrv7o/Cho0zJk9KIuCGI9z2qEtsjPHtWVNu5T5YQGgVGXxU08nOTUduNzj1JqNLSBRHblz2GapVl829ZmPTmre7kEWnkdCRVDYjzJC3XJqswZK2ASe9E6PqMul6va38JIktpVmXHfac4+oyPrQNw+ZcDoKWJirg1Gn1ZBcxXdtFcQtuimQSIfVSMj9xpxrD/AKPNTu7rwXaMgE6Wpa2dM/Eu05B/9pFbG3uobqMvBIHAODjsfQ1x+9IabkRyYlQxqTgMelUGrXUui+IIJ0bbZ3Z2ylvuofUema0T4dSrYINUWpIphk025z5Eo/UyEbiH64rlydQWrTPEokDebBjOR1H86qdZ1tYLcKYiBJyrN0IoTwvqVxLaz29w0skkTFQZIticHGBVR4hu2kgksQrOC5MbKMgHuorlycusdw2p/wC2rUX8pAAJ6ADPNW+ja3LeMVEMiqv7bDANc8eWWC5LGNsRt8WR0rS+H7pnnlnEzRoWAVO1eXj5bj3UjeHVlgjBYnJ49qsLKb7RCJW6msmB5l3nYAvUup3q3zFXB1JIYVgiOGPw7lXG304rvjzby3fRsTPeNcXRt4QQg+/IDjHtSLeP9oFtaBHQD4nPODVNqN60EH2e0kjkmc/rFGd2astKtvslmFLEl/iOR0rphcsqsd3JrnGrf/2CQ/8AiGujGuc6wceIZB/4hr11V7ZfcFWC9KrbE/AKsQeKofXCfEI/+pL8Y/8AvtXdK4h4jAHiO/HH98azkRnbht8zMagkmZImUMRuHGDRFwhWSgbjIUkdR0rKrOwLyssecvkEkn91HTGON/MJCgcGqSz3EqwPPUmreWGG+RRNIUbqG7EVLbrpm7nosN/au+FnTJPTNHSQRXVuY5FV1YYrOalolnBCkv2jlieAKEs76axfMM0zoOqMM5rEy/U8v1Q6naG01C4iMe3a4VUY8fOgdQ+0Wl40KTq+ACSnSrzX75dTu4ZYrcxXWQrK/wB088Gri38EQsivczHzDywUcfKprfpr6YiO41GfEKzSPnoq1qtDutbsoxDcw/qu3m8Grm30q00mdzHbnLfdcEEg1PP4k0hrB4NUlEsq5AUoM/Qis22JIFuNVmJaB41XcOjDIIrK3NuiX6yLBsdWBVk7GtPLpEE8sdxFJK1uIwQH4/OiLPQIbq6hCRqvmHAZ84/Gr5VZbBOm+OLu3t2i1GHzIHXYZEHK+5FCaBZRx+HZ5gfha8Z89OM0VqN3YaHE9lexKGlTfGQMGsw3ieS8sZdJgjVIVUuWH7RNSW73XqwztmslnqXiyC1cw2YWaQHBbPwiszrHihry4YG2YKRsbn8qo7cvJceUvAU5Zqt5biJILWNkXfIpKk+/etXLvTjjjuWktrvSribC2skYxj4hkCrKbQ5EVJ7UTKG5BiRgadYWNl9mFxc3DMkZyRGPhz7mryH9IunW9x9nkLFF43gcAVZJtbx2TdR6Nd6/p7hlM91D0KzAjA+dbG08RJKAZbaSNu+PiAqki8eabdZS3tLu5XHVISQapbxV1My+Ro+q2JbkPG2N3zGa3q/rk6dBdJNGHjYMp6EVN5grlFlF4x0ixaSANNGp+4+N2K2uha5Lqek+dcQPBMvwSIRjDcfzrph3S9KXU9QWLxDOjHAwGPPrwfzrNWkQtP0gQRn7k4kUehyjYonx3IbTVY5ASC+CarrW8F1qmk3e4b7e5VG/0tx/Gu7BL+3FtdTDBzu44q+06Mrpm5uMrk5HQVHqFmgvkZ1JDMT60Vbq81i6gAK7KoAPQVqIBvIiqgngHmqtAFieQr16etaDVYlaNIlGFKnP5VS3W1NnYKdxqCm1J9rBO4HrVaBmQcdKMnPm3LsxySTxUG0tIxVTjoKxWokiUFFLAe9HWqDIAGM9aZbQbh15Hb0qys4kknxjCLwOPxNWIItIgsZZhyOaEuju3sgILn+FF3koSMRgncwyR6UC+MAEg7AW/hWhWT/3gwcgA0JI3wH2omfqfZfx5oGVvgxnjrWKsQud7AUTbJtO7FDINzCi92xPSotD6ncZiYZ6Cq+xYRwM57nAp2oPmJuetJapvjVeuKn2JFUu2cVISAcDtTZJAnwJ97uaRFIXJqq63+hjU9iaxYEF/wC7uFUfVT//AM1qtXuri0Y3VnbS2rDLsijKyY9a5J+jvXBovi5JnJ8qaF4nA+hH71rt0Gq2d/Yq5lUCVNxUnBArzcnd1tKG0fxNBqAEVxiC6zgxnv8AKrG+tUvLcxnOf2WU4IPrWY1DwzFc3NzPazy290kYaIIfvD196bofigGCS11BvLkiO3c3Ax/OuXn145p/9Vbvc6ZeyvJNcMxlxFFuyrHuxFV2uatLPLGnmbGBOeMBSetWetQ2d2Tc2l07IuSu04Yn0rKKHKyxyuDdR/EY85JH86+dncp0iu1WK6kKlSVgyRgNuDH1rQ6LDDaWccj3EZMgz8YOB9KgZYYSksSgsU2thskkj0oSORjdqGuJo+wESA1y8vLpN7bTTJY0sp7iNgCG2ZjOAffFAXeri0+07XJupBtUnpj1oO2uEttPubmQmQ9FJ+EsflWeN+NRuJVlDJIFxCQehrcttkg0+i6pBNOl5qDBVQbVkJwSw9qsrnxYplKWoE6n4cgEYNYK1AtZDJfyCXb92EHBrQaHIl1G1zcPs2SAImP3165nljPGNR9XnpXOtaGPEDn/AD10Q9K59rfGvP8A6/4V9KtLix/uxVgOlVtifgWrFaofXDfE5K+JtR9PONdxrh/ioY8Taj/5xrGaxSq8bF0kO0EfeIziq6UKN2GJqeZu2aBly2R61JV0MgfCAL6UbNcyR6czRx7pEHwiq+AYC5GOKZE95c6uIUuDHGpx0yMVLdTsmNy9PaZqr3TJa30WGJ+FiKE1jV7a0Z44SZpBxhegrUp+j/UWlE8erOHXkfqQcVnNU/R5eWLyTvqLSF2LH9TiuHX2nwZql9e8yTTg1oF8qQNJnjf9av5PEGo38z/ZVSCL35NZG80aRQEe4ZwDkHbirDTLmb+0oIAxEajLDHUCt3LrpcsLI1h8O3y2UWozzHc3Ks5wB74rNS6XaLctJJdqzk5J4NXuueKoNTSOzZnuPKGNqZ2j8KKGl2ENhbTNDHGWO98jAVRXD2zOom04NDYxRXBMrbS0LOM4HyqLxFr95FDax6WjXNzDGQW24VCfT1NZbxD42824lg02Lcv3fMPoOwqDSvFmoCZEkshIPVOtdscd+yK7W7vU7iZF1KaRsDcN/XmoIY5BGJIi0R6ZPcVdatFNfSxXky/Ai42kcjmq+IzzPu4WIHgHvW292VeaZpiXvh65URpDJCPMLAfE9UOo2ch1a3LD4I4MgZrpXhaUQstreWu1JFwHHxLz79qxfiKBLHV7q0UkFH2oR/hPIrNx+4uOfVlLomox2fh+axli82QHegA4b2qv1XV9JvcE2clndAYYKvB+lHaTrDaU/wCsgSVSeWXriryXTdG8YWjzwny51ONwGGU+4rcSZVQeHPE0lhPEgnJtwcGNuOK6daX0N3brNBIHRh1BrjGraHd6JdeXcp+qJwsyjg0Xouuaho0yupZ4CfiU9CKs6W6vbsXmE96W5YQWm5uC+P6/eKq9J1i01WNTBIu44yp6iofFWp/Z762tkPJj59Ouf5V24/1yyZr9Ia/aLW2uE5wME/KsVpt+YJcueCwb5YOa32oBNQ0OaB+ZEBdT9a5fcEwzsvSulSOtagvmSwMuCC/X2NWlrAsdkF54Y5/AVV6aftmi2M/XfEjceuBVtv8AJsxnIP8AOtsqrUTty3Qj93yrNXswLjBOAatNXusK3Yk5rK3M5Ln2rNqyGZ/W5HXmiYUUEZPaq/ze9PFxjuTWdqtvNSG3CIMFuTiprWVkBz+0QKqI7gsw9qk888evzq7RbzSI8zsSCenAoe5ODIeQuMAetCx3BLDLdOeBSyygKQSST602A7huGz1oNz8NTTvk0K7ZrKwsf36WaX4cCofMKnPfFRO2eTzRoNeN8HzNTWx8q1yOrd6Fu8kL86lByqqOwqCaJdxyalc4AFLAuFGKZM2WwD0qoO0MBtdsk37PMmVC3pk4/jW/v9E1jRb6byFluYdgieRV49wB865pbOYpo5QcFGDD6HNfQ2p+IUWNJLcJLEcNJzyK8n9GON7qWMdb+Krg2catKYJ7Ycu3Lv8A5abrj6ZrKrLYsYbhVJkEnAJ65qXUbXw7d6k0su6ASwsfMB6uenHtWX1PfHseGfcEUITt4b5187O2db2zVjpky2Zlt9R2B2TzFlL52r6KPWgrWKRtQkuLbHlkeYAxyxHpUVpMlxdQXDwi5kj4eM8KR2o2SxuLHQxqkTJxIVJjO7ap7VyyylQy5vjDbzxxhUlJyxTAHy9TQ2nzl7mJ0gAK/fO7JYd6qrp0jkMnkOAwI3N0JojQLt4b4LwN44Y87T2NZ8OtgbVL9A4iRnCKxxTkuLaWzG+KSGZVysi9H9KFv4rhtTZVYGYsWBXvmibbStR1Jki+CEqvCk54HU16MZj4rtJFZzy2hu7hwVc4RQ3xM1Xmm3MVjLC9ynMmW5HCsOOaEgvNPs7MxQv5k64/WYyB61Fcas1xctHLIiwFAwLdQPesY5W3Uht9mGuf66P+33/1/wAK3+awevj/ALcf/V/CvtV0WVj9wVZCqyxzsFWK9KCSuI+LuPE2oD/xf4Cu2g1xLxgP/qnUMf8A5P4Cs5+msfbKTt8VAu+Dk9jRdx1NV8p+E1iLVoqG4fdBlxj7o6gUdpenyLczSyKyFcNnHWqe0kKqhUkEdwatIdQnlvwDMzIcBlzUz1pvi35dOs6fzZBx1KjNZnxWQ0LRRk5buTWm0xCbGM7uqjNUfiCOFLaRuCVOa8tyeyY9uU6oFjOCc8EfWqvT5YhqkSzuEScGMv8A4c1YalkyMT6ms7fcLkdK6TuOOeP00uo69oehmSO3YXkh+H9WmAAKqLzUNT8RFWlJjhbgIpwqj+NU2k6c2p6xDbKpbc3OPSuippllprpHcsZGQcQxjIHzrWpOnjy6umd0/wAO2srLH5jvKxwu0YGfnU+q6feaRcJFY8Nty+Rz9K3lwllaWlpdMFjVVMhwMYHYVzbxT4pubnUmlijWIHhc9QB0rWPd7Sd0M2rXqyCGXO0jY+4daLktBM8EMT4Q8N86zTTXN0EfczszZIHc1cC4k+J4gyShc8juKtjv4+Tf+E253wXomxlGt5SPix3FZjxQrXHiS4uIgrKGAZc8jFDaJ4nMNuHkgjOHJIHBz7GpYjFLby30zp5p3OzKefkR3qS69uGrL2qVjJmZgcc5B7H2NP8A7RutF1Bbm1bYzDDoejVWWOsGCXEqiSIsTz2qwtNftzdNaahaBrKXoxGGX3Faku19tvpOt2XiezaCaJfMA/WRNz9RQsfhqXTLx2tBHcWUn3rdxnHyNBRaBNo95FqOmSfaIcZx3K1qLXUY7yLcmVPdW4IrTQTSfC0EXiW1u7YtEiEs0eeOnT8TVd4uud3ilGJ4Q8fjW50VARLKxwQOP6+tYjxTPYwaifOYiXoB6c5Jr0YTWLnl7AHUo4niwfvEq2T1rHeILURXJdfuk5GKuri4smXcoOQSQc1WarcR3NkMD4hVpG68MXqReCtNZzl9rKoP+s4q1vJSLTJORkjGfasrpzGDw9oydhbh8fMk/wAat5LkXD+QCTiXzCfatz0yqtSUkuWBwFz165FZ2flj0Na/X4ViQ4BGUA5HYCsfOxx86zWoGY8Ypwbioj607qKy0kEnTHenl+PWo0HepMDceM8URNFuLYGCfWpLltrMpNPhT4vQAYoe7cb2I71UCSOSaHd8d6klbEeaBZ/eo0kL5NezkVAWOakRiagHuWzMi+nNSRctUVyMSq3tUtqC71IDwwjiyaHzuYmpJcuwUdAK8E2itIVeENdJsrmIaXBM0byb1Xdnp90VzkDitlBrUv8AYOmwQwg+RHk/5iO9eH+3rGVim69du1xCIbRljR9oY9zUEt9BH5qxtujJCzcZVT7Gh31VmZnkVZCTuw3IB+Veu7y2n0uWXYkckkgwq8DjvXzZ/l1YyHF09hekxNuQkNnpuFa7TIF1XT7q2glKx3K72Trhh1IrBrOrac2M+ajHk+hq+8I3jWsLymYRfAyBifXg1q4dLIotSdFlliQyERtgBn3CorZ2WYbM7uxBq+1nSbO3CmFJCJhuSQnr9KdpcS2mlSmBUNw52l5FyVHtXXHVnRtHePHZ26OgBc/C0o6k98CqZtUubB5DbO0bupXceTg+lSX8aS3YIleMquCH5yT1IoVtLmmiJVz+qGSWHarjjjLuoFgeZ0ICnAOC/pV7daU0FvFNL5eMAZ37ifegrbRJmO1m+HGTz1ox9DuiqlJgf8Kk5rrcsfprcfbvvWF8Qf8AXW/1D8q3Z6VhfECn+22OP2h+Ve+uiwsj+rFWC1XWX3BVgvSkDxXFvGS48U6gP8+f3Cu0g1xnxoMeKb4/5h+QrOfprFjLrgmqyb7pqzu+tVk3Q1iNVNa/3a1NayGPWMgZBxkVBbH9WtSxkrqSkdcCs5+m+P8A2dhsLhxp0Ij54HXtVTrCEW2CM7mySTRulyf8jE2QfhAoHXFbyCke5mB+6oya8tj2yuZau25nKjABNZy7X9SxNaXVsQlkdHRs5wykfnWeuPjhK9q649Ryy7qz/RqbdvE08E0nlyTQFYmPrnoPetrqWoW2gW80Vz5cbzjaEB3SH3Jrkc+6zljngkKSocqw6g1L9suL6X7RcytLK55Zjk101L28mWF8mu1rxDLqIiAAjtrdMKvr7mufXVw89w8nLMx4FaO4Vri2MKHDNxmoLOxstPcvPcIz+/auk6Z1qJNFtZLdYZZoymWzz6YqJ3kudVZy7cthUTsKsYz/AGjKXimVbOAZeT39Kk0W2C3iJHteS5JIc84Wudutrll1NJfEGhw6fotne24wshw/ufWseHLoQjkHkEZ61v8Ax3fW66bZaXA6sYgZJMHofSsUiWBuraRyyxhP1nua3jdxNW4zYFUGFyvXuO1dA0vSLPW/Ddt9qiBZVwHHBFZ1rbSZpg1nehGPRH6VqtK09rO1j8m7bGMleq1pIL0bTbnSC1uZzcWn7BbqvtVl5UZlD7QGHcU1H4GTzTs5yc0VLHqxs9UFuFOzyQW56knP8RWB8bxSTaub2IkxuB9D71v9S0tbW4ivLZoWeTDTGSTBAwMYBrLeJIvtXmraokpK4GJV656da9OunLfbn8ksuCAwoZpmY7GPWi7uKWGdopIwHXgjcCR+BoOa3dPiweKw26CzBPD2nMOotVAH0FEaJIbm7ifOcfAR+VV9ky3fh3TWY8LGF4+ZFW3hvZFebDxlsAY966MC/FKMqqu08jmsLcg4GeB0reeLW8y4ZQfhXjOKwt2Ph4wBkgVKsAMeTx0pw5HemkZOP305OnrWWkiHpxUiLlhkk802LqOn4VPGMc/SqglDtABzk0Bcsc46UcrYLMTjC4qtuHDMxzxQDTnjFBMc0VK1DEVlTOlSRkVG1KDt61A26PwqfQ1PaYSEMe9DXB3RfhSRMZpBH+yB0oD1uUzhVLe+KVpQ3SlVkjULtxUkaD77AL6ZrSHqvwfStdod3DYabaTpHuugjptcZV1OfwrGyTjovSt9pOiQ3Ok2TMXicwhvMLcEkdAK8f8AXdYxms+1lJeyiKC1VWfgPuwOOtDPp6QkxyZds4AB4rQPpp0pJJJ3Du/wx44K/Sg7d7a1kaW5lCsFLKW6Zr5+99Rm3fpVN4fvlIC2zqp5G41PZ6ddRPcWjphtmVQ9c+1PmuNS1Od5HuyExlCp44qskcrcmaO7aaaI8NnvWt76WRda3rrSLCn2URRWy+VtBy7HuaXTWjmt5NxYKRuAYYNVk0LXEiNKJWlmG4vjg1oNEhRo2jdd7KhGfX0qbmM1ErLajlpZEhkYshBwepoQy3Qba0r8jaflR2oS/Y9Y8kDeCdzfDzml3LOCQoWRjkeo+ldpdKrpZ3WbcDMnZdxOTRNvqUsUakSNuU49ePSp54A8RZ+WUZyf4VXsyRnkEe49at1eh979qxOv/wDWT8xW27VjPECk6wT7ivoV0FWf3BR46UBacKKOFIHiuOeNR/8AVF78x+QrsWa4/wCNyB4ovPmPyrOXpcWJu+pqrm6GrO7PJqrmPDViNJLXOxcda1uh3elx6Jcw3+k213Mj71MyHcR7EEHiqPwiYW1q3EyhlweD0rrunaBptzcRSPbIyL8TA9D7Gm+9LP1yS+8WJZyEWOm29oF6BTIw/e1D236VfEOnyeZaTwRv6+SG/Ot5+kfw34fCtJZ6b5EhHPlykDPyrkd7Y2tvEu20cEE5kZyVb2q+Ou7G/O2dZLXVvHOveKExrOoGaFTuVPLVRn6Cs9cXMIUjdzWr8NeG9G17SpJrhZVuI5CrBZSFA6jiluPCfhuAN/y8shBwcymueVm+zG6mo55dXKyHAPAojTWSaQAttVPXvWjudJ0iFCYdNUehZiarLkwL8MNrHFj0Famvpm2joEJlRkOea6D4V0DSdTYG/tLeQnrvA5rn+kxsyx54JbvW80ZJIgORVuPl9mOfj9NdqXgvw3HpbwpYW6o3O1TgZrn95Z2+hnNrAqBMhMnO35VoL+ZzERk/jWN1WR2yDn8ax8N+66Xlx1rxUC6dBLM5k+JmySWPJqC8sbaMbUjAx71JNkMSDg1X3DE5yTW/C79sfJNekkccMWNoTPtW20Zt2lwn2rAx4yK3Oht/2TDV1pi5bXKninhqHDYp+/NVBF++nwaQb69JaTmKOMHlyPT8RXP79bqdjIlvOgPQbdoHyrqWm2MNzaQ3MsaHyWZQzepPQe9VuvXYgRmtlgkmztDyn4E+S9/rXpncjl9uTTW9w+d0RYDj4hn99Vt1FLGCA+P8pbNX+r2t/dyPLcXfnDJOEbj6Cs9PamLPWsVqNj4anDeGIhg7o2Ix/wCo/wA6NsJfK1QzM+1A+Qo71ltF1DyNMkTPRjU0F9LcTqq8Z4rUqabzxI67nJPXkfhWKuuF3Hlj0Fa/xA3wKBgkoq5z7CsrfptiQDuSatIrB15qSMbiAKaE+PFEWybpMDHFZUqjaMnFSoPh56/KnrCSNx7dqe4VGxz71Q18CJ2OSMVUzMcemasp5oxCRjJPPNU8zlmqEMY5phFO60hFQQSDmot2KmcZoaTipVP4kZULbQxAyece9T21sYGLOCx9ulDQK8soCKSR+6reDMYxLIXPoBnH1pAwSSY/VxbfcjFRMJyfiOaOyhXIBHzFREKa0iFQQDkV18R2P2PTrAeZlraM+WeAzYHOa5ME3yogHDECuuadYtqbR3U0bIAyrb44IVRj8K8X9Ut1IzlNgde0v/lYVXd9rdv7snOF9ayeq6emZFlCyEHbwfxrceLN8FxG6zRuxHloF+8tY3UbT7PMY9rZ9+tePHj/AM9NY4wZ4f0O31mH7NOzpGqn7rbcULdeDrWxv2FnKzREcMW/HNXOiNJplqblMNtAyGFWd+qx2JunVXlnXJ54Ge2K3ldXwxddbnjGA1QBb+J0lk/UDYPi4qz0i4WOcPGrPEWC7jx8VVF8hWQ49abaPLFKu1ztz0zxXTLhljGWEvpP4ssNlwLgybJDkfDVZbRxiNJVLFxxknk1qPFUaz+H7e7Wbq+xkx7dc1i7OcRT4ONrdz2rOGNy4+vpiTpfKVdQRxkc+1Am3SeSSEsMj7uKNtIzIHjAb4h2OOKiuYo4gjxArIOGA6YrHlr2z6fcVY/xAP8AtYn5VrxWQ8RHGq4+VfTvp0TWp+AUcpqvtT8Ao5TSCSuPeOuPFF577fyrr5Ncg8fceJ7r5L+VZy9LGHujyaq5jwasLgl32qCSTwBzTP7D1a4GYtMu3B9IWrMaAWxIVSCQR3FdY/RnPcvpN/cTzvIokVEDHOABk/nXO7bwn4hKD/se7HzTFb3wxbX+h+GLqLULR7VjNvTeR8Xw+3yrWPtm+lR+kjxEljZPI2WcnaiA964xPr95cP8AHgpn7nYVtfHSDU7i3MiSNEJT5nlnJAPeqLxbGL67F2hae4KJHlI9o2ooUcAdcDk1q22kk1sbo19PZxSNbylBNFnjv/XNDwazezaxFBJL8DHB4qz8KaUmsz2enC6htZIrRjM8p+ENuOB88EUdqP6OdW0y/hu4J7S/iU5YwSfEB/pPWudnbW9QBeJJLHJtY5HQ5qusVZY3WTllbqetXtvEzXcsDoyt6EYNVc6eTqcsWOorM96W+tprdv1qZ6ZrdaWVMQGcisJCMSr35rWaQ43Fcnp3rrOmFxermIhSPqax2qR4ySxHNae8kBQjb2rMXqNMDHzxyK1tGdnxuOKrZvvHNWl1GImOearJiSelBEh5rbaCc6TF8zWJxtPNbTw9k6RH8zWKq1zS5pvakJwM1FW1i7z2bwB2AibzMA9jwfyFV17oyOrPM24jsT09Kl0uYx3wGeJFKkevcfvFGXEOJijyb58b2XsM9C3t7da78d3NOeUY3WdJSO0DK0ce48Icljj0rLXsXkRbmYnnGMGuiNo15qVy/wBhtp7yUphio+7z39B8zWf1PwFrsMP6yyC7eSA65/OmWeM91rHDK9yMC0xQsAAA3PFWOgJJd6nDCnJdwo+pofU7GW0YxzRNHIvZhWx8AabFby/bXXc6jCk9iamPdS9LfXEaS/ZRjah4z7VQalC+8ZHCjtWgvx5t7JjPfvVbfwbYyQG3MQo5z866VmKGOFiGbH7qMsLZixYoQKMjiUjZgqo7n0qYSRwwOwyG+XQYrOl2EkKxx/FxjJ4qpluPMZ26Cm3V07nqce9V7ySOTjgVNrIllnJz70MWyaURMTk807y8UU3jPWvE8UpU5pGqCJjg1AymWVUXqxxT5SSwVQSTwBVnY2Qtxvb4pD1Pp7Cnset7ZYFwoonhRmnOABmoHeqhZZAFxmhie/rUhAALNQ7PufI6UVdeFbT7d4lsYH+JPNDN/pHJ/cK7VGpW3MoUJlcIo/ZXsKwf6MdC3xXOrTLgMDbwZ/8A3b8h+NdAvBtsJdoJwhAA61xz7uxhIbee911URi0itvYtz36UzxdHjXG9MKOK1uiaP9hV55B+ulwT/lHpWb8SxifxAIyyoCwyzdBXn48PHHdWNNZ2EMsKQSqhhjjUkqPvGqrxBBDDmNfTij9Nu0l3JExZARlugOPT2qu8Qo7OG3HpXPi47L5VrDru+2Cvo8TNkYoJSEerK/Ulz61XkYNerSyvahqU02lJYcLFGxfj9o1QRjEhq0uBycVX4Ac1nGSeir7RpAYz8OXjO45/aHpRmpJvtY5E7/eG3GKH8L4aebjPwVcGyUiXgspHIPauPJx3e45WPsEcdeKxvid1GqAhgRx0pbrV7ibPmTED0HArPajcPMVEKPK27naM167VaGykyoqyQ8VQ6Z5+1d0Tj5iryINgfCaQS5rjv6QpNvia5/0r+VdiKkKSRj51xv8ASFaXd34mmNtA0qlVG4dKmSxW/o8EUvju28xVfakjKGGfiC8V2lmhKM8w2EDkrXz9aaHrdteLcQk280ZyrK2CDXRdM8S6sPDOoSaxHE32SMETJwX9iPWsyrYvL/xJp1kxEk/IOCAM1Q33jfQrpWtpIpZEPPSuazanca1f3K28TSEgysDwQoqpW7d5FRIHAYgcnjrU7WabjULjwlcZK2Vwz98SkVVfYvC7OD/Z07qfWc1XQadLJcTI08aCJsbiD8XuKmvNOmt9Gu71Jg5tsNt24BHzpIWrO1Hhyyfda6RGjdy2STU7a7ZLJiO1APYKM1hbXWLu8WVUCKy4465FFQf2i0qIrKN7BcKvOTV0m2kvtbEtxEiQRhTj4sfEKzmurHBrAlX7rUcND1Pz1ldXOGyRjrXtc0u8vGQw2czEfeOKxrvpv67VCXEQYHdjHNXlveAIrxkc+9U/9iX7MF+zsufWik0PUraIs6YVeevSurmsZtTfkZINVU9+Wc4JzVfPNIGOdwxQrXZBJzzV2JbqdXU5BLetBFlBqJ7lQSSaEmvF/Z5ptBdxIu8BeTW00pVtNLgjZl3EZIzWL0+Hc6TykHuEq+EksqdNo9qzasjRefHjhh+NMMqHjcKpUMwG0DAoiNJCOnNTarOOcQyK4YZUg0N4i8V2dnq7WFtMGnlcK0nVY92Mk5/aqJLKZuTwKy3irRbm5vlvLWB5k8oLMUGSCvGcem3H4VrDL3Ev6+sNA0+yttEhtLOMJGq9urHuSe5PrVJr9gArjbzWV/Qx44fVtKXTL/et/ZKE3OCBKnQMD6jofx710jXbcTWrTAZGOa82WOuq92GXe56fOXjvSw0MrbPiXLKfQ0H4fu400xV3hRitt4m06a7jlKwMcc4x1rjd1Jd2VzLZRf8A224x6dRXb+fPrTj/AE4d7bOTUbSKRme45LZwBVdd6/A7cN64yelZCRLlm/WuefU4pVsmPUGvT5beXS//ALaQvkMGHbmvHUllUhiCDVMtiR+zUyWyryxxioCpgr8jpUGwFuKczRRxH9YPbmhTdAH71NqK28U1hk0N9vGRmnreRt944psefOTUJZh1qfcsrBYzvZjhVUZJPoB3ro/g39HzWxTUdYjHmjmKBuRH7t7+3b51zzzmMbwwud1FN4S8BS36G91LzLdW/uowAGx6nPSjtb8E3GnxNNYSfao15KEYkHyx1+lb26uY7dSqkADvVHeawqZ+KvLObPe3u+DDx05ezE47t71EASeuTVlr8kZu2uFAG8/Fj19aqJLiNogsLZz1Ne3HKZTb5+WHjdI7iUFto5Aqw8PaLca/rMNjB8Jc5d8ZEajqx/rriqsDPauweB9Ek8PaOZpIh9suwGkz1Reqp/E+/wAqW6RrrKyg0+wgs7ZNkECBEHsP4nqalxQC6jIz4KgU2bUjBFvK5wcVzNLLGBWD8TKJNdkjOOmf3Vqk1MyHhcVk/FUbi9W8xlXGDjtWbWp1Vt4dtnkgwuBUOuQyCbYT0FV2i+I1s/hLbQeORTtT12O4lB3hiO+KzuumpYzN8p3N1zVYck4q0vLpHzuYdar2eLGcitbY0CnXGar2HJqznkQsSOlV0rgE02aaDwkm6S4PsBWiIKnis14ZultYJ3bq5GKuW1WM9RWmH0tbeGQSGuJDIfTtVvBpcEC4SNR9KnmvreDgvub0Xmq261iQgrEoQep5Na6gsXSGBd0hVAO5qrudct4jtgjMp9cYFV0zmc7nkLsfU9KfHbqeWx+NZtXQW7vry7yHfYh/ZXiqifTDNJkk1fTeVCpyB8yar7h/MBOdijuTxWe611FW2lW8S5ZlZqg1bSn1Dw0NLs2Ect/LyzdAq8k1DqGqxwsUt4JLyRThtvAFVnjHxVd+GdV0gWkaF44N8sbjIIbtnsfenjr2W7A6L4Jv/Dbaxc6isTx/ZcRuhzkk8/LoKy+m2fna5aRgDBnXj1AOTXT7jxJH4i/R7PqVtG8IkbyXWQZ2nPxc9x71gvCKKPEMDzgsI1kkwBk5x/vWmW2ezRicxoAfQVWazZRy6NfWykbpIWAUewq+iVr0Esy2yZwRnLf7UUdPtIbZ1jCElTknkmlppxKz0e2tbO1uoAWMqAuxOfmKN+KC53oBmNg4x7c1nru5n0jWbq1jkZYo5mBTtjNX8ke9w5kKo6Af71mtR1a3tlvII54kwsihwT781KdJZ/hwo9cUB4Y1m3HhGzEkm+eMGHYvLMQeP3Yo/FzqIzJIIIv/AMaNz9TWO/poDcaXaw5WIiaf0B4HzNCS+H/tJBn/AFn+QHC1eR20UQCrtApk0iIpCHBrXadMvceEbCaTDRhXPYGq6f8AR5pspO4yAn0PFam4uYLZt8hy+ORmqC88QysxSLKr/lH8a9OHBnl/xxy5cYqX/RhpPJknlA+eKr7jwDoVrkt5x92KqP8A9iKsW1L4yZZO37T5/KhLnVLcIcLGT3wn8q9M/mxnuuF5rfUADSNItjiOFpMcYE6E/uqX7Ro9syiezuY19SRg/InAqrvdXglyuyH5EEH94NUkl2gbMLPEfRPgP7uD9RUvFhPpqZ5VtxquhKnAMOehlXGfr9399Q3F7ABvgu0iXszWwdfxU1h/trh8MN4P7aDY31xwab5/ltvjYo3+OI7D9V6H8BUmOH4by/WxbUNRKAxvpt9GD0XdHn65xVhZ+LoLFk+3aU1m4+6+N8efXIrBC7wfNY/F086H4W+q0RHrVwiZd/PiP7SdfqKeOH4u8m6k1uaWVL6y1PdNGd6F/iXP09eldb8O+LrXXtAiuBgM3wSRg5KOOo/rsRXzTHcxOxmt28pz1aPgH5jpV94a8VPoV+/n5+zTACUx9PZsdiP3iuPNh5Tc9u3Dn43V9PpBbHTZlM00SNkYOfSvQxabZRE2VhawKB1SFV/eBmub2Hjm1uYQEuBIAODnqK09v4itp7ER71O4eteDy099wtVniPxRpRuRDNbwzJyHXyQd349qzyW/ge6lBTw5Ygs2G+EjPyAOKsdW8KWWqxyTBmiY87UYjPt1rmOseBNatpGmsbiaBi20x+Ydh9NrDPPzH1pjbv23lMddTboviDQfAlr4fmWz8Pwzag6kJsdgUzwDwfrzXNLX9GV5dW/mzavbxnoUETswPv0FUUdv4t0bUvOEWopOvwklWdWHoeoIrV6Rf+LdRfY2lCEDrJKWiH4HJNdLcse5XPGced1ZUll+iHT3mVb3xGW55WC3wfllm/hVv/8Axz4Ot7naYr6ZAMfFdfe9+AK9DYatdagLOCezlugpdowCcAepzxV89jHpVvi4lR5z1C9BXK8mV+3b4OOfSiuf0d+Dp4yIrW5gb1W5Y/nmh9I/Rx4ZtL+SS5aS+QgBIbnOxeeSdhUk46dh70Y18BKdpwKifUViJYvk1PPKfZOHC/QvR/COg+GdTku7ZPMdiXRn+Iqp/ZXPTHT1PrROp+IQThAEXsAazWo6+wK+W2FVNrH/ADEk/lWV1TXgqnL5JpJcr2ZXHjjQajrmXOG/fWY1LX0Ukb8t6Cqae7urkZLCCM9CxwTSW+lSXB/VxyyZ7hMD8TXpw4K8fJ/R+Bbu+lum5OB6UPE7RPx0PUVq7bwjPIu6RFUf5n/kKnHg6HHM6Bv8rE16Zw5fTyXkl9qK0nMMkd1HjfEQ6g+oOa7laBdTs4LyFyUuEEi/UZrk58HXgb/l7iNx6MrD8hXSvB91DpXh+zsb9nSe3BUsEJXG44wfkaxnx5fizOX7WD2jITktkVBLbvIUTPVhx3NXbS2138UMqyA9dpobyEF9CV+9k/lXD/66K/7H8ZOGBqG5sRKjRyZZWHSr+Pb5h3YNRz2+85QD8al1tdOb3/hu68xjZjcn+HPNVM2j6ogO+1mOO4Ga62mmIGGQpPc4qQwRxZwhYegqXL8WRwq4jvFcq0E3w8fcNBPNOpOIZf8A2GuyX8cTXrGP4VODgjrQL28TnHwD221uM1yF5bl+kLj/ANJp1vayyvulR/liur/2bbyMQYlLD0FRNp9ujEeWh9PhqowSo8bRkJgH4cUWIZT1WtU1jCMgxr1z0q0g06OeHeI1weRipR3MxE9FxSNBEB8QJPtT576CFjGCZJP8CDc3+1Vd1ez+Ykc0qWQl4UA5dvr0FUETzQW4HmFY89B1J+lRGaSRT5UflqejSdfoKGWS0tWyq5dl3eYxzn5saAvb7zbcs878/swqcitTFB5nt4iXdvNccEk5/wBhQV7eLcQkRuQrnHwr0HvQcbrDKXeOVgP8bDH4d6mZrm6kBhtii4w244GPUVqSQVhgRZV3OiYIfGevNZzxj4b1bxB4gnv0lgjt2UKm9jlQBW3jsIoF8xlEp6bsg1HcSxFjEwLnHCgdKtmxn5bSXw/+inT9Pl2maSV3fYchjk1kdJvrmy1SS4t7fzT5W08/dyf9q6BrenPrllbQSSPbQ2oJTZgsc9z8qzqeEhbDfBf3iCQjc2Au4j2IzWZOw6PxeUfbNanI53Gvf8aBGbCc/wCNj2qMeFVe5bZPcyAjByKl/wCAoXRWE3GefQVsYvU9P0vV72a9le4jlnfc2zoD7CprhYxZRJG7OiDblhz9a2jeFbC3TEkoeRevOMelM/4YVk3hQqAFQc9axcdrLpi7bWbvTQEtZcKx3FduckVaR+Lb8LyCzNz0xWhj8LRodythFOAQuTXpdDtrXdJKFaQ8hfT2+ftSY6S1nf8AiO+uZVZ1ZQDxkkD91ayCV7OwWW7IFw65x/gHp8/Wmw6eg2XTRBI4+SjAAkj+hWZ8RatI7tzzXq4MJ/tXDlyv+sN1bWkeU7pzHEOrCs9deJtEj4W1uLth3lmKg/Raq7xzOdrseTVfLaWcAzLcMT12ouT+Ndcs79MTGLY+Mggxb6fawD/EE3EfVs1UanrV3qRBae4CjtG21aEeSMnFvBj/ADudx/lShdq75D9T/CsXK3pqSRF58oA8yaTb28xixpwgkkPUIp6Fsgj5DrT0iBbecp7nlv8AaioZI4GyiDPqeTWZGiR6DqFxF5sbKqjrI/wKfxomDw7qrpkJbv7iYAN8s4py6g7MGkYuR90HoKm/tNi2WYmtaxZ3UDeH9WAydPc/+Wyt+RqvuLSe2k/WwyW7HrvQrn8auhq7qc7+R09qni8QSxg5ZZMjGJBuH4HimobrOBSpDqdr/wCIGmvct0cFW/xKOK0KW1hqpUfZxa4OXmWQIPwxiq+50i2jumig1WKbP3cxn8Mjilxv0sqqW8ntzvt5Njj9nsfpV9o3jl7ZhHdhth7g8D+Iqsm0PUo8sts8yj9qMbv96p7hDFIyOpRweVYYP4V5uTimXuO/Hy5Y+q7hpfjBLy1jignZyzgLnGDntn+dXhe8RCY7+xkdeCnmNkH0ziuG+E9fstBa7a6shcPMqqkhUMYwM5AB9eOfatJB4k0O5m3m7ktN3ODkc14c+Oy9PqcXLjlj/l7dSntNXkgDeZYHHOTcdPflarrjT7OLm91uaQg5ZLYBAfbccn8qyH9swlWFprCygr0LZxVTc6xZwAvNqSux7A7j+FY8a6+cn26OfE1tbIYNPijt4hwAgwfqe/1rLX2syXEkjFuM9SetYxfE0LzFLe2upwep4H8aH1HUNVljLW9iYo/XO5q14VzvLhrcaC61YQDJk5qivPE67isbbm9uaz8MV/q96ltDHPd3MhwsSKWYn2ArsHgn9Akkjx3/AItkEMA+IWMTfG3+th90ew59xXSccnt57/Rll1jHMbvW/MsYrdf75naSU7889FXHsM/jUdrYyTN5kmRnueT/ACFfWUWg+FrCwEUOmWMFsgwEWBMfvHP1rMa74O8HX2nyGwsIoJlJZmgYoVP5fuxXTjzwxvccs8M+T7cRtNPs7dRNKBknALfEzH0Hc1arOykJHF5JI+FSu+Q++0cKPcmjW8IXFjY3F+mpQTukmx92fNVOxxjAHsPr6U6wsYTCf1hYNzwRz7knr9ePavpcWWOf+rwcuGXH/tEETtMVDs7M33QF3s3y7fUDHvVjHYTHDFEix3kbe34DgfjR6i3sLB7iGKWYkZO0bmkPzPX8qr21OUoJLi3ktI8bmaVsBfb3Pyr0ak9vPu1MVdBg3BPyQCoS55Hms3zHWq467ay5JcjPvTk1K1bnziPpU3F1RyzSRtuRsMOhyRR0Hiaa2lR51EwTIwTyc+9Uc2oW/wCxLuPuKqrm9BzzxXLkmOXtvDc9Ok23iKwuivkrLvP3lC5K1YC/tcYaUgE4wRiuOw6rJbzCSNyrKcgjtWz0vWP7agUKEWWMgyL/AIh6ivDnxSenqxzv210Wp2qsP13wnpxU51Sz3FTMu75etUMpkt7YAsPMIyFxxj0pqxztZKzqucEjPf0zXL4435PaleWz3SyruGOOnXBqKForgb1lX1IPBFRsJZA1u0AYgblYMBmoYSsTmJoliJyNzNk5rfjIm1iESKFn3d/hf3qNnhmyxkjGCCeeKGmMTAea2do5ye/pimwvC6mKJ1jUjHK9TU8IbEl7S8kMm+JBnG1WxT4JLS3SSNmGA2Rhuee341StGXuNh2bWOAB60YBIiAPEqgjrkfWnhDbrU+qJFFssETa37XQKffuaCnvnuoPMRZHZOMAgA89eaikd2STyomRtuMuQFz65PNNgtGkUmaQlXAwpIxknt7V00yFmuvMEbiVEU53BjkH1FTWw3lSGkbIzjaVAHTOTRscaISGlijQcDCc9etekjsWbbKwPIKgjqRz/AEKCG3jYeaHQSshz8RGPnTDPdPG7ebEjRrtCdFI6n6+9TyTwmcwQIGYkBwH+6PlUUumt9oYu7ynsCAVB9QP96CONQyES/rOSE2nGalSVIo1CQFi67squSR7V4x7oAXcRPn4iRkn2zUgmgVGSOPMuMgZPJPofpQQoWZ9gcoAfTlR6VOI1Clm2yPjALHgH501UlDGRdsXo20YqGfU44FKKVx16DFbmFrNzkFGKNFCzKQx4Kjnj1odrxZYtttD5rK+AM7QB3JNUVzq8rk+XIcNnpQ8Wp6kG2xsrg/4hkCt/FWPljQzRRbiWVpSTwAchaRpbiSBjEoj4wodT0qstJGVg0++Uqdw/WECirm98yMLGoQA5O74vmKz8eTU5MTvuTvsTJxtfAxs+eaS5WFCmSZpGPGVyB/XFDfaJN2ZG8xD0XHGKKS8ijKkxsQByA3enx5fh54/quvDI0Mx8hxtGHlYcfIe1YLXwI85bJNdLub+K5t3hCsAy7f3Vx/xRcOl+6E8A4r0ce8cdVxz1lluKiVviyKBmAc80rTk981C75rnW4f5kcI4Xe3p2qLJeTzJTubsOwphPNNLfM1lUxfNeDVBvr2802ogv70nm470OWNJyamwR5vvSeaQfWoQhJqRY8cnmqiYTSSgKWJX/AA1Y2jWdniW6BcjkRKcZPuaq/NdRhB9aRLeWVhnJJrUuk1tdPr95f3Mf3YoIj8MaDCj+dTNqInjMdxapdISTiTnP4jgVXRWbxjmMnHXAzRdnA084UoVDELz2HerctTdJju6jTaH+jHSfEGmG9me4053wYlgIZce4bP50Dqn6GtQgy2n6lDcr2WVCh/EZFdE0qdIbGKJOigAVcQXKMwycZr5N5crdvqzgx1qvny5/R34ntXOdMMuO8Tq38c0+z8AeIZJV+0adLbxHqWIyfkM19LQNa4DFQSKgvTFLlQihT+40+XLSThx25VovgX4E3KqIP2RyTj1Nay08GxygIyBU+VaS3htbG3M08i7uuKRNUSYhgdkfYetc979u2teheg+GdI8P73sLOKOeX+9lC/G3zPWk13XorZTH5oTH7R/gKz2reLprctDZKWboSOax9zLc6nIzXU7ZB5SPt82PT6ZNejDizz9Rwzzw4+8qK1rxjeyxtbWQ3E/tSck/IDpQOj6n4ngSfzZITFcABkkBU8dGHv8ATmp4TDbJtiRU9cdfqeppj3IHevdh/FJ/tXiz/tyt/wAYEn0aa6uXnudSYB1KlIVK8H1Of4UUtjYwaeLWOMhAuMkksfmaga8xxnmh5b0c8/QV68OPDj/1jy58mfJ/tR8t2GjWN3dXQYBB4NUGr2UF6SZsxSf/AJU7/MdKW4vQer4Ht1oJr04I6/M1cspemZFPPo11FKdkizRjupwfqKIttKuJMctz+6iXKyKCpwRQk5uUBAmcKe26uPUdOxNzbRWKYaXdIR0BqvkmJHWoiSGy7Emo2fcaza1I8ZDnrR+j6o+m6lDcKxwjfEPVe4/CquQ4piyYNc2na74CbZIAWj2gjHA/o5ryxPDAJ2C5yAAehqLSx5ug2IdpCWgTeB649DSy3asvksko8vBOSPiwcDpXJ1JeedFJFcJEdrknYCARx3qKSyFxN532c4C8Zxye9FNNHd2ys10myMlsL1PPORTLYxbJGV3YRZYIFwXJGDighhxMvxxIrHqh5P0NQG3P2kTclW4AGRt9vSkVf10uCFDfEDt5z6EZznvxTY5/OlDM+ULEeWOOB6//ADQS3VltZJAyBoTyD06daSFvP+FXRXc52/4SPX50ZDdJOrxBRsIwCAMAiq+byIJZmwS7YXoQQPrQdLbUYx5qiOMgDnvg/Ieh6+nWq6fUtRkURQxxJuztznkDsABnP9ZqKC4tFedI7tLhoHKyBQu4Ej7pyccc5PtVxbvFbsIIrUgbMtI3PyHvRAsGnpLsM0szBxhlXpnryaPhtlckLL5aKxZstjcD60hlG5/NnBeM5PIBPcfKoo7pbYKGR5SFyz8bDk+vfA9qCSMRW6/qYW+L4y7sACSef6xQ8tqlzF516wilII2wzucE+hyPx9q9HfSysW3FIuCoK5D/AOkj+VSw20smJ71FijzvC/EGY47g/dqybS3XsxLZGkkMSiUnO9d55bpz1xxjrUhWG2RPNij8wDlV5UfM9zTbrULeCFlg2gf5eSfr361nby/muGbY5GOBtJOR2rtjhPtxyzt9D7/Vg5Kq5JAxgcD5VSSySTSgnIB569OKfHG8uNzbc9AfSrCC1VQWwDnn4cflXWXTlQdvaNJyw47AdD9aPSFEABCkgdulS8KMZAAOemaYZOODtB4HT+u1XYY427i3xew/nUefiycZz34A7VIeuMcnt7U0n4u+ScYA7/Omw4MDwoH44qNy3OBxkdQPxrxf4SM5HUDbgUhIPqev7OP67UEag7gT8WOPlWA/SFYiC9iuANsc4+923DqD6HvW+y3GSo5x05oTU9Ot9WsHsruMPDJ1GcFT2IPY09kunEXUqaizWn1bwPrOlOzW0TX9qOQ0YywHuvXPyrMuUEhRg0Mi8FXGMfyrlXWGMcd6YWz716RG9QRUXIrNaiUHmlqEvitV4U8E3PiG2a/ubgWOnKxUSsu5pCOoUe3cnisZZTGbreOFzuozoxXgV3ckfjXS7T9H/h1L5Gn1G6nhAz5Z2ruPzHOK1UdvoVtCIbO0hjRRgYUVwv8ARjPT04/zZfbhwlj6Aj8af5qHg8CuwSaZpV8Ss1jbyL6mNcj64quufAWhT8pb+Wf8jEUn9M+4l/lv65kJ4x0wacNTKD4FA963Mv6OdOJwk06D035/Oq64/Ro0YJhvXYHswBrX/oxZ/wDPmza6lNtHxD3q80qaS6jMzEEKcD+NCv4H1ES7I5EcHvgitFo/gy7gtVjnmdcdl4rHLzy46lb4eHLHLdi202/IjAZulWaakUcYYEfOq6LwaSRtvZlPoGH8q0Wj+BbNnVrqSaYDs0hwfwxXhfR3J7C/26V+HdyegB5ogLrt+i/ZLG4YHozLsH4nFb7TNH0nTIx9ntIYj6qoz+PWrH7XbIOgPzrUw/XO8s+o47PNdRXMkN/OhaFyjIrZGR1GaBvNbZpPKSRgigk7TjAHPT+dL47tpLbxheiOQ+TcEXKYGOW6jPsQayc8gt3cvMqOybSM7mAJ5wB/Gvs8PHx44yyPkcvLyZWy1ax6jDLISxKZwSCSM/hRHmllzG4C54GazRXzRhBsUDjd1PvQn2y9tTiOTeBXo89PN4tJPePGcupA96Cl1PPeqZtWmc/rV3evNDNc+Ycn4T6Cs3P8amK2k1Ak/eoZ77OeTVcXOeuaZuNYuVa0Na6J9DURuCeooUHnmnK3PWsqJWQjmmzXBYcmoWkAHUULLNk1LRI8hOaaHAPvQ7S1G0tZ20mkkyadaRfaL2KHP944U/U0GXJPWj9HJfV7cKPuuHY+gHNZ2rrKagYkVEhRABhcZyOMdflUTXY2FPJUkkMWLE/uqkN+T1NJ9tI6VvWLHlkvo9Qjt1wtuoVR8Kq2BzUC3wjmYsssgZQq5kztPtxVP9s7c88/WvfassMnk08cTyyXTX0RALRkuOh4AHpxjrUMc6o8gj3ojLgAtuOfy/dVYbngZIH8K99oBJ+LHFXxxPLJZC+uBIhyu1ByMkZ96fLe21zHm7ti8w6OnGew689KqfPB9/lXvN96eOJ55OxGS1tFUopuIy+BhUVVB+Z7c+tRNrMW1FDoN7YCsw3MfRR3P7qbDFGbKR/tKEQrtDIwCjvz16cDPzNQJbRySRiLfLNghCoyjZzjHY+uRj6VwdhNvIzy+ayH4F5TG5i2fc8YyOPepYdMF2PM2RRpId7SLyrDnAB7mibaxjsxJLceU0j4yqLgZxzuOTnkn/em3erxR5RXAwvCDg49R7VqY7Yuf4nL21kysoBfGAzAcD0FU2oa3JID5WcggZwcn1HHWq+8u3lblnMJ5PUYx15/lQeyYk7ZG8knkN1HzrtJI5W2nySid9x37uuWAwCPapreA7viGQp49Pp3qW2tNzndk9iOhyTnv9KsI4u4z6nC/wBYps0ijjKkclvnz25x+Ap5YHOBg9Tx1zUjAnGNpOM8Hqef31Cd2cfEo46844oaNZ2JLZ5J/a/2ppDEncGY+oHP9c08BgCoA3Y4GP5/OmsmCcbsBvl+NXaEbgMPi2nt2+tR5BJ5PUnAPT8OtPZH6DLL04HX+uaiJ6ANg989f3UHjvLDjA6Zxz2z7U0ZPqfYg05gxznODnkL8qaW9C/uOo+la2mjWbGQS2MDqMEZrxJHGcH0/r50j8AkbuB659qY+QhOTt7nA4omji56AgnPTrQl3Y2V46yXllBcMvIaSMMfxNOknK8A4Gev9fOgry9lAIBIy2SW6f1/XyVQ154c0C/yJtNhH+aMeW3zyuOKy2p+ANMTL2mrPb56JMokH4jB/dVhfX91Co2ybW5OT/XWszeS3M5y0jnjGN39f1+7Fam1JqmjT6eCRcW9wvZo2IJ+hrqer6nZWvhnSdPt1ZY4rSPbGAVJJUEk/XNc1RJILqKcr5nlurBX5DYOcGtNf+L5Lu4a4cwjflgGySuT0rx8+NutPf8AzZTHe68J9SlRXSBwoHVjii7W7nt0PmMvPbrWeuteMoy9zu/yqdoqsOu5Y4J+hNeaYPReXToNtrCRDkgeuKPi1+HGWbpziuW/22c5+M/Q1IuvEdVf/wBpq/HUnNHVE1ZZ1B3KPapft4VQFbPzrl8XiNVPxFgPkaOXxQmAAwHuaxeKtzmxdFj1eAN+tjxjvRw1i2YAJgZrl7+JrdV5mz7AZpIfEds7ZLsoH0qfFWvmxdVj1OIHO4GjItfSPAVh8s1yT/iW3A/vT/7qUeMrWLAMq8e9X46ny4/bsJ8R5ThuagOvknG6uWJ4ztSP+8KPbNSr4vt85E6Z/wBVPHI88Gq8YP8AbrSK63FTEdjkddp/3/OsfBF5pbyYcRj26n19Salk8VwSoY3lV0fgjOeKW71q3tAUBBI/w19P+W24ay+nzf6ZPLeP2i+wy5ywyf2h6VGbeED4yMeg71U3WuNPOWaQxx9kWgZtVd3yHOB616LlHn1V29vbOeAD744oWaC3QZBHNUz6tION+aFk1B371zucamNWszxD7vNQFx7VWrcknLH6UpuCT2rPkviNZxTDLihDcGozMT3qeS6FtIT3qBjzyahMhPek3E1m5NSJCw6UxmqSO1klGSyr6Z5om20sGQGdwU9F71na6BxrJNIEiQs56AVpNIsRYRFnIaZ/vH09q9bpDbgiFAme4HWiAynoaIIL89M17eQahDH1P414MOaqJy/9Zr3mHFRBu9KDVRL5pHbBrwkJHBqLHNO74PJoJQ546V7zG7Goxxx60uDiqjsE+raVZHF/qUVqinILv+sf5Jz8s4r0HjzwvboUttRgiz1YoQX9ydtZS6/Rzoupu8wubpJHcgqlyHJb05/H+NUj/okiEzuuo3McGQA4Ab55OR0/CsyyN2WuhyeIbXUC32O7ilycny3BzUASWSZfMRlI7k5yMd6xI/RjHBK+dWnQHiPgMAe2T1OeOg71ZW3hHxDai4S18SXUaw8JHsbdn3BOMfIfIV0mUY8K2Ntp5Bb9X8JPBDdvSivsCL8WNoOQSRx27Vkhp3ja3RHHii3lRufigBb8ADmrIp4pMgEPiG2fdjHm2Kgse4GD9ankeNaQQKvRMcnIBznivGPAAx/l4PT61jGuvHymXEulvHHuG7y8ZI6Dtgmoftv6QiGM1tpMYUnk85PpwevanlF8a2jLnuxznjt3qIxHIwSeARishbaj42kYLNaaPG2CfiZskDqeDRsN74sn62OkkFCV/WSDJGBjHUd+f9qvlE8avTFwAdzA846dqa20gg53dTgkHp/vWafV/F27C+GbVgWIyt1x/XOflUK694nS42SeFtgXksbnCAfPGBnH76u4njWsEeMFUyAc9fw/hTDE4GACw6AFv69azUnifW7eAvJ4VkZVUPuiuQ2QfTjk/lSL4w1CZGI8JakQmNwDjPIz6fLpV2mqvztbgjPybpml2MwJG48DG31rPr4quijSN4Y1YRAEFlUHGPpUUvjyzhjaS40fVIFB2EtEOvXHXj+vrdxNVonQ7CSRzxkd++P6/wDmJ4XcHDggnjB9Dz/X9CgXx5ptySyWWpkZAytvkfuP7v8A5qQ+M9KTBaG9RmPwg2x57Z49+3+2G4aq2a1ZMliDz0HQ/wBf17CPaNvycfePWgD440AuVa4aNs4IaFhj6f1/JX8XaFtU/bVj3fECYmHHPXjB/r3q7TRlzYb8YwD0xt6cfvPWq6bReMkjJ44H9f19MWI8T6GjbTqCK2MjKsOoz6f1+fjr+jSx/DqEA4x1xn939fldxGfm0POcdPljNBzaCXySuR71pm1TSSMi+gYn/OBn+v6705LjT3X/AL3Acesi/wBf186WSrMqxj+HgMny14qP+w9oP6occVt9+ncE3UPrw45/r+ulIY7RzuW4i45+8P6/r5VnwjXnWMGjEc+WMDil/sg44UdcVs1soWBbzFwPQj+v69xTfsUXJ3AAD1H9d/y9aeET5GQGjkjhflUg0fjoea1x08BRhegxx+P8v3U0WSlclcDpzxn+v66VfCHmyg0g4Hr7Uo0gnuK1DWgCF9vHr0/r/f2pEtFzz8PGfi7/ANfzp4Q86zQ0RSMt0r39hQk8qD9M1qTbAE8YyM8/1/WDTTbFCcgcduuPb8/wFPCHnWYbw3bMOVBBqKTwlZv0XHfp/X9ZrWm325BCkAYwB+78/wARTlgZdykq4zgdeT/X508IvnWHl8GW+MoxAPt0/rmgtU0W6sYhKpMyAAHAJI/rj8a6N9nIUrwQTjLfTn8v30O8GcA54PXv/XP/AOtJxz6Tzcik+0N0ib8KZ5Vyf2CK69/Z0LLhowW7grnPc/kRUUmi24JxaDkn4SvbPH5fvrN4rftfkcj+z3HdTTvs8+PuV1U6FZsdnkKCeMY/r1FQPoNk2MwBSecDj0/3/Cp8C/K5ebecdVNe8qb/AAmujP4ZtmP3SnGeT/XoagfwxAAcMwPPXoev8qz8NPlYDy5fQ/hSeVL71uJPDIB+GT8R/XrQreHpB90g59vl/Op8VX5GR8p+9OWNvStM2hzj9gGoW0qVDjy+ntT4l+RURMwx86OilO3nPH8qnOnyA8oRT1tCvBU08DzKj5qdScdaSOHb1FEKlPGnkavI9c04JnjJzjHWpVUDk0/aPSpo2hAI4/ClEfOSO1EKFpwxjpTRtAF6DBp3lkdqnAGMe1LkEDiro2hCcdKUrxUoA9KRh8qI6xD5luhjMcbs5LM0kIj2ccnA+8Pb8adE807+VdXkSL/g8vJx2weOPYA0+KKSVVlYzKWIO0cjPsD0oaFLXRnSO0hmunLs0jq+74m6scn/AOKw6rk2kJVtpjYzgHAJLAH1/wAP9d6D+0JawNa2/kRyqoXaCepPr1NV11rqxSvFJ5kDHAjYxbkzj1Hp6moY5zqe8wzAlm27iOSR1ZSw9KAn7UIi9sFZ2J2hRt24xyO34H6UkF5FD5Vy1o+U3Kn3UOwdgCcdv9qji0xV8xLePZCuVZpJC5JHOWGeRz04qxt4TNAIyDlMFpHXB+Qx0GO3pQKbqSdtrxOznjyR/wDaB/xcYyM9M1LNFb2iG3ObieVSwh6nB6nntxQ5vLc6fKLK4gVGJDypkDr1B/xZPSlhtXEe+2mQyIu3zWfJY9wfb8M49KmlNe7fAjlGwqOqKfiOegPZqS2t7mSJnu4kA3bxlwMe3HOfX86MjtILK0WcyBVjTI+6oJJycDoM+tVF1qsss7LZ3MEMarlxs3NyeuQfXsKqCzdW6SJEjzM8IaREWE7F6/eI4IHbnvTrgfaQELOrhRiVYwMtj9g+3biqRZxp5uWuLkPdKdwEpwrE8DJ6/Tt9ak2yieCW71KZiw2rBDxywxyw5PcDpTSnTSxPNBlxNIZOjqxY7TjAOMAe/fFWsNsJLkBZ2aSJc+UuBGPTPGce3H1pgvLcXMtuLjDQYjkwMCL4c4zjk1Uz3l3qcq2Wj3EkdqhIlnMW4ufnkEAURoGlsY18hZmdi5Dleg9cZ7Z+nJqOJIWAMm1mLH4g2dvooH4cfP1qltdMtbCYW8QbIG4AM24nqeScH1J6CrE3kVjZRyXBSHYUCIG5JPXPtRRzRBUL3BaLqyxDAx7nHbn86CeM3JWTEVraxHJLLlpM98ehNRqxurvzbmVZgF2IR8LjPPAHrxgde9SGW2j3TTzNGB8IbzOIwPf6cnqagHhjsLcAy2tu85JKGO34zngHPOT6gUSuj2kL5u4obi8kPAKbwgx1UN+yBUcurRLIpWTzPMTzFlWQDeB2HHA9SKrdR1W6McamREaU4fru2+3HAxzVRNfaZbCRprqKOcAbVZIQXb93T50HP4Y064AnuLCBE/vCrIF4xjsPl9c1Jp04vhHcMshwCkZlUqZMnGcDovp7Cpt7eW5Kyq0uVDI5cNk9SD07Y9KAW28M6fOTDDpsIRx8aYAOB2zngngn0Fem8J6XLchW0+AfDtAJwcY5J6YwOmKtDPHZwBWulVs7cIc789jkfPgcVLbFr3MaWjj4eWeTjAPY9unSgyc3hPRJFkEdgjRhyvmJvJJ7457fhSSeCNJlJ8izmXGASjNwTx0zz9Kv9SKvKiMIywOzZFkkD0z6nPUdq8qRW1tNcNA8kRYuF3hBu+7+AxVFIfBGiqDmC4ySAAkpY/XHQfjQc3g7TIpBGTLC7jKh5Tx8uOa05uJZIIphEI42PwIjZXpwc/Oq6SK4a7jlYIHKbCzBt6DuAOnPrU3TUUj+G9JhBd7y92Dhfj4c/wAqJfw3psVqIla48wgssombdjvz0PFWC6NYTyqktsZRFnc4yFc56de34Udc2MRnjuJYZEEG0oC67QM/eHfHsPXFN01GeHhmCO12Nqd3FI5JLGcvt79B1GPzqeHwp9ouVSLVb9Qi5cl8lx6gY4HP76vyNmXGZXOQGWMrhf8AN781GYXRCuAEHDt97f7etPKnjFEPDdwt5lda1Boj1U8Nx15I5/CmTeG9UiZZRr0v2diWwyjdjr16dutWwnvHuxGEUGY5Ylc7Fwf2j+XrSmJ57mKIhdifEwCgLtHTp3Jq+WSeMZqPRtdeHzYdbiMe4BVKZOeMfw/Cp4NK1twSmsQgIpYsYTjjjrj2rU3VlJ9ogghCCXGQFXpnnr+GaZdxOZ1SSOMmQ4BRiwAXrznHY9KeeX6eGLNHS9eaEyrqNrt2gsTCVPPAxkck80NJp/ieOZkhlspgH2E9PmenzrUW8oWOaNITvRemBkN8z8q9bJOYXjkFuZJMMpPOCfYD4ifnV88v08Mfxm1tvEcSxmWS2RyeQImIA9c9O376ZL/xPGF8u2t5wTj4WAII7nnHYVd3M6S6lLEZJFkUCMZUtuGMkkDgdKR9SgQMBIqy+WuPgwAw5JA9en4U+TL9T48VG0viNTj7DbIVUvhn5wO/B/rAp8kWum2kla2szGh2nbI2c4zj99aO2njktZPLlR5bh95DJjcByQD3GeeKSdIZ7JYYPKR2Jbazkcn/AOO9X5ck+LFmIZNcl2k6PHsf4gTL8Pyz9aibUdUMjINCld1JY7Tkdf31qzaRjy44LljbyK7MUkzzx24xQ4BtreI7w1sFw5MZYjPTJzV+XJPixZ+1utSuZQF0K5UgbiWO0cYPce376897dRxjdpFyQCv3cE9BjP4VrZgYNJa+J2h0Hlxq2AoPHJxwSBVNYam11fCGGGcneN5IPTHXAq/LkfFipF1B5CVTS70sDtOEzg/wpZboRw+ZNY3KIWKghQcHnjg8da1f2Zry+ZYg7IVbMeQCPiwGPcinXlhd25ChYgqyBdqjgjOPxqfLkfFGMkvrQqG+zXIDZxmLr64oYanp7Nx5hz3C5rfX9uuyGCGTBVXJZxuIycY/+aqlgjWyuUC+YAwUfDgdOuMcjir8tPijLjUNNY/ebr3Q04XenE4EhJHJwp4Fa1IcxedLDEqs3DYDDBHqOf5VDeQW9oUt4Y7UoXG5UYBGzz8R+dT5Nnxst9r009Jsf+k037Vp2eLlPrWqfRCskmYYTEyiQLHj4iDwPfHNQXGh+a+RpsZ3PjDAZbv9PpU818GfFzYHpdp+NeE9oTgXUf8A7q0V74aQMjNp9uwlBJKY+E46c0Pc6Dp8iRp9jVWB+LYuD0/jU8zwqo8y3wP+ZjP/AKq9uhz/AH8Z/wDWKI/4csJZIW8kIZDgKz4z+HH0FHHwxZBXUWsZ3HGdpXp3HoKeUPCqndGcAOn/ALhXsr2Zf/dRP/C1o8bOVKqDtBQtgj15r1x4d02ONYmYx7RksrcnPvTzh4V1OPVkCv5ccmQAcEnnjoM/woG4F5d/30wjjLBgBGMKPTHUH8aw8ni7VYGW3sbSaNSxJYxnj5fzqH/iO6F5by30t8/ljLKpI+Q6Vjcb01ItPKuy3nSXly2UKhMqPU/L371eQoqxDO25mZgCy4XYPYDt7fvrHaf4yE1tl2mtF8w7kKZZx2GcV6H9IyQrMsVsyfFtTeMsR6k9z7Vdw06AsdvABBClu7HJKZAz759fxqGYXN1KnlXLQqwyyAAjj3x+JzXPbXxgkOpRSPfi4HWQvGMKfQd/arJvHdlgrLcRuqrksnAJ/wAIXufc1NwaySwRJYvMlzsB+FCQgz6DoKZLrcGmKUVoYYwMBSmW6en8BXPrvx7DehI/tEscjtyQM8+/qKWzu4Vumuby8R5IiBGCSq7uu714FXcNNk0/223Yu4UlgCDIGXj59MVFLIFaBLezkdFO5jENoB9SRgHPWqaHxFbrLtndBCMMHjwXc9htx0qzj8T+dMI4LZ/LwSUjIBA919am1RSWt9NcSyx7I3j+MCWEEL7fzb8KsEh1ASLJI6uVbdu2n07ADIPz7UdZ3hSzWZLKYMRktMoQKPn+VNbULZbARxo7M2ZHAfLn/MfQfM1UQS2EV3Hb23mqoUFymM5J7tnnJptpaRRottCjII8sUjUqCexYemfeo1v7eWKKC2clZmPLDg+pz1wK9fa7Z2UyhTvIORtyQOOCaKkiWKCF7m8UzNKQnmMCSwz0CDoM9u/eo5xb6jOj/Z2Mjnq8YIUDvgnr7U6PN/FJc+arMh+DZkKOOnvULatYxfqReAtGpJcQ5AHop/o0QaYre2kCSMzzEfq40OCinqc9ye7fhUJsbWNn82DEEjbwgBJLAcZBJAGPpTLK+0m4mMq3UMsoOAgGH6d89Bigf+KtLtZnjBXzJjkRx/FuJPcn8qKmvopWmikW1mmmlAycAAKOfi7BfzptrbM0BuZGmdpSCIx8QJ7Ae1GqTdrtDHEnLB1BLn0wD09hRcs+m6UpS5uYvtMiY8ssCFH+HHYURJbW0slsplURuF/vE7+2OeKFuFhilNpatJceYFErebgL6kE9h7VUXOozahqCW1o0kNtCoDRxMAFz0HHarOzi0+0tALmQjJwM885zjPfHpUVMFMTeb5ZAVtwBT04zn1/Ko3ujK6wxwtFEeqrgZz39/lQ99rQubgWtum9XG5XD9QOpxT7Ww+0RpLdFhGrbiD8O89j6gD0q7RJFbwRTMJgHVCXfILMpPy6cU24vLcxw2tlEwEihWITlB/6umKiTWoVuXS0Vg0bYfeowx9SetBarq1zNOtpEyqytl2Bxg+h7n5UUtzc2pu5opR5pEZVgeFOOgI6YpIZl1G5MC28EETjHmew7dufShktpZoN5njijTnJYkc/skepo61jWxtNibCD8LFQCSc9s+lQPldGKxWitEzRruO0ttUdsE9ahKzmVfMm3wqdjpFG3wjqAOTVpNqENnBK2f1rEBSFAznvx3qLbNchYIgqxknc7ZG49TwKAYn9ZukMixx/rFjUEFwPU9zmpRMkyzKwdmyJJU3Fyh7KPp2o4qIw4kEKxKAVRGJY+nHpXonEce1yFk3FzlgeSeBUFdd25hjijkhhGcOEYjJPYEdqhMlzbTpD9jDW6gybUIwSP/mhrjTL7W7yR457cR5H6xi24gHnGOKsra2FtcF3uIZVAaMhAScDtmqHwW13K9xcTxIVZTgK5JBPv/Ggxp1zPp0s0kkcSjMUWCXKjufnRMt1NFaSeWzedJjhMAjnjIp/mra6U8PnGSbkyM2FAyeSBQVq2Mf2iL/myjE7jtHDIBjHz96fGkaebKkiCWNiykkll7Ac/P09KhFpcpOZ1uZj5h2xpGu4KO7NSzvcRzSszxswXbu4wT2+tBELa6uzcysFbKjescnwknocEfKq9bCdbyVIbSSSJgCYwQCM9Tz0+lHWVzJB9oiSLdzuLNIXYEc4IA55orT5ZrjU1Cqyjl3JBAA7jmg9fXEFimwujGOMRPuXH0yR0z2FU8/26K1RyCYCB8X7WfSvau1xe3JAnLqsnmLtQHIHrVr9rjuLQwSqyM5CgBSpPqcdMUAlnCiMYzJLI2QvwfdQ9TzT3hisbhp5rl2jHCh1yXFW2pXqWyRRxwBhw3THtk1XXurwmcRhC7ZVdqgYyBVE/2xZbQxwSCQB1wmNo5PAFG6JGJJGlaPy5EBXqMFqdBCq7Z/LLJkMw7g7etMhu47aOZlUv8JwNwz7/ACqBtjayNdSPKA29iQdn7OeMc561FrbytI8QkG8SKSiMV69QSOtT2lzHNZQsyeQV+JdrZyAaz8m9NYnlUyx5Y/CW4z64NAy732kihVEhUthTISR++ibPULmRcBRG7nDOzcp2zz8NQXNzOkrOYhuclTtUNuGOPpXooi6w/qDiND8BAx9aCT7I0d9Mp1F5PLTAw6nnGRx6VWtYyjVmdNoVYxKu1tuTx1H41cottebZp4cEglcDAwOOowT9aBSeKSdCI2MhXaEVznPr8vags0Z4WMogVmQ42q2Mg9OD6U63kW11NkWKNcx4LM2ZGHXj+dDW0e20eYCRpCQGDk8EHnFNu5I4Hcea3mL0CL29yatBs18k9nsCyq4G7cwbkj3+VCwSrc2ZlijkEgcAkjO4e560bZ6ha7n83czJ93A+6Mcg+tIqATukLMiuoYHgZqAFtLllXMZD+RhtpJcKCe3fNSqlyzqin4VyG80ncoPYfyqaynMchX9cJCGDEn7p7fOoES9mudyQhTLHjczZxg9aBmYgqqSVkH6snbwo/AUHPbBowzTxtIV+F/KOUINGz3cVsdpkLvIuCCoK/nTmeOa1EBVFZF3bRxn3B/hQdVl0Cy3FlgjH05qD+wbMSA+Qhb1xVztJxigtW1O10a0Nxcybc8Kg5Zz2AHc1y0qL+zLKCEyTJEiIMlmAwKzdzEPErtBpdvHBZA7WvmjBLevljv8AOiE0+/8AEcq3GsBrawB3R2KnlveQ/wAK0aBIo1RAsaKMADgD2FNbPTIQfo08OW33bQSuOWaQ7ix9TU7eBNAMJjGmwbs54TrWmfO/aBx65p4/VqCqZJ6ml6GQT9HehId72cYOegFSv4E8O3GE/s9cHqcnFaVwZlDMpVfQjmkj4YHGB6VBm1/Rn4cZ+LDAB+H4j+7mik/RvoakmOCaINycSEc1qoHjVQwXn1NPa7j7kAVzu22K1P8ARnYakMSahqCr3XzsisvqH6OLO3Z7Ww1e8JZl85mIYKB29z7V0K/1hZ5Gt7NiEBxJMvb2X39+1CxiJY9ohAC9BmtTaViD4CjCRiDUbtBHkDLA5z1oG/8A0c3N7OHOqS/CuOldBaKR3AUED0FOcSR8Af7VrbLJWHhzWNL037Ja6mp3f40yfeqHUvAniC6u1kbUk69eRx6V1COJURm4zjLE9ai3g4J5PYGnlV05xH4O16Lcv2qCQsrKW2YOD70tn4K1yyImWa0kZRtXcnQfWujH9WCc9e9QjdIxLDg1ZtGH/srxIgz9msX2KdhU4JJ7k0De2XiKW6hQafayXkpJ8w4IT1I44Arot1IsFvnG6Q8Ii9WPpTLWJbVi8wLzyYL88Aeg9qtyppz9dC8Rreib7BaMinOA/wB5vU1X6zpfi6+4WGRNv7SngeoArrKOGYncEAOQPSn7wRxnPt3qeVXTk9jDr1ncQFtPnljAHmAIMjHoastVv9TmsRGuh3GXYsd6Fjt7c10bDOhYRjA4HHeiBOEh2Ngtjkn1rFzrUxjiMMOoyzOj2GoRwuQpKAjZ8qsLVLq13FYtQj3OcM6ZJ9zxmurKkSAHvkn8aa6KSMAEt6DmtedZ1HN59dKxSiHTbtmUbELxkFjjlsYqtvtVvvscMENlNFsAJkMRIHc11VljHBQcdeaptcvXuSuk2ePNuPhZhztXuatzpI55N4uIskggaa4d33SzqOcj9kccUQniuSeCSHc9uI0G1nGWz3roFhpNlp1jHZ21qnkRLgZHJPcn3JqdNNtnc+ZaxgDswHNPI05s3iy0jdTC0k9wVxJK55PHT0FNXxLb3ClpJIfI2lipUgkjtXTj4e0qWMs1hASf8gpv/DGiO5hbTrYNsOCUHWnyHixOna7aWeliZ44VhfkjeQVB5AxR8+qIY0njkt0DgEszZY55HwiryTwbos7CM2kbqT0VcClXwJofmb47VcLjoxq+ZpkBq8dtdyNMYp5EG6MKcZb3FJ/xC73D/aBbiMKuZGOcE+gHWts/grw0gJ/s4Fz1yTTYfA3h1lKy6cpDHIHJzU8zTI3us2Du4S7dxbdY0+EMf41FZ6pDfmJoAzsCRkrzjPUn2r3i/wAN6MJLe00q1ktru5nEe7JHHc4rSxfo309LXZFcXC+Ym1v1nUU+T9XxUd1rkECXM9pbtIAQhkPRx3waBj8QF7WdoYpUmKhBlSRjuPrVtqH6Pokha2iv51iGBt9KAg8CTI26PUZkJ6DHWr5xNB7GzB827EwBYbSFGAo9PnVhcXun2V9BBd3MiyLjLFc9u9FJ4GvHtlt/7WYKH837gwSPWhpf0d3948hXV9zn4izJTzhpHLc2E80aWzqz8qGc5XHvUNskqzgpd26xglmdV4x7USn6OdV8sKuqRA9SfLp8PgfVLdHgN/BKm3bgpgAZzT5InjRKaratZS3E0+5MFchsAdqAkv8ATzassk0aRCMBSRyOeKbe+CdZlyI7i1ERbeVwRzVNrul6tpU1ks0EF1LcyhEVO+Bnmr5w00ralDGkFsY4gZFJRj1x16VXXmowy35bz4zkg9MYx71mJNP8SNfm5ezRmJ4G7pipLTSdRcvPLpDXDBt2N3FW0aK9WI7pIppQwy+OOOO3tRC3kpsYUt0BkdNowMBT361n7mz1a+BabTpYwBgLGQNvtUmnW+s2MrMdMupWK/CJGz8qeUNNBaWvkfBMrpL055D+tOiiWMxtE7Z2EZyPhrMMNXudRWe7s7qAKeSuevypDqUllqKvHYT+WfvAg5b3puGmhtxNa6c8T/r3bcVYnjNVC6XJPI0gldB94nbxn0qKfWLh4sQWF0rBifiQ4GaHGo3BjT7TFdsX+KTCkZ9BV3DTU2Np9nZVllhdhGG2svT0+tCXcUv31nV2LhmC/s/KqCHxHFHcvHFDIs/lkY5Y49cVG2owxxI80l6HblwVwAamxcPLqSXXwW8bg8Byx+IVaPHvs2Mk6qygeWu05Azzj1qkh8RxwaUZXkDyg/ApXGBVa/ixZxHI0aF84O4ngdqo1x0W1wZ5LvLDjATjnpmqpdPmSYgXLAjcdhI5zVbZa1Nd3rSzagsNspwUXqwoybxDaS3rzGRREnHTJYUR2rWPEMdnOLGwhN7qUg+GFTwo/wATH9kVDp2g7bn+0dVnF5qBHDY+CIeiDt8+tE6Xolro8RSFGeWQ7pJnOXkPqTVgUJ5JxWIoWaKNmBzIMdg2AaHEThhtY7R68mjzCzEAMPevOqqNq9fWqgZTtbBGT3qUuT6LivJCep/GntGMc/d9KlVEHYjrxUTIztwSM+tEbNx4GBXigiQyOQqrycmsWqHXz4UYsU2DofSqa6vZr2Ty4wy2w+844MnsPb3qe5kk1J8cpaDoOhk/2p3lsAPiwOwoB4htULHGFAHAx0o9QABuXLH91RfEp45NeeVl+ED4jQSvJtG1V+KnRoAhORuPWho3x1+pNOefIG1doHSmjaaWMNGOuc8+9Qm3UHJJpUkcNnvSSMzL8RxmrIm0UkWepwvaoZ7qC1gJYEY7+vsKbPcbUYtwiDJPpQVkpnuVu54i0Y/uoz2/zH3rQmhOA1xMCZX4Hoi+g9/WmtOsjYCHHrRTzLhlEROewNeS3RlGYyrH3qb0GW4B4J49KLBTd0AUdqhZI41J29O9RSFzt2d+ue1PYlmbkfHk5xgHgU9yhztJamYjYD7v071PH5UDAFAw9qli7eht3aNpHXAHr3pm8rJxjPf0opp0aPBbZ86qr2SEfCswUDkkVNAXVr5LG0ec5yT8IoDQrJ4IHv7hybu67Hqidh9ahhjOt6qAxZrK0OWz+23YVoBHkklc/KpO7tq9TRqEYHpUkTb5x8Xw0rphNoHX0qW2TZneBxSpD3WOGJgrDk5OT1oTzdx65OeADUl2iMBkH5DvUaRRywEpHtZSKnpV3ZEC2IYKNw6UpghjjLRxrvQcYqG14CqwzUs1ykQx3x1rCq83MjEhhk/KioixIlc4wOnpQiOWnLgBsVFr+rtp+kTS4C5Ugeua1s0yyTLqHjm41B8GGwXZHnoXPf6D861ttqiup3kKfUVQ6LZfYtGiEpBmmzK/GeTRSxzlSCmY2544prfsv/BF5eI0jMTjmo4JkkOVP1NByCTcRsBHvREFuuzJU5Fak6Zq1R41iID4JG0n0Hc1OI0ht02kspGR61XKE2AMHVgO3cUQoZ41bJXA4rNiyifLLKNpxnmhrnMERVOc9z3rwWRB8JJqOeXenxtj3NJDYYXLKNpUVl9ZJufGekRHJEKSzHHTpgfnWjkeMJncGP8AlrLQbrnxxcS87bezx9Wb/atpFnuU4zuXH76PstsMbpgKzdD1zQwiJXcAxx0p6SMkgJjIPelIlKZPJHvxSzO00gdTjZwABXgPMk7jd+6nea6EMsZMa8ZPesLU4VWcMAMFQT7mh76BF52oaJDIH+DgHkVHIvmg4UE+tSe1qBCjqoEY4xmiY4Y2flFx7ioI8RyYbg1OW2D4eQa3pnbP2+mwW36RbaWW3Q/aLSWPGOpGCP41oDptrcEf8qjNnpxVVJM//FejyyDhZzGD7MpFaJ7cLITExRgcY7Vjemvapm0SLfhtOQrjH3RVTN4ZstxLWKceq1rnEoizIVLA9V9KHnuYzCcLk45rUySxlP8Ah/TFJBs4yMf4ak/4Z0i4QSLZR+hGKtyysuQuPSp4W3IVBAGfTpWtsv/Z' }
];
const STATS_ITEMS = [
  { key: 'statLanguages', value: 10, suffix: '' },
  { key: 'statSeconds', value: 60, suffix: '' },
  { key: 'statFromPrice', value: 0, suffix: '', isFree: true },
  { key: 'statCertificate', value: 0, suffix: '', isIcon: true }
];

const SAMPLE_COURSE = {
  it: [
    { title: 'Come avviare un orto urbano', m: [
      ['Scegliere lo spazio giusto', 'Balcone, terrazzo o aiuola: come valutare luce e drenaggio.'],
      ['I primi 5 ortaggi da provare', 'Le piante più facili per chi inizia, pronte in poche settimane.'],
      ['Cura settimanale in 15 minuti', 'Una routine semplice per tenere l\'orto in salute senza stress.']]},
    { title: 'Chitarra per principianti assoluti', m: [
      ['I primi 4 accordi', 'Le posizioni che aprono centinaia di canzoni famose.'],
      ['Come cambiare accordo senza fermarti', 'L\'esercizio che rende il passaggio naturale.'],
      ['La tua prima canzone completa', 'Metti tutto insieme e suona un brano vero.']]},
    { title: 'Marketing per una piccola impresa', m: [
      ['Capire davvero il tuo cliente', 'Chi compra da te e perché, in parole semplici.'],
      ['Un piano social senza budget', 'Contenuti che funzionano anche a costo zero.'],
      ['Misurare cosa funziona', 'I 3 numeri da guardare ogni settimana.']]}
  ],
  en: [
    { title: 'How to start an urban garden', m: [
      ['Choosing the right spot', 'Balcony, terrace, or plot: how to judge light and drainage.'],
      ['The first 5 crops to try', 'The easiest plants for beginners, ready in just weeks.'],
      ['15-minute weekly care', 'A simple routine to keep your garden healthy, stress-free.']]},
    { title: 'Guitar for absolute beginners', m: [
      ['The first 4 chords', 'The shapes that unlock hundreds of famous songs.'],
      ['Switching chords smoothly', 'The drill that makes transitions feel natural.'],
      ['Your first full song', 'Put it all together and play a real track.']]},
    { title: 'Marketing for a small business', m: [
      ['Really knowing your customer', 'Who buys from you and why, in plain terms.'],
      ['A social plan with zero budget', 'Content that works even without ad spend.'],
      ['Measuring what works', 'The 3 numbers worth checking every week.']]}
  ],
  es: [
    { title: 'Cómo empezar un huerto urbano', m: [
      ['Elegir el lugar adecuado', 'Balcón, terraza o parcela: cómo evaluar luz y drenaje.'],
      ['Los primeros 5 cultivos', 'Las plantas más fáciles para empezar, listas en semanas.'],
      ['Cuidado semanal en 15 minutos', 'Una rutina simple para mantener tu huerto sano sin estrés.']]},
    { title: 'Guitarra para principiantes absolutos', m: [
      ['Los primeros 4 acordes', 'Las posiciones que abren cientos de canciones famosas.'],
      ['Cambiar de acorde sin frenar', 'El ejercicio que hace el cambio natural.'],
      ['Tu primera canción completa', 'Une todo y toca un tema de verdad.']]},
    { title: 'Marketing para una pequeña empresa', m: [
      ['Conocer de verdad a tu cliente', 'Quién te compra y por qué, en palabras simples.'],
      ['Un plan social sin presupuesto', 'Contenido que funciona incluso sin gastar.'],
      ['Medir lo que funciona', 'Los 3 números que revisar cada semana.']]}
  ],
  fr: [
    { title: 'Comment démarrer un potager urbain', m: [
      ['Choisir le bon emplacement', 'Balcon, terrasse ou parcelle : évaluer lumière et drainage.'],
      ['Les 5 premières cultures', 'Les plantes les plus faciles pour débuter, prêtes en semaines.'],
      ['Entretien hebdo en 15 minutes', 'Une routine simple pour un potager sain, sans stress.']]},
    { title: 'Guitare pour grands débutants', m: [
      ['Les 4 premiers accords', 'Les positions qui ouvrent des centaines de chansons.'],
      ['Changer d\'accord sans s\'arrêter', 'L\'exercice qui rend la transition naturelle.'],
      ['Votre première chanson complète', 'Assemblez tout et jouez un vrai morceau.']]},
    { title: 'Marketing pour une petite entreprise', m: [
      ['Bien comprendre votre client', 'Qui achète chez vous et pourquoi, simplement.'],
      ['Un plan social sans budget', 'Du contenu efficace même sans dépenser.'],
      ['Mesurer ce qui marche', 'Les 3 chiffres à suivre chaque semaine.']]}
  ],
  de: [
    { title: 'Einen Stadtgarten starten', m: [
      ['Den richtigen Platz wählen', 'Balkon, Terrasse oder Beet: Licht und Drainage einschätzen.'],
      ['Die ersten 5 Gemüsesorten', 'Die einfachsten Pflanzen für Einsteiger, erntereif in Wochen.'],
      ['Wöchentliche Pflege in 15 Min', 'Eine einfache Routine für einen gesunden Garten ohne Stress.']]},
    { title: 'Gitarre für absolute Anfänger', m: [
      ['Die ersten 4 Akkorde', 'Die Griffe, die Hunderte bekannter Songs öffnen.'],
      ['Akkordwechsel ohne Stocken', 'Die Übung, die den Wechsel natürlich macht.'],
      ['Dein erster ganzer Song', 'Alles zusammenfügen und einen echten Song spielen.']]},
    { title: 'Marketing für ein kleines Unternehmen', m: [
      ['Deine Kundschaft wirklich verstehen', 'Wer bei dir kauft und warum, einfach erklärt.'],
      ['Ein Social-Plan ohne Budget', 'Inhalte, die auch ohne Werbebudget wirken.'],
      ['Erfolg messen', 'Die 3 Kennzahlen, die du wöchentlich prüfen solltest.']]}
  ],
  pt: [
    { title: 'Como começar uma horta urbana', m: [
      ['Escolher o lugar certo', 'Varanda, terraço ou canteiro: como avaliar luz e drenagem.'],
      ['As primeiras 5 hortaliças', 'As plantas mais fáceis pra começar, prontas em semanas.'],
      ['Cuidado semanal em 15 minutos', 'Uma rotina simples pra manter a horta saudável sem estresse.']]},
    { title: 'Violão para iniciantes absolutos', m: [
      ['Os primeiros 4 acordes', 'As posições que abrem centenas de músicas famosas.'],
      ['Trocar de acorde sem travar', 'O exercício que deixa a troca natural.'],
      ['Sua primeira música completa', 'Junte tudo e toque uma faixa de verdade.']]},
    { title: 'Marketing pra uma pequena empresa', m: [
      ['Entender de verdade seu cliente', 'Quem compra de você e por quê, sem enrolação.'],
      ['Um plano social sem orçamento', 'Conteúdo que funciona mesmo sem gastar.'],
      ['Medir o que funciona', 'Os 3 números pra acompanhar toda semana.']]}
  ],
  zh: [
    { title: '如何打造一个城市小菜园', m: [
      ['选择合适的位置', '阳台、露台还是花坛：如何评估光照和排水。'],
      ['最先尝试的5种蔬菜', '最适合新手的植物，几周内就能收获。'],
      ['每周15分钟的养护', '一个简单的日常流程，轻松保持菜园健康。']]},
    { title: '零基础吉他入门', m: [
      ['最初的4个和弦', '能弹奏数百首名曲的基础指法。'],
      ['流畅换和弦', '让转换变得自然的练习方法。'],
      ['完整弹完第一首歌', '把所有技巧组合起来弹一首真正的歌曲。']]},
    { title: '小企业营销入门', m: [
      ['真正了解你的客户', '谁会买你的产品，为什么，用简单的话说清楚。'],
      ['零预算的社交媒体计划', '不花钱也能奏效的内容策略。'],
      ['衡量成效', '每周该关注的3个关键数字。']]}
  ],
  ja: [
    { title: '都市型家庭菜園の始め方', m: [
      ['最適な場所の選び方', 'ベランダ、テラス、花壇：日当たりと排水を見極める方法。'],
      ['最初に試したい野菜5選', '初心者に最適で、数週間で収穫できる野菜たち。'],
      ['週15分のお手入れ', 'ストレスなく菜園を健康に保つシンプルな習慣。']]},
    { title: '全くの初心者のためのギター入門', m: [
      ['最初の4つのコード', '数百曲の名曲を弾けるようになる基本フォーム。'],
      ['スムーズなコードチェンジ', '切り替えを自然にする練習法。'],
      ['最初の1曲を弾き切る', 'すべてを組み合わせて実際の曲を演奏。']]},
    { title: '小さなビジネスのマーケティング', m: [
      ['顧客を本当に理解する', '誰が、なぜあなたから買うのかをシンプルに。'],
      ['予算ゼロのSNS戦略', '広告費をかけなくても効果が出るコンテンツ。'],
      ['成果を測る', '毎週チェックすべき3つの数字。']]}
  ],
  ar: [
    { title: 'كيف تبدأ حديقة حضرية', m: [
      ['اختيار المكان المناسب', 'شرفة أو تراس أو حوض: كيفية تقييم الإضاءة والتصريف.'],
      ['أول 5 خضروات للتجربة', 'أسهل النباتات للمبتدئين، جاهزة خلال أسابيع قليلة.'],
      ['العناية الأسبوعية في 15 دقيقة', 'روتين بسيط للحفاظ على صحة الحديقة دون توتر.']]},
    { title: 'الغيتار للمبتدئين تمامًا', m: [
      ['أول 4 أوتار', 'الأوضاع التي تفتح مئات الأغاني الشهيرة.'],
      ['تغيير الوتر دون توقف', 'التمرين الذي يجعل الانتقال طبيعيًا.'],
      ['أغنيتك الكاملة الأولى', 'اجمع كل شيء واعزف مقطوعة حقيقية.']]},
    { title: 'التسويق لمشروع صغير', m: [
      ['فهم عميلك حقًا', 'من يشتري منك ولماذا، بكلمات بسيطة.'],
      ['خطة تواصل اجتماعي بلا ميزانية', 'محتوى فعّال حتى بدون إنفاق.'],
      ['قياس ما ينجح', 'الأرقام الثلاثة التي يجب متابعتها أسبوعيًا.']]}
  ],
  ru: [
    { title: 'Как разбить городской огород', m: [
      ['Выбор подходящего места', 'Балкон, терраса или грядка: как оценить свет и дренаж.'],
      ['Первые 5 культур для старта', 'Самые простые растения для новичков, готовые за недели.'],
      ['15-минутный уход в неделю', 'Простой ритуал для здорового огорода без лишнего стресса.']]},
    { title: 'Гитара для полных новичков', m: [
      ['Первые 4 аккорда', 'Позиции, открывающие сотни известных песен.'],
      ['Смена аккордов без остановки', 'Упражнение, делающее переход естественным.'],
      ['Ваша первая полная песня', 'Соберите всё вместе и сыграйте настоящий трек.']]},
    { title: 'Маркетинг для малого бизнеса', m: [
      ['Понять своего клиента', 'Кто у вас покупает и почему — простыми словами.'],
      ['План соцсетей без бюджета', 'Контент, который работает даже без затрат.'],
      ['Измерение результатов', '3 показателя, которые стоит проверять каждую неделю.']]}
  ]
};
let sampleTopicIndex = 0;
let sampleRotationTimer = null;

function renderSamplePreview(resetIndex){
  const t = I18N[currentLang];
  const el = document.getElementById('sample-preview');
  if (!el) return;
  const list = SAMPLE_COURSE[currentLang] || SAMPLE_COURSE.it;
  if (resetIndex) sampleTopicIndex = 0;
  if (sampleTopicIndex >= list.length) sampleTopicIndex = 0;
  const s = list[sampleTopicIndex];

  let html = '<div class="sample-preview-label">' + t.sampleLabel + '</div>';
  html += '<div class="sample-preview-card">';
  html += '<div class="sample-preview-caption">' + t.sampleCaption + '</div>';
  html += '<div class="sample-preview-title">' + escapeHtml(s.title) + '</div>';
  html += '<div class="sample-preview-modules">';
  s.m.forEach((mod, i) => {
    html += '<div class="sample-module"><div class="sample-module-num">' + (i+1) + '</div>';
    html += '<div class="sample-module-title">' + escapeHtml(mod[0]) + '</div>';
    html += '<div class="sample-module-text">' + escapeHtml(mod[1]) + '</div></div>';
  });
  html += '</div>';
  html += '<div class="sample-dots">';
  list.forEach((_, i) => {
    html += '<span class="sample-dot' + (i === sampleTopicIndex ? ' active' : '') + '"></span>';
  });
  html += '</div>';
  html += '<button class="sample-cta" onclick="document.getElementById(\'f-expertise\').scrollIntoView({behavior:\'smooth\', block:\'center\'}); setTimeout(() => document.getElementById(\'f-expertise\').focus(), 400);">' + t.sampleCta + '</button>';
  html += '</div>';
  el.innerHTML = html;

  // Ruota automaticamente tra i temi di esempio ogni 10 secondi, per far capire
  // che Corsificio genera corsi su QUALSIASI argomento, non solo su questo.
  if (sampleRotationTimer) clearInterval(sampleRotationTimer);
  sampleRotationTimer = setInterval(() => {
    const currentList = SAMPLE_COURSE[currentLang] || SAMPLE_COURSE.it;
    sampleTopicIndex = (sampleTopicIndex + 1) % currentList.length;
    const card = el.querySelector('.sample-preview-card');
    if (card) {
      card.classList.add('sample-fade-out');
      setTimeout(() => renderSamplePreview(false), 300);
    } else {
      renderSamplePreview(false);
    }
  }, 10000);
}

function renderStatsStrip(){
  const t = I18N[currentLang];
  const container = document.getElementById('stats-strip');
  if (!container) return;
  let html = '';
  html += '<div class="stat-item" tabindex="0"><div class="stat-number" data-count="10">0</div><div class="stat-label">' + escapeHtml(t.statLanguages) + '</div><div class="stat-tooltip">' + escapeHtml(t.statLanguagesTip) + '</div></div>';
  html += '<div class="stat-item" tabindex="0"><div class="stat-number" data-count="60">0</div><div class="stat-label">' + escapeHtml(t.statSeconds) + '</div><div class="stat-tooltip">' + escapeHtml(t.statSecondsTip) + '</div></div>';
  html += '<div class="stat-item" tabindex="0"><div class="stat-number">1</div><div class="stat-label">' + escapeHtml(t.statFromPrice) + '</div><div class="stat-tooltip">' + escapeHtml(t.statFromPriceTip) + '</div></div>';
  html += '<div class="stat-item" tabindex="0"><div class="stat-number">✓</div><div class="stat-label">' + escapeHtml(t.statCertificate) + '</div><div class="stat-tooltip">' + escapeHtml(t.statCertificateTip) + '</div></div>';
  container.innerHTML = html;

  if ('IntersectionObserver' in window) {
    const nums = container.querySelectorAll('.stat-number[data-count]');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCountUp(entry.target, parseInt(entry.target.getAttribute('data-count'), 10));
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    nums.forEach(el => obs.observe(el));
  } else {
    container.querySelectorAll('.stat-number[data-count]').forEach(el => {
      el.textContent = el.getAttribute('data-count');
    });
  }
}

function animateCountUp(el, target){
  const duration = 900;
  const start = performance.now();
  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

let heroRotatorInterval = null;
function startHeroRotator(){
  const t = I18N[currentLang];
  const el = document.getElementById('hero-rotator');
  if (!el || !t.rotatorPhrases || !t.rotatorPhrases.length) return;
  const phrases = t.rotatorPhrases;
  let i = 0;
  clearInterval(heroRotatorInterval);
  el.textContent = phrases[0];
  el.classList.add('show');
  heroRotatorInterval = setInterval(() => {
    el.classList.remove('show');
    setTimeout(() => {
      i = (i + 1) % phrases.length;
      el.textContent = phrases[i];
      el.classList.add('show');
    }, 350);
  }, 3200);
}

function renderShowcase(){
  const t = I18N[currentLang];
  const container = document.getElementById('showcase');
  if (!container) return;
  // FIX: o painel pode estar temporariamente "morando" dentro do grid (ver
  // openShowcaseExamples) — se estiver, tira ele de lá antes de sobrescrever
  // o innerHTML, senão container.innerHTML apaga o elemento do DOM de vez.
  const existingPanel = document.getElementById('showcase-panel');
  if (existingPanel && existingPanel.parentElement === container) {
    container.insertAdjacentElement('afterend', existingPanel);
  }
  const priceLabel = t.priceCompletoValue || '€3,49';
  container.innerHTML = SHOWCASE_TOPICS.map(item => {
    const meta = SHOWCASE_META[item.key] || {};
    const title = t[meta.exampleKey] || meta.fallbackTitle || '';
    return (
      '<div class="showcase-item" data-key="' + item.key + '" onclick="openShowcaseExamples(\'' + item.key + '\')" onmousemove="tiltShowcaseCard(event, this)" onmouseleave="resetShowcaseTilt(this)">' +
        '<div class="showcase-icon">' +
          '<img src="' + item.img + '" alt="' + escapeHtml(t[item.key] || '') + '" loading="lazy">' +
          '<span class="showcase-badge">' + escapeHtml(t[item.key] || '') + '</span>' +
        '</div>' +
        '<div class="showcase-body">' +
          '<h3 class="showcase-title">' + escapeHtml(title) + '</h3>' +
          '<p class="showcase-desc">' + escapeHtml(meta.desc || '') + '</p>' +
          '<div class="showcase-footer">' +
            '<span class="showcase-footer-modules">' + escapeHtml(meta.modules || '4 moduli') + '</span>' +
            '<span class="showcase-footer-price">' + escapeHtml((t.showcaseFromLabel || 'Da') + ' ' + priceLabel) + '</span>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }).join('');
  const panelEl = document.getElementById('showcase-panel');
  if (panelEl) { panelEl.classList.remove('open'); panelEl.style.maxHeight = '0px'; panelEl.innerHTML = ''; }
  openShowcaseCategory = null;
}

// FIX DESIGN: metadados só pro layout do card (título vem de uma chave i18n já
// existente — reaproveita as frases de exemplo; descrição/rodapé ficam fixos
// em italiano por padrão, já que não são texto de marca sensível a tradução).
const SHOWCASE_META = {
  showcaseBusiness:  { exampleKey: 'exBusiness1',  desc: 'Struttura pronta per vendere o insegnare, con esempi pratici.', modules: '4 moduli' },
  showcaseCreative:   { exampleKey: 'exCreative1',   desc: 'Dal primo schizzo al progetto finito, passo dopo passo.', modules: '4 moduli' },
  showcaseWellness:  { exampleKey: 'exWellness1',  desc: 'Un metodo semplice da seguire ogni giorno, senza pressione.', modules: '4 moduli' },
  showcaseTech:      { exampleKey: 'exTech1',      desc: 'Concetti spiegati chiaramente, senza gergo tecnico inutile.', modules: '4 moduli' },
  showcaseFood:      { exampleKey: 'exFood1',      desc: 'Ricette e tecniche spiegate in modo chiaro, per ogni livello.', modules: '4 moduli' },
};

const prefersReducedMotionShowcase = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function tiltShowcaseCard(e, el){
  if (prefersReducedMotionShowcase) return;
  const icon = el.querySelector('.showcase-icon');
  if (!icon) return;
  const r = icon.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  const rx = ((y / r.height) - 0.5) * -14;
  const ry = ((x / r.width) - 0.5) * 14;
  icon.style.transform = 'perspective(500px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) scale3d(1.04,1.04,1.04)';
}
function resetShowcaseTilt(el){
  const icon = el.querySelector('.showcase-icon');
  if (icon) icon.style.transform = 'perspective(500px) rotateX(0) rotateY(0) scale3d(1,1,1)';
}

const SHOWCASE_EXAMPLES = {
  showcaseBusiness: ['exBusiness1', 'exBusiness2', 'exBusiness3', 'exBusiness4'],
  showcaseCreative: ['exCreative1', 'exCreative2', 'exCreative3', 'exCreative4'],
  showcaseWellness: ['exWellness1', 'exWellness2', 'exWellness3', 'exWellness4'],
  showcaseTech: ['exTech1', 'exTech2', 'exTech3', 'exTech4'],
  showcaseFood: ['exFood1', 'exFood2', 'exFood3', 'exFood4']
};

let openShowcaseCategory = null;

function openShowcaseExamples(categoryKey){
  const t = I18N[currentLang];
  const panelEl = document.getElementById('showcase-panel');
  const items = document.querySelectorAll('.showcase-item');

  if (openShowcaseCategory === categoryKey) {
    // Clicar na mesma foto de novo fecha il pannello.
    openShowcaseCategory = null;
    panelEl.classList.remove('open');
    panelEl.style.maxHeight = '0px';
    items.forEach(el => el.classList.remove('active'));
    return;
  }

  openShowcaseCategory = categoryKey;
  items.forEach(el => el.classList.toggle('active', el.getAttribute('data-key') === categoryKey));

  // FIX: o painel ficava sempre depois da grade inteira de 5 fotos, então no
  // mobile (grid de 2 colunas) ele aparecia longe do card que a pessoa
  // clicou, parecendo desconectado. Agora movemos o painel pra dentro do
  // grid, logo após o card ativo — com grid-column:1/-1 ele ocupa a largura
  // toda e "quebra a linha" bem embaixo do card certo, em qualquer tamanho
  // de tela.
  const activeItem = document.querySelector('.showcase-item[data-key="' + categoryKey + '"]');
  if (activeItem) activeItem.insertAdjacentElement('afterend', panelEl);

  const keys = SHOWCASE_EXAMPLES[categoryKey] || [];
  let html = '<div class="showcase-panel-inner">';
  html += '<div class="showcase-panel-title">' + escapeHtml(t[categoryKey] || '') + '</div>';
  html += '<p class="showcase-panel-intro">' + escapeHtml(t.showcaseExamplesIntro) + '</p>';
  html += '<div class="showcase-example-list">';
  keys.forEach(k => {
    const label = t[k];
    if (!label) return;
    html += '<button class="example-chip showcase-example-btn" onclick="useShowcaseExample(\'' + k.replace(/'/g, "\\'") + '\')">' + escapeHtml(label) + '</button>';
  });
  html += '</div></div>';

  panelEl.innerHTML = html;
  panelEl.classList.add('open');
  // Doppio rAF: lascia che il browser calcoli l'altezza del contenuto nuovo prima di animarla.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      panelEl.style.maxHeight = panelEl.scrollHeight + 'px';
    });
  });
}

function useShowcaseExample(exampleKey){
  const t = I18N[currentLang];
  const label = t[exampleKey];
  if (!label) return;
  document.getElementById('f-expertise').value = label;
  const panelEl = document.getElementById('showcase-panel');
  panelEl.classList.remove('open');
  panelEl.style.maxHeight = '0px';
  openShowcaseCategory = null;
  document.querySelectorAll('.showcase-item').forEach(el => el.classList.remove('active'));
  const panel = document.querySelector('.panel');
  if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const input = document.getElementById('f-expertise');
  if (input) input.focus();
}


const THEME_CATEGORIES = ['generale','salute','finanza','creativita','tecnologia','cucina','sport','educazione','spiritualita'];

// Palette per categoria (modalità chiara), scelte in base alla psicologia dei colori:
// - salute: verde-teal (guarigione/crescita) + terracotta caldo (vitalità)
// - finanza: blu notte (fiducia/stabilità) + oro scuro (successo)
// - creatività: viola (immaginazione) + magenta (espressione)
// - tecnologia: ciano (innovazione) + indaco (futuro)
// - cucina: arancione (appetito/calore) + rosso profondo (passione)
// - sport: rosso-arancio (energia/azione) + verde (vitalità/resistenza)
// - educazione: giallo scuro (ottimismo) + blu cielo scuro (fiducia/apprendimento)
// - spiritualità: salvia (equilibrio) + lavanda (calma/interiorità)
const THEMES = {
  generale:      { bg:'#F4F5F8', ink:'#1E2A3A', brass:'#2E4A6B', rust:'#A8763A' },
  salute:        { bg:'#F1F8F5', ink:'#0F2620', brass:'#2E7D6C', rust:'#C97A3E' },
  finanza:       { bg:'#F3F5F8', ink:'#16273A', brass:'#8A6D1B', rust:'#2E6E8E' },
  creativita:    { bg:'#F8F3F8', ink:'#2B1730', brass:'#8A4FA0', rust:'#B23D6E' },
  tecnologia:    { bg:'#F0F6F8', ink:'#0F2530', brass:'#1D7E96', rust:'#4A3FA8' },
  cucina:        { bg:'#FBF3EC', ink:'#2E1708', brass:'#B5661F', rust:'#8A2A1F' },
  sport:         { bg:'#FAF0EC', ink:'#241008', brass:'#B5431F', rust:'#2E6B4A' },
  educazione:    { bg:'#FBF8E9', ink:'#241F05', brass:'#9C7A15', rust:'#2C5C87' },
  spiritualita:  { bg:'#F2F6F1', ink:'#182620', brass:'#5C8A6F', rust:'#6B57A0' }
};

function hexToRgb(hex){
  const h = hex.replace('#','');
  return { r: parseInt(h.substring(0,2),16), g: parseInt(h.substring(2,4),16), b: parseInt(h.substring(4,6),16) };
}
function shade(hex, percent){
  const { r, g, b } = hexToRgb(hex);
  const amt = Math.round(2.55 * percent);
  const clamp = v => Math.max(0, Math.min(255, v));
  const nr = clamp(r + amt).toString(16).padStart(2,'0');
  const ng = clamp(g + amt).toString(16).padStart(2,'0');
  const nb = clamp(b + amt).toString(16).padStart(2,'0');
  return '#' + nr + ng + nb;
}
function toRgba(hex, alpha){
  const { r, g, b } = hexToRgb(hex);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}

function applyTheme(categoria){
  const t = THEMES[categoria] || THEMES.generale;
  const root = document.documentElement.style;
  root.setProperty('--bg', t.bg);
  root.setProperty('--surface-2', shade(t.bg, -4));
  root.setProperty('--ink', t.ink);
  root.setProperty('--ink-dim', shade(t.ink, 40));
  root.setProperty('--brass', t.brass);
  root.setProperty('--brass-bright', shade(t.brass, 22));
  root.setProperty('--brass-dim', shade(t.brass, -18));
  root.setProperty('--rust', t.rust);
  root.setProperty('--rust-bright', shade(t.rust, 22));
  root.setProperty('--line', toRgba(t.ink, 0.13));
}

function buildPrompt(expertise, audience, goal, modules, tone, length, langName, usage, sourceMaterial, vertical) {
  // Fix: allineato al Framework Instrucional interno (Gancho -> Conceito -> Passo a Passo ->
  // Esempio/Case study -> Sfida), invece di una struttura libera. Questo garantisce coerenza
  // pedagogica tra tutti i corsi generati e mantiene un tetto realistico di lunghezza per
  // modulo, in linea con il vincolo "aula max 10-15 minuti" del manuale interno (~1000 parole
  // scritte corrispondono grosso modo a una lezione di 8-12 minuti se letta ad alta voce/parlata).
  const contentInstruction = length === 'completo'
    ? `"content": the COMPLETE teaching material for the lesson (700-1000 words max — this caps at roughly a 10-15 minute lesson, do not exceed it). It MUST follow this exact 5-part pedagogical structure, in order, written as flowing prose (not literal section labels unless natural): (1) THE HOOK — open with a real, relatable problem or pain point this module solves, in the first 2-3 sentences; (2) THE CONCEPT — explain the underlying idea simply and directly, avoiding unexplained jargon; (3) THE STEP-BY-STEP — a clear practical method or mini-framework the learner can follow; (4) THE EXAMPLE — a concrete case study or worked example applying the method; (5) THE CHALLENGE — end with one specific, actionable task for the learner to do right now, plus a one-line bridge to the next module`
    : `"content": a 150-200 word explanation that still touches the Hook -> Concept -> Concrete example arc briefly — more than a summary, but direct and to the point`;

  const audienceFraming = usage === 'professionale'
    ? `You are an instructional designer helping a working professional build a polished, monetizable micro-course they intend to sell to paying clients. Write with an authoritative, professional tone suitable for a product people pay for.`
    : `You are an instructional designer who creates micro-courses for ANY person interested in learning or teaching a topic — professionals, hobbyists, curious beginners, absolutely anyone. Do not assume the requester has professional training: they might just be an enthusiast.`;

  // FIX PRODUTO (vertical por nicho): instrução REAL enviada ao modelo, não
  // só cosmética — muda tom, estrutura de módulo sugerida e tipo de
  // avaliação por área, já que "avaliação" pra um terapeuta não deve ser
  // igual à de um personal trainer ou consultor de negócios.
  const VERTICAL_INSTRUCTIONS = {
    salute: `This course is for a health/wellness practitioner (therapist, wellness coach, etc). Use an empathetic, careful tone. Favor self-reflection prompts and practical exercises over rigid right/wrong quizzes — frame "quiz_question" as a reflective check-in rather than a factual test. Be mindful of ethical framing (never give medical diagnoses or clinical claims).`,
    fitness: `This course is for a fitness professional (personal trainer, etc). Use a motivating, energetic tone. Favor progressive, phase-based structure (e.g. "week 1 focus", "week 2 focus") and concrete measurable actions. "quiz_question" can be a practical checkpoint (e.g. "did you complete X reps/sessions") rather than pure theory.`,
    business: `This course is for a business/management consultant. Use an authoritative, credible tone. Favor named frameworks, short case studies with numbers/outcomes, and ROI-oriented challenges. "quiz_question" can test application of a framework to a realistic business scenario.`,
    coaching: `This course is for a professional coach. Use a reflective, empowering tone. Favor powerful open questions and accountability commitments over factual quizzes — frame "quiz_question" as a commitment/action the learner will report back on.`,
  };
  const verticalInstruction = (usage === 'professionale' && vertical && VERTICAL_INSTRUCTIONS[vertical])
    ? `\n${VERTICAL_INSTRUCTIONS[vertical]} (Note: this vertical context is ONLY for tone/style/quiz-type guidance — it has NO effect on the required "categoria" field below, which must still be chosen strictly from its own fixed list.)`
    : '';

  const deliveryTipField = usage === 'professionale'
    ? `,\n      "delivery_tip": "one short practical tip (1-2 sentences, in ${langName}) for the instructor on how to actually deliver or facilitate this specific module with clients (e.g. an activity, a discussion prompt, a common sticking point to watch for)"`
    : '';

  // Fix: prima solo il modo "professionale" riceveva sales_pitch/price/FAQ, quindi il modo
  // generico (hobbisti/curiosi) non aveva alcun gancio di conversione verso l'upgrade a
  // pagamento. Ora anche il modo generico riceve un mini blocco leggero (un solo motivo per
  // continuare + un unico dubbio comune con risposta) per dare comunque un'apertura all'upsell,
  // senza però spingere un framing "vendi ai clienti" che non avrebbe senso per questo pubblico.
  const salesKitBlock = usage === 'professionale'
    ? `,
  "sales_pitch": "a compelling 3-4 sentence sales pitch for this course's landing page, in ${langName}, written to persuade a potential paying client",
  "suggested_price_range": "a realistic suggested selling price range for this specific course given its topic and depth, in ${langName} (e.g. currency and range appropriate to the topic and audience)",
  "faq": [
    {"question": "a likely objection or question a hesitant buyer would ask, in ${langName}", "answer": "a short persuasive answer, in ${langName}"},
    {"question": "a second likely objection, in ${langName}", "answer": "a short persuasive answer, in ${langName}"},
    {"question": "a third likely objection, in ${langName}", "answer": "a short persuasive answer, in ${langName}"}
  ]`
    : `,
  "faq": [
    {"question": "one common doubt a curious beginner would have about continuing to learn this topic further, in ${langName}", "answer": "a short, encouraging, non-salesy answer, in ${langName}"}
  ]`;

  // FIX GAP 1: se a pessoa colou material próprio (PDF/notas), o curso deve
  // ser CONSTRUÍDO A PARTIR desse conteúdo, não apenas usar o tema como
  // ponto de partida genérico — é essa a diferença real entre "gerar do
  // zero" e "estruturar o que eu já tenho".
  const materialBlock = sourceMaterial && sourceMaterial.length > 40
    ? `\n\nSOURCE MATERIAL PROVIDED BY THE USER (this is the actual content to structure into a course — base the modules, explanations and examples on THIS material, don't just write generically about the topic; only fill gaps with general knowledge where the material is incomplete):\n"""\n${sourceMaterial.slice(0, 12000)}\n"""`
    : '';

  return `${audienceFraming}${verticalInstruction}
Course topic: ${expertise || "(infer the topic from the source material provided below)"}
Target audience: ${audience}
Final goal for the learner: ${goal || "not specified, infer something sensible"}
Number of modules requested: ${modules}
Tone: ${tone}${materialBlock}

CRITICAL — this must read as ONE COHESIVE COURSE with a real teaching arc, NOT a set of independent articles on the same broad topic (that is the single most common failure mode to avoid): before writing, decide the ONE concrete end-state skill/outcome the learner reaches by the final module. Every module must visibly move the learner ONE STEP closer to that end-state, in a strict dependency order — module 2 should explicitly build on a term, concept or result introduced in module 1 (a brief callback, e.g. "building on the method from the last module..."), module 3 on module 1-2, and so on. THE CHALLENGE at the end of each module should feel like consecutive steps of ONE ongoing hands-on project the learner is assembling across the whole course, not disconnected one-off exercises. Never repeat the same explanation, example or key point across two modules — if a concept resurfaces, reference it briefly instead of re-explaining it from scratch.

Generate a complete micro-course. Write ALL content (title, subtitle, module titles, summaries, content, key points, quiz${usage === 'professionale' ? ', sales pitch, price suggestion, FAQ, delivery tips' : ''}) entirely in ${langName}. Respond ONLY with a valid JSON object, no text before or after, no markdown, with this exact structure:
{
  "title": "catchy course title, in ${langName}",
  "subtitle": "one sentence explaining the course's value, in ${langName}",
  "categoria": "one of these exact words (keep this field itself in English, it's an internal category, not shown to the user): ${THEME_CATEGORIES.join(', ')}",
  "modules": [
    {
      "title": "module title, in ${langName}",
      "summary": "2-3 sentences summarizing what the module covers, in ${langName}",
      ${contentInstruction} — written in ${langName},
      "key_points": ["key point 1", "key point 2", "key point 3"] (in ${langName}),
      "estimated_minutes": a realistic integer between 8 and 15 for how long this lesson takes to read/watch (never above 15),
      "quiz_question": "a relevant check-in question, in ${langName}, that verifies the learner actually did THE CHALLENGE step or understood THE CONCEPT — this is the module's required fixation/retention tool",
      "quiz_answer": "short correct answer, in ${langName}"${deliveryTipField}
    }
  ]${salesKitBlock},
  "further_reading": ["suggestion 1, in ${langName}", "suggestion 2, in ${langName}", "suggestion 3, in ${langName}"]
}
The "modules" field must contain exactly ${modules} items, in a logical teaching order from beginner to advanced.
The "content" field MUST always be present and non-empty for every module, and MUST follow the 5-part Hook/Concept/Step-by-step/Example/Challenge structure described above.
The "further_reading" field: 3 short, HONEST pointers (in ${langName}) for where the learner could explore the topic further AFTER this course — NOT a bibliography and NOT a claim that this course was built from external research (it was not). Strongly prefer generic, safe pointers like "search for '[specific well-known term/technique]' to go deeper" or naming a genuinely famous, unmistakably real book/course/organization in this field if you are highly confident it exists. NEVER invent a specific paper title, study, statistic, author name, or URL you are not certain is real — if in doubt, give a generic search suggestion instead of a specific citation.`;
}

function buildPreviewPrompt(expertise, audience, goal, modules, tone, langName, usage) {
  const audienceFraming = usage === 'professionale'
    ? `You are an instructional designer helping a working professional build a polished, monetizable micro-course they intend to sell to paying clients. Write with an authoritative, professional tone suitable for a product people pay for.`
    : `You are an instructional designer who creates micro-courses for ANY person interested in learning or teaching a topic — professionals, hobbyists, curious beginners, absolutely anyone.`;

  return `${audienceFraming}
Course topic: ${expertise}
Target audience: ${audience}
Final goal for the learner: ${goal || "not specified, infer something sensible"}
Tone: ${tone}
This course will eventually have ${modules} modules total, but for now generate ONLY module 1 as a free preview — do not generate the other modules.

Write ALL content entirely in ${langName}. Respond ONLY with a valid JSON object, no text before or after, no markdown, with this exact structure:
{
  "title": "catchy course title, in ${langName}",
  "subtitle": "one sentence explaining the course's value, in ${langName}",
  "categoria": "one of these exact words (keep this field itself in English): ${THEME_CATEGORIES.join(', ')}",
  "modules": [
    {
      "title": "module 1 title, in ${langName}",
      "summary": "2-3 sentences summarizing what the module covers, in ${langName}",
      "content": "the COMPLETE teaching material for this lesson (700-1000 words), in ${langName} — not a summary. Include an introduction, 2-3 key concepts each with a concrete example, a practical exercise, and a closing that teases what's coming in the next modules",
      "key_points": ["key point 1", "key point 2", "key point 3"] (in ${langName}),
      "quiz_question": "a relevant check-in question, in ${langName}",
      "quiz_answer": "short correct answer, in ${langName}"
    }
  ]
}
The "modules" array must contain EXACTLY 1 item (module 1 only).`;
}

// FIX GAP 1: alterna entre "descreva um tema" (fluxo original) e "cole seu
// material" (novo — PDF/notas viram a base do curso, não só o título).
let currentInputMode = 'topic';
function setInputMode(mode){
  currentInputMode = mode;
  document.getElementById('topic-mode-block').style.display = mode === 'topic' ? 'block' : 'none';
  document.getElementById('material-mode-block').style.display = mode === 'material' ? 'block' : 'none';
  document.querySelectorAll('.input-mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
  });
}

// Extrai texto de .txt diretamente, ou de .pdf via pdf.js (carregado no <head>).
// Tudo roda no navegador — nenhum arquivo é enviado a lugar nenhum.
async function handleMaterialFile(evt){
  const file = evt.target.files[0];
  const statusEl = document.getElementById('file-upload-status');
  const textarea = document.getElementById('f-source-material');
  if (!file) return;
  statusEl.textContent = '⏳ ' + (I18N[currentLang].fileReading || 'Leggendo il file...');
  try {
    let text = '';
    if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
      text = await file.text();
    } else if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
      if (!window['pdfjsLib']) throw new Error('pdfjs non disponibile');
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      const buf = await file.arrayBuffer();
      const pdf = await window.pdfjsLib.getDocument({ data: buf }).promise;
      const pages = [];
      for (let i = 1; i <= Math.min(pdf.numPages, 40); i++) { // limite de 40 páginas, suficiente pra apostila/notas
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        pages.push(content.items.map(it => it.str).join(' '));
      }
      text = pages.join('\n\n');
    } else {
      throw new Error('formato non supportato');
    }
    textarea.value = text.slice(0, 12000); // teto de tamanho pra manter o prompt razoável
    statusEl.textContent = '✓ ' + (I18N[currentLang].fileReadOk || 'File caricato — puoi modificare il testo qui sotto.');
  } catch (e) {
    statusEl.textContent = '⚠ ' + (I18N[currentLang].fileReadError || 'Non è stato possibile leggere il file. Prova a incollare il testo direttamente.');
  }
}


async function generateCourse(){
  // FIX PRODUTO 5: limpa traduções da geração anterior — sem isso, o
  // seletor de idiomas do curso novo mostraria traduções do curso antigo.
  window.__courseTranslations = {};
  window.__activeTranslationLang = null;
  window.__originalCourseForTranslation = null;

  const t = I18N[currentLang];
  const expertise = document.getElementById('f-expertise').value.trim();
  const sourceMaterial = document.getElementById('f-source-material').value.trim();
  const audience = document.getElementById('f-audience').value.trim();
  const goal = document.getElementById('f-goal').value.trim();
  const modules = document.getElementById('f-modules').value;
  const tone = document.getElementById('f-tone').value;
  const hasActiveSubscription = !!(window.__activeSubscription && window.__activeSubscription.active);
  const length = hasActiveSubscription ? 'completo' : document.getElementById('f-length').value;
  const usage = document.getElementById('f-usage').value;
  const verticalEl = document.getElementById('f-vertical');
  const vertical = verticalEl ? verticalEl.value : '';
  const btn = document.getElementById('btn-generate');
  const output = document.getElementById('output');

  if (currentInputMode === 'material') {
    if (!sourceMaterial || sourceMaterial.length < 40) {
      output.innerHTML = '<div class="error-box">' + (t.errorFillMaterial || t.errorFillFields) + '</div>';
      return;
    }
  } else if(!expertise || !audience){
    output.innerHTML = '<div class="error-box">' + t.errorFillFields + '</div>';
    return;
  }

  const prompt = buildPrompt(expertise, audience, goal, modules, tone, length, t.langNameForPrompt, usage, sourceMaterial, vertical);
  const flow = getActiveFlow();

  // FIX MERCADO: antes de comprometer a geração completa (mais lenta, e que
  // gasta cota grátis/assinatura), mostra primeiro só a estrutura — título,
  // subtítulo e resumo de cada módulo — com o texto aparecendo ao vivo
  // (streaming de verdade da IA). A pessoa aprova o direcionamento antes de
  // gerar o conteúdo pesado, em vez de descobrir depois que não era bem
  // aquilo que queria.
  await runStructurePreview(prompt, flow, hasActiveSubscription, output, btn, { expertise, audience, goal, modules, tone, usage });
}

// Etapa 1 — estrutura rápida, com streaming ao vivo. Não gasta cota alguma
// (nem grátis nem de assinatura): é intencionalmente barata pra IA gerar,
// então pode ser "grátis" mesmo pra quem já bateu no limite.
async function runStructurePreview(prompt, flow, hasActiveSubscription, output, btn, rawFields){
  const t = I18N[currentLang];
  btn.disabled = true;
  btn.textContent = t.btnGenerating;

  output.innerHTML =
    '<div class="structure-stream">' +
      '<div class="structure-stream-label">' + escapeHtml(t.structureStreamLabel || 'IA sta pensando la struttura del corso…') + '</div>' +
      '<pre class="structure-stream-raw" id="structure-raw"></pre>' +
    '</div>';
  const rawEl = document.getElementById('structure-raw');

  try {
    const response = await fetch(BACKEND_BASE + '/genera-struttura', {
      method: 'POST',
      headers: await buildAuthHeaders(),
      body: JSON.stringify({ prompt }),
    });
    if (!response.ok || !response.body) throw new Error('stream_non_disponibile');

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let raw = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      raw += decoder.decode(value, { stream: true });
      if (rawEl) { rawEl.textContent = raw; rawEl.scrollTop = rawEl.scrollHeight; }
    }

    const structure = extractCourseJSON(raw);
    if (!structure || !structure.modules || !structure.modules.length) throw new Error('estrutura_invalida');
    renderStructurePreview(structure, prompt, flow, hasActiveSubscription, output, btn, rawFields);
  } catch (e) {
    // FIX: se o streaming falhar por qualquer motivo (rede, proxy, etc),
    // pula direto pra geração completa — nunca deixa a pessoa travada só
    // porque a prévia (que é um "bônus") não funcionou.
    await proceedWithGeneration(prompt, flow, hasActiveSubscription, output, btn, rawFields);
  }
}

function renderStructurePreview(structure, prompt, flow, hasActiveSubscription, output, btn, rawFields){
  const t = I18N[currentLang];
  let html = '<div class="structure-preview">';
  html += '<div class="structure-preview-eyebrow">' + escapeHtml(t.structurePreviewEyebrow || 'Struttura proposta') + '</div>';
  html += '<h3>' + escapeHtml(structure.title || '') + '</h3>';
  if (structure.subtitle) html += '<p class="structure-preview-sub">' + escapeHtml(structure.subtitle) + '</p>';
  html += '<ol class="structure-modules">';
  (structure.modules || []).forEach(m => {
    html += '<li><strong>' + escapeHtml(m.title || '') + '</strong>' + (m.summary ? ' — ' + escapeHtml(m.summary) : '') + '</li>';
  });
  html += '</ol>';
  html += '<div class="structure-preview-actions">';
  html += '<button class="btn-generate" id="btn-approve-structure">' + escapeHtml(t.btnApproveStructure || 'Genera il corso completo') + ' →</button>';
  html += '<button class="btn-secondary" id="btn-restart-structure">' + escapeHtml(t.btnRestartStructure || 'Cambia argomento') + '</button>';
  html += '</div>';
  html += '</div>';
  output.innerHTML = html;

  document.getElementById('btn-approve-structure').onclick = () => proceedWithGeneration(prompt, flow, hasActiveSubscription, output, btn, rawFields);
  document.getElementById('btn-restart-structure').onclick = () => {
    output.innerHTML = '';
    document.getElementById('f-expertise').focus();
  };

  btn.disabled = false;
  updateButtonState();
}

// Etapa 2 — geração completa de verdade (aqui SIM gasta cota gratuita, de
// assinatura, ou dispara pagamento avulso, dependendo do plano escolhido).
async function proceedWithGeneration(prompt, flow, hasActiveSubscription, output, btn, rawFields){
  const t = I18N[currentLang];
  const { expertise, audience, goal, modules, tone, usage } = rawFields || {};

  // FIX (auditoria): assinante nunca passa pelo gate de free-tier local
  // (localStorage) — ele já é validado pela cota da assinatura no backend.
  // Sem essa checagem, alguém que já tinha usado a tentativa anônima do
  // navegador ficaria bloqueado na tela mesmo pagando pela assinatura.
  if (hasActiveSubscription) {
    await runGenerazioneGratis(prompt, btn, output, 'completo');
    return;
  }

  if (flow === 'free') {
    // FIX AUDITORIA: confirma com o backend (fonte da verdade) antes de
    // decidir — evita "achar" que ainda tem grátis (baseado só no
    // localStorage) e descobrir só depois de esperar a geração que não tinha mais.
    const isLoggedIn = !!(supabaseClient && window.__corsificioSession);
    const realStatus = await fetchRealFreeUsageStatus();
    if (realStatus && !realStatus.allowed) {
      showFreeLimitReached(output, !isLoggedIn && realStatus.isLoggedIn === false);
      return;
    }
    // Se por algum motivo não conseguimos confirmar com o backend (rede
    // instável, etc), cai de volta pra checagem local — melhor deixar
    // tentar (o backend vai recusar corretamente se for o caso) do que
    // travar a pessoa por causa de uma checagem extra que falhou.
    if (!realStatus) {
      const usedCount = getFreeUsageCount();
      if (usedCount >= 1 && !isLoggedIn) {
        showFreeLimitReached(output, true);
        return;
      }
      if (usedCount >= FREE_COURSE_LIMIT) {
        showFreeLimitReached(output, false);
        return;
      }
    }
    await runGenerazioneGratis(prompt, btn, output);
  } else if (flow === 'paid-completo') {
    await avviaPagamento('completo', prompt, btn, output);
  } else {
    const previewPrompt = buildPreviewPrompt(expertise, audience, goal, modules, tone, t.langNameForPrompt, usage);
    await runAnteprimaPro(previewPrompt, prompt, btn, output);
  }
}

// Limite dei corsi gratuiti: tracciato nel browser (localStorage), non per account.
// Chi cancella i dati del browser o usa un altro dispositivo riparte da zero — è un limite
// "morbido" pensato per orientare verso l'acquisto, non una vera sicurezza anti-abuso.
const FREE_COURSE_LIMIT = 3;

// FIX AUDITORIA: consulta o estado real de cota gratuita no backend (banco
// de dados), em vez de confiar só no contador local do navegador.
async function fetchRealFreeUsageStatus(){
  try {
    const deviceId = getOrCreateDeviceId();
    const response = await fetch(BACKEND_BASE + '/free-usage/stato?deviceId=' + encodeURIComponent(deviceId), {
      headers: await buildAuthHeaders(),
    });
    if (!response.ok) return null;
    return await response.json();
  } catch (e) { return null; }
}

function getFreeUsageCount(){
  return parseInt(localStorage.getItem('corsificio_free_used') || '0', 10);
}

function incrementFreeUsage(){
  const next = getFreeUsageCount() + 1;
  localStorage.setItem('corsificio_free_used', String(next));
  updateFreeUsageIndicator();
}

function showFreeLimitReached(output, needsLoginOnly){
  const t = I18N[currentLang];
  if (needsLoginOnly) {
    // BI FIX 5: marca localmente que o usuário viu o gate, para depois
    // sabermos atribuir a conversão (handleSignUp) a este evento específico.
    localStorage.setItem('corsificio_saw_login_gate', '1');
    trackClientEvent('login_gate_shown');
    // Fix: dopo 1 generazione anonima, chiediamo login invece di lasciare tutto su localStorage.
    output.innerHTML =
      '<div class="error-box">' +
        '<strong>' + escapeHtml(t.freeLoginGateTitle || t.freeLimitTitle) + '</strong><br>' +
        escapeHtml(t.freeLoginGateMsg || t.freeLimitMsg) +
        '<br><button class="btn-secondary" style="margin-top:12px" onclick="openAuthModal();">' + escapeHtml(t.btnLoginSignup) + '</button>' +
      '</div>';
    return;
  }
  output.innerHTML =
    '<div class="error-box">' +
      '<strong>' + escapeHtml(t.freeLimitTitle) + '</strong><br>' +
      escapeHtml(t.freeLimitMsg) +
      '<br><button class="btn-secondary" style="margin-top:12px" onclick="selectPlan(\'completo\'); document.querySelector(\'.panel\').scrollIntoView({behavior:\'smooth\'});">' + escapeHtml(t.btnUpgradeNow) + '</button>' +
    '</div>';
}

function updateFreeUsageIndicator(){
  const t = I18N[currentLang];
  const noteEl = document.getElementById('plan-picker-note');
  if (!noteEl) return;
  const activePlan = document.querySelector('.plan-pill.active');
  if (!activePlan || activePlan.getAttribute('data-plan') !== 'free') return;
  const remaining = Math.max(0, FREE_COURSE_LIMIT - getFreeUsageCount());
  if (remaining < FREE_COURSE_LIMIT) {
    noteEl.textContent = t.freeRemainingLabel.replace('{n}', remaining);
  } else {
    noteEl.setAttribute('data-i18n', 'planFreeTagline');
    noteEl.textContent = t.planFreeTagline;
  }
}

async function avviaPagamento(plan, prompt, btn, output){
  const t = I18N[currentLang];
  sessionStorage.setItem('corsificio_pending_prompt', prompt);
  sessionStorage.setItem('corsificio_pending_lang', currentLang);
  sessionStorage.setItem('corsificio_pending_plan', plan);
  btn.disabled = true;
  btn.textContent = t.btnRedirecting;
  try{
    const returnUrl = window.location.href.split('?')[0];
    const response = await fetch(BACKEND_BASE + "/crea-pagamento", {
      method: "POST",
      headers: await buildAuthHeaders(),
      body: JSON.stringify({ returnUrl, plan, currency: getCheckoutCurrencyBucket(), prompt })
    });
    if(!response.ok){
      const errBody = await response.json().catch(() => ({}));
      throw new Error(errBody.error || ("Richiesta non riuscita (" + response.status + ")"));
    }
    const data = await response.json();
    window.location.href = data.url;
  }catch(err){
    output.innerHTML = '<div class="error-box">' + t.errorPaymentStartPrefix + escapeHtml(friendlyErrorMessage(err, t)) + '</div>';
    btn.disabled = false;
    updateButtonState();
  }
}

// FIX PRODUTO 1: inicia o checkout de assinatura mensal (mesmo padrão de
// avviaPagamento, mas mode=subscription no backend).
async function avviaAbbonamento(){
  const t = I18N[currentLang];
  const btn = document.getElementById('btn-abbonamento') || document.getElementById('plan-pill-creator');
  const originalBtnHtml = btn ? btn.innerHTML : null;
  if (btn) { btn.disabled = true; btn.textContent = t.btnRedirecting; }
  try {
    if (!window.__corsificioSession) {
      openAuthModal();
      if (btn) { btn.disabled = false; btn.textContent = t.btnSubscribeMonthly || 'Abbonati'; }
      return;
    }
    const response = await fetch(BACKEND_BASE + "/crea-abbonamento", {
      method: "POST",
      headers: await buildAuthHeaders(),
      body: JSON.stringify({ currency: getCheckoutCurrencyBucket() })
    });
    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}));
      if (errBody.error === 'assinatura_ja_ativa') {
        if (confirm(t.subscriptionAlreadyActiveMsg || 'Hai già un abbonamento attivo. Vuoi aprire la gestione abbonamento?')) {
          apriPortaleCliente();
        }
        if (btn) { btn.disabled = false; btn.innerHTML = originalBtnHtml || (t.btnManageSubscription || 'Gestisci abbonamento'); }
        return;
      }
      throw new Error(errBody.error || ("Richiesta non riuscita (" + response.status + ")"));
    }
    const data = await response.json();
    sessionStorage.setItem('corsificio_pending_subscription', '1'); // FIX: marca que este redirect é de assinatura, não de compra de curso
    window.location.href = data.url;
  } catch (err) {
    alert(friendlyErrorMessage(err, t));
    if (btn) { btn.disabled = false; btn.innerHTML = originalBtnHtml || (t.btnSubscribeMonthly || 'Abbonati'); }
  }
}

// Abre o Portal de Cobrança do Stripe — cancelar, trocar cartão, ver
// faturas: tudo isso é gerido pelo próprio Stripe, não construímos nada
// disso aqui.
async function apriPortaleCliente(){
  const t = I18N[currentLang];
  try {
    const response = await fetch(BACKEND_BASE + "/portale-cliente", {
      method: "POST",
      headers: await buildAuthHeaders(),
    });
    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}));
      throw new Error(errBody.error || ("Richiesta non riuscita (" + response.status + ")"));
    }
    const data = await response.json();
    window.location.href = data.url;
  } catch (err) {
    alert(friendlyErrorMessage(err, t));
  }
}

// Busca o status da assinatura (usado/cota) pra mostrar no card e no painel de conta.
async function fetchSubscriptionStatus(){
  if (!window.__corsificioSession) return null;
  try {
    const response = await fetch(BACKEND_BASE + "/assinatura/stato", { headers: await buildAuthHeaders() });
    if (!response.ok) return null;
    return await response.json();
  } catch (e) { return null; }
}

// FIX (auditoria de design): mostra o status da assinatura (uso/cota, ou
// botão de assinar) dentro da própria barra lateral da conta — antes vivia
// espalhado numa seção de marketing separada no meio da página.
async function renderSidebarSubscriptionStatus(){
  const el = document.getElementById('sidebar-subscription-status');
  if (!el) return;
  const t = I18N[currentLang];
  const status = await fetchSubscriptionStatus();
  window.__activeSubscription = status;
  if (status && status.active) {
    el.innerHTML =
      '<p class="sidebar-note">' + escapeHtml(t.planMensileName || 'Piano Creator') + ' — ' +
      (status.usedCount ?? 0) + '/' + status.monthlyQuota + ' ' + escapeHtml(t.usedThisMonthLabel || 'usati questo mese') + '</p>' +
      '<button class="btn-secondary" onclick="apriPortaleCliente()">' + escapeHtml(t.btnManageSubscription || 'Gestisci abbonamento') + '</button>';
  } else {
    el.innerHTML = '<a href="#" class="more-details-toggle" style="display:block;" onclick="event.preventDefault(); avviaAbbonamento();">🌟 ' + escapeHtml(t.sidebarSubscribeCta || 'Passa al Piano Creator (€19,90/mese)') + '</a>';
  }
}

// FIX PRODUTO (vertical por nicho): carrega a vertical salva (se logado) e
// pré-seleciona no campo — chamado no login/carregamento da conta.
async function loadVerticalPreference(){
  const verticalEl = document.getElementById('f-vertical');
  if (!verticalEl) return;
  if (window.__corsificioSession) {
    try {
      const response = await fetch(BACKEND_BASE + '/profilo/vertical', { headers: await buildAuthHeaders() });
      if (response.ok) {
        const data = await response.json();
        if (data.preferredVertical) { verticalEl.value = data.preferredVertical; return; }
      }
    } catch (e) { /* cai pro localStorage abaixo */ }
  }
  const local = localStorage.getItem('corsificio_preferred_vertical');
  if (local) verticalEl.value = local;
}

// Salva a escolha — no backend se logado (sincroniza entre dispositivos),
// sempre também no localStorage como fallback pra quem não tem conta ainda.
async function saveVerticalPreference(){
  const verticalEl = document.getElementById('f-vertical');
  if (!verticalEl) return;
  const vertical = verticalEl.value;
  localStorage.setItem('corsificio_preferred_vertical', vertical);
  if (!window.__corsificioSession) return;
  try {
    await fetch(BACKEND_BASE + '/profilo/vertical', {
      method: 'POST',
      headers: await buildAuthHeaders(),
      body: JSON.stringify({ vertical: vertical || null }),
    });
  } catch (e) { /* silencioso — já salvou no localStorage, não é crítico */ }
}

let loadingInterval = null;
let progressInterval = null;

// FIX MERCADO: barra de progresso estimada, baseada no tempo médio real de
// geração (~60s, já anunciado na própria página). Nunca promete além do que
// cumpre: trava em 92% até a resposta chegar de verdade, só completa os
// 100% quando o conteúdo estiver pronto — honesto mesmo se demorar mais
// que o previsto num dia de pico.
function startProgressBar(output){
  clearInterval(progressInterval);
  const estimatedMs = 60000;
  const startedAt = Date.now();
  progressInterval = setInterval(() => {
    const elapsed = Date.now() - startedAt;
    const pct = Math.min(92, Math.round((elapsed / estimatedMs) * 100));
    const barEl = document.getElementById('gen-progress-bar'); // busca de novo a cada tick: o elemento é recriado sempre que o texto muda
    if (barEl) barEl.style.width = pct + '%';
  }, 300);
}
function finishProgressBar(){
  clearInterval(progressInterval);
  progressInterval = null;
  const barEl = document.getElementById('gen-progress-bar');
  if (barEl) barEl.style.width = '100%';
}

function startLoadingCycle(output){
  const t = I18N[currentLang];
  const messages = t.loadingMessages && t.loadingMessages.length ? t.loadingMessages : [t.emptyState];
  let i = 0;
  const renderLines = () => {
    const cur = Math.min(i, messages.length - 1);
    let html = '<div class="loading">';
    for (let j = 0; j < cur; j++) {
      html += '<div class="loading-line done">' + escapeHtml(messages[j]) + '</div>';
    }
    html += '<div class="loading-line active">' + escapeHtml(messages[cur]) + '<span class="cursor3"></span></div>';
    html += '</div>';
    html += '<div class="gen-progress-wrap"><div class="gen-progress-bar" id="gen-progress-bar"></div></div>';
    output.innerHTML = html;
  };
  renderLines();
  startProgressBar(output);
  clearInterval(loadingInterval);
  loadingInterval = setInterval(() => {
    if (i < messages.length - 1) i++;
    renderLines();
  }, 2200);
}

function stopLoadingCycle(){
  clearInterval(loadingInterval);
  loadingInterval = null;
  finishProgressBar();
}

async function runGenerazioneGratis(prompt, btn, output, planLabel){
  const t = I18N[currentLang];
  btn.disabled = true;
  btn.textContent = t.btnGenerating;
  startLoadingCycle(output);

  try{
    const response = await fetch(BACKEND_BASE + "/genera", {
      method: "POST",
      headers: await buildAuthHeaders(),
      body: JSON.stringify({ prompt, deviceId: getOrCreateDeviceId() })
    });

    if(!response.ok){
      let errBody = {};
      try{ errBody = await response.json(); }catch(e){ /* corpo non JSON, ignora */ }

      // FIX PRODUTO 1: erro específico de cota mensal esgotada — oferece
      // as duas saídas pedidas (comprar avulso ou aguardar o próximo ciclo)
      // em vez de só uma mensagem de erro genérica.
      if (errBody.error === 'quota_mensile_esgotada') {
        output.innerHTML =
          '<div class="error-box">' +
            '<strong>' + escapeHtml(t.quotaEsgotataTitle || 'Hai usato tutte le generazioni del mese') + '</strong><br>' +
            escapeHtml(t.quotaEsgotataMsg || 'Puoi comprare un corso singolo adesso, oppure aspettare il rinnovo del prossimo ciclo.') +
            (errBody.renewsAt ? '<br>' + escapeHtml((t.quotaRenewsOn || 'Si rinnova il {date}').replace('{date}', new Date(errBody.renewsAt).toLocaleDateString(navigator.language))) : '') +
            '<br><button class="btn-secondary" style="margin-top:10px" onclick="selectPlan(\'completo\'); document.querySelector(\'.panel\').scrollIntoView({behavior:\'smooth\'});">' + escapeHtml(t.btnBuySingleInstead || 'Compra un corso singolo') + '</button>' +
          '</div>';
        return;
      }

      // FIX AUDITORIA: mensagem específica pra pagamento de assinatura
      // recusado — sem isso, a pessoa cairia numa mensagem genérica de
      // "crie conta"/"acabaram seus grátis" mesmo já sendo assinante,
      // achando que o site "esqueceu" o plano dela.
      if (errBody.error === 'pagamento_assinatura_falhou') {
        output.innerHTML =
          '<div class="error-box">' +
            '<strong>' + escapeHtml(t.subPaymentFailedTitle || 'Non siamo riusciti ad addebitare il tuo abbonamento') + '</strong><br>' +
            escapeHtml(t.subPaymentFailedMsg || 'Aggiorna il tuo metodo di pagamento per continuare a usare il piano Creator.') +
            '<br><button class="btn-secondary" style="margin-top:10px" onclick="apriPortaleCliente()">' + escapeHtml(t.btnUpdatePayment || 'Aggiorna metodo di pagamento') + '</button>' +
          '</div>';
        return;
      }

      const detail = errBody.error ? " — " + errBody.error : "";
      throw new Error("Richiesta non riuscita (" + response.status + ")" + detail);
    }

    const data = await response.json();
    const course = await parseCourseWithRetry(data.text, prompt, BACKEND_BASE + "/genera");

    renderCourse(course, false);
    saveCourseToAccount(course, planLabel || 'sintetico');
    if (!data.subscriptionUsage) incrementFreeUsage(); // assinante não gasta a cota gratuita
  }catch(err){
    output.innerHTML = '<div class="error-box">' + t.errorPrefix + escapeHtml(friendlyErrorMessage(err, t)) + '<br><button class="btn-secondary" style="margin-top:10px" onclick="generateCourse()">' + t.retryButton + '</button></div>';
  }finally{
    stopLoadingCycle();
    btn.disabled = false;
    updateButtonState();
  }
}

// Fix: prima, un JSON malformato o incompleto andava dritto in errore, costringendo l'utente
// a ricliccare "riprova" (e a consumare di nuovo tempo/quota) per un problema che spesso si
// risolve da solo chiedendo di nuovo al modello con un prompt correttivo. Ora tentiamo un
// singolo retry automatico e silenzioso prima di mostrare l'errore.
async function parseCourseWithRetry(rawText, originalPrompt, endpoint, extraBody){
  try{
    const parsed = extractCourseJSON(rawText);
    const errors = validateCourse(parsed);
    if (errors.length === 0) return normalizeCourse(parsed);
    return await retryGenerationOnceForJSON(originalPrompt, errors.join('; '), endpoint, extraBody);
  }catch(e){
    return await retryGenerationOnceForJSON(originalPrompt, e.message, endpoint, extraBody);
  }
}

async function retryGenerationOnceForJSON(originalPrompt, failureReason, endpoint, extraBody){
  const correctivePrompt = originalPrompt +
    `\n\nIMPORTANT: your previous response failed to parse as valid JSON (reason: "${failureReason}"). ` +
    `Respond again with ONLY the raw JSON object described above — no markdown code fences, no commentary before or after, no trailing commas.`;
  const response = await fetch(endpoint || (BACKEND_BASE + "/genera"), {
    method: "POST",
    headers: await buildAuthHeaders(),
    body: JSON.stringify(Object.assign({ prompt: correctivePrompt }, extraBody || {}))
  });
  if (!response.ok) throw new Error("Richiesta non riuscita (" + response.status + ")");
  const data = await response.json();
  const parsed = extractCourseJSON(data.text);
  const errors = validateCourse(parsed);
  if (errors.length > 0) throw new Error("Risposta incompleta: " + errors.join("; "));
  return normalizeCourse(parsed);
}

// Anteprima gratuita del Modulo 1 per il piano professionale, con invito a sbloccare il resto.
async function runAnteprimaPro(previewPrompt, fullPrompt, btn, output){
  const t = I18N[currentLang];
  btn.disabled = true;
  btn.textContent = t.btnGenerating;
  startLoadingCycle(output);

  try{
    const response = await fetch(BACKEND_BASE + "/genera-anteprima", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: previewPrompt })
    });

    if(!response.ok){
      let detail = "";
      try{
        const errBody = await response.json();
        detail = errBody.error ? " — " + errBody.error : "";
      }catch(e){ /* ignora */ }
      throw new Error("Richiesta non riuscita (" + response.status + ")" + detail);
    }

    const data = await response.json();
    const course = await parseCourseWithRetry(data.text, previewPrompt, BACKEND_BASE + "/genera-anteprima");

    renderPreview(course, fullPrompt);
  }catch(err){
    output.innerHTML = '<div class="error-box">' + t.errorPreviewPrefix + escapeHtml(friendlyErrorMessage(err, t)) + '<br><button class="btn-secondary" style="margin-top:10px" onclick="generateCourse()">' + t.retryButton + '</button></div>';
  }finally{
    stopLoadingCycle();
    btn.disabled = false;
    updateButtonState();
  }
}

async function runGenerazionePremium(prompt, sessionId, plan, btn, output){
  const t = I18N[currentLang];
  btn.disabled = true;
  btn.textContent = t.btnGeneratingPremium;
  startLoadingCycle(output);

  try{
    const response = await fetch(BACKEND_BASE + "/genera-premium", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, sessionId, plan })
    });

    if(!response.ok){
      let detail = "";
      try{
        const errBody = await response.json();
        detail = errBody.error ? " — " + errBody.error : "";
      }catch(e){ /* ignora */ }
      throw new Error("Richiesta non riuscita (" + response.status + ")" + detail);
    }

    const data = await response.json();
    renderCourse(data.course, plan === 'professionale' || plan === 'completo');
    saveCourseToAccount(data.course, plan);
    // Pulisce l'URL e lo storage temporaneo: un F5 dopo il pagamento non deve rigenerare
    // il corso una seconda volta (e non deve farti pagare due volte la chiamata IA).
    sessionStorage.removeItem('corsificio_pending_prompt');
    sessionStorage.removeItem('corsificio_pending_plan');
    sessionStorage.removeItem('corsificio_pending_lang');
    window.history.replaceState({}, document.title, window.location.pathname);
  }catch(err){
    output.innerHTML = '<div class="error-box">' + t.errorPremiumPrefix + escapeHtml(friendlyErrorMessage(err, t)) + '</div>';
  }finally{
    stopLoadingCycle();
    btn.disabled = false;
    updateButtonState();
  }
}

// Al caricamento della pagina: se torniamo da Stripe dopo un pagamento, riprendi la generazione.
async function loadLiveCourseCounter(){
  const el = document.getElementById('trust-count');
  if (!el) return;
  try {
    const res = await fetch(BACKEND_BASE + '/stats/course-count');
    if (!res.ok) throw new Error('stats unavailable');
    const data = await res.json();
    if (typeof data.count === 'number') {
      const t = I18N[currentLang];
      const label = (t.heroTicker || 'corsi generati finora');
      el.textContent = data.count.toLocaleString(currentLang) + ' ' + label;
    }
  } catch (e) {
    // Sem contagem real disponível, mantém o texto genérico já presente no HTML
    // (nunca inventamos um número — é o mesmo compromisso de honestidade do resto do produto).
  }
}
window.addEventListener('DOMContentLoaded', loadLiveCourseCounter);

// FIX PRODUTO 2: página pública de certificado — busca os dados (somente
// leitura) e renderiza uma versão mínima do certificado, escondendo o
// gerador e o resto do site.
async function renderPublicCertificateView(slug){
  document.body.innerHTML = '<div style="max-width:600px;margin:60px auto;padding:20px;text-align:center;font-family:sans-serif;">Caricamento…</div>';
  try {
    const response = await fetch(BACKEND_BASE + '/certificato/' + encodeURIComponent(slug));
    if (!response.ok) throw new Error('non trovato');
    const data = await response.json();
    const t = I18N[currentLang];
    document.body.innerHTML =
      '<div style="max-width:600px;margin:60px auto;padding:20px;">' +
        '<div class="verify-badge">✓ ' + escapeHtml(t.verifiedBadgeLabel || 'Certificato verificato') + '</div>' +
        '<div class="certificate" id="certificate">' +
          '<div class="certificate-inner">' +
            '<div class="certificate-brand-row"><div class="seal-3d" style="width:24px;height:24px;"><div class="sq sq1"></div><div class="sq sq2"></div><div class="sq sq3"></div></div><span class="certificate-wordmark"><span class="ci">CORSI</span><span class="cf">FICIO</span></span></div>' +
            '<div class="certificate-eyebrow">' + escapeHtml(t.certLabel || 'Certificato di completamento') + '</div>' +
            '<div class="certificate-rule short"></div>' +
            '<div class="certificate-name">' + escapeHtml(data.student_name) + '</div>' +
            '<div class="certificate-rule name-rule"></div>' +
            '<div class="certificate-course">&ldquo;' + escapeHtml(data.course_title) + '&rdquo;</div>' +
            (data.module_count ? '<div class="certificate-modules">' + data.module_count + ' ' + escapeHtml(t.certModulesLabel || 'moduli') + (data.quiz_score != null ? ' · ' + Math.round(data.quiz_score) + '% ' + escapeHtml(t.quizScoreLabel || 'al quiz') : '') + '</div>' : '') +
            '<div class="certificate-rule short footer-rule"></div>' +
            '<div class="certificate-date">' + escapeHtml(data.completion_date) + '</div>' +
            '<div class="certificate-num">' + escapeHtml((t.issuedByLabel || 'Rilasciato da') + ': ' + (data.issued_by || 'Corsificio')) + '</div>' +
          '</div>' +
        '</div>' +
        '<p style="text-align:center;margin-top:20px;"><a href="' + window.location.pathname + '">Corsificio</a></p>' +
      '</div>';
  } catch (e) {
    document.body.innerHTML = '<div style="max-width:600px;margin:60px auto;padding:20px;text-align:center;font-family:sans-serif;">Certificato non trovato.</div>';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  syncAudienceFromLevel(); // FIX: garante valor inicial do campo antes de qualquer interação
  const params = new URLSearchParams(window.location.search);

  // FIX PRODUTO 1a: URL de verificação (?verify=slug) é a principal agora —
  // ?cert= continua funcionando por compatibilidade com links já gerados.
  const certSlug = params.get('verify') || params.get('cert');
  if (certSlug) {
    renderPublicCertificateView(certSlug);
    return;
  }

  const sessionId = params.get('session_id');
  // FIX: a URL de sucesso não pode mais mandar "paid=1" junto com o
  // session_id (era isso que quebrava o Stripe) — agora a própria
  // presença do session_id já significa "pagamento concluído".
  const paid = sessionId ? '1' : params.get('paid');
  const pendingLang = sessionStorage.getItem('corsificio_pending_lang');
  if (pendingLang) applyLanguage(pendingLang);

  // FIX PRODUTO 1: retorno de checkout de ASSINATURA — fluxo separado do
  // pagamento de curso avulso, já que aqui não tem prompt nenhum pra gerar.
  const isSubscriptionReturn = sessionStorage.getItem('corsificio_pending_subscription') === '1';
  if (paid === '1' && sessionId && isSubscriptionReturn) {
    sessionStorage.removeItem('corsificio_pending_subscription');
    window.history.replaceState({}, document.title, window.location.pathname);
    const t = I18N[currentLang];
    setTimeout(() => {
      alert(t.subscriptionActivatedMsg || 'Abbonamento attivato! Puoi generare i tuoi corsi ora.');
      renderSidebarSubscriptionStatus();
    }, 300);
    return;
  }

  if (paid === '1' && sessionId) {
    const pendingPrompt = sessionStorage.getItem('corsificio_pending_prompt');
    const pendingPlan = sessionStorage.getItem('corsificio_pending_plan') || 'professionale';
    if (pendingPrompt) {
      const btn = document.getElementById('btn-generate');
      const output = document.getElementById('output');
      runGenerazionePremium(pendingPrompt, sessionId, pendingPlan, btn, output);
    } else {
      // Pagamento riuscito ma abbiamo perso i dati del corso da generare (es. storage del
      // browser svuotato). Non lasciare la persona con una pagina vuota dopo aver pagato:
      // mostra un messaggio chiaro con l'ID sessione da usare per assistenza.
      const t = I18N[currentLang];
      document.getElementById('output').innerHTML =
        '<div class="error-box">' + t.paymentLostPrompt + '<br><br><strong>ID: ' + escapeHtml(sessionId) + '</strong></div>';
    }
    window.history.replaceState({}, document.title, window.location.pathname);
  } else if (paid === '0') {
    document.getElementById('output').innerHTML = '<div class="error-box">' + I18N[currentLang].paymentCancelled + '</div>';
    window.history.replaceState({}, document.title, window.location.pathname);
  }
});

const MODULE_ICONS = [
  '<circle cx="30" cy="14" r="8" fill="none" stroke="var(--rust)" stroke-width="2"/><line x1="30" y1="22" x2="30" y2="48" stroke="var(--ink)" stroke-width="2"/><line x1="30" y1="30" x2="14" y2="42" stroke="var(--ink)" stroke-width="2"/><line x1="30" y1="30" x2="46" y2="42" stroke="var(--ink)" stroke-width="2"/>',
  '<rect x="10" y="10" width="40" height="40" fill="none" stroke="var(--rust)" stroke-width="2"/><line x1="10" y1="25" x2="50" y2="25" stroke="var(--ink)" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="50" stroke="var(--ink)" stroke-width="2"/>',
  '<circle cx="30" cy="30" r="20" fill="none" stroke="var(--ink)" stroke-width="2"/><circle cx="30" cy="30" r="8" fill="none" stroke="var(--rust)" stroke-width="2"/>',
  '<path d="M10 45 L30 15 L50 45 Z" fill="none" stroke="var(--ink)" stroke-width="2"/><line x1="20" y1="35" x2="40" y2="35" stroke="var(--rust)" stroke-width="2"/>'
];

// Mostra il Modulo 1 gratis (piano professionale) con un invito a sbloccare il resto del corso.
function renderPreview(course, prompt){
  applyTheme(course.categoria);
  trackClientEvent('preview_shown'); // BI FIX 5: métrica 1 (preview -> pagamento)
  const t = I18N[currentLang];
  const output = document.getElementById('output');
  const m = (course.modules && course.modules[0]) || null;
  let html = '';

  html += '<div class="course-head">';
  html += '<div class="eyebrow">' + t.previewLabel + '</div>';
  html += '<h2>' + escapeHtml(course.title || '') + '</h2>';
  html += '<p>' + escapeHtml(course.subtitle || '') + '</p>';
  html += '</div>';

  if (m) {
    html += '<div class="cards">';
    html += '<div class="card">';
    html += '<div class="card-num">' + t.modulePrefix + ' 1</div>';
    html += '<h3>' + escapeHtml(m.title || '') + '</h3>';
    html += '<p class="summary">' + escapeHtml(m.summary || '') + '</p>';
    if (m.content) html += '<div class="lesson-content">' + formatContent(m.content) + '</div>';
    if (m.key_points && m.key_points.length) {
      html += '<ul class="points">';
      m.key_points.forEach(p => { html += '<li>' + escapeHtml(p) + '</li>'; });
      html += '</ul>';
    }
    if (m.quiz_question) {
      html += '<div class="quiz">';
      html += '<div class="q-label">' + t.quizLabel + '</div>';
      html += '<div class="q-text">' + escapeHtml(m.quiz_question) + '</div>';
      html += '<div class="a-text">' + escapeHtml(m.quiz_answer || '') + '</div>';
      html += '</div>';
    }
    html += '</div>';
    html += '</div>';
  }

  html += '<div class="paywall-card">';
  html += '<p>' + t.previewLockedNote + '</p>';
  html += '<button class="btn-generate" onclick="sbloccaProfessionale()">' + t.btnUnlockPro + '</button>';
  html += '</div>';

  output.innerHTML = html;
  window.__pendingProPrompt = prompt;
}

async function sbloccaProfessionale(){
  const t = I18N[currentLang];
  const prompt = window.__pendingProPrompt;
  const btn = document.getElementById('btn-generate');
  const output = document.getElementById('output');
  if (!prompt) return;
  await avviaPagamento('professionale', prompt, document.querySelector('.paywall-card .btn-generate') || btn, output);
}

// Extraída de renderCourse pra ser reaproveitada também no re-render de um
// único módulo depois de regenerado (FIX GAP 2).
function buildModuleCardHTML(m, i, isPremium, t){
  let html = '<div class="card" style="animation-delay:' + (i * 0.08) + 's" id="module-card-' + i + '">';
  html += '<div class="card-num-row"><div class="card-num-badge"><span>' + (i+1) + '</span></div><div class="card-num">' + t.modulePrefix + ' ' + (i+1) + '</div>';
  html += '<button type="button" class="module-regenerate-btn" id="regen-btn-' + i + '" onclick="regenerateModule(' + i + ')" title="' + escapeHtml(t.regenerateModuleTip || 'Rigenera questo modulo con IA') + '">🔄 ' + escapeHtml(t.regenerateModuleBtn || 'Rigenera') + '</button>';
  html += '<button type="button" class="module-social-btn" id="social-btn-' + i + '" onclick="copyModuleForSocial(' + i + ')" title="' + escapeHtml(t.copyModuleSocialTip || 'Copia questo modulo in formato breve per i social') + '">📱 ' + escapeHtml(t.copyModuleSocialBtn || 'Per i social') + '</button>';
  html += '</div>';
  if (isPremium && m.image_url) {
    html += '<img class="module-image" src="' + escapeHtml(m.image_url) + '" alt="' + t.modulePrefix + ' ' + (i+1) + '">';
  } else if (!isPremium) {
    html += '<svg class="module-image" viewBox="0 0 60 60" style="max-width:100px;height:100px;margin:0 auto 14px;display:block;background:var(--surface-2);border-radius:4px;padding:10px;box-sizing:border-box;">' + MODULE_ICONS[i % MODULE_ICONS.length] + '</svg>';
  }
  html += '<h3 contenteditable="true" data-editable="module-title" data-idx="' + i + '">' + escapeHtml(m.title || '') + '</h3>';
  html += '<p class="summary" contenteditable="true" data-editable="module-summary" data-idx="' + i + '">' + escapeHtml(m.summary || '') + '</p>';
  if (m.content) {
    html += '<div class="lesson-content" contenteditable="true" data-editable="module-content" data-idx="' + i + '">' + formatContent(m.content) + '</div>';
  }
  if(m.key_points && m.key_points.length){
    html += '<ul class="points">';
    m.key_points.forEach(p => { html += '<li>' + escapeHtml(p) + '</li>'; });
    html += '</ul>';
  }
  if(m.quiz_question){
    html += '<div class="quiz">';
    html += '<div class="q-label">' + t.quizLabel + '</div>';
    html += '<div class="q-text">' + escapeHtml(m.quiz_question) + '</div>';
    html += '<div class="a-text">' + escapeHtml(m.quiz_answer || '') + '</div>';
    html += '</div>';
  }
  if(m.delivery_tip){
    html += '<div class="quiz" style="margin-top:10px;">';
    html += '<div class="q-label">' + t.deliveryTipLabel + '</div>';
    html += '<div class="a-text" style="font-style:normal;">' + escapeHtml(m.delivery_tip) + '</div>';
    html += '</div>';
  }
  html += '</div>';
  return html;
}

// FIX GAP 2: regenera SÓ o módulo clicado via IA, sem refazer o curso
// inteiro — pede pro backend reescrever mantendo coerência com o resto
// (título do curso + títulos dos outros módulos como contexto).
// FIX PRODUTO 4: formata UM módulo em texto curto pra postar em rede social
// (WhatsApp Status, Instagram, etc) — bem diferente de copyCourse() (que
// copia o curso inteiro em texto corrido, mais pra uso interno/arquivo).
function copyModuleForSocial(idx){
  const t = I18N[currentLang];
  const course = window.__lastCourse;
  const btn = document.getElementById('social-btn-' + idx);
  if (!course || !course.modules || !course.modules[idx]) return;
  const m = course.modules[idx];

  const keyPoint = (m.key_points && m.key_points[0]) ? m.key_points[0] : (m.summary || '');
  const text =
    '💡 ' + (m.title || '') + '\n\n' +
    (m.summary || '') + '\n\n' +
    (keyPoint ? '👉 ' + keyPoint + '\n\n' : '') +
    (t.socialPostCourseCredit || 'Curso completo: ') + '"' + (course.title || '') + '"';

  navigator.clipboard.writeText(text).then(() => {
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ ' + escapeHtml(t.copiedButton || 'Copiato!');
      setTimeout(() => { btn.innerHTML = orig; }, 1500);
    }
  });
}

// FIX PRODUTO 5: tradução simultânea do curso já gerado, reaproveitando a
// estrutura (mais barato que gerar do zero em cada idioma).
const TRANSLATE_LANG_LIST = [
  { code: 'it', langName: 'Italian', label: 'Italiano' },
  { code: 'en', langName: 'English', label: 'English' },
  { code: 'es', langName: 'Spanish', label: 'Español' },
  { code: 'fr', langName: 'French', label: 'Français' },
  { code: 'de', langName: 'German', label: 'Deutsch' },
  { code: 'pt', langName: 'Portuguese', label: 'Português' },
];
window.__courseTranslations = {};
window.__activeTranslationLang = null;

// FIX (auditoria de design): agrupa ações secundárias (tradução, compartilhar)
// num só bloco recolhido, pra não competir visualmente com o que importa.
function toggleMoreActions(evt){
  evt.preventDefault();
  const block = document.getElementById('more-actions-block');
  if (block) block.style.display = block.style.display === 'none' ? 'block' : 'none';
}

function toggleTranslatePanel(evt){
  evt.preventDefault();
  const body = document.getElementById('translate-panel-body');
  if (body) body.style.display = body.style.display === 'none' ? 'block' : 'none';
}

function renderTranslateLangOptions(){
  const el = document.getElementById('translate-lang-options');
  if (!el) return;
  el.innerHTML = TRANSLATE_LANG_LIST
    .filter(l => l.code !== currentLang) // não faz sentido "traduzir" pro idioma que já está sendo exibido
    .map(l => '<label class="translate-lang-check"><input type="checkbox" value="' + l.code + '"> ' + l.label + '</label>')
    .join('');
}

async function runTranslateCourse(){
  const t = I18N[currentLang];
  const course = window.__lastCourse;
  const statusEl = document.getElementById('translate-status');
  const btn = document.getElementById('btn-run-translate');
  if (!course) return;

  const checked = Array.from(document.querySelectorAll('#translate-lang-options input:checked')).map(i => i.value);
  if (!checked.length) return;
  if (checked.length > 3) {
    if (statusEl) statusEl.textContent = t.translateMaxLangs || 'Puoi selezionare fino a 3 lingue per volta.';
    return;
  }

  if (!window.__originalCourseForTranslation) window.__originalCourseForTranslation = course;
  btn.disabled = true;
  for (const code of checked) {
    const langInfo = TRANSLATE_LANG_LIST.find(l => l.code === code);
    if (!langInfo) continue;
    if (statusEl) statusEl.textContent = (t.translatingLabel || 'Traduzione in corso:') + ' ' + langInfo.label + '…';
    try {
      const response = await fetch(BACKEND_BASE + '/traduci-corso', {
        method: 'POST',
        headers: await buildAuthHeaders(),
        body: JSON.stringify({ course: window.__originalCourseForTranslation, targetLangName: langInfo.langName }),
      });
      if (!response.ok) throw new Error('http_' + response.status);
      const data = await response.json();
      window.__courseTranslations[code] = data.course;
    } catch (e) {
      if (statusEl) statusEl.textContent = (t.translateError || 'Errore traducendo in') + ' ' + langInfo.label;
    }
  }
  if (statusEl) statusEl.textContent = t.translateDoneLabel || 'Fatto!';
  btn.disabled = false;
  renderTranslateTabs();
}

function renderTranslateTabs(){
  const tabsEl = document.getElementById('translate-tabs');
  if (!tabsEl) return;
  const codes = Object.keys(window.__courseTranslations || {});
  if (!codes.length) { tabsEl.innerHTML = ''; return; }
  const t = I18N[currentLang];
  let html = '<span class="translate-tabs-label">' + escapeHtml(t.translateTabsLabel || 'Versioni:') + '</span>';
  html += '<button class="translate-tab' + (!window.__activeTranslationLang ? ' active' : '') + '" onclick="switchCourseLanguage(null)">' + escapeHtml(t.translateOriginalLabel || 'Originale') + '</button>';
  codes.forEach(code => {
    const info = TRANSLATE_LANG_LIST.find(l => l.code === code);
    html += '<button class="translate-tab' + (window.__activeTranslationLang === code ? ' active' : '') + '" onclick="switchCourseLanguage(\'' + code + '\')">' + escapeHtml(info ? info.label : code) + '</button>';
  });
  tabsEl.innerHTML = html;
}

function switchCourseLanguage(code){
  window.__activeTranslationLang = code;
  const courseToShow = code ? window.__courseTranslations[code] : (window.__originalCourseForTranslation || window.__lastCourse);
  renderCourse(courseToShow, window.__courseIsPremium);
}

async function regenerateModule(idx){
  const course = window.__lastCourse;
  if (!course || !course.modules || !course.modules[idx]) return;
  const t = I18N[currentLang];
  const btn = document.getElementById('regen-btn-' + idx);
  const cardEl = document.getElementById('module-card-' + idx);
  if (btn) { btn.disabled = true; btn.textContent = '⏳ ' + (t.regeneratingLabel || 'Un attimo...'); }

  try {
    const otherTitles = course.modules.map((m, i) => i === idx ? null : m.title).filter(Boolean);
    const res = await fetch(BACKEND_BASE + '/rigenera-modulo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        courseTitle: course.title,
        moduleTitle: course.modules[idx].title,
        moduleIndex: idx,
        totalModules: course.modules.length,
        otherModuleTitles: otherTitles,
        langName: t.langNameForPrompt,
      })
    });
    if (!res.ok) throw new Error('http_' + res.status);
    const data = await res.json();
    if (!data || !data.content) throw new Error('resposta_invalida');

    course.modules[idx] = Object.assign({}, course.modules[idx], {
      content: data.content,
      key_points: data.key_points || course.modules[idx].key_points,
      quiz_question: data.quiz_question || course.modules[idx].quiz_question,
      quiz_answer: data.quiz_answer || course.modules[idx].quiz_answer,
    });

    const isPremium = !!(course.modules[idx].image_url);
    const newCardHTML = buildModuleCardHTML(course.modules[idx], idx, isPremium, t);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = newCardHTML;
    cardEl.replaceWith(wrapper.firstElementChild);
  } catch (e) {
    if (btn) { btn.disabled = false; btn.textContent = '⚠ ' + (t.regenerateErrorLabel || 'Errore, riprova'); }
    setTimeout(() => { if (btn) { btn.disabled = false; btn.innerHTML = '🔄 ' + escapeHtml(t.regenerateModuleBtn || 'Rigenera'); } }, 2500);
  }
}


function renderCourse(course, isPremium){
  applyTheme(course.categoria);
  const t = I18N[currentLang];
  const output = document.getElementById('output');
  let html = '';

  html += '<div class="course-head">';
  html += '<div class="eyebrow">' + t.courseGeneratedLabel + (isPremium ? t.premiumSuffix : '') + '</div>';
  html += '<h2 contenteditable="true" data-editable="title">' + escapeHtml(course.title || '') + '</h2>';
  html += '<p contenteditable="true" data-editable="subtitle">' + escapeHtml(course.subtitle || '') + '</p>';
  html += '<p class="editable-hint">✎ ' + escapeHtml(t.editableHint) + '</p>';
  html += '</div>';

  html += '<div class="cards">';
  (course.modules || []).forEach((m, i) => {
    html += buildModuleCardHTML(m, i, isPremium, t);
  });
  html += '</div>';

  // FIX: sugestões honestas de aprofundamento — rótulo deixa claro que são
  // pontos de partida pra continuar estudando, NUNCA "fontes usadas" pra
  // montar o curso (a IA não pesquisa ao vivo, então afirmar isso seria
  // enganoso).
  if (course.further_reading && course.further_reading.length) {
    html += '<div class="further-reading-block">';
    html += '<h4>' + escapeHtml(t.furtherReadingLabel || 'Punti di partenza per approfondire') + '</h4>';
    html += '<p class="further-reading-disclaimer">' + escapeHtml(t.furtherReadingDisclaimer || "Suggerimenti generali, non fonti usate per generare questo corso — l'IA non fa ricerche in tempo reale.") + '</p>';
    html += '<ul class="further-reading-list">';
    course.further_reading.forEach(item => { html += '<li>' + escapeHtml(item) + '</li>'; });
    html += '</ul>';
    html += '</div>';
  }

  if (course.sales_pitch || course.suggested_price_range || (course.faq && course.faq.length)) {
    html += '<div class="sales-kit">';
    html += '<div class="course-head" style="margin-bottom:16px;"><div class="eyebrow">' + t.salesKitLabel + '</div></div>';
    if (course.sales_pitch) {
      html += '<div class="sales-kit-block"><h4>' + t.salesPitchLabel + '</h4><p>' + escapeHtml(course.sales_pitch) + '</p></div>';
    }
    if (course.suggested_price_range) {
      html += '<div class="sales-kit-block"><h4>' + t.priceLabel + '</h4><p>' + escapeHtml(course.suggested_price_range) + '</p></div>';
    }
    if (course.faq && course.faq.length) {
      html += '<div class="sales-kit-block"><h4>' + t.faqLabel + '</h4>';
      course.faq.forEach(f => {
        html += '<div class="faq-item"><div class="faq-q">' + escapeHtml(f.question) + '</div><div class="faq-a">' + escapeHtml(f.answer) + '</div></div>';
      });
      html += '</div>';
    }
    html += '</div>';
  }

  html += '<div class="actions">';
  html += '<button class="btn-secondary" onclick="copyCourse()">' + t.copyButton + '</button>';
  html += '<button class="btn-secondary" onclick="window.print()">' + t.printButton + '</button>';
  if (isPremium && course.modules && course.modules.length) {
    html += '<button class="btn-secondary" onclick="startQuiz()">' + t.btnStartQuiz + '</button>';
  }
  html += '</div>';

  // FIX (auditoria de design): antes, tradução + compartilhar ficavam como
  // 2 blocos sempre visíveis embaixo das ações principais — competindo com
  // o que realmente importa (baixar/copiar/fazer o quiz). Agora entram num
  // único bloco secundário, recolhido por padrão, sem sumir de vez.
  html += '<a href="#" class="more-details-toggle" id="more-actions-toggle" onclick="toggleMoreActions(event)">⋯ ' + escapeHtml(t.moreActionsToggle || 'Altre azioni (traduzioni, condividi)') + '</a>';
  html += '<div id="more-actions-block" style="display:none;">';

  // FIX PRODUTO 5: tradução simultânea — só faz sentido pra planos pagos
  // (Completo/Professionale/assinatura), já que cada idioma extra tem custo
  // real de IA. Reaproveita a estrutura já gerada em vez de criar do zero.
  if (isPremium) {
    html += '<div class="translate-panel" id="translate-panel">';
    html += '<a href="#" class="more-details-toggle" id="translate-toggle" onclick="toggleTranslatePanel(event)">🌍 ' + escapeHtml(t.translateToggleLabel || 'Genera anche in altre lingue') + '</a>';
    html += '<div id="translate-panel-body" style="display:none;">';
    html += '<div class="translate-lang-options" id="translate-lang-options"></div>';
    html += '<button class="btn-secondary" id="btn-run-translate" onclick="runTranslateCourse()">' + escapeHtml(t.btnTranslateNow || 'Traduci') + '</button>';
    html += '<div id="translate-status" class="translate-status"></div>';
    html += '</div>';
    html += '<div class="translate-tabs" id="translate-tabs"></div>';
    html += '</div>';
  }

  html += '<div class="share-row">';
  html += '<span class="share-label">' + escapeHtml(t.shareLabel) + '</span>';
  html += '<button class="icon-btn share-btn" onclick="shareCourse(\'whatsapp\')" title="WhatsApp" aria-label="Condividi su WhatsApp">' + ICONS.whatsapp + '</button>';
  html += '<button class="icon-btn share-btn" onclick="shareCourse(\'x\')" title="X" aria-label="Condividi su X">' + ICONS.x + '</button>';
  html += '<button class="icon-btn share-btn" onclick="shareCourse(\'linkedin\')" title="LinkedIn" aria-label="Condividi su LinkedIn">' + ICONS.linkedin + '</button>';
  html += '<button class="icon-btn share-btn" onclick="shareCourse(\'copy\')" title="' + escapeHtml(t.shareCopyLink) + '" aria-label="' + escapeHtml(t.shareCopyLink) + '">' + ICONS.link + '</button>';
  html += '</div>';

  html += '</div>'; // fecha #more-actions-block

  output.innerHTML = html;
  window.__lastCourse = course;
  window.__courseIsPremium = isPremium;
  if (isPremium) {
    renderTranslateLangOptions();
    renderTranslateTabs();
  }
}

const ICONS = {
  whatsapp: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5s-.7-1.6-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 15 3.6 13.5 3.6 12c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.8 8.3-8.4 8.3z"/></svg>',
  x: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.6L18.9 2zm-1.2 18h1.7L7.4 4h-1.8l12.1 16z"/></svg>',
  linkedin: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.7A1.7 1.7 0 1 1 8.2 7a1.7 1.7 0 0 1-1.7 1.7zM19 19h-3v-4.5c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3v-9h2.9v1.3a3.1 3.1 0 0 1 2.8-1.5c3 0 3.6 2 3.6 4.5z"/></svg>',
  link: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.5-1.5"/></svg>',
  lock: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  noSub: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 1 3.2 6.9"/><path d="M3 21v-5h5"/></svg>',
  refund: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 4v5h-5"/></svg>'
};

function shareCertificate(channel){
  const t = I18N[currentLang];
  const cert = window.__lastCertificate;
  // FIX (marketing/UX): usa o link público REAL do certificado quando já
  // estiver pronto (gerado em segundo plano) — antes sempre mandava a URL
  // genérica da home, o que matava o efeito de prova social do link.
  const url = (cert && cert.publicUrl) || window.location.href.split('?')[0].split('#')[0];
  const text = (t.certShareText || '').replace('{title}', cert ? cert.courseTitle : '');
  if (channel === 'whatsapp') {
    window.open('https://wa.me/?text=' + encodeURIComponent(text + ' ' + url), '_blank');
  } else if (channel === 'x') {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url), '_blank');
  } else if (channel === 'linkedin') {
    window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url), '_blank');
  } else if (channel === 'copy') {
    navigator.clipboard.writeText(url).then(() => {
      const btn = document.querySelector('.share-btn[title="' + t.shareCopyLink + '"]');
      if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = '✓';
        btn.classList.add('copied');
        setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('copied'); }, 1400);
      }
    });
  }
}

function shareCourse(channel){
  const t = I18N[currentLang];
  const course = window.__lastCourse;
  const url = window.location.href.split('?')[0].split('#')[0];
  const text = (t.shareText || '').replace('{title}', course ? course.title : '');
  if (channel === 'whatsapp') {
    window.open('https://wa.me/?text=' + encodeURIComponent(text + ' ' + url), '_blank');
  } else if (channel === 'x') {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url), '_blank');
  } else if (channel === 'linkedin') {
    window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url), '_blank');
  } else if (channel === 'copy') {
    navigator.clipboard.writeText(url).then(() => {
      const btn = document.querySelector('.share-btn[title="' + t.shareCopyLink + '"]');
      if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = '✓';
        btn.classList.add('copied');
        setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('copied'); }, 1400);
      }
    });
  }
}

// ---------- Quiz finale + certificato di completamento ----------
function normalizeForMatch(s){
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}\s]/gu, '');
}
function scoreAnswer(userAnswer, correctAnswer){
  const correctWords = normalizeForMatch(correctAnswer).split(/\s+/).filter(w => w.length > 3);
  if (correctWords.length === 0) return 1;
  const userNorm = ' ' + normalizeForMatch(userAnswer) + ' ';
  let matched = 0;
  correctWords.forEach(w => { if (userNorm.indexOf(' ' + w) !== -1 || userNorm.indexOf(w + ' ') !== -1) matched++; });
  return matched / correctWords.length;
}

function startQuiz(){
  const course = window.__lastCourse;
  if (!course) return;
  const t = I18N[currentLang];
  const output = document.getElementById('output');

  const modulesWithQuiz = (course.modules || []).filter(m => m.quiz_question);
  const totalFields = modulesWithQuiz.length + 1; // + name field

  let html = '<div class="course-head"><div class="eyebrow">' + t.quizFinalLabel + '</div><h2>' + escapeHtml(course.title) + '</h2></div>';
  html += '<div class="quiz-progress-wrap"><div class="quiz-progress-bar" id="quiz-progress-bar" style="width:0%"></div></div>';
  html += '<div class="quiz-progress-label" id="quiz-progress-label">0 / ' + totalFields + '</div>';
  html += '<div class="quiz-form">';
  html += '<label>' + t.certNameLabel + '</label>';
  html += '<input type="text" id="cert-name" placeholder="' + escapeHtml(t.certNamePlaceholder) + '" oninput="updateQuizProgress()">';
  modulesWithQuiz.forEach((m, i) => {
    const realIdx = course.modules.indexOf(m);
    html += '<div class="quiz-form-item">';
    html += '<div class="q-label">' + t.modulePrefix + ' ' + (realIdx+1) + '</div>';
    html += '<div class="q-text">' + escapeHtml(m.quiz_question) + '</div>';
    html += '<textarea class="quiz-answer-input" data-idx="' + i + '" rows="2" oninput="updateQuizProgress()"></textarea>';
    html += '</div>';
  });
  html += '<button class="btn-generate" onclick="submitQuiz()">' + t.btnSubmitQuiz + '</button>';
  html += '<div id="quiz-result"></div>';
  html += '</div>';

  output.innerHTML = html;
  output.scrollIntoView({ behavior: 'smooth' });
}

function updateQuizProgress(){
  const nameInput = document.getElementById('cert-name');
  const answers = document.querySelectorAll('.quiz-answer-input');
  const total = answers.length + 1;
  let filled = nameInput && nameInput.value.trim() ? 1 : 0;
  answers.forEach(a => { if (a.value.trim()) filled++; });
  const pct = Math.round((filled / total) * 100);
  const bar = document.getElementById('quiz-progress-bar');
  const label = document.getElementById('quiz-progress-label');
  if (bar) bar.style.width = pct + '%';
  if (label) label.textContent = filled + ' / ' + total;
}

function submitQuiz(){
  const course = window.__lastCourse;
  const t = I18N[currentLang];
  const nameInput = document.getElementById('cert-name');
  const name = nameInput.value.trim();
  const resultEl = document.getElementById('quiz-result');

  if (!name) {
    resultEl.innerHTML = '<div class="error-box">' + t.certNameRequired + '</div>';
    return;
  }

  const modulesWithQuiz = (course.modules || []).filter(m => m.quiz_question);
  let totalScore = 0;
  modulesWithQuiz.forEach((m, i) => {
    const input = document.querySelector('.quiz-answer-input[data-idx="' + i + '"]');
    const userAnswer = input ? input.value : '';
    totalScore += scoreAnswer(userAnswer, m.quiz_answer);
  });
  const avgScore = modulesWithQuiz.length ? totalScore / modulesWithQuiz.length : 1;
  // Fix: 0.4 (40% di parole chiave indovinate) era troppo permissivo — un certificato ottenuto
  // quasi tirando a indovinare svaluta il certificato stesso agli occhi di chi lo riceve o lo
  // guarda. Alzato a 0.65; resta comunque un match fuzzy per parole chiave, non un controllo rigido.
  const passed = avgScore >= 0.65;
  // BI FIX 5: métrica 2 (taxa de conclusão do quiz, desde o corte pra 65%)
  trackClientEvent(passed ? 'quiz_passed' : 'quiz_failed', { score: avgScore });

  if (passed) {
    renderCertificate(name, course, avgScore);
  } else {
    resultEl.innerHTML = '<div class="error-box">' + t.quizFailMessage + '<br><button class="btn-secondary" style="margin-top:10px" onclick="startQuiz()">' + t.retryButton + '</button></div>';
  }
}

function renderCertificate(name, course, quizScore){
  const t = I18N[currentLang];
  const output = document.getElementById('output');
  const dateStr = new Date().toLocaleDateString(currentLang, { year: 'numeric', month: 'long', day: 'numeric' });
  const certNum = 'CERT-' + new Date().getFullYear() + '-' + String(Math.floor(1000 + Math.random() * 9000));
  const moduleCount = (course.modules || []).length;

  let html = '<div class="certificate" id="certificate">';
  html += '<div class="certificate-inner">';
  html += '<div class="certificate-brand-row"><div class="seal-3d" style="width:24px;height:24px;"><div class="sq sq1"></div><div class="sq sq2"></div><div class="sq sq3"></div></div><span class="certificate-wordmark"><span class="ci">CORSI</span><span class="cf">FICIO</span></span></div>';
  html += '<div class="certificate-tagline">micro-corsi con IA</div>';
  html += '<div class="certificate-eyebrow">' + t.certLabel + '</div>';
  html += '<div class="certificate-rule short"></div>';
  html += '<div class="certificate-issued-to">' + t.certIssuedTo + '</div>';
  html += '<div class="certificate-name">' + escapeHtml(name) + '</div>';
  html += '<div class="certificate-rule name-rule"></div>';
  html += '<div class="certificate-body">' + t.certBodyText + '</div>';
  html += '<div class="certificate-course">&ldquo;' + escapeHtml(course.title) + '&rdquo;</div>';
  html += '<div class="certificate-modules">' + moduleCount + ' ' + t.certModulesLabel + '</div>';
  html += '<div class="certificate-rule short footer-rule"></div>';
  html += '<div class="certificate-method"><span class="certificate-method-label">' + escapeHtml(t.certMethodLabel) + '</span><div class="certificate-method-steps">' +
    t.certMethodSteps.map(step => '<span class="certificate-method-step">' + escapeHtml(step) + '</span>').join('<span class="certificate-method-arrow">→</span>') +
    '</div></div>';
  html += '<div class="certificate-rule short footer-rule"></div>';
  html += '<div class="certificate-date">' + dateStr + '</div>';
  html += '<div class="certificate-num">N. ' + certNum + '</div>';
  html += '<div class="certificate-disclaimer">' + escapeHtml(t.certDisclaimer) + '</div>';
  html += '</div>';
  html += '</div>';
  html += '<div class="actions"><button class="btn-secondary" onclick="window.print()">' + t.printButton + '</button></div>';
  html += '<div class="share-row">';
  html += '<span class="share-label">' + escapeHtml(t.shareLabel) + '</span>';
  html += '<button class="icon-btn share-btn" onclick="shareCertificate(\'whatsapp\')" title="WhatsApp" aria-label="Condividi su WhatsApp">' + ICONS.whatsapp + '</button>';
  html += '<button class="icon-btn share-btn" onclick="shareCertificate(\'x\')" title="X" aria-label="Condividi su X">' + ICONS.x + '</button>';
  html += '<button class="icon-btn share-btn" onclick="shareCertificate(\'linkedin\')" title="LinkedIn" aria-label="Condividi su LinkedIn">' + ICONS.linkedin + '</button>';
  html += '<button class="icon-btn share-btn" onclick="shareCertificate(\'copy\')" title="' + escapeHtml(t.shareCopyLink) + '" aria-label="' + escapeHtml(t.shareCopyLink) + '">' + ICONS.link + '</button>';
  html += '</div>';

  output.innerHTML = html;
  output.scrollIntoView({ behavior: 'smooth' });

  // FIX PRODUTO 2 (revisão de marketing/UX): guarda os dados do certificado
  // e já dispara a geração do link público em segundo plano, silenciosa —
  // assim os ícones de compartilhar (WhatsApp/X/LinkedIn/copiar) mandam o
  // link REAL da conquista da pessoa, não a home genérica do site. Antes
  // disso era um bug: o "compartilhar" não levava pra nada específico.
  window.__lastCertificate = { name, courseTitle: course.title, dateStr, moduleCount, quizScore: (typeof quizScore === 'number' ? Math.round(quizScore * 100) : null), publicUrl: null };
  ensurePublicCertificateLink();

  const actionsRow = document.querySelector('#output .actions');
  if (actionsRow) {
    const imgBtn = document.createElement('button');
    imgBtn.className = 'btn-secondary';
    imgBtn.id = 'btn-cert-image';
    imgBtn.textContent = t.shareAsImageButton || 'Condividi come immagine';
    imgBtn.onclick = shareCertificateAsImage;
    actionsRow.appendChild(imgBtn);
  }
}

// Gera o link público em segundo plano, sem exigir clique — os botões de
// compartilhar (ícones) usam window.__lastCertificate.publicUrl assim que
// estiver pronto; se ainda não tiver terminado quando a pessoa clicar em
// compartilhar, cai de volta pro link do site (nunca trava a ação).
async function ensurePublicCertificateLink(){
  const cert = window.__lastCertificate;
  if (!cert) return;
  try {
    const response = await fetch(BACKEND_BASE + '/certificato/pubblica', {
      method: 'POST',
      headers: await buildAuthHeaders(),
      body: JSON.stringify({
        courseTitle: cert.courseTitle,
        studentName: cert.name,
        completionDate: cert.dateStr,
        moduleCount: cert.moduleCount,
        quizScore: cert.quizScore,
      }),
    });
    if (!response.ok) return;
    const data = await response.json();
    if (window.__lastCertificate) window.__lastCertificate.publicUrl = data.url;
  } catch (e) { /* silencioso — compartilhar cai de volta pro link do site */ }
}

// FIX PRODUTO 2: captura o certificado como PNG direto no navegador (sem
// backend de renderização de imagem) e baixa o arquivo, pronto pra postar.
async function shareCertificateAsImage(){
  const t = I18N[currentLang];
  const el = document.getElementById('certificate');
  const btn = document.getElementById('btn-cert-image');
  if (!el || !window.html2canvas) return;
  if (btn) { btn.disabled = true; btn.textContent = t.generatingImageLabel || 'Un attimo...'; }
  try {
    const canvas = await window.html2canvas(el, { scale: 2, backgroundColor: '#ffffff' });
    const link = document.createElement('a');
    link.download = 'corsificio-certificato.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (e) {
    alert(t.generatingImageError || "Non è stato possibile generare l'immagine.");
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = t.shareAsImageButton || 'Condividi come immagine'; }
  }
}




function copyCourse(){
  const c = window.__lastCourse;
  if(!c) return;
  const t = I18N[currentLang];
  let text = c.title + '\n' + c.subtitle + '\n\n';
  (c.modules || []).forEach((m, i) => {
    text += t.modulePrefix + ' ' + (i+1) + ': ' + m.title + '\n';
    text += m.summary + '\n\n';
    if (m.content) text += m.content + '\n\n';
    (m.key_points || []).forEach(p => text += '- ' + p + '\n');
    text += t.quizLabel + ': ' + m.quiz_question + '\n' + m.quiz_answer + '\n\n';
    if (m.delivery_tip) text += t.deliveryTipLabel + ': ' + m.delivery_tip + '\n\n';
  });
  if (c.sales_pitch || c.suggested_price_range || (c.faq && c.faq.length)) {
    text += '--- ' + t.salesKitLabel + ' ---\n\n';
    if (c.sales_pitch) text += t.salesPitchLabel + ':\n' + c.sales_pitch + '\n\n';
    if (c.suggested_price_range) text += t.priceLabel + ': ' + c.suggested_price_range + '\n\n';
    if (c.faq && c.faq.length) {
      text += t.faqLabel + ':\n';
      c.faq.forEach(f => { text += '- ' + f.question + '\n  ' + f.answer + '\n'; });
    }
  }
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.btn-secondary');
    if(btn){ const orig = btn.textContent; btn.textContent = t.copiedButton; setTimeout(() => btn.textContent = orig, 1500); }
  });
}

function escapeHtml(str){
  if(!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// BI FIX 5: dispara eventos de analytics pro backend (/track). Nunca deve
// atrapalhar a UI — falha de rede aqui é sempre engolida silenciosamente.
function trackClientEvent(eventName, metadata){
  try {
    fetch(BACKEND_BASE + '/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event: eventName, deviceId: getOrCreateDeviceId(), metadata: metadata || {} })
    }).catch(() => {});
  } catch(e) { /* tracking nunca deve quebrar a experiência do usuário */ }
}

function getOrCreateDeviceId(){
  let id = localStorage.getItem('corsificio_device_id');
  if (!id) {
    id = 'dev_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('corsificio_device_id', id);
  }
  return id;
}

// FIX: o backend só reconhece "usuário logado" se receber o token de sessão
// no header Authorization — antes, nenhuma chamada enviava isso, então o
// servidor sempre tratava a pessoa como anônima mesmo com login feito na
// tela, e ela batia no limite de novo sem motivo.
async function buildAuthHeaders(){
  const headers = { "Content-Type": "application/json" };
  if (supabaseClient) {
    try {
      const { data: { session } } = await supabaseClient.auth.getSession();
      if (session?.access_token) headers["Authorization"] = "Bearer " + session.access_token;
    } catch (e) { /* sem sessão, segue anônimo mesmo */ }
  }
  return headers;
}

function formatContent(text){
  return String(text)
    .split(/\n\s*\n/)
    .map(par => '<p>' + escapeHtml(par.trim()) + '</p>')
    .join('');
}
</script>

</body>
</html>
