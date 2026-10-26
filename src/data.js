// Edite este arquivo com os seus dados reais: o mundo inteiro é gerado a partir dele.
// Cada "zona" vira uma estação no cenário; ao chegar perto, o painel abre.

export const perfil = {
  nome: 'Victor Gabriel',
  titulo: 'Desenvolvedor Front-end',
};

export const zonas = [
  {
    id: 'inicio',
    icone: 'casa',
    cor: 0x7c5cff,
    titulo: 'Olá, eu sou o Victor!',
    linhas: [
      'Desenvolvedor front-end que gosta de transformar problemas do dia a dia em ferramentas úteis.',
      'Ande com ← → (ou A / D), pule com ESPAÇO e explore o mundo.',
    ],
  },
  {
    id: 'experiencia',
    icone: 'predio',
    cor: 0x2dd4bf,
    titulo: 'Experiência',
    linhas: [
      'Portal interno da faculdade — React, Firebase, Cloud Functions, Gantt de demandas, calendário, agente de telemetria.',
      'Troque este texto pelos seus cargos, empresas e períodos.',
    ],
  },
  {
    id: 'projetos',
    icone: 'foguete',
    cor: 0xff7a59,
    titulo: 'Projetos',
    linhas: [
      'Este currículo jogável (PixiJS + Vite).',
      'Portal interno: gestão de TI, regras do Firestore, publicação automatizada.',
    ],
  },
  {
    id: 'skills',
    icone: 'estrela',
    cor: 0xffd23f,
    titulo: 'Habilidades',
    linhas: [
      'JavaScript · React · Vite · Tailwind · PixiJS',
      'Firebase (Firestore, Functions, Hosting) · Node.js · Git',
    ],
  },
  {
    id: 'contato',
    icone: 'carta',
    cor: 0xff5d8f,
    titulo: 'Vamos conversar?',
    linhas: [
      'E-mail: mds.victorgabriel@gmail.com',
      'GitHub: github.com/seu-usuario   ·   LinkedIn: linkedin.com/in/seu-usuario',
    ],
  },
];
