import type { SectionHeading, Social, Stat } from "./types"

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
  languages: "Portuguese (native) · English (C2) · Spanish (A2) · German (A1)",
}

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#github", label: "GitHub" },
]

export const hero = {
  eyebrow: "Full-stack engineer · Frontend, backend and AI",
  intro: {
    before: "I build web products end to end: ",
    emphasis: "polished React frontends, solid backends and APIs",
    after: ", and AI features where they earn their place.",
  },
  primaryCta: { label: "Start a conversation", href: `mailto:${site.email}` },
  secondaryCta: { label: "github.com/Luisotee", href: "https://github.com/Luisotee" },
  graph: {
    core: "product",
    nodes: ["frontend", "api", "database", "auth", "infra", "ai"],
  },
}

export const proof: Stat[] = [
  { value: "30,000+", label: "active subscribers on Tapnote, whose web app I built as sole developer" },
  { value: "6", label: "countries of remote teams I have shipped with" },
  { value: "40+ h", label: "of manual work saved per week through 20+ automations" },
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
    intro: "Remote, embedded in teams across Poland, Germany, Italy, the US, Brazil and Israel.",
  },
  stack: {
    id: "stack",
    number: "03",
    eyebrow: "Stack",
    titleLines: ["What I build", "with."],
    intro:
      "TypeScript across the stack, Python where it fits. React and Next.js on the front, Node.js and FastAPI behind it, and AI tooling when the product calls for it.",
  },
  github: {
    id: "github",
    number: "04",
    eyebrow: "GitHub",
    titleLines: ["In the open."],
  },
  contact: {
    id: "contact",
    number: "05",
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
  recentlyActive: "Recently active",
  stars: "stars",
  forks: "forks",
  copyEmail: "Copy email",
  copied: "Copied",
  showFewerRoles: "Show fewer roles",
  showEarlierRoles: (count: number) => `Show ${count} earlier role${count === 1 ? "" : "s"}`,
}
