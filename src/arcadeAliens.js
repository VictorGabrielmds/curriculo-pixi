// Efeitos visuais dos alienígenas do buraco negro: cada um tem uma aura própria (ver "aura" em ALIENS), eles se
// materializam de cima para baixo quando entram na luta e ganham um brilho vermelho quando ficam furiosos.
const TAU = Math.PI * 2;
const pr = (i, k) => { const v = Math.sin(i * 127.1 + k * 311.7) * 43758.5; return v - Math.floor(v); }; // "aleatório" estável por partícula

export const TEMPO_SURGIR = 1.3;

// aura de fundo + partículas, desenhadas por baixo do sprite
export function desenharAuraAlien(g, al, def, ta) {
  const { tipo, rgb } = def.aura, x = Math.round(al.x), y = Math.round(al.y);
  const furia = al.hp < al.hpMax * 0.5, desespero = al.hp < al.hpMax * 0.25;
  const raio = 25 + Math.sin(ta * 2.4) * 2 + (desespero ? 7 : furia ? 3 : 0);
  const gr = g.createRadialGradient(x, y, 3, x, y, raio + 8);
  gr.addColorStop(0, `rgba(${rgb}, 0.34)`); gr.addColorStop(1, `rgba(${rgb}, 0)`);
  g.fillStyle = gr; g.beginPath(); g.arc(x, y, raio + 8, 0, TAU); g.fill();
  const n = 11;
  for (let i = 0; i < n; i++) {
    const u = (ta * 0.45 + i / n + pr(i, 1) * 0.3) % 1;
    let px = x, py = y, tam = 1, alfa = 1 - Math.abs(u * 2 - 1), cor = rgb, cruz = false;
    if (tipo === 'bolha') { px = x + Math.sin(i * 2.1 + u * 6) * 15; py = y + 20 - u * 44; tam = i % 3 ? 1 : 2; }
    else if (tipo === 'alma') { px = x + Math.sin(i * 1.7 + u * 5) * 14; py = y + 18 - u * 46; }
    else if (tipo === 'folha') { px = x + (pr(i, 2) - 0.5) * 38 + Math.sin(u * 9 + i) * 3; py = y - 22 + u * 46; tam = 2; }
    else if (tipo === 'areia') { px = x + (pr(i, 2) - 0.5) * 30; py = y - 18 + u * 44; alfa = 0.9; }
    else if (tipo === 'esporo') { px = x + (pr(i, 2) - 0.5) * 40 + Math.sin(u * 5 + i) * 4; py = y + 10 - u * 36; tam = i % 4 ? 1 : 2; }
    else if (tipo === 'orbita') { const a = ta * 1.5 + (i * TAU) / n; px = x + Math.cos(a) * 25; py = y + Math.sin(a) * 19; alfa = 1; }
    else if (tipo === 'estrela') { const a = ta * 0.9 + (i * TAU) / n, rr = 21 + (i % 3) * 5; px = x + Math.cos(a) * rr; py = y + Math.sin(a) * rr * 0.75; alfa = 0.5 + 0.5 * Math.sin(ta * 7 + i * 2); cruz = i % 2 === 0; }
    else if (tipo === 'cristal') { px = x + (pr(i, 3) - 0.5) * 42; py = y + (pr(i, 4) - 0.5) * 42; alfa = Math.max(0, Math.sin(ta * 5 + i * 1.9)); cruz = true; }
    else if (tipo === 'glitch') { const q = Math.floor(ta * 12); px = x + (pr(i + q, 5) - 0.5) * 48; py = y + (pr(i + q, 6) - 0.5) * 48; alfa = pr(i + q, 7) > 0.4 ? 1 : 0; tam = 2 + (i % 2); cor = i % 2 ? '56, 232, 255' : '255, 59, 212'; }
    else { const q = Math.floor(ta * 9); px = x + (pr(i + q, 5) - 0.5) * 50; py = y + (pr(i + q, 6) - 0.5) * 46; alfa = pr(i + q, 7) > 0.45 ? 1 : 0; tam = 1 + (i % 3 === 0); cor = '255, 255, 255'; } // faísca
    if (alfa <= 0.02) continue;
    g.fillStyle = `rgba(${cor}, ${Math.min(1, alfa + 0.1)})`;
    px = Math.round(px); py = Math.round(py);
    if (cruz) { g.fillRect(px - 1, py, 3, 1); g.fillRect(px, py - 1, 1, 3); } else g.fillRect(px, py, tam, tam);
  }
  if (furia) { // fúria: anel vermelho que pulsa e fagulhas subindo; no desespero, mais forte
    const pulso = 0.45 + 0.3 * Math.sin(ta * (desespero ? 14 : 8));
    g.strokeStyle = `rgba(255, 59, 74, ${pulso})`; g.lineWidth = desespero ? 2 : 1;
    g.beginPath(); g.arc(x, y, raio + 2 + Math.sin(ta * 6) * 1.5, 0, TAU); g.stroke();
    const chamas = desespero ? 9 : 5;
    for (let i = 0; i < chamas; i++) {
      const u = (ta * 1.6 + i / chamas) % 1, px = x + (pr(i, 8) - 0.5) * 34, py = y + 16 - u * 38;
      g.fillStyle = `rgba(255, ${Math.round(90 + 110 * (1 - u))}, 60, ${1 - u})`; g.fillRect(Math.round(px), Math.round(py), 2, u < 0.5 ? 3 : 2);
    }
  }
}

// o alienígena aparece de cima para baixo, com uma linha de varredura na borda; depois da aparição desenha normal
export function desenharComSurgir(g, spr, px, py, al) {
  if (!(al.surgir > 0)) { g.drawImage(spr, px, py); return; }
  const u = 1 - al.surgir / TEMPO_SURGIR, h = Math.max(1, Math.round(spr.height * u));
  g.drawImage(spr, 0, 0, spr.width, h, px, py, spr.width, h);
  g.fillStyle = '#ffffff'; g.fillRect(px - 3, py + h, spr.width + 6, 1);
  g.fillStyle = 'rgba(255, 255, 255, 0.35)'; g.fillRect(px - 3, py + h + 1, spr.width + 6, 2);
}
