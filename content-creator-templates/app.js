<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ContentCreator Templates — Video Editing Templates & AI Tools</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --green: #00c472;
  --green-glow: rgba(0,196,114,0.22);
  --dark: #080808;
  --surface: #111;
  --surface2: #181818;
  --border: rgba(255,255,255,0.07);
  --bh: rgba(255,255,255,0.13);
  --text: #e0e0e0;
  --muted: #666;
  --muted2: #999;
}

html { overflow-y: scroll; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--dark);
  color: var(--text);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* ══════════════════════════════
   NAV
══════════════════════════════ */
nav {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 56px;
  border-bottom: 1px solid var(--border);
  background: rgba(8,8,8,0.97);
  backdrop-filter: blur(18px);
  position: sticky;
  top: 0;
  z-index: 200;
}

.logo {
  display: flex; align-items: center; gap: 9px;
  text-decoration: none; flex-shrink: 0;
}
.logo-mark {
  width: 30px; height: 30px; background: var(--green);
  border-radius: 8px; display: grid; place-items: center;
  font-size: 15px; box-shadow: 0 0 18px var(--green-glow); flex-shrink: 0;
}
.logo-text {
  font-family: 'Syne', sans-serif; font-weight: 800;
  font-size: 12.5px; line-height: 1.3; color: #fff;
}
.logo-text em { color: var(--green); font-style: normal; }

/* Desktop nav links — hidden on mobile */
.nav-links {
  display: flex; align-items: center; height: 100%;
  margin-left: 20px;
}
.nav-links a {
  display: flex; align-items: center; gap: 4px; height: 100%;
  padding: 0 10px; color: var(--muted2); text-decoration: none;
  font-size: 13px; transition: color .13s; white-space: nowrap;
  border-bottom: 2px solid transparent; position: relative; top: 1px;
}
.nav-links a:hover { color: #ccc; }
.nav-links a.active { color: #fff; border-bottom-color: var(--green); }
.nav-links .arr { font-size: 9px; opacity: .4; }

.nav-right {
  display: flex; align-items: center; gap: 8px;
  margin-left: auto; flex-shrink: 0;
}
.btn {
  height: 32px; padding: 0 14px; border-radius: 7px;
  font-size: 12.5px; font-weight: 500; font-family: 'DM Sans', sans-serif;
  cursor: pointer; transition: all .14s;
  display: flex; align-items: center; gap: 6px;
  border: none; white-space: nowrap; flex-shrink: 0;
}
.btn-ghost { background: none; border: 1px solid var(--bh); color: #aaa; }
.btn-ghost:hover { border-color: #444; color: #fff; }
.btn-primary { background: var(--green); color: #000; font-weight: 600; box-shadow: 0 0 14px var(--green-glow); }
.btn-primary:hover { background: #00d97a; }

/* Hamburger — mobile only */
.hamburger {
  display: none;
  flex-direction: column; justify-content: center; gap: 5px;
  width: 36px; height: 36px; cursor: pointer;
  background: none; border: 1px solid var(--border); border-radius: 7px;
  padding: 8px; flex-shrink: 0;
}
.hamburger span {
  display: block; height: 1.5px; background: #aaa;
  border-radius: 2px; transition: all .2s;
}
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile drawer */
.mobile-menu {
  display: none;
  flex-direction: column;
  background: #0e0e0e;
  border-bottom: 1px solid var(--border);
  padding: 12px 20px 16px;
  gap: 2px;
  position: sticky;
  top: 56px;
  z-index: 190;
}
.mobile-menu.open { display: flex; }
.mobile-menu a {
  display: block; padding: 10px 8px;
  color: var(--muted2); text-decoration: none; font-size: 14px;
  border-radius: 7px; transition: all .12s;
}
.mobile-menu a:hover, .mobile-menu a.active { background: rgba(255,255,255,0.05); color: #fff; }
.mobile-menu a.active { color: var(--green); }
.mobile-menu-ctas {
  display: flex; gap: 8px; margin-top: 10px; padding-top: 10px;
  border-top: 1px solid var(--border);
}
.mobile-menu-ctas button { flex: 1; }

/* ══════════════════════════════
   HERO
══════════════════════════════ */
.hero {
  padding: 40px 48px 32px;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(0,196,114,0.05) 0%, transparent 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}
.hero-left { max-width: 560px; }
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 7px;
  background: rgba(0,196,114,0.1); border: 1px solid rgba(0,196,114,0.22);
  border-radius: 100px; padding: 4px 12px 4px 8px;
  font-size: 11.5px; color: var(--green); font-weight: 500;
  margin-bottom: 14px;
}
.eyebrow-dot {
  width: 6px; height: 6px; background: var(--green);
  border-radius: 50%; flex-shrink: 0; animation: pulse 2s infinite;
}
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }

.hero h1 {
  font-family: 'Syne', sans-serif; font-weight: 800;
  font-size: 32px; line-height: 1.15; color: #fff;
  margin-bottom: 12px; letter-spacing: -0.02em;
}
.hero h1 span { color: var(--green); }
.hero p {
  font-size: 14.5px; color: var(--muted2); line-height: 1.65;
  margin-bottom: 20px; max-width: 440px;
}
.hero-ctas { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.hero-cta-primary {
  height: 40px; padding: 0 22px;
  background: var(--green); color: #000;
  border: none; border-radius: 9px;
  font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 13.5px;
  cursor: pointer; transition: all .14s; box-shadow: 0 0 20px var(--green-glow);
}
.hero-cta-primary:hover { background: #00d97a; }
.hero-cta-ghost {
  height: 40px; padding: 0 18px;
  background: none; border: 1px solid var(--bh); color: #aaa;
  border-radius: 9px; font-family: 'DM Sans', sans-serif; font-size: 13.5px;
  cursor: pointer; transition: all .14s;
}
.hero-cta-ghost:hover { border-color: #444; color: #fff; }

.hero-stats { display: flex; align-items: center; gap: 28px; flex-shrink: 0; }
.stat { text-align: left; }
.stat-num { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 22px; color: #fff; }
.stat-label { font-size: 11.5px; color: var(--muted); margin-top: 2px; }
.stat-div { width: 1px; height: 32px; background: var(--border); flex-shrink: 0; }

/* ══════════════════════════════
   MARKETPLACE
══════════════════════════════ */
.marketplace {
  padding: 20px 48px 48px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
}

/* Toolbar */
.toolbar { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }

.search-wrap { flex: 1; min-width: 160px; position: relative; }
.search-wrap svg {
  position: absolute; left: 11px; top: 50%;
  transform: translateY(-50%); color: var(--muted); pointer-events: none;
}
.search-wrap input {
  width: 100%; background: var(--surface);
  border: 1px solid var(--border); border-radius: 8px;
  padding: 8px 12px 8px 34px; font-size: 13px; color: var(--text);
  font-family: 'DM Sans', sans-serif; outline: none;
  transition: border-color .14s, box-shadow .14s; height: 36px;
}
.search-wrap input:focus {
  border-color: rgba(0,196,114,0.3);
  box-shadow: 0 0 0 3px rgba(0,196,114,0.07);
}
.search-wrap input::placeholder { color: var(--muted); }

/* Dropdown */
.dd-wrap { position: relative; flex-shrink: 0; }
.dd-btn {
  display: flex; align-items: center; gap: 6px;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 8px; padding: 0 11px;
  font-size: 12.5px; color: #999; cursor: pointer;
  transition: all .12s; white-space: nowrap;
  font-family: 'DM Sans', sans-serif; font-weight: 500;
  user-select: none; height: 36px;
}
.dd-btn:hover, .dd-btn.open { border-color: var(--bh); color: #ddd; }
.dd-btn.has-filter { border-color: rgba(0,196,114,0.35); color: var(--green); }
.dd-btn svg { flex-shrink: 0; }
.dd-btn .chevron { transition: transform .15s; }
.dd-btn.open .chevron { transform: rotate(180deg); }

.dd-menu {
  display: none; position: absolute; top: calc(100% + 6px); left: 0;
  background: #141414; border: 1px solid var(--bh);
  border-radius: 10px; padding: 6px; min-width: 180px;
  z-index: 300; box-shadow: 0 12px 40px rgba(0,0,0,0.75);
  animation: dropIn .12s ease;
}
.dd-menu.open { display: block; }
@keyframes dropIn { from{opacity:0;transform:translateY(-4px)} to{opacity:1;transform:none} }

.dd-item {
  display: flex; align-items: center; gap: 9px;
  padding: 7px 10px; border-radius: 6px; cursor: pointer;
  font-size: 12.5px; color: #888; transition: all .1s;
  user-select: none; white-space: nowrap;
}
.dd-item:hover { background: rgba(255,255,255,0.05); color: #ccc; }
.dd-item.selected { color: var(--green); }
.dd-item.selected .dd-check { background: var(--green); border-color: var(--green); }
.dd-item.selected .dd-check::after {
  content: ''; width: 7px; height: 4.5px;
  border-left: 1.5px solid #000; border-bottom: 1.5px solid #000;
  transform: rotate(-45deg) translateY(-0.5px);
}
.dd-check {
  width: 14px; height: 14px; border-radius: 3.5px;
  border: 1.5px solid #2a2a2a; flex-shrink: 0;
  display: grid; place-items: center; transition: all .1s;
}
.dd-radio {
  width: 8px; height: 8px; border-radius: 50%;
  border: 1.5px solid currentColor; flex-shrink: 0; transition: all .1s;
}
.dd-item.selected .dd-radio { background: var(--green); border-color: var(--green); }
.dd-divider { height: 1px; background: var(--border); margin: 5px 2px; }

.count { font-size: 11.5px; color: var(--muted); white-space: nowrap; flex-shrink: 0; margin-left: auto; }
.count strong { color: #bbb; }

/* Filter pills */
.active-filters { display: none; align-items: center; gap: 6px; flex-wrap: wrap; }
.active-filters.visible { display: flex; }
.filter-pill {
  display: flex; align-items: center; gap: 5px;
  background: rgba(0,196,114,0.1); border: 1px solid rgba(0,196,114,0.25);
  color: var(--green); border-radius: 100px;
  font-size: 11.5px; padding: 3px 9px 3px 10px;
  cursor: pointer; transition: all .12s; white-space: nowrap;
}
.filter-pill:hover { background: rgba(0,196,114,0.18); }
.filter-pill .x { font-size: 13px; line-height: 1; opacity: 0.7; }
.clear-all {
  font-size: 11.5px; color: var(--muted2); cursor: pointer;
  text-decoration: underline; text-underline-offset: 2px;
}
.clear-all:hover { color: #fff; }

/* ══════════════════════════════
   GRID
══════════════════════════════ */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.card {
  border-radius: 10px; overflow: hidden; position: relative;
  aspect-ratio: 16/10; cursor: pointer; border: 1px solid var(--border);
  transition: transform .18s cubic-bezier(.25,.46,.45,.94), box-shadow .18s, border-color .18s;
}
.card:hover { transform: translateY(-3px) scale(1.012); box-shadow: 0 18px 50px rgba(0,0,0,0.65); border-color: var(--bh); }
.card.hidden { display: none; }

.hover-veil {
  position: absolute; inset: 0; background: transparent;
  display: flex; align-items: flex-end; padding: 10px;
  transition: background .18s; z-index: 10;
}
.card:hover .hover-veil { background: rgba(0,0,0,0.32); }
.card-name {
  opacity: 0; transform: translateY(4px); transition: all .17s;
  font-size: 11.5px; font-weight: 500; color: #fff;
  text-shadow: 0 1px 5px rgba(0,0,0,0.9);
}
.card:hover .card-name { opacity: 1; transform: none; }

.ptag {
  position: absolute; top: 9px; right: 9px;
  background: rgba(10,10,10,0.82); backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.11); color: #ddd;
  font-size: 10px; font-weight: 500; padding: 3px 8px;
  border-radius: 5px; z-index: 5; white-space: nowrap;
}
.ptag.ae   { background: rgba(110,45,210,0.88); border-color: rgba(140,80,255,0.28); color: #ddc8ff; }
.ptag.fcpx { background: rgba(0,95,195,0.88);  border-color: rgba(0,130,255,0.28);  color: #b8d8ff; }

.ai-tag {
  position: absolute; top: 9px; left: 9px;
  background: rgba(0,196,114,0.16); border: 1px solid rgba(0,196,114,0.32);
  color: var(--green); font-size: 9px; font-weight: 700;
  padding: 2.5px 7px; border-radius: 4px; z-index: 5;
  letter-spacing: .08em; text-transform: uppercase;
}

.cc { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; flex-direction: column; }
.dots-bg { position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,0.11) 1px, transparent 1px); background-size: 27px 27px; }

/* Card backgrounds */
.bg-liquid   { background: linear-gradient(135deg,#1a0a2e,#6b0f70 35%,#ff4d1c 65%,#ffb800); }
.bg-colorful { background: linear-gradient(135deg,#0d1b2a,#1a1a2e 45%,#2d1b69); }
.bg-network  { background: linear-gradient(135deg,#0a1628,#0d2244 55%,#1a3a5c); }
.bg-collage  { background: linear-gradient(135deg,#0a1628,#1a3a5c); }
.bg-gold     { background: linear-gradient(135deg,#ddeeff,#b8ddff); }
.bg-typo     { background: #030303; }
.bg-dark     { background: #050505; }
.bg-pink1    { background: linear-gradient(135deg,#ff0066,#ff4d00); }
.bg-pink2    { background: linear-gradient(135deg,#e0005a,#cc0052); }

/* Card content */
.lm-eye  { font-size: 7px; letter-spacing: .18em; color: rgba(255,200,80,.6); margin-bottom: 5px; }
.lm-h    { font-family: 'Syne',sans-serif; font-weight: 800; font-size: 24px; color: #ffaa00; text-shadow: 0 0 28px rgba(255,140,0,.7); text-align: center; line-height: 1.05; }
.lm-foot { font-size: 7px; letter-spacing: .18em; color: rgba(255,190,60,.45); margin-top: 5px; }

.cft { font-family: 'Syne',sans-serif; font-weight: 800; text-align: center; line-height: 1.15; }
.cft .r1 { font-size: 18px; color: #ff4db8; }
.cft .r2 { font-size: 18px; color: #ff9900; }
.cft .r3 { font-size: 17px; color: #00cc88; }
.cft .r4 { font-size: 11px; color: #4d99ff; margin-top: 2px; }
.cft .r5 { font-size: 10px; color: #cc88ff; }

.col-g { display: grid; grid-template-columns: 1fr 1fr; gap: 3px; border-radius: 6px; overflow: hidden; width: 56%; box-shadow: 0 8px 28px rgba(0,0,0,.65); }
.col-c { aspect-ratio: 1; }
.col-c:nth-child(1) { background: linear-gradient(135deg,#8b7355,#6b5a45); }
.col-c:nth-child(2) { background: linear-gradient(135deg,#c4a882,#a08060); }
.col-c:nth-child(3) { background: linear-gradient(135deg,#5a7a9a,#3a5a7a); }
.col-c:nth-child(4) { background: linear-gradient(135deg,#b8d4e8,#90b4c8); }

.gold-n { font-family: 'Syne',sans-serif; font-size: 68px; font-weight: 800; background: linear-gradient(135deg,#ffd700,#ffa500,#ff8000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 5px 14px rgba(255,140,0,.42)); line-height: 1; }

.tg { display: grid; grid-template-columns: repeat(3,1fr); gap: 3px; width: 87%; }
.tc { border: 1px solid rgba(255,255,255,.09); border-radius: 3px; padding: 4px 5px; font-size: 6.5px; font-weight: 700; color: rgba(255,255,255,.5); font-family: 'Syne',sans-serif; text-transform: uppercase; letter-spacing: .04em; line-height: 1.4; }

.mach { font-family: 'Syne',sans-serif; font-weight: 800; font-size: 30px; letter-spacing: -.02em; }

/* ══════════════════════════════
   TABLET  ≤ 900px
══════════════════════════════ */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .btn-ghost  { display: none; }
  .hamburger  { display: flex; margin-left: auto; }
  .nav-right  { display: flex; margin-left: 12px; }

  .hero { flex-direction: column; padding: 28px 24px 24px; gap: 24px; align-items: flex-start; }
  .hero-left { max-width: 100%; }
  .hero h1 { font-size: 26px; }
  .hero-stats { gap: 20px; }
  .stat-num { font-size: 18px; }

  .marketplace { padding: 16px 24px 36px; }
  .grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
}

/* ══════════════════════════════
   MOBILE  ≤ 600px
══════════════════════════════ */
@media (max-width: 600px) {
  nav { padding: 0 16px; }

  .btn-primary { font-size: 12px; padding: 0 12px; height: 30px; }

  .hero { padding: 24px 16px 20px; gap: 20px; }
  .hero-eyebrow { font-size: 10.5px; padding: 3px 10px 3px 7px; }
  .hero h1 { font-size: 22px; line-height: 1.2; }
  .hero p { font-size: 13.5px; }
  .hero-cta-primary, .hero-cta-ghost { height: 38px; font-size: 13px; }
  .hero-cta-ghost { display: none; } /* too cramped on very small screens */
  .hero-stats { gap: 16px; }
  .stat-num { font-size: 16px; }
  .stat-label { font-size: 10.5px; }
  .stat-div { height: 24px; }

  .marketplace { padding: 14px 16px 28px; gap: 10px; }

  /* Toolbar: search full-width on its own row, filters on next row */
  .toolbar { flex-wrap: wrap; }
  .search-wrap { width: 100%; flex: none; }
  .count { margin-left: 0; }
  /* dropdowns slightly smaller labels */
  .dd-btn { font-size: 12px; padding: 0 9px; }

  .grid { grid-template-columns: 1fr 1fr; gap: 10px; }

  /* Simplify card content at small size */
  .lm-h    { font-size: 16px; }
  .cft .r1, .cft .r2 { font-size: 13px; }
  .cft .r3 { font-size: 12px; }
  .cft .r4, .cft .r5 { font-size: 8px; }
  .gold-n  { font-size: 44px; }
  .mach    { font-size: 20px; }
  .ptag    { font-size: 9px; padding: 2px 6px; }
}

/* ══════════════════════════════
   VERY SMALL  ≤ 380px
══════════════════════════════ */
@media (max-width: 380px) {
  .hero h1 { font-size: 19px; }
  .grid { grid-template-columns: 1fr; }
  .card { aspect-ratio: 16/9; }
}
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <a href="#" class="logo">
    <div class="logo-mark">🎬</div>
    <div class="logo-text">ContentCreator<br><em>Templates</em></div>
  </a>

  <div class="nav-links">
    <a href="#" class="active">Video Assets</a>
    <a href="#">LUTs</a>
    <a href="#">Sound Effects</a>
    <a href="#">Prompts</a>
    <a href="#">Contributor <span class="arr">▾</span></a>
    <a href="#">Learn <span class="arr">▾</span></a>
    <a href="#">Pricing</a>
  </div>

  <div class="nav-right">
    <button class="btn btn-ghost">Sign In</button>
    <button class="btn btn-primary">Get Started Free</button>
  </div>

  <button class="hamburger" id="hamburger" onclick="toggleMenu()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- Mobile drawer -->
<div class="mobile-menu" id="mobileMenu">
  <a href="#" class="active">Video Assets</a>
  <a href="#">LUTs</a>
  <a href="#">Sound Effects</a>
  <a href="#">Prompts</a>
  <a href="#">Contributor</a>
  <a href="#">Learn</a>
  <a href="#">Pricing</a>
  <div class="mobile-menu-ctas">
    <button class="btn btn-ghost" style="flex:1;justify-content:center">Sign In</button>
    <button class="btn btn-primary" style="flex:1;justify-content:center">Get Started Free</button>
  </div>
</div>

<!-- HERO -->
<div class="hero">
  <div class="hero-left">
    <div class="hero-eyebrow">
      <span class="eyebrow-dot"></span>
      Marketplace now live — 1,200+ assets &amp; growing
    </div>
    <h1>Save hours with pro<br><span>video editing templates</span><br>&amp; pay-per-use AI tools</h1>
    <p>Browse thousands of ready-to-use templates for Premiere Pro, After Effects, DaVinci Resolve &amp; more — plus powerful AI tools you only pay for when you need them.</p>
    <div class="hero-ctas">
      <button class="hero-cta-primary">Browse the Marketplace</button>
      <button class="hero-cta-ghost">Become a Contributor →</button>
    </div>
  </div>
  <div class="hero-stats">
    <div class="stat"><div class="stat-num">1,240+</div><div class="stat-label">Video Assets</div></div>
    <div class="stat-div"></div>
    <div class="stat"><div class="stat-num">6</div><div class="stat-label">Platforms</div></div>
    <div class="stat-div"></div>
    <div class="stat"><div class="stat-num">Pay-per-use</div><div class="stat-label">AI Tools</div></div>
  </div>
</div>

<!-- MARKETPLACE -->
<div class="marketplace">

  <!-- Toolbar -->
  <div class="toolbar">
    <div class="search-wrap">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" id="searchInput" placeholder="Search video assets...">
    </div>

    <!-- Platform -->
    <div class="dd-wrap" id="platformWrap">
      <div class="dd-btn" id="platformBtn" onclick="toggleDD('platform')">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
        <span id="platformLabel">Platform</span>
        <svg class="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
      </div>
      <div class="dd-menu" id="platformMenu">
        <div class="dd-item selected" data-platform="all" onclick="selectPlatform(this)"><span class="dd-radio"></span> All Platforms</div>
        <div class="dd-divider"></div>
        <div class="dd-item" data-platform="Premiere Pro"    onclick="selectPlatform(this)"><span class="dd-radio"></span> Premiere Pro</div>
        <div class="dd-item" data-platform="After Effects"   onclick="selectPlatform(this)"><span class="dd-radio"></span> After Effects</div>
        <div class="dd-item" data-platform="DaVinci Resolve" onclick="selectPlatform(this)"><span class="dd-radio"></span> DaVinci Resolve</div>
        <div class="dd-item" data-platform="Final Cut Pro"   onclick="selectPlatform(this)"><span class="dd-radio"></span> Final Cut Pro</div>
        <div class="dd-item" data-platform="CapCut"          onclick="selectPlatform(this)"><span class="dd-radio"></span> CapCut</div>
      </div>
    </div>

    <!-- Category -->
    <div class="dd-wrap" id="categoryWrap">
      <div class="dd-btn" id="categoryBtn" onclick="toggleDD('category')">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
        <span id="categoryLabel">Category</span>
        <svg class="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
      </div>
      <div class="dd-menu" id="categoryMenu" style="min-width:200px">
        <div class="dd-item" data-cat="Backgrounds"     onclick="toggleCat(this)"><span class="dd-check"></span> Backgrounds</div>
        <div class="dd-item" data-cat="Effects"         onclick="toggleCat(this)"><span class="dd-check"></span> Effects</div>
        <div class="dd-item" data-cat="Generator"       onclick="toggleCat(this)"><span class="dd-check"></span> Generator</div>
        <div class="dd-item" data-cat="Infographics"    onclick="toggleCat(this)"><span class="dd-check"></span> Infographics</div>
        <div class="dd-item" data-cat="Intros"          onclick="toggleCat(this)"><span class="dd-check"></span> Intros</div>
        <div class="dd-item" data-cat="Logos"           onclick="toggleCat(this)"><span class="dd-check"></span> Logos</div>
        <div class="dd-item" data-cat="Lower Thirds"    onclick="toggleCat(this)"><span class="dd-check"></span> Lower Thirds</div>
        <div class="dd-item" data-cat="Mockups"         onclick="toggleCat(this)"><span class="dd-check"></span> Mockups</div>
        <div class="dd-item" data-cat="Motion Graphics" onclick="toggleCat(this)"><span class="dd-check"></span> Motion Graphics</div>
        <div class="dd-item" data-cat="Overlays"        onclick="toggleCat(this)"><span class="dd-check"></span> Overlays</div>
        <div class="dd-item" data-cat="Titles"          onclick="toggleCat(this)"><span class="dd-check"></span> Titles</div>
        <div class="dd-item" data-cat="Transitions"     onclick="toggleCat(this)"><span class="dd-check"></span> Transitions</div>
      </div>
    </div>

    <!-- Sort -->
    <div class="dd-wrap" id="sortWrap">
      <div class="dd-btn" id="sortBtn" onclick="toggleDD('sort')">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M7 12h10M11 18h2"/></svg>
        <span id="sortLabel">Newest</span>
        <svg class="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
      </div>
      <div class="dd-menu" id="sortMenu">
        <div class="dd-item selected" data-sort="newest"  onclick="selectSort(this)"><span class="dd-radio"></span> Newest</div>
        <div class="dd-item" data-sort="popular"          onclick="selectSort(this)"><span class="dd-radio"></span> Most Popular</div>
        <div class="dd-item" data-sort="az"               onclick="selectSort(this)"><span class="dd-radio"></span> A → Z</div>
        <div class="dd-item" data-sort="ai"               onclick="selectSort(this)"><span class="dd-radio"></span> AI Tools First</div>
      </div>
    </div>

    <span class="count"><strong id="countNum">9</strong> assets</span>
  </div>

  <!-- Active filter pills -->
  <div class="active-filters" id="activeFilters"></div>

  <!-- Grid -->
  <div class="grid" id="grid">

    <div class="card bg-liquid" data-platform="After Effects" data-cat="Motion Graphics" data-name="Liquid Matrix — Motion Pack" data-sort-date="9">
      <div class="cc">
        <div class="lm-eye">HYBRID REALM</div>
        <div class="lm-h">LIQUID<br>MATRIX</div>
        <div class="lm-foot">CHROME DRIFT</div>
      </div>
      <span class="ptag ae">After Effects</span>
      <div class="hover-veil"><span class="card-name">Liquid Matrix — Motion Pack</span></div>
    </div>

    <div class="card bg-colorful" data-platform="Premiere Pro" data-cat="Titles" data-name="Colorful Animated Letters Pack" data-sort-date="8">
      <div class="cc">
        <div class="cft">
          <div class="r1">COLORFUL</div>
          <div class="r2">ANIMATED</div>
          <div class="r3">&lt;57&gt; LETTERS</div>
          <div class="r4">+ NUMBERS (0–9)</div>
          <div class="r5">+ CHARACTERS</div>
        </div>
      </div>
      <span class="ptag">Premiere Pro</span>
      <div class="hover-veil"><span class="card-name">Colorful Animated Letters Pack</span></div>
    </div>

    <div class="card bg-network" data-platform="Premiere Pro" data-cat="Backgrounds" data-name="Network Collage Template" data-sort-date="7">
      <div class="dots-bg"></div>
      <div class="cc">
        <div class="col-g">
          <div class="col-c"></div><div class="col-c"></div>
          <div class="col-c"></div><div class="col-c"></div>
        </div>
      </div>
      <span class="ptag">Premiere Pro</span>
      <div class="hover-veil"><span class="card-name">Network Collage Template</span></div>
    </div>

    <div class="card bg-collage" data-platform="Premiere Pro" data-cat="Mockups" data-name="Portrait Collage Template" data-sort-date="6">
      <div class="dots-bg"></div>
      <div class="cc" style="flex-direction:row;gap:6px">
        <div style="width:38%;height:74%;display:flex;flex-direction:column;gap:3px;border-radius:6px;overflow:hidden;box-shadow:0 6px 22px rgba(0,0,0,.65)">
          <div style="flex:1;background:linear-gradient(135deg,#5a7a5a,#3a5a3a)"></div>
          <div style="flex:1;background:linear-gradient(135deg,#8a7060,#5a4a3a)"></div>
          <div style="flex:1;background:linear-gradient(135deg,#3a6a8a,#1a4a6a)"></div>
        </div>
      </div>
      <span class="ptag">Premiere Pro</span>
      <div class="hover-veil"><span class="card-name">Portrait Collage Template</span></div>
    </div>

    <div class="card bg-gold" data-platform="Premiere Pro" data-cat="Motion Graphics" data-name="Gold 3D Number Reveal" data-sort-date="5">
      <div class="cc"><div class="gold-n">5</div></div>
      <span class="ptag">Premiere Pro</span>
      <div class="hover-veil"><span class="card-name">Gold 3D Number Reveal</span></div>
    </div>

    <div class="card bg-typo" data-platform="Premiere Pro" data-cat="Titles" data-name="Minimalistic Titles Pack" data-sort-date="4">
      <div class="cc">
        <div class="tg">
          <div class="tc" style="border-color:rgba(255,255,255,.2);color:#ccc">MODERN</div>
          <div class="tc">MOTION<br>DESIGN</div>
          <div class="tc" style="color:#bbb">ANIMATED<br>DESIGN</div>
          <div class="tc">CREATIVE</div>
          <div class="tc" style="color:#4d88ff;border-color:rgba(77,136,255,.22)">MINIMALISM</div>
          <div class="tc">DELIVER</div>
          <div class="tc">CLEAN</div>
          <div class="tc" style="color:#ccc">TYPOGRAPHY</div>
          <div class="tc">UNIVERSAL</div>
        </div>
      </div>
      <span class="ptag">Premiere Pro</span>
      <div class="hover-veil"><span class="card-name">Minimalistic Titles Pack</span></div>
    </div>

    <div class="card bg-dark" data-platform="Premiere Pro" data-cat="Intros" data-name="Modern Motion Design Kit" data-sort-date="3">
      <div class="cc">
        <div style="display:flex;gap:5px;align-items:center">
          <div style="border:1px solid rgba(255,255,255,.17);border-radius:5px;padding:7px 11px;font-family:'Syne',sans-serif;font-size:10px;font-weight:800;color:#fff;line-height:1.3">MODERN<br><span style="font-size:6px;color:#555;font-weight:400;letter-spacing:.05em">MOTION DESIGN</span></div>
          <div style="border:1px solid rgba(255,255,255,.07);border-radius:5px;padding:7px 10px;font-family:'Syne',sans-serif;font-size:8px;font-weight:600;color:#444;line-height:1.4">MODERN<br>ANIMATED<br>DESIGN</div>
        </div>
      </div>
      <span class="ptag">Premiere Pro</span>
      <div class="hover-veil"><span class="card-name">Modern Motion Design Kit</span></div>
    </div>

    <div class="card bg-pink1" data-platform="Final Cut Pro" data-cat="Generator" data-name="Machines — AI Tool" data-is-ai="true" data-sort-date="2">
      <div class="ai-tag">AI</div>
      <div class="cc">
        <div class="mach" style="color:#fff;text-shadow:0 4px 22px rgba(255,255,255,.22)">MACHINES</div>
      </div>
      <span class="ptag fcpx">Final Cut Pro</span>
      <div class="hover-veil"><span class="card-name">Machines — AI Tool</span></div>
    </div>

    <div class="card bg-pink2" data-platform="Premiere Pro" data-cat="Generator" data-name="Machines — AI Tool (PP)" data-is-ai="true" data-sort-date="1">
      <div class="ai-tag">AI</div>
      <div class="cc">
        <div class="mach" style="color:#ffd090;text-shadow:0 4px 18px rgba(200,140,60,.42)">MACHINES</div>
      </div>
      <span class="ptag">Premiere Pro</span>
      <div class="hover-veil"><span class="card-name">Machines — AI Tool (PP)</span></div>
    </div>

  </div>
</div>

<script>
const state = { platform: 'all', categories: new Set(), sort: 'newest', search: '' };

/* Mobile menu */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn  = document.getElementById('hamburger');
  const open = menu.classList.toggle('open');
  btn.classList.toggle('open', open);
}

/* Close dropdowns on outside click */
document.addEventListener('click', e => {
  if (!e.target.closest('.dd-wrap')) {
    ['platform','category','sort'].forEach(id => {
      document.getElementById(id+'Menu').classList.remove('open');
      document.getElementById(id+'Btn').classList.remove('open');
    });
  }
  if (!e.target.closest('nav')) {
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
  }
});

function toggleDD(id) {
  ['platform','category','sort'].forEach(m => {
    if (m !== id) {
      document.getElementById(m+'Menu').classList.remove('open');
      document.getElementById(m+'Btn').classList.remove('open');
    }
  });
  const menu = document.getElementById(id+'Menu');
  const btn  = document.getElementById(id+'Btn');
  const isOpen = menu.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
}

function selectPlatform(el) {
  document.querySelectorAll('#platformMenu .dd-item').forEach(i => i.classList.remove('selected'));
  el.classList.add('selected');
  state.platform = el.dataset.platform;
  document.getElementById('platformLabel').textContent = state.platform === 'all' ? 'Platform' : state.platform;
  document.getElementById('platformBtn').classList.toggle('has-filter', state.platform !== 'all');
  applyFilters();
  toggleDD('platform');
}

function toggleCat(el) {
  el.classList.toggle('selected');
  const cat = el.dataset.cat;
  if (el.classList.contains('selected')) state.categories.add(cat);
  else state.categories.delete(cat);
  const count = state.categories.size;
  document.getElementById('categoryLabel').textContent = count ? `Category (${count})` : 'Category';
  document.getElementById('categoryBtn').classList.toggle('has-filter', count > 0);
  applyFilters();
}

function selectSort(el) {
  document.querySelectorAll('#sortMenu .dd-item').forEach(i => i.classList.remove('selected'));
  el.classList.add('selected');
  state.sort = el.dataset.sort;
  document.getElementById('sortLabel').textContent = el.textContent.trim();
  applyFilters();
  toggleDD('sort');
}

document.getElementById('searchInput').addEventListener('input', e => {
  state.search = e.target.value.toLowerCase();
  applyFilters();
});

function applyFilters() {
  const cards = [...document.querySelectorAll('#grid .card')];
  let visible = cards.filter(card => {
    const pMatch = state.platform === 'all' || card.dataset.platform === state.platform;
    const cMatch = state.categories.size === 0 || state.categories.has(card.dataset.cat);
    const sMatch = !state.search || card.dataset.name.toLowerCase().includes(state.search);
    return pMatch && cMatch && sMatch;
  });
  visible.sort((a, b) => {
    if (state.sort === 'newest')  return +b.dataset.sortDate - +a.dataset.sortDate;
    if (state.sort === 'popular') return +a.dataset.sortDate - +b.dataset.sortDate;
    if (state.sort === 'az')      return a.dataset.name.localeCompare(b.dataset.name);
    if (state.sort === 'ai')      return (b.dataset.isAi === 'true' ? 1 : 0) - (a.dataset.isAi === 'true' ? 1 : 0);
    return 0;
  });
  const hiddenSet = new Set(cards.filter(c => !visible.includes(c)));
  cards.forEach(c => c.classList.toggle('hidden', hiddenSet.has(c)));
  const grid = document.getElementById('grid');
  visible.forEach(c => grid.appendChild(c));
  document.getElementById('countNum').textContent = visible.length;
  renderPills();
}

function renderPills() {
  const bar = document.getElementById('activeFilters');
  bar.innerHTML = '';
  const pills = [];
  if (state.platform !== 'all') {
    pills.push({ label: state.platform, remove: () => selectPlatform(document.querySelector('#platformMenu [data-platform="all"]')) });
  }
  state.categories.forEach(cat => {
    pills.push({ label: cat, remove: () => {
      const el = document.querySelector(`#categoryMenu [data-cat="${cat}"]`);
      if (el) toggleCat(el);
    }});
  });
  if (!pills.length) { bar.classList.remove('visible'); return; }
  bar.classList.add('visible');
  pills.forEach(p => {
    const pill = document.createElement('div');
    pill.className = 'filter-pill';
    pill.innerHTML = `${p.label} <span class="x">×</span>`;
    pill.onclick = p.remove;
    bar.appendChild(pill);
  });
  const ca = document.createElement('span');
  ca.className = 'clear-all';
  ca.textContent = 'Clear all';
  ca.onclick = clearFilters;
  bar.appendChild(ca);
}

function clearFilters() {
  selectPlatform(document.querySelector('#platformMenu [data-platform="all"]'));
  [...state.categories].forEach(cat => {
    const el = document.querySelector(`#categoryMenu [data-cat="${cat}"]`);
    if (el && el.classList.contains('selected')) toggleCat(el);
  });
}
</script>
</body>
</html>