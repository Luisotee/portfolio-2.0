"use client"

import { motion, stagger } from "motion/react"
import { useState } from "react"

import { ListRow } from "@/components/list-row"
import { fadeUp, Reveal } from "@/components/motion/reveal"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { archiveCopy } from "@/content/site"
import { archiveFilters, archiveProjects, pad, type ArchiveFilter } from "@/lib/projects"

/** Priority 3 projects as a filterable list. */
export function ProjectArchive() {
  const [filter, setFilter] = useState<ArchiveFilter["value"]>("All")
  const visible = archiveProjects.filter((p) => filter === "All" || p.tags.includes(filter))

  return (
    <div className="mt-20 md:mt-32">
      <Reveal className="mb-7 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-3 font-mono text-sm text-muted-foreground">
            {archiveCopy.eyebrow} <span className="text-primary">{pad(archiveProjects.length)}</span>
          </p>
          <h3 className="font-display text-4xl leading-none font-semibold tracking-tight md:text-5xl">
            {archiveCopy.title}
          </h3>
        </div>
        <ToggleGroup
          aria-label={archiveCopy.filterLabel}
          value={[filter]}
          onValueChange={(value) => {
            // Clicking the active filter deselects it; ignore that so one is always selected.
            const next = archiveFilters.find((f) => f.value === value[0])
            if (next) setFilter(next.value)
          }}
          variant="outline"
          className="flex-wrap"
        >
          {archiveFilters.map((f) => (
            <ToggleGroupItem
              key={f.value}
              value={f.value}
              className="h-11 rounded-full border-foreground/14 px-4 font-mono text-xs text-soft hover:border-foreground/30 hover:bg-transparent hover:text-foreground aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground aria-pressed:hover:bg-primary aria-pressed:hover:text-primary-foreground"
            >
              {f.value === "All" ? archiveCopy.allLabel : f.value}
              <span className="opacity-60">{f.count}</span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </Reveal>

      {/* Keyed by filter so the rows stagger in again after each change. */}
      <motion.ul
        key={filter}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { delayChildren: stagger(0.06) } } }}
        className="border-t"
      >
        {visible.map((project) => (
          <motion.li key={project.title} variants={fadeUp} className="border-b">
            <ListRow
              href={project.link?.href}
              lead={project.year}
              title={project.title}
              description={project.summary}
              meta={project.stack.join(" · ")}
            />
          </motion.li>
        ))}
      </motion.ul>
      {visible.length === 0 && (
        <p className="py-8 font-mono text-sm text-muted-foreground">{archiveCopy.empty}</p>
      )}
    </div>
  )
}
