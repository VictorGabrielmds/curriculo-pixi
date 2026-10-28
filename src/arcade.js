// Jogo de nave estilo arcade: a nave atira sozinha e você a move pelo espaço; monstrinhos chegam pelas laterais da tela
// e soltam cristais de XP (só sobe de nível quem pega o cristal). Rochas soltam itens, buracos negros levam a uma luta
// contra um alienígena (que dá um poder), chefões soltam moedas espaciais para a Oficina (melhorias permanentes).
import './arcade.css';
import { novoSprite, silhuetaBranca } from './pixelArt.js';
import { criarFundo, REGIOES } from './arcadeFundo.js';
import { criarObstaculos } from './arcadeObstaculos.js';
import { criarRochas, criarItens, desenharBuracoNegro } from './arcadeSprites.js';
import { TEMAS, ALIENS, CHEFES } from './arcadeTemas.js';
import { LENDAS, atualizarLenda, renderizarLenda, retratoLenda } from './arcadeLendas.js';
import './lendas.css';
import { FASES, faseDe } from './arcadeFases.js';
import { desenharAmbiente } from './arcadeAmbiente.js';
import { NATIVOS } from './arcadeNativos.js';
import { desenharAuraAlien, desenharComSurgir, TEMPO_SURGIR } from './arcadeAliens.js';
import { projetoPadrao, normalizarProjeto, desbloqueiosIniciais, normalizarDesbloqueios, calcularEfeitosNave, pecasPrincipais } from './naveModular.js';
import { gerarNave, chamasDaNave, TAM_NAVE } from './naveDesenho.js';
import { criarGaragem } from './garagem.js';

const A = 270;
// A arena acompanha a proporção útil da janela. Em monitores largos, ganhamos
// espaço jogável nas laterais em vez de centralizar uma tela 16:9 estreita.
// A largura lógica também cresce, portanto os sprites não são deformados.
const MARGEM_ARCADE = window.innerWidth <= 700 ? 12 : 44;
const ALTURA_INTERFACE = window.innerWidth <= 700 ? 118 : 165;
const PROPORCAO_ARENA = Math.min(3.2, Math.max(16 / 9,
  (window.innerWidth - MARGEM_ARCADE) / Math.max(160, window.innerHeight - ALTURA_INTERFACE)));
const L = Math.round(A * PROPORCAO_ARENA); // resolução lógica ampliada sem suavização; as letras ficam em uma camada à parte
const CX = L / 2, CY = A / 2;
const RAIO_TELA = Math.hypot(L, A) / 2; // do centro ao canto da tela: monstros e rochas surgem além disso
const RAIO_NAVE = 6;
const CHAVE = 'curriculo-arcade-v1';
const BONUS_MAXIMO = 12; // moedas espaciais de bônus no fim da partida
const ARENA = { x0: 10, x1: L - 10, y0: 26, y1: A - 10 }; // limites da luta contra o alienígena

const TIPOS = {
  slime: { hp: 2, vel: 20, raio: 5, xp: 1, dano: 1 },
  morcego: { hp: 2, vel: 40, raio: 4, xp: 2, dano: 1 },
  ogro: { hp: 8, vel: 13, raio: 7, xp: 6, dano: 2 },
  fantasma: { hp: 3, vel: 46, raio: 5, xp: 3, dano: 1 },
  inseto: { hp: 2, vel: 52, raio: 3, xp: 1, dano: 1 },
  atirador: { hp: 4, vel: 24, raio: 5, xp: 4, dano: 1 },
  sentinela: { hp: 5, vel: 21, raio: 6, xp: 5, dano: 1 },
  bombardeiro: { hp: 9, vel: 17, raio: 7, xp: 8, dano: 2 },
  fulminante: { hp: 6, vel: 19, raio: 6, xp: 7, dano: 1 },
  curandeiro: { hp: 7, vel: 24, raio: 6, xp: 7, dano: 0 },
  amplificador: { hp: 8, vel: 20, raio: 7, xp: 8, dano: 0 },
  chefe: { hp: 150, vel: 28, raio: 20, xp: 0, dano: 2 },
  nativo: { hp: 15, vel: 14, raio: 10, xp: 10, dano: 1 },
  alien: { hp: 70, vel: 0, raio: 14, xp: 0, dano: 2 },
};

const RAIO_SUPORTE = 70; // curandeiro e amplificador só afetam os inimigos que estão perto deles
const SPRITE_TIPO = { sentinela: 'atirador', bombardeiro: 'ogro', fulminante: 'atirador', curandeiro: 'fantasma', amplificador: 'slime' };
const ARMAS = {
  normal: { nome: 'CANHÃO', curto: 'TIRO', cor: '#ffe14a', icone: '•' },
  laser: { nome: 'LASER PRISMÁTICO', curto: 'LASER', cor: '#38c8ff', icone: '━' },
  missil: { nome: 'MÍSSEIS', curto: 'MÍSSIL', cor: '#ff9a3a', icone: '▲' },
  orbes: { nome: 'ORBES DE ENERGIA', curto: 'ORBES', cor: '#ff3bd4', icone: '●' },
  turbo: { nome: 'HIPERPROPULSOR', curto: 'TURBO', cor: '#7dff9a', icone: '»' },
  cura: { nome: 'NANORREPARO', curto: 'CURA', cor: '#ff6b7a', icone: '+' },
  escudo: { nome: 'ESCUDO DE FASE', curto: 'ESCUDO', cor: '#8bd3ff', icone: '⬡' },
  salto: { nome: 'BURACO DE MINHOCA', curto: 'SALTO', cor: '#a56bff', icone: '◎' },
  drift: { nome: 'DRIFT ÍGNEO', curto: 'DRIFT', cor: '#ff7a3a', icone: '≈' },
};

const MELHORIAS = [
  { id: 'p_laser', grupo: 'NOVA ARMA', raridade: 'LENDÁRIO', icone: '━', cor: '#38c8ff', nome: 'Laser prismático', desc: 'Desbloqueia um feixe contínuo de curto alcance no próximo slot.', max: 1, peso: 1.35, nivel: (s) => s.poderes.laser ? 1 : 0, requer: (s) => !s.poderes.laser && s.slots.includes(null), aplicar: (s) => { darPoder(s, 'laser'); } },
  { id: 'p_missil', grupo: 'NOVA ARMA', raridade: 'LENDÁRIO', icone: '▲', cor: '#ff9a3a', nome: 'Lançador de mísseis', desc: 'Desbloqueia projéteis teleguiados com explosão em área.', max: 1, peso: 1.35, nivel: (s) => s.poderes.missil ? 1 : 0, requer: (s) => !s.poderes.missil && s.slots.includes(null), aplicar: (s) => { darPoder(s, 'missil'); } },
  { id: 'p_orbes', grupo: 'NOVA ARMA', raridade: 'LENDÁRIO', icone: '●', cor: '#ff3bd4', nome: 'Orbital de energia', desc: 'Desbloqueia esferas que giram e destroem inimigos por contato.', max: 1, peso: 1.35, nivel: (s) => s.poderes.orbes ? 1 : 0, requer: (s) => !s.poderes.orbes && s.slots.includes(null), aplicar: (s) => { darPoder(s, 'orbes'); } },
  { id: 'p_turbo', grupo: 'NOVA ARMA', raridade: 'LENDÁRIO', icone: '»', cor: '#7dff9a', nome: 'Hiperpropulsor', desc: 'Enquanto selecionado, gasta energia para deixar a nave muito mais rápida.', max: 1, peso: 1.15, nivel: (s) => s.poderes.turbo ? 1 : 0, requer: (s) => !s.poderes.turbo && s.slots.includes(null), aplicar: (s) => { darPoder(s, 'turbo'); } },
  { id: 'p_cura', grupo: 'NOVA ARMA', raridade: 'LENDÁRIO', icone: '+', cor: '#ff6b7a', nome: 'Nanorreparo', desc: 'Carrega e recupera vida automaticamente enquanto estiver selecionado.', max: 1, peso: 1, nivel: (s) => s.poderes.cura ? 1 : 0, requer: (s) => !s.poderes.cura && s.slots.includes(null), aplicar: (s) => { darPoder(s, 'cura'); } },
  { id: 'p_escudo', grupo: 'NOVA ARMA', raridade: 'LENDÁRIO', icone: '⬡', cor: '#8bd3ff', nome: 'Escudo de fase', desc: 'Carrega uma barreira temporária que bloqueia todo dano recebido.', max: 1, peso: 1.1, nivel: (s) => s.poderes.escudo ? 1 : 0, requer: (s) => !s.poderes.escudo && s.slots.includes(null), aplicar: (s) => { darPoder(s, 'escudo'); } },
  { id: 'p_salto', grupo: 'NOVA ARMA', raridade: 'LENDÁRIO', icone: '◎', cor: '#a56bff', nome: 'Buraco de minhoca', desc: 'A nave desacelera para carregar e então dá um salto enorme.', max: 1, peso: 1, nivel: (s) => s.poderes.salto ? 1 : 0, requer: (s) => !s.poderes.salto && s.slots.includes(null), aplicar: (s) => { darPoder(s, 'salto'); } },
  { id: 'p_drift', grupo: 'NOVA ARMA', raridade: 'LENDÁRIO', icone: '≈', cor: '#ff7a3a', nome: 'Drift ígneo', desc: 'Carrega uma arrancada que espalha fogo do propulsor e queima perseguidores.', max: 1, peso: 1.1, nivel: (s) => s.poderes.drift ? 1 : 0, requer: (s) => !s.poderes.drift && s.slots.includes(null), aplicar: (s) => { darPoder(s, 'drift'); } },
  { id: 'a_normal', grupo: 'ARMA · CANHÃO', raridade: 'RARO', icone: '●', cor: '#ffe14a', nome: 'Canhão · evolução', desc: 'Melhora o calibre e o impacto exclusivos do canhão principal.', max: 4, peso: 1.3, nivel: (s) => s.armasNivel.normal, aplicar: (s) => { s.armasNivel.normal += 1; } },
  { id: 'a_laser', grupo: 'ARMA · LASER', raridade: 'RARO', icone: '━', cor: '#38c8ff', nome: 'Laser · evolução', desc: 'Aumenta alcance, bateria e eficiência próprios do laser.', max: 4, peso: 1.5, nivel: (s) => s.armasNivel.laser, requer: (s) => s.poderes.laser, aplicar: (s) => { s.armasNivel.laser += 1; } },
  { id: 'a_missil', grupo: 'ARMA · MÍSSIL', raridade: 'RARO', icone: '▲', cor: '#ff9a3a', nome: 'Mísseis · evolução', desc: 'Explosões maiores e um míssil extra nos níveis avançados.', max: 4, peso: 1.5, nivel: (s) => s.armasNivel.missil, requer: (s) => s.poderes.missil, aplicar: (s) => { s.armasNivel.missil += 1; } },
  { id: 'a_orbes', grupo: 'ARMA · ORBES', raridade: 'RARO', icone: '●', cor: '#ff3bd4', nome: 'Orbes · evolução', desc: 'Mais esferas e rotação própria mais rápida.', max: 4, peso: 1.5, nivel: (s) => s.armasNivel.orbes, requer: (s) => s.poderes.orbes, aplicar: (s) => { s.armasNivel.orbes += 1; } },
  { id: 'a_turbo', grupo: 'ARMA · TURBO', raridade: 'RARO', icone: '»', cor: '#7dff9a', nome: 'Turbo · evolução', desc: 'Aumenta a autonomia e a força exclusiva do hiperpropulsor.', max: 4, peso: 1.5, nivel: (s) => s.armasNivel.turbo, requer: (s) => s.poderes.turbo, aplicar: (s) => { s.armasNivel.turbo += 1; } },
  { id: 'a_cura', grupo: 'ARMA · CURA', raridade: 'RARO', icone: '+', cor: '#ff6b7a', nome: 'Cura · evolução', desc: 'Aumenta o reparo e reduz a espera do nanorreparo.', max: 4, peso: 1.5, nivel: (s) => s.armasNivel.cura, requer: (s) => s.poderes.cura, aplicar: (s) => { s.armasNivel.cura += 1; } },
  { id: 'a_escudo', grupo: 'ARMA · ESCUDO', raridade: 'RARO', icone: '⬡', cor: '#8bd3ff', nome: 'Escudo · evolução', desc: 'Aumenta a duração própria da barreira de fase.', max: 4, peso: 1.5, nivel: (s) => s.armasNivel.escudo, requer: (s) => s.poderes.escudo, aplicar: (s) => { s.armasNivel.escudo += 1; } },
  { id: 'a_salto', grupo: 'ARMA · SALTO', raridade: 'RARO', icone: '◎', cor: '#a56bff', nome: 'Salto · evolução', desc: 'Salta mais longe e carrega a ruptura mais rápido.', max: 4, peso: 1.5, nivel: (s) => s.armasNivel.salto, requer: (s) => s.poderes.salto, aplicar: (s) => { s.armasNivel.salto += 1; } },
  { id: 'a_drift', grupo: 'ARMA · DRIFT', raridade: 'RARO', icone: '≈', cor: '#ff7a3a', nome: 'Drift · evolução', desc: 'Aumenta a arrancada e a trilha de fogo próprias do drift.', max: 4, peso: 1.5, nivel: (s) => s.armasNivel.drift, requer: (s) => s.poderes.drift, aplicar: (s) => { s.armasNivel.drift += 1; } },
  { id: 'dano_geral', grupo: 'NAVE · DANO', raridade: 'INCOMUM', icone: '✦', cor: '#ff7a59', nome: 'Ponto de dano', desc: '+12% de dano para TODO o arsenal da nave.', max: 6, peso: 4.4, aplicar: (s) => { s.danoGlobal *= 1.12; } },
  { id: 'reparo', grupo: 'NAVE · VIDA', raridade: 'COMUM', icone: '♥', cor: '#ff6b7a', nome: 'Ponto de vida', desc: '+1 de vida máxima e recupera 1 ponto agora.', max: 6, peso: 4.4, aplicar: (s) => { s.maxHp += 1; s.hp = Math.min(s.maxHp, s.hp + 1); } },
  { id: 'armadura', grupo: 'NAVE · ARMADURA', raridade: 'INCOMUM', icone: '⬢', cor: '#c9cdf5', nome: 'Ponto de armadura', desc: '-6% de dano recebido pela nave inteira, até o limite de 50%.', max: 6, peso: 4.2, aplicar: (s) => { s.armadura += 1; } },
  { id: 'motor', grupo: 'NAVE · VELOCIDADE', raridade: 'COMUM', icone: '➤', cor: '#8bd3ff', nome: 'Ponto de velocidade', desc: '+10% de velocidade e resposta da nave.', max: 6, peso: 4.4, aplicar: (s) => { s.velNave *= 1.1; } },
  { id: 'recarga_geral', grupo: 'NAVE · RECARGA', raridade: 'INCOMUM', icone: '↻', cor: '#7dff9a', nome: 'Ponto de recarga', desc: '+10% de cadência e recarga para TODAS as armas e sistemas.', max: 6, peso: 4.2, aplicar: (s) => { s.recargaGlobal *= 1.1; } },
  { id: 'cadencia_canhao', grupo: 'CANHÃO [1]', raridade: 'INCOMUM', icone: '↻', cor: '#ffe14a', nome: 'Alimentador rápido', desc: '+13% de cadência exclusiva do canhão.', max: 5, peso: 2.4, aplicar: (s) => { s.cadencia *= 1.13; } },
  { id: 'perfurar', grupo: 'CANHÃO [1]', raridade: 'COMUM', icone: '»', cor: '#c9cdf5', nome: 'Munição perfurante', desc: 'Os tiros do canhão atravessam +1 inimigo.', max: 3, peso: 2.5, aplicar: (s) => { s.perfura += 1; } },
  // +1 projétil é muito forte: o primeiro pode aparecer logo, o segundo é bem mais raro e o quarto cano só vem junto com um bônus (e é raríssimo)
  { id: 'proj_canhao', grupo: 'CANHÃO [1]', raridade: (s) => ((s.niveis.proj_canhao | 0) === 0 ? 'RARO' : 'LENDÁRIO'), icone: '⁝', cor: '#ffe14a', nome: 'Cano adicional', desc: '+1 projétil por disparo do canhão (o primeiro é comum; o segundo é raro).', max: 2, peso: (s) => [2.6, 0.6][s.niveis.proj_canhao | 0] ?? 0.6, requer: (s) => s.projeteis < 3, aplicar: (s) => { s.projeteis += 1; } },
  { id: 'proj_quad_cad', grupo: 'CANHÃO [1]', raridade: 'LENDÁRIO', icone: '⁞', cor: '#ff7a59', nome: 'Cano quádruplo · Aceleração', desc: '+1 projétil (chega a 4 por disparo) e +30% de cadência do canhão.', max: 1, peso: 0.45, requer: (s) => s.projeteis === 3, aplicar: (s) => { s.projeteis += 1; s.cadencia *= 1.3; } },
  { id: 'proj_quad_perf', grupo: 'CANHÃO [1]', raridade: 'LENDÁRIO', icone: '⁞', cor: '#c9cdf5', nome: 'Cano quádruplo · Perfuração', desc: '+1 projétil (chega a 4 por disparo) e os tiros atravessam +2 inimigos.', max: 1, peso: 0.45, requer: (s) => s.projeteis === 3, aplicar: (s) => { s.projeteis += 1; s.perfura += 2; } },
  { id: 'vel_tiro', grupo: 'CANHÃO [1]', raridade: 'COMUM', icone: '›', cor: '#c9cdf5', nome: 'Pólvora estável', desc: '+10% de velocidade dos projéteis. É útil, mas não faz milagres.', max: 5, peso: 3.2, aplicar: (s) => { s.velTiro *= 1.1; } },
  { id: 'critico', grupo: 'CANHÃO [1]', raridade: 'INCOMUM', icone: '✹', cor: '#ff9a3a', nome: 'Mira oportunista', desc: '+4% de chance de um tiro causar dano dobrado.', max: 4, peso: 1.8, aplicar: (s) => { s.critico += 0.04; } },
  { id: 'ima', grupo: 'NAVE · SENSORES', raridade: 'COMUM', icone: '⌁', cor: '#6fe8ff', nome: 'Ímã de cristais', desc: '+45% de alcance para atrair cristais de XP.', max: 4, peso: 2.1, aplicar: (s) => { s.raioIma *= 1.45; } },
  { id: 'coletor', grupo: 'NAVE · SENSORES', raridade: 'COMUM', icone: '·', cor: '#6fe8ff', nome: 'Coletor auxiliar', desc: '+18% de alcance do ímã. Pequeno, mas ajuda.', max: 6, peso: 2.3, aplicar: (s) => { s.raioIma *= 1.18; } },
  { id: 'polimento', grupo: 'NAVE · SENSORES', raridade: 'COMUM', icone: '◇', cor: '#a56bff', nome: 'Polimento de cristal', desc: '+7% de XP recebido dos cristais.', max: 6, peso: 2.2, aplicar: (s) => { s.bonusXp *= 1.07; } },
  { id: 'remendo', grupo: 'NAVE · REPARO', raridade: 'COMUM', icone: '+', cor: '#ff6b7a', nome: 'Remendo de emergência', desc: 'Recupera somente 1 ponto de vida agora.', max: 5, peso: 2.2, requer: (s) => s.hp < s.maxHp, aplicar: (s) => { s.hp = Math.min(s.maxHp, s.hp + 1); } },
];

// novas armas aparecem por sorte nas melhorias e ocupam os slots 2, 3 e 4 da run
const NOMES_PODER = Object.fromEntries(Object.entries(ARMAS).filter(([id]) => id !== 'normal').map(([id, a]) => [id, a.nome]));
const NOMES_CURTOS = Object.fromEntries(Object.entries(ARMAS).filter(([id]) => id !== 'normal').map(([id, a]) => [id, a.curto]));
function darPoder(s, id) {
  const i = s.slots.indexOf(null);
  if (s.poderes[id] || i < 0) return false;
  s.slots[i] = id; s.poderes[id] = true;
  s.armasNivel[id] = 1;
  s.arma = i + 2;
  s.avisoTxt = `NOVA ARMA [${i + 2}]: ${NOMES_PODER[id]}!`; s.aviso = 3.6;
  return true;
}

// melhorias permanentes compradas com moedas espaciais (que o chefão solta)
const OFICINA = [
  { parte: 'MOTOR', id: 'motor', nome: 'Propulsores', desc: '+8% de velocidade da nave', max: 5, custo: (n) => 6 + n * 4 },
  { parte: 'NÚCLEO DE ENERGIA', id: 'nucleo', nome: 'Núcleo de energia', desc: '+12% de recarga para todas as armas e sistemas', max: 5, custo: (n) => 8 + n * 5 },
  { parte: 'NÚCLEO DE ENERGIA', id: 'bateria', nome: 'Bateria do laser', desc: '+0,6 s de laser contínuo', max: 4, custo: (n) => 6 + n * 4 },
  { parte: 'ARMAS', id: 'dano', nome: 'Amplificador bélico', desc: '+0,25 de dano base para todo o arsenal', max: 5, custo: (n) => 8 + n * 6 },
  { parte: 'NÚCLEO DE ENERGIA', id: 'cadencia', nome: 'Computador de recarga', desc: '+8% de cadência e recarga global', max: 5, custo: (n) => 6 + n * 4 },
  { parte: 'ARMAS', id: 'projetil', nome: 'Canhão duplo', desc: '+1 projétil inicial', max: 2, custo: (n) => 24 + n * 20 },
  { parte: 'ARMAS', id: 'lente', nome: 'Lente do laser', desc: '+10% de dano e de alcance do laser', max: 5, custo: (n) => 8 + n * 6 },
  { parte: 'ESCUDO', id: 'escudo', nome: 'Escudo regenerativo', desc: 'Barreira que absorve 1 golpe e se recarrega (nv 4: duas barreiras)', max: 5, custo: (n) => 10 + n * 6 },
  { parte: 'CASCO', id: 'casco', nome: 'Casco reforçado', desc: '+1 vida inicial', max: 5, custo: (n) => 6 + n * 4 },
  { parte: 'CASCO', id: 'armadura', nome: 'Blindagem', desc: '-6% de dano recebido por ponto', max: 5, custo: (n) => 8 + n * 5 },
  { parte: 'SENSORES', id: 'ima', nome: 'Ímã inicial', desc: '+25% de alcance do ímã', max: 4, custo: (n) => 6 + n * 5 },
  { parte: 'SENSORES', id: 'xp', nome: 'Cristais ricos', desc: '+10% de XP dos cristais', max: 5, custo: (n) => 8 + n * 6 },
];

// estrelas de poder: aparecem de tempos em tempos perto da nave; cada cor dá um bônus por um tempo
const ESTRELAS = {
  estrelaVermelha: { cor: '#ff3b4a', nome: 'DANO +50%', tempo: 12, peso: 3 },
  estrelaAmarela: { cor: '#ffd23f', nome: 'VELOCIDADE +50%', tempo: 12, peso: 3 },
  estrelaAzul: { cor: '#3f8cff', nome: 'ESCUDO', tempo: 9, peso: 2.5 },
  estrelaRoxa: { cor: '#a56bff', nome: 'XP EM DOBRO', tempo: 15, peso: 2 },
};
const PESOS_ESTRELAS = Object.entries(ESTRELAS).map(([k, v]) => [k, v.peso]);
const PESOS_ITENS = [['ima', 0.25], ['explosao', 0.2], ['coracao', 0.2], ['escudo', 0.15], ['turbo', 0.2]];

const dadosPadrao = () => ({
  tempo: 0, kills: 0, moedas: 0, skin: 0, onda: 0,
  oficina: Object.fromEntries(OFICINA.map((o) => [o.id, 0])),
  projeto: projetoPadrao(), // a nave montada na garagem: chassi, peças por encaixe e ajustes finos
  pecasLiberadas: desbloqueiosIniciais(), // peças e chassis já fabricados
  bestiario: {}, // criaturas lendárias: quantas vezes apareceram e quantas foram derrotadas
  nativos: {}, // nativos das fases: vistos e derrotados
  aliens: {}, // alienígenas dos buracos negros (por nome): vistos e derrotados
  aliensDerrotados: 0,
  fasesVistas: 0, // maior fase alcançada
  chefesDerrotados: 0,
});
function carregarDados() {
  const d = dadosPadrao();
  try {
    const j = JSON.parse(localStorage.getItem(CHAVE));
    if (j) {
      d.tempo = j.tempo | 0; d.kills = j.kills | 0; d.moedas = Math.max(0, j.moedas | 0); d.skin = Math.max(0, j.skin | 0); d.onda = Math.max(0, j.onda | 0);
      for (const o of OFICINA) d.oficina[o.id] = Math.max(0, Math.min(o.max, (j.oficina && j.oficina[o.id]) | 0));
      d.projeto = normalizarProjeto(j.projeto || j.modulos); // aceita também o formato antigo (um módulo por sistema)
      d.pecasLiberadas = normalizarDesbloqueios([...(j.pecasLiberadas || []), ...(j.modulosDesbloqueados || [])]);
      for (const id of [d.projeto.chassi, ...d.projeto.pecas]) if (id && !d.pecasLiberadas.includes(id)) d.pecasLiberadas.push(id);
      d.chefesDerrotados = Math.max(0, j.chefesDerrotados | 0); d.fasesVistas = Math.max(0, j.fasesVistas | 0);
      for (const [id, r] of Object.entries(j.nativos || {})) if (NATIVOS[id] && r && typeof r === 'object') d.nativos[id] = { visto: Math.max(0, r.visto | 0), vencido: Math.max(0, r.vencido | 0) };
      d.aliensDerrotados = Math.max(0, j.aliensDerrotados | 0);
      for (const a of ALIENS) { const r = j.aliens && j.aliens[a.nome]; if (r && typeof r === 'object') d.aliens[a.nome] = { visto: Math.max(0, r.visto | 0), vencido: Math.max(0, r.vencido | 0) }; }
      for (const [id, r] of Object.entries(j.bestiario || {})) if (r && typeof r === 'object') d.bestiario[id] = { visto: Math.max(0, r.visto | 0), vencido: Math.max(0, r.vencido | 0) };
    }
  } catch { /* sem armazenamento */ }
  return d;
}

// ---------- sprites da nave e dos cristais ----------
function criarSprites() {
  const cristal = (corA, corB, brilho) => {
    const s = novoSprite(7, 9);
    s.poligono([[3.5, 0.5], [6.5, 3.5], [3.5, 8.5], [0.5, 3.5]], corA);
    s.poligono([[3.5, 0.5], [6.5, 3.5], [3.5, 4.5]], corB);
    s.pixel(2, 3, brilho); s.pixel(2, 2, brilho);
    return s.contorno('#0b1026').c;
  };
  const cristais = {
    1: cristal('#38c8ff', '#8be6ff', '#ffffff'), 2: cristal('#3fd96a', '#9bffb4', '#ffffff'),
    3: cristal('#a56bff', '#d1b0ff', '#ffffff'), 6: cristal('#ffc83d', '#fff0a0', '#ffffff'),
  };
  return { cristais };
}

export function iniciarArcade({ bip, somAtivo, tema = 'padrao', aoMudarNave }) {
  const temaYas = tema === 'yas', temaFer = tema === 'fer';
  // Durante o desenvolvimento o Vite pode recarregar este módulo sem destruir a instância anterior.
  // Uma geração global faz o loop velho se encerrar no frame seguinte e evita dois jogos disputando a mesma aba.
  const geracao = Symbol('arcade');
  window.__curriculoArcadeGeracao = geracao;
  document.getElementById('arcade')?.remove();
  const el = (tag, cls, texto) => { const e = document.createElement(tag); if (cls) e.className = cls; if (texto != null) e.textContent = texto; return e; };
  const sprites = criarSprites();
  const rochasSpr = criarRochas(), itensSpr = criarItens();
  const obstaculos = criarObstaculos({ inicioX: CX, inicioY: CY, rochasSpr }); // planetas, cadeias de rochas e campos de detritos fixos no mapa
  const cacheAlien = new Map(), cacheChefe = new Map();
  const alienSprite = (i) => { if (!cacheAlien.has(i)) cacheAlien.set(i, ALIENS[i].criar()); return cacheAlien.get(i); };
  const chefeSprite = (i) => { if (!cacheChefe.has(i)) cacheChefe.set(i, CHEFES[i].criar()); return cacheChefe.get(i); };
  const cacheSkin = new Map();
  const skin = (v) => {
    const k = ((v % TEMAS.length) + TEMAS.length) % TEMAS.length;
    if (!cacheSkin.has(k)) cacheSkin.set(k, TEMAS[k].criar());
    return cacheSkin.get(k);
  };
  // música de fundo (mp3 em public/audio): baixinha, só enquanto o jogo de nave está aberto e se o som estiver ligado.
  // Quando um chefão aparece a música normal pausa e toca a do chefão; quando ele cai a normal volta de onde parou.
  const VOLUME_MUSICA = 0.3;
  const novaMusica = (arquivo) => { const m = new Audio(import.meta.env.BASE_URL + arquivo); m.loop = true; m.volume = VOLUME_MUSICA; m.preload = 'none'; return m; };
  const musica = novaMusica('audio/arcade.mp3'), musicaChefe = novaMusica('audio/chefe.mp3'), musicaFim = novaMusica('audio/gameover.mp3');
  // faixas: 'normal' (jogando), 'chefe' (chefões e alienígenas) e 'fim' (game over)
  const faixas = { normal: musica, chefe: musicaChefe, fim: musicaFim };
  let faixa = 'normal', aguardandoToque = false;
  // se o navegador bloquear o som (precisa de um toque antes), tenta de novo no próximo toque ou tecla
  function esperarToque() {
    if (aguardandoToque) return;
    aguardandoToque = true;
    const tentar = () => { aguardandoToque = false; window.removeEventListener('pointerdown', tentar, true); window.removeEventListener('keydown', tentar, true); if (aberto) tocarMusica(); };
    window.addEventListener('pointerdown', tentar, true); window.addEventListener('keydown', tentar, true);
  }
  const tocarMusica = () => { if (somAtivo && !somAtivo()) return; faixas[faixa].play().catch(esperarToque); };
  const pararMusicas = () => { musica.pause(); musicaChefe.pause(); musicaFim.pause(); };
  function trocarFaixa(nome) { // pausa as outras; a do chefão e a de game over começam do início, a normal continua de onde parou
    if (faixa === nome) return;
    faixa = nome;
    for (const [n, el] of Object.entries(faixas)) if (n !== nome) el.pause();
    if (nome !== 'normal') faixas[nome].currentTime = 0;
    tocarMusica();
  }
  // a primeira vez que o jogador toca em algo, "destrava" as outras faixas (alguns navegadores só liberam o som de cada arquivo depois de um toque)
  let faixasDestravadas = false;
  function destravarFaixas() {
    if (faixasDestravadas) return;
    faixasDestravadas = true;
    for (const el of [musicaChefe, musicaFim]) { el.muted = true; el.play().then(() => { el.pause(); el.currentTime = 0; el.muted = false; }).catch(() => { el.muted = false; faixasDestravadas = false; }); }
  }
  const fundo = criarFundo(L, A);
  let naveSpr = gerarNave({ casco: 0, motor: 0, nucleo: 0, armas: 0, ima: 0 }, tema, projetoPadrao());
  let chamasNave = chamasDaNave(projetoPadrao());
  let dados = carregarDados();
  const ultimoSom = {};
  const som = (cat, folga, fn) => { const t = performance.now(); if (t - (ultimoSom[cat] || 0) < folga) return; ultimoSom[cat] = t; fn(); };
  function somAcerto(m) { // dano em monstro: tec curto; os grandes soam mais graves
    const grande = m.tipo === 'ogro' || m.tipo === 'chefe' || m.tipo === 'alien' || m.tipo === 'nativo';
    som('acerto' + (grande ? 'G' : ''), grande ? 70 : 40, () => (grande ? bip(90 + Math.random() * 25, 0.07, 'sawtooth', 0.035) : bip(170 + Math.random() * 80, 0.03, 'square', 0.02)));
  }
  function somMorte(tipo) { // cada tipo morre com um som diferente
    som('morte', 30, () => {
      if (tipo === 'slime') { bip(330, 0.05, 'triangle', 0.045); bip(200, 0.09, 'triangle', 0.045, 0.05); }
      else if (tipo === 'morcego') { bip(950, 0.04, 'square', 0.03); bip(620, 0.05, 'square', 0.03, 0.04); bip(380, 0.07, 'square', 0.03, 0.09); }
      else if (tipo === 'ogro') { bip(120, 0.16, 'sawtooth', 0.06); bip(70, 0.22, 'sawtooth', 0.06, 0.09); }
      else if (tipo === 'fantasma') { bip(700, 0.06, 'sine', 0.05); bip(500, 0.08, 'sine', 0.05, 0.06); bip(300, 0.12, 'sine', 0.05, 0.12); }
      else if (tipo === 'atirador') { bip(520, 0.04, 'sawtooth', 0.04); bip(260, 0.06, 'sawtooth', 0.04, 0.04); bip(130, 0.1, 'sawtooth', 0.04, 0.09); }
      else bip(1000, 0.03, 'square', 0.025); // inseto: estalinho
    });
  }
  const salvarDados = () => {
    try { localStorage.setItem(CHAVE, JSON.stringify(dados)); } catch { /* ignora */ }
    aoMudarNave?.(JSON.parse(JSON.stringify(dados.projeto)));
  };

  // ---------- interface ----------
  const raiz = el('div'); raiz.id = 'arcade'; raiz.classList.toggle('tema-yas', temaYas); raiz.classList.toggle('tema-fer', temaFer);
  const caixa = el('div', 'arc-caixa');
  const topo = el('div', 'arc-topo');
  const icone = document.createElement('canvas'); icone.width = icone.height = TAM_NAVE; icone.className = 'arc-icone';
  icone.getContext('2d').drawImage(naveSpr.c, 0, 0);
  const titulo = el('h2', null, temaYas ? 'NAVE VIAJANTE' : temaFer ? 'NAVE ABISSAL' : 'NAVE ARCADE');
  const hud = el('div', 'arc-hud');
  const vidasEl = el('span', 'arc-vidas');
  vidasEl.setAttribute('role', 'status');
  const nivelEl = el('span', 'arc-nivel');
  const xpBox = el('span', 'arc-xp'); const xpBarra = el('i'); xpBox.append(xpBarra);
  xpBox.setAttribute('role', 'progressbar'); xpBox.setAttribute('aria-label', 'Experiência'); xpBox.setAttribute('aria-valuemin', '0');
  const killsEl = el('span');
  const ondaEl = el('span', 'arc-onda');
  const efeitosEl = el('span', 'arc-efeitos');
  const moedaEl = el('span', 'arc-moedas');
  const tempoEl = el('span');
  hud.append(vidasEl, nivelEl, xpBox, killsEl, ondaEl, efeitosEl, moedaEl, tempoEl);
  const pausarBtn = el('button', 'arc-pausa', 'II'); pausarBtn.title = 'Pausar (Esc)'; pausarBtn.setAttribute('aria-label', 'Pausar jogo'); pausarBtn.hidden = true;
  const fechar = el('button', 'arc-x', 'X'); fechar.title = 'Sair (Esc)'; fechar.setAttribute('aria-label', 'Sair do jogo');
  topo.append(icone, titulo, hud, pausarBtn, fechar);

  const tela = el('div', 'arc-tela');
  tela.style.aspectRatio = `${L} / ${A}`;
  const cv = document.createElement('canvas'); cv.width = L; cv.height = A;
  cv.setAttribute('role', 'img');
  cv.setAttribute('aria-label', 'Área do jogo. Mova a nave com WASD, setas ou arrastando o dedo.');
  const g = cv.getContext('2d');
  g.imageSmoothingEnabled = false;
  // camada de letras: desenhada na resolução real da tela (nítida), por cima do quadro em pixel art; as coordenadas são as do quadro
  const cvTexto = document.createElement('canvas'); cvTexto.className = 'arc-texto'; cvTexto.setAttribute('aria-hidden', 'true');
  const gt = cvTexto.getContext('2d');
  let escalaTexto = 1;
  const FONTE_TEXTO = '"Cascadia Mono", Consolas, "Lucida Console", ui-monospace, monospace';
  function prepararTexto() {
    const dpr = window.devicePixelRatio || 1, w = Math.max(1, Math.round(cv.clientWidth * dpr)), h = Math.max(1, Math.round(cv.clientHeight * dpr));
    if (cvTexto.width !== w || cvTexto.height !== h) { cvTexto.width = w; cvTexto.height = h; }
    escalaTexto = w / L;
    gt.setTransform(1, 0, 0, 1, 0, 0); gt.clearRect(0, 0, w, h);
    gt.setTransform(escalaTexto, 0, 0, escalaTexto, 0, 0);
    gt.lineJoin = 'round'; gt.textBaseline = 'alphabetic';
  }
  // escreve uma linha com contorno escuro; larguraMax encolhe a letra se o texto for comprido
  function escrever(txt, x, y, cor, tam = 10, alinha = 'center', alfa = 1, larguraMax = 0) {
    gt.font = `bold ${tam}px ${FONTE_TEXTO}`;
    if (larguraMax) { const w = gt.measureText(txt).width; if (w > larguraMax) { tam *= larguraMax / w; gt.font = `bold ${tam}px ${FONTE_TEXTO}`; } }
    gt.globalAlpha = alfa; gt.textAlign = alinha;
    gt.lineWidth = Math.max(1.4, tam * 0.26); gt.strokeStyle = '#070a1a'; gt.strokeText(txt, x, y);
    gt.fillStyle = cor; gt.fillText(txt, x, y);
    gt.globalAlpha = 1;
  }

  const joystick = el('div', 'arc-joystick'); joystick.hidden = true;
  const joystickMiolo = el('i'); joystick.append(joystickMiolo);

  const avisoOnda = el('div', 'arc-aviso'); avisoOnda.hidden = true;
  const sobre = el('div', 'arc-sobre');
  const painelInicio = el('div', 'arc-painel arc-inicio');
  const btnComecar = el('button', 'arc-btn', 'COMEÇAR [ESPAÇO]');
  const btnOficinaIni = el('button', 'arc-btn sec');
  const btnBestiario = el('button', 'arc-btn sec');
  const chamada = el('p', 'arc-chamada', 'Sobreviva, evolua sua nave e atravesse regiões cada vez mais perigosas.');
  const objetivos = el('div', 'arc-objetivos');
  for (const [iconeObj, nome, desc] of [
    ['✦', 'PILOTE', 'WASD, setas ou arraste'],
    ['◆', 'EVOLUA', 'Colete cristais de XP'],
    ['☠', 'CONQUISTE', 'Chefes dão moedas'],
  ]) {
    const item = el('div'); item.append(el('b', null, iconeObj), el('strong', null, nome), el('small', null, desc)); objetivos.append(item);
  }
  const detalhes = el('details', 'arc-regras');
  const resumo = el('summary', null, 'COMO JOGAR');
  detalhes.append(resumo,
    el('p', null, 'A nave atira sozinha. Monstros soltam cristais; rochas escondem itens; buracos negros levam a duelos especiais.'),
    el('p', null, 'Você começa só com o canhão [1]. Novas armas aparecem por sorte nos upgrades e ocupam [2], [3] e [4]. Cada arma evolui até o nível 4.'));
  const recordesEl = el('p', 'arc-recordes');
  painelInicio.append(el('h3', null, 'PRONTO PARA DECOLAR?'), chamada, objetivos, detalhes, recordesEl, btnComecar, btnOficinaIni, btnBestiario);

  const painelEscolha = el('div', 'arc-painel'); painelEscolha.hidden = true;
  const painelPausa = el('div', 'arc-painel'); painelPausa.hidden = true;
  const btnContinuar = el('button', 'arc-btn', 'CONTINUAR [ESC]');
  const btnSairPausa = el('button', 'arc-btn sec', 'SAIR');
  painelPausa.append(el('h3', null, 'PAUSADO'), btnContinuar, btnSairPausa);
  const painelFim = el('div', 'arc-painel'); painelFim.hidden = true;
  const painelOficina = el('div', 'of-raiz'); painelOficina.hidden = true;
  const painelBestiario = el('div', 'of-raiz'); painelBestiario.hidden = true;

  sobre.append(painelInicio, painelEscolha, painelPausa, painelFim);
  tela.append(cv, cvTexto, avisoOnda, joystick, sobre);
  const armasEl = el('div', 'arc-armas');
  const botoesArma = [];
  for (let n = 1; n <= 4; n++) {
    const b = el('button', 'arc-arma');
    const nm = el('b'), barra = el('i');
    b.append(el('small', null, String(n)), nm, barra);
    b.onmousedown = (e) => e.preventDefault();
    b.onclick = () => selecionarArma(n);
    botoesArma.push({ b, nm, barra }); armasEl.append(b);
  }
  caixa.append(topo, tela, armasEl, el('p', 'arc-nota', 'de brincadeira: as moedas espaciais só servem na OFICINA da nave, sem dinheiro de verdade'));
  raiz.append(caixa, painelOficina, painelBestiario);
  raiz.setAttribute('role', 'dialog'); raiz.setAttribute('aria-modal', 'true'); raiz.setAttribute('aria-label', 'Nave Arcade');
  document.body.append(raiz);

  // ---------- estado ----------
  let aberto = false, modo = 'inicio', raf = 0, ultimo = 0, voltarPara = 'inicio';
  let S = null;
  const teclas = new Set();
  const ponteiro = { ativo: false, x: CX, y: CY, toque: false, dx: 0, dy: 0, origemX: 0, origemY: 0 };
  const TECLAS_MOVER = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'KeyA', 'KeyD', 'KeyW', 'KeyS'];

  const naTela = (o) => Math.abs(o.x - S.cx) < L / 2 + 4 && Math.abs(o.y - S.cy) < A / 2 + 4;
  const sorteio = (pesos) => { let r = Math.random() * pesos.reduce((s, p) => s + p[1], 0); for (const [k, p] of pesos) { r -= p; if (r <= 0) return k; } return pesos[0][0]; };
  const mostrarAviso = (txt, seg = 2.6) => { S.avisoTxt = txt; S.aviso = seg; };

  function tiersNave() {
    const of = dados.oficina, n = S ? S.niveis : {};
    return { casco: of.casco + of.armadura + (n.reparo | 0) + (n.armadura | 0), motor: of.motor + (n.motor | 0), nucleo: of.nucleo + (n.recarga_geral | 0), armas: of.dano + of.lente + (n.dano_geral | 0), ima: of.ima + (n.ima | 0) };
  }
  function atualizarNaveSpr() {
    const t = tiersNave();
    naveSpr = gerarNave(t, tema, dados.projeto);
    chamasNave = chamasDaNave(dados.projeto);
    if (S) S.tiers = t;
    const ic = icone.getContext('2d'); ic.clearRect(0, 0, TAM_NAVE, TAM_NAVE); ic.drawImage(naveSpr.c, 0, 0);
    aoMudarNave?.(JSON.parse(JSON.stringify(dados.projeto)));
  }
  atualizarNaveSpr();

  // o céu muda a cada fase e fica mais grandioso: nebulosas (fases 1-2), galáxias (3-4) e, depois, o mais sobrenatural do universo
  const regiaoAtual = () => {
    if (S.regiaoForcada != null) return S.regiaoForcada;
    return faseDe(S.fase).regiao; // cada fase é um lugar diferente do universo (ver arcadeFases.js)
  };
  const embaralhar = (lista) => { const a = [...lista]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function sortearElenco() {
    // Cada run continua diferente, mas a leitura da dificuldade é sempre clara:
    // corpo a corpo primeiro, um atirador depois, ameaça avançada e suporte por último.
    const corpo = embaralhar(['slime', 'inseto', 'morcego', 'fantasma', 'ogro']).slice(0, 3);
    const distancia = embaralhar(['atirador', 'sentinela']).slice(0, 1);
    const avancado = embaralhar(['bombardeiro', 'fulminante']).slice(0, 1);
    const suporte = embaralhar(['curandeiro', 'amplificador']).slice(0, 1);
    return [...corpo, ...distancia, ...avancado, ...suporte];
  }

  function novoJogo() {
    const of = dados.oficina;
    const mod = calcularEfeitosNave(dados.projeto);
    const elencoRun = sortearElenco();
    const temas = embaralhar(Array.from({ length: TEMAS.length }, (_, i) => i));
    const skinsRun = Object.fromEntries(elencoRun.map((tipo, i) => [tipo, temas[i % temas.length]]));
    const entradaRun = Object.fromEntries(elencoRun.map((tipo, i) => [tipo, i < 2 ? 1 : i < 4 ? 2 : i === 4 ? 4 : 5]));
    S = {
      t: 0, ta: 0, nx: CX, ny: CY, cx: CX, cy: CY, velNave: 75 * (1 + 0.08 * of.motor) * mod.velocidade, cristais: [], raioIma: 26 * (1 + 0.25 * of.ima) * mod.ima, raioPegar: 8, bonusXp: (1 + 0.1 * of.xp) * mod.xp,
      onda: 0, ondaEstado: 'calma', calmaT: 20, proxOnda: 20, ondaT: 0, ondaDur: 0, ondaFila: 0, ondaSpawnT: 0, combo: 0, comboT: 0, melhorCombo: 0, aviso: 0, avisoTxt: '', fase: 1,
      hp: Math.max(3, 6 + of.casco + mod.vida), maxHp: Math.max(3, 6 + of.casco + mod.vida), armadura: of.armadura + mod.armadura, nivel: 1, xp: 0, xpProx: 5, kills: 0,
      dano: (1 + 0.25 * of.dano) * mod.dano, danoGlobal: 1, recargaGlobal: (1 + 0.08 * of.cadencia) * (1 + 0.12 * of.nucleo) * mod.recarga, cadencia: 2.6 * mod.cadencia, projeteis: Math.min(4, 1 + of.projetil + mod.projeteis), perfura: mod.perfura, velTiro: 160, critico: mod.critico,
      inimigos: [], tiros: [], tirosInimigos: [], campos: [], raios: [], rochas: [], itens: [], parts: [], ondas: [], textos: [],
      spawnAcc: 0, recarga: 0.3, invul: 0, mira: 0, tremor: 0, flash: 0, niveis: {},
      imaT: 0, turboT: 0, escudoT: 0, buffDanoT: 0, buffVelT: 0, buffXpT: 0, proxEstrela: 10 + Math.random() * 8,
      proxBuraco: 40 + Math.random() * 30, buraco: null, alien: null, mundoSalvo: null, aliensVencidos: 0, pendente: null,
      chefeIdx: Math.floor(Math.random() * CHEFES.length), alienIdx: Math.floor(Math.random() * ALIENS.length), chefe: null, chefesVencidos: 0, moedasRun: 0,
      skinBase: Math.floor(Math.random() * TEMAS.length), elencoRun, entradaRun, skinsRun,
      fundoBase: Math.floor(Math.random() * REGIOES.length),
      movendo: false, angNave: 0, giro: mod.giro, intro: null, invertidoT: 0, tintas: [], ultimaLenda: null, faseIntro: null, proxNativo: 14, tiers: null, upgFx: null,
      arma: 1, slots: [null, null, null],
      poderes: { laser: false, missil: false, orbes: false, turbo: false, cura: false, escudo: false, salto: false, drift: false },
      armasNivel: { normal: 1, laser: 0, missil: 0, orbes: 0, turbo: 0, cura: 0, escudo: 0, salto: 0, drift: 0 },
      laserMax: 2 + 0.5 * of.bateria, laserE: 2 + 0.5 * of.bateria, laserQuente: false, laserTick: 0, laserN: 0, laser: null,
      laserDano: 4.2 * (1 + 0.1 * of.lente), laserAlc: 66 * (1 + 0.1 * of.lente), recM: 1,
      missilT: 1, missilMax: 3.6, misseis: [], orbeAng: 0,
      boostE: 3, boostMax: 3, curaCd: 0, curaMax: 11, escudoCd: 0, escudoMax: 13, saltoCd: 0, saltoMax: 8, saltoCarga: 0, saltoCargaMax: 0.8, driftCd: 0, driftMax: 7, driftT: 0, driftAcc: 0, trilhasFogo: [], dirX: 0, dirY: -1,
      barreiraMax: (of.escudo > 0 ? 1 + (of.escudo >= 4 ? 1 : 0) : 0) + mod.escudo, barreira: (of.escudo > 0 ? 1 + (of.escudo >= 4 ? 1 : 0) : 0) + mod.escudo, barreiraT: 0, tempoBarreira: 45 - 6 * of.escudo,
    };
    anunciarFase();
    atualizarNaveSpr();
  }

  // ---------- criação de entidades ----------
  const tier = () => Math.max(1, S.onda); // novos tipos entram por onda: a progressão fica visível e previsível
  function sortearTipo() {
    const o = tier();
    const base = { slime: 10, inseto: 6, morcego: 6, atirador: 5.5, sentinela: 4.5, bombardeiro: 2.7, fulminante: 3.2, curandeiro: 2.4, ogro: 3.2, fantasma: 3.5, amplificador: 2.1 };
    let pesos = S.elencoRun.filter((tipo) => o >= S.entradaRun[tipo]).map((tipo) => [tipo, base[tipo] + Math.max(0, o - S.entradaRun[tipo]) * (tipo === 'atirador' || tipo === 'sentinela' ? 0.45 : 0.2)]);
    if (!pesos.length) pesos = [[S.elencoRun[0], 1]];
    return sorteio(pesos);
  }
  function criarInimigo(tipo, x, y) {
    const base = TIPOS[tipo], o = Math.max(0, tier() - 1);
    const hp = Math.max(1, Math.round(base.hp * (1 + (base.hp === 1 ? 0.1 : 0.15) * o) * (1 + S.t / 300))); // mais fortes e mais rápidos com o tempo
    const vel = base.vel * (0.9 + Math.random() * 0.3) * (1 + Math.min(0.8, 0.05 * o)) * (1 + Math.min(0.5, S.t / 600));
    const m = { tipo, x, y, hp, hpMax: hp, vel, fase: Math.random() * 6, piscar: 0, cd: 1 + Math.random() * 2, v: (S.skinsRun[tipo] ?? S.skinBase) + S.fase - 1, cdOrbe: 0, buffT: 0, suporteFx: 0 };
    S.inimigos.push(m);
    return m;
  }
  // Monstros surgem de TODOS os lados, sempre fora da tela, num anel em volta da nave.
  // angPref (opcional): direção para onde a nave está andando; os monstros "que já estavam lá" ficam mais à frente dela.
  function spawn(max = 99, angPref = null) {
    const tipo = sortearTipo();
    const grupo = 1 + Math.min(3, Math.floor(Math.max(0, S.onda - 1) / 3));
    const n = Math.max(1, Math.min(max, tipo === 'inseto' ? 1 + Math.floor(Math.random() * (grupo + 1)) : Math.round(grupo * (0.75 + Math.random() * 0.35))));
    const ang = angPref == null ? Math.random() * Math.PI * 2 : angPref + (Math.random() - 0.5) * 1.8;
    const r = RAIO_TELA + 30 + (Math.random() < 0.35 ? Math.random() * 230 : Math.random() * 60);
    const px = S.nx + Math.cos(ang) * r, py = S.ny + Math.sin(ang) * r;
    for (let i = 0; i < n; i++) criarInimigo(tipo, px + (Math.random() - 0.5) * 30, py + (Math.random() - 0.5) * 30);
    return n;
  }
  function semearMundo(quantos) { // o mundo já começa povoado: monstros espalhados em volta, que vão chegando
    for (let i = 0; i < quantos; i++) spawn(1);
  }
  function spawnPelotaoCanto(quantidade) {
    const cantos = [
      [S.cx - L / 2 - 16, S.cy - A / 2 - 16], [S.cx + L / 2 + 16, S.cy - A / 2 - 16],
      [S.cx - L / 2 - 16, S.cy + A / 2 + 16], [S.cx + L / 2 + 16, S.cy + A / 2 + 16],
    ];
    const [x, y] = cantos[Math.floor(Math.random() * cantos.length)];
    for (let i = 0; i < quantidade; i++) {
      criarInimigo(sortearTipo(), x + (Math.random() - 0.5) * 22, y + (Math.random() - 0.5) * 22);
    }
  }
  function particulas(x, y, n, cores, vel = 50) {
    if (S.parts.length > 400) return;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, v = (0.3 + Math.random()) * vel;
      S.parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, vida: 0.3 + Math.random() * 0.3, cor: cores[i % cores.length] });
    }
  }
  const texto = (x, y, txt, cor = '#ffffff') => S.textos.push({ x, y, txt, cor, vida: 1.1 });

  // A onda alimenta uma fila: pequenos pelotões entram pelos cantos, em vez de todos surgirem no mesmo frame.
  function iniciarOnda() {
    S.onda += 1;
    const novaFase = 1 + Math.floor((S.onda - 1) / 3); // a cada 3 ondas começa uma nova fase, com os monstros em outro tema
    const doChefe = S.onda % 5 === 0; // chefes são marcos, não uma interrupção a cada poucos segundos
    S.ondaDur = S.ondaT = 13 + Math.min(9, S.onda * 1.1);
    S.ondaFila = doChefe ? 5 + S.onda : Math.min(34, 6 + S.onda * 3); // 9, 12, 15... monstros, liberados aos poucos
    S.ondaSpawnT = 0.35;
    S.proxOnda = Math.max(25, 34 - Math.min(9, S.onda * 0.5)) + Math.random() * 4;
    S.ondaEstado = doChefe || S.chefe ? 'chefe' : 'ativa';
    S.tremor = 0.25;
    if (novaFase > S.fase) { S.fase = novaFase; anunciarFase(); }
    if (!doChefe) { mostrarAviso('!! ONDA DE MONSTROS !!', 2); bip(300, 0.1, 'square', 0.05); bip(450, 0.14, 'square', 0.05, 0.1); }
    if (doChefe && !S.chefe) criarChefeInimigo();
    if (!S.alien && !doChefe) spawnNativos(1 + (S.onda % 2));
  }
  function terminarOnda() { if (!S.chefe) S.ondaEstado = S.ondaT > 0 ? 'ativa' : 'calma'; }

  function atirar(alvo) {
    const a = Math.atan2(alvo.y - S.ny, alvo.x - S.nx);
    S.mira = a;
    const nivel = S.armasNivel.normal;
    const n = S.projeteis, passo = 0.16;
    for (let i = 0; i < n; i++) {
      const ang = a + (i - (n - 1) / 2) * passo;
      const vel = S.velTiro * (1 + 0.12 * (nivel - 1));
      const critico = Math.random() < S.critico;
      S.tiros.push({ x: S.nx + Math.cos(ang) * 7, y: S.ny + Math.sin(ang) * 7, vx: Math.cos(ang) * vel, vy: Math.sin(ang) * vel, dano: S.dano * S.danoGlobal * (1 + 0.28 * (nivel - 1)) * (critico ? 2 : 1), perf: S.perfura, critico, acertou: new Set() });
    }
    bip(520 + Math.random() * 60, 0.04, 'square', 0.012);
  }
  const danoTempo = () => 1 + Math.floor(S.t / 420); // os tiros inimigos ferem mais com o tempo
  // tudo o que as criaturas lendárias podem fazer no jogo (ver src/lendas/)
  const ctxLenda = {
    get S() { return S; }, L, A,
    tiro: (x, y, ang, vel, o = {}) => S.tirosInimigos.push({ x, y, vx: Math.cos(ang) * vel, vy: Math.sin(ang) * vel, dano: o.dano ?? danoTempo(), vida: o.vida ?? 7, r: o.r, cor: o.cor, forma: o.forma, giro: o.giro }),
    campo: (x, y, r, aviso, vida, o = {}) => S.campos.push({ x, y, r, aviso, avisoMax: aviso, vida, tick: 0, ...o }),
    onda: (x, y, max, cor, v = 120) => S.ondas.push({ x, y, r: 0, max, v, cor }),
    particulas, texto, bip,
    tremor: (n) => { S.tremor = Math.max(S.tremor, n); }, flash: (n) => { S.flash = Math.max(S.flash, n); },
    ferir: (d) => ferirNave(d),
    puxar: (x, y, forca, dt) => { const dx = x - S.nx, dy = y - S.ny, d = Math.hypot(dx, dy) || 1; S.nx += (dx / d) * forca * dt; S.ny += (dy / d) * forca * dt; },
    invocar: (tipo, x, y) => criarInimigo(tipo, x, y),
    lento: (m) => obstaculos.fatorLento(m.x, m.y),
    cristal: (x, y, v) => soltarCristal(x, y, v),
    raio: (r) => S.raios.push(r),
    invertido: (seg) => { S.invertidoT = Math.max(S.invertidoT || 0, seg); },
    tinta: (x, y, r, vida) => S.tintas.push({ x, y, r, vida, vidaMax: vida }),
  };
  function atirarInimigo(x, y, ang, vel, dano = danoTempo()) {
    S.tirosInimigos.push({ x, y, vx: Math.cos(ang) * vel, vy: Math.sin(ang) * vel, dano, vida: 7 });
  }
  // tiro com cara e comportamento próprios: forma/cor/r, ex+n (estoura em n tiros), quica (rebate nas paredes), fica+vRe (congela e depois mira na nave)
  function tiroEsp(x, y, ang, vel, op = {}) {
    S.tirosInimigos.push({ x, y, vx: Math.cos(ang) * vel, vy: Math.sin(ang) * vel, dano: danoTempo(), vida: 7, ...op });
  }

  function soltarCristal(x, y, v) {
    const ang = Math.random() * Math.PI * 2, vel = 16 + Math.random() * 22;
    const novo = { x, y, v, vx: Math.cos(ang) * vel, vy: Math.sin(ang) * vel, fase: Math.random() * 6 };
    S.cristais.push(novo);
    if (S.cristais.length > 220) novo.v += S.cristais.shift().v;
  }

  function ferirNave(dano) {
    if (S.invul > 0 || S.escudoT > 0) return false;
    if (S.barreira > 0) { S.barreira -= 1; S.invul = 0.7; S.ondas.push({ x: S.nx, y: S.ny, r: 0, max: 28, v: 90, cor: '#7dff9a' }); texto(S.nx, S.ny - 12, 'BLOQUEOU', '#7dff9a'); bip(660, 0.12, 'triangle', 0.05); return true; }
    const reducao = Math.min(0.5, S.armadura * 0.06);
    const danoFinal = Math.max(0.25, dano * (1 - reducao));
    S.hp = Math.max(0, S.hp - danoFinal); S.invul = 0.7; S.tremor = 0.2;
    if (S.combo >= 3) texto(S.nx, S.ny - 14, 'COMBO PERDIDO', '#ff7a8a');
    S.combo = 0; S.comboT = 0;
    bip(110, 0.18, 'sawtooth', 0.05);
    return true;
  }

  function danificar(m, dano) {
    if (m.sumido > 0 || m.morto) return;
    m.hp -= dano; m.piscar = 0.08;
    if (m.hp > 0) somAcerto(m);
    if (m.hp <= 0) { if (m.lenda?.aoMorrer?.(m, ctxLenda)) return; m.morto = true; matar(m); }
  }
  function matar(m) {
    if (m.tipo === 'chefe') { matarChefe(m); return; }
    if (m.tipo === 'nativo') { matarNativo(m); return; }
    if (m.tipo === 'alien') { S.pendente = 'vitoria'; particulas(m.x, m.y, 40, ['#7ad8a0', '#ff3bd4', '#ffffff', '#ffd23f'], 110); S.flash = 0.35; return; }
    const tp = TIPOS[m.tipo];
    S.kills += 1;
    if (!S.alien) {
      S.combo += 1; S.comboT = 1.8; S.melhorCombo = Math.max(S.melhorCombo, S.combo);
      if ([10, 25, 50, 100].includes(S.combo)) { texto(S.nx, S.ny - 22, `COMBO x${S.combo}!`, '#ffe14a'); bip(700 + S.combo * 4, 0.08, 'square', 0.04); bip(900 + S.combo * 4, 0.1, 'square', 0.04, 0.08); }
    }
    soltarCristal(m.x, m.y, tp.xp);
    particulas(m.x, m.y, 8, ['#ffe14a', '#ffffff', '#ff7a59'], 60);
    somMorte(m.tipo);
    const chanceMoeda = { slime: 0.012, inseto: 0.01, morcego: 0.03, fantasma: 0.05, atirador: 0.08, sentinela: 0.09, bombardeiro: 0.13, fulminante: 0.11, curandeiro: 0.11, amplificador: 0.12, ogro: 0.12 }[m.tipo] || 0;
    if (Math.random() < chanceMoeda) { S.itens.push({ tipo: 'moedaEsp', x: m.x, y: m.y, vida: 40, fase: Math.random() * 6 }); texto(m.x, m.y - 8, '◆', '#6fe8ff'); }
    const i = S.inimigos.indexOf(m); if (i >= 0) S.inimigos.splice(i, 1);
  }

  // ---------- rochas e itens ----------
  function criarRocha() {
    const ang = Math.random() * Math.PI * 2, d = RAIO_TELA + 45 + Math.random() * 120, tam = Math.floor(Math.random() * 3);
    const hp = [4, 6, 9][tam];
    S.rochas.push({ x: S.nx + Math.cos(ang) * d, y: S.ny + Math.sin(ang) * d, vx: (Math.random() - 0.5) * 8, vy: (Math.random() - 0.5) * 8, tam, r: [8, 10, 13][tam], hp, hpMax: hp, piscar: 0 });
  }
  function batidaRocha(r) {
    r.hp -= 1; r.piscar = 0.08;
    particulas(r.x, r.y, 3, ['#9aa0ad', '#5a606c'], 40);
    bip(150, 0.04, 'square', 0.03);
    if (r.hp <= 0) quebrarRocha(r);
  }
  function quebrarRocha(r) {
    particulas(r.x, r.y, 16, ['#9aa0ad', '#5a606c', '#cfd6e0'], 70);
    bip(100, 0.15, 'sawtooth', 0.04);
    const i = S.rochas.indexOf(r); if (i >= 0) S.rochas.splice(i, 1);
    if (Math.random() < 0.9) S.itens.push({ tipo: sorteio(PESOS_ITENS), x: r.x, y: r.y, vida: 16, fase: Math.random() * 6 });
    else soltarCristal(r.x, r.y, 3);
  }
  function coletarItem(it) {
    const t = it.tipo;
    if (t === 'ima') { S.imaT = 3; texto(S.nx, S.ny - 12, 'ÍMÃ!', '#8be6ff'); } // o ímã puxa os cristais por 3 segundos
    else if (t === 'explosao') { explosaoGlobal(); texto(S.nx, S.ny - 12, 'BOOM!', '#ffd23f'); }
    else if (t === 'coracao') { S.hp = Math.min(S.maxHp, S.hp + 2); texto(S.nx, S.ny - 12, '+VIDA', '#ff7a8a'); }
    else if (t === 'escudo') { S.escudoT = 6; texto(S.nx, S.ny - 12, 'ESCUDO!', '#8bd3ff'); }
    else if (t === 'turbo') { S.turboT = 8; texto(S.nx, S.ny - 12, 'TURBO!', '#ffe14a'); }
    else if (ESTRELAS[t]) {
      const e = ESTRELAS[t];
      if (t === 'estrelaVermelha') { if (S.buffDanoT <= 0) S.danoGlobal *= 1.5; S.buffDanoT = e.tempo; }
      else if (t === 'estrelaAmarela') S.buffVelT = e.tempo;
      else if (t === 'estrelaAzul') S.escudoT = Math.max(S.escudoT, e.tempo);
      else if (t === 'estrelaRoxa') S.buffXpT = e.tempo;
      texto(S.nx, S.ny - 12, e.nome, e.cor); particulas(S.nx, S.ny, 14, [e.cor, '#ffffff'], 70); S.ondas.push({ x: S.nx, y: S.ny, r: 0, max: 40, v: 110, cor: e.cor });
      bip(660, 0.08, 'triangle', 0.05); bip(990, 0.1, 'triangle', 0.05, 0.08); bip(1320, 0.14, 'triangle', 0.05, 0.16);
    }
    else if (t === 'moedaEsp') { dados.moedas += 1; S.moedasRun += 1; salvarDados(); texto(S.nx, S.ny - 12, '+1 MOEDA', '#6fe8ff'); }
    bip(880, 0.06, 'square', 0.04); bip(1175, 0.08, 'square', 0.04, 0.06);
  }
  function explosaoGlobal() {
    S.flash = 0.28; S.tremor = 0.35;
    S.ondas.push({ x: S.nx, y: S.ny, r: 0, max: 210, v: 420, cor: '#ffd23f' });
    const dmg = 8 + S.dano * 3;
    for (const m of [...S.inimigos]) {
      if (!naTela(m)) continue;
      danificar(m, m.tipo === 'chefe' || m.tipo === 'alien' ? 14 : dmg);
      particulas(m.x, m.y, 4, ['#ffd23f', '#ff7a3a'], 60);
    }
    S.tirosInimigos = S.tirosInimigos.filter((b) => !naTela(b));
    bip(90, 0.4, 'sawtooth', 0.07); bip(60, 0.5, 'sawtooth', 0.07, 0.1);
  }

  function lancarBombas(ox, oy, n, aviso = 1.4) { // cada bomba cai num ponto: a primeira em cima da nave, as outras espalhadas em volta
    for (let i = 0; i < n; i++) {
      const ang = Math.random() * Math.PI * 2, d = i === 0 ? Math.random() * 14 : 28 + Math.random() * 55;
      let x = S.nx + Math.cos(ang) * d, y = S.ny + Math.sin(ang) * d;
      if (S.alien) { x = Math.max(ARENA.x0 + 10, Math.min(ARENA.x1 - 10, x)); y = Math.max(ARENA.y0 + 10, Math.min(ARENA.y1 - 10, y)); }
      S.campos.push({ x, y, r: 26, aviso: aviso + i * 0.15, avisoMax: aviso + i * 0.15, vida: 4, tick: 0, ox, oy });
    }
    bip(200, 0.1, 'square', 0.04); bip(160, 0.1, 'square', 0.04, 0.1);
  }

  // ---------- chefão ----------
  // ---------- fases: anúncio e nativos (monstros únicos de cada lugar) ----------
  function anunciarFase() {
    const f = faseDe(S.fase), nat = NATIVOS[f.nativo];
    S.faseIntro = { numero: f.numero, nome: f.nome, sub: f.sub, cor: f.cor, nativo: nat.nome, dica: nat.dica, volta: f.volta, t: 0, dur: 4.6 };
    if (S.fase > dados.fasesVistas) { dados.fasesVistas = S.fase; salvarDados(); }
    if (S.fase > 1) { bip(392, 0.12, 'triangle', 0.05); bip(523, 0.12, 'triangle', 0.05, 0.12); bip(784, 0.3, 'triangle', 0.05, 0.24); S.flash = Math.max(S.flash, 0.25); }
  }
  function criarNativo(id) {
    const nat = NATIVOS[id], f = faseDe(S.fase), forca = 1 + 0.12 * (S.fase - 1) + (f.volta || 0) * 0.35;
    const a = Math.random() * Math.PI * 2, r = RAIO_TELA + 30 + Math.random() * 40, hp = Math.max(4, Math.round(nat.hp * forca * (1 + S.t / 400)));
    const m = { tipo: 'nativo', nat, x: S.nx + Math.cos(a) * r, y: S.ny + Math.sin(a) * r, hp, hpMax: hp, vel: nat.vel * (1 + Math.min(0.35, S.t / 900)), raio: nat.raio, xp: nat.xp, piscar: 0, fase: Math.random() * 6, v: 0, cd: 1, tl: 0, sumido: 0, buffT: 0, suporteFx: 0, olhar: 0 };
    S.inimigos.push(m);
    const reg = (dados.nativos[id] ??= { visto: 0, vencido: 0 }); if (reg.visto === 0) { texto(S.nx, S.ny - 24, `NATIVO: ${nat.nome}`, nat.cor); salvarDados(); }
    reg.visto += 1;
    return m;
  }
  function spawnNativos(qtd) {
    const id = faseDe(S.fase).nativo, vivos = S.inimigos.filter((m) => m.tipo === 'nativo').length, max = Math.min(3, 1 + Math.floor(S.fase / 3));
    for (let i = 0; i < qtd && vivos + i < max; i++) criarNativo(id);
  }
  function matarNativo(m) {
    S.kills += 1;
    if (!S.alien) { S.combo += 1; S.comboT = 1.8; S.melhorCombo = Math.max(S.melhorCombo, S.combo); }
    const n = 3 + Math.min(3, Math.floor(S.fase / 3)); for (let k = 0; k < n; k++) soltarCristal(m.x, m.y, Math.max(1, Math.round(m.xp / n)));
    particulas(m.x, m.y, 16, [m.nat.cor, '#ffffff', '#ffe14a'], 80);
    bip(200, 0.12, 'triangle', 0.05); bip(150, 0.16, 'triangle', 0.05, 0.08);
    if (Math.random() < 0.3) { S.itens.push({ tipo: 'moedaEsp', x: m.x, y: m.y, vida: 40, fase: Math.random() * 6 }); texto(m.x, m.y - 10, '◆', '#6fe8ff'); }
    m.nat.morrer?.(m, ctxLenda);
    const reg = (dados.nativos[m.nat.id.replace('nat-', '')] ??= { visto: 1, vencido: 0 }); if (reg.vencido === 0) { texto(m.x, m.y - 22, 'NATIVO CATALOGADO!', '#ffe14a'); } reg.vencido += 1; salvarDados();
    const i = S.inimigos.indexOf(m); if (i >= 0) S.inimigos.splice(i, 1);
  }
  function desenharNativo(m) {
    const cv = renderizarLenda(m.nat, m, S.ta, m.piscar > 0), x = Math.round(m.x), y = Math.round(m.y);
    g.save(); g.globalAlpha = 0.3 + 0.14 * Math.sin(S.ta * 4 + m.fase); g.strokeStyle = m.nat.cor; g.lineWidth = 1; g.beginPath(); g.arc(x, y, m.raio + 5 + Math.sin(S.ta * 3 + m.fase), 0, Math.PI * 2); g.stroke(); g.restore();
    g.globalAlpha = m.sumido > 0 ? 0.35 : 1; g.drawImage(cv, Math.round(m.x - cv.width / 2), Math.round(m.y - cv.height / 2)); g.globalAlpha = 1;
    if (m.hp < m.hpMax) barra(x - 9, Math.round(m.y - m.raio - 9), 18, m.hp / m.hpMax, m.nat.cor);
  }
  function desenharAnuncioFase() {
    const i = S.faseIntro, entra = Math.min(1, i.t / 0.4), sai = Math.min(1, (i.dur - i.t) / 0.7), a = Math.max(0, Math.min(entra, sai)), dy = (1 - Math.min(1, i.t / 0.5)) * -16;
    g.save(); g.globalAlpha = a;
    g.fillStyle = 'rgba(4, 2, 14, 0.62)'; g.fillRect(CX - 170, 16 + dy, 340, 66); g.fillStyle = i.cor; g.fillRect(CX - 170, 16 + dy, 340, 1); g.fillRect(CX - 170, 81 + dy, 340, 1);
    g.restore();
    escrever(`FASE ${i.numero}${i.volta ? ` · VOLTA ${i.volta + 1}` : ''}`, CX, 29 + dy, i.cor, 9, 'center', a);
    escrever(i.nome, CX, 47 + dy, '#ffffff', 17, 'center', a, 320);
    escrever(i.sub.toUpperCase(), CX, 60 + dy, '#c9d4ff', 9, 'center', a, 320);
    escrever(`NATIVO: ${i.nativo} · ${i.dica}`, CX, 74 + dy, '#ffe14a', 9, 'center', a, 320);
  }

  // escolhe uma lenda: só as que já estão liberadas pelas vitórias, com preferência pelas que você nunca viu
  function sortearLenda() {
    const vit = dados.chefesDerrotados + S.chefesVencidos;
    const livres = LENDAS.filter((l) => vit >= l.vitorias && l.id !== S.ultimaLenda);
    if (!livres.length) return null;
    const chance = Math.min(0.8, 0.5 + 0.12 * S.chefesVencidos + Math.min(0.15, dados.chefesDerrotados * 0.03));
    if (Math.random() > chance) return null;
    const pesos = livres.map((l) => (dados.bestiario[l.id]?.visto ? 1 : 3));
    let r = Math.random() * pesos.reduce((s, p) => s + p, 0);
    for (let i = 0; i < livres.length; i++) { r -= pesos[i]; if (r <= 0) return livres[i]; }
    return livres[0];
  }
  function criarLenda(lenda) {
    const lado = Math.random() < 0.5 ? -1 : 1;
    const hp = Math.round(150 * lenda.hpMult * (1 + (S.fase - 1) * 0.4 + S.chefesVencidos * 0.35) * (1 + S.t / 300));
    const c = { tipo: 'chefe', lenda, raio: lenda.raio, x: S.cx + lado * (L / 2 + 70), y: S.cy - 25, hp, hpMax: hp, vel: 30, fase: 0, piscar: 0, v: 0, b: 0, entrada: 2.8, sumido: 2.8, cd: 1.2, acao: null, ang: lado > 0 ? Math.PI : 0, enfurecido: false };
    lenda.criar?.(c);
    S.inimigos.push(c); S.chefe = c; S.ultimaLenda = lenda.id;
    const reg = (dados.bestiario[lenda.id] ??= { visto: 0, vencido: 0 }), novo = reg.visto === 0;
    reg.visto += 1; salvarDados(); atualizarBotaoBestiario();
    S.intro = { nome: lenda.nome, titulo: lenda.titulo, cor: lenda.cor, novo, t: 0, dur: novo ? 3.8 : 2.8 };
    trocarFaixa('chefe');
    S.tremor = 0.6;
    bip(70, 0.7, 'sawtooth', 0.07); bip(52, 0.9, 'sawtooth', 0.07, 0.35); bip(95, 0.5, 'square', 0.04, 0.9);
  }
  function criarChefeInimigo() {
    const lenda = sortearLenda();
    if (lenda) { criarLenda(lenda); return; }
    S.chefeIdx = (S.chefeIdx + 1 + Math.floor(Math.random() * (CHEFES.length - 1))) % CHEFES.length; // nave diferente a cada chefão
    const lado = Math.random() < 0.5 ? -1 : 1;
    const hp = Math.round(150 * (1 + (S.fase - 1) * 0.4 + S.chefesVencidos * 0.35) * (1 + S.t / 300));
    const kit = embaralhar(['raios', 'investida', 'drift', 'minhoca']).slice(0, 2);
    const c = { tipo: 'chefe', x: S.cx + lado * (L / 2 + 40), y: S.cy - 30, hp, hpMax: hp, vel: 30, fase: 0, piscar: 0, v: S.fase - 1 + S.skinBase, b: S.chefeIdx, cdRajada: 2.2, cdMira: 1.6, cdBomba: 4, cdEsp: 3.8, esp: null, movEsp: null, kit, rot: 0 };
    S.inimigos.push(c); S.chefe = c;
    trocarFaixa('chefe');
    mostrarAviso(`${CHEFES[S.chefeIdx].nome} DETECTOU VOCÊ!`, 3);
    bip(90, 0.4, 'sawtooth', 0.06); bip(70, 0.5, 'sawtooth', 0.06, 0.3);
  }
  function moverChefe(c, dt) {
    const dx = S.nx - c.x, dy = S.ny - c.y, d = Math.hypot(dx, dy) || 1;
    c.fase += dt;
    if (c.movEsp) {
      const e = c.movEsp;
      if (e.carga > 0) {
        e.carga -= dt; c.piscar = Math.max(c.piscar, 0.04);
        if (e.carga <= 0) {
          if (e.tipo === 'minhoca') {
            const ox = c.x, oy = c.y, a = Math.random() * Math.PI * 2, dist = 58 + Math.random() * 24;
            c.x = S.nx + Math.cos(a) * dist; c.y = S.ny + Math.sin(a) * dist;
            S.ondas.push({ x: ox, y: oy, r: 0, max: 32, v: 130, cor: '#a56bff' }); S.ondas.push({ x: c.x, y: c.y, r: 0, max: 32, v: 130, cor: '#ff3b4a' });
            particulas(ox, oy, 18, ['#a56bff', '#070a1a', '#ffffff'], 90); particulas(c.x, c.y, 18, ['#ff3b4a', '#070a1a', '#ffffff'], 90); S.tremor = 0.28; c.movEsp = null;
          } else e.ativo = e.tipo === 'drift' ? 1.15 : 0.72;
        }
      } else if (e.ativo > 0) {
        const velocidade = e.tipo === 'drift' ? 175 : 235;
        c.x += e.dx * velocidade * dt; c.y += e.dy * velocidade * dt; e.ativo -= dt; e.acc -= dt;
        particulas(c.x - e.dx * 15, c.y - e.dy * 15, e.tipo === 'drift' ? 2 : 1, e.tipo === 'drift' ? ['#ff3b4a', '#ff7a3a', '#ffe14a'] : ['#ff3b4a', '#ffffff'], 45);
        if (e.tipo === 'drift' && e.acc <= 0) { e.acc = 0.16; S.campos.push({ x: c.x - e.dx * 12, y: c.y - e.dy * 12, r: 14, aviso: 0, avisoMax: 0, vida: 1.5, tick: 0 }); }
        if (e.ativo <= 0) c.movEsp = null;
      }
      if (c.movEsp) return;
    }
    const px = -dy / d, py = dx / d, lado = Math.sin(S.ta * 0.8) * 0.3; // persegue a nave sem parar, balançando de lado
    const vel = c.vel + S.fase * 3 + Math.min(45, S.t / 10); // fica mais rápido com o tempo
    c.x += ((dx / d) + px * lado) * vel * dt;
    c.y += ((dy / d) + py * lado) * vel * dt;
    if (d > 300) return; // só ataca quando está perto
    const pressa = 1 + Math.min(1, S.t / 400); // e ataca com menos descanso
    c.cdRajada -= dt * pressa; c.cdMira -= dt * pressa; c.cdBomba -= dt * pressa;
    if (c.cdRajada <= 0) { // tiros em todas as direções
      const n = 12 + Math.min(8, S.fase * 2);
      for (let i = 0; i < n; i++) atirarInimigo(c.x, c.y, c.rot + (i * Math.PI * 2) / n, 55);
      c.rot += 0.27; c.cdRajada = Math.max(1.8, 3.2 - S.fase * 0.15);
      bip(180, 0.12, 'square', 0.04);
    }
    if (c.cdMira <= 0) { // leque apontado para a nave
      const a = Math.atan2(dy, dx), n = 3 + Math.min(2, S.fase - 1);
      for (let i = 0; i < n; i++) atirarInimigo(c.x, c.y, a + (i - (n - 1) / 2) * 0.2, 90);
      c.cdMira = 1.7;
    }
    if (c.cdBomba <= 0) { // lança de 1 a 3 bombas de uma vez
      const n = 1 + (Math.random() < 0.5 ? 1 : 0) + (S.fase >= 2 && Math.random() < 0.4 ? 1 : 0);
      lancarBombas(c.x, c.y, n);
      c.cdBomba = Math.max(3, 4.6 - S.fase * 0.2);
    }
    // poderes extras que o chefão aprende com o tempo de partida
    const aprendidos = ESPECIAIS_CHEFE.filter((e) => e.assinatura ? c.kit.includes(e.id) : S.t >= e.t);
    if (c.esp) {
      const e = c.esp; e.t -= dt; e.acc -= dt;
      if (e.tipo === 'espiral' && e.acc <= 0) { e.acc = 0.09; e.ang += 0.4; for (let k = 0; k < 2; k++) atirarInimigo(c.x, c.y, e.ang + k * Math.PI, 62); }
      else if (e.tipo === 'aneis' && e.acc <= 0) { e.acc = 0.5; const gap = Math.random() * Math.PI * 2; for (let i = 0; i < 24; i++) { const an = (i * Math.PI * 2) / 24; if (Math.abs(Math.atan2(Math.sin(an - gap), Math.cos(an - gap))) > 0.45) atirarInimigo(c.x, c.y, an, 58); } }
      if (e.t <= 0) c.esp = null;
    } else if (aprendidos.length) {
      c.cdEsp -= dt * pressa;
      if (c.cdEsp <= 0) {
        const e = aprendidos[Math.floor(Math.random() * aprendidos.length)];
        texto(c.x, c.y - 28, e.nome, '#ff7ab8');
        if (e.id === 'espiral') c.esp = { tipo: 'espiral', t: 2.2, acc: 0, ang: Math.random() * 6 };
        else if (e.id === 'aneis') c.esp = { tipo: 'aneis', t: 1.6, acc: 0 };
        else if (e.id === 'raios') { const a0 = Math.atan2(dy, dx), n = 3 + Math.min(2, aprendidos.length - 2); for (let i = 0; i < n; i++) S.raios.push({ x: c.x, y: c.y, ang: a0 + (i - (n - 1) / 2) * 0.35, aviso: 1, vida: 0.5, tick: 0, ligou: false }); }
        else if (e.id === 'investida' || e.id === 'drift') c.movEsp = { tipo: e.id, carga: e.id === 'drift' ? 0.7 : 0.5, ativo: 0, dx: dx / d, dy: dy / d, acc: 0 };
        else if (e.id === 'minhoca') c.movEsp = { tipo: 'minhoca', carga: 0.72, ativo: 0, dx: 0, dy: 0, acc: 0 };
        else if (e.id === 'invocar') { for (let i = 0; i < 4; i++) criarInimigo(sortearTipo(), c.x + (i - 1.5) * 12, c.y + 22); bip(300, 0.2, 'triangle', 0.05); }
        c.cdEsp = Math.max(3.5, 7.5 - S.t / 100);
      }
    }
  }
  const ESPECIAIS_CHEFE = [
    { id: 'raios', nome: 'TEMPESTADE', assinatura: true }, { id: 'investida', nome: 'IMPACTO', assinatura: true },
    { id: 'drift', nome: 'DRIFT INFERNAL', assinatura: true }, { id: 'minhoca', nome: 'RUPTURA', assinatura: true },
    { id: 'espiral', nome: 'ESPIRAL', t: 120 }, { id: 'aneis', nome: 'ANÉIS', t: 210 }, { id: 'invocar', nome: 'INVOCAR', t: 330 },
  ];
  function matarChefe(c) {
    S.kills += 5;
    S.chefe = null; S.chefesVencidos += 1; dados.chefesDerrotados += 1;
    if (c.lenda) { // criatura lendária: entra no bestiário e rende um bônus na primeira vez
      const reg = (dados.bestiario[c.lenda.id] ??= { visto: 1, vencido: 0 }), primeira = reg.vencido === 0;
      reg.vencido += 1;
      if (primeira) { for (let k = 0; k < 8; k++) S.itens.push({ tipo: 'moedaEsp', x: c.x + (Math.random() - 0.5) * 60, y: c.y + (Math.random() - 0.5) * 40, vida: 60, fase: Math.random() * 6 }); texto(c.x, c.y - 30, 'CRIATURA CATALOGADA!', '#ffe14a'); }
      S.tintas = []; S.invertidoT = 0;
      salvarDados();
    }
    trocarFaixa('normal');
    const i = S.inimigos.indexOf(c); if (i >= 0) S.inimigos.splice(i, 1);
    particulas(c.x, c.y, 50, ['#ffd23f', '#ff7a3a', '#ffffff', '#ff3b4a'], 130);
    S.flash = 0.3; S.tremor = 0.5;
    const n = 4 + Math.min(4, S.chefesVencidos); // moedas espaciais
    for (let k = 0; k < n; k++) S.itens.push({ tipo: 'moedaEsp', x: c.x + (Math.random() - 0.5) * 46, y: c.y + (Math.random() - 0.5) * 30, vida: 60, fase: Math.random() * 6 });
    for (let k = 0; k < 6; k++) soltarCristal(c.x, c.y, 6);
    S.tirosInimigos = []; S.campos = [];
    if (S.ondaEstado === 'chefe') terminarOnda();
    mostrarAviso(c.lenda ? `${c.lenda.nome} DERROTADO!` : 'CHEFÃO DERROTADO!', 2.6);
    bip(220, 0.3, 'triangle', 0.06); bip(330, 0.3, 'triangle', 0.06, 0.2); bip(440, 0.4, 'triangle', 0.06, 0.4);
  }

  // ---------- buraco negro e alienígena ----------
  function criarBuraco() {
    const ang = Math.random() * Math.PI * 2, d = 140 + Math.random() * 60;
    S.buraco = { x: S.nx + Math.cos(ang) * d, y: S.ny + Math.sin(ang) * d, vida: 28, r: 22 };
    mostrarAviso('BURACO NEGRO!', 2.4);
    bip(70, 0.5, 'sine', 0.07); bip(55, 0.6, 'sine', 0.07, 0.3);
  }
  function atualizarBuraco(dt) {
    const b = S.buraco;
    b.vida -= dt;
    const dx = b.x - S.nx, dy = b.y - S.ny, d = Math.hypot(dx, dy) || 1;
    if (d < 70) { const puxa = 38 * (1 - d / 70); S.nx += (dx / d) * puxa * dt; S.ny += (dy / d) * puxa * dt; } // a gravidade puxa a nave
    if (d < 9) { entrarBuraco(); return; }
    if (b.vida <= 0) { S.buraco = null; S.proxBuraco = S.t + 50 + Math.random() * 40; }
  }
  // escolhe o alienígena do buraco: os novos vão aparecendo conforme você derrota (ou só encontra) alienígenas, e os que você nunca viu têm preferência
  function sortearAlien() {
    const progresso = progressoAlien();
    const livres = ALIENS.map((a, i) => i).filter((i) => ALIENS[i].desde <= progresso && i !== S.alienIdx);
    const pesos = livres.map((i) => (dados.aliens[ALIENS[i].nome]?.visto ? 1 : 3));
    let r = Math.random() * pesos.reduce((s, p) => s + p, 0);
    for (let k = 0; k < livres.length; k++) { r -= pesos[k]; if (r <= 0) return livres[k]; }
    return livres[0] ?? 0;
  }
  function entrarBuraco(forcado) {
    trocarFaixa('chefe'); // o alienígena também tem a música de chefão
    S.alienIdx = forcado ?? sortearAlien();
    S.mundoSalvo = { nx: S.nx, ny: S.ny, cx: S.cx, cy: S.cy, inimigos: S.inimigos, tirosInimigos: S.tirosInimigos, campos: S.campos, hp: S.hp, buraco: S.buraco, chefe: S.chefe };
    const hpAlien = Math.round(95 * (1 + S.aliensVencidos * 0.6 + (S.fase - 1) * 0.25) * (1 + S.t / 300));
    const al = { tipo: 'alien', x: CX, y: 50, hp: hpAlien, hpMax: hpAlien, piscar: 0, fase: 0, v: S.alienIdx, cd: 1.7, estado: 'espera', carga: 0, ataque: '', salvas: 0, cdSalva: 0, sumido: 0, ta: 0, combo: 0, modo: 'investida', dashMax: 0.75, padrao: null,
      vx: 0, vy: 0, orbita: Math.random() < 0.5 ? -1 : 1, mudaOrbita: 2 + Math.random() * 2, memoria: [], plano: [], leituraT: 0 };
    S.hp = S.maxHp; S.invul = 1; // dentro do buraco negro a nave luta com a vida cheia
    S.inimigos = [al]; S.tirosInimigos = []; S.campos = []; S.raios = []; S.tiros = []; S.misseis = []; S.chefe = null;
    S.alien = al; S.nx = CX; S.ny = A - 40; S.cx = CX; S.cy = CY;
    const def = ALIENS[S.alienIdx], reg = (dados.aliens[def.nome] ??= { visto: 0, vencido: 0 }), novo = reg.visto === 0;
    reg.visto += 1; salvarDados(); atualizarBotaoBestiario();
    al.surgir = TEMPO_SURGIR; al.cd = novo ? 3.6 : 2.6; // ele se materializa e a faixa de apresentação aparece antes do primeiro ataque
    S.intro = { nome: def.nome, titulo: def.titulo, cor: def.cor, novo, meio: true, t: 0, dur: novo ? 3.4 : 2.4 };
    S.flash = 0.5; S.tremor = 0.35;
    bip(60, 0.6, 'sawtooth', 0.07); bip(90, 0.5, 'sawtooth', 0.05, 0.3);
  }
  function sairDoBuraco(vitoria) {
    const m = S.mundoSalvo;
    S.nx = m.nx; S.ny = m.ny; S.cx = m.cx; S.cy = m.cy;
    S.inimigos = m.inimigos; S.tirosInimigos = m.tirosInimigos; S.campos = m.campos; S.chefe = m.chefe;
    S.hp = m.hp; S.tiros = []; S.raios = []; S.misseis = []; S.alien = null; S.mundoSalvo = null; S.buraco = null;
    trocarFaixa(S.chefe ? 'chefe' : 'normal');
    S.invul = 2; S.proxBuraco = S.t + 60 + Math.random() * 40; S.flash = 0.4;
    if (vitoria) {
      S.aliensVencidos += 1; dados.aliensDerrotados += 1;
      const regAl = (dados.aliens[ALIENS[S.alienIdx].nome] ??= { visto: 1, vencido: 0 }); regAl.vencido += 1; salvarDados(); atualizarBotaoBestiario();
      S.imaT = Math.max(S.imaT, 3); texto(S.nx, S.ny - 12, 'ÍMÃ!', '#8be6ff'); // derrotar um alienígena dá o ímã: puxa todos os cristais
      for (let k = 0; k < 6; k++) soltarCristal(S.nx + (Math.random() - 0.5) * 40, S.ny + (Math.random() - 0.5) * 40, 6);
      const livres = Object.keys(NOMES_PODER).filter((id) => !S.poderes[id]);
      if (livres.length && S.slots.includes(null)) darPoder(S, livres[Math.floor(Math.random() * livres.length)]);
      else {
        const evoluiveis = Object.keys(S.armasNivel).filter((id) => S.armasNivel[id] > 0 && S.armasNivel[id] < 4);
        if (evoluiveis.length) { const id = evoluiveis[Math.floor(Math.random() * evoluiveis.length)]; S.armasNivel[id] += 1; mostrarAviso(`${ARMAS[id].nome} EVOLUIU PARA N${S.armasNivel[id]}!`, 3.2); }
        else { S.hp = S.maxHp; mostrarAviso('ALIENÍGENA DERROTADO!', 3); }
      }
      bip(523, 0.12, 'triangle', 0.06); bip(659, 0.12, 'triangle', 0.06, 0.12); bip(784, 0.12, 'triangle', 0.06, 0.24); bip(1047, 0.3, 'triangle', 0.06, 0.36);
    } else {
      mostrarAviso('EXPULSO DO BURACO NEGRO', 2.8);
      bip(120, 0.3, 'sawtooth', 0.05);
    }
  }
  const NOMES_ATAQUE = { rajada: 'RAJADA', mira: 'MIRA', teleporte: 'TELEPORTE', invocar: 'INVOCAR', investida: 'INVESTIDA', raio: 'RAIO', bombas: 'BOMBAS', espiral: 'ESPIRAL', chuva: 'CHUVA', varredura: 'VARREDURA', aneis: 'ANÉIS', cerco: 'CERCO', tentaculos: 'TENTÁCULOS', olhar: 'OLHAR', psiquico: 'PSÍQUICO', foice: 'FOICE', corte: 'CORTE', ovnis: 'OVNIS', ferrao: 'FERRÃO', fissuras: 'FISSURAS', blocos: 'BLOCOS', eco: 'ECO', esporos: 'ESPOROS', nevoa: 'NÉVOA', ricochete: 'RICOCHETE', cronos: 'TEMPO PARADO', ponteiros: 'PONTEIROS', constrictor: 'CONSTRITOR', ondulacao: 'ONDULAÇÃO' };
  const DURACAO = { espiral: 2.6, chuva: 3.2, aneis: 2.4, cerco: 2.2, blocos: 2.8, constrictor: 1.9, ondulacao: 2.8 };
  // pesos de cada ataque; os 0 são golpes exclusivos que só alguns alienígenas têm (ver ALIENS)
  // [ataque, peso, a partir de quantos segundos de partida o alienígena sabe usar]: o arsenal cresce com o tempo
  const ATAQUES_BASE = [['rajada', 3, 0], ['mira', 3, 0], ['investida', 3, 0], ['raio', 3, 40], ['bombas', 2, 40], ['teleporte', 2, 80], ['invocar', 1, 80], ['espiral', 2, 130], ['chuva', 2, 170], ['varredura', 2, 210], ['aneis', 2, 250], ['cerco', 2, 290],
    ['tentaculos', 0, 100], ['olhar', 0, 100], ['psiquico', 0, 100], ['foice', 0, 100], ['corte', 0, 100], ['ovnis', 0, 100],
    ['ferrao', 0, 100], ['fissuras', 0, 100], ['blocos', 0, 100], ['eco', 0, 100], ['esporos', 0, 100], ['nevoa', 0, 100], ['ricochete', 0, 100], ['cronos', 0, 100], ['ponteiros', 0, 100], ['constrictor', 0, 100], ['ondulacao', 0, 100]];

  function atualizarAlien(dt) {
    const al = S.alien;
    const furioso = al.hp < al.hpMax * 0.5, desespero = al.hp < al.hpMax * 0.25;
    const tf = 1 + Math.min(0.6, S.t / 500); // com o tempo de partida ele fica ainda mais rápido
    const ritmo = (desespero ? 2 : furioso ? 1.6 : 1.25) * tf; // quanto mais ferido, menos descanso entre ataques
    const rapido = (desespero ? 1.5 : furioso ? 1.35 : 1.2) * (1 + (tf - 1) * 0.6); // e mais rápidos os tiros
    const vb = (v) => v * rapido;
    al.ta += dt * (desespero ? 2 : furioso ? 1.7 : 1.3) * tf; al.fase += dt;
    al.sumido = Math.max(0, al.sumido - dt);
    if (al.rastro) { for (const r of al.rastro) r.t -= dt; al.rastro = al.rastro.filter((r) => r.t > 0); }
    S.lentidao = 1; for (const cp of S.campos) if (cp.lento && cp.aviso <= 0 && Math.hypot(S.nx - cp.x, S.ny - cp.y) < cp.r) S.lentidao = Math.min(S.lentidao, cp.lento);
    if (al.surgir > 0) { // ainda se materializando: não ataca
      al.surgir = Math.max(0, al.surgir - dt);
      if (Math.random() < dt * 40) particulas(al.x + (Math.random() - 0.5) * 34, al.y - 20 + (1 - al.surgir / TEMPO_SURGIR) * 40, 1, [ALIENS[al.v].cor, '#ffffff'], 36);
      return;
    }
    if (furioso && !al.furiaDita) { al.furiaDita = true; mostrarAviso('!! FÚRIA !!', 1.6); S.flash = 0.2; bip(80, 0.4, 'sawtooth', 0.06); }
    if (desespero && !al.desesperoDito) { al.desesperoDito = true; mostrarAviso('!! DESESPERO !!', 1.6); S.flash = 0.25; bip(60, 0.5, 'sawtooth', 0.07); }
    const hx = S.nx - al.x, hy = S.ny - al.y, distanciaHeroi = Math.hypot(hx, hy) || 1;
    const nx = hx / distanciaHeroi, ny = hy / distanciaHeroi, px = -ny, py = nx;
    const distanciaIdeal = desespero ? 55 : furioso ? 68 : 82;
    const noArena = (x, y) => [Math.max(ARENA.x0 + 6, Math.min(ARENA.x1 - 6, x)), Math.max(ARENA.y0 + 6, Math.min(ARENA.y1 - 6, y))];
    const rotaX = () => noArena(S.nx - nx * distanciaIdeal + px * al.orbita * 28, S.ny)[0];
    const rotaY = () => noArena(S.nx, S.ny - ny * distanciaIdeal + py * al.orbita * 28)[1];
    const mover = al.estado === 'espera' || al.estado === 'carga' || al.estado === 'salvas' || al.estado === 'padrao';
    if (mover && al.sumido <= 0) {
      al.mudaOrbita -= dt;
      if (al.mudaOrbita <= 0) { al.mudaOrbita = 2.2 + Math.random() * 2.8; if (Math.random() < 0.45) al.orbita *= -1; }
      const radial = distanciaHeroi > distanciaIdeal + 13 ? 1 : distanciaHeroi < distanciaIdeal - 16 ? -0.7 : 0.12;
      const serpenteia = Math.sin(al.ta * 1.7 + al.fase * 0.4) * 0.22;
      const velocidade = (desespero ? 92 : furioso ? 78 : 64) * tf * (al.estado === 'carga' ? 0.58 : 1);
      const alvoVx = (nx * radial + px * (al.orbita * 0.58 + serpenteia)) * velocidade;
      const alvoVy = (ny * radial + py * (al.orbita * 0.58 + serpenteia)) * velocidade;
      const suaviza = Math.min(1, dt * (desespero ? 5.5 : 3.6));
      al.vx += (alvoVx - al.vx) * suaviza; al.vy += (alvoVy - al.vy) * suaviza;
      al.x += al.vx * dt; al.y += al.vy * dt;
      const [ax, ay] = noArena(al.x, al.y);
      if (ax !== al.x || ay !== al.y) { al.orbita *= -1; al.vx *= -0.35; al.vy *= -0.35; }
      al.x = ax; al.y = ay;
    }
    const mirarInvestida = () => { // treme e mostra por onde vai passar
      const previsao = S.movendo ? (desespero ? 34 : furioso ? 27 : 20) : 0;
      const tx = S.nx + S.dirX * previsao, ty = S.ny + S.dirY * previsao;
      const dx = tx - al.x, dy = ty - al.y, d = Math.hypot(dx, dy) || 1;
      al.dirX = dx / d; al.dirY = dy / d; al.dashMax = 0.75; al.estado = 'aviso'; al.carga = desespero ? 0.38 : furioso ? 0.52 : 0.72;
    };
    const prepararCorte = () => { // corte: sai de um lado da arena, na altura da nave, e atravessa tudo em linha reta
      const daDireita = S.nx < CX;
      al.x = daDireita ? ARENA.x1 - 4 : ARENA.x0 + 4; al.y = noArena(0, S.ny)[1];
      al.dirX = daDireita ? -1 : 1; al.dirY = 0; al.dashMax = 1.15; al.estado = 'aviso'; al.carga = desespero ? 0.34 : furioso ? 0.48 : 0.68;
    };

    const minarEspaco = (quantidade) => { // minas antecipam a rota e fecham as saídas, em vez de cair só no ponto atual
      const frenteX = S.movendo ? S.dirX : nx, frenteY = S.movendo ? S.dirY : ny;
      const ladoX = -frenteY, ladoY = frenteX;
      for (let i = 0; i < quantidade; i++) {
        const linha = Math.floor(i / 2) + 1, lado = i % 2 ? 1 : -1;
        const distancia = 20 + linha * 14, abertura = 18 + linha * 7;
        const [x, y] = noArena(S.nx + frenteX * distancia + ladoX * abertura * lado, S.ny + frenteY * distancia + ladoY * abertura * lado);
        const aviso = 1 + i * 0.08;
        S.campos.push({ x, y, r: 23, aviso, avisoMax: aviso, vida: 4.2, tick: 0, ox: al.x, oy: al.y });
      }
      if (furioso) { const [x, y] = noArena(S.nx + frenteX * 50, S.ny + frenteY * 50); S.campos.push({ x, y, r: 25, aviso: 1.25, avisoMax: 1.25, vida: 4.2, tick: 0, ox: al.x, oy: al.y }); }
      bip(200, 0.1, 'square', 0.04); bip(160, 0.1, 'square', 0.04, 0.1);
    };

    const escolherAtaque = () => {
      if (al.plano.length) {
        const ataquePlanejado = al.plano.shift();
        al.memoria.push(ataquePlanejado); if (al.memoria.length > 4) al.memoria.shift();
        return ataquePlanejado;
      }
      const gosto = ALIENS[al.v].pesos;
      const desbloqueado = ([k, , desde]) => S.t >= desde || (gosto[k] || 0) > 0 || desespero || (furioso && desde <= 210);
      const disponiveis = new Set(ATAQUES_BASE.filter(desbloqueado).map(([k]) => k));
      let candidatos;
      if (distanciaHeroi < 62) candidatos = ['tentaculos', 'varredura', 'rajada', 'psiquico', 'investida', 'teleporte', 'corte', 'olhar'];
      else if (distanciaHeroi > 125) candidatos = ['bombas', 'psiquico', 'cerco', 'chuva', 'investida', 'mira', 'raio', 'corte', 'foice', 'ovnis', 'invocar'];
      else candidatos = ['mira', 'raio', 'investida', 'espiral', 'aneis', 'olhar', 'rajada', 'psiquico'];
      for (const k of Object.keys(gosto)) if (disponiveis.has(k) && !candidatos.includes(k)) candidatos.push(k);
      // Se o chão já está minado, ele explora a limitação com investida/tiros em vez de poluir ainda mais a arena.
      if (S.campos.length >= 7) candidatos = candidatos.filter((k) => k !== 'bombas' && k !== 'psiquico');
      if (S.tirosInimigos.length >= 85) candidatos = candidatos.filter((k) => !['rajada', 'espiral', 'chuva', 'aneis', 'cerco', 'blocos', 'esporos', 'ondulacao', 'constrictor'].includes(k));
      candidatos = candidatos.filter((k) => disponiveis.has(k) && !al.memoria.slice(-2).includes(k));
      if (!candidatos.length) candidatos = [...disponiveis].filter((k) => !al.memoria.slice(-1).includes(k));
      if (!candidatos.length) candidatos = ['investida'];
      const pesos = candidatos.map((k) => {
        let peso = 1 + (gosto[k] || 0);
        if (distanciaHeroi < 62 && ['tentaculos', 'varredura', 'rajada', 'psiquico'].includes(k)) peso += 3;
        if (distanciaHeroi > 125 && ['bombas', 'cerco', 'investida', 'corte'].includes(k)) peso += 3;
        if (furioso && ['investida', 'foice', 'olhar', 'raio'].includes(k)) peso += 2;
        if (desespero && ['foice', 'corte', 'varredura', 'tentaculos'].includes(k)) peso += 3;
        return [k, peso];
      });
      const ataque = sorteio(pesos);
      // Combos táticos: primeiro limita o espaço, depois usa a abertura para alcançar o herói.
      if (distanciaHeroi > 125 && ['bombas', 'psiquico', 'cerco'].includes(ataque)) al.plano.push(Math.random() < 0.55 ? 'investida' : 'mira');
      else if (distanciaHeroi < 62 && ['rajada', 'tentaculos'].includes(ataque)) al.plano.push(Math.random() < 0.5 ? 'teleporte' : 'corte');
      al.memoria.push(ataque); if (al.memoria.length > 4) al.memoria.shift();
      return ataque;
    };

    if (al.estado === 'espera') {
      al.cd -= dt * ritmo;
      if (al.cd <= 0) {
        al.ataque = escolherAtaque();
        al.estado = 'carga'; al.carga = desespero ? 0.2 : furioso ? 0.3 : 0.46;
        texto(al.x, Math.max(12, al.y - 24), NOMES_ATAQUE[al.ataque] || '', '#ff7ab8');
      }
    } else if (al.estado === 'carga') {
      al.carga -= dt;
      if (al.carga <= 0) {
        const a = al.ataque;
        if (a === 'rajada') { const n = desespero ? 30 : furioso ? 24 : 18, rot = Math.random() * 6; for (let i = 0; i < n; i++) atirarInimigo(al.x, al.y, rot + (i * Math.PI * 2) / n, vb(62)); al.estado = 'espera'; al.cd = 2; }
        else if (a === 'mira') { al.salvas = desespero ? 6 : furioso ? 5 : 4; al.cdSalva = 0; al.salvaTipo = 'mira'; al.estado = 'salvas'; }
        else if (a === 'teleporte') { al.sumido = 0.6; al.estado = 'teleporte'; al.carga = 0.6; }
        else if (a === 'invocar') { const insetos = S.inimigos.filter((m) => m.tipo === 'inseto').length; for (let i = 0; i < 4 && insetos + i < 10; i++) criarInimigo('inseto', al.x + (i - 1.5) * 12, al.y + 14); al.estado = 'espera'; al.cd = 1.8; bip(300, 0.2, 'triangle', 0.05); }
        else if (a === 'ovnis') { const n = S.inimigos.filter((m) => m.tipo === 'atirador').length; for (let i = 0; i < 2 && n + i < 3; i++) criarInimigo('atirador', al.x + (i ? 16 : -16), al.y + 14); al.estado = 'espera'; al.cd = 2; bip(300, 0.25, 'triangle', 0.05); }
        else if (a === 'investida') { al.combo = desespero ? 1 : 0; al.modo = 'investida'; mirarInvestida(); }
        else if (a === 'foice') { al.combo = desespero ? 3 : furioso ? 2 : 1; al.modo = 'investida'; mirarInvestida(); } // várias investidas seguidas
        else if (a === 'corte') { al.combo = desespero ? 2 : furioso ? 1 : 0; al.modo = 'corte'; prepararCorte(); }
        else if (a === 'raio') { // raios que miram a nave: linha de aviso e depois o raio de verdade
          const a0 = Math.atan2(S.ny - al.y, S.nx - al.x), angs = desespero ? [a0 - 0.7, a0 - 0.35, a0, a0 + 0.35, a0 + 0.7] : furioso ? [a0 - 0.5, a0, a0 + 0.5] : [a0];
          for (const ang of angs) S.raios.push({ x: al.x, y: al.y + 8, ang, aviso: 0.9, vida: 0.55, tick: 0, ligou: false });
          al.estado = 'espera'; al.cd = 2.2; bip(500, 0.3, 'sine', 0.05);
        } else if (a === 'olhar') { // leque de raios saindo dos olhos
          const a0 = Math.atan2(S.ny - al.y, S.nx - al.x), n = desespero ? 7 : furioso ? 6 : 5;
          for (let i = 0; i < n; i++) S.raios.push({ x: al.x, y: al.y + 8, ang: a0 + (i - (n - 1) / 2) * 0.4, aviso: 0.9, vida: 0.5, tick: 0, ligou: false });
          al.estado = 'espera'; al.cd = 2.4; bip(520, 0.3, 'sine', 0.05);
        } else if (a === 'varredura') { // um raio que gira como ponteiro de relógio
          const sentido = Math.random() < 0.5 ? 1 : -1, a0 = Math.atan2(S.ny - al.y, S.nx - al.x) - 1.0 * sentido;
          for (let k = 0; k < (furioso ? 2 : 1); k++) S.raios.push({ x: al.x, y: al.y + 8, ang: a0 + k * Math.PI, giro: 1.15 * sentido * (desespero ? 1.3 : 1), seg: true, aviso: 0.9, vida: 1.7, tick: 0, ligou: false });
          al.estado = 'espera'; al.cd = 2.6; bip(480, 0.3, 'sine', 0.05);
        } else if (a === 'tentaculos') { // quatro raios girando em cruz
          const base = Math.random() * 6.28, sentido = Math.random() < 0.5 ? 1 : -1, n = furioso ? 6 : 4;
          for (let k = 0; k < n; k++) S.raios.push({ x: al.x, y: al.y + 8, ang: base + (k * Math.PI * 2) / n, giro: 0.9 * sentido, seg: true, aviso: 0.8, vida: 2.2, tick: 0, ligou: false });
          al.estado = 'espera'; al.cd = 3; bip(420, 0.3, 'sine', 0.05);
        } else if (a === 'bombas') { minarEspaco(desespero ? 7 : furioso ? 6 : 4); al.estado = 'espera'; al.cd = desespero ? 0.75 : furioso ? 1.1 : 1.7; }
        else if (a === 'psiquico') { // bombas em círculo ao redor da nave, fechando o cerco
          const ang0 = Math.random() * 6.28, n = furioso ? 6 : 5;
          for (let i = 0; i < n; i++) { const [x, y] = noArena(S.nx + Math.cos(ang0 + (i * Math.PI * 2) / n) * 40, S.ny + Math.sin(ang0 + (i * Math.PI * 2) / n) * 40); S.campos.push({ x, y, r: 24, aviso: 1.1 + i * 0.08, avisoMax: 1.1 + i * 0.08, vida: 3.5, tick: 0, ox: al.x, oy: al.y }); }
          S.campos.push({ x: S.nx, y: S.ny, r: 22, aviso: 1.4, avisoMax: 1.4, vida: 3.5, tick: 0, ox: al.x, oy: al.y });
          al.estado = 'espera'; al.cd = 2.2; bip(200, 0.1, 'square', 0.04); bip(160, 0.1, 'square', 0.04, 0.1);
        }
        else if (a === 'ferrao') { al.salvas = desespero ? 5 : furioso ? 4 : 3; al.cdSalva = 0.55; al.salvaTipo = 'ferrao'; al.estado = 'salvas'; } // mira, avisa com uma linha e fura
        else if (a === 'fissuras') { // faixas de cristal rompem o chão de cima a baixo, menos numa faixa segura
          const seguro = Math.max(ARENA.x0 + 40, Math.min(ARENA.x1 - 40, S.nx + (Math.random() - 0.5) * 40)), ondas = furioso ? 2 : 1;
          for (let w = 0; w < ondas; w++) {
            const livre = w ? Math.max(ARENA.x0 + 40, Math.min(ARENA.x1 - 40, seguro + (Math.random() < 0.5 ? -1 : 1) * (60 + Math.random() * 40))) : seguro;
            for (let x = ARENA.x0 + 8 + w * 13; x <= ARENA.x1 - 8; x += 26) if (Math.abs(x - livre) > 34) S.raios.push({ x, y: ARENA.y0 - 6, ang: Math.PI / 2, aviso: 1.1 + w * 0.9, vida: 0.5, tick: 0, ligou: false, cor: '#58c8ff' });
          }
          al.estado = 'espera'; al.cd = 2.6 + (furioso ? 0.9 : 0); bip(620, 0.3, 'sine', 0.05); bip(840, 0.2, 'triangle', 0.03, 0.2);
        }
        else if (a === 'eco') { al.eco = { n: desespero ? 6 : furioso ? 5 : 4, t: 0 }; al.estado = 'eco'; }
        else if (a === 'esporos') { // esporos lentos que estouram em tiros
          const n = desespero ? 8 : furioso ? 6 : 5, a0 = Math.atan2(S.ny - al.y, S.nx - al.x);
          for (let i = 0; i < n; i++) tiroEsp(al.x, al.y + 4, a0 + (i - (n - 1) / 2) * 0.42 + (Math.random() - 0.5) * 0.12, 30 + Math.random() * 14, { cor: i % 2 ? '#e060a0' : '#7dff9a', forma: 'esporo', r: 3, ex: 1 + Math.random() * 0.7, n: furioso ? 8 : 6, vida: 3 });
          al.estado = 'espera'; al.cd = 2.4; bip(180, 0.25, 'sine', 0.05);
        }
        else if (a === 'nevoa') { // nuvens de esporos que deixam a nave lenta; o próximo golpe aproveita isso
          const n = furioso ? 4 : 3;
          for (let i = 0; i < n; i++) { const an = Math.random() * 6.28, d = i === 0 ? 0 : 38 + Math.random() * 22, [x, y] = noArena(S.nx + Math.cos(an) * d, S.ny + Math.sin(an) * d); S.campos.push({ x, y, r: 30, aviso: 0.01, avisoMax: 0.01, vida: 6.5, tick: 0, lento: 0.45, cor: '224, 96, 160', nuvem: true }); }
          al.plano.push('esporos'); al.estado = 'espera'; al.cd = 0.9; bip(150, 0.3, 'sine', 0.05);
        }
        else if (a === 'ricochete') { // tiros que rebatem nas paredes da arena
          const n = desespero ? 9 : furioso ? 7 : 5, a0 = Math.atan2(S.ny - al.y, S.nx - al.x);
          for (let i = 0; i < n; i++) tiroEsp(al.x, al.y + 6, a0 + (i - (n - 1) / 2) * 0.3, vb(78), { cor: '#c9b8ff', forma: 'morcego', r: 2.5, quica: desespero ? 3 : 2, vida: 9 });
          al.estado = 'espera'; al.cd = 2.2; bip(420, 0.12, 'triangle', 0.05);
        }
        else if (a === 'cronos') { // o tempo para: um anel de relógios surge em volta da nave, congela e depois todos voam para ela
          const n = desespero ? 18 : furioso ? 15 : 12, rot = Math.random() * 6.28;
          for (let i = 0; i < n; i++) { const an = rot + (i * Math.PI * 2) / n, px = S.nx + Math.cos(an) * 58, py = S.ny + Math.sin(an) * 58; if (px < ARENA.x0 - 4 || px > ARENA.x1 + 4 || py < ARENA.y0 - 4 || py > ARENA.y1 + 4) continue; tiroEsp(px, py, 0, 0, { cor: '#ffd23f', forma: 'relogio', r: 2.5, fica: furioso ? 1 : 1.25, vRe: vb(96), vida: 6 }); }
          S.flash = 0.18; S.ondas.push({ x: S.nx, y: S.ny, r: 0, max: 62, v: 120, cor: '#ffd23f' }); al.estado = 'espera'; al.cd = 3; bip(880, 0.08, 'square', 0.05); bip(660, 0.08, 'square', 0.05, 0.12);
        }
        else if (a === 'ponteiros') { // dois ou três raios de ponteiro de relógio, cada um numa velocidade
          const sentido = Math.random() < 0.5 ? 1 : -1, a0 = Math.atan2(S.ny - al.y, S.nx - al.x), maos = [[0.42, 0], [-1.15, Math.PI]];
          if (furioso) maos.push([2.1, Math.PI / 2]);
          for (const [giro, aj] of maos) S.raios.push({ x: al.x, y: al.y + 8, ang: a0 + aj, giro: giro * sentido, seg: true, aviso: 0.9, vida: 2.8, tick: 0, ligou: false, cor: '#ffd23f' });
          al.estado = 'espera'; al.cd = 3.2; bip(440, 0.3, 'sine', 0.05);
        }
        else if (DURACAO[a]) { // ataques que disparam por alguns segundos: espiral, chuva, anéis, cerco
          al.padrao = { tipo: a, t: DURACAO[a] * (furioso ? 1.25 : 1), acc: 0, ang: Math.random() * 6.28 }; al.estado = 'padrao';
        } else al.estado = 'espera';
        bip(220, 0.12, 'square', 0.05);
      }
    } else if (al.estado === 'padrao') {
      const p = al.padrao; p.t -= dt; p.acc -= dt;
      if (p.acc <= 0) {
        if (p.tipo === 'espiral') {
          p.acc = 0.075; p.ang += 0.38; const bracos = desespero ? 4 : furioso ? 3 : 2;
          for (let k = 0; k < bracos; k++) atirarInimigo(al.x, al.y + 6, p.ang + (k * Math.PI * 2) / bracos, vb(58));
          som('espiral', 90, () => bip(330 + Math.random() * 40, 0.04, 'square', 0.02));
        } else if (p.tipo === 'chuva') { // linhas de tiros caindo, com buracos para passar
          p.acc = desespero ? 0.45 : 0.6;
          const gaps = [ARENA.x0 + 24 + Math.random() * (ARENA.x1 - ARENA.x0 - 48)]; if (furioso) gaps.push(ARENA.x0 + 24 + Math.random() * (ARENA.x1 - ARENA.x0 - 48));
          for (let x = ARENA.x0 + 4; x <= ARENA.x1 - 4; x += 13) if (gaps.every((g0) => Math.abs(x - g0) > 19)) atirarInimigo(x, ARENA.y0, Math.PI / 2, vb(58));
          bip(240, 0.08, 'square', 0.03);
        } else if (p.tipo === 'aneis') { // anéis de tiros, cada um com uma abertura
          p.acc = 0.55; const n = 24, gap = Math.random() * Math.PI * 2;
          for (let i = 0; i < n; i++) { const an = (i * Math.PI * 2) / n; if (Math.abs(Math.atan2(Math.sin(an - gap), Math.cos(an - gap))) > 0.42) atirarInimigo(al.x, al.y, an, vb(55)); }
          bip(280, 0.08, 'triangle', 0.03);
        } else if (p.tipo === 'cerco') { // tiros vindos das laterais, mirando na nave
          p.acc = desespero ? 0.08 : 0.12; const x = Math.random() < 0.5 ? ARENA.x0 : ARENA.x1, y = ARENA.y0 + Math.random() * (ARENA.y1 - ARENA.y0);
          atirarInimigo(x, y, Math.atan2(S.ny - y, S.nx - x) + (Math.random() - 0.5) * 0.3, vb(72));
          som('cerco', 90, () => bip(360, 0.04, 'square', 0.02));
        } else if (p.tipo === 'blocos') { // paredes de blocos cruzam a arena de um lado a outro, cada uma com uma passagem
          p.acc = furioso ? 0.8 : 0.95; p.lado ??= Math.random() < 0.5 ? -1 : 1; p.lado *= -1;
          const x = p.lado < 0 ? ARENA.x0 : ARENA.x1, centro = Math.max(ARENA.y0 + 24, Math.min(ARENA.y1 - 24, S.ny + (Math.random() - 0.5) * 50));
          for (let y = ARENA.y0 + 4; y <= ARENA.y1 - 2; y += 12) if (Math.abs(y - centro) > 21) tiroEsp(x, y, p.lado < 0 ? 0 : Math.PI, vb(52), { cor: Math.floor(y / 12) % 2 ? '#38e8ff' : '#ff3bd4', forma: 'bloco', r: 3, vida: 9 });
          bip(120, 0.15, 'square', 0.04);
        } else if (p.tipo === 'constrictor') { // um anel que se fecha em volta da nave, com uma abertura
          p.acc = 0.95; const n = 28, abertura = Math.random() * 6.28;
          for (let i = 0; i < n; i++) {
            const an = (i * Math.PI * 2) / n; if (Math.abs(Math.atan2(Math.sin(an - abertura), Math.cos(an - abertura))) < 0.5) continue;
            const px = S.nx + Math.cos(an) * 72, py = S.ny + Math.sin(an) * 72; if (px < ARENA.x0 - 4 || px > ARENA.x1 + 4 || py < ARENA.y0 - 4 || py > ARENA.y1 + 4) continue;
            tiroEsp(px, py, an + Math.PI, vb(32), { cor: '#2fd6a0', forma: 'esporo', r: 2, vida: 5 });
          }
          bip(200, 0.2, 'sine', 0.05);
        } else if (p.tipo === 'ondulacao') { // jatos que balançam como uma serpente; cruzados quando ele está furioso
          p.acc = 0.085; p.base ??= Math.atan2(S.ny - al.y, S.nx - al.x);
          const an = p.base + Math.sin(p.t * 3.6) * 0.8;
          tiroEsp(al.x, al.y + 8, an, vb(66), { cor: '#2fd6a0', r: 2 });
          if (furioso) tiroEsp(al.x, al.y + 8, p.base - Math.sin(p.t * 3.6) * 0.8, vb(66), { cor: '#ffe14a', r: 2 });
          som('ondulacao', 90, () => bip(300 + Math.random() * 60, 0.04, 'triangle', 0.02));
        }
      }
      if (p.t <= 0) { al.estado = 'espera'; al.cd = 1.8; }
    } else if (al.estado === 'salvas') {
      al.cdSalva -= dt;
      if (al.cdSalva <= 0) {
        const a = Math.atan2(S.ny - al.y, S.nx - al.x);
        if (al.salvaTipo === 'ferrao') { // um dardo rápido no meio e dois estilhaços mais lentos nas pontas
          tiroEsp(al.x, al.y + 10, a, vb(150), { cor: '#8ee8ff', forma: 'cristal', r: 2 });
          for (const d of [-0.34, 0.34]) tiroEsp(al.x, al.y + 10, a + d, vb(88), { cor: '#ff7ab8', forma: 'cristal', r: 2 });
          al.salvas -= 1; al.cdSalva = 0.5; bip(740, 0.05, 'square', 0.04); bip(1040, 0.05, 'square', 0.03, 0.05);
        } else {
          for (let i = -1; i <= 1; i++) atirarInimigo(al.x, al.y + 12, a + i * 0.22, vb(95));
          al.salvas -= 1; al.cdSalva = 0.26; bip(260, 0.06, 'square', 0.04);
        }
        if (al.salvas <= 0) { al.estado = 'espera'; al.cd = 1.6; }
      }
    } else if (al.estado === 'aviso') { // treme antes da investida
      al.carga -= dt;
      al.x += (Math.random() - 0.5) * 1.6; al.y += (Math.random() - 0.5) * 1.6;
      if (al.carga <= 0) { al.estado = 'investida'; al.dashT = al.dashMax * (furioso ? 1.1 : 1); bip(150, 0.25, 'sawtooth', 0.06); }
    } else if (al.estado === 'investida') { // corpo a corpo: avança em linha reta; encostar na nave machuca
      const v = desespero ? 400 : furioso ? 350 : 310;
      al.x += al.dirX * v * dt; al.y += al.dirY * v * dt; al.dashT -= dt;
      const fora = al.x < ARENA.x0 || al.x > ARENA.x1 || al.y < ARENA.y0 || al.y > ARENA.y1;
      al.x = Math.max(ARENA.x0, Math.min(ARENA.x1, al.x)); al.y = Math.max(ARENA.y0 - 10, Math.min(ARENA.y1, al.y));
      if (al.dashT <= 0 || fora) {
        S.tremor = Math.max(S.tremor, fora ? 0.2 : 0);
        if (al.combo > 0) { al.combo -= 1; if (al.modo === 'corte') prepararCorte(); else mirarInvestida(); al.carga = 0.4; } // outra investida logo em seguida
        else al.estado = 'volta';
      }
    } else if (al.estado === 'volta') { // volta para a rota normal
      const tx = rotaX(), ty = rotaY(), dx = tx - al.x, dy = ty - al.y, d = Math.hypot(dx, dy) || 1;
      al.x += (dx / d) * Math.min(d, 260 * dt); al.y += (dy / d) * Math.min(d, 260 * dt);
      if (d < 5) { al.estado = 'espera'; al.cd = 1.2; }
    } else if (al.estado === 'eco') { // some e reaparece em outros pontos da arena, atirando em leque e deixando uma imagem para trás
      al.eco.t -= dt;
      if (al.eco.t <= 0) {
        if (al.eco.n <= 0) { al.estado = 'espera'; al.cd = 1.5; }
        else {
          al.eco.n -= 1; al.eco.t = desespero ? 0.42 : 0.55;
          (al.rastro ??= []).push({ x: al.x, y: al.y, t: 0.5 });
          let ex = al.x, ey = al.y;
          for (let k = 0; k < 6; k++) { [ex, ey] = noArena(ARENA.x0 + 20 + Math.random() * (ARENA.x1 - ARENA.x0 - 40), ARENA.y0 + 10 + Math.random() * (ARENA.y1 - ARENA.y0 - 70)); if (Math.hypot(ex - S.nx, ey - S.ny) > 55) break; }
          al.x = ex; al.y = ey; al.vx = al.vy = 0;
          const ang = Math.atan2(S.ny - al.y, S.nx - al.x);
          for (let i = -2; i <= 2; i++) tiroEsp(al.x, al.y + 6, ang + i * 0.26, vb(74), { cor: i % 2 ? '#38e8ff' : '#ff3bd4', forma: 'bloco', r: 2 });
          particulas(al.x, al.y, 8, ['#ff3bd4', '#38e8ff', '#ffffff'], 60); bip(300 + Math.random() * 300, 0.07, 'square', 0.05);
        }
      }
    } else if (al.estado === 'teleporte') {
      al.carga -= dt;
      if (al.carga <= 0) {
        const ang = Math.atan2(al.y - S.ny, al.x - S.nx) + Math.PI + (Math.random() - 0.5) * 1.2;
        const dist = distanciaHeroi < 70 ? 105 : 72;
        [al.x, al.y] = noArena(S.nx + Math.cos(ang) * dist, S.ny + Math.sin(ang) * dist); al.sumido = 0; al.vx = al.vy = 0;
        const n = desespero ? 16 : 12; for (let i = 0; i < n; i++) atirarInimigo(al.x, al.y, (i * Math.PI * 2) / n, vb(70));
        al.estado = 'espera'; al.cd = 1.3; bip(440, 0.1, 'square', 0.05);
      }
    }
  }

  // ---------- movimento da nave ----------
  function moverNave(dt) {
    let mx = (teclas.has('ArrowRight') || teclas.has('KeyD') ? 1 : 0) - (teclas.has('ArrowLeft') || teclas.has('KeyA') ? 1 : 0);
    let my = (teclas.has('ArrowDown') || teclas.has('KeyS') ? 1 : 0) - (teclas.has('ArrowUp') || teclas.has('KeyW') ? 1 : 0);
    if (!mx && !my && ponteiro.ativo) {
      if (ponteiro.toque) { mx = ponteiro.dx / 18; my = ponteiro.dy / 18; }
      else {
        const dx = ponteiro.x - (S.nx - S.cx + L / 2), dy = ponteiro.y - (S.ny - S.cy + A / 2), d = Math.hypot(dx, dy);
        if (d > 3) { mx = dx / d; my = dy / d; }
      }
    }
    if (S.invertidoT > 0) { mx = -mx; my = -my; } // loucura: os controles ficam ao contrário
    const tam = Math.hypot(mx, my);
    S.movendo = tam > 0.08;
    if (tam > 0.08) {
      S.dirX = mx / tam; S.dirY = my / tam;
      const alvoAngulo = Math.atan2(S.dirY, S.dirX) + Math.PI / 2;
      const diferenca = Math.atan2(Math.sin(alvoAngulo - S.angNave), Math.cos(alvoAngulo - S.angNave));
      S.angNave += diferenca * Math.min(1, dt * 9 * (S.giro || 1)); // a nave vira para onde está indo; o giroscópio e o bocal vetorial a fazem virar mais rápido
      const ativa = S.arma >= 2 ? S.slots[S.arma - 2] : 'normal';
      const nvTurbo = S.armasNivel.turbo || 1, nvDrift = S.armasNivel.drift || 1;
      const multTurbo = ativa === 'turbo' && S.boostE > 0 ? 1.55 + 0.18 * (nvTurbo - 1) : 1;
      const multDrift = S.driftT > 0 ? 1.75 + 0.15 * (nvDrift - 1) : 1;
      const multCargaSalto = ativa === 'salto' && S.saltoCarga > 0 ? 0.32 : 1;
      const multItem = S.turboT > 0 ? 1.35 : 1;
      const forca = Math.min(1, tam), velocidade = S.velNave * multTurbo * multDrift * multCargaSalto * multItem * (S.buffVelT > 0 ? 1.5 : 1) * (S.lentidao || 1);
      S.nx += S.dirX * velocidade * dt * forca; S.ny += S.dirY * velocidade * dt * forca;
    }
    if (S.alien) {
      S.nx = Math.max(ARENA.x0, Math.min(ARENA.x1, S.nx)); S.ny = Math.max(ARENA.y0, Math.min(ARENA.y1, S.ny));
      S.cx = CX; S.cy = CY;
    } else {
      const seg = Math.min(1, dt * 5);
      S.cx += (S.nx - S.cx) * seg; S.cy += (S.ny - S.cy) * seg;
    }
  }

  // ---------- atualização ----------
  function atualizarMundo(dt) {
    S.proxOnda -= dt;
    if (S.proxOnda <= 0 && S.ondaFila <= 0) iniciarOnda();
    S.ondaT = Math.max(0, S.ondaT - dt);
    S.ondaEstado = S.chefe ? 'chefe' : S.ondaT > 0 || S.ondaFila > 0 ? 'ativa' : 'calma';
    const cap = Math.min(54, 12 + 3 * tier());
    // Durante a onda, pelotões pequenos entram em cadência pelos cantos da tela.
    if (S.ondaFila > 0) {
      S.ondaSpawnT -= dt;
      if (S.ondaSpawnT <= 0) {
        const pacote = Math.min(S.ondaFila, Math.min(4, 1 + Math.floor((S.onda - 1) / 2)), Math.max(0, cap - S.inimigos.length));
        if (pacote > 0) { spawnPelotaoCanto(pacote); S.ondaFila -= pacote; }
        S.ondaSpawnT = pacote > 0 ? Math.max(0.72, 1.45 - S.onda * 0.045) + Math.random() * 0.38 : 0.5;
      }
    }
    // Entre as ondas ainda existem encontros, mas em ritmo leve para a evolução respirar.
    const basico = 0.24 + Math.min(0.72, S.t * 0.0014) + 0.015 * S.nivel;
    S.spawnAcc += dt * basico * (S.ondaEstado === 'chefe' ? 0.45 : 1);
    if (!Number.isFinite(S.spawnAcc) || S.spawnAcc < 0) S.spawnAcc = 0;
    let lotes = 0;
    while (S.spawnAcc >= 1 && lotes < 3) { S.spawnAcc -= 1; lotes += 1; if (S.inimigos.length < cap) spawn(2); }
    // conforme a nave anda, aparecem monstros à frente dela (o mundo já estava povoado) e eles vão atrás de você
    if (S.ultX == null) { S.ultX = S.nx; S.ultY = S.ny; S.andou = 0; S.angAndar = 0; }
    const mvx = S.nx - S.ultX, mvy = S.ny - S.ultY, passo = Math.hypot(mvx, mvy);
    S.ultX = S.nx; S.ultY = S.ny;
    if (passo > 0 && passo < 60) { S.andou += passo; S.angAndar = Math.atan2(mvy, mvx); }
    while (S.andou >= 170) { S.andou -= 170; if (S.inimigos.length < cap) spawn(99, S.angAndar); }
    if (S.ondaT <= 0 && !S.chefe && !S.buraco && S.t >= S.proxBuraco) criarBuraco();
    S.proxEstrela -= dt; // de tempos em tempos surge uma estrela de poder perto da nave
    if (S.proxEstrela <= 0) {
      S.proxEstrela = 16 + Math.random() * 14;
      if (S.itens.filter((i) => ESTRELAS[i.tipo]).length < 2) { const ang = Math.random() * Math.PI * 2, d = 70 + Math.random() * 90; S.itens.push({ tipo: sorteio(PESOS_ESTRELAS), x: S.nx + Math.cos(ang) * d, y: S.ny + Math.sin(ang) * d, vida: 24, fase: Math.random() * 6 }); bip(1500, 0.05, 'sine', 0.03); }
    }
    if (S.buraco) { atualizarBuraco(dt); if (S.alien) return; }

    // rochas: poucas, à deriva; empurram a nave de leve se ela encostar
    if (S.rochas.length < 3 && Math.random() < dt * 0.12) criarRocha();
    for (let i = S.rochas.length - 1; i >= 0; i--) {
      const r = S.rochas[i];
      r.x += r.vx * dt; r.y += r.vy * dt; r.piscar = Math.max(0, r.piscar - dt);
      const dx = S.nx - r.x, dy = S.ny - r.y, d = Math.hypot(dx, dy) || 1;
      if (d > 650) { S.rochas.splice(i, 1); continue; }
      if (d < r.r + RAIO_NAVE) { S.nx += (dx / d) * (r.r + RAIO_NAVE - d); S.ny += (dy / d) * (r.r + RAIO_NAVE - d); }
    }

    // monstros
    for (const m of [...S.inimigos]) {
      if (m.tipo === 'chefe') { if (m.lenda) atualizarLenda(m, dt, ctxLenda); else moverChefe(m, dt); obstaculos.empurrar(m, raioInim(m), { x: S.nx, y: S.ny }, 30 * dt); continue; }
      if (m.tipo === 'nativo') { m.tl += dt; m.sumido = Math.max(0, m.sumido - dt); m.nat.passo(m, dt, ctxLenda); m.piscar = Math.max(0, m.piscar - dt); obstaculos.empurrar(m, raioInim(m), { x: S.nx, y: S.ny }, m.vel * dt * 0.9); continue; }
      m.buffT = Math.max(0, (m.buffT || 0) - dt); m.suporteFx = Math.max(0, (m.suporteFx || 0) - dt);
      const dx = S.nx - m.x, dy = S.ny - m.y, d = Math.hypot(dx, dy) || 1;
      const buff = m.buffT > 0 ? 1.35 : 1;
      let vx = (dx / d) * m.vel * buff, vy = (dy / d) * m.vel * buff;
      if (m.tipo === 'morcego') { const o = Math.sin(S.ta * 5 + m.fase) * 28; vx += (-dy / d) * o; vy += (dx / d) * o; }
      else if (m.tipo === 'inseto') { const o = Math.sin(S.ta * 9 + m.fase) * 22; vx += (-dy / d) * o; vy += (dx / d) * o; }
      else if (m.tipo === 'atirador') {
        const k = d > 92 ? 1 : 0.22, ox = Math.sin(S.ta * 1.2 + m.fase) * 0.35;
        vx = ((dx / d) * k + (-dy / d) * ox) * m.vel * buff; vy = ((dy / d) * k + (dx / d) * ox) * m.vel * buff;
        m.cd -= dt * buff;
        if (m.cd <= 0 && naTela(m)) { atirarInimigo(m.x, m.y, Math.atan2(dy, dx), 74, danoTempo() * (m.buffT > 0 ? 1.5 : 1)); m.cd = 1.8 + Math.random() * 0.9; }
      } else if (m.tipo === 'sentinela') {
        const k = d > 105 ? 1 : 0.2, ang = Math.atan2(dy, dx);
        vx = ((dx / d) * k + (-dy / d) * Math.sin(S.ta + m.fase) * 0.28) * m.vel * buff; vy = ((dy / d) * k + (dx / d) * Math.sin(S.ta + m.fase) * 0.28) * m.vel * buff;
        m.cd -= dt * buff;
        if (m.cd <= 0 && naTela(m)) { atirarInimigo(m.x, m.y, ang, 82, danoTempo() * (m.buffT > 0 ? 1.5 : 1)); m.cd = 2.1 + Math.random() * 0.8; }
      } else if (m.tipo === 'bombardeiro') {
        const k = d > 120 ? 0.9 : 0.18;
        vx = (dx / d) * k * m.vel * buff; vy = (dy / d) * k * m.vel * buff;
        m.cd -= dt * buff;
        if (m.cd <= 0 && naTela(m)) { lancarBombas(m.x, m.y, m.buffT > 0 ? 2 : 1, 1.15); m.cd = 4 + Math.random() * 1.2; }
      } else if (m.tipo === 'fulminante') {
        const k = d > 125 ? 0.9 : 0.18, ang = Math.atan2(dy, dx);
        vx = ((dx / d) * k + (-dy / d) * Math.sin(S.ta * 1.7 + m.fase) * 0.28) * m.vel * buff; vy = ((dy / d) * k + (dx / d) * Math.sin(S.ta * 1.7 + m.fase) * 0.28) * m.vel * buff;
        m.cd -= dt * buff;
        if (m.cd <= 0 && naTela(m)) { S.raios.push({ x: m.x, y: m.y, ang, aviso: 0.8, vida: 0.28, tick: 0, ligou: false, cor: '#38c8ff', dano: danoTempo(), dono: m }); m.cd = 3.8 + Math.random() * 1.2; bip(260, 0.12, 'triangle', 0.025); }
      } else if (m.tipo === 'curandeiro') {
        const ferido = S.inimigos.filter((o) => o !== m && !o.morto && o.hp < o.hpMax && o.tipo !== 'chefe').sort((a, b) => Math.hypot(a.x - m.x, a.y - m.y) - Math.hypot(b.x - m.x, b.y - m.y))[0];
        vx = (dx / d) * m.vel * 0.68; vy = (dy / d) * m.vel * 0.68;
        if (ferido) { const ax = ferido.x - m.x, ay = ferido.y - m.y, ad = Math.hypot(ax, ay) || 1; vx += (ax / ad) * m.vel * 0.32; vy += (ay / ad) * m.vel * 0.32; }
        m.cd -= dt;
        if (m.cd <= 0 && ferido && Math.hypot(ferido.x - m.x, ferido.y - m.y) < RAIO_SUPORTE) { const cura = Math.max(1, Math.ceil(ferido.hpMax * 0.22)); ferido.hp = Math.min(ferido.hpMax, ferido.hp + cura); ferido.suporteFx = 0.8; m.suporteFx = 0.8; texto(ferido.x, ferido.y - 8, `+${cura}`, '#7dff9a'); particulas(ferido.x, ferido.y, 5, ['#7dff9a', '#ffffff'], 35); m.cd = 2.7 + Math.random() * 0.8; }
      } else if (m.tipo === 'amplificador') {
        const aliados = S.inimigos.filter((o) => o !== m && !o.morto && o.tipo !== 'chefe' && Math.hypot(o.x - m.x, o.y - m.y) < RAIO_SUPORTE); // só os inimigos perto dele recebem o buff
        for (const aliado of aliados) aliado.buffT = Math.max(aliado.buffT || 0, 0.4);
        if (aliados.length) m.suporteFx = 0.25;
        const k = d > 85 ? 0.72 : 0.2; vx = (dx / d) * k * m.vel; vy = (dy / d) * k * m.vel;
      }
      const lento = obstaculos.fatorLento(m.x, m.y); // campos de detritos deixam os monstros lentos e corpos sólidos barram o caminho
      m.x += vx * dt * lento; m.y += vy * dt * lento;
      obstaculos.empurrar(m, raioInim(m), { x: S.nx, y: S.ny }, m.vel * dt * 0.9);
      m.piscar = Math.max(0, m.piscar - dt);
    }
    S.inimigos = S.inimigos.filter((m) => m.tipo === 'chefe' || Math.hypot(m.x - S.nx, m.y - S.ny) < 520);
    // a nave também esbarra nos corpos sólidos e fica lenta nos campos de detritos
    const eu = { x: S.nx, y: S.ny }; obstaculos.empurrar(eu, RAIO_NAVE); S.nx = eu.x; S.ny = eu.y;
    S.lentidao = obstaculos.fatorLento(S.nx, S.ny);
    for (const cp of S.campos) if (cp.lento && cp.aviso <= 0 && Math.hypot(S.nx - cp.x, S.ny - cp.y) < cp.r) S.lentidao = Math.min(S.lentidao || 1, cp.lento);

    // itens no chão
    for (let i = S.itens.length - 1; i >= 0; i--) {
      const it = S.itens[i];
      it.vida -= dt;
      const dx = S.nx - it.x, dy = S.ny - it.y, d = Math.hypot(dx, dy) || 1;
      if (it.tipo === 'moedaEsp' && d < S.raioIma * 1.3) { it.x += (dx / d) * 90 * dt; it.y += (dy / d) * 90 * dt; }
      if (d < RAIO_NAVE + 8) { coletarItem(it); S.itens.splice(i, 1); continue; }
      if (it.vida <= 0) S.itens.splice(i, 1);
    }

    // cristais de XP
    for (let i = S.cristais.length - 1; i >= 0; i--) {
      const c = S.cristais[i];
      c.x += c.vx * dt; c.y += c.vy * dt;
      const freio = Math.pow(0.05, dt); c.vx *= freio; c.vy *= freio;
      const dx = S.nx - c.x, dy = S.ny - c.y, d = Math.hypot(dx, dy) || 1;
      if (S.imaT > 0) { c.x += (dx / d) * 280 * dt; c.y += (dy / d) * 280 * dt; } // ímã: puxa todos de uma vez
      else if (d < S.raioIma) { const puxa = 70 + (S.raioIma - d) * 4; c.x += (dx / d) * puxa * dt; c.y += (dy / d) * puxa * dt; }
      if (d < RAIO_NAVE + S.raioPegar) {
        S.xp += c.v * S.bonusXp * (S.buffXpT > 0 ? 2 : 1);
        S.cristais.splice(i, 1);
        particulas(c.x, c.y, 4, ['#8be6ff', '#ffffff'], 35);
        bip(740 + Math.min(c.v, 6) * 60, 0.05, 'square', 0.03);
      }
    }
  }

  function escolherAlvo() {
    let alvo = null, menor = Infinity;
    for (const m of S.inimigos) {
      if (m.sumido > 0 || !naTela(m)) continue;
      const d = Math.hypot(m.x - S.nx, m.y - S.ny);
      if (d < menor) { menor = d; alvo = m; }
    }
    // rochas perto da nave também são alvo, desde que nenhum monstro esteja colado nela
    let rocha = null, dr = 120;
    for (const r of S.rochas) { if (!naTela(r)) continue; const d = Math.hypot(r.x - S.nx, r.y - S.ny); if (d < dr) { dr = d; rocha = r; } }
    if (rocha && (!alvo || menor > 45)) return rocha;
    return alvo;
  }

  const nvl = (id) => S.niveis[id] | 0;
  const raioDe = (o) => o.r || TIPOS[o.tipo].raio;
  function raioInim(m) { return m.raio ?? TIPOS[m.tipo].raio; }
  function selecionarArma(n) {
    if (modo !== 'jogando' || !S) return;
    if (n >= 2 && !S.slots[n - 2]) return; // slot ainda vazio
    if (S.arma === n) return;
    S.arma = n; bip(n === 2 ? 440 : 600, 0.05, 'square', 0.03);
  }
  function orbesPos() { // as bolas só existem quando a arma ativa é o poder de bolas de energia
    if (S.arma < 2 || S.slots[S.arma - 2] !== 'orbes') return [];
    const n = 1 + S.armasNivel.orbes, R = 20 + n * 1.5;
    return Array.from({ length: n }, (_, k) => ({ x: S.nx + Math.cos(S.orbeAng + (k * Math.PI * 2) / n) * R, y: S.ny + Math.sin(S.orbeAng + (k * Math.PI * 2) / n) * R }));
  }
  function explosaoMissil(x, y) {
    const nivel = S.armasNivel.missil;
    const R = 24 * (1 + 0.16 * (nivel - 1)), dano = (5 + S.dano * 2) * S.danoGlobal * (1 + 0.32 * (nivel - 1));
    S.ondas.push({ x, y, r: 0, max: R, v: 170, cor: '#ff9a3a' });
    particulas(x, y, 14, ['#ffd23f', '#ff7a3a', '#ffffff'], 80);
    S.tremor = Math.max(S.tremor, 0.1);
    for (const m of [...S.inimigos]) if (!(m.sumido > 0) && Math.hypot(m.x - x, m.y - y) < R + raioInim(m)) danificar(m, dano);
    for (const r of [...S.rochas]) if (Math.hypot(r.x - x, r.y - y) < R + r.r) for (let k = 0; k < 3 && S.rochas.includes(r); k++) batidaRocha(r);
    bip(110, 0.18, 'sawtooth', 0.05); bip(70, 0.2, 'square', 0.04, 0.05);
  }

  function atualizarPoderes(dt) {
    const ativa = S.arma >= 2 ? S.slots[S.arma - 2] : 'normal';
    const rec = S.recM * S.recargaGlobal;

    // laser contínuo: dano alto, alcance curto, gasta energia e depois recarrega
    S.laser = null;
    let atirando = false;
    if (ativa === 'laser' && !S.laserQuente) {
      const nivel = S.armasNivel.laser;
      const alvo = escolherAlvo(), alc = S.laserAlc * (1 + 0.18 * (nivel - 1));
      if (alvo && Math.hypot(alvo.x - S.nx, alvo.y - S.ny) < alc + raioDe(alvo)) {
        atirando = true;
        const ang = Math.atan2(alvo.y - S.ny, alvo.x - S.nx), c = Math.cos(ang), s = Math.sin(ang);
        S.mira = ang; S.laser = { ang, len: alc };
        S.laserE -= dt * 1.15;
        if (S.laserE <= 0) { S.laserE = 0; S.laserQuente = true; bip(180, 0.2, 'sawtooth', 0.04); }
        S.laserTick -= dt;
        if (S.laserTick <= 0) {
          S.laserTick = 0.1; S.laserN += 1;
          const dano = S.laserDano * (0.5 + 0.5 * S.dano) * S.danoGlobal * (1 + 0.3 * (nivel - 1)) * 0.1;
          for (const m of [...S.inimigos]) {
            const dx = m.x - S.nx, dy = m.y - S.ny, ao = dx * c + dy * s, pe = Math.abs(-dx * s + dy * c), rr = raioInim(m);
            if (!(m.sumido > 0) && ao > 0 && ao < alc + rr && pe < rr + 3) { danificar(m, dano); if (Math.random() < 0.4) particulas(m.x, m.y, 1, ['#8bd3ff', '#ffffff'], 40); }
          }
          if (S.laserN % 3 === 0) for (const r of [...S.rochas]) { const dx = r.x - S.nx, dy = r.y - S.ny, ao = dx * c + dy * s, pe = Math.abs(-dx * s + dy * c); if (ao > 0 && ao < alc + r.r && pe < r.r + 2) batidaRocha(r); }
          som('laser', 90, () => bip(300 + Math.random() * 60, 0.06, 'sawtooth', 0.02));
        }
      }
    }
    if (!atirando) {
      const nivel = Math.max(1, S.armasNivel.laser), max = S.laserMax * (1 + 0.18 * (nivel - 1));
      S.laserE = Math.min(max, S.laserE + dt * max * 0.13 * rec * (1 + 0.18 * (nivel - 1)));
      if (S.laserQuente && S.laserE >= S.laserMax * 0.6) S.laserQuente = false;
    }

    // míssil: dano em área nos inimigos mais próximos
    if (ativa === 'missil') {
      S.missilT -= dt;
      if (S.missilT <= 0) {
        const cand = [...S.inimigos.filter((m) => !(m.sumido > 0) && naTela(m)), ...S.rochas.filter(naTela)]
          .map((o) => ({ o, d: Math.hypot(o.x - S.nx, o.y - S.ny) })).filter((p) => p.d < 135).sort((p, q) => p.d - q.d);
        if (cand.length) {
          const nivel = S.armasNivel.missil;
          const n = 1 + (nivel >= 3 ? 1 : 0) + (nivel >= 4 ? 1 : 0);
          for (let i = 0; i < n; i++) {
            const alvo = cand[i % cand.length].o;
            S.misseis.push({ x: S.nx, y: S.ny, ang: Math.atan2(alvo.y - S.ny, alvo.x - S.nx) + (i - (n - 1) / 2) * 0.9, alvo, vida: 2, v: 70 });
          }
          S.missilMax = 3.6 / (rec * (1 + 0.22 * (nivel - 1))); S.missilT = S.missilMax;
          bip(240, 0.12, 'sawtooth', 0.04); bip(420, 0.12, 'sawtooth', 0.03, 0.06);
        } else S.missilT = 0;
      }
    }
    for (let i = S.misseis.length - 1; i >= 0; i--) { // mísseis em voo seguem o alvo
      const m = S.misseis[i], a = m.alvo;
      const vivo = a && (a.hp > 0) && !a.morto && (S.inimigos.includes(a) || S.rochas.includes(a));
      if (vivo) { const alvoAng = Math.atan2(a.y - m.y, a.x - m.x); let df = alvoAng - m.ang; df = Math.atan2(Math.sin(df), Math.cos(df)); m.ang += Math.max(-6 * dt, Math.min(6 * dt, df)); }
      m.v = Math.min(150, m.v + 160 * dt);
      m.x += Math.cos(m.ang) * m.v * dt; m.y += Math.sin(m.ang) * m.v * dt; m.vida -= dt;
      if (Math.random() < 0.6) S.parts.push({ x: m.x, y: m.y, vx: 0, vy: 0, vida: 0.25, cor: Math.random() < 0.5 ? '#ffd23f' : '#ff7a3a' });
      if ((vivo && Math.hypot(a.x - m.x, a.y - m.y) < raioDe(a) + 3) || m.vida <= 0) { S.misseis.splice(i, 1); explosaoMissil(m.x, m.y); }
    }

    // bolas de energia: giram em volta da nave e ferem por contato
    if (ativa === 'orbes') {
      const nivel = S.armasNivel.orbes;
      S.orbeAng += dt * 3.2 * (1 + 0.18 * (nivel - 1)) * S.recargaGlobal;
      const dano = (2 + S.dano * 0.5) * S.danoGlobal * (1 + 0.32 * (nivel - 1));
      for (const o of orbesPos()) {
        for (const m of [...S.inimigos]) {
          if (m.sumido > 0) continue;
          m.cdOrbe = (m.cdOrbe || 0) - dt;
          if (m.cdOrbe <= 0 && Math.hypot(o.x - m.x, o.y - m.y) < raioInim(m) + 4) { danificar(m, dano); m.cdOrbe = 0.35; particulas(m.x, m.y, 2, ['#ff3bd4', '#ffffff'], 40); }
        }
        for (const r of [...S.rochas]) {
          r.cdOrbe = (r.cdOrbe || 0) - dt;
          if (r.cdOrbe <= 0 && Math.hypot(o.x - r.x, o.y - r.y) < r.r + 4) { batidaRocha(r); r.cdOrbe = 0.5; }
        }
      }
    }

    // hiperpropulsor: velocidade alta enquanto selecionado, com bateria própria
    const nvTurbo = Math.max(1, S.armasNivel.turbo), boostMax = 3 + 0.75 * (nvTurbo - 1);
    S.boostMax = boostMax;
    if (ativa === 'turbo' && S.movendo && S.boostE > 0) {
      S.boostE = Math.max(0, S.boostE - dt);
      if (Math.random() < 0.45) S.parts.push({ x: S.nx - S.dirX * 7, y: S.ny - S.dirY * 7, vx: -S.dirX * 20, vy: -S.dirY * 20, vida: 0.25, cor: Math.random() < 0.5 ? '#7dff9a' : '#ffffff' });
    } else S.boostE = Math.min(boostMax, S.boostE + dt * 0.5 * rec * (1 + 0.12 * (nvTurbo - 1)));

    // nanorreparo: ao selecionar com carga pronta, recupera vida
    const nvCura = Math.max(1, S.armasNivel.cura); S.curaMax = Math.max(4.5, (11 - 1.6 * (nvCura - 1)) / rec); S.curaCd = Math.max(0, S.curaCd - dt);
    if (ativa === 'cura' && S.curaCd <= 0 && S.hp < S.maxHp) {
      const cura = 1 + (nvCura >= 3 ? 1 : 0) + (nvCura >= 4 ? 1 : 0); S.hp = Math.min(S.maxHp, S.hp + cura); S.curaCd = S.curaMax;
      S.ondas.push({ x: S.nx, y: S.ny, r: 0, max: 30, v: 80, cor: '#7dff9a' }); particulas(S.nx, S.ny, 12, ['#7dff9a', '#ffffff'], 45); texto(S.nx, S.ny - 13, `+${cura} VIDA`, '#7dff9a'); bip(660, 0.12, 'sine', 0.05); bip(880, 0.16, 'sine', 0.04, 0.1);
    }

    // escudo de fase: invulnerabilidade temporária após a carga
    const nvEscudo = Math.max(1, S.armasNivel.escudo); S.escudoMax = Math.max(6, (13 - 1.3 * (nvEscudo - 1)) / rec); S.escudoCd = Math.max(0, S.escudoCd - dt);
    if (ativa === 'escudo' && S.escudoCd <= 0 && S.escudoT <= 0) {
      S.escudoT = 2.4 + 0.75 * (nvEscudo - 1); S.escudoCd = S.escudoMax; S.ondas.push({ x: S.nx, y: S.ny, r: 0, max: 34, v: 100, cor: '#8bd3ff' }); texto(S.nx, S.ny - 13, 'ESCUDO DE FASE', '#8bd3ff'); bip(440, 0.18, 'triangle', 0.05);
    }

    // buraco de minhoca: primeiro desacelera e concentra energia; depois vem o salto
    const nvSalto = Math.max(1, S.armasNivel.salto); S.saltoMax = Math.max(3.5, (8 - 0.85 * (nvSalto - 1)) / rec); S.saltoCd = Math.max(0, S.saltoCd - dt); S.saltoCargaMax = Math.max(0.42, 0.82 - 0.1 * (nvSalto - 1));
    if (ativa !== 'salto' || !S.movendo) S.saltoCarga = 0;
    else if (S.saltoCd <= 0 && S.saltoCarga <= 0) { S.saltoCarga = S.saltoCargaMax; bip(180, 0.16, 'sine', 0.04); }
    if (ativa === 'salto' && S.saltoCarga > 0) {
      S.saltoCarga -= dt;
      if (Math.random() < 0.55) S.parts.push({ x: S.nx + (Math.random() - 0.5) * 18, y: S.ny + (Math.random() - 0.5) * 18, vx: -S.dirX * 8, vy: -S.dirY * 8, vida: 0.22, cor: Math.random() < 0.5 ? '#a56bff' : '#ffffff' });
      if (S.saltoCarga <= 0) {
        const ox = S.nx, oy = S.ny, dist = 58 + 18 * nvSalto; S.nx += S.dirX * dist; S.ny += S.dirY * dist;
        if (S.alien) { S.nx = Math.max(ARENA.x0, Math.min(ARENA.x1, S.nx)); S.ny = Math.max(ARENA.y0, Math.min(ARENA.y1, S.ny)); }
        S.saltoCd = S.saltoMax; S.invul = Math.max(S.invul, 0.35); S.ondas.push({ x: ox, y: oy, r: 0, max: 24, v: 120, cor: '#a56bff' }); S.ondas.push({ x: S.nx, y: S.ny, r: 0, max: 24, v: 120, cor: '#a56bff' }); particulas(ox, oy, 14, ['#a56bff', '#ffffff'], 60); particulas(S.nx, S.ny, 14, ['#a56bff', '#ffffff'], 60); S.flash = Math.max(S.flash, 0.12); bip(220, 0.1, 'sine', 0.05); bip(880, 0.14, 'sine', 0.04, 0.08);
      }
    }

    // drift ígneo: arrancada temporária que deixa uma trilha incendiária
    const nvDrift = Math.max(1, S.armasNivel.drift); S.driftMax = Math.max(3.2, (7 - 0.7 * (nvDrift - 1)) / rec); S.driftCd = Math.max(0, S.driftCd - dt); S.driftT = Math.max(0, S.driftT - dt);
    if (ativa === 'drift' && S.driftCd <= 0 && S.movendo && S.driftT <= 0) { S.driftT = 0.75 + 0.22 * nvDrift; S.driftCd = S.driftMax; S.driftAcc = 0; S.tremor = Math.max(S.tremor, 0.12); bip(130, 0.22, 'sawtooth', 0.05); }
    if (S.driftT > 0 && S.movendo) {
      S.driftAcc -= dt;
      if (S.driftAcc <= 0) { S.driftAcc = 0.055; S.trilhasFogo.push({ x: S.nx - S.dirX * 7, y: S.ny - S.dirY * 7, vida: 1 + 0.12 * nvDrift, max: 1 + 0.12 * nvDrift, nv: nvDrift }); }
    }
    for (const m of S.inimigos) m.cdFogo = Math.max(0, (m.cdFogo || 0) - dt);
    for (let i = S.trilhasFogo.length - 1; i >= 0; i--) {
      const fogo = S.trilhasFogo[i]; fogo.vida -= dt;
      for (const m of [...S.inimigos]) if (!(m.sumido > 0) && m.cdFogo <= 0 && Math.hypot(m.x - fogo.x, m.y - fogo.y) < raioInim(m) + 7) { danificar(m, (1.2 + fogo.nv * 0.75) * S.danoGlobal); m.cdFogo = 0.22; }
      if (fogo.vida <= 0) S.trilhasFogo.splice(i, 1);
    }
  }

  function atualizarProjeteis(dt) {
    for (let i = S.tiros.length - 1; i >= 0; i--) {
      const b = S.tiros[i];
      b.x += b.vx * dt; b.y += b.vy * dt;
      if (Math.hypot(b.x - S.nx, b.y - S.ny) > 260) { S.tiros.splice(i, 1); continue; }
      let removida = false;
      for (const m of [...S.inimigos]) {
        if (b.acertou.has(m) || m.sumido > 0) continue;
        if (Math.hypot(b.x - m.x, b.y - m.y) < raioInim(m) + 2) {
          b.acertou.add(m);
          particulas(b.x, b.y, 2, ['#ffe14a', '#ffffff'], 40);
          danificar(m, b.dano);
          if (b.perf > 0) b.perf -= 1; else { removida = true; break; }
        }
      }
      if (!removida) {
        for (const r of [...S.rochas]) {
          if (b.acertou.has(r)) continue;
          if (Math.hypot(b.x - r.x, b.y - r.y) < r.r + 2) {
            b.acertou.add(r); batidaRocha(r);
            if (b.perf > 0) b.perf -= 1; else { removida = true; break; }
          }
        }
      }
      if (removida) S.tiros.splice(i, 1);
    }
  }

  function atualizarInimigosTiros(dt) {
    for (let i = S.tirosInimigos.length - 1; i >= 0; i--) {
      const b = S.tirosInimigos[i];
      if (b.giro) { // teleguiado: gira devagar para a nave
        const v = Math.hypot(b.vx, b.vy), atual = Math.atan2(b.vy, b.vx), alvo = Math.atan2(S.ny - b.y, S.nx - b.x), d = Math.atan2(Math.sin(alvo - atual), Math.cos(alvo - atual));
        const n = atual + Math.max(-b.giro * dt, Math.min(b.giro * dt, d)); b.vx = Math.cos(n) * v; b.vy = Math.sin(n) * v;
      }
      if (b.fica > 0) { // congelado: fica parado e depois dispara em direção à nave
        b.fica -= dt;
        if (b.fica <= 0) { const an = Math.atan2(S.ny - b.y, S.nx - b.x); b.vx = Math.cos(an) * b.vRe; b.vy = Math.sin(an) * b.vRe; bip(520 + Math.random() * 200, 0.04, 'square', 0.02); }
      }
      if (b.ex != null) { // esporo: estoura em vários tiros pequenos
        b.ex -= dt;
        if (b.ex <= 0) {
          const rot = Math.random() * 6.28; for (let k = 0; k < b.n; k++) tiroEsp(b.x, b.y, rot + (k * Math.PI * 2) / b.n, 50, { cor: b.cor, forma: 'esporo', r: 1.5, vida: 3 });
          particulas(b.x, b.y, 5, [b.cor, '#ffffff'], 40); S.tirosInimigos.splice(i, 1); continue;
        }
      }
      b.x += b.vx * dt; b.y += b.vy * dt; b.vida -= dt;
      if (b.quica > 0 && S.alien) { // rebate nas paredes da arena
        if ((b.x < ARENA.x0 && b.vx < 0) || (b.x > ARENA.x1 && b.vx > 0)) { b.vx = -b.vx; b.quica -= 1; particulas(b.x, b.y, 3, [b.cor, '#ffffff'], 40); }
        if ((b.y < ARENA.y0 && b.vy < 0) || (b.y > ARENA.y1 && b.vy > 0)) { b.vy = -b.vy; b.quica -= 1; particulas(b.x, b.y, 3, [b.cor, '#ffffff'], 40); }
      }
      if (b.vida <= 0 || Math.hypot(b.x - S.nx, b.y - S.ny) > 420 || (S.alien && (b.x < ARENA.x0 - 40 || b.x > ARENA.x1 + 40 || b.y < ARENA.y0 - 40 || b.y > ARENA.y1 + 40))) { S.tirosInimigos.splice(i, 1); continue; }
      if (Math.hypot(b.x - S.nx, b.y - S.ny) < RAIO_NAVE + (b.r ?? 1.5)) { ferirNave(b.dano); particulas(b.x, b.y, 4, ['#ff5a8a', '#ffffff'], 50); S.tirosInimigos.splice(i, 1); }
    }
    for (let i = S.raios.length - 1; i >= 0; i--) { // raios do alienígena: aviso fino e depois o raio
      const r = S.raios[i];
      if (r.dono) { if (r.dono.morto) { S.raios.splice(i, 1); continue; } r.x = r.dono.x; r.y = r.dono.y; }
      if (r.aviso > 0) { r.aviso -= dt; continue; }
      if (!r.ligou) { r.ligou = true; S.tremor = Math.max(S.tremor, 0.2); bip(110, 0.4, 'sawtooth', 0.06); }
      r.vida -= dt; r.tick -= dt;
      if (r.giro) r.ang += r.giro * dt;
      if (r.seg && S.alien) { r.x = S.alien.x; r.y = S.alien.y + 8; } // alguns raios acompanham o alienígena
      const dx = S.nx - r.x, dy = S.ny - r.y, ao = dx * Math.cos(r.ang) + dy * Math.sin(r.ang), pe = Math.abs(-dx * Math.sin(r.ang) + dy * Math.cos(r.ang));
      if (ao > 0 && ao < 400 && pe < 8 && r.tick <= 0) { ferirNave(r.dano || 1); r.tick = 0.3; }
      if (r.vida <= 0) S.raios.splice(i, 1);
    }
    for (let i = S.campos.length - 1; i >= 0; i--) { // áreas de bomba
      const c = S.campos[i];
      if (c.aviso > 0) { c.aviso -= dt; if (c.aviso <= 0) { S.tremor = Math.max(S.tremor, 0.15); bip(100, 0.2, 'sawtooth', 0.05); } continue; }
      c.vida -= dt; c.tick -= dt;
      if (c.lento) { if (Math.hypot(S.nx - c.x, S.ny - c.y) < c.r) S.lentidao = Math.min(S.lentidao || 1, c.lento); if (c.vida <= 0) S.campos.splice(i, 1); continue; }
      if (Math.hypot(S.nx - c.x, S.ny - c.y) < c.r + 3 && c.tick <= 0) { ferirNave(1); c.tick = 0.5; }
      if (c.vida <= 0) S.campos.splice(i, 1);
    }
  }

  function atualizarContatos() {
    for (const m of [...S.inimigos]) {
      const tp = TIPOS[m.tipo];
      const d = Math.hypot(m.x - S.nx, m.y - S.ny);
      if (d >= raioInim(m) + RAIO_NAVE || m.sumido > 0) continue;
      if (m.tipo === 'chefe' || m.tipo === 'alien' || m.tipo === 'nativo') { // grandes não morrem no contato: ferem e empurram a nave
        if (ferirNave(tp.dano)) { const dx = S.nx - m.x, dy = S.ny - m.y, dd = Math.hypot(dx, dy) || 1; S.nx += (dx / dd) * 18; S.ny += (dy / dd) * 18; }
        continue;
      }
      if (tp.dano <= 0) { const dx = m.x - S.nx, dy = m.y - S.ny, dd = Math.hypot(dx, dy) || 1; m.x += (dx / dd) * 8; m.y += (dy / dd) * 8; continue; }
      particulas(m.x, m.y, 10, ['#ff3b4a', '#ffb3ba', '#ffffff'], 70);
      const i = S.inimigos.indexOf(m); if (i >= 0) S.inimigos.splice(i, 1);
      ferirNave(tp.dano);
    }
  }

  function atualizar(dt) {
    S.ta += dt;
    if (!S.alien) S.t += dt;
    S.invul = Math.max(0, S.invul - dt); S.tremor = Math.max(0, S.tremor - dt); S.flash = Math.max(0, S.flash - dt);
    if (S.intro) { S.intro.t += dt; if (S.intro.t >= S.intro.dur) S.intro = null; }
    if (S.faseIntro) { S.faseIntro.t += dt; if (S.faseIntro.t >= S.faseIntro.dur) S.faseIntro = null; }
    if (!S.alien) { S.proxNativo -= dt; if (S.proxNativo <= 0) { S.proxNativo = 22 + Math.random() * 10; if (!S.chefe && S.ondaEstado !== 'chefe') spawnNativos(1); } }
    S.invertidoT = Math.max(0, (S.invertidoT || 0) - dt);
    for (const k of S.tintas) k.vida -= dt;
    S.tintas = S.tintas.filter((k) => k.vida > 0);
    S.imaT = Math.max(0, S.imaT - dt); S.turboT = Math.max(0, S.turboT - dt); S.escudoT = Math.max(0, S.escudoT - dt);
    S.buffVelT = Math.max(0, S.buffVelT - dt); S.buffXpT = Math.max(0, S.buffXpT - dt);
    if (S.buffDanoT > 0) { S.buffDanoT -= dt; if (S.buffDanoT <= 0) { S.buffDanoT = 0; S.danoGlobal /= 1.5; } }
    S.aviso = Math.max(0, S.aviso - dt);
    if (S.comboT > 0) { S.comboT -= dt; if (S.comboT <= 0) S.combo = 0; }
    if (S.upgFx) { S.upgFx.t -= dt; if (S.upgFx.t <= 0) S.upgFx = null; }

    moverNave(dt);
    if (S.alien) atualizarAlien(dt); else atualizarMundo(dt);
    S.recarga -= dt;
    if (S.arma === 1 && S.recarga <= 0) {
      const alvo = escolherAlvo();
      if (alvo) { atirar(alvo); S.recarga = 1 / (S.cadencia * S.recargaGlobal * (S.turboT > 0 ? 2 : 1)); } else S.recarga = 0.05;
    }
    if (S.barreira < S.barreiraMax) { S.barreiraT += dt; if (S.barreiraT >= S.tempoBarreira) { S.barreira += 1; S.barreiraT = 0; texto(S.nx, S.ny - 12, 'ESCUDO ON', '#7dff9a'); bip(520, 0.08, 'triangle', 0.04); } }
    atualizarPoderes(dt);
    atualizarProjeteis(dt);
    atualizarInimigosTiros(dt);
    atualizarContatos();

    for (const o of S.ondas) o.r += o.v * dt;
    S.ondas = S.ondas.filter((o) => o.r < o.max);
    for (let i = S.parts.length - 1; i >= 0; i--) { const p = S.parts[i]; p.x += p.vx * dt; p.y += p.vy * dt; p.vida -= dt; if (p.vida <= 0) S.parts.splice(i, 1); }
    for (let i = S.textos.length - 1; i >= 0; i--) { const t = S.textos[i]; t.y -= 14 * dt; t.vida -= dt; if (t.vida <= 0) S.textos.splice(i, 1); }
    for (const m of S.inimigos) m.piscar = Math.max(0, (m.piscar || 0) - dt);

    if (S.hp <= 0 && !S.pendente) { if (S.alien) S.pendente = 'expulso'; else { fimDeJogo(); return; } }
    if (S.pendente) { const p = S.pendente; S.pendente = null; sairDoBuraco(p === 'vitoria'); return; }
    if (S.xp >= S.xpProx) subirNivel();
  }

  // ---------- melhorias ----------
  let opcoes = [];
  const nivelMelhoria = (m) => m.nivel ? m.nivel(S) : (S.niveis[m.id] | 0);
  function sortearOpcoes(disponiveis, quantidade = 3) {
    const pool = [...disponiveis], saida = [];
    const tirarSorteado = (lista) => {
      const peso = (m) => (typeof m.peso === 'function' ? m.peso(S) : m.peso) || 1;
      const total = lista.reduce((s, m) => s + peso(m), 0); let r = Math.random() * total;
      for (const m of lista) { r -= peso(m); if (r <= 0) return m; }
      return lista[lista.length - 1];
    };
    // Toda subida oferece ao menos um atributo fundamental da nave, enquanto houver algum disponível.
    const idsNave = new Set(['dano_geral', 'reparo', 'armadura', 'motor', 'recarga_geral']);
    const fundamentais = pool.filter((m) => idsNave.has(m.id));
    if (fundamentais.length && quantidade > 0) {
      const escolhido = tirarSorteado(fundamentais), i = pool.indexOf(escolhido);
      saida.push(escolhido); pool.splice(i, 1);
    }
    while (pool.length && saida.length < quantidade) {
      const peso = (m) => (typeof m.peso === 'function' ? m.peso(S) : m.peso) || 1;
      const total = pool.reduce((s, m) => s + peso(m), 0); let r = Math.random() * total, escolhido = 0;
      for (let i = 0; i < pool.length; i++) { r -= peso(pool[i]); if (r <= 0) { escolhido = i; break; } }
      saida.push(pool.splice(escolhido, 1)[0]);
    }
    return saida;
  }
  function subirNivel() {
    S.xp -= S.xpProx;
    S.nivel += 1;
    S.xpProx = Math.round(S.xpProx * 1.3 + 2);
    const disponiveis = MELHORIAS.filter((m) => nivelMelhoria(m) < m.max && (!m.requer || m.requer(S)));
    opcoes = sortearOpcoes(disponiveis);
    if (!opcoes.length) return;
    modo = 'escolha';
    bip(784, 0.1, 'square', 0.05); bip(988, 0.1, 'square', 0.05, 0.1); bip(1319, 0.16, 'square', 0.05, 0.2);
    painelEscolha.className = 'arc-painel arc-upgrade';
    const cab = el('div', 'arc-up-topo');
    const tit = el('div'); tit.append(el('small', null, `SUBIU PARA O NÍVEL ${S.nivel}`), el('h3', null, 'ESCOLHA UM UPGRADE'));
    const atributos = el('div', 'arc-arsenal arc-atributos');
    const n = S.niveis;
    for (const txt of [`✦ DANO ${n.dano_geral | 0}`, `♥ VIDA ${n.reparo | 0}`, `⬢ ARM ${S.armadura}`, `➤ VEL ${n.motor | 0}`, `↻ REC ${n.recarga_geral | 0}`]) atributos.append(el('span', 'on', txt));
    cab.append(tit, atributos);
    const lista = el('div', 'arc-cartas');
    opcoes.forEach((m, i) => {
      const atual = nivelMelhoria(m), b = el('button', 'arc-carta'); b.style.setProperty('--cor', m.cor || '#4aa8ff');
      const topoCarta = el('span', 'arc-carta-topo'); topoCarta.append(el('i', null, m.icone || '▲'), el('small', null, m.grupo || 'UPGRADE'), el('em', null, (typeof m.raridade === 'function' ? m.raridade(S) : m.raridade) || 'COMUM'));
      const pips = el('span', 'arc-up-pips'); for (let n = 1; n <= m.max; n++) pips.append(el('i', n <= atual ? 'on' : n === atual + 1 ? 'prox' : ''));
      b.append(topoCarta, el('b', null, m.nome), el('span', 'arc-desc', m.desc), pips, el('strong', null, `[${i + 1}] ESCOLHER · N${atual} → N${atual + 1}`));
      b.onclick = () => escolher(i);
      lista.append(b);
    });
    painelEscolha.replaceChildren(cab, lista, el('p', 'arc-up-dica', 'Dano, vida, armadura, velocidade e recarga afetam a nave inteira. Evoluções de arma continuam específicas.'));
    painelEscolha.hidden = false;
  }
  function escolher(i) {
    if (modo !== 'escolha' || !opcoes[i]) return;
    const m = opcoes[i];
    m.aplicar(S);
    if (!m.nivel) S.niveis[m.id] = (S.niveis[m.id] | 0) + 1;
    atualizarNaveSpr();
    S.upgFx = { t: 1, max: 1 };
    particulas(S.nx, S.ny, 18, ['#ffe14a', '#ffffff', '#8bd3ff'], 80);
    texto(S.nx, S.ny - 16, `▲ ${m.nome}`, '#ffe14a');
    painelEscolha.hidden = true;
    modo = 'jogando';
    ultimo = performance.now();
    bip(660, 0.08, 'triangle', 0.05);
  }

  // ---------- oficina: a nave aberta, com cada peça ligada às suas melhorias ----------
  const PARTES = [
    { nome: 'NÚCLEO DE ENERGIA', sub: 'Reator principal: energia para todos os sistemas', lado: 'esq', ancora: [0.5, 0.5], ids: ['nucleo', 'cadencia', 'bateria'] },
    { nome: 'MOTOR PRINCIPAL', sub: 'Propulsão, impulso e velocidade', lado: 'esq', ancora: [0.16, 0.6], ids: ['motor'] },
    { nome: 'ESTRUTURA / CASCO', sub: 'Vida, blindagem e resistência a danos', lado: 'esq', ancora: [0.27, 0.27], ids: ['casco', 'armadura'] },
    { nome: 'ANTENA / SENSORES', sub: 'Detecção de cristais e ganho de XP', lado: 'dir', ancora: [0.5, 0.07], ids: ['ima', 'xp'] },
    { nome: 'ARMAS LATERAIS', sub: 'Amplificador global e módulos específicos', lado: 'dir', ancora: [0.88, 0.42], ids: ['dano', 'projetil', 'lente'] },
    { nome: 'ESCUDO', sub: 'Barreira de energia regenerativa', lado: 'dir', ancora: [0.8, 0.8], ids: ['escudo'] },
  ];
  const canvasNave = document.createElement('canvas'); canvasNave.width = canvasNave.height = 128; canvasNave.className = 'of-nave';
  const gNave = canvasNave.getContext('2d'); gNave.imageSmoothingEnabled = false;
  let naveBase = null, fxOficina = null;

  function montarNave(nv) { // desenha a nave aberta (parte parada); as luzes e chamas são animadas por cima
    const s = novoSprite(128, 128);
    const pp = pecasPrincipais(dados.projeto), mods = { chassi: pp.chassi, arma: pp.arma, propulsor: pp.motor, reator: pp.reator, eletronica: pp.placa };
    const AZ = temaYas ? '#496044' : temaFer ? '#172b59' : '#2e7de0';
    const CIN = temaYas ? '#b9a58b' : temaFer ? '#91a0c8' : '#8b93a8';
    const CIN2 = temaYas ? '#76513d' : temaFer ? '#354582' : '#5a6176';
    const CIN3 = temaYas ? '#e8d5b8' : temaFer ? '#b8c8ef' : '#c9cdd8';
    const ESC = temaYas ? '#28241f' : temaFer ? '#090d24' : '#171b2c';
    const LAR = temaYas ? '#d88b55' : temaFer ? '#6c5cff' : '#ff7a3a';
    const VERM = temaYas ? '#b7683f' : temaFer ? '#2d7fc7' : '#e2533a';
    for (const [x0, x1] of [[44, 34], [82, 92]]) { // trem de pouso
      for (let k = 0; k < 3; k++) s.linha(x0 + k, 92, x1 + k, 118, k === 1 ? CIN : CIN2);
      s.retangulo(x1 - 5, 118, 13, 3, CIN3);
    }
    s.retangulo(0, 122, 128, 6, temaYas ? '#332b24' : temaFer ? '#090d24' : '#12172b'); // plataforma com faixas de alerta
    for (let i = 0; i < 128; i += 8) s.retangulo(i, 123, 4, 4, temaYas ? '#d8b68e' : temaFer ? '#55e2e0' : '#ffd23f');
    s.disco(62, 60, 38, AZ); // casco
    if (mods.chassi === 'interceptor') { s.poligono([[58, 21], [94, 48], [103, 60], [94, 72], [58, 99]], AZ); s.poligono([[35, 31], [55, 43], [45, 49]], LAR); s.poligono([[35, 89], [55, 77], [45, 71]], LAR); }
    else if (mods.chassi === 'blindado') { for (const [x, y, w, h] of [[29, 33, 16, 12], [29, 76, 16, 12], [77, 30, 17, 13], [78, 77, 17, 13]]) { s.retangulo(x, y, w, h, CIN); s.retangulo(x + 2, y + 2, w - 4, h - 4, CIN2); } }
    else if (mods.chassi === 'modular') for (const [x, y] of [[34, 34], [88, 34], [34, 85], [88, 85]]) { s.disco(x, y, 5, CIN); s.disco(x, y, 2, temaFer ? '#55e2e0' : '#7dff9a'); }
    s.disco(65, 62, 33, ESC); // interior aberto
    s.elipse(46, 30, 7, 3, temaYas ? '#fff1d7' : temaFer ? '#d6fbff' : '#cfe9ff'); s.elipse(40, 36, 3, 2, temaYas ? '#d8b68e' : temaFer ? '#8faeff' : '#9cc9ff');
    for (const [x, y, w, h] of [[40, 44, 14, 9], [42, 70, 12, 10], [78, 44, 12, 8], [80, 72, 14, 9], [56, 84, 16, 7], [56, 36, 14, 7]]) { s.retangulo(x, y, w, h, CIN2); s.retangulo(x, y, w, 1, CIN); s.retangulo(x + 2, y + 3, w - 4, 2, '#2d3348'); }
    for (const [x0, y0, x1, y1] of [[40, 60, 52, 60], [78, 60, 92, 60], [65, 40, 65, 50], [65, 74, 65, 84], [47, 53, 47, 66], [86, 52, 86, 70]]) { s.linha(x0, y0, x1, y1, LAR); s.linha(x0 + 1, y0 + 1, x1 + 1, y1 + 1, '#b34a1e'); }
    for (const [x, y, c] of [[86, 49, '#ffd23f'], [45, 47, '#ff3b4a'], [82, 76, '#7dff9a'], [60, 87, '#ffd23f']]) s.pixel(x, y, c);
    s.disco(65, 62, 14, CIN); s.disco(65, 62, 12, '#10131f'); // caixa do núcleo
    for (const [x, y] of [[50, 47], [79, 47], [50, 76], [79, 76]]) s.retangulo(x, y, 3, 3, CIN3);
    for (let k = 0; k < nv.bateria; k++) { s.retangulo(51 + k * 5, 85, 4, 6, '#10131f'); s.retangulo(52 + k * 5, 86, 2, 4, '#7dff9a'); }
    s.disco(80, 34, 5, CIN3); s.disco(80, 34, 4, temaYas ? '#f2d7ae' : temaFer ? '#55e2e0' : '#8bd3ff'); s.retangulo(77, 33, 6, 1, temaYas ? '#fff1d7' : temaFer ? '#d6fbff' : '#ffffff'); // cabine
    if (temaYas) { // pintura botânica e adesivos da nave da Yas
      for (const [x, y] of [[30, 28], [34, 25], [38, 28], [34, 31]]) s.disco(x, y, 2, '#91a56b');
      s.disco(34, 28, 2, '#e5b85c');
      s.retangulo(22, 82, 10, 4, '#e8d5b8'); s.retangulo(24, 83, 6, 2, '#c96f45');
    }
    if (temaFer) { // lua, cristais e circuito elétrico da nave abissal
      s.disco(32, 29, 6, '#55e2e0'); s.disco(35, 27, 6, AZ);
      s.poligono([[24, 82], [28, 76], [32, 82], [28, 88]], '#6c5cff');
      s.poligono([[32, 84], [35, 79], [38, 84], [35, 89]], '#55e2e0');
      s.linha(43, 27, 48, 27, '#d6fbff'); s.linha(46, 24, 46, 30, '#d6fbff');
    }
    for (let k = 0; k < nv.casco; k++) { // placas extras do casco
      const an = 2.6 + k * 0.5, px = Math.round(62 + Math.cos(an) * 35), py = Math.round(60 + Math.sin(an) * 35);
      s.retangulo(px - 2, py - 2, 5, 5, CIN2); s.retangulo(px - 1, py - 1, 3, 3, CIN3);
    }
    const bonusCanos = mods.arma === 'duplo' ? 1 : mods.arma === 'dispersor' ? 2 : 0;
    const n = Math.min(4, 1 + nv.projetil + bonusCanos), len = (mods.arma === 'rail' ? 28 : 18) + Math.floor(nv.dano * 1.6);
    for (let i = 0; i < n; i++) { // canhões laterais
      const y = 48 + i * (n > 3 ? 7 : 9);
      s.retangulo(88, y - 2, 8, 9, CIN); s.retangulo(90, y, len, 5, VERM); s.retangulo(90, y, len, 1, '#ff9a6a'); s.retangulo(90 + len, y - 1, 3, 7, CIN3);
      if (nv.lente > 0) s.disco(90 + len + 5, y + 2, 2, '#7be3ff');
      for (let k = 0; k < nv.cadencia; k++) s.retangulo(92 + k * 4, y + 1, 1, 3, '#ffd23f');
    }
    s.retangulo(16, 50, 24, 22, CIN); for (const x of [20, 26, 32]) s.retangulo(x, 50, 2, 22, CIN2); // motor
    s.poligono([[16, 50], [8, 44], [8, 78], [16, 72]], CIN2); s.poligono([[14, 54], [10, 50], [10, 72], [14, 68]], '#10131f');
    if (nv.motor >= 3) { s.retangulo(18, 76, 14, 6, CIN); s.retangulo(14, 76, 4, 6, CIN2); }
    if (nv.motor >= 2) { s.poligono([[28, 50], [32, 41], [36, 50]], LAR); s.poligono([[28, 72], [32, 81], [36, 72]], LAR); }
    if (mods.propulsor === 'ionico') { s.retangulo(10, 48, 8, 8, CIN); s.retangulo(10, 67, 8, 8, CIN); s.retangulo(7, 50, 4, 4, '#55e2e0'); s.retangulo(7, 69, 4, 4, '#55e2e0'); }
    else if (mods.propulsor === 'plasma') { s.disco(12, 61, 8, '#6c5cff'); s.disco(12, 61, 4, '#d6fbff'); }
    else if (mods.propulsor === 'vetorial') for (const y of [48, 61, 74]) { s.retangulo(8, y, 9, 6, CIN2); s.retangulo(5, y + 1, 4, 4, '#7dff9a'); }
    s.retangulo(63, 10, 3, 14, CIN); s.disco(64, 8, 4, temaYas ? '#d88b55' : temaFer ? '#55e2e0' : '#e2243a'); s.pixel(63, 6, temaYas ? '#fff1d7' : temaFer ? '#d6fbff' : '#ffb3ba'); // antena
    for (let k = 0; k < Math.min(4, nv.ima); k++) s.elipse(72 + k * 5, 17 - k * 2, 4, 2, k % 2 ? CIN : CIN3);
    if (nv.xp > 0) { s.retangulo(55, 14, 2, 8, CIN); s.disco(56, 13, 2, '#7dff9a'); }
    if (mods.eletronica === 'mira') { s.linha(72, 20, 82, 12, '#ff3b4a'); s.disco(83, 11, 3, '#ff3b4a'); }
    else if (mods.eletronica === 'coletor') { s.elipse(48, 14, 11, 4, '#55e2e0'); s.linha(48, 14, 55, 23, CIN3); }
    else if (mods.eletronica === 'overclock') for (const [x, y] of [[45, 45], [83, 45], [45, 78], [83, 78]]) { s.retangulo(x, y, 4, 4, '#7dff9a'); s.pixel(x + 1, y + 1, '#ffffff'); }
    s.contorno(temaYas ? '#241b17' : temaFer ? '#050817' : '#070a1a');
    return s.c;
  }
  const discoNave = (cx, cy, r, cor) => { gNave.fillStyle = cor; for (let j = -r; j <= r; j++) for (let i = -r; i <= r; i++) if (i * i + j * j <= r * r + 0.5) gNave.fillRect(cx + i, cy + j, 1, 1); };
  function animarNave(t) {
    const nv = dados.oficina;
    const fx = fxOficina && t - fxOficina.t0 < 1.2 ? { i: fxOficina.i, u: (t - fxOficina.t0) / 1.2 } : null;
    gNave.clearRect(0, 0, 128, 128);
    if (naveBase) gNave.drawImage(naveBase, 0, 0);
    const pm = pecasPrincipais(dados.projeto);
    const reator = pm.reator;
    const cor = reator === 'fusao' ? ['#ff5a2a', '#ffc14a'] : reator === 'quantico' ? ['#6c5cff', '#d6a4ff'] : reator === 'solar' ? ['#e5b85c', '#fff3a0'] : nv.nucleo >= 4 ? ['#ff7a2a', '#ffc14a'] : nv.nucleo >= 2 ? ['#22b85a', '#7dff9a'] : (temaYas ? ['#b7683f', '#f2d7ae'] : temaFer ? ['#2f72ff', '#55e2e0'] : ['#2f8cff', '#8bd3ff']);
    const pulso = Math.sin(t * 4) > 0 ? 1 : 0;
    discoNave(65, 62, 9 + pulso, cor[0]); discoNave(65, 62, 6, cor[1]); discoNave(65, 62, 3, '#ffffff');
    gNave.fillStyle = cor[1]; for (let k = 0; k < 6; k++) { const an = t * 2 + (k * Math.PI) / 3; gNave.fillRect(Math.round(65 + Math.cos(an) * 12), Math.round(62 + Math.sin(an) * 12), 1, 1); }
    const chama = (y) => { const comp = Math.round((8 + nv.motor * 3 + Math.floor(Math.random() * 4)) * (fx && fx.i === 1 ? 1 + 1.5 * (1 - fx.u) : 1)); for (let i = 0; i < comp; i++) { const h = Math.max(1, Math.round((1 - i / comp) * 12)); gNave.fillStyle = pm.motor === 'ionico' ? (i < comp * .55 ? '#d6fbff' : '#55e2e0') : pm.motor === 'plasma' ? (i < comp * .55 ? '#d6a4ff' : '#6c5cff') : i < comp * 0.35 ? '#fff0a0' : i < comp * 0.7 ? '#ffc83d' : '#ff7a3a'; gNave.fillRect(7 - i, y - (h >> 1), 1, h); } };
    chama(61); if (nv.motor >= 3 || pm.motor !== 'quimico') chama(79);
    if (Math.floor(t * 2) % 2) { gNave.fillStyle = '#ff9aa6'; gNave.fillRect(63, 6, 2, 2); }
    const bonusCanos = pm.arma === 'duplo' ? 1 : pm.arma === 'dispersor' ? 2 : 0;
    const nCan = Math.min(4, 1 + nv.projetil + bonusCanos), len = (pm.arma === 'rail' ? 28 : 18) + Math.floor(nv.dano * 1.6);
    if (Math.floor(t * 3) % 2) for (let i = 0; i < nCan; i++) { gNave.fillStyle = '#ffe14a'; gNave.fillRect(90 + len + 3, 48 + i * (nCan > 3 ? 7 : 9) + 2, 2, 1); }
    const escudoModulo = pm.reator === 'quantico' ? 1 : 0;
    const alfa = nv.escudo > 0 || escudoModulo ? 0.35 + 0.13 * (nv.escudo + escudoModulo) : 0.12;
    gNave.globalAlpha = Math.min(1, alfa); gNave.fillStyle = '#7dff9a';
    for (const [raio, ativo] of [[48, true], [51, nv.escudo >= 4]]) {
      if (!ativo) continue;
      for (let k = 0; k < 72; k += 2) { const an = (k * Math.PI * 2) / 72 + t * 0.4; gNave.fillRect(Math.round(62 + Math.cos(an) * raio), Math.round(60 + Math.sin(an) * raio), 2, 2); }
    }
    gNave.globalAlpha = 1;
    if (fx && fx.i >= 0) efeitoParte(fx, nv);
    else if (fx) { // instalar uma peça inteira ilumina a nave toda, sem apontar para um subsistema antigo
      const u = fx.u; gNave.globalAlpha = 1 - u; gNave.strokeStyle = '#55e2e0';
      const r = 42 + Math.round(u * 18); for (let k = 0; k < 64; k += 2) { const an = (k * Math.PI * 2) / 64; gNave.fillStyle = k % 4 ? '#55e2e0' : '#ffffff'; gNave.fillRect(Math.round(62 + Math.cos(an) * r), Math.round(60 + Math.sin(an) * r), 2, 2); }
      gNave.globalAlpha = 1;
    }
  }
  function efeitoParte(fx, nv) { // a peça melhorada brilha: anel que se expande, faíscas e um efeito próprio de cada parte
    const p = PARTES[fx.i], ax = Math.round(p.ancora[0] * 128), ay = Math.round(p.ancora[1] * 128), u = fx.u;
    const anel = (cx, cy, r, cor, n = 28) => { gNave.fillStyle = cor; for (let k = 0; k < n; k++) { const an = (k * Math.PI * 2) / n; gNave.fillRect(Math.round(cx + Math.cos(an) * r), Math.round(cy + Math.sin(an) * r), 2, 2); } };
    gNave.globalAlpha = 1 - u;
    anel(ax, ay, 4 + u * 26, '#ffe14a');
    gNave.fillStyle = '#ffffff';
    for (let k = 0; k < 10; k++) { const an = k * 0.63 + 1, d = u * 34; gNave.fillRect(Math.round(ax + Math.cos(an) * d), Math.round(ay + Math.sin(an) * d - u * 6), 2, 2); }
    if (fx.i === 0) discoNave(65, 62, 12 + Math.round(u * 8), '#ffffff');
    else if (fx.i === 2) anel(62, 60, 39, '#ffffff', 64);
    else if (fx.i === 3) { anel(64, 8, u * 42, '#8bd3ff', 36); anel(64, 8, u * 24, '#ffffff', 24); }
    else if (fx.i === 4) { const len = 18 + Math.floor(nv.dano * 1.6); for (let i = 0; i < 1 + nv.projetil; i++) discoNave(90 + len + 6, 50 + i * 9, 4, '#ffe14a'); }
    else if (fx.i === 5) anel(62, 60, 48 + u * 6, '#ffffff', 72);
    gNave.globalAlpha = 1;
  }

  function desenharLinhas() { // linhas azuis ligando cada quadro à sua peça na nave
    const corpo = painelOficina.querySelector('.of-corpo'); if (!corpo) return;
    const svg = corpo.querySelector('svg'); svg.replaceChildren();
    if (getComputedStyle(svg).display === 'none') return;
    const cb = corpo.getBoundingClientRect(), cr = canvasNave.getBoundingClientRect(), NS = 'http://www.w3.org/2000/svg';
    corpo.querySelectorAll('.of-parte').forEach((card) => {
      const p = PARTES[Number(card.dataset.i)], r = card.getBoundingClientRect();
      const x0 = (p.lado === 'esq' ? r.right : r.left) - cb.left, y0 = (r.top + r.bottom) / 2 - cb.top;
      const x1 = cr.left + p.ancora[0] * cr.width - cb.left, y1 = cr.top + p.ancora[1] * cr.height - cb.top, xm = x0 + (p.lado === 'esq' ? 18 : -18);
      const path = document.createElementNS(NS, 'path'); path.setAttribute('d', `M${x0} ${y0} L${xm} ${y0} L${x1} ${y1}`); path.setAttribute('class', 'of-linha');
      const ponto = document.createElementNS(NS, 'circle'); ponto.setAttribute('cx', x1); ponto.setAttribute('cy', y1); ponto.setAttribute('r', 4); ponto.setAttribute('class', 'of-ponto');
      svg.append(path, ponto);
    });
  }
  window.addEventListener('resize', () => { if (modo === 'oficina') desenharLinhas(); });

  // garagem: a bancada de montagem (aba MONTAGEM); a aba AJUSTE FINO mantém as melhorias permanentes por subsistema
  let abaOficina = 'montagem', moedasOficinaEl = null;
  const garagem = criarGaragem({
    el, obterDados: () => dados, tema, bip,
    aoMudar: () => { salvarDados(); atualizarNaveSpr(); atualizarBotoesMoedas(); if (moedasOficinaEl) moedasOficinaEl.textContent = `◆ ${dados.moedas}`; garagem.render(); },
  });

  function renderOficina(destaque = -1, idDest = '') {
    const nv = dados.oficina;
    naveBase = montarNave(nv);
    const topo = el('div', 'of-topo');
    const voltar = el('button', 'arc-btn', 'VOLTAR [ESC]'); voltar.onclick = fecharOficina;
    moedasOficinaEl = el('span', 'of-moedas', `◆ ${dados.moedas}`);
    topo.append(el('h3', null, 'OFICINA · GARAGEM MECATRÔNICA'), moedasOficinaEl, voltar);
    const abas = el('div', 'of-abas');
    for (const [id, nome] of [['montagem', 'MONTAGEM DA NAVE'], ['ajuste', 'AJUSTE FINO · UPGRADES']]) { const b = el('button', `of-aba${abaOficina === id ? ' on' : ''}`, nome); b.onclick = () => { abaOficina = id; renderOficina(); }; abas.append(b); }
    const corpo = el('div', 'of-corpo');
    const esq = el('div', 'of-col'), dir = el('div', 'of-col'), centro = el('div', 'of-centro');
    centro.append(canvasNave, el('p', null, 'Melhorias permanentes por subsistema: elas somam com as peças montadas na aba MONTAGEM.'));
    PARTES.forEach((p, i) => {
      const card = el('div', i === destaque ? 'of-parte upgradiada' : 'of-parte'); card.dataset.i = String(i);
      if (i === destaque) card.append(el('span', 'of-selo', '▲ UPGRADE!'));
      card.append(el('h4', null, p.nome), el('p', 'sub', p.sub));
      for (const id of p.ids) {
        const o = OFICINA.find((x) => x.id === id), n = nv[id], cheio = n >= o.max, custo = o.custo(n);
        const linha = el('div', i === destaque && id === idDest ? 'of-melhoria upg' : 'of-melhoria');
        const info = el('div', 'info');
        const pips = el('span', 'pips'); for (let k = 0; k < o.max; k++) pips.append(el('i', k < n ? (k === n - 1 && i === destaque && id === idDest ? 'on nova' : 'on') : ''));
        info.append(el('b', null, o.nome), el('small', null, o.desc), pips);
        const b = el('button', 'arc-btn pequeno', cheio ? 'MÁX' : `◆${custo}`);
        b.disabled = cheio || dados.moedas < custo;
        b.onclick = () => { if (dados.moedas >= custo && !cheio) { dados.moedas -= custo; dados.oficina[id] += 1; salvarDados(); bip(880, 0.08, 'square', 0.05); bip(1175, 0.1, 'square', 0.05, 0.08); bip(1568, 0.16, 'triangle', 0.05, 0.16); fxOficina = { i, t0: performance.now() / 1000 }; atualizarNaveSpr(); renderOficina(i, id); atualizarBotoesMoedas(); } };
        linha.append(info, b); card.append(linha);
      }
      (p.lado === 'esq' ? esq : dir).append(card);
    });
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('class', 'of-svg');
    corpo.append(esq, centro, dir, svg);
    const rodape = el('p', 'of-rodape', 'ARMAS DE BORDO: toda run começa apenas com o canhão [1]. Laser, mísseis e orbes aparecem por sorte nos upgrades e ocupam os slots [2], [3] e [4].');
    if (abaOficina === 'montagem') {
      garagem.render();
      painelOficina.replaceChildren(topo, abas, garagem.raiz, el('p', 'of-rodape', 'Clique num encaixe da nave, escolha a peça e acompanhe energia, calor e massa. Peças bloqueadas podem ser testadas em prévia sem gastar nada; fabricar custa moedas espaciais (uma vez só). A nave montada aparece no jogo e no planeta.'));
    } else {
      painelOficina.replaceChildren(topo, abas, corpo, rodape);
      animarNave(performance.now() / 1000);
      requestAnimationFrame(desenharLinhas);
    }
  }
  // ---------- bestiário: lendárias, alienígenas e nativos das fases, em silhueta até você encontrá-los ----------
  let abaBestiario = 'lendas';
  const idsNativos = Object.keys(NATIVOS);
  const totalBestiario = { lendas: LENDAS.length, aliens: ALIENS.length, nativos: idsNativos.length };
  const vistosBestiario = {
    lendas: () => LENDAS.filter((l) => dados.bestiario[l.id]?.visto).length,
    aliens: () => ALIENS.filter((a) => dados.aliens[a.nome]?.visto).length,
    nativos: () => idsNativos.filter((id) => dados.nativos[id]?.visto).length,
  };
  const descobertas = () => vistosBestiario.lendas() + vistosBestiario.aliens() + vistosBestiario.nativos();
  const totalGeral = () => totalBestiario.lendas + totalBestiario.aliens + totalBestiario.nativos;
  function atualizarBotaoBestiario() { btnBestiario.textContent = `BESTIÁRIO (${descobertas()}/${totalGeral()})`; }
  const progressoAlien = () => dados.aliensDerrotados + Math.floor(Object.values(dados.aliens).reduce((s, r) => s + r.visto, 0) / 3);
  function retratoAlien(i, visto) { // o sprite do alienígena ampliado 4×, ou só a silhueta enquanto ele é desconhecido
    const q = alienSprite(i).quadros[0], cv = document.createElement('canvas'), x = cv.getContext('2d');
    cv.width = q.width * 4; cv.height = q.height * 4; x.imageSmoothingEnabled = false; x.drawImage(q, 0, 0, cv.width, cv.height);
    if (!visto) { x.globalCompositeOperation = 'source-in'; x.fillStyle = '#1a1c34'; x.fillRect(0, 0, cv.width, cv.height); }
    return cv;
  }
  function renderBestiario() {
    const topo = el('div', 'of-topo'), voltar = el('button', 'arc-btn', 'VOLTAR [ESC]'); voltar.onclick = fecharBestiario;
    topo.append(el('h3', null, 'BESTIÁRIO'), el('span', 'of-moedas', `${descobertas()}/${totalGeral()}`), voltar);
    const abas = el('div', 'of-abas');
    for (const [id, nome] of [['lendas', 'CRIATURAS LENDÁRIAS'], ['aliens', 'ALIENÍGENAS'], ['nativos', 'NATIVOS DAS FASES']]) {
      const b = el('button', `of-aba${abaBestiario === id ? ' on' : ''}`, `${nome} ${vistosBestiario[id]()}/${totalBestiario[id]}`); b.onclick = () => { abaBestiario = id; renderBestiario(); }; abas.append(b);
    }
    const grade = el('div', 'bes-grade'); let intro;
    if (abaBestiario === 'lendas') {
      const vit = dados.chefesDerrotados, desc = vistosBestiario.lendas(), derr = LENDAS.filter((l) => dados.bestiario[l.id]?.vencido).length;
      intro = el('p', 'bes-intro', `Descobertas: ${desc} de ${LENDAS.length} · derrotadas: ${derr} · chefões vencidos no total: ${vit}. Criaturas novas despertam conforme você vence mais chefões, e cada uma tem poderes que você nunca viu.`);
      for (const l of LENDAS) {
        const reg = dados.bestiario[l.id], visto = !!reg?.visto, liberada = vit >= l.vitorias;
        const card = el('article', `bes-card${visto ? '' : ' oculta'}`); card.style.setProperty('--c', l.cor);
        const img = retratoLenda(l, visto); img.className = 'bes-img';
        card.append(img, el('b', null, visto ? l.nome : '???'), el('small', 'bes-titulo', visto ? l.titulo : 'CRIATURA DESCONHECIDA'),
          el('p', 'bes-desc', visto ? l.desc : liberada ? 'Ela está por aí... pode surgir em qualquer chefão.' : 'Ainda dorme nas profundezas. Algo a desperta quando você vence mais chefões.'));
        if (visto) card.append(el('span', 'bes-stats', `Vista ${reg.visto}× · derrotada ${reg.vencido}×`));
        grade.append(card);
      }
    } else if (abaBestiario === 'aliens') {
      const desc = vistosBestiario.aliens(), derr = ALIENS.filter((a) => dados.aliens[a.nome]?.vencido).length, prog = progressoAlien();
      intro = el('p', 'bes-intro', `Descobertos: ${desc} de ${ALIENS.length} · derrotados: ${derr} · alienígenas vencidos no total: ${dados.aliensDerrotados}. Eles moram nos buracos negros. Novos aparecem conforme você enfrenta mais deles, cada um com golpes próprios.`);
      ALIENS.forEach((a, i) => {
        const reg = dados.aliens[a.nome], visto = !!reg?.visto, liberado = a.desde <= prog;
        const card = el('article', `bes-card${visto ? '' : ' oculta'}`); card.style.setProperty('--c', a.cor);
        const img = retratoAlien(i, visto); img.className = 'bes-img sprite';
        card.append(img, el('b', null, visto ? a.nome : '???'), el('small', 'bes-titulo', visto ? a.titulo.toUpperCase() : 'ALIENÍGENA DESCONHECIDO'),
          el('p', 'bes-desc', visto ? a.dica : liberado ? 'Já está solto por aí... pode surgir no próximo buraco negro.' : 'Ainda não saiu do esconderijo. Enfrente mais alienígenas para atraí-lo.'));
        if (visto) card.append(el('span', 'bes-stats', `Visto ${reg.visto}× · derrotado ${reg.vencido}×`));
        grade.append(card);
      });
    } else {
      const desc = vistosBestiario.nativos(), derr = idsNativos.filter((id) => dados.nativos[id]?.vencido).length;
      intro = el('p', 'bes-intro', `Descobertos: ${desc} de ${idsNativos.length} · derrotados: ${derr} · fase mais distante: ${dados.fasesVistas || 1}. Cada lugar do universo tem um nativo só dele: maior e mais lento que os comuns, com um truque próprio.`);
      for (const id of idsNativos) {
        const n = NATIVOS[id], reg = dados.nativos[id], visto = !!reg?.visto, fi = FASES.findIndex((f) => f.nativo === id), fase = FASES[fi];
        const card = el('article', `bes-card${visto ? '' : ' oculta'}`); card.style.setProperty('--c', n.cor);
        const img = retratoLenda(n, visto); img.className = 'bes-img';
        card.append(img, el('b', null, visto ? n.nome : '???'), el('small', 'bes-titulo', visto ? fase.nome : 'NATIVO DESCONHECIDO'),
          el('p', 'bes-desc', visto ? `${n.dica[0].toUpperCase()}${n.dica.slice(1)}.` : `Vive em algum lugar da fase ${fi + 1}. Chegue lá para conhecê-lo.`));
        if (visto) card.append(el('span', 'bes-stats', `Visto ${reg.visto}× · derrotado ${reg.vencido}×`));
        grade.append(card);
      }
    }
    painelBestiario.replaceChildren(topo, abas, intro, grade);
  }
  function abrirBestiario() {
    voltarPara = modo === 'fim' ? 'fim' : 'inicio';
    modo = 'bestiario';
    painelInicio.hidden = true; painelFim.hidden = true;
    renderBestiario(); painelBestiario.hidden = false;
  }
  function fecharBestiario() {
    if (modo !== 'bestiario') return;
    modo = voltarPara; painelBestiario.hidden = true;
    (voltarPara === 'fim' ? painelFim : painelInicio).hidden = false;
    atualizarBotaoBestiario();
  }
  function atualizarBotoesMoedas() { btnOficinaIni.textContent = `OFICINA (◆${dados.moedas})`; }
  function abrirOficina() {
    voltarPara = modo === 'fim' ? 'fim' : 'inicio';
    modo = 'oficina';
    painelInicio.hidden = true; painelFim.hidden = true;
    abaOficina = 'montagem'; garagem.ao_abrir();
    renderOficina(); painelOficina.hidden = false;
    requestAnimationFrame(desenharLinhas);
  }
  function fecharOficina() {
    if (modo !== 'oficina') return;
    modo = voltarPara;
    painelOficina.hidden = true;
    (voltarPara === 'fim' ? painelFim : painelInicio).hidden = false;
    atualizarBotoesMoedas();
  }

  // ---------- fim ----------
  function fimDeJogo() {
    modo = 'fim';
    trocarFaixa('fim');
    const bonus = Math.min(BONUS_MAXIMO, Math.floor(S.kills / 30) + Math.floor(S.nivel / 3));
    const tempo = Math.floor(S.t);
    const novoRecorde = tempo > dados.tempo || S.kills > dados.kills || S.onda > dados.onda;
    dados.tempo = Math.max(dados.tempo, tempo); dados.kills = Math.max(dados.kills, S.kills); dados.onda = Math.max(dados.onda, S.onda);
    dados.skin = (dados.skin + 1 + Math.floor(Math.random() * (TEMAS.length - 1))) % TEMAS.length; // próxima partida: outro tema de monstros
    dados.moedas += bonus;
    salvarDados();
    bip(220, 0.25, 'sawtooth', 0.05); bip(165, 0.35, 'sawtooth', 0.05, 0.25);
    painelFim.replaceChildren(
      el('h3', null, 'FIM DE JOGO'),
      el('p', null, `Tempo: ${fmt(tempo)} · Monstros: ${S.kills} · Nível: ${S.nivel} · Onda: ${S.onda} · Melhor combo: x${S.melhorCombo}`),
      el('p', 'ganhou', `+${bonus + S.moedasRun} ◆ MOEDAS ESPACIAIS`),
      el('p', 'dica', `${S.moedasRun} coletadas + ${bonus} de bônus · Recorde: ${fmt(dados.tempo)} · ${dados.kills} monstros · ${dados.onda} ondas${novoRecorde ? ' · NOVO RECORDE!' : ''}`),
    );
    const de = el('button', 'arc-btn', 'JOGAR DE NOVO [ESPAÇO]'); de.onclick = comecar;
    const of = el('button', 'arc-btn sec', `OFICINA (◆${dados.moedas})`); of.onclick = abrirOficina;
    const sair = el('button', 'arc-btn sec', 'SAIR'); sair.onclick = fecharJanela;
    const bes = el('button', 'arc-btn sec', `BESTIÁRIO (${LENDAS.filter((l) => dados.bestiario[l.id]?.visto).length}/${LENDAS.length})`); bes.onclick = abrirBestiario;
    painelFim.append(de, of, bes, sair);
    painelFim.hidden = false;
  }
  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  // ---------- desenho ----------
  const spriteCristal = (v) => (v >= 6 ? sprites.cristais[6] : v >= 3 ? sprites.cristais[3] : v >= 2 ? sprites.cristais[2] : sprites.cristais[1]);
  const barra = (x, y, w, frac, cor) => { g.fillStyle = '#070a1a'; g.fillRect(x - 1, y - 1, w + 2, 6); g.fillStyle = '#3a2030'; g.fillRect(x, y, w, 4); g.fillStyle = cor; g.fillRect(x, y, Math.max(0, Math.round(w * frac)), 4); };

  function desenharArena(t) {
    g.fillStyle = '#0a0614'; g.fillRect(0, 0, L, A);
    for (let k = 0; k < 6; k++) { const r = 10 + ((t * 22 + k * 40) % 240); g.strokeStyle = `rgba(138, 92, 255, ${0.28 * (1 - r / 250)})`; g.lineWidth = 1; g.beginPath(); g.arc(CX, CY, r, 0, Math.PI * 2); g.stroke(); }
    for (let i = 0; i < 40; i++) { g.fillStyle = Math.sin(t * 2 + i) > 0 ? '#9a86c0' : '#3a2f60'; g.fillRect((i * 53) % L, (i * 31) % A, 1, 1); }
    g.strokeStyle = '#8a5cff'; g.lineWidth = 2; g.strokeRect(ARENA.x0 - 3, ARENA.y0 - 3, ARENA.x1 - ARENA.x0 + 6, ARENA.y1 - ARENA.y0 + 6);
  }

  function desenharTiroEspecial(b) {
    const x = Math.round(b.x), y = Math.round(b.y), r = Math.round(b.r ?? 1.5), cor = b.cor || '#ff5a8a', pisca = Math.floor(S.ta * 18 + b.x) % 2;
    if (b.forma === 'fogo') { g.fillStyle = cor; g.fillRect(x - r - 1, y - r - 1, 2 * r + 2, 2 * r + 2); g.fillStyle = pisca ? '#ffe14a' : '#ffb347'; g.fillRect(x - r, y - r, 2 * r, 2 * r); g.fillStyle = '#fff6c0'; g.fillRect(x - 1, y - 1, 2, 2); return; }
    if (b.forma === 'cranio') { // crânio de pixels, com olhos que brilham
      g.fillStyle = '#070a1a'; g.fillRect(x - 5, y - 5, 10, 10); g.fillStyle = '#e8f6e0'; g.fillRect(x - 4, y - 4, 8, 6); g.fillRect(x - 2, y + 2, 4, 2);
      g.fillStyle = '#0b1a10'; g.fillRect(x - 3, y - 2, 2, 2); g.fillRect(x + 1, y - 2, 2, 2); g.fillStyle = pisca ? '#7dff9a' : '#d6ffe0'; g.fillRect(x - 3, y - 2, 1, 1); g.fillRect(x + 2, y - 2, 1, 1); return;
    }
    if (b.forma === 'osso') { g.fillStyle = '#070a1a'; g.fillRect(x - 4, y - 2, 8, 4); g.fillStyle = cor; g.fillRect(x - 3, y - 1, 6, 2); g.fillRect(x - 4, y - 2, 2, 1); g.fillRect(x - 4, y + 1, 2, 1); g.fillRect(x + 2, y - 2, 2, 1); g.fillRect(x + 2, y + 1, 2, 1); return; }
    if (b.forma === 'pena') { // pena em chamas: cabeça brilhante e rastro
      const vl = Math.hypot(b.vx, b.vy) || 1, ux = b.vx / vl, uy = b.vy / vl;
      for (let k = 3; k >= 0; k--) { g.fillStyle = k === 0 ? '#fff2b0' : k === 1 ? cor : k === 2 ? '#ff6a2a' : '#c0301a'; g.fillRect(Math.round(x - ux * k * 2.4) - 1, Math.round(y - uy * k * 2.4) - 1, k === 0 ? 3 : 2, k === 0 ? 3 : 2); }
      return;
    }
    const disco = (rr, c) => { g.fillStyle = c; for (let j = -rr; j <= rr; j++) { const w = Math.floor(Math.sqrt(rr * rr - j * j + 0.5)); g.fillRect(x - w, y + j, 2 * w + 1, 1); } };
    if (b.forma === 'esporo') { disco(r + 1, '#070a1a'); disco(r, cor); if (r >= 2) { g.fillStyle = pisca ? '#ffffff' : '#fff6c0'; g.fillRect(x - 1, y - 1, 1, 1); g.fillRect(x + 1, y + 1, 1, 1); } else { g.fillStyle = '#ffffff'; g.fillRect(x, y, 1, 1); } return; }
    if (b.forma === 'cristal') { // losango pontudo
      for (let j = -r - 2; j <= r + 2; j++) { const w = r + 2 - Math.abs(j); g.fillStyle = '#070a1a'; g.fillRect(x - w - 1, y + j, 2 * w + 3, 1); }
      for (let j = -r - 1; j <= r + 1; j++) { const w = r + 1 - Math.abs(j); g.fillStyle = cor; g.fillRect(x - w, y + j, 2 * w + 1, 1); }
      g.fillStyle = '#ffffff'; g.fillRect(x, y - 1, 1, 2); return;
    }
    if (b.forma === 'bloco') { g.fillStyle = '#070a1a'; g.fillRect(x - r - 1, y - r - 1, 2 * r + 2, 2 * r + 2); g.fillStyle = pisca ? cor : '#ffffff'; g.fillRect(x - r, y - r, 2 * r, 2 * r); g.fillStyle = '#1b1033'; g.fillRect(x - 1, y - 1, 2, 2); return; }
    if (b.forma === 'morcego') { // morcego de 5 pixels batendo as asas
      const asa = Math.floor(S.ta * 10 + b.x) % 2 ? -1 : 1;
      g.fillStyle = '#070a1a'; g.fillRect(x - 5, y - 2 + (asa < 0 ? -1 : 0), 11, 5); g.fillStyle = cor;
      g.fillRect(x - 4, y - 1 + asa, 3, 2); g.fillRect(x + 2, y - 1 + asa, 3, 2); g.fillRect(x - 1, y - 2, 3, 4); g.fillStyle = '#ffe14a'; g.fillRect(x - 1, y - 1, 1, 1); g.fillRect(x + 1, y - 1, 1, 1);
      return;
    }
    if (b.forma === 'relogio') { // relógio: enquanto está parado, pisca e mostra o anel de aviso
      const parado = b.fica > 0;
      if (parado) { g.strokeStyle = pisca ? '#ffffff' : '#ffd23f'; g.lineWidth = 1; g.beginPath(); g.arc(x, y, r + 3 + Math.sin(S.ta * 18) * 1, 0, Math.PI * 2); g.stroke(); }
      disco(r + 1, '#070a1a'); disco(r, parado ? '#ffffff' : '#fff6c0'); g.fillStyle = '#7a1f2a'; g.fillRect(x, y - r + 1, 1, r); g.fillRect(x, y, r - 1, 1);
      return;
    }
    g.fillStyle = '#070a1a'; g.fillRect(x - r - 1, y - r - 1, 2 * r + 2, 2 * r + 2);
    g.fillStyle = cor; g.fillRect(x - r, y - r, 2 * r, 2 * r); g.fillStyle = '#ffffff'; g.fillRect(x - 1, y - 1, 2, 2);
  }
  function desenharTintas(visivel) { // nuvens de tinta: escondem inimigos, avisos e tiros (a nave continua visível por cima)
    for (const k of S.tintas) {
      if (!visivel(k.x, k.y, k.r + 10)) continue;
      const u = Math.min(1, k.vida / 0.9, (k.vidaMax - k.vida) / 0.6 + 0.2);
      g.fillStyle = `rgba(14, 4, 30, ${0.93 * u})`;
      for (let i = 0; i < 9; i++) { const a = (i * Math.PI * 2) / 9 + k.x, rr = k.r * (0.72 + 0.28 * Math.sin(S.ta * 1.5 + i * 1.7)); g.beginPath(); g.arc(Math.round(k.x + Math.cos(a) * k.r * 0.38), Math.round(k.y + Math.sin(a) * k.r * 0.38), rr * 0.62, 0, Math.PI * 2); g.fill(); }
      g.beginPath(); g.arc(Math.round(k.x), Math.round(k.y), k.r * 0.7, 0, Math.PI * 2); g.fill();
      g.fillStyle = `rgba(120, 70, 190, ${0.35 * u})`; for (let i = 0; i < 3; i++) g.fillRect(Math.round(k.x + Math.sin(S.ta + i * 2 + k.x) * k.r * 0.5), Math.round(k.y + Math.cos(S.ta * 0.8 + i * 3) * k.r * 0.5), 2, 2);
    }
  }
  function desenharTeia(c, cx, cy) { // zona de teia: lenta quem entra
    const rgb = c.cor || '216, 240, 255';
    g.fillStyle = `rgba(${rgb}, 0.16)`; g.beginPath(); g.arc(cx, cy, c.r, 0, Math.PI * 2); g.fill();
    if (c.nuvem) { // nuvem de esporos: bolhas que flutuam, em vez de teia
      g.fillStyle = `rgba(${rgb}, 0.14)`; for (let k = 0; k < 6; k++) { const a = k * 1.05 + S.ta * 0.4; g.beginPath(); g.arc(Math.round(cx + Math.cos(a) * c.r * 0.5), Math.round(cy + Math.sin(a) * c.r * 0.5), c.r * 0.5, 0, Math.PI * 2); g.fill(); }
      for (let k = 0; k < 10; k++) { const u = (S.ta * 0.35 + k / 10) % 1, a = k * 2.4; g.fillStyle = k % 2 ? 'rgba(125, 255, 154, 0.9)' : `rgba(${rgb}, 0.95)`; g.fillRect(Math.round(cx + Math.cos(a) * c.r * 0.75 * (0.4 + 0.6 * ((k * 7) % 10) / 10)), Math.round(cy + c.r * 0.6 - u * c.r * 1.3), 2, 2); }
      return;
    }
    g.strokeStyle = `rgba(${rgb}, 0.8)`; g.lineWidth = 1;
    for (let k = 0; k < 8; k++) { const a = (k * Math.PI) / 4; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(a) * c.r, cy + Math.sin(a) * c.r); g.stroke(); }
    for (const f of [0.35, 0.68, 1]) { g.beginPath(); for (let k = 0; k <= 8; k++) { const a = (k * Math.PI) / 4, rr = c.r * f * (k % 2 ? 0.88 : 1); const px = cx + Math.cos(a) * rr, py = cy + Math.sin(a) * rr; if (k) g.lineTo(px, py); else g.moveTo(px, py); } g.stroke(); }
  }
  function desenharIntro() {
    const i = S.intro, entra = Math.min(1, i.t / 0.35), sai = Math.min(1, (i.dur - i.t) / 0.5), a = Math.max(0, Math.min(entra, sai));
    g.save(); g.globalAlpha = a;
    if (i.meio) { // alienígena: faixa no meio da arena, entre ele e a nave
      const desl = (1 - Math.min(1, i.t / 0.5)) * 40, topo = Math.round(CY - 12);
      g.fillStyle = 'rgba(0, 0, 0, 0.74)'; g.fillRect(0, topo, L, 56); g.fillStyle = i.cor; g.fillRect(0, topo, L, 1); g.fillRect(0, topo + 55, L, 1);
      g.restore();
      if (i.novo) escrever('✦ NOVO ALIENÍGENA ✦', CX, topo + 14, Math.floor(S.ta * 6) % 2 ? '#ffe14a' : '#ffffff', 9, 'center', a);
      escrever(i.nome, CX + desl, topo + 35, i.cor, 20, 'center', a, L - 24);
      escrever(i.titulo.toUpperCase(), CX - desl, topo + 49, '#ffffff', 9, 'center', a, L - 24);
      return;
    }
    g.fillStyle = 'rgba(0, 0, 0, 0.72)'; g.fillRect(0, 0, L, 34); g.fillRect(0, A - 56, L, 56);
    g.restore();
    const deslize = (1 - Math.min(1, i.t / 0.5)) * 40;
    if (i.novo) escrever('✦ NOVA CRIATURA DESCOBERTA ✦', CX, 22, Math.floor(S.ta * 6) % 2 ? '#ffe14a' : '#ffffff', 9, 'center', a);
    escrever(i.nome, CX + deslize, A - 28, i.cor, 24, 'center', a, L - 24);
    escrever(i.titulo, CX - deslize, A - 10, '#ffffff', 10, 'center', a, L - 24);
  }
  function indicador(wx, wy, ox, oy, cor, rotulo = '', alerta = false) {
    const dx = wx - (ox + L / 2), dy = wy - (oy + A / 2);
    const k = Math.min((L / 2 - 10) / (Math.abs(dx) || 1e-6), (A / 2 - 10) / (Math.abs(dy) || 1e-6));
    const sx = Math.round(L / 2 + dx * k), sy = Math.round(A / 2 + dy * k);
    if (alerta && Math.floor(S.ta * 6) % 2 === 0) return; // quando está acabando o tempo, o pontinho pisca
    g.fillStyle = '#070a1a'; g.fillRect(sx - 3, sy - 3, 7, 7); g.fillStyle = cor; g.fillRect(sx - 2, sy - 2, 5, 5); g.fillStyle = '#ffffff'; g.fillRect(sx - 1, sy - 1, 3, 3);
    if (rotulo) { // tempo que falta, ao lado do pontinho (para dentro da tela)
      const esq = sx < L / 2, tx = sx + (esq ? 7 : -7), ty = Math.max(12, Math.min(A - 4, sy + 4));
      escrever(rotulo, tx, ty, alerta ? '#ff9aa6' : cor, 10, esq ? 'left' : 'right');
    }
  }

  function desenhar() {
    const t = performance.now() / 1000;
    const camX = S ? S.cx : CX, camY = S ? S.cy : CY;
    prepararTexto();
    g.save();
    if (S && S.alien) desenharArena(t); else { fundo.desenhar(g, camX, camY, t, regiaoAtual()); if (S && S.regiaoForcada == null) desenharAmbiente(g, faseDe(S.fase).ambientes, 'fundo', { camX, camY, t, W: L, H: A }); }
    if (!S) { g.restore(); return; }
    const ox = Math.round(camX - L / 2), oy = Math.round(camY - A / 2);
    const visivel = (x, y, m = 16) => x > ox - m && x < ox + L + m && y > oy - m && y < oy + A + m;
    const mundo = !S.alien;

    g.save();
    if (S.tremor > 0) g.translate(Math.round((Math.random() - 0.5) * 4), Math.round((Math.random() - 0.5) * 4));
    g.translate(-ox, -oy);
    g.strokeStyle = 'rgba(74, 168, 255, 0.12)'; g.lineWidth = 1;
    for (const r of [30, 62]) { g.beginPath(); g.arc(Math.round(S.nx), Math.round(S.ny), r, 0, Math.PI * 2); g.stroke(); }

    // áreas de bomba (por baixo de tudo)
    for (const c of S.campos) {
      if (!visivel(c.x, c.y, 40)) continue;
      const cx = Math.round(c.x), cy = Math.round(c.y);
      if (c.lento && c.aviso <= 0) { desenharTeia(c, cx, cy); continue; }
      if (c.aviso > 0) {
        const pisca = Math.floor(S.ta * 8) % 2 === 0;
        g.strokeStyle = pisca ? '#ff3b4a' : '#ffb3ba'; g.lineWidth = 1; g.setLineDash([3, 3]); g.beginPath(); g.arc(cx, cy, c.r, 0, Math.PI * 2); g.stroke(); g.setLineDash([]);
        g.fillStyle = 'rgba(255, 59, 74, 0.12)'; g.beginPath(); g.arc(cx, cy, Math.max(0, c.r * (1 - c.aviso / (c.avisoMax || 1.4))), 0, Math.PI * 2); g.fill();
      } else {
        g.fillStyle = `rgba(255, 138, 58, ${0.28 + 0.12 * Math.sin(S.ta * 10)})`; g.beginPath(); g.arc(cx, cy, c.r, 0, Math.PI * 2); g.fill();
        g.strokeStyle = '#ff8a3a'; g.lineWidth = 2; g.beginPath(); g.arc(cx, cy, c.r, 0, Math.PI * 2); g.stroke();
        for (let k = 0; k < 6; k++) { const a = S.ta * 3 + k * 1.05; g.fillStyle = '#ffd23f'; g.fillRect(Math.round(cx + Math.cos(a) * c.r * 0.6), Math.round(cy + Math.sin(a) * c.r * 0.6), 2, 2); }
      }
    }
    for (const c of S.campos) { // a bomba voa em arco do atirador até o ponto marcado
      if (c.aviso > 0 && c.ox !== undefined) {
        const u = (c.avisoMax - c.aviso) / 0.45;
        if (u >= 0 && u < 1) { const bx = Math.round(c.ox + (c.x - c.ox) * u), by = Math.round(c.oy + (c.y - c.oy) * u - Math.sin(Math.PI * u) * 24); g.fillStyle = '#070a1a'; g.fillRect(bx - 3, by - 3, 6, 6); g.fillStyle = '#ff7a3a'; g.fillRect(bx - 2, by - 2, 4, 4); g.fillStyle = '#ffffff'; g.fillRect(bx - 1, by - 2, 2, 1); }
      }
    }
    if (mundo) {
      obstaculos.desenhar(g, ox, oy, L, A, t); // planetas, cadeias de rochas e campos de detritos
      if (S.buraco && visivel(S.buraco.x, S.buraco.y, 30)) {
        desenharBuracoNegro(g, S.buraco.x, S.buraco.y, S.ta, Math.min(1, S.buraco.vida / 3));
        const tempo = `${Math.ceil(S.buraco.vida)}s`, bx = Math.round(S.buraco.x), by = Math.round(S.buraco.y) - 28; // quanto tempo falta para ele sumir
        escrever(tempo, bx - ox, by - oy, S.buraco.vida < 8 && Math.floor(S.ta * 6) % 2 === 0 ? '#ff9aa6' : '#d9a8ff', 10);
      }
      for (const r of S.rochas) {
        if (!visivel(r.x, r.y, 20)) continue;
        const rach = r.hp <= r.hpMax * 0.34 ? 2 : r.hp <= r.hpMax * 0.67 ? 1 : 0;
        const spr = rochasSpr[r.tam].quadros[rach];
        if (r.piscar > 0) g.globalAlpha = 0.6;
        g.drawImage(spr, Math.round(r.x - spr.width / 2), Math.round(r.y - spr.height / 2));
        g.globalAlpha = 1;
      }
      for (const it of S.itens) {
        if (!visivel(it.x, it.y) || (it.vida < 4 && it.tipo !== 'moedaEsp' && Math.floor(S.ta * 8) % 2 === 0)) continue;
        if (ESTRELAS[it.tipo]) { g.save(); g.globalAlpha = 0.22 + 0.14 * Math.sin(S.ta * 6 + it.fase); g.fillStyle = ESTRELAS[it.tipo].cor; g.beginPath(); g.arc(Math.round(it.x), Math.round(it.y), 10, 0, Math.PI * 2); g.fill(); g.restore(); }
        g.drawImage(itensSpr[it.tipo], Math.round(it.x - 6), Math.round(it.y - 6 + Math.sin(S.ta * 4 + it.fase)));
      }
      for (const c of S.cristais) { if (visivel(c.x, c.y)) g.drawImage(spriteCristal(c.v), Math.round(c.x - 3.5), Math.round(c.y - 4.5 + Math.sin(S.ta * 4 + c.fase))); }
    }
    // trilha deixada pelo drift ígneo — também é uma zona de dano
    for (const fogo of S.trilhasFogo) {
      if (!visivel(fogo.x, fogo.y, 12)) continue;
      const vida = Math.max(0, fogo.vida / fogo.max), pulso = 1 + Math.floor(Math.sin(S.ta * 18 + fogo.x) * 1.5);
      g.globalAlpha = Math.max(0.18, vida);
      g.fillStyle = '#8f1d20'; g.fillRect(Math.round(fogo.x) - 5, Math.round(fogo.y) - 2, 10, 5);
      g.fillStyle = '#ff5a2a'; g.fillRect(Math.round(fogo.x) - 3, Math.round(fogo.y) - 4 - pulso, 7, 7 + pulso);
      g.fillStyle = '#ffe14a'; g.fillRect(Math.round(fogo.x) - 1, Math.round(fogo.y) - 3 - pulso, 3, 4 + pulso);
      g.fillStyle = '#ffffff'; g.fillRect(Math.round(fogo.x), Math.round(fogo.y) - 3 - pulso, 1, 2);
      g.globalAlpha = 1;
    }
    // monstros, chefão e alienígena
    for (const m of S.inimigos) {
      if (!visivel(m.x, m.y, 90)) continue;
      if (m.tipo === 'nativo') { desenharNativo(m); continue; }
      if (m.lenda) { // criatura lendária: avisos e brilho por baixo, corpo animado em pixel art por cima
        m.lenda.efeitos?.(g, m, S.ta, ctxLenda);
        const cv = renderizarLenda(m.lenda, m, S.ta, m.piscar > 0);
        g.globalAlpha = m.sumido > 0 ? 0.45 + 0.2 * Math.sin(S.ta * 22) : 1;
        g.drawImage(cv, Math.round(m.x - cv.width / 2), Math.round(m.y - cv.height / 2));
        g.globalAlpha = 1;
        continue;
      }
      const f = Math.floor(S.ta * 6 + m.fase) % 2;
      let spr;
      if (m.tipo === 'alien') {
        const as = alienSprite(m.v), quadro = Math.floor(S.ta * 3) % 2;
        desenharAuraAlien(g, m, ALIENS[m.v], S.ta);
        if (m.rastro) for (const r of m.rastro) { g.globalAlpha = Math.max(0, r.t) * 0.7; g.drawImage(as.quadros[quadro], Math.round(r.x - as.quadros[quadro].width / 2), Math.round(r.y - as.quadros[quadro].height / 2)); } // imagens que o glitch deixa para trás
        spr = (m.piscar > 0 ? as.brancos : as.quadros)[quadro]; g.globalAlpha = m.sumido > 0 ? 0.25 : (m.estado === 'carga' && Math.floor(S.ta * 16) % 2 === 0 ? 0.6 : 1);
        const tremer = m.hp < m.hpMax * 0.25 ? (Math.random() - 0.5) * 1.4 : 0; // no desespero ele treme
        desenharComSurgir(g, spr, Math.round(m.x - spr.width / 2 + tremer), Math.round(m.y - spr.height / 2 + Math.sin(S.ta * 2.2) * 1.5), m);
        g.globalAlpha = 1;
        continue;
      }
      else if (m.tipo === 'chefe') {
        const s = chefeSprite(m.b); spr = (m.piscar > 0 ? s.brancos : s.quadros)[Math.floor(S.ta * 4) % 2];
        const aura = 25 + Math.sin(S.ta * 4) * 3;
        g.fillStyle = 'rgba(5, 0, 12, .72)'; g.beginPath(); g.arc(Math.round(m.x), Math.round(m.y), aura, 0, Math.PI * 2); g.fill();
        g.strokeStyle = Math.floor(S.ta * 8) % 2 ? '#ff233f' : '#6c1230'; g.lineWidth = 2; g.beginPath(); g.arc(Math.round(m.x), Math.round(m.y), aura + 3, 0, Math.PI * 2); g.stroke();
      }
      else { const tipoSpr = SPRITE_TIPO[m.tipo] || m.tipo, s = skin(m.v).m[tipoSpr]; spr = (m.piscar > 0 ? s.brancos : s.quadros)[f]; if (m.tipo === 'fantasma') g.globalAlpha = 0.85; }
      g.drawImage(spr, Math.round(m.x - spr.width / 2), Math.round(m.y - spr.height / 2));
      g.globalAlpha = 1;
      if (m.tipo === 'chefe') {
        g.fillStyle = '#ff233f'; g.fillRect(Math.round(m.x) - 7, Math.round(m.y) - 5, 4, 2); g.fillRect(Math.round(m.x) + 4, Math.round(m.y) - 5, 4, 2);
        g.fillStyle = '#ffffff'; g.fillRect(Math.round(m.x) - 6, Math.round(m.y) - 5, 1, 1); g.fillRect(Math.round(m.x) + 5, Math.round(m.y) - 5, 1, 1);
        if (m.movEsp && m.movEsp.carga > 0) {
          g.strokeStyle = m.movEsp.tipo === 'minhoca' ? '#a56bff' : '#ff3b4a'; g.lineWidth = 2; g.setLineDash([3, 3]);
          g.beginPath();
          if (m.movEsp.tipo === 'minhoca') g.arc(Math.round(m.x), Math.round(m.y), 20 + Math.sin(S.ta * 12) * 4, 0, Math.PI * 2);
          else { g.moveTo(Math.round(m.x), Math.round(m.y)); g.lineTo(Math.round(m.x + m.movEsp.dx * 240), Math.round(m.y + m.movEsp.dy * 240)); }
          g.stroke(); g.setLineDash([]);
        }
      } else if (m.tipo === 'curandeiro') {
        g.save(); g.globalAlpha = 0.3; g.strokeStyle = '#7dff9a'; g.lineWidth = 1; g.setLineDash([2, 4]); g.beginPath(); g.arc(Math.round(m.x), Math.round(m.y), RAIO_SUPORTE, 0, Math.PI * 2); g.stroke(); g.restore(); // alcance da cura
        const pulso = 9 + Math.sin(S.ta * 6 + m.fase) * 2; g.strokeStyle = '#7dff9a'; g.lineWidth = 1; g.beginPath(); g.arc(Math.round(m.x), Math.round(m.y), pulso, 0, Math.PI * 2); g.stroke();
        g.fillStyle = '#ffffff'; g.fillRect(Math.round(m.x) - 1, Math.round(m.y) - 10, 3, 7); g.fillRect(Math.round(m.x) - 3, Math.round(m.y) - 8, 7, 3);
      } else if (m.tipo === 'amplificador') {
        g.save(); g.globalAlpha = 0.3; g.strokeStyle = '#ff7ab8'; g.lineWidth = 1; g.setLineDash([2, 4]); g.beginPath(); g.arc(Math.round(m.x), Math.round(m.y), RAIO_SUPORTE, 0, Math.PI * 2); g.stroke(); g.restore(); // alcance do buff
        const pulso = 11 + ((S.ta * 8 + m.fase) % 5); g.strokeStyle = `rgba(255, 122, 184, ${0.9 - (pulso - 11) * 0.12})`; g.lineWidth = 2; g.beginPath(); g.arc(Math.round(m.x), Math.round(m.y), pulso, 0, Math.PI * 2); g.stroke();
        g.fillStyle = '#ff7ab8'; for (const x of [-4, 0, 4]) g.fillRect(Math.round(m.x + x), Math.round(m.y - 10 - Math.abs(x) / 2), 2, 4);
      } else if (m.tipo === 'fulminante') {
        g.strokeStyle = '#38c8ff'; g.lineWidth = 1; g.beginPath(); g.moveTo(Math.round(m.x) - 8, Math.round(m.y) - 7); g.lineTo(Math.round(m.x) - 3, Math.round(m.y) - 12); g.lineTo(Math.round(m.x), Math.round(m.y) - 8); g.lineTo(Math.round(m.x) + 5, Math.round(m.y) - 13); g.stroke();
      }
      if (m.buffT > 0) { g.fillStyle = '#ffe14a'; for (const x of [-5, 3]) { g.fillRect(Math.round(m.x + x), Math.round(m.y - 13), 3, 1); g.fillRect(Math.round(m.x + x + 1), Math.round(m.y - 14), 1, 1); } }
    }
    for (const b of S.tirosInimigos) { if (!visivel(b.x, b.y, 4)) continue; if (b.forma || b.cor) { desenharTiroEspecial(b); continue; } g.fillStyle = '#ff5a8a'; g.fillRect(Math.round(b.x) - 2, Math.round(b.y) - 2, 4, 4); g.fillStyle = '#ffd0e0'; g.fillRect(Math.round(b.x) - 1, Math.round(b.y) - 1, 2, 2); }
    desenharTintas(visivel);
    if (S.alien && S.alien.estado === 'aviso') { // linha de aviso da investida
      const al = S.alien; g.strokeStyle = Math.floor(S.ta * 14) % 2 ? '#ff3b4a' : '#ffb3ba'; g.lineWidth = 2; g.setLineDash([4, 4]);
      g.beginPath(); g.moveTo(Math.round(al.x), Math.round(al.y)); g.lineTo(Math.round(al.x + al.dirX * 300), Math.round(al.y + al.dirY * 300)); g.stroke(); g.setLineDash([]);
    }
    if (S.alien && S.alien.estado === 'salvas' && S.alien.salvaTipo === 'ferrao' && S.alien.cdSalva < 0.32 && !S.alien.surgir) { // o ferrão avisa por onde vai passar
      const al = S.alien, d = Math.hypot(S.nx - al.x, S.ny - al.y) || 1;
      g.strokeStyle = Math.floor(S.ta * 20) % 2 ? '#8ee8ff' : '#ffffff'; g.lineWidth = 1; g.setLineDash([2, 3]);
      g.beginPath(); g.moveTo(Math.round(al.x), Math.round(al.y + 10)); g.lineTo(Math.round(al.x + ((S.nx - al.x) / d) * 260), Math.round(al.y + 10 + ((S.ny - al.y - 10) / d) * 260)); g.stroke(); g.setLineDash([]);
    }
    for (const r of S.raios) { // raios de alienígenas, monstros e chefões
      const x2 = r.x + Math.cos(r.ang) * 400, y2 = r.y + Math.sin(r.ang) * 400;
      g.beginPath(); g.moveTo(Math.round(r.x), Math.round(r.y)); g.lineTo(Math.round(x2), Math.round(y2));
      const corRaio = r.cor || '#ff3bd4';
      if (r.aviso > 0) { g.strokeStyle = Math.floor(S.ta * 16) % 2 ? corRaio : '#ffffff'; g.lineWidth = 1; g.setLineDash([3, 3]); g.stroke(); g.setLineDash([]); }
      else { g.strokeStyle = corRaio; g.lineWidth = 7; g.stroke(); g.strokeStyle = '#ffffff'; g.lineWidth = 3; g.stroke(); }
    }
    for (const b of S.tiros) { g.fillStyle = b.critico ? '#ff5a2a' : '#ffe14a'; g.fillRect(Math.round(b.x) - (b.critico ? 2 : 1), Math.round(b.y) - (b.critico ? 2 : 1), b.critico ? 4 : 3, b.critico ? 4 : 3); g.fillStyle = '#ffffff'; g.fillRect(Math.round(b.x), Math.round(b.y), 1, 1); }

    if (S.laser) { // laser contínuo
      const c = Math.cos(S.laser.ang), s = Math.sin(S.laser.ang), x2 = S.nx + c * S.laser.len, y2 = S.ny + s * S.laser.len;
      g.beginPath(); g.moveTo(Math.round(S.nx + c * 7), Math.round(S.ny + s * 7)); g.lineTo(Math.round(x2), Math.round(y2));
      g.strokeStyle = Math.floor(S.ta * 24) % 2 ? '#38c8ff' : '#8bd3ff'; g.lineWidth = 4; g.stroke();
      g.strokeStyle = '#ffffff'; g.lineWidth = 1.5; g.stroke();
    }
    for (const m of S.misseis) { // mísseis
      const c = Math.cos(m.ang), s = Math.sin(m.ang);
      g.fillStyle = '#070a1a'; g.fillRect(Math.round(m.x) - 3, Math.round(m.y) - 3, 6, 6);
      g.fillStyle = '#ff9a3a'; g.fillRect(Math.round(m.x + c * 1) - 2, Math.round(m.y + s * 1) - 2, 4, 4);
      g.fillStyle = '#ffffff'; g.fillRect(Math.round(m.x + c * 2), Math.round(m.y + s * 2), 1, 1);
    }
    // nave, cano, escudo, orbes e drone
    const piscando = S.invul > 0 && Math.floor(S.ta * 14) % 2 === 0;
    const passo = Math.PI / 8, ang = Math.round(S.mira / passo) * passo;
    const nx = Math.round(S.nx), ny = Math.round(S.ny);
    const tr = S.tiers || { motor: 0, armas: 0, casco: 0, nucleo: 0, ima: 0 };
    const chamaNave = (cx, cy, comp, cores) => { for (let k = 0; k < comp; k++) { g.fillStyle = k < comp * 0.35 ? cores[0] : k < comp * 0.7 ? cores[1] : cores[2]; g.fillRect(cx - (k < comp * 0.6 ? 1 : 0), cy + k, k < comp * 0.6 ? 2 : 1, 1); } };
    const armaAtiva = S.arma >= 2 ? S.slots[S.arma - 2] : 'normal', hiper = armaAtiva === 'turbo' && S.boostE > 0;
    const cmp = 2 + tr.motor + (S.movendo ? 3 : 0) + (S.turboT > 0 || hiper ? 3 : 0) + (S.driftT > 0 ? 5 : 0) + Math.floor(Math.random() * 2);
    g.save(); g.translate(nx, ny); g.rotate(S.angNave || 0);
    for (const f of chamasNave) chamaNave(f.x - TAM_NAVE / 2, f.y - TAM_NAVE / 2, f.tipo === 'plasma' ? cmp + 2 : cmp, f.cores); // uma chama em cada motor instalado
    if (tr.motor >= 2) for (const x of [-7, 7]) chamaNave(x, 7, Math.max(2, cmp - 3), ['#fff0a0', '#ffc83d', '#ff7a3a']);
    g.restore();
    g.fillStyle = S.driftT > 0 ? '#ffffff' : S.turboT > 0 || hiper ? '#ff7a3a' : '#ffd23f';
    const nb = Math.min(4, S.projeteis), lenB = 5 + Math.min(4, Math.floor(tr.armas / 2)), px = -Math.sin(ang), py = Math.cos(ang);
    for (let b = 0; b < nb; b++) {
      const off = (b - (nb - 1) / 2) * 2.4;
      for (let k = 4; k <= 4 + lenB; k++) g.fillRect(Math.round(nx + Math.cos(ang) * k + px * off) - 1, Math.round(ny + Math.sin(ang) * k + py * off) - 1, 2, 2);
      if (dados.oficina.lente > 0) { g.fillStyle = '#7be3ff'; g.fillRect(Math.round(nx + Math.cos(ang) * (5 + lenB) + px * off) - 1, Math.round(ny + Math.sin(ang) * (5 + lenB) + py * off) - 1, 2, 2); g.fillStyle = S.turboT > 0 ? '#ff7a3a' : '#ffd23f'; }
    }
    const desenharNaveRotacionada = (sprite, alpha = 1) => {
      g.save(); g.globalAlpha *= alpha; g.translate(nx, ny); g.rotate(S.angNave || 0); g.drawImage(sprite, -TAM_NAVE / 2, -TAM_NAVE / 2); g.restore();
    };
    desenharNaveRotacionada(piscando ? naveSpr.branca : naveSpr.c);
    if (S.upgFx) { // brilho de upgrade: anel que se expande e a nave acende
      const u = 1 - S.upgFx.t / S.upgFx.max;
      desenharNaveRotacionada(naveSpr.branca, 0.7 * (1 - u));
      g.globalAlpha = 1 - u; g.strokeStyle = '#ffe14a'; g.lineWidth = 2; g.beginPath(); g.arc(nx, ny, Math.max(0, 8 + u * 22), 0, Math.PI * 2); g.stroke();
      g.strokeStyle = '#ffffff'; g.lineWidth = 1; g.beginPath(); g.arc(nx, ny, Math.max(0, 5 + u * 14), 0, Math.PI * 2); g.stroke(); g.globalAlpha = 1;
    }
    for (const [t, cor, raio] of [[S.buffDanoT, '#ff3b4a', 14], [S.buffVelT, '#ffd23f', 16], [S.buffXpT, '#a56bff', 18]]) { // aura de cada bônus ativo (pisca no fim)
      if (t > 0 && (t > 2.5 || Math.floor(S.ta * 8) % 2 === 0)) { g.save(); g.globalAlpha = 0.55; g.strokeStyle = cor; g.lineWidth = 1; g.setLineDash([2, 3]); g.beginPath(); g.arc(nx, ny, raio + Math.sin(S.ta * 8) * 1.2, 0, Math.PI * 2); g.stroke(); g.restore(); }
    }
    if (S.escudoT > 0 && (S.escudoT > 1.5 || Math.floor(S.ta * 10) % 2 === 0)) { g.strokeStyle = '#8bd3ff'; g.lineWidth = 2; g.beginPath(); g.arc(nx, ny, 11, 0, Math.PI * 2); g.stroke(); }
    if (S.barreira > 0) { g.strokeStyle = '#7dff9a'; g.lineWidth = 1; g.globalAlpha = 0.7; g.beginPath(); g.arc(nx, ny, 12 + (S.barreira > 1 ? 2 : 0), 0, Math.PI * 2); g.stroke(); g.globalAlpha = 1; }
    for (const o of orbesPos()) { const px = Math.round(o.x), py = Math.round(o.y); g.fillStyle = '#070a1a'; g.fillRect(px - 3, py - 3, 7, 7); g.fillStyle = '#ff3bd4'; g.fillRect(px - 2, py - 2, 5, 5); g.fillStyle = '#ffffff'; g.fillRect(px - 1, py - 1, 2, 2); }
    for (const p of S.parts) { if (visivel(p.x, p.y, 4)) { g.fillStyle = p.cor; g.fillRect(Math.round(p.x), Math.round(p.y), 2, 2); } }
    for (const o of S.ondas) { g.strokeStyle = o.cor; g.lineWidth = 2; g.globalAlpha = Math.max(0, 1 - o.r / o.max); g.beginPath(); g.arc(Math.round(o.x), Math.round(o.y), Math.max(0, o.r), 0, Math.PI * 2); g.stroke(); g.globalAlpha = 1; }
    for (const tx of S.textos) escrever(tx.txt, tx.x - ox, tx.y - oy, tx.cor, 10, 'center', Math.min(1, tx.vida * 2));
    g.restore();

    // indicadores na borda (cristais fora de vista, buraco negro, chefão, moedas espaciais)
    if (mundo) {
      const fora = S.cristais.filter((c) => !visivel(c.x, c.y, 2)).map((c) => ({ c, d: Math.hypot(c.x - S.nx, c.y - S.ny) })).filter((o) => o.d < 620).sort((p, q) => p.d - q.d).slice(0, 6);
      g.globalAlpha = 0.55 + 0.35 * Math.sin(t * 6);
      for (const { c } of fora) { const dx = c.x - (ox + L / 2), dy = c.y - (oy + A / 2), k = Math.min((L / 2 - 10) / (Math.abs(dx) || 1e-6), (A / 2 - 10) / (Math.abs(dy) || 1e-6)); g.drawImage(spriteCristal(c.v), Math.round(L / 2 + dx * k - 3.5), Math.round(A / 2 + dy * k - 4.5)); }
      g.globalAlpha = 1;
      if (S.buraco && !visivel(S.buraco.x, S.buraco.y, 2)) indicador(S.buraco.x, S.buraco.y, ox, oy, '#c43fff', `${Math.ceil(S.buraco.vida)}s`, S.buraco.vida < 8);
      if (S.chefe && !visivel(S.chefe.x, S.chefe.y, 2)) indicador(S.chefe.x, S.chefe.y, ox, oy, '#ff3b4a');
      for (const it of S.itens) if (it.tipo === 'moedaEsp' && !visivel(it.x, it.y, 2)) indicador(it.x, it.y, ox, oy, '#38c8ff');
      for (const it of S.itens) if (ESTRELAS[it.tipo] && !visivel(it.x, it.y, 2)) indicador(it.x, it.y, ox, oy, ESTRELAS[it.tipo].cor, `${Math.ceil(it.vida)}s`, it.vida < 5);
    }
    if (!S.alien && S.regiaoForcada == null) desenharAmbiente(g, faseDe(S.fase).ambientes, 'frente', { camX, camY, t, W: L, H: A });
    if (!S.alien) {
      if (S.combo >= 3) escrever(`COMBO x${S.combo}`, L - 8, 24, S.combo >= 50 ? '#ff7ab8' : S.combo >= 25 ? '#ff9a3a' : S.combo >= 10 ? '#ffe14a' : '#ffffff', 11, 'right');
    }
    if (S.chefe) {
      g.fillStyle = 'rgba(40, 0, 15, .34)'; g.fillRect(0, 0, L, 5); g.fillRect(0, A - 5, L, 5); g.fillRect(0, 0, 5, A); g.fillRect(L - 5, 0, 5, A);
      escrever((S.chefe.lenda || CHEFES[S.chefe.b]).nome, CX, 10, S.chefe.lenda ? S.chefe.lenda.cor : '#ff7084', 9);
      barra(CX - 60, 14, 120, S.chefe.hp / S.chefe.hpMax, S.chefe.lenda ? S.chefe.lenda.cor : '#ff3b4a');
      if (S.chefe.lenda) { g.fillStyle = '#ffffff'; g.fillRect(CX, 13, 1, 6); }
    }
    if (S.intro) desenharIntro();
    if (S.faseIntro && !S.alien) desenharAnuncioFase();
    if (S.alien) barra(CX - 60, 8, 120, S.alien.hp / S.alien.hpMax, '#ff3bd4');
    if (S.flash > 0) { g.fillStyle = `rgba(255, 255, 255, ${Math.min(0.8, S.flash * 2.5)})`; g.fillRect(0, 0, L, A); }
    g.restore();
  }

  let hudCache = '';
  function atualizarHud() {
    if (!S) return;
    const armaAtiva = S.arma >= 2 ? S.slots[S.arma - 2] : 'normal';
    const efeitos = [S.buffDanoT > 0 ? `DANO+ ${Math.ceil(S.buffDanoT)}` : '', S.buffVelT > 0 ? `VELOC+ ${Math.ceil(S.buffVelT)}` : '', S.buffXpT > 0 ? `XP×2 ${Math.ceil(S.buffXpT)}` : '', S.lentidao < 1 ? 'DETRITOS: LENTO' : '', S.imaT > 0 ? 'ÍMÃ' : '', S.escudoT > 0 ? `ESCUDO ${Math.ceil(S.escudoT)}` : '', S.turboT > 0 ? `TURBO ${Math.ceil(S.turboT)}` : '', armaAtiva === 'turbo' && S.boostE > 0 ? 'HIPERPROPULSOR' : '', S.driftT > 0 ? 'DRIFT ÍGNEO' : ''].filter(Boolean).join(' ');
    const chave = `${S.hp}/${S.maxHp}|${S.nivel}|${Math.floor(S.xp)}|${S.xpProx}|${S.kills}|${Math.floor(S.t)}|${S.onda}|${S.fase}|${S.aviso > 0}|${S.avisoTxt}|${efeitos}|${dados.moedas}|${!!S.alien}`;
    if (chave === hudCache) return;
    hudCache = chave;
    vidasEl.replaceChildren(...Array.from({ length: S.maxHp }, (_, i) => el('i', i + 1 <= S.hp ? 'cheia' : i < S.hp ? 'meia' : 'vazia')));
    const hpVisivel = Math.max(0, Math.round(S.hp * 10) / 10);
    vidasEl.setAttribute('aria-label', `${hpVisivel} de ${S.maxHp} pontos de vida · ${Math.round(Math.min(0.5, S.armadura * 0.06) * 100)}% de redução por armadura`);
    nivelEl.textContent = `NV ${S.nivel}`;
    xpBarra.style.width = `${Math.min(100, (S.xp / S.xpProx) * 100)}%`;
    xpBox.setAttribute('aria-valuenow', String(Math.floor(S.xp))); xpBox.setAttribute('aria-valuemax', String(S.xpProx));
    killsEl.textContent = `☠ ${S.kills}`;
    ondaEl.textContent = S.alien ? 'BURACO NEGRO' : S.onda > 0 ? `F${S.fase} · ONDA ${S.onda}${S.ondaFila > 0 ? ` · ${S.ondaFila} A CAMINHO` : ''}` : '';
    ondaEl.classList.toggle('alerta', !!S.alien || S.ondaEstado === 'chefe');
    efeitosEl.textContent = efeitos;
    moedaEl.textContent = `◆ ${dados.moedas}`;
    avisoOnda.hidden = !(S.aviso > 0);
    avisoOnda.textContent = S.avisoTxt;
    tempoEl.textContent = fmt(Math.floor(S.t));
  }

  function atualizarArmas() {
    const vis = S && (modo === 'jogando' || modo === 'escolha' || modo === 'pausa');
    armasEl.style.visibility = vis ? 'visible' : 'hidden';
    if (!vis) return;
    for (let n = 1; n <= 4; n++) {
      const { b, nm, barra } = botoesArma[n - 1];
      const id = n === 1 ? 'normal' : S.slots[n - 2];
      let nome = 'VAZIO', f = -1;
      if (id) {
        nome = `${NOMES_CURTOS[id] || ARMAS[id].curto} · N${S.armasNivel[id]}`;
        if (id === 'laser') f = S.laserE / (S.laserMax * (1 + 0.18 * (S.armasNivel.laser - 1)));
        else if (id === 'missil') f = 1 - Math.max(0, S.missilT) / S.missilMax;
        else if (id === 'turbo') f = S.boostE / S.boostMax;
        else if (id === 'cura') f = 1 - S.curaCd / S.curaMax;
        else if (id === 'escudo') f = S.escudoT > 0 ? 1 : 1 - S.escudoCd / S.escudoMax;
        else if (id === 'salto') f = S.saltoCarga > 0 ? 1 - S.saltoCarga / S.saltoCargaMax : 1 - S.saltoCd / S.saltoMax;
        else if (id === 'drift') f = S.driftT > 0 ? 1 : 1 - S.driftCd / S.driftMax;
      }
      if (nm.textContent !== nome) nm.textContent = nome;
      barra.style.display = f < 0 ? 'none' : 'block';
      barra.style.width = `${Math.round(Math.max(0, Math.min(1, f)) * 100)}%`;
      b.classList.toggle('ativa', S.arma === n);
      b.classList.toggle('vazio', n >= 2 && !id);
      b.classList.toggle('quente', id === 'laser' && S.laserQuente);
      b.disabled = n >= 2 && !id;
      b.setAttribute('aria-pressed', String(S.arma === n));
      b.setAttribute('aria-label', `Arma ${n}: ${nome}${id === 'laser' && S.laserQuente ? ', superaquecida' : ''}`);
    }
  }

  function atualizarBotaoPausa() {
    const visivel = modo === 'jogando' || modo === 'pausa';
    pausarBtn.hidden = !visivel;
    if (!visivel) return;
    const pausado = modo === 'pausa';
    pausarBtn.textContent = pausado ? '▶' : 'II';
    pausarBtn.title = pausado ? 'Continuar (Esc)' : 'Pausar (Esc)';
    pausarBtn.setAttribute('aria-label', pausado ? 'Continuar jogo' : 'Pausar jogo');
  }

  function quadro(agora) {
    if (window.__curriculoArcadeGeracao !== geracao) { aberto = false; cancelAnimationFrame(raf); return; }
    if (!aberto) return;
    const dt = Math.min((agora - ultimo) / 1000, 0.05);
    ultimo = agora;
    if (modo === 'jogando') atualizar(dt);
    if (modo === 'oficina') { if (abaOficina === 'montagem') garagem.animar(agora / 1000); else animarNave(agora / 1000); }
    fundo.passo(dt);
    desenhar();
    atualizarHud();
    atualizarArmas();
    atualizarBotaoPausa();
    raf = requestAnimationFrame(quadro);
  }

  // ---------- controle ----------
  function comecar() {
    teclas.clear(); ponteiro.ativo = false; joystick.hidden = true;
    destravarFaixas();
    faixa = 'normal'; musicaChefe.pause(); musicaFim.pause();
    musica.currentTime = 0; tocarMusica(); // a música recomeça do início a cada partida
    novoJogo();
    semearMundo(4); // começo legível: poucos corpo a corpo chegam antes da primeira onda
    hudCache = '';
    painelInicio.hidden = true; painelFim.hidden = true; painelEscolha.hidden = true; painelPausa.hidden = true; painelOficina.hidden = true; painelBestiario.hidden = true;
    modo = 'jogando';
    ultimo = performance.now();
    bip(523, 0.08, 'square', 0.05); bip(784, 0.12, 'square', 0.05, 0.08);
  }
  function pausar(ligar) {
    if (ligar && modo === 'jogando') { modo = 'pausa'; teclas.clear(); ponteiro.ativo = false; joystick.hidden = true; painelPausa.hidden = false; pararMusicas(); }
    else if (!ligar && modo === 'pausa') { modo = 'jogando'; painelPausa.hidden = true; ultimo = performance.now(); tocarMusica(); }
  }
  function abrir() {
    if (aberto) return;
    aberto = true;
    raiz.classList.add('aberto');
    faixa = 'normal'; musicaChefe.pause(); musicaFim.pause();
    tocarMusica();
    destravarFaixas();
    dados = carregarDados();
    recordesEl.textContent = dados.tempo || dados.kills || dados.onda
      ? `RECORDE  ${fmt(dados.tempo)}  ·  ${dados.kills} MONSTROS  ·  ONDA ${dados.onda}`
      : 'PRIMEIRA MISSÃO · BOA SORTE, PILOTO!';
    S = null; modo = 'inicio'; hudCache = '';
    novoJogo();
    painelInicio.hidden = false; painelFim.hidden = true; painelEscolha.hidden = true; painelPausa.hidden = true; painelOficina.hidden = true; painelBestiario.hidden = true;
    vidasEl.replaceChildren(); nivelEl.textContent = ''; killsEl.textContent = ''; tempoEl.textContent = ''; ondaEl.textContent = ''; efeitosEl.textContent = ''; moedaEl.textContent = `◆ ${dados.moedas}`; xpBarra.style.width = '0';
    atualizarBotoesMoedas();
    ultimo = performance.now();
    raf = requestAnimationFrame(quadro);
    btnComecar.focus({ preventScroll: true });
  }
  function fecharJanela() {
    if (!aberto) return;
    aberto = false;
    teclas.clear(); ponteiro.ativo = false; joystick.hidden = true;
    raiz.classList.remove('aberto');
    pararMusicas();
    cancelAnimationFrame(raf);
  }

  btnComecar.onclick = comecar;
  btnOficinaIni.onclick = abrirOficina;
  btnBestiario.onclick = abrirBestiario;
  atualizarBotaoBestiario();
  btnContinuar.onclick = () => pausar(false);
  btnSairPausa.onclick = fecharJanela;
  pausarBtn.onclick = () => pausar(modo === 'jogando');
  fechar.onclick = fecharJanela;
  raiz.addEventListener('pointerdown', (e) => { if (e.target === raiz && modo !== 'jogando' && modo !== 'escolha') fecharJanela(); });
  window.addEventListener('visibilitychange', () => { if (document.hidden) pausar(true); });
  const lerPonteiro = (e) => {
    const r = cv.getBoundingClientRect();
    ponteiro.x = ((e.clientX - r.left) / r.width) * L;
    ponteiro.y = ((e.clientY - r.top) / r.height) * A;
  };
  const atualizarToque = (e) => {
    const r = cv.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * L, y = ((e.clientY - r.top) / r.height) * A;
    ponteiro.dx = x - ponteiro.origemX; ponteiro.dy = y - ponteiro.origemY;
    const px = ponteiro.dx * (r.width / L), py = ponteiro.dy * (r.height / A), d = Math.hypot(px, py) || 1, limite = 28;
    const k = Math.min(1, limite / d);
    joystickMiolo.style.transform = `translate(calc(-50% + ${Math.round(px * k)}px), calc(-50% + ${Math.round(py * k)}px))`;
  };
  cv.addEventListener('pointerdown', (e) => {
    if (modo !== 'jogando') return;
    ponteiro.ativo = true; ponteiro.toque = e.pointerType !== 'mouse';
    lerPonteiro(e);
    if (ponteiro.toque) {
      const r = cv.getBoundingClientRect();
      ponteiro.origemX = ponteiro.x; ponteiro.origemY = ponteiro.y; ponteiro.dx = ponteiro.dy = 0;
      joystick.style.left = `${Math.round(e.clientX - r.left)}px`; joystick.style.top = `${Math.round(e.clientY - r.top)}px`;
      joystickMiolo.style.transform = 'translate(-50%, -50%)'; joystick.hidden = false;
    }
    cv.setPointerCapture?.(e.pointerId);
  });
  cv.addEventListener('pointermove', (e) => { if (ponteiro.ativo) { if (ponteiro.toque) atualizarToque(e); else lerPonteiro(e); } });
  for (const ev of ['pointerup', 'pointercancel']) cv.addEventListener(ev, () => { ponteiro.ativo = false; ponteiro.toque = false; ponteiro.dx = ponteiro.dy = 0; joystick.hidden = true; });
  window.addEventListener('keyup', (e) => teclas.delete(e.code));
  window.addEventListener('blur', () => teclas.clear());
  window.addEventListener('keydown', (e) => {
    if (!aberto) return;
    if (TECLAS_MOVER.includes(e.code)) { e.preventDefault(); if (modo === 'jogando') teclas.add(e.code); return; }
    if (e.code === 'Escape') {
      e.preventDefault();
      if (modo === 'jogando') pausar(true); else if (modo === 'pausa') pausar(false); else if (modo === 'oficina') fecharOficina(); else if (modo === 'bestiario') fecharBestiario(); else if (modo === 'inicio' || modo === 'fim') fecharJanela();
    } else if (e.code === 'Space' || e.code === 'Enter') {
      if (modo === 'inicio' || modo === 'fim') { e.preventDefault(); comecar(); }
    } else if (['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4'].includes(e.code)) {
      e.preventDefault();
      const n = Number(e.code.slice(-1));
      if (modo === 'escolha') escolher(n - 1); else selecionarArma(n);
    }
  }, true);

  // gancho só do modo dev: avança a simulação sem depender do relógio do navegador e força eventos (usado nos testes)
  if (import.meta.env.DEV) {
    window.__arcadeTeste = {
      abrir, oficina: () => abrirOficina(), bestiario: () => abrirBestiario(), dados: () => dados,
      projeto(p) { dados.projeto = normalizarProjeto(p); for (const id of [dados.projeto.chassi, ...dados.projeto.pecas]) if (id && !dados.pecasLiberadas.includes(id)) dados.pecasLiberadas.push(id); salvarDados(); atualizarNaveSpr(); garagem.render(); return dados.projeto; },
      musicas: () => ({ normal: !musica.paused, chefe: !musicaChefe.paused, fim: !musicaFim.paused, tN: +musica.currentTime.toFixed(1), tC: +musicaChefe.currentTime.toFixed(1), estadoC: musicaChefe.readyState, errC: musicaChefe.error && musicaChefe.error.code, volC: musicaChefe.volume, mudoC: musicaChefe.muted }),
      mirar(x, y) { ponteiro.ativo = x != null; if (x != null) { ponteiro.x = x - (S.cx - L / 2); ponteiro.y = y - (S.cy - A / 2); } },
      inimigosXY: () => S.inimigos.map((m) => [Math.round(m.x - S.nx), Math.round(m.y - S.ny)]),
      cristais: () => S.cristais.map((c) => ({ x: Math.round(c.x), y: Math.round(c.y), v: c.v })),
      itens: () => S.itens.map((i) => ({ x: Math.round(i.x), y: Math.round(i.y), tipo: i.tipo })),
      rochas: () => S.rochas.map((r) => ({ x: Math.round(r.x), y: Math.round(r.y), hp: r.hp, hpMax: r.hpMax })),
      forcar: {
        buraco: () => { if (!S.buraco) criarBuraco(); S.buraco.x = S.nx + 60; S.buraco.y = S.ny; },
        alien: (idx) => { if (!S.alien) entrarBuraco(idx); },
        sairAlien: (vit) => { if (S.alien) S.pendente = vit ? 'vitoria' : 'expulso'; },
        chefe: () => { if (!S.chefe) criarChefeInimigo(); },
        nativo: (id) => criarNativo(id || faseDe(S.fase).nativo),
        matarNativos: () => { for (const m of [...S.inimigos]) if (m.tipo === 'nativo') danificar(m, 99999); },
        anunciar: () => anunciarFase(),
        irFase: (n) => { S.fase = n; S.onda = Math.max(S.onda, (n - 1) * 3 + 1); anunciarFase(); spawnNativos(1); },
        lenda: (id) => { if (!S.chefe) criarLenda(LENDAS.find((l) => l.id === id) || LENDAS[0]); },
        ataqueLenda: (nome) => { const b = S.chefe; if (b && b.lenda) { b.entrada = 0; b.sumido = 0; b.acao = { nome, t: 0, acc: 0, dir: Math.atan2(S.ny - b.y, S.nx - b.x) }; b.lenda.ataques[nome].iniciar?.(b, ctxLenda, b.acao); b.ultimo = nome; } },
        enfurecerLenda: () => { if (S.chefe) S.chefe.hp = S.chefe.hpMax * 0.45; },
        rocha: () => { criarRocha(); const r = S.rochas[S.rochas.length - 1]; r.x = S.nx + 70; r.y = S.ny - 10; r.vx = r.vy = 0; },
        inimigo: (tipo) => criarInimigo(tipo, S.nx + 70, S.ny),
        upgrade: () => { S.xp = S.xpProx; },
        item: (tipo) => S.itens.push({ tipo, x: S.nx + 12, y: S.ny, vida: 16, fase: 0 }),
        onda: () => { S.proxOnda = 0; },
        fase: (n) => { S.onda = (n - 1) * 3; S.ondaEstado = 'calma'; S.proxOnda = 0; },
        regiao: (n) => { S.regiaoForcada = n; },
        subirNivel: () => { S.xp = S.xpProx; },
        estrela: (tipo) => S.itens.push({ tipo, x: S.nx + 10, y: S.ny, vida: 24, fase: 0 }),
        buffs: () => ({ dano: +S.buffDanoT.toFixed(1), vel: +S.buffVelT.toFixed(1), xp: +S.buffXpT.toFixed(1), escudo: +S.escudoT.toFixed(1), danoGlobal: +S.danoGlobal.toFixed(2), xpAtual: +S.xp.toFixed(1) }),
        ir: (x, y) => { S.nx = x; S.ny = y; S.cx = x; S.cy = y; },
        achar: () => { // procura um planeta, uma cadeia de rochas e um campo de detritos perto da partida
          const r = {};
          for (let j = -6; j <= 6; j++) for (let i = -6; i <= 6; i++) { const c = obstaculos.celula(i, j); if (!r.planeta && c.planetas[0]) r.planeta = [Math.round(c.planetas[0].x), Math.round(c.planetas[0].y)]; if (!r.cadeia && c.rochas.length > 6) r.cadeia = [Math.round(c.rochas[Math.floor(c.rochas.length / 2)].x), Math.round(c.rochas[Math.floor(c.rochas.length / 2)].y), c.rochas.length]; if (!r.campo && c.zonas[0]) r.campo = [Math.round(c.zonas[0].x), Math.round(c.zonas[0].y), Math.round(c.zonas[0].r)]; }
          return r;
        },
        lentidao: () => S.lentidao,
        projeteis: (n) => { S.projeteis = n; S.niveis.proj_canhao = Math.min(2, n - 1); },
        completar: () => { if (S.ondaEstado !== 'calma') terminarOnda(); },
        hp: (n) => { S.hp = n; },
        tempo: (n) => { S.t = n; S.proxBuraco = n + 999; },
        limpar: () => { S.inimigos = []; S.chefe = null; },
        ataqueAlien: (nome) => { if (S.alien) { S.alien.ataque = nome; S.alien.estado = 'carga'; S.alien.carga = 0.05; S.alien.surgir = 0; S.alien.hp = S.alien.hpMax; S.intro = null; S.hp = S.maxHp; } },
        alienHp: (n) => { if (S.alien) S.alien.hp = n; },
        tipoChefe: (n) => { if (S.chefe) S.chefe.b = n; },
        tipoAlien: (n) => { if (S.alien) S.alien.v = n; },
        chefeHp: (n) => { if (S.chefe) S.chefe.hp = n; },
        poder: (id) => darPoder(S, id),
        arma: (n) => selecionarArma(n),
        nivel: (id, n) => { S.niveis[id] = n; },
        moedas: (n) => { dados.moedas += n; salvarDados(); },
      },
      avancar(seg, auto = true) {
        for (let t = 0; t < seg; t += 0.05) {
          if (modo === 'escolha' && auto) escolher(0);
          if (modo === 'jogando') atualizar(0.05);
        }
        desenhar(); atualizarHud();
        return { modo, lenda: S && S.chefe && S.chefe.lenda ? { id: S.chefe.lenda.id, hp: Math.round(S.chefe.hp), acao: S.chefe.acao && S.chefe.acao.nome, enf: S.chefe.enfurecido, ovo: S.chefe.ovo, raio: S.chefe.raio, entrada: +S.chefe.entrada.toFixed(1), x: Math.round(S.chefe.x), y: Math.round(S.chefe.y) } : null, invertido: S && S.invertidoT, ang: S && +S.angNave.toFixed(2), giro: S && S.giro, t: S && S.t, hp: S && S.hp, armadura: S && S.armadura, niveisNave: S && { dano: S.niveis.dano_geral | 0, vida: S.niveis.reparo | 0, velocidade: S.niveis.motor | 0, recarga: S.niveis.recarga_geral | 0 }, nivel: S && S.nivel, kills: S && S.kills, fase: S && S.fase, onda: S && S.onda, ondaEstado: S && S.ondaEstado, ondaT: S && +S.ondaT.toFixed(1), combo: S && S.combo, inimigos: S && S.inimigos.length, rochas: S && S.rochas.length, itens: S && S.itens.length, cristais: S && S.cristais.length, chefe: S && !!S.chefe, chefeHp: S && S.chefe && S.chefe.hp, alien: S && !!S.alien, alienHp: S && S.alien && S.alien.hp, buraco: S && !!S.buraco, poderes: S && Object.keys(S.poderes).filter((k) => S.poderes[k]), armasNivel: S && { ...S.armasNivel }, elenco: S && [...S.elencoRun], arma: S && S.arma, laserE: S && +S.laserE.toFixed(2), quente: S && S.laserQuente, misseis: S && S.misseis.length, skinBase: S && S.skinBase, projeteis: S && S.projeteis, ataqueAlien: S && S.alien ? S.alien.ataque : null, iaAlien: S && S.alien ? { estado: S.alien.estado, memoria: [...S.alien.memoria], plano: [...S.alien.plano], distancia: Math.round(Math.hypot(S.alien.x - S.nx, S.alien.y - S.ny)) } : null, tiros: S && S.tiros.length, alienXY: S && S.alien ? [Math.round(S.alien.x), Math.round(S.alien.y)] : null, imaT: S && +S.imaT.toFixed(1), aliensVencidos: S && S.aliensVencidos, barreira: S && S.barreira, moedas: dados.moedas, campos: S && S.campos.length, raios: S && S.raios.length, estadoAlien: S && S.alien && S.alien.estado, tirosInimigos: S && S.tirosInimigos.length, nx: S && Math.round(S.nx), ny: S && Math.round(S.ny) };
      },
    };
  }

  return { abrir, fechar: fecharJanela, estaAberto: () => aberto };
}
