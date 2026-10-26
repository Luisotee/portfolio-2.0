import { formatCount, repoCounts } from "./github"
import type { Project } from "./types"

const { wappai } = repoCounts

/**
 * Add, remove or reorder entries here; no component changes needed.
 * priority 1 = full feature card, 2 = compact card, 3 = archive row.
 * Archive filters are built from the tags of priority 3 entries.
 */
/** Archive rows after this many are hidden behind the "Show more" toggle. */
export const visibleArchive = 8

export const projects: Project[] = [
  {
    priority: 1,
    title: "Tapnote Web",
    client: "Tapnote, Poland",
    year: "2026",
    role: "Sole developer",
    tags: ["AI", "Full-stack"],
    problem:
      "Poland's #1 AI tutor app, with 30,000+ active subscribers, lived on mobile. Students needed the same tutor on the web.",
    built: [
      "Architected the full-stack web app with Next.js, React, TypeScript, Tailwind CSS and Node.js, reaching feature parity with the native mobile app.",
      "Engineered AI tutoring features with LLMs and RAG on a PostgreSQL / Supabase backend for context-aware homework help and personalized study assistance.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Supabase", "LLMs", "RAG"],
    metric: { value: "30,000+", label: "active subscribers on the app it extends" },
    impact: ["Feature parity with the native mobile app", "Context-aware tutoring grounded with RAG"],
    link: { href: "https://web.tapnote.app", label: "web.tapnote.app (sign-in required)" },
  },
  {
    priority: 1,
    title: "Enterprise Training Platform",
    client: "Akdo.ai, Germany",
    year: "2025–26",
    role: "Full-stack developer",
    tags: ["Full-stack", "AI"],
    problem:
      "Companies needed a training platform where courses could be created automatically, with each organization's users and data strictly isolated.",
    built: [
      "Architected the platform in Next.js, integrating automated course creation with LLM-driven content generation.",
      "Owned the end-to-end multi-organization authentication system with Better Auth for secure tenant isolation.",
      "Designed and shipped a peer review system so training creators receive structured feedback and ratings.",
    ],
    stack: ["Next.js", "TypeScript", "Better Auth", "LLMs"],
    metric: { value: "Multi-tenant", label: "auth with secure isolation per organization" },
    impact: ["Secure tenant isolation across organizations", "Structured peer feedback and ratings for course creators"],
    link: { href: "https://akdo.ai", label: "akdo.ai" },
  },
  {
    priority: 1,
    title: "Curupira",
    client: "Terra Krya, Brazil",
    year: "2026",
    role: "Bot developer",
    tags: ["AI", "Full-stack"],
    problem:
      "Volunteer fire brigades in central Brazil coordinate in group chats, far from the Caminho do Fogo platform where alerts, fires and field actions are recorded. I build the bot; Terra Krya brings it to the brigades.",
    built: [
      "WhatsApp and Telegram agent with one shared memory: brigade members sign in from the chat, then report alerts and fires with a location pin and photos, each write confirmed before it is saved.",
      "Fire status updates, field actions, area notifications and the INPE fire-risk forecast up to three days ahead, all by conversation.",
      "RAG over brigade documents with citations, plus voice notes in and out.",
    ],
    stack: ["TypeScript", "Fastify", "Baileys", "grammY", "Python", "FastAPI", "Pydantic AI", "Gemini", "PostgreSQL", "pgvector", "Redis Streams", "Docker"],
    metric: { value: "84 users", label: "across 10 brigade groups of 30+ people" },
    impact: [
      "Field reports reach the platform straight from the group chat",
      "Brigades are notified when a fire is registered in their area",
    ],
    link: { href: "https://caminhodofogo.com.br", label: "caminhodofogo.com.br" },
  },
  {
    priority: 1,
    title: "OCA IÊ",
    client: "Terra Krya, Brazil",
    year: "2026",
    role: "Bot developer",
    tags: ["AI", "Full-stack"],
    problem:
      "Brazil-nut (castanha) collectors in northern Brazil sell with little visibility into what the harvest is fetching in other regions. I build the bot; Terra Krya brings it to the communities.",
    built: [
      "WhatsApp agent on the IE Sociobio platform: producers log prices just by talking, and compare their region with others.",
      "A weekly regional recap posted to each group, with prices, harvest counters and phase, rewritten or rescheduled by asking the bot.",
      "The Caderno da Safra harvest survey answered by conversation, plus operator broadcasts paced to stay clear of spam detection.",
    ],
    stack: ["TypeScript", "Fastify", "Baileys", "Python", "FastAPI", "Pydantic AI", "Gemini", "PostgreSQL", "pgvector", "Redis Streams", "Docker"],
    metric: { value: "34 users", label: "across 5 producer groups of 10+ people" },
    impact: [
      "Prices shared across regions every week, from the platform's own data",
      "Harvest survey filled in without leaving WhatsApp",
    ],
    link: { href: "https://iesociobio.org", label: "iesociobio.org" },
  },
  {
    priority: 1,
    title: "WhatsApp Chatbot Assistant",
    client: "Open source, WAppAI",
    year: "OSS",
    role: "Author",
    tags: ["AI", "Open source"],
    problem: "Bring context-aware LLM answers into the chat app people already use every day.",
    built: [
      "Open-source WhatsApp assistant that brings LLMs from OpenAI, Anthropic, Google, Groq or OpenRouter into chats through LangChain, with web search, Google Calendar and Routes tools, voice messages, reminders and group chats.",
    ],
    stack: ["TypeScript", "Node.js", "LangChain", "Prisma", "Docker"],
    metric: { value: `${formatCount(wappai.stars)} ★`, label: `GitHub stars and ${formatCount(wappai.forks)} forks` },
    impact: ["Most-starred repository on my profile", `Forked ${formatCount(wappai.forks)} times by other developers`],
    link: { href: "https://github.com/WAppAI/assistant", label: "WAppAI/assistant" },
  },
  {
    priority: 1,
    title: "Google Routes Tool",
    client: "LangChain.js, open source",
    year: "2024",
    role: "Contributor",
    tags: ["AI", "Open source"],
    problem: "LangChain.js agents had no native way to plan routes, so travel and logistics agents had to hand-roll Google Maps calls.",
    built: [
      "Contributed the Google Routes Tool to LangChain.js: agents can ask for routes, travel times and distances through Google's Routes API.",
      "Shipped with docs and tests, reviewed and merged by the LangChain maintainers.",
    ],
    stack: ["TypeScript", "LangChain.js", "Google Routes API"],
    metric: { value: "Merged", label: "into LangChain.js, May 2024" },
    link: { href: "https://github.com/langchain-ai/langchainjs/pull/5329", label: "langchain-ai/langchainjs#5329" },
  },
  {
    priority: 2,
    title: "Amazon Challenge with Terra Krya",
    client: "Awana Digital, USA",
    year: "2024",
    role: "AI Engineer",
    tags: ["AI"],
    problem: "Make environmental data reachable through conversation instead of raw datasets.",
    built: [
      "Engineered autonomous AI agents with LangChain, Smolagents and Mem0 that power conversational interfaces for environmental data.",
      "Led the Amazon Challenge implementation with Terra Krya.",
    ],
    stack: ["LangChain", "Smolagents", "Mem0", "Python"],
    metric: { value: "3rd place", label: "Amazon Challenge, R$ 100,000 in funding" },
    impact: ["Placed 3rd in the Amazon Challenge", "Secured R$ 100,000 in funding"],
    link: { href: "https://www.desafiopelaamazonia.com.br", label: "desafiopelaamazonia.com.br" },
  },
  {
    priority: 2,
    title: "Web Platform, CRM and Automation",
    client: "Underdogs, Italy",
    year: "2024–25",
    role: "Full-stack & Automation Lead",
    tags: ["Full-stack", "Automation"],
    problem: "Operations depended on third-party automation tools and hours of manual work every week.",
    built: [
      "Built the full-stack web platform with Next.js, React and Tailwind CSS.",
      "Designed and shipped a custom CRM from scratch, removing the dependency on third-party automation tools.",
      "Automated 20+ business workflows with Zapier, n8n and Make, plus an internal chatbot handling 100+ daily queries.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Zapier", "n8n", "Make"],
    metric: { value: "40+ h / week", label: "of manual work saved across teams" },
  },
  {
    priority: 3,
    title: "agent-mesh",
    year: "2026",
    tags: ["AI",  "Tools"],
    summary:
      "Claude Code and Antigravity agents that hand work to each other across repos: expensive models plan, cheap models type, and you watch it all in herdr.",
    stack: ["Python", "Shell"],
    link: { href: "https://github.com/Luisotee/agent-mesh" },
  },
  {
    priority: 3,
    title: "Invoice Generator",
    year: "2026",
    tags: ["Frontend"],
    summary:
      "Create and download professional invoices in the browser.",
    stack: ["TypeScript", "Next.js"],
    link: { href: "https://invoice-generator-pi-beige.vercel.app" },
  },
  {
    priority: 3,
    title: "Financiar ou Alugar?",
    year: "2026",
    tags: ["Frontend"],
    summary:
      "Compares renting, buying outright and financing a home, counting investments, taxes, inflation and appreciation.",
    stack: ["TypeScript", "Next.js"],
    link: { href: "https://financiar-ou-alugar.vercel.app" },
  },
  {
    priority: 3,
    title: "AI Personal Assistant",
    year: "2026",
    tags: ["AI",  "Full-stack"],
    summary:
      "WhatsApp assistant with a RAG knowledge base and citations, multi-language voice, and expense tracking feeding a finance dashboard.",
    stack: ["Python", "FastAPI", "Pydantic AI", "Next.js", "pgvector"],
    link: { href: "https://github.com/Luisotee/ai-personal-assistant" },
  },
  {
    priority: 3,
    title: "ai-boilerplate",
    year: "2025–26",
    tags: ["AI"],
    summary:
      "Extensible multi-client AI agent with RAG, STT and TTS. TypeScript client layer, Python core on FastAPI, Pydantic AI and Gemini, WhatsApp via Baileys. The base Curupira and OCA IÊ grew from.",
    stack: ["Python", "FastAPI", "Pydantic AI", "TypeScript"],
    link: { href: "https://github.com/Luisotee/ai-boilerplate" },
  },
  {
    priority: 3,
    title: "Typebot client for WhatsApp",
    year: "2025–26",
    tags: ["Automation"],
    summary:
      "Middleware that runs Typebot flows on WhatsApp through either the Cloud API or Baileys, with interactive fallbacks.",
    stack: ["TypeScript", "Baileys"],
    link: { href: "https://github.com/Luisotee/typebot-client-whatsapp" },
  },
  {
    priority: 3,
    title: "Google Meet caption translator",
    year: "2025",
    tags: ["Tools"],
    summary:
      "Chrome extension that translates Google Meet captions live with LibreTranslate, grouped by speaker in a side panel.",
    stack: ["JavaScript", "Chrome extension"],
    link: { href: "https://github.com/Luisotee/translate-google-meet" },
  },
  {
    priority: 3,
    title: "smolagents-ai-boilerplate",
    year: "2025",
    tags: ["AI"],
    summary:
      "FastAPI and Smolagents assistant service with Supabase history, file attachments and a pluggable tool system.",
    stack: ["Python", "FastAPI", "Smolagents"],
    link: { href: "https://github.com/Luisotee/smolagents-ai-boilerplate" },
  },
  {
    priority: 3,
    title: "ai-assistant-mulheres-SE",
    year: "2025",
    tags: ["AI"],
    summary:
      "Multi-client assistant boilerplate: a FastAPI and Smolagents core with a Baileys WhatsApp client.",
    stack: ["Python", "Smolagents", "TypeScript"],
    link: { href: "https://github.com/Luisotee/ai-assistant-mulheres-SE" },
  },
  {
    priority: 3,
    title: "turnio-handler",
    year: "2025",
    tags: ["Automation"],
    summary:
      "Turn.io webhook service for fire alerts, fire reports and field actions.",
    stack: ["TypeScript", "Express"],
    link: { href: "https://github.com/Luisotee/turnio-handler" },
  },
  {
    priority: 3,
    title: "img-selfhost-auth",
    year: "2025",
    tags: ["Tools"],
    summary:
      "Small self-hosted image store behind token auth.",
    stack: ["TypeScript", "Express"],
    link: { href: "https://github.com/Luisotee/img-selfhost-auth" },
  },
  {
    priority: 3,
    title: "AI Financial Assistant",
    year: "2025",
    tags: ["AI",  "Automation"],
    summary:
      "Proof of concept that reads bank notifications, categorizes transactions with an LLM and logs them to Google Sheets.",
    stack: ["Python", "Groq", "Azure OpenAI"],
    link: { href: "https://github.com/Luisotee/ai-financial-assistant" },
  },
  {
    priority: 3,
    title: "turn-function-calling",
    year: "2025",
    tags: ["AI"],
    summary:
      "Turn.io function-calling endpoint with HMAC verification and a weather tool.",
    stack: ["TypeScript", "Express"],
    link: { href: "https://github.com/Luisotee/turn-function-calling" },
  },
  {
    priority: 3,
    title: "Meeting scheduling agent",
    year: "2024",
    tags: ["AI"],
    summary:
      "Prototype where a host agent negotiates a meeting time with the guest over chat and books the event.",
    stack: ["TypeScript", "LangChain"],
    link: { href: "https://github.com/Luisotee/assistant-meeting" },
  },
  {
    priority: 3,
    title: "Text converter",
    year: "2024",
    tags: ["Tools"],
    summary:
      "Escapes pasted text so it can go straight into a JSON string.",
    stack: ["TypeScript", "React"],
    link: { href: "https://github.com/Luisotee/text-converter" },
  },
  {
    priority: 3,
    title: "MapleLegends bot",
    year: "2024",
    tags: ["Automation"],
    summary:
      "Telegram bot for MapleLegends players: server status alerts, character stats and vote tracking.",
    stack: ["Python", "Telegram"],
    link: { href: "https://github.com/Luisotee/maplelegends_bot" },
  },
  {
    priority: 3,
    title: "Chat with your repo",
    year: "2024",
    tags: ["AI"],
    summary:
      "Frontend for chatting with a code repository.",
    stack: ["TypeScript", "Next.js"],
    link: { href: "https://github.com/Luisotee/chat-with-your-repo-frontend" },
  },
  {
    priority: 3,
    title: "project-simple.js",
    year: "2024",
    tags: ["Learning"],
    summary:
      "Express and EJS starter page.",
    stack: ["JavaScript", "Express", "EJS"],
    link: { href: "https://project-simple-js.vercel.app" },
  },
  {
    priority: 3,
    title: "First portfolio",
    year: "2023–24",
    tags: ["Frontend"],
    summary:
      "My first personal portfolio.",
    stack: ["TypeScript", "Next.js"],
    link: { href: "https://portfolio-luisotee.vercel.app" },
  },
  {
    priority: 3,
    title: "Simulador de Nota",
    year: "2023–24",
    tags: ["Mobile"],
    summary:
      "React Native app that simulates final grades per subject, stored in SQLite.",
    stack: ["TypeScript", "React Native"],
    link: { href: "https://github.com/Luisotee/SimuladorNota" },
  },
  {
    priority: 3,
    title: "HelpFacul",
    year: "2023",
    tags: ["Full-stack",  "Learning"],
    summary:
      "University project: a site where students promote themselves as private tutors.",
    stack: ["TypeScript", "Next.js"],
    link: { href: "https://help-facul.vercel.app" },
  },
  {
    priority: 3,
    title: "Calculadora IRPF",
    year: "2023",
    tags: ["Mobile"],
    summary:
      "App that estimates Brazilian income tax (IRPF) from income, deductions and credits.",
    stack: ["TypeScript", "React Native"],
    link: { href: "https://github.com/Luisotee/CalculadoraIRPFAndroid" },
  },
  {
    priority: 3,
    title: "IP address tracker",
    year: "2022–23",
    tags: ["Frontend",  "Learning"],
    summary:
      "Looks up an IP address or domain and shows its location on a map.",
    stack: ["TypeScript", "Next.js"],
    link: { href: "https://github.com/Luisotee/ip-address-tracker" },
  },
  {
    priority: 3,
    title: "AC2 App",
    year: "2022",
    tags: ["Mobile",  "Learning"],
    summary:
      "University React Native app to register students, teachers, classes and subjects.",
    stack: ["TypeScript", "React Native"],
    link: { href: "https://github.com/Luisotee/AC2_App" },
  },
  {
    priority: 3,
    title: "Interactive card form",
    year: "2022",
    tags: ["Frontend",  "Learning"],
    summary:
      "Frontend Mentor challenge: interactive card details form, built with React and Mantine.",
    stack: ["TypeScript", "React", "Mantine"],
    link: { href: "https://interactive-card-jxmj4ex9w-luisotee.vercel.app" },
  },
  {
    priority: 3,
    title: "Product preview card",
    year: "2022",
    tags: ["Frontend",  "Learning"],
    summary:
      "Frontend Mentor challenge: responsive product preview card.",
    stack: ["TypeScript", "React"],
    link: { href: "https://product-preview-card-olive.vercel.app" },
  },
  {
    priority: 3,
    title: "Interactive rating component",
    year: "2022",
    tags: ["Frontend",  "Learning"],
    summary:
      "Frontend Mentor challenge: interactive rating component.",
    stack: ["TypeScript", "React"],
    link: { href: "https://interactive-rating-component-main-sage.vercel.app" },
  },
  {
    priority: 3,
    title: "Planner App",
    year: "2022",
    tags: ["Frontend",  "Learning"],
    summary:
      "Basic Trello-like planner.",
    stack: ["TypeScript", "Next.js"],
    link: { href: "https://planner-app-next-js.vercel.app" },
  },
  {
    priority: 3,
    title: "To-do list",
    year: "2022",
    tags: ["Frontend",  "Learning"],
    summary:
      "To-do list app, built to learn Next.js.",
    stack: ["JavaScript", "Next.js"],
    link: { href: "https://to-do-list-next-js-chi.vercel.app" },
  },
  {
    priority: 3,
    title: "Facens Rockets",
    year: "2019",
    tags: ["Learning"],
    summary:
      "Avionics for a university model rocket: altitude and acceleration logging, drogue and main parachute deployment on an ESP32.",
    stack: ["C++", "ESP32"],
    link: { href: "https://github.com/Luisotee/Code4Rocket" },
  },
  {
    priority: 3,
    title: "BombeiroTARS",
    year: "2019",
    tags: ["Learning"],
    summary:
      "Firefighter robot that searches a four-room maze for a candle and puts it out. 2nd place at the TecnoFacens tournament.",
    stack: ["C++", "Arduino"],
    link: { href: "https://github.com/Luisotee/BombeiroTARS" },
  },
  // Minor work, kept last so it sits behind "Show more" in every archive filter.
  {
    priority: 3,
    title: "Mindprint",
    year: "2026",
    tags: ["Frontend"],
    summary:
      "Free, private self-screening for ADHD traits, autistic traits and reasoning, in five languages. Runs entirely in the browser.",
    stack: ["TypeScript", "Next.js"],
    link: { href: "https://mindprint-lilac.vercel.app" },
  },
  {
    priority: 3,
    title: "BrightConnect Voicebot",
    year: "2026",
    tags: ["AI"],
    summary:
      "Customer support voicebot on Vapi.ai: conversational design, provider stack reasoning and a real tool-calling backend.",
    stack: ["TypeScript", "Vapi.ai"],
    link: { href: "https://github.com/Luisotee/brightconnect-voicebot" },
  },
  {
    priority: 3,
    title: "SENTINEL onboarding assessment",
    year: "2026",
    tags: ["Full-stack"],
    summary:
      "Take-home: a client onboarding risk assessment that derives the risk tier from regulatory criteria and keeps an attributable compliance record.",
    stack: ["TypeScript", "Next.js"],
    link: { href: "https://challenge-new-page.vercel.app" },
  },
]
