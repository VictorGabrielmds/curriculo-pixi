// Edite este arquivo com os seus dados reais: o mundo inteiro é gerado a partir dele.
// Cada "zona" vira uma estação no cenário; ao chegar perto, o painel abre.
// (Os textos do currículo vêm do PDF "Curriculo_Victor_Gabriel_26".)

export const perfil = {
  nome: 'Victor Gabriel M. Silva',
  titulo: 'Desenvolvedor Web Front-end',
};

export const zonas = [
  {
    id: 'inicio',
    icone: 'casa',
    cor: 0x7c5cff,
    titulo: 'Olá, eu sou o Victor!',
    linhas: [
      'Desenvolvedor Web Front-end com mais de 4 anos criando e mantendo sistemas, sites e portais.',
      'Curioso e proativo, gosto de resolver problemas de verdade e uso IA (Gemini, Claude Code, Codex) para acelerar o código.',
      'Ande com as setas (ou WASD) pelo planeta, pule com ESPAÇO e visite cada estação.',
    ],
  },
  {
    id: 'experiencia',
    icone: 'predio',
    cor: 0x2dd4bf,
    titulo: 'Experiência',
    linhas: [
      'SVT Faculdade · Analista de Sistemas · desde 2024: SAMA (ajuda em tempo real), certificados automáticos e nota 5 no MEC.',
      'Freelancer · desde 2024: PWA para doutorado com mapa histórico, modo offline e acessibilidade (cegos e Libras).',
      'Kanagawa Inc · 2023: design system no Figma e apps em React Native.',
      'Cartão Saúde e Clínica IMMA · 2021–2023: sistema de parceiros (React + Firebase) e sites responsivos.',
    ],
  },
  {
    id: 'projetos',
    icone: 'foguete',
    cor: 0xff7a59,
    titulo: 'Projetos',
    linhas: [
      'SAMA: pedidos de ajuda entre professores e monitores em tempo real (React, Firebase, TypeScript).',
      'Declarações de autenticidade: emissão automática de certificados (React, Firebase, Node.js).',
      'PWA da corte portuguesa: mapa histórico com offline, websocket e acessibilidade.',
      'Portal interno da faculdade e este currículo jogável (Three.js + Vite).',
    ],
  },
  {
    id: 'skills',
    icone: 'estrela',
    cor: 0xffd23f,
    titulo: 'Habilidades',
    linhas: [
      'JavaScript · TypeScript · React · React Native · Node.js · PHP',
      'HTML · CSS · Bootstrap · Webpack · Vite · APIs REST · JSON',
      'Firebase · Git/GitHub · WordPress · n8n · Figma (UI/UX)',
      'Formação técnica no IFMA (2016–2019) · finalista da FEBRACE (2018) · palestrante no EPIDE (2019).',
    ],
  },
  {
    id: 'contato',
    icone: 'carta',
    cor: 0xff5d8f,
    titulo: 'Vamos conversar?',
    linhas: [
      'E-mail: mds.victorgabriel@gmail.com',
      'GitHub e LinkedIn: VictorGabrielmds',
      'Portfólio: victorgabrielmds.github.io/victor-portfolio-dfe',
    ],
  },
  {
    id: 'cassino',
    icone: 'cassino',
    cor: 0xffc83d,
    jogo: 'cassino', // abre o minijogo (tecla E ou botão do painel)
    escala: 0.58, // tamanho da estação no mundo (as outras usam 0,8)
    titulo: 'Cassino da Sorte',
    linhas: [
      'Um caça-níquel de brincadeira: só fichas virtuais, sem dinheiro de verdade.',
      'Ganhe skins para o planeta, as árvores e o céu e deixe o mundo do seu jeito.',
      'Dica: pegue as fichas espalhadas pelo planeta para ganhar mais.',
    ],
  },
  {
    id: 'nave',
    icone: 'nave', // o ícone da estação é a própria nave do jogo
    cor: 0x8a5cff,
    jogo: 'arcade', // abre o jogo de nave (tecla E ou botão do painel)
    escala: 0.6,
    titulo: 'Nave Arcade',
    linhas: [
      'A nave atira sozinha e você a pilota pelo espaço enquanto monstrinhos chegam pelos lados.',
      'Cada monstro solta um cristal de XP. Tem rochas com itens, buracos negros com um alienígena e chefões que dão moedas para melhorar a nave.',
    ],
  },
];
