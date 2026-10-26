export type Link = {
  href: string
  label: string
}

export type Stat = {
  value: string
  label: string
}

/** One box around the hero graph's core; packets run toward the core ("in") or away from it ("out"). */
export type GraphNode = {
  label: string
  flow: "in" | "out"
}

export type SectionHeading = {
  id: string
  /** Shown before the eyebrow, e.g. "01". */
  number: string
  eyebrow: string
  /** Each entry renders on its own line. */
  titleLines: string[]
  intro?: string
}

export type ProjectTag =
  | "AI"
  | "Full-stack"
  | "Frontend"
  | "Mobile"
  | "Automation"
  | "Tools"
  | "Learning"
  | "Open source"

type ProjectBase = {
  title: string
  year: string
  /** Archive filters are built from the tags of priority 3 projects. */
  tags: ProjectTag[]
  stack: string[]
}

/** Priority 1 renders as a full feature card, priority 2 as a compact card. */
export type FeatureProject = ProjectBase & {
  priority: 1 | 2
  client: string
  role: string
  problem: string
  built: string[]
  metric: Stat
  impact?: string[]
  link?: Link
}

/** Priority 3 renders as a row in the archive. */
export type ArchiveProject = ProjectBase & {
  priority: 3
  /** Sorts after every other archive row, so it sits behind "Show more" when a filter has more rows than `visibleArchive`. */
  minor?: true
  summary: string
  link?: Pick<Link, "href">
}

export type Project = FeatureProject | ArchiveProject

export type Role = {
  company: string
  role: string
  period: string
  where: string
  highlights: string[]
  stack: string[]
}

export type Education = {
  degree: string
  school: string
  period: string
}

export type Language = "TypeScript" | "Python" | "JavaScript"

export type Repo = {
  name: string
  href: string
  desc: string
  lang: Language
  stars?: string
  forks?: string
  badge?: string
}

export type Achievement = {
  name: string
  times?: string
}

export type Social = {
  label: string
  handle: string
  href: string
}

export type SpokenLanguage = {
  name: string
  level: string
}
