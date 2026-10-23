import { Container } from "@/components/container"
import { RolesList } from "@/components/experience/roles-list"
import { RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { education } from "@/content/experience"
import { sections } from "@/content/site"

export function ExperienceSection() {
  const heading = sections.experience
  return (
    <section id={heading.id} aria-labelledby={`${heading.id}-title`} className="pt-24 md:pt-40">
      <Container>
        <SectionHeading heading={heading} />
        <RolesList />

        <RevealGroup as="ul" className="mt-12 grid gap-4 md:grid-cols-2">
          {education.map((entry) => (
            <RevealItem as="li" key={entry.degree}>
              <Card className="h-full rounded-2xl bg-transparent ring-foreground/9 [--card-spacing:--spacing(6)]">
                <CardContent className="flex flex-col gap-1.5 md:px-7">
                  <span className="font-mono text-xs text-muted-foreground">{entry.period}</span>
                  <span className="font-display text-xl font-semibold tracking-tight">{entry.degree}</span>
                  <span className="text-sm text-muted-foreground">{entry.school}</span>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
