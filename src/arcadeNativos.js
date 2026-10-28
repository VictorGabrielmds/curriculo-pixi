// Nativos das fases: um monstro único para cada lugar do universo. São maiores, mais lentos e mais resistentes que os comuns,
// cada um com um truque próprio (dividir, atravessar paredes, comer cristais, puxar a nave...). Só atiram um tiro por vez.
// Desenhados em vetor e convertidos em pixel art a cada quadro, como os chefões lendários (ver lendas/base.js).
import { TAU, normAng, dirPara, aleatorio, limitar, poli, disco, elip, traco } from './lendas/base.js';

// movimento básico: chega perto (ideal = 0) ou mantém distância, com um balanço lateral opcional (tang)
function mover(m, dt, ctx, { ideal = 0, tang = 0, vel = m.vel } = {}) {
  const S = ctx.S, dx = S.nx - m.x, dy = S.ny - m.y, d = Math.hypot(dx, dy) || 1, a = Math.atan2(dy, dx);
  m.olhar = a; m.sentido ??= Math.random() < 0.5 ? -1 : 1;
  const rad = ideal ? limitar((d - ideal) / 28, -1, 1) : 1, k = vel * (ctx.lento ? ctx.lento(m) : 1) * dt;
  m.x += (Math.cos(a) * rad + Math.cos(a + Math.PI / 2) * tang * m.sentido) * k;
  m.y += (Math.sin(a) * rad + Math.sin(a + Math.PI / 2) * tang * m.sentido) * k;
  return d;
}
const relogio = (m, dt, nome, periodo, fn) => { m[nome] = (m[nome] ?? periodo * (0.4 + Math.random() * 0.6)) - dt; if (m[nome] <= 0) { m[nome] = periodo * (0.9 + Math.random() * 0.3); fn(); } };
const mira = (m, ctx) => Math.atan2(ctx.S.ny - m.y, ctx.S.nx - m.x);

export const NATIVOS = {
  luminosa: {
    nome: 'LUMINOSA', dica: 'divide-se em duas ao cair', cor: '#ff7ab8', raio: 11, hp: 14, vel: 15, xp: 9, tela: [80, 90],
    desenhar(x, m, t) {
      for (let k = 0; k < 6; k++) { const bx = -11 + k * 4.4, pts = []; for (let s = 0; s < 8; s++) pts.push([bx + Math.sin(t * 3 + s * 0.8 + k) * (1 + s * 0.35), 4 + s * 4.2]); traco(x, pts, 2.4, '#c24a9a'); traco(x, pts, 1.1, '#ffb3e0'); disco(x, pts[7][0], pts[7][1], 1.4, '#fff2a8'); }
      const p = Math.sin(t * 3);
      elip(x, 0, -3, 15 + p * 0.5, 12 + p * 0.8, '#b8388a'); elip(x, 0, -4.5, 12.5, 9, '#ff7ab8'); elip(x, -4, -9, 6, 3.4, '#ffd6ee');
      disco(x, 0, -3, 4.5 + Math.sin(t * 5) * 0.8, '#fff2a8'); disco(x, 0, -3, 2, '#ffffff');
      for (const [dx, dy] of [[-8, -1], [7, 1], [-3, 3], [4, -8]]) disco(x, dx, dy, 1.1, '#ffe1f4');
    },
    passo(m, dt, ctx) { mover(m, dt, ctx, { tang: 0.25, vel: m.vel * (0.8 + 0.2 * Math.sin(m.tl * 2)) }); },
    morrer(m, ctx) { for (const l of [-1, 1]) { const s = ctx.invocar('slime', m.x + l * 9, m.y); s.hp = Math.max(1, Math.round(s.hp * 1.4)); } ctx.onda(m.x, m.y, 22, '#ff7ab8', 90); },
  },
  golem: {
    nome: 'GOLEM DE POEIRA', dica: 'arremessa pedras e vira poeira', cor: '#ffa05a', raio: 12, hp: 22, vel: 11, xp: 12, tela: [90, 90],
    desenhar(x, m, t) {
      const b = Math.sin(t * 2) * 0.8, braco = m.carga > 0 ? -9 : 0;
      for (const l of [-1, 1]) { elip(x, l * 8, 14, 5, 6, '#6a3a1e'); elip(x, l * 16, 3 + b + (l > 0 ? braco : 0), 5.5, 9, '#7a4a2a'); disco(x, l * 16, 11 + b + (l > 0 ? braco * 1.4 : 0), 5, '#a8683a'); }
      elip(x, 0, 3 + b, 13.5, 12.5, '#7a4a2a'); elip(x, -2, 0 + b, 10.5, 8.5, '#a8683a'); elip(x, -4, -3 + b, 5, 3, '#c98a4a');
      elip(x, 0, -11 + b, 8.5, 7.5, '#a8683a');
      for (const l of [-1, 1]) { poli(x, [[l * 2, -12 + b], [l * 6, -13 + b], [l * 6, -10.5 + b]], '#ffb347'); }
      traco(x, [[-5, 2 + b], [-2, 7 + b], [-6, 11 + b]], 1.2, '#ff9a3a'); traco(x, [[6, -1 + b], [3, 5 + b]], 1.2, '#ff9a3a');
    },
    passo(m, dt, ctx) {
      mover(m, dt, ctx, { ideal: 72, tang: 0.2 }); m.carga = Math.max(0, (m.carga || 0) - dt);
      relogio(m, dt, 'rocha', 3.4, () => { m.carga = 0.5; m.lanca = true; });
      if (m.lanca && m.carga <= 0.02) { m.lanca = false; ctx.tiro(m.x, m.y - 4, mira(m, ctx), 60, { cor: '#c98a4a', r: 3, vida: 5, forma: 'bola' }); ctx.bip(120, 0.1, 'square', 0.04); }
    },
    morrer(m, ctx) { ctx.campo(m.x, m.y, 26, 0.01, 5, { lento: 0.5, cor: '190, 130, 70' }); ctx.particulas(m.x, m.y, 16, ['#c98a4a', '#7a4a2a', '#ffb347'], 60); },
  },
  caranguejo: {
    nome: 'CARANGUEJO-PULSAR', dica: 'anda de lado e cospe brasas', cor: '#ff8a3a', raio: 10, hp: 16, vel: 16, xp: 10, tela: [90, 70],
    desenhar(x, m, t) {
      const abre = Math.sin(t * 3) * 0.2;
      for (const l of [-1, 1]) {
        for (let k = 0; k < 3; k++) traco(x, [[l * 8, 4 + k * 2.4], [l * (14 + k), 8 + k * 3 + Math.sin(t * 8 + k + l) * 1.6], [l * (17 + k), 14 + k * 3]], 1.8, '#a83a1a');
        traco(x, [[l * 11, -1], [l * 19, -7]], 3.4, '#c9482a'); poli(x, [[l * 19, -7], [l * 28, -13 - abre * 9], [l * 25, -6], [l * 30, -4 + abre * 8], [l * 21, -1]], '#ff7a3a'); poli(x, [[l * 21, -5], [l * 27, -11], [l * 25, -6]], '#ffd0a0');
        traco(x, [[l * 4, -6], [l * 5, -13]], 1.4, '#a83a1a'); disco(x, l * 5, -14, 2, '#ffe14a'); disco(x, l * 5, -14, 0.9, '#2a0a00');
      }
      elip(x, 0, 2, 13, 9, '#c9482a'); elip(x, 0, 0, 11, 7, '#ff7a3a'); elip(x, -3, -2, 5, 2.6, '#ffc98a'); disco(x, 0, 2, 2.2 + Math.sin(t * 6) * 0.6, '#ffe14a');
    },
    passo(m, dt, ctx) { mover(m, dt, ctx, { ideal: 74, tang: 0.85 }); relogio(m, dt, 'tiro', 2.8, () => ctx.tiro(m.x, m.y, mira(m, ctx), 70, { cor: '#ff8a3a', r: 2, vida: 5, forma: 'fogo' })); },
  },
  pesadelo: {
    nome: 'PESADELO', dica: 'some e ressurge investindo', cor: '#ff3b4a', raio: 10, hp: 14, vel: 13, xp: 11, tela: [96, 80],
    desenhar(x, m, t) {
      if (Math.cos(m.olhar || 0) < 0) x.scale(-1, 1);
      for (let k = 0; k < 6; k++) { const a = -2.2 + k * 0.3, f = 10 + Math.sin(t * 7 + k * 1.7) * 3.5; poli(x, [[-4 + Math.cos(a) * 8, -2 + Math.sin(a) * 8], [-4 + Math.cos(a) * (8 + f), -2 + Math.sin(a) * (8 + f)], [-4 + Math.cos(a + 0.35) * 8, -2 + Math.sin(a + 0.35) * 8]], k % 2 ? '#7a1030' : '#c4183a'); }
      elip(x, -9, 9, 10, 13, '#3a1c52'); poli(x, [[-4, -9], [4, -13], [10, -6], [20, 1], [20, 5], [14, 6], [8, 9], [-2, 8], [-8, 0]], '#5a3a78'); poli(x, [[-4, -9], [4, -13], [10, -6], [3, -4]], '#8a6aa8'); poli(x, [[-3, -10], [1, -18], [3, -9]], '#3a1c52');
      elip(x, 7, -1, 4.5, 3.5, '#4a2a5e'); disco(x, 5, -3, 2.4, '#ff3b4a'); disco(x, 5, -3, 1.1, '#ffffff'); disco(x, 18, 3, 1, '#12081a'); poli(x, [[18, 5], [24, 7 + Math.sin(t * 5)], [18, 7]], 'rgba(200,200,255,0.5)');
    },
    passo(m, dt, ctx) {
      m.ciclo = ((m.ciclo ?? Math.random() * 4) + dt) % 4.4;
      if (m.ciclo < 1.6) { m.sumido = 0.1; mover(m, dt, ctx, { vel: m.vel * 1.4 }); m.dx = null; } // meio fantasma: não machuca nem é ferido
      else if (m.ciclo < 2.2) { if (m.dx == null) { const a = mira(m, ctx); m.dx = Math.cos(a); m.dy = Math.sin(a); ctx.onda(m.x, m.y, 20, '#ff3b4a', 100); ctx.bip(300, 0.08, 'sawtooth', 0.04); } m.x += m.dx * 150 * dt; m.y += m.dy * 150 * dt; }
      else mover(m, dt, ctx, { vel: m.vel * 0.8 });
    },
  },
  olhoHelice: {
    nome: 'OLHO DA HÉLICE', dica: 'dispara um raio marcado', cor: '#58e8f0', raio: 10, hp: 14, vel: 14, xp: 10, tela: [80, 80],
    desenhar(x, m, t) {
      const o = m.olhar || 0;
      for (let k = 0; k < 5; k++) { const a = (k * TAU) / 5 + t * 0.5, pts = []; for (let s = 0; s < 6; s++) pts.push([Math.cos(a) * (10 + s * 4) + Math.sin(t * 3 + s) * 1.5, Math.sin(a) * (10 + s * 4) + Math.cos(t * 3 + s) * 1.5]); traco(x, pts, 2, '#2a8a98'); }
      disco(x, 0, 0, 13, '#1a6a78'); disco(x, 0, 0, 11.5, '#e8ffff'); disco(x, Math.cos(o) * 3, Math.sin(o) * 3, 7.5, '#58e8f0'); disco(x, Math.cos(o) * 3, Math.sin(o) * 3, 5, '#1a9aa8'); elip(x, Math.cos(o) * 3, Math.sin(o) * 3, 1.8, 4.5, '#02131a'); disco(x, Math.cos(o) * 3 - 2.5, Math.sin(o) * 3 - 2.5, 1.2, '#ffffff');
      if (m.carga > 0) { x.strokeStyle = '#ffffff'; x.lineWidth = 1.5; x.beginPath(); x.arc(0, 0, 15, 0, TAU); x.stroke(); }
    },
    passo(m, dt, ctx) { mover(m, dt, ctx, { ideal: 88, tang: 0.3 }); m.carga = Math.max(0, (m.carga || 0) - dt); relogio(m, dt, 'raio', 4.4, () => { m.carga = 0.9; ctx.raio({ x: m.x, y: m.y, ang: mira(m, ctx), aviso: 0.9, vida: 0.35, tick: 0, ligou: false, cor: '#58e8f0', dano: 1, dono: m }); }); },
  },
  ninho: {
    nome: 'NINHO ESTELAR', dica: 'choca insetos o tempo todo', cor: '#8aa0ff', raio: 12, hp: 24, vel: 10, xp: 14, tela: [90, 90],
    desenhar(x, m, t) {
      const girar = t * 0.4;
      for (let k = 0; k < 8; k++) { const a = (k * TAU) / 8 + girar, r = 15 + (k % 2) * 6; poli(x, [[Math.cos(a - 0.2) * 6, Math.sin(a - 0.2) * 6], [Math.cos(a) * r, Math.sin(a) * r], [Math.cos(a + 0.2) * 6, Math.sin(a + 0.2) * 6]], k % 2 ? '#5a6ad6' : '#3a3a9a'); }
      disco(x, 0, 0, 10, '#3a3a9a'); disco(x, 0, 0, 8.5, '#8aa0ff'); disco(x, -2, -2, 4, '#cfd8ff');
      for (let k = 0; k < 5; k++) { const a = (k * TAU) / 5 - girar * 1.5, p = 1 + Math.sin(t * 4 + k) * 0.25; disco(x, Math.cos(a) * 5.5, Math.sin(a) * 5.5, 2 * p, m.chocando ? '#ffe14a' : '#ff9ad0'); }
    },
    passo(m, dt, ctx) { mover(m, dt, ctx, { ideal: 96, tang: 0.55 }); m.chocando = Math.max(0, (m.chocando || 0) - dt); relogio(m, dt, 'ovos', 5.4, () => { const n = ctx.S.inimigos.filter((o) => o.tipo === 'inseto').length; if (n >= 9) return; m.chocando = 0.6; for (let i = 0; i < 2; i++) { const a = Math.random() * TAU; ctx.invocar('inseto', m.x + Math.cos(a) * 14, m.y + Math.sin(a) * 14); } ctx.particulas(m.x, m.y, 10, ['#ff9ad0', '#8aa0ff', '#ffffff'], 60); ctx.bip(500, 0.08, 'triangle', 0.04); }); },
  },
  carniceiro: {
    nome: 'CARNICEIRO', dica: 'come cristais e se cura', cor: '#ffc88a', raio: 11, hp: 20, vel: 15, xp: 12, tela: [90, 80],
    desenhar(x, m, t) {
      const g = Math.min(8, Math.floor((m.guardado || 0) / 3));
      for (const l of [-1, 1]) for (let k = 0; k < 3; k++) traco(x, [[l * 7, 6 + k * 2], [l * (13 + k * 2), 11 + k * 3 + Math.sin(t * 7 + k + l) * 1.4], [l * (14 + k * 2), 17 + k * 3]], 2, '#4a3a30');
      poli(x, [[-12, -4], [-7, -11], [8, -11], [13, -4], [11, 9], [-10, 9]], '#6a5a4a'); poli(x, [[-9, -5], [-5, -9], [6, -9], [10, -5], [8, 6], [-7, 6]], '#8a7a66'); poli(x, [[-9, -5], [-5, -9], [0, -9], [-3, -4]], '#b0a088');
      traco(x, [[-8, 1], [-3, 4], [2, 1], [7, 4]], 1.2, '#3a2a20'); disco(x, 0, -3, 3, '#2a1a10'); disco(x, 0, -3, 1.8 + Math.sin(t * 6) * 0.3, '#ff3b4a');
      for (let k = 0; k < g; k++) disco(x, -6 + (k % 4) * 4, 5 + Math.floor(k / 4) * 3, 1.3, '#8be6ff');
      traco(x, [[12, 0], [19, -6 + Math.sin(t * 3) * 2]], 3.6, '#4a3a30'); poli(x, [[19, -6], [26, -11], [24, -4], [27, -1], [20, 1]], '#a89070');
    },
    passo(m, dt, ctx) {
      const S = ctx.S; let alvo = null, menor = 130;
      for (const c of S.cristais) { const d = Math.hypot(c.x - m.x, c.y - m.y); if (d < menor) { menor = d; alvo = c; } }
      if (alvo) { const a = Math.atan2(alvo.y - m.y, alvo.x - m.x); m.olhar = a; const k = m.vel * 1.3 * (ctx.lento ? ctx.lento(m) : 1) * dt; m.x += Math.cos(a) * k; m.y += Math.sin(a) * k; } else mover(m, dt, ctx);
      for (let i = S.cristais.length - 1; i >= 0; i--) { const c = S.cristais[i]; if (Math.hypot(c.x - m.x, c.y - m.y) < 15) { m.guardado = (m.guardado || 0) + c.v; m.hp = Math.min(m.hpMax, m.hp + 1); S.cristais.splice(i, 1); ctx.texto(m.x, m.y - 14, '+', '#ffc88a'); } }
    },
    morrer(m, ctx) { let v = m.guardado || 0; while (v > 0) { const q = v >= 6 ? 6 : v >= 3 ? 3 : v >= 2 ? 2 : 1; ctx.cristal(m.x, m.y, q); v -= q; } },
  },
  fulgor: {
    nome: 'FULGOR', dica: 'solta um raio e dá choque ao toque', cor: '#9cd8ff', raio: 9, hp: 15, vel: 17, xp: 11, tela: [80, 80],
    desenhar(x, m, t) {
      const q = Math.floor(t * 14);
      for (let k = 0; k < 7; k++) { const a = (k * TAU) / 7 + q * 0.7, pts = [[Math.cos(a) * 8, Math.sin(a) * 8]]; for (let s = 1; s <= 4; s++) pts.push([Math.cos(a + (((q + k + s) % 3) - 1) * 0.25) * (8 + s * 6), Math.sin(a + (((q + k + s) % 3) - 1) * 0.25) * (8 + s * 6)]); traco(x, pts, 2.4, '#3a7ad6'); traco(x, pts, 1, '#e8f6ff'); }
      disco(x, 0, 0, 9, '#3a7ad6'); disco(x, 0, 0, 7, '#9cd8ff'); disco(x, 0, 0, 4, '#ffffff');
    },
    passo(m, dt, ctx) { mover(m, dt, ctx, { ideal: 66, tang: 0.6 }); relogio(m, dt, 'raio', 3.2, () => ctx.raio({ x: m.x, y: m.y, ang: mira(m, ctx), aviso: 0.75, vida: 0.22, tick: 0, ligou: false, cor: '#9cd8ff', dano: 1, dono: m })); },
  },
  devorador: {
    nome: 'DEVORADOR', dica: 'puxa a nave para perto', cor: '#ff9a3a', raio: 11, hp: 20, vel: 10, xp: 13, tela: [90, 90],
    desenhar(x, m, t) {
      x.save(); x.rotate(-0.4);
      for (const [rx, ry, c, w] of [[26, 6.5, '#ff6a2a', 4.5], [22, 5.5, '#ffb347', 3], [18, 4.5, '#fff2c0', 1.4]]) { x.strokeStyle = c; x.lineWidth = w; x.beginPath(); x.ellipse(0, 0, rx, ry, 0, 0.15 * Math.sin(t) + Math.PI * 0.05, TAU); x.stroke(); }
      x.restore();
      disco(x, 0, 0, 11.5, '#6a3a1a'); disco(x, 0, 0, 10, '#05030a');
      for (let k = 0; k < 6; k++) { const a = t * 1.5 + (k * TAU) / 6; disco(x, Math.cos(a) * 14, Math.sin(a) * 6 * 0.8, 1.2, '#ffe0a0'); }
    },
    passo(m, dt, ctx) { const d = mover(m, dt, ctx, { ideal: 60, tang: 0.15 }); if (d < 105) ctx.puxar(m.x, m.y, 16, dt); },
    morrer(m, ctx) { ctx.onda(m.x, m.y, 40, '#ff9a3a', 120); for (const c of ctx.S.cristais) if (Math.hypot(c.x - m.x, c.y - m.y) < 120) { c.vx = (m.x - c.x) * 0.8; c.vy = (m.y - c.y) * 0.8; } },
  },
  hipercubo: {
    nome: 'HIPERCUBO', dica: 'pisca de lugar e atira', cor: '#78dcff', raio: 9, hp: 14, vel: 14, xp: 11, tela: [80, 80],
    desenhar(x, m, t) {
      const V = []; for (const a of [-1, 1]) for (const b of [-1, 1]) for (const d of [-1, 1]) V.push([a, b, d]);
      const E = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3], [2, 6], [3, 7], [4, 5], [4, 6], [5, 7], [6, 7]];
      const ax = t * 0.9, ay = t * 0.6, P = V.map(([vx, vy, vz]) => { const y1 = vy * Math.cos(ax) - vz * Math.sin(ax), z1 = vy * Math.sin(ax) + vz * Math.cos(ax), x1 = vx * Math.cos(ay) + z1 * Math.sin(ay), z2 = -vx * Math.sin(ay) + z1 * Math.cos(ay), k = 1 / (1 + z2 * 0.16); return [x1 * 11 * k, y1 * 11 * k]; });
      poli(x, [P[0], P[1], P[3], P[2]], 'rgba(120,220,255,0.35)'); poli(x, [P[4], P[5], P[7], P[6]], 'rgba(60,140,220,0.55)');
      for (const [a, b] of E) traco(x, [P[a], P[b]], 1.6, '#cfeeff'); for (const p of P) disco(x, p[0], p[1], 1.4, '#ffffff');
    },
    passo(m, dt, ctx) {
      mover(m, dt, ctx, { ideal: 70, tang: 0.3 });
      relogio(m, dt, 'pisca', 3.4, () => { const S = ctx.S, a = Math.random() * TAU; ctx.onda(m.x, m.y, 22, '#78dcff', 110); m.x = S.nx + Math.cos(a) * 60; m.y = S.ny + Math.sin(a) * 60; m.sumido = 0.2; m.tiroEm = 0.45; ctx.onda(m.x, m.y, 22, '#ffffff', 110); ctx.bip(900, 0.06, 'sine', 0.04); });
      if (m.tiroEm > 0) { m.tiroEm -= dt; if (m.tiroEm <= 0) ctx.tiro(m.x, m.y, mira(m, ctx), 76, { cor: '#78dcff', r: 2, vida: 5, forma: 'bola' }); }
    },
  },
  farol: {
    nome: 'FAROL', dica: 'gira um feixe como um farol', cor: '#8ad8ff', raio: 10, hp: 18, vel: 10, xp: 13, tela: [80, 90],
    desenhar(x, m, t) {
      poli(x, [[-8, 14], [-5, -2], [5, -2], [8, 14]], '#3a5a8a'); poli(x, [[-6, 14], [-4, -1], [0, -1], [-2, 14]], '#5a86c0');
      for (const y of [2, 7, 12]) traco(x, [[-6, y], [6, y]], 1, '#1a2a4a');
      poli(x, [[-6, -2], [-3, -12], [3, -12], [6, -2]], '#cfeeff'); disco(x, 0, -9, 4.5, '#ffffff'); disco(x, 0, -9, 7 + Math.sin(t * 8), 'rgba(200,240,255,0.35)');
      const a = t * 2.4; traco(x, [[0, -9], [Math.cos(a) * 20, -9 + Math.sin(a) * 6]], 2, '#ffffff'); disco(x, 0, -17, 1.6, '#ff6a8a');
    },
    passo(m, dt, ctx) { mover(m, dt, ctx, { ideal: 92 }); relogio(m, dt, 'feixe', 5.2, () => { const a = mira(m, ctx), s = Math.random() < 0.5 ? 1 : -1; ctx.raio({ x: m.x, y: m.y - 9, ang: a - 0.8 * s, giro: 1.15 * s, aviso: 1, vida: 1.4, tick: 0, ligou: false, cor: '#8ad8ff', dano: 1, dono: m }); ctx.bip(560, 0.2, 'sine', 0.04); }); },
  },
  tecelao: {
    nome: 'TECELÃO DE DOBRA', dica: 'abre portais e chama morcegos', cor: '#a58bff', raio: 11, hp: 18, vel: 13, xp: 13, tela: [90, 90],
    desenhar(x, m, t) {
      for (let k = 0; k < 6; k++) { const a = (k * TAU) / 6 + t * 0.7, pts = []; for (let s = 0; s < 6; s++) pts.push([Math.cos(a + s * 0.25 + Math.sin(t * 2 + s) * 0.2) * (12 + s * 4), Math.sin(a + s * 0.25 + Math.sin(t * 2 + s) * 0.2) * (12 + s * 4)]); traco(x, pts, 2.2, '#5a3ac0'); traco(x, pts, 0.9, '#d6c4ff'); }
      disco(x, 0, 0, 13, '#2a1a6a'); disco(x, 0, 0, 11, '#05030f');
      for (let k = 0; k < 3; k++) { x.strokeStyle = k % 2 ? '#a58bff' : '#e0d4ff'; x.lineWidth = 1.4; x.beginPath(); x.arc(0, 0, 4 + k * 3, t * (k % 2 ? 2 : -2), t * (k % 2 ? 2 : -2) + 4); x.stroke(); }
    },
    passo(m, dt, ctx) {
      mover(m, dt, ctx, { ideal: 90, tang: 0.3 });
      relogio(m, dt, 'tPortal', 5.2, () => { const S = ctx.S, n = S.inimigos.filter((o) => o.tipo === 'morcego').length; if (n >= 8) return; const a = Math.random() * TAU, px = S.nx + Math.cos(a) * 75, py = S.ny + Math.sin(a) * 75; ctx.campo(px, py, 12, 0.9, 0.01, { lento: 0.99, cor: '165, 139, 255' }); m.portal = { x: px, y: py, t: 0.9 }; ctx.onda(px, py, 18, '#a58bff', 40); });
      if (m.portal) { m.portal.t -= dt; if (m.portal.t <= 0) { for (let i = 0; i < 2; i++) ctx.invocar('morcego', m.portal.x + (i - 0.5) * 8, m.portal.y); ctx.particulas(m.portal.x, m.portal.y, 12, ['#a58bff', '#ffffff', '#2a1a6a'], 70); m.portal = null; } }
    },
  },
  aracnideo: {
    nome: 'ARACNÍDEO DE LUZ', dica: 'prende o chão em teias', cor: '#c0a0ff', raio: 10, hp: 18, vel: 16, xp: 12, tela: [90, 80],
    desenhar(x, m, t) {
      for (const l of [-1, 1]) for (let k = 0; k < 4; k++) { const sw = Math.sin(t * 8 + k * 1.6 + (l > 0 ? 0 : Math.PI)) * 2, ax = l * (6 + k * 2), ay = -4 + k * 4; traco(x, [[l * 5, ay * 0.6], [ax + l * 8, ay - 4 + sw], [ax + l * 13, ay + 7 + sw]], 1.8, '#6a4ac0'); traco(x, [[l * 5, ay * 0.6], [ax + l * 8, ay - 4 + sw], [ax + l * 13, ay + 7 + sw]], 0.8, '#e0d4ff'); }
      elip(x, -3, 3, 9, 8, '#4a2a9a'); elip(x, -4, 1, 6, 4.5, '#a58bff'); poli(x, [[-8, 2], [-3, 6], [-8, 9]], '#ffe14a'); elip(x, 6, -1, 6, 5.5, '#4a2a9a'); elip(x, 5, -2, 4, 3, '#a58bff');
      for (const [ex, ey] of [[8, -3], [8, 1], [10, -1]]) { disco(x, ex, ey, 1.3, '#ff3b8a'); disco(x, ex, ey, 0.6, '#ffffff'); }
      for (let k = 0; k < 5; k++) { const a = t * 1.2 + k * 1.3; disco(x, Math.cos(a) * 17, Math.sin(a) * 14, 0.9, 'rgba(255,240,180,0.9)'); }
    },
    passo(m, dt, ctx) {
      mover(m, dt, ctx, { ideal: 70, tang: 0.7 });
      relogio(m, dt, 'teia', 5.4, () => { const S = ctx.S; ctx.campo(S.nx + aleatorio(-24, 24), S.ny + aleatorio(-16, 16), 18, 0.9, 7, { lento: 0.45 }); ctx.bip(420, 0.1, 'triangle', 0.04); });
      relogio(m, dt, 'veneno', 3.3, () => ctx.tiro(m.x, m.y, mira(m, ctx), 72, { cor: '#c0a0ff', r: 2, vida: 5, forma: 'bola' }));
    },
  },
};
// os nativos são maiores que os monstros comuns: o desenho é ampliado e a área de colisão cresce junto
for (const [id, n] of Object.entries(NATIVOS)) { n.id = 'nat-' + id; n.escala = 1.3; n.tela = n.tela.map((v) => Math.round(v * 1.3)); n.raio = Math.round(n.raio * 1.25); }
export const nativoPorId = (id) => NATIVOS[id];
