import { Container } from "@/components/container"
import { Marquee } from "@/components/motion/marquee"
import { RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { sections } from "@/content/site"
import { band, stackGroups } from "@/content/stack"
import { pad } from "@/lib/projects"
import { cn } from "@/lib/utils"

export function StackSection() {
  const heading = sections.stack
  return (
    <section id={heading.id} aria-labelledby={`${heading.id}-title`} className="pt-24 md:pt-40">
      <Container>
        <SectionHeading heading={heading} />
      </Container>

      <Marquee slow className="pt-2 pb-10 font-display text-6xl leading-tight font-bold tracking-tighter md:text-8xl lg:text-9xl">
        {band.map((word, i) => (
          <span key={word} className="inline-flex items-center gap-10 pr-10">
            <span className={cn(i % 2 === 1 && "text-outline")}>{word}</span>
            <span className="size-4.5 rounded-full bg-primary" />
          </span>
        ))}
      </Marquee>

      <Container>
        <RevealGroup className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stackGroups.map((group) => (
            <RevealItem key={group.group}>
              <Card className="h-full gap-5 rounded-2xl ring-foreground/9 [--card-spacing:--spacing(7)] hover:bg-elevated hover:ring-foreground/20">
                <CardHeader className="grid-cols-[1fr_auto] items-center">
                  <CardTitle className="font-display text-2xl font-semibold tracking-tight">
                    <h3>{group.group}</h3>
                  </CardTitle>
                  <span className="font-mono text-xs text-faint">{pad(group.items.length)}</span>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Badge
                          variant="outline"
                          className="h-auto rounded-full border-foreground/14 px-3.5 py-2 font-mono text-sm font-normal text-soft transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          {item}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
