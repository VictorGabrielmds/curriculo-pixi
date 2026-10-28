// Edite este arquivo com os seus dados reais: o mundo inteiro é gerado a partir dele.
// Cada "zona" vira uma estação no cenário; ao chegar perto, o painel abre e é montado a partir dos "blocos" (ver src/painel.js):
//   destaque / texto / dica      → parágrafos
//   numeros                      → números grandes ({ v, r })
//   etiquetas / grupo            → fichinhas de tecnologias (o grupo tem um título)
//   cartao                       → item recolhível ({ titulo, local, periodo, atual, texto, tags, links, aberto })
//   links                        → botões de contato ({ rotulo, valor, url, icone, copiar })
//   estatisticas                 → dados guardados no navegador do visitante (fonte: 'cassino' ou 'arcade')
// (Os textos do currículo vêm do PDF "Curriculo_Victor_Gabriel_26".)

export const perfil = {
  nome: 'Victor Gabriel M. Silva',
  titulo: 'Desenvolvedor Web Front-end',
};

export const links = {
  email: 'mds.victorgabriel@gmail.com',
  telefone: '(98) 98752-7469',
  telefoneTel: '+5598987527469',
  github: 'https://github.com/VictorGabrielmds',
  linkedin: 'https://www.linkedin.com/in/VictorGabrielmds',
  portfolio: 'https://victorgabrielmds.github.io/victor-portfolio-dfe/',
  repo: 'https://github.com/VictorGabrielmds/curriculo-pixi',
};

export const zonas = [
  {
    id: 'inicio',
    icone: 'casa',
    cor: 0x7c5cff,
    titulo: 'Olá, eu sou o Victor!',
    blocos: [
      { tipo: 'destaque', texto: 'Desenvolvedor Web Front-end com mais de 4 anos criando e mantendo sistemas, sites e portais.' },
      { tipo: 'texto', texto: 'Curioso e proativo, gosto de transformar problemas reais em ferramentas úteis. Uso IA (Gemini, Claude Code, Codex) para acelerar o código e estruturar a lógica.' },
      { tipo: 'numeros', itens: [{ v: '4+', r: 'anos de experiência' }, { v: '5', r: 'empresas e projetos' }, { v: '2024', r: 'analista na SVT' }] },
      { tipo: 'etiquetas', itens: ['Front-end', 'UI/UX', 'Node.js e PHP', 'Automação (n8n)', 'WordPress'] },
      { tipo: 'dica', texto: 'Ande com as setas (ou WASD), pule com ESPAÇO e visite cada estação.' },
    ],
  },
  {
    id: 'experiencia',
    icone: 'predio',
    cor: 0x2dd4bf,
    titulo: 'Experiência',
    blocos: [
      {
        tipo: 'cartao', aberto: true, atual: true, titulo: 'Analista de Sistemas', local: 'SVT Faculdade', periodo: 'Jun 2024 – hoje',
        texto: 'SAMA, sistema de ajuda em tempo real entre professores e monitores; emissão automática de declarações de autenticidade de certificados; manutenção de sites em PHP e conformidade com o MEC (nota 5 no setor).',
        tags: ['React', 'Vite', 'Firebase', 'TypeScript', 'Node.js'],
      },
      {
        tipo: 'cartao', atual: true, titulo: 'Desenvolvedor Web Freelancer', local: 'Autônomo', periodo: 'Set 2024 – hoje',
        texto: 'PWA interativo para doutorado, com mapa histórico da vinda da corte portuguesa ao Brasil: modo offline, atualizações em tempo real por websocket e acessibilidade para cegos e Libras. Wireframes e design system.',
        tags: ['React', 'Vite', 'TypeScript', 'Firebase', 'Leaflet', 'Figma'],
      },
      {
        tipo: 'cartao', titulo: 'Designer UI/UX e Front-end', local: 'Kanagawa Inc', periodo: 'Jan – Jul 2023',
        texto: 'Criei o design system Kanagawa Nami no Figma, prototipei interfaces mobile e as implementei em React Native, além da trilha de usuário dos produtos.',
        tags: ['Figma', 'React Native', 'Scrum', 'Notion'],
      },
      {
        tipo: 'cartao', titulo: 'Desenvolvedor Front-end', local: 'Clínica IMMA', periodo: 'Abr 2022 – Jun 2023',
        texto: 'Manutenção de sites em PHP, interfaces responsivas prototipadas no Figma e implementadas em HTML e Bootstrap, e assets visuais para a identidade da clínica.',
        tags: ['HTML', 'Bootstrap', 'PHP', 'Figma'],
      },
      {
        tipo: 'cartao', titulo: 'Desenvolvedor Front-end', local: 'Cartão Saúde', periodo: 'Out 2021 – Jun 2023',
        texto: 'Sistema web de gestão de parceiros que substituiu um processo manual e agilizou o acesso à rede credenciada; manutenção e modernização de sites.',
        tags: ['React', 'Firebase', 'Bootstrap', 'Git', 'Figma'],
      },
    ],
  },
  {
    id: 'projetos',
    icone: 'foguete',
    cor: 0xff7a59,
    titulo: 'Projetos',
    blocos: [
      {
        tipo: 'cartao', aberto: true, titulo: 'Este currículo jogável', local: 'pessoal', periodo: '2026',
        texto: 'Um planeta em 3D e pixel art com cassino, jogo de nave com chefões, upgrades e trilha sonora. Você está dentro dele agora.',
        tags: ['Three.js', 'Vite', 'WebAudio'], links: [{ rotulo: 'Ver o código', url: 'repo' }],
      },
      {
        tipo: 'cartao', titulo: 'SAMA', local: 'SVT Faculdade', periodo: '2024',
        texto: 'Pedidos de ajuda entre professores e monitores em tempo real, que agilizaram a comunicação da faculdade.',
        tags: ['React', 'Firebase', 'WebPack', 'TypeScript', 'Git'],
      },
      {
        tipo: 'cartao', titulo: 'Declarações de autenticidade', local: 'SVT Faculdade', periodo: '2024',
        texto: 'Emissão automática de declarações de autenticidade de certificados para os alunos, reduzindo o trabalho manual.',
        tags: ['React.js', 'Firebase', 'TypeScript', 'Node.js'],
      },
      {
        tipo: 'cartao', titulo: 'PWA da corte portuguesa', local: 'doutorado', periodo: '2024 – hoje',
        texto: 'Mapa histórico interativo que funciona offline, com atualizações em tempo real, gestão de usuários e acessibilidade (cegos e Libras).',
        tags: ['Vite', 'Leaflet', 'Firebase', 'TypeScript', 'Figma'],
      },
      {
        tipo: 'cartao', titulo: 'Portal interno da faculdade', local: 'SVT Faculdade', periodo: '2024 – hoje',
        texto: 'Gestão de TI e demandas: Gantt, calendário, regras do Firestore, funções na nuvem e um agente de telemetria dos computadores.',
        tags: ['React', 'Firebase', 'Cloud Functions', 'Node.js'],
      },
      {
        tipo: 'cartao', titulo: 'Kanagawa Nami', local: 'design system', periodo: '2023',
        texto: 'Biblioteca de componentes no Figma que acelerou a prototipação e as entregas da startup.',
        tags: ['Figma', 'React Native'],
      },
      { tipo: 'links', itens: [{ rotulo: 'Portfólio', valor: 'mais projetos e estudos', url: 'portfolio', icone: '↗' }] },
    ],
  },
  {
    id: 'skills',
    icone: 'estrela',
    cor: 0xffd23f,
    titulo: 'Habilidades',
    blocos: [
      { tipo: 'grupo', titulo: 'Front-end', itens: ['JavaScript', 'TypeScript', 'React', 'React Native', 'HTML', 'CSS', 'Bootstrap'] },
      { tipo: 'grupo', titulo: 'Back-end e dados', itens: ['Node.js', 'PHP', 'APIs REST', 'JSON', 'Firebase'] },
      { tipo: 'grupo', titulo: 'Ferramentas', itens: ['Git/GitHub', 'Webpack', 'Vite', 'VS Code', 'WordPress', 'HostGator', 'n8n'] },
      { tipo: 'grupo', titulo: 'Design e IA', itens: ['Figma', 'UI', 'UX', 'Gemini', 'Claude Code', 'Codex'] },
      { tipo: 'grupo', titulo: 'Pessoas', itens: ['Trabalho em equipe', 'Criatividade', 'Proatividade', 'Organização', 'Perseverança', 'Responsabilidade'] },
      {
        tipo: 'cartao', titulo: 'Formação e destaques', local: '', periodo: '2016 – 2019',
        texto: 'Ensino Médio Técnico no IFMA (Campus Monte Castelo), finalista da 16ª FEBRACE (2018) e palestrante no EPIDE (2019).',
        tags: ['IFMA', 'FEBRACE 2018', 'EPIDE 2019'],
      },
    ],
  },
  {
    id: 'contato',
    icone: 'carta',
    cor: 0xff5d8f,
    titulo: 'Vamos conversar?',
    blocos: [
      { tipo: 'texto', texto: 'Estou aberto a boas conversas, projetos e oportunidades. O jeito mais rápido é por e-mail ou telefone.' },
      {
        tipo: 'links', itens: [
          { rotulo: 'E-mail', valor: 'mds.victorgabriel@gmail.com', url: 'mailto', icone: '✉', copiar: 'email' },
          { rotulo: 'Telefone', valor: '(98) 98752-7469', url: 'tel', icone: '☎', copiar: 'telefone' },
          { rotulo: 'GitHub', valor: 'VictorGabrielmds', url: 'github', icone: '↗' },
          { rotulo: 'LinkedIn', valor: 'VictorGabrielmds', url: 'linkedin', icone: '↗' },
          { rotulo: 'Portfólio', valor: 'victorgabrielmds.github.io', url: 'portfolio', icone: '↗' },
        ],
      },
    ],
  },
  {
    id: 'cassino',
    icone: 'cassino',
    cor: 0xffc83d,
    jogo: 'cassino', // abre o minijogo (tecla E ou botão do painel)
    escala: 0.54, // tamanho da estação no mundo (as outras usam 0,6)
    titulo: 'Cassino da Sorte',
    blocos: [
      { tipo: 'texto', texto: 'Um caça-níquel de brincadeira: só fichas virtuais, sem dinheiro de verdade. Ganhe skins para o planeta, as árvores e o céu e deixe o mundo do seu jeito.' },
      { tipo: 'estatisticas', fonte: 'cassino' },
      { tipo: 'dica', texto: 'Dica: pegue as fichas espalhadas pelo planeta para ganhar mais giros.' },
    ],
  },
  {
    id: 'nave',
    icone: 'nave', // o ícone da estação é a própria nave do jogo
    cor: 0x8a5cff,
    jogo: 'arcade', // abre o jogo de nave (tecla E ou botão do painel)
    escala: 0.54,
    titulo: 'Nave Arcade',
    blocos: [
      { tipo: 'texto', texto: 'A nave atira sozinha e você a pilota pelo espaço enquanto monstrinhos chegam de todos os lados. Cada um solta cristais de XP; tem rochas com itens, estrelas de poder, buracos negros com um alienígena e chefões.' },
      { tipo: 'estatisticas', fonte: 'arcade' },
      { tipo: 'dica', texto: 'As moedas espaciais fabricam chassis, armas, propulsores, reatores e placas eletrônicas. A montagem aparece na nave do planeta e dentro do arcade.' },
    ],
  },
];
