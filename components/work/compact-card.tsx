import { DashList } from "@/components/dash-list"
import { TagList } from "@/components/tag-list"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UnderlineLink } from "@/components/underline-link"
import type { NumberedProject } from "@/lib/projects"

/** Priority 2: compact feature card. */
export function CompactCard({ project }: { project: NumberedProject }) {
  return (
    <Card
      className="h-full gap-5.5 rounded-3xl text-base ring-foreground/9 transition-transform duration-500 ease-out-expo [--card-spacing:--spacing(6)] hover:-translate-y-1 hover:ring-foreground/22 md:[--card-spacing:--spacing(10)]"
    >
      <CardHeader className="gap-5.5">
        <p className="flex flex-wrap items-center justify-between gap-2.5 font-mono text-xs text-muted-foreground">
          <span>
            <span className="mr-2 text-primary">{project.num}</span>
            {project.client}
          </span>
          <span>{project.year}</span>
        </p>
        <CardTitle className="font-display text-3xl leading-tight font-semibold tracking-tight lg:text-4xl">
          <h3>{project.title}</h3>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-5.5">
        <p className="text-soft">{project.problem}</p>
        <DashList items={project.built} className="text-[0.9375rem] text-soft" />
      </CardContent>

      <CardFooter className="mt-auto flex-col items-stretch gap-5.5 border-foreground/8 bg-transparent pt-5.5">
        <div className="flex flex-wrap items-end justify-between gap-4.5">
          <div>
            <p className="font-display text-3xl leading-none font-bold tracking-tight text-primary">
              {project.metric.value}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{project.metric.label}</p>
          </div>
          {project.link && <UnderlineLink href={project.link.href}>{project.link.label}</UnderlineLink>}
        </div>
        <TagList tags={project.stack} />
      </CardFooter>
    </Card>
  )
}
