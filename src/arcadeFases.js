// As fases do jogo de nave. Cada fase é um lugar diferente do universo, com céu próprio, ambientação por cima dele
// (ver arcadeAmbiente.js) e um monstro nativo que só existe ali (ver arcadeNativos.js): maior e mais lento que os comuns.
// "regiao" é o índice em REGIOES (src/arcadeFundo.js). Depois da última fase, o jogo volta para as regiões mais estranhas, mais forte.
export const FASES = [
  { id: 'berco', nome: 'BERÇÁRIO DE ESTRELAS', regiao: 0, cor: '#ff7ab8', sub: 'esporos de luz à deriva', nativo: 'luminosa',
    ambientes: [['neblina', { cor: '255, 110, 190', alpha: 0.1, n: 5 }], ['particulas', { n: 48, cor: '255, 190, 230', vy: -7, par: 0.35, brilho: 3 }], ['cometas', { cor: '255, 200, 240', periodo: 14, lanes: 1 }]] },
  { id: 'pilares', nome: 'PILARES DA CRIAÇÃO', regiao: 1, cor: '#ffa05a', sub: 'ventos de poeira e fagulhas', nativo: 'golem',
    ambientes: [['riscos', { n: 26, cor: '255, 170, 90', comp: 30, vx: -70, alpha: 0.16 }], ['particulas', { n: 36, cor: '255, 150, 60', vx: -22, vy: -3, brilho: 2 }], ['neblina', { cor: '255, 140, 60', alpha: 0.08, camada: 'frente', n: 4 }]] },
  { id: 'caranguejo', nome: 'NEBULOSA DO CARANGUEJO', regiao: 2, cor: '#ff8a3a', sub: 'brasas e pulsos de fogo', nativo: 'caranguejo',
    ambientes: [['ondas', { cor: '255, 120, 60', periodo: 3.4, px: 0.25, py: 0.35 }], ['particulas', { n: 60, cor: '255, 130, 50', vx: 20, vy: -10, brilho: 2, tam: 1 }]] },
  { id: 'cavalo', nome: 'CABEÇA DE CAVALO', regiao: 3, cor: '#ff3b4a', sub: 'a escuridão tem olhos', nativo: 'pesadelo',
    ambientes: [['olhos', { n: 14, cor: '255, 50, 70' }], ['neblina', { cor: '30, 0, 16', alpha: 0.22, camada: 'frente', n: 5, raio: 110 }]] },
  { id: 'helice', nome: 'NEBULOSA DA HÉLICE', regiao: 4, cor: '#58e8f0', sub: 'auroras e ondas azuis', nativo: 'olhoHelice',
    ambientes: [['aurora', { y: 0.12 }], ['ondas', { cor: '90, 230, 240', periodo: 2.6, px: 0.5, py: 0.5, alpha: 0.3 }], ['particulas', { n: 30, cor: '140, 240, 255', vy: -5, brilho: 2 }]] },
  { id: 'andromeda', nome: 'GALÁXIA DE ANDRÔMEDA', regiao: 5, cor: '#8aa0ff', sub: 'cometas e poeira de estrelas', nativo: 'ninho',
    ambientes: [['cometas', { cor: '170, 190, 255', periodo: 9, lanes: 3 }], ['particulas', { n: 56, cor: '180, 200, 255', vy: 0, vx: -4, par: 0.6 }], ['neblina', { cor: '90, 100, 220', alpha: 0.09, n: 4 }]] },
  { id: 'sombrero', nome: 'CEMITÉRIO DO SOMBRERO', regiao: 6, cor: '#ffc88a', sub: 'naves que nunca voltaram', nativo: 'carniceiro',
    ambientes: [['destrocos', { n: 7, cor: '255, 200, 130' }], ['particulas', { n: 28, cor: '255, 210, 150', vx: -6, vy: 0 }]] },
  { id: 'quasar', nome: 'TEMPESTADE DO QUASAR', regiao: 7, cor: '#9cd8ff', sub: 'relâmpagos cósmicos', nativo: 'fulgor',
    ambientes: [['relampagos', { cor: '170, 220, 255', periodo: 5.5 }], ['riscos', { n: 34, cor: '160, 220, 255', comp: 14, vx: -60, vy: 150, par: 0.7, alpha: 0.22 }], ['feixes', { cor: '120, 190, 255', n: 2, vel: 0.35, px: 0.8, py: 0.2 }]] },
  { id: 'abismo', nome: 'HORIZONTE DE EVENTOS', regiao: 8, cor: '#ff9a3a', sub: 'a luz se curva', nativo: 'devorador',
    ambientes: [['lente', { cor: '255, 160, 70' }], ['riscos', { n: 24, cor: '255, 190, 120', comp: 22, vx: 90, vy: -20, alpha: 0.14 }]] },
  { id: 'tesseract', nome: 'O TESSERACT', regiao: 9, cor: '#78dcff', sub: 'cubos de uma quarta dimensão', nativo: 'hipercubo',
    ambientes: [['grade', { n: 5, cor: '120, 220, 255' }], ['particulas', { n: 34, cor: '150, 230, 255', tam: 2, vx: 6, vy: 0, par: 0.5 }]] },
  { id: 'pulsar', nome: 'PULSAR', regiao: 10, cor: '#8ad8ff', sub: 'faróis do fim do universo', nativo: 'farol',
    ambientes: [['feixes', { cor: '130, 210, 255', n: 2, vel: 0.9, px: 0.5, py: 0.45 }], ['ondas', { cor: '120, 200, 255', periodo: 1.6, px: 0.5, py: 0.45, alpha: 0.35 }]] },
  { id: 'ponte', nome: 'PONTE DE EINSTEIN-ROSEN', regiao: 11, cor: '#a58bff', sub: 'portais para lugar nenhum', nativo: 'tecelao',
    ambientes: [['portais', { n: 3, cor: '170, 130, 255' }], ['neblina', { cor: '120, 80, 230', alpha: 0.1, n: 4 }], ['riscos', { n: 20, cor: '190, 160, 255', comp: 18, vx: 0, vy: -90, alpha: 0.15 }]] },
  { id: 'teia', nome: 'TEIA CÓSMICA', regiao: 12, cor: '#c0a0ff', sub: 'fios de luz entre galáxias', nativo: 'aracnideo',
    ambientes: [['filamentos', { cor: '190, 160, 255' }], ['cometas', { cor: '255, 220, 150', periodo: 12, lanes: 2 }], ['particulas', { n: 30, cor: '210, 190, 255', brilho: 2, vy: -3 }]] },
];

// fase n (1, 2, 3...): depois da última, repete as regiões mais estranhas, cada volta mais forte
export function faseDe(n) {
  if (n <= FASES.length) return { ...FASES[n - 1], numero: n, volta: 0 };
  const k = n - FASES.length - 1, base = 5, volta = Math.floor(k / (FASES.length - base)) + 1;
  return { ...FASES[base + (k % (FASES.length - base))], numero: n, volta };
}
