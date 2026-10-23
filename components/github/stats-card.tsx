import { LanguageBar } from "@/components/github/language-bar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CardLabel } from "@/components/work/card-label"
import { achievements, githubStats, pinnedLanguages } from "@/content/github"
import { labels } from "@/content/site"

export function StatsCard() {
  return (
    <Card className="h-full rounded-3xl ring-foreground/9 [--card-spacing:--spacing(6)] md:[--card-spacing:--spacing(9)]">
      <CardContent className="flex flex-col gap-7">
        <dl className="grid grid-cols-2 gap-x-5 gap-y-7">
          {githubStats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end gap-1.5">
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="font-display text-5xl leading-none font-bold tracking-tighter">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <Separator className="bg-foreground/8" />

        <div>
          <CardLabel>{labels.achievements}</CardLabel>
          <ul className="flex flex-wrap gap-2">
            {achievements.map((a) => (
              <li key={a.name}>
                <Badge variant="secondary" className="h-auto rounded-full px-3 py-1.5 font-mono text-xs font-normal">
                  {a.name}
                  {a.times && <span className="text-primary">{a.times}</span>}
                </Badge>
              </li>
            ))}
          </ul>
        </div>

        <Separator className="bg-foreground/8" />

        <div>
          <CardLabel>{labels.pinnedLanguages}</CardLabel>
          <LanguageBar languages={pinnedLanguages} />
        </div>
      </CardContent>
    </Card>
  )
}
