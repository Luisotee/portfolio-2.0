import type { Language, Repo, Stat, StatSource } from "./types"

export const github = {
  profile: { href: "https://github.com/Luisotee", label: "@Luisotee on GitHub" },
}

/**
 * Star and fork counts, kept by hand. Every star and fork count on the page reads from here.
 * WAppAI/assistant is archived, so they change slowly; check github.com now and then.
 */
export const repoCounts = {
  wappai: { stars: 125, forks: 39 },
  earthDefenders: { stars: 13 },
}

/** When the hand-kept counts were last checked against GitHub. Update it with them. */
export const repoCountsSource: StatSource = { from: "GitHub", asOf: "2026-10-27" }

/** Public repositories on the profile, kept by hand like the counts above. */
export const publicRepoCount = 47

/** A hand-kept count shown as a floor ("125+"), so it stays true as the real number grows. Keep it at or below GitHub's. */
export const formatFloor = (n: number) => `${n.toLocaleString("en-US")}+`

const { wappai, earthDefenders } = repoCounts

export const githubStats: Stat[] = [
  { value: formatFloor(publicRepoCount), label: "public repositories" },
  { value: formatFloor(wappai.stars), label: "stars on WAppAI/assistant" },
  { value: formatFloor(wappai.forks), label: "forks of WAppAI/assistant" },
  { value: formatFloor(earthDefenders.stars), label: "stars on earth-defenders-assistant" },
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
    desc: "A WhatsApp AI assistant on LangChain: pick an LLM provider, with web search, Google Routes and voice messages, plus Google Calendar on OpenAI models.",
    lang: "TypeScript",
    stars: formatFloor(wappai.stars),
    forks: formatFloor(wappai.forks),
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
    stars: formatFloor(earthDefenders.stars),
  },
]
