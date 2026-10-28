// TECELÃ, a Aranha-Rainha: oito pernas que andam de verdade, teias que prendem a nave, um salto que cai como um meteoro e crias
// que correm em bando. Ao enfurecer, ela cerca a nave de teias e salta duas vezes seguidas.
import { TAU, normAng, dirPara, aleatorio, poli, disco, elip, traco, rodear } from './base.js';

const COR = { corpo: '#2c1636', claro: '#5b2f6e', pata: '#170a20', pataClara: '#7a4896', olho: '#ff3b4a', osso: '#f2e6c8', marca: '#e0343e' };

export const tecela = {
  id: 'tecela', nome: 'TECELÃ', titulo: 'A ARANHA-RAINHA', cor: '#c96bff', raio: 18, hpMult: 1.3, vitorias: 0, tela: [150, 150], gira: true,
  desc: 'Prende a nave em teias, salta como um meteoro e chama as crias. Cuidado com o chão: ele gruda.',
  estadoRetrato: { velAnim: 0.6, boca: 0.2 }, angRetrato: -0.6,
  criar(c) { Object.assign(c, { ang: Math.PI, velAnim: 0.5, boca: 0, alt: 0, pulso: 0 }); },

  desenhar(x, c, t) {
    const v = c.velAnim ?? 0.5, enf = c.enfurecido, cor = enf ? { ...COR, corpo: '#3a1230', claro: '#7a2a5c', marca: '#ffb02e' } : COR, alt = c.alt || 0, esc = 1.3 + alt * 0.45;
    x.save(); x.scale(esc, esc);
    const ph = t * (3 + 9 * v);
    // pernas: duas partes cada, balançando em pares alternados
    for (const l of [-1, 1]) for (let k = 0; k < 4; k++) {
      const swing = Math.sin(ph + k * 1.7 + (l > 0 ? 0 : Math.PI)) * 0.3 * (0.35 + v), a = Math.PI / 2 + (k - 1.5) * 0.52 + swing;
      const bx = 7 - k * 3.4, by = l * 4.5, jx = bx + Math.cos(a) * 14, jy = by + l * Math.sin(a) * 14;
      const b2 = a + 0.95 + (k < 2 ? 0.25 : -0.1), tx = jx + Math.cos(b2) * 19, ty = jy + l * Math.sin(b2) * 19;
      traco(x, [[bx, by], [jx, jy], [tx, ty]], 3.6, cor.pata); traco(x, [[bx, by - 0.6], [jx, jy - 0.6], [tx, ty - 0.6]], 1.4, cor.pataClara);
      disco(x, jx, jy, 2.4, cor.pata);
    }
    // abdômen com a marca de ampulheta
    const pulso = c.pulso || 0;
    elip(x, -15, 0, 17 + pulso * 3, 13 + pulso * 2, cor.corpo); elip(x, -17, -3.5, 9, 5, cor.claro);
    poli(x, [[-21, -5.5], [-15, 0], [-21, 5.5]], cor.marca); poli(x, [[-9, -5.5], [-15, 0], [-9, 5.5]], cor.marca);
    for (const l of [-1, 1]) disco(x, -32, l * 2.2, 1.6, cor.pataClara);
    // cefalotórax, cabeça, presas e olhos
    elip(x, 5, 0, 10.5, 9, cor.corpo); elip(x, 3, -3, 5.5, 3.4, cor.claro); elip(x, 14.5, 0, 6, 6.5, cor.corpo);
    const boca = c.boca || 0;
    for (const l of [-1, 1]) poli(x, [[16, l * 2.2], [27, l * (4 + boca * 3.5)], [19, l * 0.6]], cor.osso);
    for (const [ex, ey, r] of [[17, -2.6, 2.1], [17, 2.6, 2.1], [14.5, -4.8, 1.3], [14.5, 4.8, 1.3], [12.5, -1.4, 1.1], [12.5, 1.4, 1.1]]) { disco(x, ex, ey, r + 0.8, '#5a0d1c'); disco(x, ex, ey, r, cor.olho); }
    x.restore();
  },

  efeitos(g, c, t, ctx) {
    const x = Math.round(c.x), y = Math.round(c.y), brilho = g.createRadialGradient(x, y, 4, x, y, 46);
    brilho.addColorStop(0, 'rgba(201, 107, 255, 0.2)'); brilho.addColorStop(1, 'rgba(201, 107, 255, 0)');
    g.fillStyle = brilho; g.fillRect(x - 46, y - 46, 92, 92);
    if ((c.alt || 0) > 0.05) { g.fillStyle = 'rgba(0, 0, 0, 0.35)'; g.beginPath(); g.ellipse(x, y + 4, 16, 8, 0, 0, TAU); g.fill(); } // sombra do salto
  },

  mover(c, dt, ctx, entrando) {
    const alvo = dirPara(c, ctx.S);
    c.ang += normAng(alvo - c.ang) * Math.min(1, dt * 6);
    c.pulso = Math.max(0, (c.pulso || 0) - dt * 3);
    if (c.parado) { c.velAnim += (0.15 - c.velAnim) * Math.min(1, dt * 5); return; }
    const anda = Math.max(0, Math.sin(c.tl * 2.3)) ** 0.6; // anda e para, como uma aranha
    c.velAnim += ((entrando ? 1 : 0.25 + 0.75 * anda) - c.velAnim) * Math.min(1, dt * 6);
    rodear(c, dt, ctx, { ideal: 58, vel: (50 + (c.enfurecido ? 14 : 0)) * c.velAnim, tang: 0.5, entrando });
  },

  ataques: {
    teia: {
      peso: 3, dur: 1.5, descanso: 1.1,
      iniciar(c, ctx) {
        c.parado = true; c.pulso = 1; ctx.texto(c.x, c.y - 28, 'TEIA!', '#dff4ff'); ctx.bip(420, 0.12, 'triangle', 0.05);
        const S = ctx.S, base = Math.atan2(S.ny - c.y, S.nx - c.x);
        for (let i = 0; i < 3; i++) {
          const a = base + (i - 1) * 0.55, d = 26 + i * 6;
          const px = S.nx + Math.cos(a + Math.PI) * 0 + (i - 1) * 34, py = S.ny + (i === 1 ? 0 : (i - 1) * 8);
          ctx.campo(px, py, 21, 0.95, 8, { lento: 0.42 });
          ctx.tiro(c.x, c.y, Math.atan2(py - c.y, px - c.x), 62, { cor: '#dff4ff', r: 2.2, vida: 1.1, forma: 'bola' });
        }
      },
      tick(c, dt, ctx, a) { c.boca = a.t < 0.5 ? a.t * 2 : 0.2; },
      fim(c) { c.boca = 0; },
    },
    salto: {
      peso: 3, dur: 2.2, descanso: 1.0,
      iniciar(c, ctx, a) {
        const S = ctx.S; c.parado = true; a.alvo = { x: S.nx, y: S.ny }; a.x0 = c.x; a.y0 = c.y;
        ctx.campo(a.alvo.x, a.alvo.y, 25, 1.15, 0.3); ctx.texto(c.x, c.y - 28, 'SALTO!', '#ffb3ba'); ctx.bip(200, 0.2, 'triangle', 0.05);
      },
      tick(c, dt, ctx, a) {
        c.boca = 0.8;
        if (a.t < 0.55) { c.alt = -0.12 * (a.t / 0.55); return; }
        const u = Math.min(1, (a.t - 0.55) / 0.6);
        if (u < 1) { c.x = a.x0 + (a.alvo.x - a.x0) * u; c.y = a.y0 + (a.alvo.y - a.y0) * u; c.alt = Math.sin(u * Math.PI); c.sumido = 0.1; }
        else if (!a.pousou) {
          a.pousou = true; c.alt = 0; ctx.tremor(0.45); ctx.onda(c.x, c.y, 46, '#c96bff', 170); ctx.particulas(c.x, c.y, 18, ['#c96bff', '#dff4ff', '#170a20'], 90); ctx.bip(80, 0.3, 'sawtooth', 0.06);
          if (c.enfurecido) for (let i = 0; i < 12; i++) ctx.tiro(c.x, c.y, (i * TAU) / 12, 64, { cor: '#9dff5a', r: 2.2, vida: 3.5, forma: 'bola' });
        }
      },
      fim(c) { c.alt = 0; c.boca = 0; },
    },
    filhotes: {
      peso: 2, dur: 1.3, descanso: 1.2,
      permite: (c, ctx) => ctx.S.inimigos.filter((m) => m.tipo === 'inseto').length < 9,
      iniciar(c, ctx) {
        c.parado = true; c.pulso = 1; ctx.texto(c.x, c.y - 28, 'CRIAS!', '#ffe14a'); ctx.bip(300, 0.2, 'triangle', 0.05);
        for (let i = 0; i < 4; i++) { const a = (i * TAU) / 4 + Math.random(), m = ctx.invocar('inseto', c.x + Math.cos(a) * 22, c.y + Math.sin(a) * 22); m.v = 0; }
        ctx.particulas(c.x, c.y, 14, ['#9dff5a', '#ffffff', '#2c1636'], 70);
      },
    },
    veneno: {
      peso: 2, dur: 1.5, descanso: 1.0,
      iniciar(c) { c.parado = true; },
      tick(c, dt, ctx, a) {
        c.boca = 1;
        for (const q of [0.45, 0.75, 1.05]) if (a.t >= q && !a['v' + q]) {
          a['v' + q] = true; c.pulso = 0.6; ctx.bip(260, 0.1, 'square', 0.04);
          const alvo = dirPara(c, ctx.S), n = c.enfurecido ? 7 : 5;
          for (let i = 0; i < n; i++) ctx.tiro(c.x + Math.cos(c.ang) * 20, c.y + Math.sin(c.ang) * 20, alvo + (i - (n - 1) / 2) * 0.26, 82, { cor: '#9dff5a', r: 2.2, vida: 3.5, forma: 'bola' });
        }
      },
      fim(c) { c.boca = 0; },
    },
    cerco: {
      peso: 3, dur: 1.6, fase2: true, descanso: 1.0,
      iniciar(c, ctx) {
        c.parado = true; c.pulso = 1; ctx.texto(c.x, c.y - 28, 'CERCO DE TEIAS', '#dff4ff');
        const S = ctx.S, folga = Math.random() * TAU;
        for (let i = 0; i < 9; i++) { const a = (i * TAU) / 9; if (Math.abs(normAng(a - folga)) < 0.5) continue; ctx.campo(S.nx + Math.cos(a) * 52, S.ny + Math.sin(a) * 52, 19, 1.0 + i * 0.05, 7, { lento: 0.4 }); }
      },
    },
  },
};
