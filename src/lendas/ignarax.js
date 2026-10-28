// IGNARAX, o Dragão de Cinzas: corpo serpenteante, asas que batem, boca que abre. Sopra um rio de fogo, faz chover meteoros
// e mergulha como um cometa. Ao enfurecer, o fogo vira dois jatos e ele solta anéis de chamas.
import { TAU, normAng, dirPara, aleatorio, poli, disco, elip, traco, rodear } from './base.js';

const COR = { corpo: '#8c1b2a', escuro: '#4a0e1c', claro: '#c4402f', membrana: '#b3202f', osso: '#f3dcb0', olho: '#ffe14a' };
const cabeca = (c, d = 44) => [c.x + Math.cos(c.ang) * d, c.y + Math.sin(c.ang) * d];

export const ignarax = {
  id: 'ignarax', nome: 'IGNARAX', titulo: 'O DRAGÃO DE CINZAS', cor: '#ff7a3a', raio: 19, hpMult: 1.5, vitorias: 0, tela: [160, 160], gira: true,
  desc: 'Sopra um rio de fogo, faz chover meteoros e mergulha como um cometa. Quando enfurece, o fogo dobra.',
  estadoRetrato: { boca: 0.35 }, angRetrato: 0,
  criar(c) { Object.assign(c, { ang: Math.PI, asa: 0, boca: 0, travaAng: null }); },

  desenhar(x, c, t) {
    const f = c.asa || 0, boca = c.boca || 0, enf = c.enfurecido, cor = enf ? { ...COR, corpo: '#a01c20', claro: '#e0562a', membrana: '#d22a2a' } : COR;
    const segs = [];
    for (let k = 0; k < 10; k++) segs.push([4 - k * 8, Math.sin(t * 3.1 - k * 0.7) * (k * 0.85), Math.max(2.4, 9.6 - k * 0.8)]);
    // asas (atrás do corpo)
    const s = 0.55 + 0.45 * Math.cos(f), varre = (1 - s) * 0.9;
    for (const lado of [-1, 1]) {
      const raizX = 0, raizY = 4 * lado, pontas = [];
      [[-0.35, 62], [0.0, 56], [0.38, 48], [0.78, 36]].forEach(([th, len]) => { const a = th + varre, l = len * (0.5 + 0.5 * s); pontas.push([raizX - Math.sin(a) * l, raizY + lado * Math.cos(a) * l]); });
      const pts = [[raizX + 3, raizY]];
      pontas.forEach((p, i) => { pts.push(p); if (i < 3) { const q = pontas[i + 1]; pts.push([(p[0] + q[0]) / 2 + (raizX - (p[0] + q[0]) / 2) * 0.22, (p[1] + q[1]) / 2 + (raizY - (p[1] + q[1]) / 2) * 0.22]); } });
      pts.push([raizX - 12, raizY]);
      poli(x, pts, cor.membrana);
      poli(x, [[raizX + 3, raizY], pontas[0], [raizX - 4, raizY + lado * 12]], '#7a1424');
      for (const p of pontas) traco(x, [[raizX, raizY], p], 1.7, cor.osso);
    }
    // corpo e cauda
    for (let k = segs.length - 1; k >= 0; k--) {
      const [sx, sy, r] = segs[k];
      disco(x, sx, sy, r, cor.escuro); disco(x, sx + 0.8, sy - 0.8, r * 0.82, cor.corpo); disco(x, sx + 1.4, sy - 1.6, r * 0.36, cor.claro);
      if (k >= 1 && k % 2 === 0) poli(x, [[sx + 3, sy], [sx - 1.5, sy - 2.2], [sx - 1.5, sy + 2.2]], cor.osso);
    }
    const [tx, ty] = segs[9];
    poli(x, [[tx - 2, ty - 5], [tx - 15, ty], [tx - 2, ty + 5]], cor.claro);
    // patas
    for (const px of [5, -9]) for (const l of [-1, 1]) { poli(x, [[px, 7 * l], [px + 5, 13 * l], [px - 2, 11 * l]], cor.escuro); disco(x, px + 4.5, 12.5 * l, 1.2, cor.osso); }
    // cabeça
    elip(x, 16, 0, 12.5, 9.5, cor.corpo); elip(x, 18, -2.5, 6, 3.4, cor.claro);
    for (const l of [-1, 1]) { poli(x, [[13, 7 * l], [-6, 21 * l], [3, 10 * l]], cor.osso); poli(x, [[13, 7 * l], [-1, 17 * l], [6, 9 * l]], '#c9a96e'); }
    poli(x, [[24, -5.6], [46, -3.4], [48, 0], [46, 3.4], [24, 5.6]], cor.corpo);
    for (const l of [-1, 1]) { x.save(); x.translate(26, 0); x.rotate(l * boca * 0.5); x.translate(-26, 0); poli(x, [[26, l * 1.5], [45, l * 2.6], [43, l * 6], [26, l * 5.6]], cor.escuro); x.restore(); }
    if (boca > 0.15) { disco(x, 43, 0, 2.5 + boca * 4, '#ffb347'); disco(x, 43, 0, 1.4 + boca * 2.4, '#fff2b0'); }
    for (const l of [-1, 1]) { disco(x, 20, 6.2 * l, 2.8, cor.olho); disco(x, 20.8, 6.2 * l, 1.2, '#4a0e1c'); disco(x, 41, 1.6 * l, 0.8, '#2a0610'); }
  },

  efeitos(g, c, t, ctx) {
    const S = ctx.S, a = c.acao, x = Math.round(c.x), y = Math.round(c.y);
    const brilho = g.createRadialGradient(x, y, 6, x, y, 56);
    brilho.addColorStop(0, `rgba(255, 120, 40, ${c.enfurecido ? 0.3 : 0.18})`); brilho.addColorStop(1, 'rgba(255, 120, 40, 0)');
    g.fillStyle = brilho; g.fillRect(x - 56, y - 56, 112, 112);
    if (!a) return;
    const [hx, hy] = cabeca(c);
    const pisca = Math.floor(S.ta * 12) % 2 === 0;
    if (a.nome === 'fogo' && a.t < 0.9) { // cone do sopro
      g.strokeStyle = pisca ? '#ff9a3a' : '#ffe14a'; g.lineWidth = 1; g.setLineDash([3, 3]);
      const d = c.enfurecido ? 0.75 : 0.55;
      for (const off of [-d, d]) { g.beginPath(); g.moveTo(hx, hy); g.lineTo(hx + Math.cos(c.ang + off) * 130, hy + Math.sin(c.ang + off) * 130); g.stroke(); }
      g.setLineDash([]);
    }
    if (a.nome === 'rasante' && a.t < 0.7) {
      g.strokeStyle = pisca ? '#ff3b4a' : '#ffb3ba'; g.lineWidth = 3; g.setLineDash([5, 4]);
      g.beginPath(); g.moveTo(hx, hy); g.lineTo(hx + Math.cos(a.dir) * 230, hy + Math.sin(a.dir) * 230); g.stroke(); g.setLineDash([]);
    }
  },

  mover(c, dt, ctx, entrando) {
    const alvo = dirPara(c, ctx.S);
    if (c.travaAng != null) c.ang = c.travaAng; else c.ang += normAng(alvo - c.ang) * Math.min(1, dt * 3.2);
    const ritmo = c.acao ? (c.acao.nome === 'meteoros' ? 5 : 9) : 6;
    c.asa += dt * (ritmo + (c.enfurecido ? 2 : 0));
    if (c.parado) return;
    rodear(c, dt, ctx, { ideal: 74, vel: 38 * (c.enfurecido ? 1.25 : 1), entrando });
  },

  enfurecer(c) { c.boca = 0; },

  ataques: {
    fogo: {
      peso: 3, dur: 2.7, descanso: 1.3,
      iniciar(c, ctx, a) { c.parado = true; ctx.bip(110, 0.6, 'sawtooth', 0.05); },
      tick(c, dt, ctx, a) {
        c.boca = a.t < 0.9 ? a.t / 0.9 : a.t < 2.4 ? 1 : Math.max(0, 1 - (a.t - 2.4) / 0.3);
        if (a.t < 0.9) { a.dir = c.ang; return; }
        c.travaAng = a.dir; if (a.t >= 2.4) c.travaAng = null;
        if (a.t >= 2.4) return;
        a.acc -= dt;
        while (a.acc <= 0) {
          a.acc += 0.05;
          const prog = (a.t - 0.9) / 1.5, varre = (prog - 0.5) * 1.05, [hx, hy] = cabeca(c);
          for (const off of c.enfurecido ? [-0.3, 0.3] : [0]) ctx.tiro(hx, hy, a.dir + varre + off + aleatorio(-0.06, 0.06), 105, { cor: '#ff8a2a', r: 2.4, vida: 1.25, forma: 'fogo' });
          ctx.particulas(hx, hy, 1, ['#ffb347', '#ff6a2a', '#ffe14a'], 40);
        }
        if (Math.random() < 0.1) ctx.bip(160, 0.05, 'sawtooth', 0.03);
      },
      fim(c) { c.boca = 0; c.travaAng = null; },
    },
    meteoros: {
      peso: 2, dur: 2.4, descanso: 1.2,
      iniciar(c, ctx) {
        c.parado = true; ctx.texto(c.x, c.y - 34, 'CHUVA DE FOGO!', '#ff9a3a'); ctx.bip(90, 0.5, 'sawtooth', 0.05);
        const S = ctx.S, n = c.enfurecido ? 9 : 6;
        for (let i = 0; i < n; i++) { const an = Math.random() * TAU, r = i === 0 ? 0 : aleatorio(18, 62); ctx.campo(S.nx + Math.cos(an) * r, S.ny + Math.sin(an) * r, 15, 1.0 + i * 0.2, 1.4); }
      },
      tick(c, dt, ctx, a) { c.boca = Math.min(1, a.t * 1.5) * (a.t < 1.8 ? 1 : 0.2); },
      fim(c) { c.boca = 0; },
    },
    rasante: {
      peso: 2, dur: 1.5, descanso: 1.2,
      iniciar(c, ctx, a) { c.parado = true; a.dir = dirPara(c, ctx.S); c.travaAng = a.dir; ctx.bip(260, 0.2, 'triangle', 0.05); },
      tick(c, dt, ctx, a) {
        c.travaAng = a.dir;
        if (a.t < 0.7) return;
        c.x += Math.cos(a.dir) * 255 * dt; c.y += Math.sin(a.dir) * 255 * dt; c.asa += dt * 4;
        a.acc -= dt;
        if (a.acc <= 0) { a.acc = 0.12; ctx.campo(c.x - Math.cos(a.dir) * 14, c.y - Math.sin(a.dir) * 14, 9, 0.12, 1.8); }
        ctx.particulas(c.x, c.y, 2, ['#ff7a3a', '#ffe14a', '#ffffff'], 40);
      },
      fim(c) { c.travaAng = null; },
    },
    anel: {
      peso: 3, dur: 1.7, fase2: true, descanso: 1.1,
      iniciar(c, ctx) { c.parado = true; ctx.texto(c.x, c.y - 34, 'ANEL DE FOGO', '#ff3b4a'); },
      tick(c, dt, ctx, a) {
        c.boca = a.t < 1.4 ? 0.8 : 0;
        for (const quando of [0.5, 1.0]) if (a.t >= quando && !a['f' + quando]) {
          a['f' + quando] = true; ctx.bip(150, 0.2, 'sawtooth', 0.05); ctx.onda(c.x, c.y, 40, '#ff7a3a', 120);
          const n = 28, folga = Math.random() * TAU;
          for (let i = 0; i < n; i++) { const an = (i * TAU) / n; if (Math.abs(normAng(an - folga)) > 0.4) ctx.tiro(c.x, c.y, an, 72, { cor: '#ff8a2a', r: 2, vida: 4, forma: 'fogo' }); }
        }
      },
      fim(c) { c.boca = 0; },
    },
  },
};
