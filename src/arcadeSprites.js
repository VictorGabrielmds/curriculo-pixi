// Sprites do jogo de nave desenhados em código (pixel art): monstros em várias "skins" (uma por fase),
// chefão, alienígena, rochas espaciais, itens e o buraco negro animado.
import { novoSprite, silhuetaBranca } from './pixelArt.js';

const C = '#0b1026'; // cor do contorno

// Cada variante troca cores e acessórios dos monstros: chifres, espinhos, três olhos...
export const VARIANTES = [
  { nome: 'Original', olho: '#ffffff', slime: ['#5be37a', '#3fb85b'], morcego: ['#7c3fd6', '#a56bff'], ogro: ['#e0483a', '#c23326'], fantasma: '#c9d8ff', atirador: ['#ffb02e', '#c87a10'], inseto: ['#8a6a3a', '#5a4220'], chefe: ['#4a5a8a', '#8a9ad0'] },
  { nome: 'Gelo', olho: '#ffffff', slime: ['#5bd6ff', '#2f9acb'], morcego: ['#3f7cd6', '#6ba5ff'], ogro: ['#3a8ae0', '#2a62b0'], fantasma: '#e8f6ff', atirador: ['#9be0ff', '#5a9ac0'], inseto: ['#5a8aa8', '#3a6280'], chifres: true, chefe: ['#3a6aa8', '#8bd3ff'] },
  { nome: 'Fogo', olho: '#ffff66', slime: ['#ff8a3a', '#c4551f'], morcego: ['#d6403f', '#ff6b5a'], ogro: ['#ff5a2a', '#c43318'], fantasma: '#ffd8b0', atirador: ['#ff3b4a', '#a01f2a'], inseto: ['#c43318', '#7a1f0f'], chifres: true, espinhos: true, chefe: ['#a8402a', '#ff8a3a'] },
  { nome: 'Tóxico', olho: '#ff66ff', slime: ['#b24bff', '#7a2fc4'], morcego: ['#3fd66b', '#6bff95'], ogro: ['#7a2fc4', '#5a1f94'], fantasma: '#d8ffc9', atirador: ['#7dff3a', '#3a9a1f'], inseto: ['#4a8a2f', '#2f5a1f'], tresOlhos: true, chefe: ['#5a2f94', '#7dff3a'] },
  { nome: 'Ouro', olho: '#ff3b4a', slime: ['#ffd23f', '#c9971a'], morcego: ['#c9971a', '#ffe27a'], ogro: ['#d9a21a', '#a8760f'], fantasma: '#fff4c9', atirador: ['#fff08a', '#c9b03a'], inseto: ['#a8760f', '#6a4a0a'], chifres: true, chefe: ['#a8760f', '#ffe27a'] },
  { nome: 'Sombrio', olho: '#ff2a2a', slime: ['#4a4a5a', '#2a2a38'], morcego: ['#2a2a38', '#4a4a5a'], ogro: ['#3a3a48', '#1f1f2a'], fantasma: '#9a9ab0', atirador: ['#6a6a80', '#3a3a4a'], inseto: ['#2a2a38', '#14141c'], chifres: true, espinhos: true, tresOlhos: true, chefe: ['#2a2a38', '#ff2a2a'] },
];

const com = (quadros) => ({ quadros, brancos: quadros.map(silhuetaBranca) });

// ---------- monstros de uma variante ----------
export function criarMonstros(v) {
  const V = VARIANTES[v % VARIANTES.length];
  const chifres = (s, x1, x2, y) => {
    s.poligono([[x1, y + 3], [x1 + 1, y - 1], [x1 + 3, y + 3]], '#eef1f5');
    s.poligono([[x2, y + 3], [x2 + 2, y - 1], [x2 + 3, y + 3]], '#eef1f5');
  };

  const slime = com([0, 1].map((f) => {
    const s = novoSprite(16, 16);
    const y = f ? 10 : 9.5;
    s.elipse(8, y, f ? 6.5 : 6, f ? 3.6 : 4.3, V.slime[0]);
    s.elipse(8, f ? 11 : 10.8, f ? 5.6 : 5, 2, V.slime[1]);
    if (V.espinhos) for (const x of [4, 6, 8, 10, 12]) s.pixel(x, f ? 7 : 6, V.slime[1]);
    if (V.chifres) chifres(s, 4, 10, f ? 3 : 2);
    s.retangulo(4, f ? 8 : 7, 2, 2, V.olho); s.retangulo(9, f ? 8 : 7, 2, 2, V.olho);
    s.pixel(5, f ? 9 : 8, '#1b1020'); s.pixel(10, f ? 9 : 8, '#1b1020');
    if (V.tresOlhos) { s.retangulo(7, f ? 6 : 5, 2, 2, V.olho); s.pixel(8, f ? 7 : 6, '#1b1020'); }
    return s.contorno(C).c;
  }));

  const morcego = com([0, 1].map((f) => {
    const s = novoSprite(18, 16);
    const asa = f ? [[8, 9], [1, 14], [4, 8]] : [[8, 8], [1, 4], [4, 10]];
    s.poligono(asa, V.morcego[0]);
    s.poligono(asa.map(([x, y]) => [17 - x, y]), V.morcego[0]);
    s.disco(8, 9, 3, V.morcego[1]);
    s.pixel(7, 8, V.olho); s.pixel(10, 8, V.olho);
    s.pixel(6, 5, V.morcego[1]); s.pixel(11, 5, V.morcego[1]);
    if (V.chifres) { s.poligono([[6, 7], [5, 3], [8, 7]], '#eef1f5'); s.poligono([[11, 7], [12, 3], [9, 7]], '#eef1f5'); }
    if (V.espinhos) for (const x of [6, 8, 10]) s.pixel(x, 5, V.morcego[0]);
    return s.contorno(C).c;
  }));

  const ogro = com([0, 1].map((f) => {
    const s = novoSprite(20, 20);
    s.disco(10, 12 + f, 7, V.ogro[0]);
    s.disco(10, 13 + f, 5, V.ogro[1]);
    const ch = V.chifres ? '#ffffff' : '#cfd6df';
    s.poligono([[3, 7 + f], [5, 1 + f], [7, 7 + f]], ch); s.poligono([[13, 7 + f], [15, 1 + f], [17, 7 + f]], ch);
    if (V.espinhos) for (const x of [7, 9, 11, 13]) s.pixel(x, 5 + f, V.ogro[1]);
    s.retangulo(5, 10 + f, 4, 2, V.olho === '#ffffff' ? '#ffe14a' : V.olho); s.retangulo(11, 10 + f, 4, 2, V.olho === '#ffffff' ? '#ffe14a' : V.olho);
    s.pixel(8, 11 + f, '#1b1020'); s.pixel(11, 11 + f, '#1b1020');
    if (V.tresOlhos) { s.retangulo(9, 8 + f, 2, 2, V.olho); s.pixel(10, 9 + f, '#1b1020'); }
    s.retangulo(7, 15 + f, 6, 2, '#1b1020'); s.pixel(8, 15 + f, '#ffffff'); s.pixel(11, 15 + f, '#ffffff');
    return s.contorno(C).c;
  }));

  const fantasma = com([0, 1].map((f) => {
    const s = novoSprite(14, 17);
    s.disco(7, 7, 5, V.fantasma);
    s.retangulo(2, 7, 11, 7, V.fantasma);
    for (let x = 2; x < 13; x += 2) if (((x - 2) / 2 + f) % 2 === 0) s.retangulo(x, 14, 2, 1, V.fantasma);
    if (V.chifres) chifres(s, 3, 8, 1);
    s.retangulo(4, 5, 2, 3, '#1b1020'); s.retangulo(8, 5, 2, 3, '#1b1020');
    s.pixel(4, 5, V.olho); s.pixel(8, 5, V.olho);
    s.retangulo(6, 10, 3, 2, '#1b1020');
    if (V.tresOlhos) s.retangulo(6, 3, 2, 2, '#1b1020');
    return s.contorno(C).c;
  }));

  const atirador = com([0, 1].map((f) => {
    const s = novoSprite(16, 17);
    s.pixel(8, 0, f ? '#ff3b4a' : '#ffd23f'); s.retangulo(8, 1, 1, 2, V.atirador[1]);
    s.disco(8, 8, 5, V.atirador[0]);
    s.disco(8, 8, 3, V.atirador[1]);
    s.retangulo(5, 6, 6, 5, '#ffffff'); s.retangulo(7, 7, 3, 3, '#ff3b4a'); s.pixel(8, 8, '#1b1020');
    s.retangulo(6, 13, 4, 3, '#6a6a80'); s.retangulo(7, 15, 2, 1, '#cfd6e0');
    if (V.chifres) chifres(s, 3, 9, 1);
    return s.contorno(C).c;
  }));

  const inseto = com([0, 1].map((f) => {
    const s = novoSprite(12, 10);
    s.elipse(6, 5.5, 4, 2.8, V.inseto[0]);
    s.disco(6, 3, 2, V.inseto[1]);
    s.pixel(5, 2, V.olho); s.pixel(7, 2, V.olho);
    const pernas = f ? [[1, 7], [3, 8], [9, 8], [11, 7]] : [[1, 8], [3, 7], [9, 7], [11, 8]];
    for (const [x, y] of pernas) s.pixel(x, y, V.inseto[1]);
    if (V.chifres) { s.pixel(4, 0, '#eef1f5'); s.pixel(8, 0, '#eef1f5'); }
    return s.contorno(C).c;
  }));

  return { slime, morcego, ogro, fantasma, atirador, inseto };
}

// ---------- chefão: uma nave inimiga enorme ----------
export function criarChefe(v) {
  const V = VARIANTES[v % VARIANTES.length];
  return com([0, 1].map((f) => {
    const s = novoSprite(56, 38);
    s.poligono([[28, 2], [44, 10], [54, 24], [46, 34], [10, 34], [2, 24], [12, 10]], V.chefe[0]);
    s.poligono([[28, 6], [40, 12], [28, 20], [16, 12]], V.chefe[1]);
    s.poligono([[2, 24], [12, 10], [14, 26]], '#2a2a38'); s.poligono([[54, 24], [44, 10], [42, 26]], '#2a2a38');
    s.disco(28, 14, 6, '#8bd3ff'); s.disco(28, 14, 3, '#ffffff'); s.pixel(27, 13, '#8bd3ff');
    s.retangulo(7, 26, 7, 9, '#3a3a48'); s.retangulo(42, 26, 7, 9, '#3a3a48'); s.retangulo(25, 28, 6, 6, '#3a3a48');
    s.retangulo(8, 34, 5, 2, f ? '#ffd23f' : '#ff7a3a'); s.retangulo(43, 34, 5, 2, f ? '#ffd23f' : '#ff7a3a'); s.retangulo(26, 34, 4, 2, f ? '#ffd23f' : '#ff7a3a');
    for (const x of [14, 22, 34, 42]) s.pixel(x, 22, f ? '#ff3b4a' : '#6a2a2a');
    return s.contorno(C).c;
  }));
}

// ---------- alienígena do buraco negro ----------
export function criarAlien() {
  return com([0, 1].map((f) => {
    const s = novoSprite(34, 40);
    s.elipse(17, 30 + f, 8, 8, '#4a2f94'); // manto
    s.elipse(17, 31 + f, 6, 6, '#6a4fc4');
    s.elipse(17, 14 + f, 12, 13, '#7ad8a0'); // cabeça grande
    s.elipse(17, 17 + f, 10, 9, '#4aa878');
    s.elipse(17, 13 + f, 10, 10, '#7ad8a0');
    s.poligono([[6, 12 + f], [14, 15 + f], [14, 20 + f], [8, 19 + f]], '#0b1026'); // olhos grandes
    s.poligono([[28, 12 + f], [20, 15 + f], [20, 20 + f], [26, 19 + f]], '#0b1026');
    s.pixel(9, 14 + f, '#ffffff'); s.pixel(10, 14 + f, '#ffffff'); s.pixel(24, 14 + f, '#ffffff'); s.pixel(25, 14 + f, '#ffffff');
    s.retangulo(15, 23 + f, 4, 1, '#2a6a4a');
    s.pixel(17, 1 + f, '#ff3bd4'); s.retangulo(17, 2 + f, 1, 3, '#7ad8a0'); // antena
    s.disco(4, 30 + f, 2, f ? '#ff3bd4' : '#ffd23f'); s.disco(30, 30 + f, 2, f ? '#ffd23f' : '#ff3bd4'); // mãos brilhantes
    return s.contorno(C).c;
  }));
}

// ---------- rochas espaciais (3 tamanhos, 3 níveis de rachadura) ----------
function hashN(a, b) { let x = (Math.imul(a, 374761393) ^ Math.imul(b, 668265263)) | 0; x = Math.imul(x ^ (x >>> 13), 1274126177); return ((x ^ (x >>> 16)) >>> 0) / 4294967296; }
export function criarRochas() {
  return [8, 10, 13].map((r, i) => {
    const W = r * 2 + 6, cx = W / 2, cy = W / 2;
    const pts = Array.from({ length: 11 }, (_, k) => {
      const ang = (k / 11) * Math.PI * 2, rad = r * (0.8 + hashN(i * 7 + 1, k) * 0.35);
      return [cx + Math.cos(ang) * rad, cy + Math.sin(ang) * rad];
    });
    const encolhe = (f, dx, dy) => pts.map(([x, y]) => [cx + (x - cx) * f + dx, cy + (y - cy) * f + dy]);
    return {
      r,
      quadros: [0, 1, 2].map((rach) => {
        const s = novoSprite(W, W);
        s.poligono(pts, '#5a606c');
        s.poligono(encolhe(0.88, -0.7, -0.7), '#7a808d');
        s.poligono(encolhe(0.6, -1.6, -1.6), '#9aa0ad');
        for (let k = 0; k < 3 + i; k++) s.disco(Math.round(cx + (hashN(i, k + 20) - 0.5) * r * 1.2), Math.round(cy + (hashN(i, k + 40) - 0.5) * r * 1.2), 1, '#4a4f5a');
        if (rach >= 1) { s.linha(cx - r * 0.2, cy - r * 0.8, cx + r * 0.1, cy, '#23262e'); s.linha(cx + r * 0.1, cy, cx - r * 0.3, cy + r * 0.7, '#23262e'); }
        if (rach >= 2) { s.linha(cx + r * 0.1, cy, cx + r * 0.85, cy - r * 0.2, '#23262e'); s.linha(cx - r * 0.5, cy + r * 0.2, cx - r * 0.9, cy - r * 0.1, '#23262e'); }
        return s.contorno(C).c;
      }),
    };
  });
}

// ---------- itens que as rochas soltam (12x12) ----------
export function criarItens() {
  const icone = (fn) => { const s = novoSprite(12, 12); fn(s); return s.contorno(C).c; };
  const estrela = (n, r1, r2) => Array.from({ length: n * 2 }, (_, k) => { const a = (Math.PI / n) * k - Math.PI / 2, r = k % 2 ? r2 : r1; return [6 + Math.cos(a) * r, 6 + Math.sin(a) * r]; });
  return {
    ima: icone((s) => { s.retangulo(1, 1, 3, 8, '#e63946'); s.retangulo(8, 1, 3, 8, '#4a7cff'); s.retangulo(1, 8, 10, 3, '#c9cdd8'); s.retangulo(1, 1, 3, 2, '#ffffff'); s.retangulo(8, 1, 3, 2, '#ffffff'); }),
    explosao: icone((s) => { s.poligono(estrela(8, 5.6, 2.8), '#ffd23f'); s.poligono(estrela(8, 3.8, 2), '#ff7a3a'); s.disco(6, 6, 1, '#ffffff'); }),
    coracao: icone((s) => { s.disco(4, 4, 2, '#ff3b4a'); s.disco(8, 4, 2, '#ff3b4a'); s.poligono([[1.5, 5], [10.5, 5], [6, 10.5]], '#ff3b4a'); s.pixel(3, 3, '#ffb3ba'); }),
    escudo: icone((s) => { s.poligono([[6, 0.5], [11, 2.5], [10, 8], [6, 11.5], [2, 8], [1, 2.5]], '#4aa8ff'); s.poligono([[6, 2], [9, 3.5], [8.5, 7.5], [6, 9.5], [3.5, 7.5], [3, 3.5]], '#8bd3ff'); }),
    turbo: icone((s) => { s.poligono([[7, 0.5], [2.5, 6.5], [5.5, 6.5], [4.5, 11.5], [9.5, 5], [6.5, 5]], '#ffe14a'); }),
    moedaEsp: icone((s) => { s.disco(6, 6, 5, '#38c8ff'); s.disco(6, 6, 4, '#ffd23f'); s.disco(6, 6, 2, '#c9971a'); s.pixel(5, 5, '#ffffff'); }),
    // estrelas de poder: cada cor dá um bônus por um tempo
    ...Object.fromEntries([['estrelaVermelha', '#ff3b4a', '#ff9aa6'], ['estrelaAmarela', '#ffd23f', '#fff4a8'], ['estrelaAzul', '#3f8cff', '#9cc8ff'], ['estrelaRoxa', '#a56bff', '#d9c2ff']]
      .map(([nome, a, b]) => [nome, icone((s) => { s.poligono(estrela(5, 5.6, 2.4), a); s.poligono(estrela(5, 3.4, 1.5), b); s.pixel(6, 6, '#ffffff'); })])),
  };
}

// ---------- buraco negro: disco de acreção em espiral que gira ----------
export function desenharBuracoNegro(g, x, y, t, alfa = 1, R = 22) {
  g.globalAlpha = alfa;
  const cx = Math.round(x), cy = Math.round(y);
  for (let j = -R; j <= R; j++) {
    for (let i = -R; i <= R; i++) {
      const d = Math.hypot(i, j);
      if (d > R) continue;
      let cor;
      if (d < 7) cor = '#030308';
      else {
        const esp = Math.sin(Math.atan2(j, i) * 3 - d * 0.5 + t * 3.2);
        if (d > 11 && esp < -0.25) continue; // braços da espiral deixam falhas na parte de fora
        cor = d < 9 ? '#ffd23f' : d < 12 ? '#ff8a3a' : d < 16 ? '#c43fff' : d < 19.5 ? '#6a2fd0' : '#2a1470';
        if (esp > 0.7 && d < 17) cor = '#ffffff';
      }
      g.fillStyle = cor;
      g.fillRect(cx + i, cy + j, 1, 1);
    }
  }
  g.globalAlpha = 1;
}
