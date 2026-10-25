import type { Achievement, Language, RecentRepo, Repo, Stat } from "./types"

export const github = {
  profile: { href: "https://github.com/Luisotee", label: "@Luisotee on GitHub" },
}

export const githubStats: Stat[] = [
  { value: "48", label: "public repositories" },
  { value: "125", label: "stars on WAppAI/assistant" },
  { value: "39", label: "forks of WAppAI/assistant" },
  { value: "13", label: "stars on earth-defenders-assistant" },
]

export const achievements: Achievement[] = [
  { name: "Pair Extraordinaire", times: "×4" },
  { name: "Pull Shark", times: "×3" },
  { name: "Quickdraw" },
  { name: "YOLO" },
  { name: "Arctic Code Vault" },
]

/** Pinned-repository language split, in pinned repo counts. */
export const pinnedLanguages: { lang: Language; count: number }[] = [
  { lang: "TypeScript", count: 3 },
  { lang: "Python", count: 3 },
]

export const pinnedRepos: Repo[] = [
  {
    name: "WAppAI/assistant",
    href: "https://github.com/WAppAI/assistant",
    desc: "A WhatsApp chatbot using Bing AI and other LLMs.",
    lang: "TypeScript",
    stars: "125",
    forks: "39",
    badge: "Archived",
  },
  {
    name: "langchain-ai/langchainjs#5329",
    href: "https://github.com/langchain-ai/langchainjs/pull/5329",
    desc: "Google Routes Tool, merged into LangChain.js.",
    lang: "TypeScript",
    badge: "Merged PR",
  },
  {
    name: "Luisotee/agent-mesh",
    href: "https://github.com/Luisotee/agent-mesh",
    desc: "Claude Code and Antigravity agents planning and executing across repos: expensive models plan, cheap models type.",
    lang: "Python",
  },
  {
    name: "Luisotee/ai-boilerplate",
    href: "https://github.com/Luisotee/ai-boilerplate",
    desc: "Extensible multi-client AI agent with RAG, STT and TTS, with WhatsApp support via Baileys.",
    lang: "Python",
    badge: "Template",
  },
  {
    name: "Luisotee/portfolio-2.0",
    href: "https://github.com/Luisotee/portfolio-2.0",
    desc: "This portfolio, built with Next.js, Tailwind CSS, shadcn/ui and Motion.",
    lang: "TypeScript",
  },
  {
    name: "digidem/earth-defenders-assistant",
    href: "https://github.com/digidem/earth-defenders-assistant",
    desc: "A platform for audio-first AI assistants that can work offline, built on a plugin architecture.",
    lang: "Python",
    stars: "13",
  },
]

export const recentRepos: RecentRepo[] = [
  {
    name: "agent-mesh",
    href: "https://github.com/Luisotee/agent-mesh",
    when: "Oct 2026",
    lang: "Python",
    desc: "Claude Code and Antigravity agents planning and executing across repos.",
  },
  {
    name: "ai-boilerplate",
    href: "https://github.com/Luisotee/ai-boilerplate",
    when: "Oct 2026",
    lang: "Python",
    desc: "Extensible multi-client AI agent with RAG, STT and TTS.",
  },
  {
    name: "ai-personal-assistant",
    href: "https://github.com/Luisotee/ai-personal-assistant",
    when: "Jan 2026",
    lang: "Python",
    desc: "AI-powered personal assistant with RAG, voice support and finance tracking.",
  },
]
