// ABISMO, o Kraken do Vazio: um olho gigante rodeado de tentáculos que se contorcem. Varre o espaço com golpes marcados no chão,
// solta nuvens de tinta que escondem tudo e abre um redemoinho que puxa a nave. Ao enfurecer, golpeia de vários lados.
import { TAU, normAng, dirPara, aleatorio, poli, disco, elip, traco, rodear } from './base.js';

const COR = { corpo: '#2b3f8f', claro: '#5a78d6', escuro: '#16215a', ventosa: '#cfd9ff', iris: '#ff4f9a', esclera: '#f4efc8' };

export const kraken = {
  id: 'kraken', nome: 'ABISMO', titulo: 'O KRAKEN DO VAZIO', cor: '#5a8cff', raio: 21, hpMult: 1.7, vitorias: 3, tela: [200, 200], gira: false,
  desc: 'Seus tentáculos varrem o espaço, a tinta apaga tudo e o redemoinho puxa sua nave para o olho.',
  criar(c) { Object.assign(c, { olhar: 0, cortes: [], vortex: 0 }); },

  desenhar(x, c, t) {
    const enf = c.enfurecido, cor = enf ? { ...COR, corpo: '#6a2a8f', claro: '#a05ad6', escuro: '#35165a', iris: '#ffb02e' } : COR;
    const n = 8, girando = t * 0.12;
    for (let k = 0; k < n; k++) {
      const base = (k * TAU) / n + girando + Math.sin(t * 0.7 + k) * 0.1, pts = [];
      for (let s = 0; s < 16; s++) {
        const d = 14 + s * 3.8, off = Math.sin(t * 2.3 - s * 0.55 + k * 1.3) * (1 + s * 0.6);
        pts.push([Math.cos(base) * d - Math.sin(base) * off, Math.sin(base) * d + Math.cos(base) * off, Math.max(1.4, 7.8 - s * 0.42), base]);
      }
      for (let s = pts.length - 1; s >= 0; s--) { const [px, py, r] = pts[s]; disco(x, px, py, r, cor.escuro); disco(x, px - 0.4, py - 0.6, r * 0.8, cor.corpo); }
      for (let s = 2; s < pts.length; s += 2) { const [px, py, r, b] = pts[s]; disco(x, px - Math.sin(b) * r * 0.45, py + Math.cos(b) * r * 0.45, Math.max(0.9, r * 0.32), cor.ventosa); }
    }
    // corpo bulboso, verrugas e o olho
    elip(x, 0, 0, 25, 22, cor.escuro); elip(x, -1, -1, 23, 20, cor.corpo); elip(x, -6, -9, 13, 6, cor.claro);
    for (const [wx, wy, wr] of [[-15, 10, 2.4], [14, 12, 2.2], [-10, -14, 1.8], [16, -9, 2], [0, 17, 1.8], [-19, -2, 1.7]]) { disco(x, wx, wy, wr, cor.claro); disco(x, wx + 0.5, wy + 0.5, wr * 0.5, cor.escuro); }
    const ol = c.olhar || 0, piscar = Math.max(0, Math.sin(t * 0.9)) > 0.985 ? 0.2 : 1, abre = (c.abertura ?? 1) * piscar;
    elip(x, 0, 0, 13, 12 * abre, cor.esclera);
    disco(x, Math.cos(ol) * 4, Math.sin(ol) * 4 * abre, 8 * Math.min(1, 0.4 + abre), cor.iris);
    elip(x, Math.cos(ol) * 4, Math.sin(ol) * 4 * abre, 2.8 + (c.dilat || 0), 7.4 * abre, '#1a0a2a');
    disco(x, Math.cos(ol) * 4 - 3, Math.sin(ol) * 4 * abre - 3, 1.6, '#ffffff');
  },

  efeitos(g, c, t, ctx) {
    const S = ctx.S, x = Math.round(c.x), y = Math.round(c.y), pisca = Math.floor(S.ta * 12) % 2 === 0;
    const brilho = g.createRadialGradient(x, y, 8, x, y, 70);
    brilho.addColorStop(0, `rgba(90, 140, 255, ${c.enfurecido ? 0.26 : 0.16})`); brilho.addColorStop(1, 'rgba(90, 140, 255, 0)');
    g.fillStyle = brilho; g.fillRect(x - 70, y - 70, 140, 140);
    for (const k of c.cortes || []) { // fatia marcada no chão e o tentáculo que varre
      if (k.t < k.aviso) {
        const u = k.t / k.aviso;
        g.fillStyle = `rgba(255, 59, 74, ${0.1 + 0.22 * u})`; g.beginPath(); g.moveTo(x, y); g.arc(x, y, k.alc, k.ang - k.meia, k.ang + k.meia); g.closePath(); g.fill();
        g.strokeStyle = pisca ? '#ff3b4a' : '#ffb3ba'; g.lineWidth = 1; g.setLineDash([3, 3]); g.beginPath(); g.moveTo(x, y); g.arc(x, y, k.alc, k.ang - k.meia, k.ang + k.meia); g.closePath(); g.stroke(); g.setLineDash([]);
      } else {
        const u = Math.min(1, (k.t - k.aviso) / k.golpe), a = k.ang - k.meia + 2 * k.meia * u;
        g.fillStyle = 'rgba(255, 120, 150, 0.2)'; g.beginPath(); g.moveTo(x, y); g.arc(x, y, k.alc, k.ang - k.meia, a); g.closePath(); g.fill();
        for (let s = 0; s < 24; s++) { const d = 20 + s * (k.alc - 18) / 23, r = Math.max(1.6, 7 - s * 0.22); g.fillStyle = '#16215a'; g.beginPath(); g.arc(x + Math.cos(a) * d, y + Math.sin(a) * d, r + 1, 0, TAU); g.fill(); g.fillStyle = s % 3 ? '#5a78d6' : '#cfd9ff'; g.beginPath(); g.arc(x + Math.cos(a) * d, y + Math.sin(a) * d, r * 0.82, 0, TAU); g.fill(); }
      }
    }
    if (c.acao?.nome === 'vortice' && c.acao.t > 0.3 && c.acao.t < 2.7) { // anéis que se fecham
      g.strokeStyle = 'rgba(122, 140, 255, 0.7)'; g.lineWidth = 1;
      for (let k = 0; k < 3; k++) { const r = 110 - (((S.ta * 55) + k * 37) % 110); g.beginPath(); g.arc(x, y, r, 0, TAU); g.stroke(); }
    }
  },

  mover(c, dt, ctx, entrando) {
    const S = ctx.S, alvo = dirPara(c, S);
    c.olhar += normAng(alvo - c.olhar) * Math.min(1, dt * 4);
    c.dilat = Math.max(0, (c.dilat || 0) - dt * 2);
    for (const k of c.cortes) k.t += dt;
    c.cortes = c.cortes.filter((k) => k.t < k.aviso + k.golpe + 0.25);
    if (c.parado) return;
    rodear(c, dt, ctx, { ideal: 78, vel: 20 + (c.enfurecido ? 6 : 0), banda: 32, tang: 0.4, entrando });
  },
  passivo(c, dt, ctx) { // o golpe acerta quando o tentáculo começa a varrer
    const S = ctx.S;
    for (const k of c.cortes) {
      if (k.t >= k.aviso && !k.feriu) {
        k.feriu = true; ctx.tremor(0.3); ctx.bip(90, 0.25, 'sawtooth', 0.06); ctx.particulas(c.x + Math.cos(k.ang) * k.alc * 0.7, c.y + Math.sin(k.ang) * k.alc * 0.7, 10, ['#5a78d6', '#cfd9ff', '#16215a'], 80);
      }
      if (k.t >= k.aviso && k.t < k.aviso + k.golpe) { // durante a varredura, quem está na fatia já varrida é ferido
        const u = (k.t - k.aviso) / k.golpe, a = k.ang - k.meia + 2 * k.meia * u, dx = S.nx - c.x, dy = S.ny - c.y, d = Math.hypot(dx, dy);
        if (d < k.alc + 6 && Math.abs(normAng(Math.atan2(dy, dx) - a)) < 0.2 && !k.acertou) { k.acertou = true; ctx.ferir(2); ctx.puxar(c.x, c.y, -260, 0.1); }
      }
    }
  },
  enfurecer(c) { c.dilat = 2; },

  ataques: {
    varredura: {
      peso: 4, dur: 1.8, descanso: 1.2,
      iniciar(c, ctx) {
        c.parado = true; const a0 = dirPara(c, ctx.S), lista = c.enfurecido ? [a0, a0 + 1.0, a0 - 1.0] : [a0];
        lista.forEach((ang, i) => c.cortes.push({ ang, meia: 0.4, alc: 112, t: -i * 0.15, aviso: 0.95, golpe: 0.32, feriu: false }));
        ctx.texto(c.x, c.y - 36, 'TENTÁCULOS!', '#ff9aa6'); ctx.bip(120, 0.3, 'triangle', 0.05);
      },
      tick(c, dt, ctx, a) { c.abertura = a.t < 1.2 ? 1 : 0.6; },
      fim(c) { c.abertura = 1; },
    },
    tinta: {
      peso: 2, dur: 1.1, descanso: 1.4,
      iniciar(c, ctx) {
        c.parado = true; const S = ctx.S; ctx.texto(c.x, c.y - 36, 'TINTA!', '#b58cff'); ctx.bip(160, 0.3, 'sawtooth', 0.05);
        for (let i = 0; i < (c.enfurecido ? 4 : 3); i++) { const a = Math.random() * TAU, d = aleatorio(10, 60); ctx.tinta(S.nx + Math.cos(a) * d, S.ny + Math.sin(a) * d, aleatorio(30, 40), 7.5); }
        ctx.particulas(c.x, c.y, 20, ['#1a0a2a', '#3a1a5a', '#b58cff'], 80);
      },
    },
    vortice: {
      peso: 3, dur: 3.2, descanso: 1.2,
      iniciar(c, ctx) { c.parado = true; ctx.texto(c.x, c.y - 36, 'REDEMOINHO!', '#7a8cff'); ctx.bip(70, 0.8, 'sine', 0.06); },
      tick(c, dt, ctx, a) {
        c.dilat = 3;
        if (a.t > 0.6 && a.t < 2.7) {
          ctx.puxar(c.x, c.y, c.enfurecido ? 52 : 40, dt);
          a.acc -= dt;
          if (a.acc <= 0) { a.acc = 0.14; for (let k = 0; k < 2; k++) ctx.tiro(c.x, c.y, a.t * 5 + k * Math.PI, 50, { cor: '#7a8cff', r: 2, vida: 3.5, forma: 'bola' }); }
        }
        if (a.t >= 2.8 && !a.estouro) {
          a.estouro = true; ctx.tremor(0.4); ctx.onda(c.x, c.y, 60, '#7a8cff', 160);
          const folga = Math.random() * TAU;
          for (let i = 0; i < 22; i++) { const an = (i * TAU) / 22; if (Math.abs(normAng(an - folga)) > 0.35) ctx.tiro(c.x, c.y, an, 66, { cor: '#7a8cff', r: 2, vida: 4, forma: 'bola' }); }
        }
      },
    },
  },
};
