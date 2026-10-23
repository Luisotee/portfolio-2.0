import { projects } from "@/content/projects"
import type { ArchiveProject, FeatureProject, ProjectTag } from "@/content/types"

export type NumberedProject = FeatureProject & { num: string }

export const pad = (n: number) => String(n).padStart(2, "0")

const featureProjects = projects.filter(
  (p): p is FeatureProject => p.priority === 1 || p.priority === 2
)

// Feature and compact cards share one running number (01, 02, …), priority 1 first.
const numbered: NumberedProject[] = [
  ...featureProjects.filter((p) => p.priority === 1),
  ...featureProjects.filter((p) => p.priority === 2),
].map((p, i) => ({ ...p, num: pad(i + 1) }))

export const featuredProjects = numbered.filter((p) => p.priority === 1)
export const compactProjects = numbered.filter((p) => p.priority === 2)

export const archiveProjects = projects.filter(
  (p): p is ArchiveProject => p.priority === 3
)

export type ArchiveFilter = { value: "All" | ProjectTag; count: number }

export const archiveFilters: ArchiveFilter[] = [
  { value: "All", count: archiveProjects.length },
  ...[...new Set(archiveProjects.flatMap((p) => p.tags))].map((tag) => ({
    value: tag,
    count: archiveProjects.filter((p) => p.tags.includes(tag)).length,
  })),
]
