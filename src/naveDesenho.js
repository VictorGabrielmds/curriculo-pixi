// Desenho em pixel art da nave montada na garagem: o mesmo código gera o sprite do jogo (24x24), a vista ampliada da bancada
// e os ícones das peças. A nave aponta para cima (proa em cima); cada peça é desenhada em volta do encaixe onde está.
import { novoSprite, silhuetaBranca } from './pixelArt.js';
import { PINTURAS, encaixesDoProjeto, normalizarProjeto } from './naveModular.js';

export const TAM_NAVE = 24; // lado do sprite, em pixels
export const PALETAS = {
  padrao: { aleta: '#ff7a59', metal: '#8b93a8', metal2: '#c9cdd8', metalEscuro: '#5a6176', casco: '#4aa8ff', nucleo: '#8bd3ff', nucleo2: '#7dff9a', brilho: '#ffffff', alerta: '#ff3b4a', contorno: '#0b1026', realce: '#8bd3ff', ouro: '#ffd23f' },
  yas: { aleta: '#b7683f', metal: '#b9a58b', metal2: '#e8d5b8', metalEscuro: '#76513d', casco: '#496044', nucleo: '#f2d7ae', nucleo2: '#e5b85c', brilho: '#fff1d7', alerta: '#d88b55', contorno: '#241b17', realce: '#d8b68e', ouro: '#ffd23f' },
  fer: { aleta: '#6c5cff', metal: '#91a0c8', metal2: '#b8c8ef', metalEscuro: '#354582', casco: '#172b59', nucleo: '#55e2e0', nucleo2: '#8b6cff', brilho: '#d6fbff', alerta: '#4fe7ff', contorno: '#050817', realce: '#55e2e0', ouro: '#ffd23f' },
};
export const paletaDoTema = (tema) => PALETAS[tema] || PALETAS.padrao;

// cores das chamas de cada motor: miolo, meio e borda
export const CHAMAS = {
  quimico: ['#fff0a0', '#ffc83d', '#ff7a3a'], ionico: ['#ffffff', '#d6fbff', '#55e2e0'],
  plasma: ['#ffffff', '#d6a4ff', '#6c5cff'], vetorial: ['#ffffff', '#b8ffd0', '#7dff9a'],
  magneto: ['#ffffff', '#bfe8ff', '#38c8ff'], antimateria: ['#ffffff', '#ffb8f0', '#ff3bd4'],
};
export const CORES_REATOR = {
  capacitor: ['#8bd3ff', '#2f8cff'], fusao: ['#ffc14a', '#ff5a2a'], quantico: ['#d6a4ff', '#6c5cff'], solar: ['#fff3a0', '#e5b85c'],
  tokamak: ['#7dff9a', '#1f6b4a'], estelar: ['#ffffff', '#7da6ff'],
};
export const COR_TIRO = { rail: '#38c8ff', bobina: '#d6a4ff', lanca: '#ff6a2a', singular: '#a56bff' }; // cor do tiro no teste da bancada (o resto é amarelo)

// ---------- o casco de cada chassi ----------
function desenharCasco(s, chassiId, P) {
  const r = (x, y, w, h, c) => s.retangulo(x, y, w, h, c);
  if (chassiId === 'interceptor') {
    s.poligono([[9, 9], [2, 20], [9, 17]], P.aleta); s.poligono([[15, 9], [22, 20], [15, 17]], P.aleta);
    s.poligono([[9, 11], [4, 17], [9, 16]], P.metalEscuro); s.poligono([[15, 11], [20, 17], [15, 16]], P.metalEscuro);
    s.elipse(12, 12.5, 4.2, 8, P.casco);
    r(11, 2, 2, 4, P.metal2); s.pixel(11, 2, P.brilho);
  } else if (chassiId === 'blindado') {
    r(11, 17, 2, 4, P.aleta);
    s.disco(12, 12, 6, P.casco);
    for (const [x, y, w, h] of [[3, 5, 4, 6], [17, 5, 4, 6], [3, 13, 4, 6], [17, 13, 4, 6]]) { r(x, y, w, h, P.metal); r(x + 1, y + 1, w - 2, h - 2, P.metalEscuro); r(x, y, w, 1, P.metal2); }
    r(7, 11, 10, 2, P.metalEscuro);
  } else if (chassiId === 'modular') {
    s.poligono([[12, 5.5], [18.5, 9], [18.5, 15.5], [12, 19], [5.5, 15.5], [5.5, 9]], P.casco);
    for (const [x, y] of [[4, 8], [20, 8], [4, 16], [20, 16]]) { s.disco(x, y, 2, P.metal); s.pixel(x, y, P.nucleo2); }
    for (const [x0, y0, x1, y1] of [[6, 9, 5, 8], [18, 9, 19, 8], [6, 15, 5, 16], [18, 15, 19, 16]]) s.linha(x0, y0, x1, y1, P.metalEscuro);
    r(6, 12, 12, 1, P.metalEscuro);
  } else if (chassiId === 'aurora') { // fuselagem longa de cristal com asas em lâmina
    s.poligono([[8, 9], [1, 15], [3, 20], [8, 17]], P.aleta); s.poligono([[16, 9], [23, 15], [21, 20], [16, 17]], P.aleta);
    s.poligono([[8, 11], [3, 15], [8, 15]], P.metalEscuro); s.poligono([[16, 11], [21, 15], [16, 15]], P.metalEscuro);
    s.poligono([[12, 1], [16, 6], [17, 16], [14, 22], [10, 22], [7, 16], [8, 6]], P.casco);
    r(11, 3, 2, 4, P.nucleo); s.pixel(11, 3, P.brilho);
    for (const [x, y] of [[2, 16], [22, 16], [3, 19], [21, 19]]) s.pixel(x, y, P.nucleo2);
    r(9, 14, 6, 1, P.metalEscuro);
  } else if (chassiId === 'titan') { // casco largo e blindado, com ombreiras
    s.poligono([[12, 1], [19, 3], [22, 9], [22, 18], [18, 22], [6, 22], [2, 18], [2, 9], [5, 3]], P.casco);
    for (const [x, y, w, h] of [[2, 6, 4, 11], [18, 6, 4, 11]]) { r(x, y, w, h, P.metal); r(x + 1, y + 1, w - 2, h - 2, P.metalEscuro); r(x, y, w, 1, P.metal2); }
    r(8, 2, 8, 2, P.metal2); r(7, 17, 10, 1, P.metalEscuro); r(11, 20, 2, 3, P.aleta);
    for (const [x, y] of [[4, 4], [19, 4], [4, 20], [19, 20]]) s.pixel(x, y, P.ouro);
  } else { // explorador
    r(5, 11, 3, 2, P.aleta); r(16, 11, 3, 2, P.aleta); r(11, 5, 2, 3, P.aleta); r(11, 16, 2, 3, P.aleta);
    s.disco(12, 12, 5, P.casco);
  }
}

// ---------- as peças, desenhadas em volta do ponto (cx, cy) do encaixe ----------
function desenharPeca(s, peca, cx, cy, P) {
  const r = (x, y, w, h, c) => s.retangulo(cx + x, cy + y, w, h, c);
  const p = (x, y, c) => s.pixel(cx + x, cy + y, c);
  const d = (x, y, raio, c) => s.disco(cx + x, cy + y, raio, c);
  switch (peca.id) {
    // armas: a base fica no encaixe e o cano sai para cima
    case 'canhao': r(-2, -1, 4, 3, P.metal); r(-1, -4, 2, 3, P.metal2); r(-1, -5, 2, 1, '#ffe14a'); break;
    case 'duplo': r(-3, -1, 6, 3, P.metal); r(-3, -4, 2, 3, P.metal2); r(1, -4, 2, 3, P.metal2); r(-3, -5, 2, 1, '#ffe14a'); r(1, -5, 2, 1, '#ffe14a'); break;
    case 'rail': r(-2, -1, 4, 3, P.metal); r(-2, -7, 1, 6, P.metal2); r(1, -7, 1, 6, P.metal2); r(-1, -7, 2, 6, '#38c8ff'); p(-2, -8, P.brilho); p(1, -8, P.brilho); break;
    case 'dispersor': r(-4, -1, 8, 3, P.metal); r(-4, -3, 1, 2, P.metal2); r(-1, -4, 2, 3, P.metal2); r(3, -3, 1, 2, P.metal2); p(-4, -4, '#ffe14a'); r(-1, -5, 2, 1, '#ffe14a'); p(3, -4, '#ffe14a'); break;
    case 'bobina': r(-2, -1, 4, 3, P.metal); r(-1, -4, 2, 3, '#a56bff'); p(-1, -3, '#e6d2ff'); p(0, -2, '#e6d2ff'); d(0, -6, 1, '#e6d2ff'); p(0, -7, '#ffffff'); break;
    case 'gatling': r(-3, -1, 6, 3, P.metal); r(-2, -6, 5, 5, P.metalEscuro); for (const x of [-2, 0, 2]) { r(x, -6, 1, 5, P.metal2); p(x, -7, '#ffe14a'); } break;
    case 'lanca': r(-2, -1, 4, 3, P.metal); r(-2, -6, 1, 5, P.metal2); r(1, -6, 1, 5, P.metal2); r(-1, -6, 2, 5, '#ff6a2a'); p(-1, -7, '#ffd23f'); p(0, -7, '#ffffff'); p(1, -7, '#ffd23f'); break;
    case 'singular': r(-3, -1, 6, 3, P.metal); r(-1, -9, 2, 3, P.metal2); d(0, -5, 3, '#6c5cff'); d(0, -5, 2, '#0b0820'); p(0, -5, '#ffffff'); p(-3, -5, '#d6a4ff'); p(3, -5, '#d6a4ff'); p(0, -10, '#d6a4ff'); break;
    // motores: o bloco fica no encaixe e a chama sai para baixo (desenhada à parte, animada)
    case 'quimico': r(-2, -2, 4, 4, P.metal); r(-2, -2, 4, 1, P.metal2); r(-1, 2, 2, 1, '#2d3348'); p(0, 1, '#ffa23a'); break;
    case 'ionico': r(-2, -2, 4, 3, P.metal); r(-2, 1, 4, 1, '#55e2e0'); r(-1, 2, 2, 1, '#d6fbff'); break;
    case 'plasma': d(0, 0, 2, '#6c5cff'); d(0, 0, 1, '#d6fbff'); r(-2, 2, 4, 1, '#a56bff'); break;
    case 'vetorial': r(-3, -1, 1, 3, P.metal); r(-1, -2, 2, 4, P.metal2); r(2, -1, 1, 3, P.metal); p(-3, 2, '#7dff9a'); r(-1, 2, 2, 1, '#7dff9a'); p(2, 2, '#7dff9a'); break;
    case 'magneto': r(-3, -2, 6, 3, P.metal); r(-1, -1, 2, 3, P.metal2); r(-3, 1, 2, 1, '#38c8ff'); r(1, 1, 2, 1, '#38c8ff'); p(0, 2, '#d6fbff'); break;
    case 'antimateria': d(0, 0, 2, '#ff3bd4'); d(0, 0, 1, '#ffe6fb'); r(-3, 2, 6, 1, '#ff3bd4'); p(-3, -1, P.metal2); p(3, -1, P.metal2); break;
    // reatores: o núcleo brilha no centro do casco
    case 'capacitor': d(0, 0, 3, '#2f6fb0'); d(0, 0, 2, CORES_REATOR.capacitor[0]); p(-3, 0, P.metalEscuro); p(3, 0, P.metalEscuro); p(0, 0, P.brilho); break;
    case 'fusao': d(0, 0, 3, '#ff5a2a'); d(0, 0, 2, '#ffc14a'); for (const [x, y] of [[-3, -3], [3, -3], [-3, 3], [3, 3]]) p(x, y, '#ffd23f'); p(0, 0, P.brilho); break;
    case 'quantico': d(0, 0, 3, '#6c5cff'); d(0, 0, 2, '#d6a4ff'); for (const [x, y] of [[0, -4], [4, 0], [0, 4], [-4, 0]]) p(x, y, '#e6d2ff'); p(0, 0, P.brilho); break;
    case 'tokamak': d(0, 0, 4, '#1f6b4a'); d(0, 0, 2, '#0b0820'); for (const [x, y] of [[-3, 0], [3, 0], [0, -3], [0, 3], [-2, -2], [2, -2], [-2, 2], [2, 2]]) p(x, y, '#7dff9a'); p(0, 0, P.brilho); break;
    case 'estelar': d(0, 0, 4, '#7da6ff'); d(0, 0, 3, '#cfe7ff'); d(0, 0, 2, '#ffffff'); for (const [x, y] of [[0, -5], [5, 0], [0, 5], [-5, 0]]) p(x, y, '#cfe7ff'); for (const [x, y] of [[-4, -4], [4, -4], [-4, 4], [4, 4]]) p(x, y, '#7da6ff'); break;
    case 'solar': r(-7, -1, 3, 3, '#3755a8'); r(5, -1, 3, 3, '#3755a8'); p(-6, 0, '#7da6ff'); p(6, 0, '#7da6ff'); d(0, 0, 3, '#e5b85c'); d(0, 0, 2, '#fff3a0'); p(0, 0, P.brilho); break;
    // placas eletrônicas: chips com LEDs
    case 'analogica': r(-1, -1, 3, 3, '#3b4a45'); p(0, 0, '#8bd3ff'); break;
    case 'mira': r(-1, -1, 3, 3, '#1f6b4a'); p(1, -1, '#ff3b4a'); p(0, 0, '#ff3b4a'); p(-1, 1, P.metal2); break;
    case 'coletor': r(-1, -1, 3, 3, '#1f6b4a'); r(-1, -2, 3, 1, '#55e2e0'); p(0, 0, '#d6fbff'); break;
    case 'overclock': r(-1, -1, 3, 3, '#1f6b4a'); p(-1, -1, '#7dff9a'); p(1, 1, '#7dff9a'); p(0, 0, '#ff7a3a'); p(1, -1, '#ffd23f'); break;
    case 'giroscopio': d(0, 0, 2, P.metal2); p(0, 0, '#38c8ff'); p(-2, 0, P.metalEscuro); p(2, 0, P.metalEscuro); break;
    case 'tatica': r(-1, -1, 3, 3, '#1f4a6b'); p(1, -1, '#ffd23f'); p(-1, 1, '#ffd23f'); p(0, 0, '#38c8ff'); break;
    case 'quantica': r(-1, -1, 3, 3, '#2a1a6b'); p(-1, -1, '#a56bff'); p(1, 1, '#a56bff'); p(1, -1, '#38e8ff'); p(-1, 1, '#38e8ff'); p(0, 0, '#e6d2ff'); break;
    // módulos: caixas encaixadas nas laterais
    case 'dissipador': r(-2, -2, 4, 4, P.metal2); r(-1, -2, 1, 4, '#8bd3ff'); r(1, -2, 1, 4, '#8bd3ff'); break;
    case 'barreira': d(0, 0, 2, '#2f8cff'); d(0, 0, 1, '#d6fbff'); p(-3, 0, '#38c8ff'); p(3, 0, '#38c8ff'); p(0, -3, '#38c8ff'); p(0, 3, '#38c8ff'); break;
    case 'blindagem': r(-2, -3, 4, 6, P.metalEscuro); r(-2, -3, 4, 1, P.metal2); p(-1, -1, P.metal2); p(0, 1, P.metal2); break;
    case 'bateria': r(-2, -2, 4, 4, '#10131f'); r(-1, -1, 1, 2, '#7dff9a'); r(1, -1, 1, 2, '#7dff9a'); p(0, -2, '#ffd23f'); break;
    case 'ima': r(-2, -2, 1, 4, '#ff3b4a'); r(1, -2, 1, 4, '#3f8cff'); r(-2, 1, 4, 1, P.metal2); break;
    case 'criogenico': r(-2, -3, 4, 6, '#8bd3ff'); r(-1, -3, 2, 6, '#d6fbff'); p(-2, -3, P.metal2); r(-2, 0, 4, 1, '#38c8ff'); break;
    case 'supercap': r(-3, -2, 6, 4, '#10131f'); r(-3, -2, 6, 1, '#ffd23f'); p(-2, 0, '#7dff9a'); p(0, 0, '#7dff9a'); p(2, 0, '#7dff9a'); break;
    case 'autorreparo': r(-2, -2, 4, 4, '#10131f'); r(-1, 0, 3, 1, '#7dff9a'); r(0, -1, 1, 3, '#7dff9a'); p(-2, -2, P.metal2); p(1, 1, P.metal2); break;
    case 'fase': d(0, 0, 3, '#a56bff'); d(0, 0, 2, '#0b0820'); d(0, 0, 1, '#e6d2ff'); p(-4, 0, '#38c8ff'); p(3, 0, '#38c8ff'); break;
    default: break;
  }
}

// motores: posições e cores das chamas (em pixels do sprite)
export function chamasDaNave(projeto) {
  return encaixesDoProjeto(projeto).filter((e) => e.tipo === 'motor' && e.peca).map((e) => ({ x: e.x, y: e.y + 3, tipo: e.peca.id, cores: CHAMAS[e.peca.id] || CHAMAS.quimico }));
}

// cada peça é desenhada numa camada própria com contorno escuro, para se destacar do casco mesmo em poucos pixels
function camada(s, desenhar, contorno) {
  const t = novoSprite(TAM_NAVE, TAM_NAVE);
  desenhar(t);
  t.contorno(contorno);
  s.c.getContext('2d').drawImage(t.c, 0, 0);
}

// nave do jogo (24x24): o chassi e as peças instaladas, mais os detalhes das melhorias da oficina (t) e do tema da rota
export function gerarNave(t, tema = 'padrao', projeto) {
  const proj = normalizarProjeto(projeto), P = { ...paletaDoTema(tema) }, s = novoSprite(TAM_NAVE, TAM_NAVE);
  const pintura = PINTURAS[proj.pintura];
  if (pintura?.casco) { P.casco = pintura.casco; P.aleta = pintura.aleta; }
  const temaYas = tema === 'yas', temaFer = tema === 'fer';
  desenharCasco(s, proj.chassi, P);
  const encaixes = encaixesDoProjeto(proj);
  for (const e of encaixes) if (e.peca && (e.tipo === 'motor' || e.tipo === 'modulo' || e.tipo === 'placa')) camada(s, (t2) => desenharPeca(t2, e.peca, e.x, e.y, P), P.contorno);
  const reator = encaixes.find((e) => e.tipo === 'reator');
  if (reator?.peca) {
    const cor = t.nucleo >= 4 && reator.peca.id === 'capacitor' ? '#ffc14a' : null;
    camada(s, (t2) => desenharPeca(t2, reator.peca, reator.x, reator.y, P), P.contorno);
    if (cor) s.disco(reator.x, reator.y, 2, cor);
  }
  if (temaYas) { for (const [x, y] of [[10, 10], [14, 10], [10, 14], [14, 14]]) s.pixel(x, y, '#91a56b'); s.pixel(12, 9, '#e5b85c'); }
  if (temaFer) { for (const [x, y] of [[9, 10], [9, 11], [9, 12], [10, 12], [11, 12]]) s.pixel(x, y, '#9daaff'); s.pixel(11, 8, '#55e2e0'); s.pixel(12, 7, '#d6fbff'); }
  for (const e of encaixes) if (e.peca && e.tipo === 'arma') camada(s, (t2) => desenharPeca(t2, e.peca, e.x, e.y, P), P.contorno);
  if (t.motor >= 2) { s.retangulo(4, 15, 2, 3, P.metal); s.retangulo(18, 15, 2, 3, P.metal); s.pixel(4, 18, '#ffa23a'); s.pixel(19, 18, '#ffa23a'); }
  if (t.casco >= 1) for (const [x, y] of [[4, 4], [18, 4], [4, 19], [18, 19]]) { s.retangulo(x, y, 2, 2, P.metal); if (t.casco >= 3) s.pixel(x, y, P.brilho); }
  if (t.ima >= 1) { s.pixel(12, 1, P.alerta); if (t.ima >= 3) s.retangulo(14, 1, 2, 1, P.metal2); }
  s.contorno(t.casco >= 5 ? '#ffd23f' : t.casco >= 3 ? P.realce : P.contorno);
  return { c: s.c, branca: silhuetaBranca(s.c) };
}

// ícone de uma peça ou de um chassi (para os cartões da bancada), em canvas pequeno
export function iconePeca(peca, tema = 'padrao') {
  const P = paletaDoTema(tema), s = novoSprite(16, 16);
  const centros = { arma: [8, 11], motor: [8, 7], reator: [8, 8], placa: [8, 8], modulo: [8, 8] };
  const [cx, cy] = centros[peca.tipo] || [8, 8];
  if (peca.id === 'solar') desenharPeca(s, peca, 8, 8, P);
  else desenharPeca(s, peca, cx, cy, P);
  s.contorno(P.contorno);
  return s.c;
}
export function iconeChassi(chassiId, tema = 'padrao') {
  const P = paletaDoTema(tema), s = novoSprite(TAM_NAVE, TAM_NAVE);
  desenharCasco(s, chassiId, P);
  s.disco(12, 12, 2, P.nucleo);
  s.contorno(P.contorno);
  return s.c;
}

// ---------- vista da bancada: o sprite ampliado, com chamas, brilho do reator e encaixes ----------
export function desenharBancada(ctx, sprite, projeto, t, opcoes = {}) {
  const { escala = 11, tema = 'padrao', selecionado = -1, previa = -1, teste = 0, calor = 0 } = opcoes;
  const K = escala, W = TAM_NAVE * K;
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, W, W);
  // malha de projeto ao fundo
  ctx.fillStyle = 'rgba(111, 232, 255, 0.07)';
  for (let i = 0; i <= TAM_NAVE; i += 2) { ctx.fillRect(i * K, 0, 1, W); ctx.fillRect(0, i * K, W, 1); }
  ctx.strokeStyle = 'rgba(111, 232, 255, 0.22)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(W / 2, W / 2, W * 0.46, 0, Math.PI * 2); ctx.stroke();
  const encaixes = encaixesDoProjeto(projeto);
  // chamas dos motores
  for (const f of chamasDaNave(projeto)) {
    const intensidade = teste ? 1.8 : 1, comp = Math.round((3 + Math.floor((Math.sin(t * 22 + f.x) + 1) * 1.5)) * intensidade * (f.tipo === 'plasma' || f.tipo === 'antimateria' ? 1.5 : 1));
    for (let k = 0; k < comp; k++) {
      ctx.fillStyle = k < comp * 0.35 ? f.cores[0] : k < comp * 0.7 ? f.cores[1] : f.cores[2];
      const larg = k < comp * 0.6 ? 2 : 1;
      ctx.fillRect((f.x - (larg === 2 ? 1 : 0)) * K, (f.y + k) * K, larg * K, K);
    }
  }
  ctx.drawImage(sprite, 0, 0, TAM_NAVE, TAM_NAVE, 0, 0, W, W);
  // pulso do reator
  const reator = encaixes.find((e) => e.tipo === 'reator');
  if (reator?.peca) {
    const cor = CORES_REATOR[reator.peca.id]?.[0] || '#8bd3ff', a = 0.25 + 0.25 * (0.5 + 0.5 * Math.sin(t * 4)) + (teste ? 0.25 : 0);
    ctx.globalAlpha = a; ctx.fillStyle = cor; ctx.beginPath(); ctx.arc((reator.x + 0.5) * K, (reator.y + 0.5) * K, K * 3.4, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1;
  }
  // armas disparando no teste
  if (teste) {
    for (const e of encaixes) if (e.tipo === 'arma' && e.peca && Math.floor(t * 9 + e.x) % 2) {
      const n = e.peca.proj || 1, cor = COR_TIRO[e.peca.id] || '#ffe14a';
      for (let k = 0; k < n; k++) { const dx = (k - (n - 1) / 2) * 2; ctx.fillStyle = cor; ctx.fillRect((e.x + dx) * K, (e.y - 9 - ((t * 40) % 8)) * K, K, K * 3); }
    }
  }
  // calor: brilho vermelho tremido em volta da nave
  if (calor > 0) { ctx.globalAlpha = Math.min(0.22, calor * 0.12) * (0.6 + 0.4 * Math.sin(t * 14)); ctx.fillStyle = '#ff5a2a'; ctx.beginPath(); ctx.arc(W / 2, W / 2, W * 0.4, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1; }
  // encaixes: cantoneiras nos vazios e destaque no selecionado
  for (const e of encaixes) {
    const cx = e.x * K + K / 2, cy = e.y * K + K / 2, meia = K * 2.6;
    const sel = e.i === selecionado, pre = e.i === previa;
    ctx.strokeStyle = sel ? '#ffe14a' : pre ? '#ffb347' : e.peca ? 'rgba(111, 232, 255, 0.35)' : 'rgba(255, 255, 255, 0.55)';
    ctx.lineWidth = sel ? 2 : 2;
    if (!e.peca || sel) ctx.setLineDash(sel ? [] : [4, 4]); else ctx.setLineDash([2, 5]);
    ctx.strokeRect(cx - meia, cy - meia, meia * 2, meia * 2);
    ctx.setLineDash([]);
  }
}
