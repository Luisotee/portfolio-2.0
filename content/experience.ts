import type { Education, Role } from "./types"

export const roles: Role[] = [
  {
    company: "Terra Krya",
    role: "AI Engineer (Freelance)",
    period: "Jul 2026 – Present",
    where: "Brazil · Remote",
    highlights: [
      "Build and run 2 production AI agents on WhatsApp and Telegram for volunteer fire brigades and Brazil-nut producers, used by 118 people in 15 groups (8,900+ messages).",
      "Forked them from my open-source AI Agent Boilerplate; each bot runs 2,300+ tests, with Sentry monitoring and FleetView, a dashboard I built for the fleet's health and conversations.",
    ],
    stack: ["Python", "Pydantic AI", "pgvector", "TypeScript"],
  },
  {
    company: "Tapnote",
    role: "Full-stack Developer (Contract)",
    period: "Feb 2026 – Jun 2026",
    where: "Poland · Remote",
    highlights: [
      "Sole developer of Tapnote's web app (10,000+ users), the web version of a Polish AI study app with 30,000+ subscribers.",
      "Reached feature parity with the native app; built LLM and RAG tutoring on PostgreSQL / Supabase.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "AWS", "RAG"],
  },
  {
    company: "Akdo.ai",
    role: "Full-stack Developer",
    period: "Jul 2025 – Jan 2026",
    where: "Germany · Remote",
    highlights: [
      "Architected, in a team of 5, an AI enterprise training platform used by Siemens Energy, Henkel and Essity; its LLM authoring tools helped produce 50+ courses.",
      "Built multi-organization auth with Better Auth for 3+ client organizations, a peer review system, and ISO/IEC 27001 controls for the company's certification.",
    ],
    stack: ["Next.js", "Better Auth", "AWS", "LLMs"],
  },
  {
    company: "Underdogs",
    role: "Full-stack Developer & Automation Lead (Contract)",
    period: "Nov 2024 – Jul 2025",
    where: "Italy · Remote",
    highlights: [
      "Ran the company's IT infrastructure single-handedly, Kubernetes included, and built its web platform and a custom CRM used by about 30 staff.",
      "Automated 20+ workflows, saving an estimated 40+ hours a week; launched a GraphRAG knowledge-base chatbot handling 100+ daily queries.",
    ],
    stack: ["Next.js", "Kubernetes", "LangChain", "n8n"],
  },
  {
    company: "Awana Digital",
    role: "AI Engineer (Contract)",
    period: "Apr 2024 – Nov 2024",
    where: "USA · Remote",
    highlights: [
      "Engineered AI agents with LangChain, Smolagents and Mem0 to query environmental data in chat.",
      "Led a 7-person team on Terra Krya's entry to Meta's Desafio WhatsApp pela Amazônia: 3rd place, R$ 100,000 in funding.",
    ],
    stack: ["LangChain", "Smolagents", "Mem0"],
  },
  {
    company: "Self-employed",
    role: "Full-stack Developer (Freelance)",
    period: "Nov 2023 – Mar 2024",
    where: "Brazil · Remote",
    highlights: [
      "Built web apps and AI agents for 3 clients, including an inventory management and advertisement automation system.",
      "Sole developer of a startup's proof-of-concept chatbot for real-time crisis guidance.",
    ],
    stack: ["Next.js", "LangChain", "CrewAI", "Smolagents"],
  },
  {
    company: "Huawei",
    role: "Intern",
    period: "Jan 2023 – Nov 2023",
    where: "Sorocaba, Brazil · On-site",
    highlights: [
      "Handled Huawei–Claro team communications on Claro's 5G rollout and 4G, 3G and 2G network maintenance.",
      "Built a Python and React scraping API for the Claro portal, and a VBA tool converting Excel files to PDF that saved each teammate about an hour a day.",
    ],
    stack: ["Python", "React", "VBA"],
  },
]

/** Roles after this many are hidden behind the "Show earlier roles" toggle. */
export const visibleRoles = 4

export const education: Education[] = [
  { degree: "BS, Computer Engineering", school: "Sorocaba University of Engineering", period: "2019 – 2023" },
  { degree: "BS, System Development", school: "Pontifical Catholic University of Paraná", period: "2024 – Present" },
]
