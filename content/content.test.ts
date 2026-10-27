// Invariants the types can't express. Plain data, no DOM.
import { describe, expect, it } from "vitest"

import { roles, visibleRoles } from "./experience"
import { github, githubStats, pinnedLanguages, pinnedRepos } from "./github"
import { projects, visibleArchive } from "./projects"
import { hero, nav, proof, resume, sections, site, socials } from "./site"
import type { FeatureProject, Stat } from "./types"
import { archiveFilters, archiveProjects, compactProjects, featuredProjects } from "@/lib/projects"

const featured = projects.filter((p): p is FeatureProject => p.priority !== 3)
const archive = projects.filter((p) => p.priority === 3)

describe("projects", () => {
  it("have unique titles", () => {
    const titles = projects.map((p) => p.title)
    expect(titles.filter((t, i) => titles.indexOf(t) !== i)).toEqual([])
  })

  it("priority 1/2 carry a metric, built lines and, if set, impact lines", () => {
    for (const p of featured) {
      expect(p.metric.value.trim(), p.title).not.toBe("")
      expect(p.metric.label.trim(), p.title).not.toBe("")
      expect(p.built.length, p.title).toBeGreaterThan(0)
      if (p.impact) expect(p.impact.length, p.title).toBeGreaterThan(0)
    }
  })

  // CLAUDE.md: throwaway projects stay archive rows and are never featured.
  it.each(["Mindprint", "BrightConnect Voicebot"])("%s stays priority 3", (title) => {
    const project = projects.find((p) => p.title === title)
    expect(project?.priority).toBe(3)
    expect([...featuredProjects, ...compactProjects].map((p) => p.title)).not.toContain(title)
  })

  it("feature and compact cards share one running number, priority 1 first", () => {
    const numbered = [...featuredProjects, ...compactProjects]
    expect(numbered.map((p) => p.num)).toEqual(numbered.map((_, i) => String(i + 1).padStart(2, "0")))
    expect(featuredProjects.every((p) => p.priority === 1)).toBe(true)
    expect(compactProjects.every((p) => p.priority === 2)).toBe(true)
    expect(numbered.length).toBe(featured.length)
  })
})

describe("archive", () => {
  it("filter counts match the priority 3 data", () => {
    const tags = [...new Set(archive.flatMap((p) => p.tags))]
    const expected = [
      { value: "All", count: archive.length },
      ...tags.map((tag) => ({ value: tag, count: archive.filter((p) => p.tags.includes(tag)).length })),
    ]
    expect(archiveFilters).toEqual(expected)
  })

  it("holds every priority 3 project, minor rows last", () => {
    expect(archiveProjects.map((p) => p.title).sort()).toEqual(archive.map((p) => p.title).sort())
    const firstMinor = archiveProjects.findIndex((p) => p.minor)
    if (firstMinor !== -1) expect(archiveProjects.slice(firstMinor).every((p) => p.minor)).toBe(true)
  })

  it("visibleArchive fits the archive", () => {
    expect(Number.isInteger(visibleArchive)).toBe(true)
    expect(visibleArchive).toBeGreaterThan(0)
    expect(visibleArchive).toBeLessThanOrEqual(archive.length)
  })
})

describe("links", () => {
  const hrefs = [
    ...projects.flatMap((p) => (p.link ? [p.link.href] : [])),
    ...pinnedRepos.map((r) => r.href),
    ...socials.map((s) => s.href),
    ...nav.map((n) => n.href),
    hero.primaryCta.href,
    hero.resumeCta.href,
    hero.secondaryCta.href,
    github.profile.href,
    resume.driveUrl,
    site.url,
  ]
  const external = hrefs.filter((h) => !h.startsWith("#") && !h.startsWith("/") && !h.startsWith("mailto:"))

  it.each(external)("%s parses and is https", (href) => {
    expect(URL.canParse(href)).toBe(true)
    expect(new URL(href).protocol).toBe("https:")
  })

  it("mailto links go to the site email", () => {
    for (const href of hrefs.filter((h) => h.startsWith("mailto:"))) expect(href).toBe(`mailto:${site.email}`)
  })

  it("in-page anchors point at a section", () => {
    const ids = Object.values(sections).map((s) => s.id)
    for (const href of hrefs.filter((h) => h.startsWith("#"))) expect(ids).toContain(href.slice(1))
  })
})

describe("experience", () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const parse = (s: string) => {
    const [month, year] = s.split(" ")
    expect(months, s).toContain(month)
    return Number(year) * 12 + months.indexOf(month)
  }
  const periods = roles.map((r) => {
    const [start, end] = r.period.split(" – ")
    return { start: parse(start), end: end === "Present" ? Infinity : parse(end) }
  })

  it("periods parse and start before they end", () => {
    for (const p of periods) expect(p.start).toBeLessThanOrEqual(p.end)
  })

  it("roles are sorted newest first", () => {
    const starts = periods.map((p) => p.start)
    expect(starts).toEqual([...starts].sort((a, b) => b - a))
  })

  it("visibleRoles fits the roles list", () => {
    expect(Number.isInteger(visibleRoles)).toBe(true)
    expect(visibleRoles).toBeGreaterThan(0)
    expect(visibleRoles).toBeLessThanOrEqual(roles.length)
  })
})

describe("stats", () => {
  const stats: Stat[] = [...proof, ...githubStats, ...featured.map((p) => p.metric)]

  it("have a value and a label", () => {
    for (const s of stats) {
      expect(s.value.trim()).not.toBe("")
      expect(s.label.trim()).not.toBe("")
    }
  })

  // Hand-kept GitHub counts can only fall behind, so they render as floors.
  it("GitHub counts render as floors", () => {
    for (const s of githubStats) expect(s.value, s.label).toMatch(/\+$/)
    for (const r of pinnedRepos) {
      if (r.stars) expect(r.stars, r.name).toMatch(/\+$/)
      if (r.forks) expect(r.forks, r.name).toMatch(/\+$/)
    }
  })

  it("pinned languages match the pinned repos, within the grow-{1..12} safelist", () => {
    const counts = new Map<string, number>()
    for (const r of pinnedRepos) counts.set(r.lang, (counts.get(r.lang) ?? 0) + 1)
    expect(new Map(pinnedLanguages.map((l) => [l.lang, l.count]))).toEqual(counts)
    for (const l of pinnedLanguages) {
      expect(l.count).toBeGreaterThanOrEqual(1)
      expect(l.count).toBeLessThanOrEqual(12)
    }
  })
})
