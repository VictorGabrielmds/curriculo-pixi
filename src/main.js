import { Application, Container, Graphics, Text } from 'pixi.js';
import { perfil, zonas } from './data.js';

const ESPACO = 950; // distância entre as estações
const MARGEM = 520; // chão antes da primeira e depois da última
const MUNDO_W = MARGEM * 2 + (zonas.length - 1) * ESPACO;
const zonaX = (i) => MARGEM + i * ESPACO;
const ALCANCE = 140; // distância para abrir o painel
const FONTE = 'system-ui, -apple-system, "Segoe UI", sans-serif';

// números pseudo-aleatórios repetíveis, para o cenário não mudar a cada resize
function semente(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

function escurecer(cor, f) {
  const r = ((cor >> 16) & 255) * f, g = ((cor >> 8) & 255) * f, b = (cor & 255) * f;
  return (Math.round(r) << 16) | (Math.round(g) << 8) | Math.round(b);
}

function estrelaPontos(r, pontas = 5) {
  const pts = [];
  for (let i = 0; i < pontas * 2; i++) {
    const ang = (Math.PI / pontas) * i - Math.PI / 2;
    const raio = i % 2 === 0 ? r : r * 0.45;
    pts.push(Math.cos(ang) * raio, Math.sin(ang) * raio);
  }
  return pts;
}

// ícones desenhados com Graphics: origem na base, crescendo para cima
function desenharIcone(tipo, cor) {
  const g = new Graphics();
  const escuro = escurecer(cor, 0.55);
  const claro = 0xffffff;
  switch (tipo) {
    case 'casa':
      g.rect(-48, -72, 96, 72).fill(cor);
      g.poly([-60, -72, 0, -125, 60, -72]).fill(escuro);
      g.rect(-13, -44, 26, 44).fill(escuro);
      g.rect(18, -58, 20, 20).fill({ color: claro, alpha: 0.85 });
      g.rect(-38, -58, 20, 20).fill({ color: claro, alpha: 0.85 });
      break;
    case 'predio':
      g.rect(-42, -140, 84, 140).fill(cor);
      g.rect(-42, -140, 84, 10).fill(escuro);
      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 3; c++) {
          g.rect(-30 + c * 24, -122 + r * 28, 14, 16).fill({ color: claro, alpha: (r + c) % 3 === 0 ? 0.35 : 0.85 });
        }
      }
      g.rect(-10, -26, 20, 26).fill(escuro);
      break;
    case 'foguete':
      g.poly([0, -150, 24, -100, 24, -34, -24, -34, -24, -100]).fill(cor);
      g.poly([-24, -60, -46, -26, -24, -34]).fill(escuro);
      g.poly([24, -60, 46, -26, 24, -34]).fill(escuro);
      g.circle(0, -92, 11).fill(claro).circle(0, -92, 6).fill(escuro);
      g.poly([-14, -34, 14, -34, 0, -4]).fill(0xffd23f);
      g.poly([-7, -34, 7, -34, 0, -16]).fill(0xff7a59);
      break;
    case 'estrela':
      g.rect(-5, -60, 10, 60).fill(escuro);
      g.rect(-24, -8, 48, 8).fill(escuro);
      g.poly(estrelaPontos(52).map((v, i) => (i % 2 === 1 ? v - 108 : v))).fill(cor);
      break;
    case 'carta':
      g.rect(-52, -30, 104, 8).fill(escuro);
      g.rect(-46, -96, 92, 66).fill(cor);
      g.poly([-46, -96, 0, -58, 46, -96]).fill(escuro);
      g.moveTo(-46, -30).lineTo(-12, -66).moveTo(46, -30).lineTo(12, -66).stroke({ width: 3, color: escuro });
      break;
  }
  return g;
}

const app = new Application();
await app.init({
  resizeTo: window,
  background: 0x0b1026,
  antialias: true,
  autoDensity: true,
  resolution: Math.min(window.devicePixelRatio || 1, 2),
});
document.body.appendChild(app.canvas);

// ordem de camadas: céu → estrelas → montanhas → mundo → interface
const ceu = new Container();
const estrelasL = new Container();
const montFundo = new Container();
const montMeio = new Container();
const mundo = new Container();
const hud = new Container();
app.stage.addChild(ceu, estrelasL, montFundo, montMeio, mundo, hud);

// camadas do mundo (as estáticas são refeitas no resize)
const cenario = new Container();
const vagalumesL = new Container();
const jogador = new Container();
mundo.addChild(cenario, vagalumesL, jogador);

// ---------- personagem ----------
const corpo = new Container();
const perna1 = new Graphics().roundRect(-4.5, 0, 9, 20, 3).fill(0x1b1f3b);
const perna2 = new Graphics().roundRect(-4.5, 0, 9, 20, 3).fill(0x2a2f5c);
perna1.position.set(-6, -20);
perna2.position.set(6, -20);
const tronco = new Graphics()
  .roundRect(-13, -50, 26, 32, 7).fill(0x7c5cff)
  .roundRect(-13, -30, 26, 5, 0).fill({ color: 0x000000, alpha: 0.15 });
const cabeca = new Graphics()
  .circle(0, -64, 14).fill(0xf5c9a0)
  .arc(0, -66, 15, Math.PI, 0).lineTo(15, -66).lineTo(-15, -66).fill(0x2b1d3a)
  .circle(6, -63, 2.2).fill(0x1b1f3b);
const mochila = new Graphics().roundRect(-19, -48, 9, 22, 3).fill(0xffd23f);
corpo.addChild(perna1, perna2, mochila, tronco, cabeca);
const sombra = new Graphics().ellipse(0, 0, 20, 5).fill({ color: 0x000000, alpha: 0.3 });
jogador.addChild(sombra, corpo);

// ---------- interface ----------
const nomeTxt = new Text({
  text: `${perfil.nome} · ${perfil.titulo}`,
  style: { fontFamily: FONTE, fontSize: 15, fontWeight: '600', fill: 0xffffff, letterSpacing: 0.5 },
});
nomeTxt.alpha = 0.85;
const dicaTxt = new Text({
  text: '← → ou A D para andar · ESPAÇO para pular · toque nas laterais no celular',
  style: { fontFamily: FONTE, fontSize: 14, fill: 0xc9cdf5 },
});
dicaTxt.anchor.set(0.5, 1);
const pontos = new Container();
const painelL = new Container();
hud.addChild(nomeTxt, dicaTxt, pontos, painelL);

let paineis = [];
let vagalumes = [];
let estrelas = [];
let estacoes = [];
let groundY = 0;

function montarPaineis() {
  painelL.removeChildren().forEach((c) => c.destroy({ children: true }));
  const w = app.screen.width;
  const pw = Math.min(640, w - 28);
  paineis = zonas.map((z) => {
    const c = new Container();
    const titulo = new Text({
      text: z.titulo,
      style: { fontFamily: FONTE, fontSize: 26, fontWeight: '800', fill: 0xffffff },
    });
    titulo.position.set(24, 20);
    const corpoTxt = new Text({
      text: z.linhas.join('\n\n'),
      style: { fontFamily: FONTE, fontSize: 16, fill: 0xdfe2ff, wordWrap: true, wordWrapWidth: pw - 48, lineHeight: 23 },
    });
    corpoTxt.position.set(24, 20 + titulo.height + 12);
    const ph = corpoTxt.y + corpoTxt.height + 22;
    const bg = new Graphics()
      .roundRect(0, 0, pw, ph, 18).fill({ color: 0x12173a, alpha: 0.92 })
      .roundRect(0, 0, pw, ph, 18).stroke({ width: 2, color: z.cor, alpha: 0.9 })
      .roundRect(0, 18, 5, 34, 2).fill(z.cor);
    c.addChild(bg, titulo, corpoTxt);
    c.position.set((w - pw) / 2, 54);
    c.alpha = 0;
    c.visible = false;
    painelL.addChild(c);
    return c;
  });
}

function montarPontos() {
  pontos.removeChildren().forEach((c) => c.destroy());
  zonas.forEach((z, i) => {
    const d = new Graphics().circle(0, 0, 6).fill(z.cor);
    d.position.set(i * 22, 0);
    d.alpha = 0.3;
    pontos.addChild(d);
  });
}

// ---------- cenário ----------
function montanhas(layer, fator, cor, altura, base, sem) {
  layer.removeChildren().forEach((c) => c.destroy());
  const rnd = semente(sem);
  const largura = MUNDO_W * fator + app.screen.width + 400;
  const pts = [0, groundY + 40];
  let y = base;
  for (let x = 0; x <= largura; x += 70) {
    y = lerp(y, base - rnd() * altura, 0.55);
    pts.push(x, groundY - y);
  }
  pts.push(largura, groundY + 40);
  layer.addChild(new Graphics().poly(pts).fill(cor));
}

function montarCenario() {
  const w = app.screen.width, h = app.screen.height;
  groundY = h - 120;

  // céu em faixas (degradê barato e sem textura)
  ceu.removeChildren().forEach((c) => c.destroy());
  const faixas = 24;
  const g = new Graphics();
  const topo = [0x0b1026, 0x0b1026], base = [0x3a2a6e, 0xc2557a];
  for (let i = 0; i < faixas; i++) {
    const t = i / (faixas - 1);
    const mix = (a, b) => {
      const ch = (s) => Math.round(lerp((a >> s) & 255, (b >> s) & 255, t * t));
      return (ch(16) << 16) | (ch(8) << 8) | ch(0);
    };
    g.rect(0, (h / faixas) * i, w, h / faixas + 1).fill(mix(topo[0], base[1]));
  }
  g.circle(w * 0.78, groundY - 160, 46).fill({ color: 0xfff1c9, alpha: 0.9 });
  ceu.addChild(g);

  // estrelas que piscam
  estrelasL.removeChildren().forEach((c) => c.destroy());
  const rnd = semente(7);
  estrelas = Array.from({ length: 90 }, () => {
    const s = new Graphics().circle(0, 0, 0.6 + rnd() * 1.4).fill(0xffffff);
    s.position.set(rnd() * w, rnd() * groundY * 0.7);
    s.fase = rnd() * 6.28;
    estrelasL.addChild(s);
    return s;
  });

  montanhas(montFundo, 0.15, 0x2a2056, 150, 150, 11);
  montanhas(montMeio, 0.4, 0x1c1844, 120, 90, 23);

  // chão e estações
  cenario.removeChildren().forEach((c) => c.destroy({ children: true }));
  const chao = new Graphics()
    .rect(-200, groundY, MUNDO_W + 400, h - groundY + 10).fill(0x151236)
    .rect(-200, groundY, MUNDO_W + 400, 8).fill(0x2b9d7c)
    .rect(-200, groundY + 8, MUNDO_W + 400, 4).fill(0x1d6f59);
  const rc = semente(5);
  for (let x = -100; x < MUNDO_W + 200; x += 46) {
    chao.rect(x + rc() * 20, groundY + 28 + rc() * (h - groundY - 40), 16 + rc() * 14, 4).fill({ color: 0xffffff, alpha: 0.05 });
  }
  cenario.addChild(chao);

  estacoes = zonas.map((z, i) => {
    const c = new Container();
    c.position.set(zonaX(i), groundY);
    const halo = new Graphics().circle(0, -70, 100).fill({ color: z.cor, alpha: 0.16 });
    halo.alpha = 0;
    const plataforma = new Graphics().roundRect(-70, -4, 140, 12, 6).fill(escurecer(z.cor, 0.6));
    const icone = desenharIcone(z.icone, z.cor);
    const rotulo = new Text({
      text: z.id.toUpperCase(),
      style: { fontFamily: FONTE, fontSize: 15, fontWeight: '800', fill: 0xffffff, letterSpacing: 3 },
    });
    rotulo.anchor.set(0.5, 1);
    rotulo.position.set(0, -178);
    rotulo.alpha = 0.8;
    c.addChild(halo, plataforma, icone, rotulo);
    cenario.addChild(c);
    return { c, halo, icone, rotulo };
  });

  // vagalumes
  vagalumesL.removeChildren().forEach((c) => c.destroy());
  const rv = semente(99);
  vagalumes = Array.from({ length: 46 }, () => {
    const v = new Graphics().circle(0, 0, 2.4).fill(0xfff1a8);
    v.bx = rv() * MUNDO_W;
    v.by = groundY - 30 - rv() * 220;
    v.fase = rv() * 6.28;
    v.vel = 0.4 + rv() * 0.8;
    vagalumesL.addChild(v);
    return v;
  });

  nomeTxt.position.set(18, 16);
  dicaTxt.position.set(w / 2, h - 18);
  dicaTxt.style.wordWrap = true;
  dicaTxt.style.wordWrapWidth = w - 32;
  dicaTxt.style.align = 'center';
  pontos.position.set(w - 18 - (zonas.length - 1) * 22, 24);
  montarPaineis();
  montarPontos();
}

montarCenario();
app.renderer.on('resize', () => {
  montarCenario();
  jogador.y = Math.min(jogador.y, groundY);
});

// ---------- entrada ----------
const teclas = new Set();
window.addEventListener('keydown', (e) => {
  teclas.add(e.code);
  if (e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault();
});
window.addEventListener('keyup', (e) => teclas.delete(e.code));
window.addEventListener('blur', () => teclas.clear());

const toque = { dir: 0, pulo: false };
const ponteiros = new Map();
function atualizarToque() {
  const w = app.screen.width;
  let dir = 0, pulo = false;
  for (const x of ponteiros.values()) {
    if (x < w * 0.33) dir = -1;
    else if (x > w * 0.67) dir = 1;
    else pulo = true;
  }
  toque.dir = dir;
  toque.pulo = pulo;
}
app.canvas.addEventListener('pointerdown', (e) => { ponteiros.set(e.pointerId, e.clientX); atualizarToque(); });
app.canvas.addEventListener('pointermove', (e) => { if (ponteiros.has(e.pointerId)) { ponteiros.set(e.pointerId, e.clientX); atualizarToque(); } });
for (const ev of ['pointerup', 'pointercancel', 'pointerleave']) {
  app.canvas.addEventListener(ev, (e) => { ponteiros.delete(e.pointerId); atualizarToque(); });
}

// ---------- estado ----------
// ?zona=2 abre direto na estação 2 (link para compartilhar uma parte do currículo)
const zonaInicial = clamp(Number(new URLSearchParams(location.search).get('zona')) || 0, 0, zonas.length - 1);
jogador.position.set(zonaX(zonaInicial) - (zonaInicial ? 0 : 160), groundY);
let vx = 0, vy = 0, noChao = true, olhando = 1, passo = 0, andou = false, tempo = 0;
let camX = clamp(jogador.x - app.screen.width * 0.5, 0, Math.max(0, MUNDO_W - app.screen.width));

app.ticker.add((tk) => {
  const dt = tk.deltaTime;
  tempo += tk.deltaMS / 1000;

  // movimento
  const esq = teclas.has('ArrowLeft') || teclas.has('KeyA');
  const dir = teclas.has('ArrowRight') || teclas.has('KeyD');
  const querPular = teclas.has('Space') || teclas.has('ArrowUp') || teclas.has('KeyW') || toque.pulo;
  const alvo = ((dir ? 1 : 0) - (esq ? 1 : 0) || toque.dir) * 5.2;
  vx += (alvo - vx) * 0.18 * dt;
  if (Math.abs(vx) < 0.05) vx = 0;
  jogador.x = clamp(jogador.x + vx * dt, 50, MUNDO_W - 50);

  if (querPular && noChao) { vy = -13.5; noChao = false; }
  if (!noChao) {
    vy += 0.7 * dt;
    jogador.y += vy * dt;
    if (jogador.y >= groundY) { jogador.y = groundY; vy = 0; noChao = true; }
  } else {
    jogador.y = groundY;
  }
  if (vx > 0.3) olhando = 1; else if (vx < -0.3) olhando = -1;
  corpo.scale.x = lerp(corpo.scale.x, olhando, 0.3);
  if (Math.abs(vx) > 0.3) andou = true;

  // animação de caminhada
  const mov = Math.abs(vx) / 5.2;
  passo += mov * 0.35 * dt;
  const bal = noChao ? Math.sin(passo) * mov : 0.6;
  perna1.rotation = bal * 0.9;
  perna2.rotation = -bal * 0.9;
  corpo.y = noChao ? -Math.abs(Math.sin(passo)) * 3 * mov : 0;
  corpo.rotation = lerp(corpo.rotation, (vx / 5.2) * 0.08, 0.2);
  const alt = clamp((groundY - jogador.y) / 160, 0, 1);
  sombra.scale.set(1 - alt * 0.5);
  sombra.y = groundY - jogador.y;
  sombra.alpha = 1 - alt * 0.6;

  // câmera com suavização + parallax
  const w = app.screen.width;
  const alvoCam = clamp(jogador.x - w * 0.5, 0, Math.max(0, MUNDO_W - w));
  camX = lerp(camX, alvoCam, 1 - Math.pow(0.001, tk.deltaMS / 1000));
  mundo.x = -camX;
  montFundo.x = -camX * 0.15;
  montMeio.x = -camX * 0.4;
  for (const s of estrelas) s.alpha = 0.35 + 0.65 * Math.abs(Math.sin(tempo * 1.4 + s.fase));

  // vagalumes
  for (const v of vagalumes) {
    v.x = v.bx + Math.sin(tempo * v.vel + v.fase) * 40;
    v.y = v.by + Math.cos(tempo * v.vel * 1.3 + v.fase) * 22;
    v.alpha = 0.3 + 0.7 * Math.abs(Math.sin(tempo * 1.8 + v.fase));
  }

  // estações e painéis
  let ativa = -1, menor = ALCANCE;
  zonas.forEach((_, i) => {
    const d = Math.abs(jogador.x - zonaX(i));
    if (d < menor) { menor = d; ativa = i; }
  });
  estacoes.forEach((e, i) => {
    const on = i === ativa;
    e.halo.alpha = lerp(e.halo.alpha, on ? 0.7 + Math.sin(tempo * 4) * 0.3 : 0, 0.12);
    e.icone.y = Math.sin(tempo * 2 + i) * (on ? 6 : 3);
    e.rotulo.alpha = lerp(e.rotulo.alpha, on ? 1 : 0.6, 0.1);
  });
  paineis.forEach((p, i) => {
    const alvoA = i === ativa ? 1 : 0;
    p.alpha = lerp(p.alpha, alvoA, 0.15);
    p.visible = p.alpha > 0.01;
    p.y = lerp(p.y, i === ativa ? 54 : 40, 0.15);
  });
  pontos.children.forEach((d, i) => {
    d.alpha = lerp(d.alpha, i === ativa ? 1 : 0.3, 0.15);
    d.scale.set(lerp(d.scale.x, i === ativa ? 1.5 : 1, 0.15));
  });
  dicaTxt.alpha = lerp(dicaTxt.alpha, andou ? 0 : 0.9, 0.05);
});
