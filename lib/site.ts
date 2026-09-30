// Edite aqui: todo o conteúdo do portfólio vive neste arquivo.
export const site = {
  name: "Otávio Ventura",
  role: "Estudante de Análise e Desenvolvimento de Sistemas",
  intro:
    "Estudo ADS e gosto de entender como o software conversa com o hardware. Construo backends em Python e FastAPI e estou sempre montando, desmontando e aprendendo algo novo.",
  contact: {
    email: "otavioboomb@gmail.com", // TODO
    github: "https://github.com/cVenturaDev", // TODO
    linkedin: "https://www.linkedin.com/in/otavioventuraestavam/", // TODO
  },
};

export const pins = [
  { name: "NOME", value: "Otávio Ventura", desc: "Quem eu sou: estudante, curioso e mão na massa." },
  { name: "CURSO", value: "ADS", desc: "Análise e Desenvolvimento de Sistemas, em andamento." },
  { name: "STACK", value: "Full Stack", desc: "Desenvolvimento de software completo, desde o backend até o frontend." },
  { name: "HARDWARE", value: "PCs e componentes", desc: "Montagem, upgrades e entender o que cada peça faz." },
  { name: "STATUS", value: "Aberto a estágio", desc: "Procurando a primeira oportunidade na área." }, // TODO: ajuste
];

export const skillGroups = [
  { title: "Programação", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { title: "Web e APIs", items: ["FastAPI", "React", "Next.js", "Tailwind CSS"] },
  { title: "Ferramentas", items: ["Git e GitHub", "PowerShell", "VS Code", "Windows"] },
  { title: "Hardware", items: ["Montagem de PCs", "Diagnóstico", "Periféricos", "Redes básicas"] },
];

// TODO: troque pelos seus projetos reais.
export const projects = [
  { title: "Monitor TJSP", desc: "Ferramenta para monitoramento de processos judiciais.", stack: ["Python", "FastAPI"], href: "https://github.com/cVenturaDev/Monitor-TJSP" },
  { title: "Portfólio", desc: "Meu portfólio pessoal construído com Next.js e TypeScript.", stack: ["Next.js", "TypeScript"], href: "https://github.com/cVenturaDev/portfolio" },
  { title: "Projeto em Desenvolvimento", desc: "Trabalhando em um projeto novo.", stack: ["Hardware", "Python"], href: "#" },
];

// TODO: reescreva com a sua voz.
export const about = {
  paragraphs: [
    "Sou estudante de Análise e Desenvolvimento de Sistemas e gosto de entender as coisas por dentro, do código que roda no servidor até a peça que está dentro do computador.",
    "Hoje foco em desenvolver soluções completas, tanto no backend quanto no frontend.",
  ],
  facts: [
    { label: "Formação", value: "ADS na UNICID" },
    { label: "Foco", value: "Full Stack" },
    { label: "Interesses", value: "Software, programação e hardware" },
  ],
};
