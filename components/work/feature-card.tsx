import { Check } from "lucide-react"

import { DashList } from "@/components/dash-list"
import { TagList } from "@/components/tag-list"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { UnderlineLink } from "@/components/underline-link"
import { CardCorners } from "@/components/work/card-corners"
import { CardLabel } from "@/components/work/card-label"
import { labels } from "@/content/site"
import type { NumberedProject } from "@/lib/projects"

function MetaDot() {
  return <span aria-hidden className="size-1 rounded-full bg-faint/70" />
}

/** Priority 1: full case-study card. */
export function FeatureCard({ project }: { project: NumberedProject }) {
  return (
    <Card
      className="relative rounded-3xl text-base ring-foreground/9 [--card-spacing:--spacing(6)] hover:bg-elevated hover:ring-foreground/20 md:[--card-spacing:--spacing(10)] xl:[--card-spacing:--spacing(14)]"
    >
      <CardCorners />
      <CardContent className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-14">
        <div className="flex min-w-0 flex-col gap-7">
          <p className="flex flex-wrap items-center gap-x-4.5 gap-y-2.5 font-mono text-xs text-muted-foreground">
            <span className="text-primary">{project.num}</span>
            <span>{project.client}</span>
            <MetaDot />
            <span>{project.year}</span>
            <MetaDot />
            <span>{project.role}</span>
          </p>

          <CardTitle className="font-display text-4xl leading-none font-semibold tracking-tight md:text-5xl">
            <h3>{project.title}</h3>
          </CardTitle>

          <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
            <div>
              <CardLabel>{labels.problem}</CardLabel>
              <p className="text-soft">{project.problem}</p>
            </div>
            <div>
              <CardLabel>{labels.built}</CardLabel>
              <DashList items={project.built} className="text-soft" />
            </div>
          </div>

          <TagList tags={project.stack} />
        </div>

        <div className="flex flex-col justify-between gap-8 rounded-2xl border border-foreground/7 bg-background p-6 lg:p-9">
          <div>
            <CardLabel>{labels.impact}</CardLabel>
            <p className="relative inline-block pb-2 font-display text-5xl leading-none font-bold tracking-tighter wrap-break-word text-primary after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-800 after:ease-out-expo group-hover/card:after:scale-x-100">
              {project.metric.value}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{project.metric.label}</p>
          </div>

          {project.impact && project.impact.length > 0 && (
            <ul className="flex flex-col gap-3 border-t border-foreground/8 pt-5.5 text-sm text-soft">
              {project.impact.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Check aria-hidden className="mt-0.5 size-4 flex-none text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {project.link && <UnderlineLink href={project.link.href}>{project.link.label}</UnderlineLink>}
        </div>
      </CardContent>
    </Card>
  )
}
