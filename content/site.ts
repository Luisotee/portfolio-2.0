// next.config.ts loads this file: keep its imports relative and dependency-free (no `@/` aliases,
// React or packages), or the config fails to load.
import type { GraphNode, SectionHeading, Social, SpokenLanguage, Stat } from "./types"

const name = "Luis Otavio"
const jobTitle = "Full-stack & AI Engineer"
/** The one canonical origin. Metadata, the sitemap and the domain redirect derive from it. */
const url = "https://www.luisotee.com"

export const site = {
  name,
  firstName: "Luis",
  lastName: "Otavio",
  initials: "LO",
  handle: "luisotee",
  email: "luisotaviomgrcont@gmail.com",
  url,
  /** The bare domain, e.g. for display: "luisotee.com". */
  domain: new URL(url).hostname.replace(/^www\./, ""),
  jobTitle,
  title: `${name}, ${jobTitle}`,
  description:
    "Full-stack & AI engineer. I build whole products end to end: React and React Native apps, Node and Python APIs, and the LLM agents behind them.",
  copyright: "© 2026 Luis Otavio",
}

/**
 * The résumé PDF on Google Drive, kept in sync with the LaTeX source. The site links to the stable
 * `/resume` path, which next.config.ts redirects here, so the Drive link can change without touching links.
 */
export const resume = {
  path: "/resume",
  driveUrl: "https://drive.google.com/file/d/1qLX_rTdpwaI694l22se_8XcVDqUSwhqR/view",
}

/** Link previews and structured data. */
export const seo = {
  locale: "en_US",
  location: { locality: "Essen", countryCode: "DE" },
  ogImageAlt: `${name}, ${jobTitle}, on a dark card with a lime accent`,
}

export const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#github", label: "GitHub" },
]

export const hero = {
  eyebrow: "Full-stack & AI engineer · Web, mobile and LLM agents",
  /** Availability and location, one line each under the eyebrow. */
  status: [
    "Open to full-time, contract and B2B work · Remote, hybrid or on-site",
    "Essen, Germany (CET) · EU citizen, open to relocation",
  ],
  intro: {
    before: "I build whole products end to end: ",
    emphasis: "the app, the API and the LLM agent behind them",
    after: ", from training software used by Siemens Energy to WhatsApp bots for fire brigades.",
  },
  primaryCta: { label: "Start a conversation", href: `mailto:${site.email}` },
  resumeCta: { label: "Résumé", href: resume.path },
  secondaryCta: { label: "github.com/Luisotee", href: "https://github.com/Luisotee" },
  /** Curupira's shape at a high level, from the "Curupira & OCA IÊ" card in projects.ts. Six nodes, clockwise from the top. */
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
  { value: "10,000+", label: "users on Tapnote's web app, which I built as sole developer" },
  { value: "3rd place", label: "in Meta's WhatsApp challenge for the Amazon, leading a team of 7" },
  { value: "3+ years", label: "shipping production software, since Jan 2023" },
  { value: "8,900+", label: "messages handled by the 2 production AI agents I build and run, for 118 people" },
]

export const sections = {
  work: {
    id: "work",
    number: "02",
    eyebrow: "Selected work",
    titleLines: ["Things I have", "shipped."],
    intro:
      "Featured work first, each broken down into the problem, what I built, the stack and the outcome. Everything else lives in the archive below.",
  },
  experience: {
    id: "experience",
    number: "01",
    eyebrow: "Experience",
    titleLines: ["Where I have", "worked."],
    intro: "Remote with teams in Germany, Poland, Italy, the US and Brazil, after starting on-site at Huawei.",
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
  { label: "Résumé", handle: "PDF", href: resume.path },
]

/** Spoken languages and levels, as on the résumé. */
export const spokenLanguages: SpokenLanguage[] = [
  { name: "Portuguese", level: "native" },
  { name: "English", level: "C2" },
  { name: "Spanish", level: "A2" },
  { name: "German", level: "A1" },
]

/** Interface copy that isn't tied to a single entry. */
export const labels = {
  skipToContent: "Skip to content",
  backToTop: "Back to top",
  openMenu: "Open menu",
  menu: "Menu",
  contact: "Contact",
  languages: "Languages",
  languageList: (languages: SpokenLanguage[]) =>
    languages.map((l) => `${l.name} (${l.level})`).join(" · "),
  problem: "Problem",
  built: "What I built",
  impact: "Impact",
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
