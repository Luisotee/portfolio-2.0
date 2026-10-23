import type { StackGroup } from "./types"

export const stackGroups: StackGroup[] = [
  { group: "Frontend", items: ["React", "Next.js", "React Native", "Tailwind CSS", "shadcn/ui"] },
  { group: "Backend", items: ["Node.js", "Express", "FastAPI", "RESTful APIs", "Better Auth", "NextAuth"] },
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "C / C++"] },
  {
    group: "Databases",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Drizzle", "Firebase", "Supabase", "pgvector", "Redis Streams"],
  },
  { group: "DevOps", items: ["Git", "Docker", "AWS", "CI/CD", "Linux"] },
  {
    group: "AI",
    items: ["LLMs", "LangChain", "Pydantic AI", "CrewAI", "Smolagents", "Mem0", "RAG", "AI Agents", "Prompt Engineering"],
  },
]

/** Large marquee words in the stack section; every second word is outlined. */
export const band = ["Frontend", "Backend", "Full-stack", "APIs", "Product UI", "AI features"]

/** Token ticker under the hero. */
export const stream = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Express",
  "Prisma",
  "Drizzle",
  "Supabase",
  "Better Auth",
  "Docker",
  "AWS",
  "FastAPI",
  "Python",
  "React Native",
  "LangChain",
  "Redis Streams",
]
