// Skins do mundo: cada categoria troca uma parte do cenário. O visual original de cada categoria é a skin "padrao".
// Cores são hexadecimais (0xRRGGBB). Raridade define em qual combinação do cassino a skin pode cair.

export const CATEGORIAS = [
  { id: 'planeta', nome: 'Planeta' },
  { id: 'arvores', nome: 'Árvores' },
  { id: 'ceu', nome: 'Céu' },
];

export const RARIDADES = {
  comum: { nome: 'Comum', cor: '#9fb0c8' },
  rara: { nome: 'Rara', cor: '#4aa8ff' },
  epica: { nome: 'Épica', cor: '#c15cff' },
  lendaria: { nome: 'Lendária', cor: '#ffd23f' },
};

// planeta: mar (raso, médio, fundo), espuma, areia e três tons de grama/solo
const planeta = (marRaso, marMedio, marFundo, espuma, areia, grama0, grama1, grama2) => ({ marRaso, marMedio, marFundo, espuma, areia, grama0, grama1, grama2 });
// árvores: duas variações da copa maior e a cor da copa de cima
const arvores = (copaA, copaB, copa2) => ({ copa: [copaA, copaB], copa2 });
// céu: cor de fundo, das estrelas e das nuvens
const ceu = (fundo, estrelas, nuvens) => ({ fundo, estrelas, nuvens });

export const SKINS = [
  // ---- planeta ----
  { id: 'planeta-padrao', cat: 'planeta', nome: 'Terra', raridade: 'comum', padrao: true,
    cores: planeta(0x56c2ee, 0x2f7fdc, 0x1d56b8, 0xd4f1fc, 0xf3dda3, 0x6fcf6a, 0x4cb760, 0x2f9055) },
  { id: 'planeta-sakura', cat: 'planeta', nome: 'Sakura', raridade: 'comum',
    cores: planeta(0x8fdcf2, 0x4f9ae0, 0x2b5fb8, 0xfff0f6, 0xfbe8dc, 0xf7b2cf, 0xec8ab6, 0xcf6a9e) },
  { id: 'planeta-deserto', cat: 'planeta', nome: 'Deserto', raridade: 'comum',
    cores: planeta(0x6fe0d0, 0x23a3a8, 0x14697f, 0xfff6dc, 0xf6d58f, 0xeec56a, 0xdca94b, 0xc08a36) },
  { id: 'planeta-gelo', cat: 'planeta', nome: 'Gelo', raridade: 'rara',
    cores: planeta(0xb4ecff, 0x66bdf0, 0x3377c4, 0xffffff, 0xeaf6ff, 0xf6fcff, 0xd9eef8, 0xbad9ea) },
  { id: 'planeta-marte', cat: 'planeta', nome: 'Marte', raridade: 'epica',
    cores: planeta(0x8a4a58, 0x5e2a3a, 0x3a1426, 0xe8b9a0, 0xd9a07a, 0xc4623a, 0xa8482b, 0x8a3a24) },
  { id: 'planeta-ouro', cat: 'planeta', nome: 'Ouro', raridade: 'lendaria',
    cores: planeta(0xffe27a, 0xe0a21a, 0xa8680a, 0xfffbe0, 0xfff0b0, 0xffd23a, 0xf0b21a, 0xc88a10) },

  // ---- árvores ----
  { id: 'arvores-padrao', cat: 'arvores', nome: 'Pinheiros', raridade: 'comum', padrao: true,
    cores: arvores(0x2f9e5c, 0x258a4e, 0x34b068) },
  { id: 'arvores-outono', cat: 'arvores', nome: 'Outono', raridade: 'comum',
    cores: arvores(0xe8873a, 0xd96a2b, 0xf2b84b) },
  { id: 'arvores-sakura', cat: 'arvores', nome: 'Cerejeiras', raridade: 'comum',
    cores: arvores(0xf59ac2, 0xe97fb0, 0xffc2dc) },
  { id: 'arvores-cristal', cat: 'arvores', nome: 'Cristal', raridade: 'rara',
    cores: arvores(0x59d6ff, 0x3aa8e8, 0xa8f0ff) },
  { id: 'arvores-neon', cat: 'arvores', nome: 'Neon', raridade: 'epica',
    cores: arvores(0xff3bd4, 0x7a2cff, 0x2bffd0) },
  { id: 'arvores-ouro', cat: 'arvores', nome: 'Douradas', raridade: 'lendaria',
    cores: arvores(0xffd23a, 0xf0b21a, 0xfff0a0) },

  // ---- céu ----
  { id: 'ceu-padrao', cat: 'ceu', nome: 'Noite', raridade: 'comum', padrao: true,
    cores: ceu(0x0b1026, 0xffffff, 0xffffff) },
  { id: 'ceu-crepusculo', cat: 'ceu', nome: 'Crepúsculo', raridade: 'comum',
    cores: ceu(0x2a1236, 0xffd6a8, 0xffc9a8) },
  { id: 'ceu-aurora', cat: 'ceu', nome: 'Aurora', raridade: 'rara',
    cores: ceu(0x06201f, 0xbaffd9, 0xc8ffe8) },
  { id: 'ceu-nebulosa', cat: 'ceu', nome: 'Nebulosa', raridade: 'epica',
    cores: ceu(0x1a0a3a, 0xff9be6, 0xd0b8ff) },
  { id: 'ceu-supernova', cat: 'ceu', nome: 'Supernova', raridade: 'lendaria',
    cores: ceu(0x2a0a0a, 0xffe08a, 0xffb06b) },
];

export const skinPorId = (id) => SKINS.find((s) => s.id === id);
export const skinPadrao = (cat) => SKINS.find((s) => s.cat === cat && s.padrao);
export const hex = (n) => '#' + n.toString(16).padStart(6, '0');
