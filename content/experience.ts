import type { Education, Role } from "./types"

export const roles: Role[] = [
  {
    company: "Tapnote",
    role: "Full-stack Developer",
    period: "Feb 2026 – Jun 2026",
    where: "Poland · Remote",
    highlights: [
      "Sole developer of the web counterpart to Poland's #1 AI tutor app, serving 30,000+ active subscribers.",
      "Reached feature parity with the native app; built LLM and RAG tutoring on PostgreSQL / Supabase.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "RAG"],
  },
  {
    company: "Akdo.ai",
    role: "Full-stack Developer",
    period: "Jul 2025 – Jan 2026",
    where: "Germany · Remote",
    highlights: [
      "Architected an AI enterprise training platform with LLM-driven course generation.",
      "Owned multi-organization auth with Better Auth, shipped peer review, implemented multi-ISO compliance with Kertos.",
    ],
    stack: ["Next.js", "Better Auth", "LLMs", "Kertos"],
  },
  {
    company: "Underdogs",
    role: "Full-stack Developer & Automation Lead",
    period: "Nov 2024 – Jul 2025",
    where: "Italy · Remote",
    highlights: [
      "Led IT infrastructure; built the web platform and a custom CRM from scratch.",
      "Automated 20+ workflows saving 40+ hours a week; shipped a chatbot handling 100+ daily queries.",
    ],
    stack: ["Next.js", "Zapier", "n8n", "Make"],
  },
  {
    company: "Awana Digital",
    role: "AI Engineer",
    period: "Apr 2024 – Nov 2024",
    where: "USA · Remote",
    highlights: [
      "Engineered autonomous agents with LangChain, Smolagents and Mem0 for conversational access to environmental data.",
      "Led the Amazon Challenge implementation with Terra Krya: 3rd place, R$ 100,000 in funding.",
    ],
    stack: ["LangChain", "Smolagents", "Mem0"],
  },
  {
    company: "Freelance",
    role: "Full-stack Developer",
    period: "Sep 2023 – Mar 2024",
    where: "Brazil, Israel · Remote",
    highlights: [
      "Designed and shipped an inventory management and advertisement automation system.",
      "Sole developer of an Israeli startup's emergency advisory chatbot MVP with real-time crisis guidance.",
    ],
    stack: ["Full-stack", "Chatbots"],
  },
]

/** Roles after this many are hidden behind the "Show earlier roles" toggle. */
export const visibleRoles = 4

export const education: Education[] = [
  { degree: "BS, Computer Engineering", school: "Sorocaba University of Engineering", period: "2019 – 2023" },
  { degree: "BS, System Development", school: "Pontifical Catholic University of Paraná", period: "2024 – Present" },
]
