import type { Achievement, Language, RecentRepo, Repo, Stat } from "./types"

export const github = {
  profile: { href: "https://github.com/Luisotee", label: "@Luisotee on GitHub" },
}

export const githubStats: Stat[] = [
  { value: "45", label: "public repositories" },
  { value: "124", label: "stars on WAppAI/assistant" },
  { value: "38", label: "forks of WAppAI/assistant" },
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
  { lang: "Python", count: 2 },
  { lang: "JavaScript", count: 1 },
]

export const pinnedRepos: Repo[] = [
  {
    name: "WAppAI/assistant",
    href: "https://github.com/WAppAI/assistant",
    desc: "A WhatsApp chatbot using Bing AI and other LLMs.",
    lang: "TypeScript",
    stars: "124",
    forks: "38",
    badge: "Archived",
  },
  {
    name: "Luisotee/ai-personal-assistant",
    href: "https://github.com/Luisotee/ai-personal-assistant",
    desc: "AI personal assistant with RAG, voice support and finance tracking.",
    lang: "Python",
  },
  {
    name: "digidem/earth-defenders-assistant",
    href: "https://github.com/digidem/earth-defenders-assistant",
    desc: "A platform for audio-first AI assistants that can work offline, built on a plugin architecture.",
    lang: "Python",
    stars: "13",
  },
  {
    name: "Luisotee/langchainjsRoutes",
    href: "https://github.com/Luisotee/langchainjsRoutes",
    desc: "LangChain.js fork behind the Google Routes Tool contribution.",
    lang: "TypeScript",
    badge: "Fork",
  },
]

export const recentRepos: RecentRepo[] = [
  {
    name: "ai-boilerplate",
    href: "https://github.com/Luisotee/ai-boilerplate",
    when: "Oct 2026",
    lang: "Python",
    desc: "Extensible multi-client AI agent with RAG, STT and TTS.",
  },
  {
    name: "brightconnect-voicebot",
    href: "https://github.com/Luisotee/brightconnect-voicebot",
    when: "Aug 2026",
    lang: "TypeScript",
    desc: "Customer support voicebot built on Vapi.ai with a tool-calling backend.",
  },
  {
    name: "ai-personal-assistant",
    href: "https://github.com/Luisotee/ai-personal-assistant",
    when: "Jan 2026",
    lang: "Python",
    desc: "AI-powered personal assistant with RAG, voice support and finance tracking.",
  },
]
