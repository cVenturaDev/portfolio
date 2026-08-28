// ---------------------------------------------------------------------------
// Ponto único de configuração do site.
// Edite os valores abaixo para atualizar nome, e-mail, redes sociais,
// ferramentas, tecnologias e projetos exibidos no portfólio.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Ventura",
  role: "Aspirante a desenvolvedor · Software, automação e tecnologia",
  email: "otavioboomb@gmail.com", // <- troque pelo seu e-mail real
};

export const SOCIAL_LINKS = {
  github: "https://github.com/cVenturaDev", // <- troque pela sua URL
  linkedin: "https://linkedin.com/in/otavio-estevam-2835473a4", // <- troque pela sua URL
  instagram: "https://instagram.com//_vntura.szn", // <- troque pela sua URL
  youtube: "https://www.youtube.com/@VenturaGameplays69", // <- troque pela sua URL
};

export type Tool = {
  id: string;
  name: string;
  description: string;
};

export const TOOLS: Tool[] = [
  {
    id: "vscode",
    name: "VS Code",
    description: "Editor principal do dia a dia, com extensões ajustadas ao meu fluxo.",
  },
  {
    id: "git",
    name: "Git",
    description: "Controle de versão para organizar o histórico de cada projeto.",
  },
  {
    id: "github",
    name: "GitHub",
    description: "Hospedagem dos repositórios e onde acompanho o que estou construindo.",
  },
  {
    id: "figma",
    name: "Figma",
    description: "Rascunho de telas e ideias antes de virarem código.",
  },
];

export type TechCategory = {
  id: string;
  title: string;
  items: string[];
};

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "linguagens",
    title: "Linguagens",
    items: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["Next.js", "HTML", "CSS"],
  },
  {
    id: "backend-dados",
    title: "Backend & Dados",
    items: ["Node.js", "PostgreSQL"],
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud",
    items: ["Docker", "Linux"],
  },
];

export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  placeholder?: boolean;
};

// Estrutura preparada para receber projetos reais.
// Substitua os itens de exemplo abaixo pelos seus projetos quando estiverem prontos.
export const PROJECTS: Project[] = [
  {
    id: "Calculadora-Simples",
    name: "Calculadora Simples",
    description: "Duas calculadoras feitas em Python, uma simples e outra com interface gráfica.",
    technologies: [],
    githubUrl: "https://github.com/cVenturaDev/Calculadora-Simples-em-Python",
  },
  {
    id: "RPS",
    name: "RPS",
    description: "Rock, Paper, Scissors/Pedra, Papel ou Tesoura.",
    technologies: [],
    githubUrl: "https://github.com/cVenturaDev/Rock-Paper-Scissors",
  },
];

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];
