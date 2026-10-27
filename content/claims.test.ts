// Every figure on a featured card must be on the résumé, or sit in a Stat that records its source.
// The résumé repo is private, so this reads a local checkout and skips when there is none (CI, Vercel).
// It proves the site agrees with the résumé, not that either is true; small numbers (a lone 5) match loosely.
import { existsSync, readFileSync } from "node:fs"
import { resolve } from "node:path"
import { fileURLToPath } from "node:url"

import { describe, expect, it } from "vitest"

import { projects } from "./projects"
import type { FeatureProject } from "./types"

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

/** Number tokens with years, year ranges and thousands commas removed: "8,500+ in 2025–26" → ["8500"]. */
const figures = (text: string) =>
  (text.replace(/\b(?:19|20)\d{2}(?:\s*[–-]\s*(?:\d{2,4}|Present))?\b/g, " ").match(/\d+(?:[.,]\d+)*/g) ?? []).map(
    (t) => t.replace(/,/g, "")
  )

/** Figures with no recorded source yet. Each has a 🙋 item in TODO.md; remove the entry once it's sourced. */
const pendingSource = [{ project: "Curupira", figure: "68" }]

const tex = resumePath()
const featured = projects.filter((p): p is FeatureProject => p.priority !== 3)

describe.skipIf(!tex)("figures match the résumé (runs only with RESUME_TEX or ../Resume/resume.tex)", () => {
  // The body only: the preamble's 10pt/12pt would match anything.
  const body = tex ? readFileSync(tex, "utf8").split("\\begin{document}")[1] ?? "" : ""
  const onResume = new Set(figures(body))

  it.each(featured)("$title", (project) => {
    const { metric } = project
    const sourced = new Set(metric.source ? figures(`${metric.value} ${metric.label}`) : [])
    const pending = pendingSource.filter((p) => p.project === project.title).map((p) => p.figure)
    const lines = [`${metric.value} ${metric.label}`, ...(project.impact ?? []), ...project.built]

    const missing = lines.flatMap((line) =>
      figures(line)
        .filter((n) => !onResume.has(n) && !sourced.has(n) && !pending.includes(n))
        .map((n) => `${n} in "${line}"`)
    )
    expect(missing, "add the figure to the résumé or a source to the metric").toEqual([])

    const shown = new Set(lines.flatMap(figures))
    const stale = pending.filter((n) => onResume.has(n) || sourced.has(n) || !shown.has(n))
    expect(stale, "now sourced: remove from pendingSource").toEqual([])
  })
})

describe("stat sources", () => {
  const today = new Date().toISOString().slice(0, 10)

  it.each(featured.filter((p) => p.metric.source))("$title has a real asOf date", ({ metric }) => {
    const asOf = metric.source!.asOf
    expect(asOf).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(new Date(`${asOf}T00:00:00Z`).toISOString().slice(0, 10)).toBe(asOf)
    expect(asOf <= today).toBe(true)
  })
})
