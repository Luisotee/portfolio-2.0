// Every figure on a featured card must be on the résumé, or sit in a Stat (or `figureSources`) that records its source.
// The résumé repo is private, so this reads a local checkout and skips when there is none (CI, Vercel).
// It proves the site agrees with the résumé, not that either is true. Limits: figures match by value alone, so a
// small number (a lone 5) matches loosely and "+" is ignored; a year is stripped only after a month name or in a
// range, so a bare year elsewhere ("since 2023") counts as a figure.
import { existsSync, readFileSync } from "node:fs"
import { resolve } from "node:path"
import { fileURLToPath } from "node:url"

import { describe, expect, it } from "vitest"

import { repoCountsSource } from "./github"
import { projects } from "./projects"
import { proof } from "./site"
import type { FeatureProject, Stat } from "./types"

const repoRoot = fileURLToPath(new URL("..", import.meta.url))

function resumePath() {
  const fromEnv = process.env.RESUME_TEX
  if (fromEnv) {
    if (!existsSync(fromEnv)) throw new Error(`RESUME_TEX points at a missing file: ${fromEnv}`)
    return fromEnv
  }
  const sibling = resolve(repoRoot, "../Resume/resume.tex")
  return existsSync(sibling) ? sibling : undefined
}

const year = String.raw`(?:19|20)\d{2}`
/** A year after a month name ("May 2024"), or a year range ("2025–26", "2019 -- 2023", "Jul 2026 -- Present"). */
const dates = new RegExp(
  String.raw`\b(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+${year}|${year}\s*(?:–|—|-{1,3})\s*(?:${year}|\d{2}|Present))\b`,
  "g"
)

/** Number tokens with dates and thousands commas removed: "8,500+ in 2025–26" → ["8500"], "2,000 users" → ["2000"]. */
const figures = (text: string) =>
  (text.replace(dates, " ").match(/\d+(?:[.,]\d+)*/g) ?? []).map((t) => t.replace(/,/g, ""))

/** Figures with no recorded source yet. Each has a 🙋 item in TODO.md; remove the entry once it's sourced. */
const pendingSource: { project: string; figure: string }[] = []

const tex = resumePath()
const featured = projects.filter((p): p is FeatureProject => p.priority !== 3)

describe.skipIf(!tex)("figures match the résumé (runs only with RESUME_TEX or ../Resume/resume.tex)", () => {
  // The body only: the preamble's 10pt/12pt would match anything.
  const body = tex ? readFileSync(tex, "utf8").split("\\begin{document}")[1] ?? "" : ""
  const onResume = new Set(figures(body))

  it.each(featured)("$title", (project) => {
    const { metric } = project
    const metricLine = `${metric.value} ${metric.label}`
    const fromMetric = metric.source ? figures(metricLine) : []
    // figureSources covers built and impact lines only: a metric figure needs its own source.
    const fromLines = [...fromMetric, ...Object.keys(project.figureSources ?? {})]
    const pending = pendingSource.filter((p) => p.project === project.title).map((p) => p.figure)
    const lines = [metricLine, ...(project.impact ?? []), ...project.built]

    const missing = lines.flatMap((line) => {
      const sourced = line === metricLine ? fromMetric : fromLines
      return figures(line)
        .filter((n) => !onResume.has(n) && !sourced.includes(n) && !pending.includes(n))
        .map((n) => `${n} in "${line}"`)
    })
    expect(missing, "add the figure to the résumé, or a source to the metric or figureSources").toEqual([])

    const shown = new Set(lines.flatMap(figures))
    const stale = pending.filter((n) => onResume.has(n) || fromLines.includes(n) || !shown.has(n))
    expect(stale, "now sourced: remove from pendingSource").toEqual([])
  })

  it.each(proof)("hero proof: $value $label", (stat) => {
    const missing = stat.source ? [] : figures(`${stat.value} ${stat.label}`).filter((n) => !onResume.has(n))
    expect(missing, "add the figure to the résumé or a source to the stat").toEqual([])
  })
})

describe("figures()", () => {
  it("strips dates but keeps figures that look like years", () => {
    expect(figures("8,500+ messages in 2025–26")).toEqual(["8500"])
    expect(figures("merged May 2024, since Jan 2023")).toEqual([])
    expect(figures("2019 -- 2023 and Jul 2026 -- Present")).toEqual([])
    expect(figures("2000+ users")).toEqual(["2000"])
  })
})

describe("figureSources", () => {
  it.each(featured.filter((p) => p.figureSources))("$title names only figures its built or impact lines show", (project) => {
    const shown = new Set([...(project.impact ?? []), ...project.built].flatMap(figures))
    const unused = Object.keys(project.figureSources ?? {}).filter((n) => !shown.has(n))
    expect(unused, "a key must be a figure as figures() reads it (\"8500\", not \"8,500+\"), still on the card").toEqual([])
  })
})

describe("stat sources", () => {
  // Dates are written in Luis's timezone, so "today" is Essen's.
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Berlin" }).format(new Date())
  const sources = [
    ...[...featured.map((p) => p.metric), ...proof].flatMap((s: Stat) =>
      s.source ? [{ name: `${s.value} ${s.label}`, ...s.source }] : []
    ),
    ...featured.flatMap((p) =>
      Object.entries(p.figureSources ?? {}).map(([figure, source]) => ({ name: `${p.title} ${figure}`, ...source }))
    ),
    { name: "repoCountsSource", ...repoCountsSource },
  ]

  it.each(sources)("$name has a real asOf date", ({ asOf }) => {
    expect(asOf).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(new Date(`${asOf}T00:00:00Z`).toISOString().slice(0, 10)).toBe(asOf)
    expect(asOf <= today).toBe(true)
  })
})
