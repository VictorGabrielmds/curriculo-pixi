// Garagem mecatrônica da nave. A nave é montada como um PC ou um carro: um chassi com encaixes (slots) e peças para cada tipo
// de encaixe. Cada peça pesa, consome energia (W) e esquenta (°C): a soma tem de caber no reator e no sistema de arrefecimento,
// senão a nave sofre subtensão ou superaquecimento. Dois ajustes finos (clock da eletrônica e tensão do reator) levam tudo ao limite.
// Este catálogo é usado pela oficina, pelo sprite do arcade e pela nave 3D do planeta.
// Preços em moedas espaciais (◆): o equipamento comum custa de 12 a 55; o do topo custa de 90 a 120 e ainda exige derrotar chefões ("exige").

export const TIPOS = {
  arma: { nome: 'ARMA', cor: '#ff7a59', icone: '⌁', plural: 'ARMAS' },
  motor: { nome: 'MOTOR', cor: '#38c8ff', icone: '»', plural: 'MOTORES' },
  reator: { nome: 'REATOR', cor: '#7dff9a', icone: '◉', plural: 'REATOR' },
  placa: { nome: 'PLACA', cor: '#ffd23f', icone: '⌘', plural: 'PLACAS' },
  modulo: { nome: 'MÓDULO', cor: '#c58bff', icone: '⬡', plural: 'MÓDULOS' },
};

// encaixes em pixels do sprite da nave (24x24, proa para cima, centro em 12,12)
export const CHASSIS = [
  {
    id: 'explorador', nome: 'Explorador M-1', custo: 0, massa: 40, dissipacao: 22, bonus: {},
    resumo: 'Equilibrado e fácil de reparar.',
    encaixes: [
      { tipo: 'arma', x: 12, y: 8 }, { tipo: 'motor', x: 12, y: 17 }, { tipo: 'reator', x: 12, y: 12 },
      { tipo: 'placa', x: 8, y: 11 }, { tipo: 'modulo', x: 17, y: 14 },
    ],
  },
  {
    id: 'interceptor', nome: 'Interceptor Flecha', custo: 20, massa: 34, dissipacao: 20, bonus: { velocidade: 0.14, dano: 0.08, vida: -1 },
    resumo: 'Leve, afilado e agressivo: duas armas e dois motores, mas sem espaço para módulos.',
    encaixes: [
      { tipo: 'arma', x: 8, y: 8 }, { tipo: 'arma', x: 16, y: 8 }, { tipo: 'motor', x: 8, y: 17 }, { tipo: 'motor', x: 16, y: 17 },
      { tipo: 'reator', x: 12, y: 12 }, { tipo: 'placa', x: 12, y: 8 },
    ],
  },
  {
    id: 'blindado', nome: 'Couraçado Tatu', custo: 28, massa: 62, dissipacao: 26, bonus: { vida: 3, armadura: 2, velocidade: -0.1 },
    resumo: 'Placas grossas e estrutura pesada: duas armas, dois módulos e muita resistência.',
    encaixes: [
      { tipo: 'arma', x: 7, y: 8 }, { tipo: 'arma', x: 17, y: 8 }, { tipo: 'motor', x: 12, y: 18 }, { tipo: 'reator', x: 12, y: 12 },
      { tipo: 'placa', x: 12, y: 8 }, { tipo: 'modulo', x: 6, y: 15 }, { tipo: 'modulo', x: 18, y: 15 },
    ],
  },
  {
    id: 'modular', nome: 'Chassi Colmeia', custo: 40, massa: 48, dissipacao: 30, bonus: { vida: 1, recarga: 0.12, xp: 0.12 },
    resumo: 'Baias e conectores experimentais: três placas, dois módulos e dois motores.',
    encaixes: [
      { tipo: 'arma', x: 12, y: 8 }, { tipo: 'motor', x: 8, y: 17 }, { tipo: 'motor', x: 16, y: 17 }, { tipo: 'reator', x: 12, y: 12 },
      { tipo: 'placa', x: 8, y: 9 }, { tipo: 'placa', x: 16, y: 9 }, { tipo: 'placa', x: 12, y: 16 },
      { tipo: 'modulo', x: 5, y: 12 }, { tipo: 'modulo', x: 19, y: 12 },
    ],
  },
  {
    id: 'aurora', nome: 'Fragata Aurora', custo: 65, massa: 52, dissipacao: 36, bonus: { recarga: 0.1, escudo: 1, ima: 0.15 },
    resumo: 'Casco longo de cristal energético, com uma barreira embutida: duas armas, duas placas, dois motores e dois módulos.',
    encaixes: [
      { tipo: 'arma', x: 7, y: 8 }, { tipo: 'arma', x: 17, y: 8 }, { tipo: 'motor', x: 9, y: 19 }, { tipo: 'motor', x: 15, y: 19 },
      { tipo: 'reator', x: 12, y: 12 }, { tipo: 'placa', x: 12, y: 6 }, { tipo: 'placa', x: 12, y: 16 },
      { tipo: 'modulo', x: 5, y: 13 }, { tipo: 'modulo', x: 19, y: 13 },
    ],
  },
  {
    id: 'titan', nome: 'Titã Dreadnought', custo: 110, exige: 8, massa: 96, dissipacao: 48, bonus: { vida: 4, armadura: 3, velocidade: -0.22, dano: 0.1 },
    resumo: 'Fortaleza voadora: três armas, três módulos e dois motores, com uma blindagem absurda e muito peso.',
    encaixes: [
      { tipo: 'arma', x: 6, y: 8 }, { tipo: 'arma', x: 12, y: 5 }, { tipo: 'arma', x: 18, y: 8 }, { tipo: 'motor', x: 8, y: 19 }, { tipo: 'motor', x: 16, y: 19 },
      { tipo: 'reator', x: 12, y: 12 }, { tipo: 'placa', x: 12, y: 9 },
      { tipo: 'modulo', x: 5, y: 14 }, { tipo: 'modulo', x: 19, y: 14 }, { tipo: 'modulo', x: 12, y: 16 },
    ],
  },
];

// massa (kg), consumo (W), calor (°C gerados), potencia (W produzidos), dissipacao (°C removidos), proj (projéteis por disparo)
export const PECAS = [
  // ---- armas ----
  { id: 'canhao', tipo: 'arma', nome: 'Canhão de Pulso', custo: 0, massa: 6, consumo: 4, calor: 3, proj: 1, resumo: 'Bobina simples e eletroímã de disparo: confiável.' },
  { id: 'duplo', tipo: 'arma', nome: 'Canhão Geminado', custo: 18, massa: 10, consumo: 7, calor: 5, proj: 2, bonus: { dano: -0.06 }, resumo: 'Dois eletroímãs sincronizados por um relé.' },
  { id: 'bobina', tipo: 'arma', nome: 'Bobina Tesla', custo: 30, massa: 9, consumo: 10, calor: 4, proj: 1, bonus: { critico: 0.1, perfura: 1 }, resumo: 'Arco elétrico que salta entre eletrodos e atravessa alvos.' },
  { id: 'dispersor', tipo: 'arma', nome: 'Dispersor Tridente', custo: 32, massa: 12, consumo: 9, calor: 6, proj: 3, bonus: { cadencia: 0.08, dano: -0.18 }, resumo: 'Três bocas cobrem uma área maior.' },
  { id: 'rail', tipo: 'arma', nome: 'Railgun Linear', custo: 36, massa: 14, consumo: 12, calor: 8, proj: 1, bonus: { dano: 0.35, perfura: 2, cadencia: -0.18 }, resumo: 'Dois trilhos de cobre e um banco de capacitores aceleram o projétil.' },
  { id: 'gatling', tipo: 'arma', nome: 'Metralhadora Rotativa', custo: 44, massa: 15, consumo: 9, calor: 10, proj: 1, bonus: { cadencia: 0.4, dano: -0.14 }, resumo: 'Três canos giratórios: chove tiro, mas esquenta muito.' },
  { id: 'lanca', tipo: 'arma', nome: 'Lança de Plasma', custo: 52, massa: 13, consumo: 11, calor: 7, proj: 1, bonus: { dano: 0.22, perfura: 1, critico: 0.05, cadencia: -0.08 }, resumo: 'Um filete de plasma superaquecido que fura e queima.' },
  { id: 'singular', tipo: 'arma', nome: 'Canhão de Singularidade', custo: 120, exige: 12, massa: 22, consumo: 17, calor: 12, proj: 1, bonus: { dano: 0.5, perfura: 3, critico: 0.1, cadencia: -0.2 }, resumo: 'Dobra o espaço na boca do cano: o projétil leva um mini buraco negro.' },
  // ---- motores ----
  { id: 'quimico', tipo: 'motor', nome: 'Foguete Químico', custo: 0, massa: 8, consumo: 0, calor: 5, resumo: 'Robusto, quente e sem eletrônica: funciona até sem energia.' },
  { id: 'ionico', tipo: 'motor', nome: 'Matriz Iônica', custo: 14, massa: 6, consumo: 4, calor: 1, bonus: { velocidade: 0.12 }, resumo: 'Jatos frios de íons, aceleração suave e precisa.' },
  { id: 'plasma', tipo: 'motor', nome: 'Turbina de Plasma', custo: 28, massa: 11, consumo: 9, calor: 6, bonus: { velocidade: 0.22, recarga: 0.08 }, resumo: 'Empuxo violeta de altíssima energia.' },
  { id: 'vetorial', tipo: 'motor', nome: 'Bocal Vetorial', custo: 38, massa: 9, consumo: 6, calor: 3, bonus: { velocidade: 0.16, armadura: 1, giro: 0.35 }, resumo: 'Microatuadores giram o bocal e corrigem a trajetória.' },
  { id: 'magneto', tipo: 'motor', nome: 'Impulsor Magnético', custo: 40, massa: 8, consumo: 6, calor: 2, bonus: { velocidade: 0.18, giro: 0.25 }, resumo: 'Bobinas empurram a nave contra o campo do espaço: frio e ágil.' },
  { id: 'antimateria', tipo: 'motor', nome: 'Propulsor de Antimatéria', custo: 100, exige: 8, massa: 12, consumo: 12, calor: 7, bonus: { velocidade: 0.34, recarga: 0.1, giro: 0.3 }, resumo: 'Aniquila partículas num bocal magnético: o empuxo mais forte que existe.' },
  // ---- reatores ----
  { id: 'capacitor', tipo: 'reator', nome: 'Banco de Capacitores', custo: 0, massa: 6, potencia: 14, calor: 4, resumo: 'Células simples de descarga rápida.' },
  { id: 'fusao', tipo: 'reator', nome: 'Microfusão', custo: 20, massa: 10, potencia: 26, calor: 9, bonus: { recarga: 0.15 }, resumo: 'Plasma confinado num anel magnético.' },
  { id: 'solar', tipo: 'reator', nome: 'Reator Fotônico', custo: 26, massa: 7, potencia: 20, calor: 2, bonus: { recarga: 0.08, xp: 0.18, ima: 0.2 }, resumo: 'Converte luz e cristais em energia, quase sem calor.' },
  { id: 'quantico', tipo: 'reator', nome: 'Núcleo Quântico', custo: 36, massa: 12, potencia: 34, calor: 12, bonus: { recarga: 0.25, escudo: 1 }, resumo: 'Energia instável dobrada no espaço.' },
  { id: 'tokamak', tipo: 'reator', nome: 'Anel Tokamak', custo: 50, massa: 13, potencia: 32, calor: 7, bonus: { recarga: 0.12 }, resumo: 'Fusão estável em anel: quase a força do quântico, bem mais fria.' },
  { id: 'estelar', tipo: 'reator', nome: 'Núcleo de Anã Branca', custo: 115, exige: 12, massa: 18, potencia: 48, calor: 15, bonus: { recarga: 0.3, dano: 0.08, escudo: 1 }, resumo: 'Um pedaço de estrela morta preso num campo: energia de sobra.' },
  // ---- placas eletrônicas ----
  { id: 'analogica', tipo: 'placa', nome: 'Computador Analógico', custo: 0, massa: 2, consumo: 2, calor: 1, resumo: 'Poucos chips, nenhuma surpresa.' },
  { id: 'mira', tipo: 'placa', nome: 'Coprocessador de Mira', custo: 16, massa: 3, consumo: 4, calor: 2, bonus: { dano: 0.08, critico: 0.08 }, resumo: 'Prevê o movimento dos alvos e corrige os disparos.' },
  { id: 'coletor', tipo: 'placa', nome: 'LIDAR Coletor', custo: 16, massa: 3, consumo: 4, calor: 1, bonus: { xp: 0.15, ima: 0.45 }, resumo: 'Varre cristais e rotas de aproximação.' },
  { id: 'giroscopio', tipo: 'placa', nome: 'Giroscópio MEMS', custo: 20, massa: 3, consumo: 5, calor: 1, bonus: { giro: 0.5, velocidade: 0.04 }, resumo: 'Sensor de rotação: a nave vira muito mais rápido.' },
  { id: 'overclock', tipo: 'placa', nome: 'Placa Overclock', custo: 32, massa: 4, consumo: 8, calor: 5, bonus: { dano: 0.16, recarga: 0.18, vida: -1 }, resumo: 'Clock brutal com refrigeração improvisada.' },
  { id: 'tatica', tipo: 'placa', nome: 'Computador Tático', custo: 44, massa: 3, consumo: 7, calor: 3, bonus: { dano: 0.1, cadencia: 0.1, critico: 0.05 }, resumo: 'Distribui a mira e o ritmo de tiro entre todas as armas.' },
  { id: 'quantica', tipo: 'placa', nome: 'Processador Quântico', custo: 95, exige: 8, massa: 4, consumo: 11, calor: 4, bonus: { dano: 0.18, critico: 0.14, recarga: 0.15, xp: 0.12 }, resumo: 'Calcula todos os futuros possíveis e escolhe o melhor tiro.' },
  // ---- módulos ----
  { id: 'dissipador', tipo: 'modulo', nome: 'Dissipador de Calor', custo: 12, massa: 4, consumo: 1, calor: 0, dissipacao: 10, resumo: 'Aletas de cobre e uma ventoinha minúscula.' },
  { id: 'ima', tipo: 'modulo', nome: 'Bobina de Atração', custo: 14, massa: 3, consumo: 3, calor: 1, bonus: { ima: 0.4 }, resumo: 'Eletroímã que puxa cristais de longe.' },
  { id: 'bateria', tipo: 'modulo', nome: 'Banco de Baterias', custo: 18, massa: 7, consumo: 0, calor: 1, potencia: 10, resumo: 'Células extras de lítio para o reator respirar.' },
  { id: 'blindagem', tipo: 'modulo', nome: 'Placa Balística', custo: 24, massa: 10, consumo: 0, calor: 1, bonus: { armadura: 2, vida: 1 }, resumo: 'Cerâmica e liga de titânio: pesada e resistente.' },
  { id: 'barreira', tipo: 'modulo', nome: 'Gerador de Barreira', custo: 30, massa: 6, consumo: 7, calor: 3, bonus: { escudo: 1 }, resumo: 'Projeta uma barreira que absorve um golpe.' },
  { id: 'criogenico', tipo: 'modulo', nome: 'Criogênico Líquido', custo: 42, massa: 9, consumo: 4, calor: 0, dissipacao: 24, resumo: 'Nitrogênio líquido em circuito fechado: esfria o dobro de um dissipador.' },
  { id: 'supercap', tipo: 'modulo', nome: 'Supercapacitor', custo: 48, massa: 9, consumo: 0, calor: 2, potencia: 24, resumo: 'Armazena e despeja energia em rajadas: bem mais que uma bateria.' },
  { id: 'autorreparo', tipo: 'modulo', nome: 'Casco Autorreparável', custo: 50, massa: 8, consumo: 5, calor: 1, bonus: { vida: 2, armadura: 1 }, resumo: 'Enxame de nanobots que remenda o casco durante o voo.' },
  { id: 'fase', tipo: 'modulo', nome: 'Barreira de Fase', custo: 90, exige: 6, massa: 8, consumo: 11, calor: 5, bonus: { escudo: 2, armadura: 1 }, resumo: 'Tira a nave do tempo por um instante: absorve dois golpes.' },
];

// pinturas: trocam a cor do casco e das aletas (a primeira usa as cores do tema da rota)
export const PINTURAS = [
  { nome: 'ORIGINAL', casco: null, aleta: null, mostra: ['#4aa8ff', '#ff7a59'] },
  { nome: 'CORRIDA', casco: '#d9363e', aleta: '#ffd23f', mostra: ['#d9363e', '#ffd23f'] },
  { nome: 'MILITAR', casco: '#4f7a4a', aleta: '#c9cdd8', mostra: ['#4f7a4a', '#c9cdd8'] },
  { nome: 'NEON', casco: '#7b4dff', aleta: '#38e8ff', mostra: ['#7b4dff', '#38e8ff'] },
  { nome: 'FOSCO', casco: '#2b2f45', aleta: '#ff3bd4', mostra: ['#2b2f45', '#ff3bd4'] },
  { nome: 'OURO', casco: '#d9a93a', aleta: '#8b93a8', mostra: ['#d9a93a', '#8b93a8'] },
];

// ajustes finos: cada um tem quatro posições, como um seletor de uma placa
export const AJUSTES = {
  clock: {
    nome: 'CLOCK DA ELETRÔNICA', curto: 'CLOCK', dica: 'Mais clock = mais dano e cadência, mais consumo e calor.',
    passos: [
      { nome: 'ECO', consumo: 0.85, calor: 0.8, desempenho: 0.94 }, { nome: 'NORMAL', consumo: 1, calor: 1, desempenho: 1 },
      { nome: 'TURBO', consumo: 1.15, calor: 1.3, desempenho: 1.08 }, { nome: 'OVERCLOCK', consumo: 1.32, calor: 1.7, desempenho: 1.16 },
    ],
  },
  tensao: {
    nome: 'TENSÃO DO REATOR', curto: 'TENSÃO', dica: 'Mais tensão = mais potência, mais calor.',
    passos: [
      { nome: 'ECO', producao: 0.85, calor: 0.8 }, { nome: 'NORMAL', producao: 1, calor: 1 },
      { nome: 'ALTA', producao: 1.18, calor: 1.3 }, { nome: 'CRÍTICA', producao: 1.38, calor: 1.75 },
    ],
  },
};

const PECA = new Map(PECAS.map((p) => [p.id, p]));
export const pecaPorId = (id) => PECA.get(id) || null;
export const chassiPorId = (id) => CHASSIS.find((c) => c.id === id) || null;
export const pecasDoTipo = (tipo) => PECAS.filter((p) => p.tipo === tipo);
const OBRIGATORIOS = { arma: 'canhao', motor: 'quimico', reator: 'capacitor' }; // sem isso a nave não anda, não atira ou não liga
const INICIAIS = { ...OBRIGATORIOS, placa: 'analogica' };

export function projetoPadrao() {
  const chassi = CHASSIS[0];
  return { chassi: chassi.id, pecas: chassi.encaixes.map((e) => INICIAIS[e.tipo] || null), clock: 1, tensao: 1, pintura: 0 };
}

// aceita o formato atual e o antigo (um módulo por sistema). Ao trocar de chassi, as peças vão para encaixes livres do mesmo tipo;
// o que não couber volta para a bancada, e arma, motor e reator nunca ficam vazios.
export function normalizarProjeto(v) {
  const chassi = chassiPorId(v?.chassi) || CHASSIS[0];
  let origem;
  if (Array.isArray(v?.pecas)) origem = v.pecas.map(pecaPorId);
  else { // formato antigo { chassi, propulsor, arma, reator, eletronica }: uma peça por sistema, no primeiro encaixe de cada tipo
    const antigo = { arma: v?.arma, motor: v?.propulsor, reator: v?.reator, placa: v?.eletronica }, usados = {};
    origem = chassi.encaixes.map((e) => { if (usados[e.tipo] || !antigo[e.tipo]) return null; usados[e.tipo] = true; return pecaPorId(antigo[e.tipo]); });
  }
  const pecas = chassi.encaixes.map(() => null), sobra = [];
  origem.forEach((p, i) => { if (!p) return; if (chassi.encaixes[i]?.tipo === p.tipo) pecas[i] = p.id; else sobra.push(p); });
  for (const p of sobra) { const j = chassi.encaixes.findIndex((e, i) => e.tipo === p.tipo && !pecas[i]); if (j >= 0) pecas[j] = p.id; }
  for (const tipo of Object.keys(OBRIGATORIOS)) {
    const indices = chassi.encaixes.map((e, i) => (e.tipo === tipo ? i : -1)).filter((i) => i >= 0);
    if (indices.length && !indices.some((i) => pecas[i])) pecas[indices[0]] = OBRIGATORIOS[tipo];
  }
  const passo = (x) => Math.max(0, Math.min(3, Number.isFinite(x) ? Math.round(x) : 1));
  const pintura = Number.isInteger(v?.pintura) && v.pintura >= 0 && v.pintura < PINTURAS.length ? v.pintura : 0;
  return { chassi: chassi.id, pecas, clock: passo(v?.clock ?? 1), tensao: passo(v?.tensao ?? 1), pintura };
}

export function desbloqueiosIniciais() {
  return [...CHASSIS.filter((c) => c.custo === 0).map((c) => c.id), ...PECAS.filter((p) => p.custo === 0).map((p) => p.id)];
}
export function normalizarDesbloqueios(lista = []) {
  const validos = new Set([...CHASSIS.map((c) => c.id), ...PECAS.map((p) => p.id)]);
  return [...new Set([...desbloqueiosIniciais(), ...(Array.isArray(lista) ? lista : [])])].filter((id) => validos.has(id));
}

// peças instaladas, na ordem dos encaixes
export function pecasInstaladas(projeto) {
  const p = normalizarProjeto(projeto);
  return p.pecas.map((id) => pecaPorId(id)).filter(Boolean);
}
export function encaixesDoProjeto(projeto) {
  const p = normalizarProjeto(projeto), chassi = chassiPorId(p.chassi);
  return chassi.encaixes.map((e, i) => ({ ...e, i, peca: pecaPorId(p.pecas[i]) }));
}

const soma = (lista, f) => lista.reduce((s, p) => s + (f(p) || 0), 0);
const REF = (() => { const p = projetoPadrao(), c = CHASSIS[0]; return c.massa + soma(p.pecas.map(pecaPorId).filter(Boolean), (x) => x.massa); })();

// orçamento da nave: energia, calor e massa (como a fonte, o cooler e o peso de um PC ou de um carro)
export function diagnosticarProjeto(projeto) {
  const p = normalizarProjeto(projeto), chassi = chassiPorId(p.chassi), pecas = p.pecas.map(pecaPorId).filter(Boolean);
  const clock = AJUSTES.clock.passos[p.clock], tensao = AJUSTES.tensao.passos[p.tensao];
  const reator = pecas.find((x) => x.tipo === 'reator');
  const massa = chassi.massa + soma(pecas, (x) => x.massa);
  const consumo = soma(pecas, (x) => x.consumo) * clock.consumo;
  const producao = (reator?.potencia || 0) * tensao.producao + soma(pecas.filter((x) => x.tipo !== 'reator'), (x) => x.potencia);
  const calor = soma(pecas.filter((x) => x.tipo !== 'reator'), (x) => x.calor) * clock.calor + (reator?.calor || 0) * tensao.calor;
  const dissipacao = chassi.dissipacao + soma(pecas, (x) => x.dissipacao);
  const fatorEnergia = consumo <= producao ? 1 : Math.max(0.55, producao / consumo);
  const razaoCalor = calor / Math.max(1, dissipacao);
  const fatorCalor = razaoCalor <= 1 ? 1 : Math.max(0.55, 1 - 0.65 * (razaoCalor - 1));
  const fatorMassa = Math.max(0.72, Math.min(1.3, Math.sqrt(REF / massa)));
  const alertas = [];
  if (fatorEnergia < 1) alertas.push({ tipo: 'energia', texto: `SUBTENSÃO: faltam ${Math.ceil(consumo - producao)} W. Cadência e recarga caem ${Math.round((1 - (0.5 + 0.5 * fatorEnergia)) * 100)}%.` });
  if (fatorCalor < 1) alertas.push({ tipo: 'calor', texto: `SUPERAQUECIMENTO: ${Math.round((razaoCalor - 1) * 100)}% acima do limite. Dano e cadência caem ${Math.round((1 - fatorCalor) * 100)}%.` });
  if (!alertas.length && razaoCalor > 0.88) alertas.push({ tipo: 'aviso', texto: 'Calor perto do limite: não dá para ligar mais nada quente.' });
  return {
    massa, massaRef: REF, consumo, producao, calor, dissipacao, razaoCalor, fatorEnergia, fatorCalor, fatorMassa,
    razaoEnergia: producao > 0 ? consumo / producao : 9, alertas, clock, tensao,
    status: fatorEnergia < 1 && fatorCalor < 1 ? 'critico' : fatorEnergia < 1 ? 'subtensao' : fatorCalor < 1 ? 'superaquecimento' : 'estavel',
  };
}

// efeitos finais usados pelo jogo (multiplicadores em torno de 1; vida, armadura etc. são somas)
export function calcularEfeitosNave(projeto) {
  const p = normalizarProjeto(projeto), chassi = chassiPorId(p.chassi), pecas = p.pecas.map(pecaPorId).filter(Boolean), d = diagnosticarProjeto(p);
  const bonus = (chave) => (chassi.bonus[chave] || 0) + soma(pecas, (x) => x.bonus?.[chave]);
  const armas = pecas.filter((x) => x.tipo === 'arma');
  const projeteisTotais = Math.max(1, soma(armas, (x) => x.proj));
  const energia = 0.5 + 0.5 * d.fatorEnergia, perf = d.clock.desempenho;
  return {
    velocidade: Math.max(0.35, (1 + bonus('velocidade')) * d.fatorMassa * (0.6 + 0.4 * d.fatorEnergia)),
    dano: Math.max(0.3, (1 + bonus('dano')) * perf * d.fatorCalor),
    cadencia: Math.max(0.3, (1 + bonus('cadencia')) * perf * d.fatorCalor),
    recarga: Math.max(0.3, (1 + bonus('recarga')) * energia),
    xp: 1 + bonus('xp'), ima: 1 + bonus('ima'), giro: Math.max(0.4, 1 + bonus('giro')),
    vida: bonus('vida'), armadura: bonus('armadura'), projeteis: projeteisTotais - 1, perfura: bonus('perfura'), critico: bonus('critico'), escudo: bonus('escudo'),
    diagnostico: d,
  };
}

const pct = (v) => `${v > 0 ? '+' : ''}${Math.round(v * 100)}%`;
export function descreverPeca(peca) {
  const b = peca.bonus || {}, t = [];
  const add = (chave, nome, f = pct) => { if (b[chave]) t.push(`${f(b[chave])} ${nome}`); };
  if (peca.proj > 1) t.push(`${peca.proj} projéteis`);
  add('dano', 'dano'); add('cadencia', 'cadência'); add('perfura', 'perfuração', (v) => `${v > 0 ? '+' : ''}${v}`); add('critico', 'crítico');
  add('velocidade', 'velocidade'); add('giro', 'giro'); add('recarga', 'recarga'); add('xp', 'XP'); add('ima', 'ímã');
  add('vida', 'vida', (v) => `${v > 0 ? '+' : ''}${v}`); add('armadura', 'armadura', (v) => `${v > 0 ? '+' : ''}${v}`); add('escudo', 'escudo', (v) => `${v > 0 ? '+' : ''}${v}`);
  if (peca.potencia) t.push(`+${peca.potencia} W`);
  if (peca.dissipacao) t.push(`+${peca.dissipacao} °C resfriados`);
  return t.length ? t.join(' · ') : 'Sem modificadores.';
}
export function descreverChassi(chassi) {
  const b = chassi.bonus, t = [];
  const add = (chave, nome, f = pct) => { if (b[chave]) t.push(`${f(b[chave])} ${nome}`); };
  add('velocidade', 'velocidade'); add('dano', 'dano'); add('recarga', 'recarga'); add('xp', 'XP'); add('ima', 'ímã');
  add('vida', 'vida', (v) => `${v > 0 ? '+' : ''}${v}`); add('armadura', 'armadura', (v) => `${v > 0 ? '+' : ''}${v}`); add('escudo', 'escudo', (v) => `${v > 0 ? '+' : ''}${v}`);
  return t.length ? t.join(' · ') : 'Sem modificadores.';
}

// as peças e os chassis do topo da bancada, além de moedas, pedem experiência: chefões derrotados no total (campo "exige")
export const itemPorId = (id) => pecaPorId(id) || chassiPorId(id);
export const chefesFaltando = (item, chefesDerrotados) => Math.max(0, (item?.exige || 0) - (chefesDerrotados | 0));

export function resumoEfeitos(e) { // chips de status da nave montada (só o que difere do padrão)
  const itens = [], p = (nome, v) => { if (Math.abs(v - 1) > 0.005) itens.push({ nome, valor: `${v > 1 ? '+' : ''}${Math.round((v - 1) * 100)}%`, bom: v > 1 }); };
  p('VEL', e.velocidade); p('DANO', e.dano); p('CAD', e.cadencia); p('REC', e.recarga); p('XP', e.xp); p('ÍMÃ', e.ima); p('GIRO', e.giro);
  const n = (nome, v, sinal = '+') => { if (v) itens.push({ nome, valor: `${v > 0 ? sinal : ''}${v}`, bom: v > 0 }); };
  n('VIDA', e.vida); n('ARM', e.armadura); n('TIROS', e.projeteis); n('PERF', e.perfura); n('ESCUDO', e.escudo);
  if (e.critico) itens.push({ nome: 'CRÍT', valor: `+${Math.round(e.critico * 100)}%`, bom: true });
  return itens;
}

export function nomeProjetoNave(projeto) {
  const p = normalizarProjeto(projeto), chassi = chassiPorId(p.chassi);
  const instaladas = p.pecas.map(pecaPorId).filter(Boolean);
  const arma = instaladas.find((x) => x.tipo === 'arma'), motor = instaladas.find((x) => x.tipo === 'motor');
  return `${chassi.nome} · ${arma?.nome || 'sem arma'} · ${motor?.nome || 'sem motor'}`;
}

// primeira peça de cada tipo (usada pela vista lateral antiga da oficina e por efeitos simples)
export function pecasPrincipais(projeto) {
  const p = normalizarProjeto(projeto), r = { chassi: p.chassi };
  p.pecas.forEach((id, i) => { const t = chassiPorId(p.chassi).encaixes[i].tipo; if (id && !r[t]) r[t] = id; });
  return r;
}
