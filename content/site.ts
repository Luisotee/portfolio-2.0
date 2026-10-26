import type { GraphNode, SectionHeading, Social, Stat } from "./types"

export const site = {
  name: "Luis Otavio",
  firstName: "Luis",
  lastName: "Otavio",
  initials: "LO",
  handle: "luisotee",
  email: "luisotaviomgrcont@gmail.com",
  title: "Luis Otavio, Full-stack Engineer",
  description:
    "I build web products end to end: polished React frontends, solid backends and APIs, and AI features where they earn their place.",
  copyright: "© 2026 Luis Otavio",
}

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#github", label: "GitHub" },
]

export const hero = {
  eyebrow: "Full-stack engineer · Frontend, backend and AI",
  /** Availability and location line, shown under the eyebrow once set. 🙋 Luis decides the wording (TODO.md). */
  status: null as string | null,
  intro: {
    before: "I build AI products end to end: ",
    emphasis: "the web app, the API and the LLM agent behind them",
    after: ", from an AI tutor on the web to WhatsApp bots for fire brigades.",
  },
  primaryCta: { label: "Start a conversation", href: `mailto:${site.email}` },
  secondaryCta: { label: "github.com/Luisotee", href: "https://github.com/Luisotee" },
  /** Curupira's shape at a high level, from its card in projects.ts. Six nodes, clockwise from the top. */
  graph: {
    core: "agent",
    nodes: [
      { label: "whatsapp", flow: "in" },
      { label: "platform", flow: "out" },
      { label: "fire risk", flow: "in" },
      { label: "voice", flow: "out" },
      { label: "telegram", flow: "in" },
      { label: "docs · rag", flow: "in" },
    ] satisfies GraphNode[],
    caption: {
      title: "Curupira",
      text: "one agent on WhatsApp and Telegram that files fire reports, reads the fire-risk forecast and answers from brigade documents.",
    },
  },
}

export const proof: Stat[] = [
  { value: "30,000+", label: "active subscribers on Tapnote, whose web app I built as sole developer" },
  { value: "3rd place", label: "in the Amazon Challenge with Terra Krya, R$ 100,000 in funding" },
  { value: "3+ years", label: "shipping production software, since Jan 2023" },
  { value: "124", label: "GitHub stars on my open-source WhatsApp assistant" },
]

export const sections = {
  work: {
    id: "work",
    number: "01",
    eyebrow: "Selected work",
    titleLines: ["Things I have", "shipped."],
    intro:
      "Featured work first, each broken down into the problem, what I built, the stack and the outcome. Everything else lives in the archive below.",
  },
  experience: {
    id: "experience",
    number: "02",
    eyebrow: "Experience",
    titleLines: ["Where I have", "worked."],
    intro: "Remote with teams in Poland, Germany, Italy and the US, after starting on-site at Huawei in Brazil.",
  },
  github: {
    id: "github",
    number: "03",
    eyebrow: "GitHub",
    titleLines: ["In the open."],
  },
  contact: {
    id: "contact",
    number: "04",
    eyebrow: "Contact",
    titleLines: ["Have something", "to build?"],
  },
} satisfies Record<string, SectionHeading>

export const archiveCopy = {
  eyebrow: "Archive",
  title: "All projects",
  filterLabel: "Filter projects",
  allLabel: "All",
  empty: "Nothing in this category yet.",
}

export const socials: Social[] = [
  { label: "GitHub", handle: "Luisotee", href: "https://github.com/Luisotee" },
  { label: "LinkedIn", handle: "in/luisotee", href: "https://www.linkedin.com/in/luisotee" },
  { label: "Website", handle: "luisotee.com", href: "https://luisotee.com" },
]

/** Interface copy that isn't tied to a single entry. */
export const labels = {
  skipToContent: "Skip to content",
  backToTop: "Back to top",
  openMenu: "Open menu",
  menu: "Menu",
  contact: "Contact",
  problem: "Problem",
  built: "What I built",
  impact: "Impact",
  achievements: "Achievements",
  pinnedLanguages: "Pinned languages",
  stars: "stars",
  forks: "forks",
  copyEmail: "Copy email",
  copied: "Copied",
  showFewerRoles: "Show fewer roles",
  showEarlierRoles: (count: number) => `Show ${count} earlier role${count === 1 ? "" : "s"}`,
  showFewerProjects: "Show fewer projects",
  showAllProjects: (count: number) => `Show ${count} more project${count === 1 ? "" : "s"}`,
}
