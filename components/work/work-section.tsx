import { Container } from "@/components/container"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { CompactCard } from "@/components/work/compact-card"
import { FeatureCard } from "@/components/work/feature-card"
import { ProjectArchive } from "@/components/work/project-archive"
import { sections } from "@/content/site"
import { compactProjects, featuredProjects } from "@/lib/projects"

export function WorkSection() {
  const heading = sections.work
  return (
    <section id={heading.id} aria-labelledby={`${heading.id}-title`} className="pt-24 md:pt-40">
      <Container>
        <SectionHeading heading={heading} />

        <div className="flex flex-col gap-6">
          {featuredProjects.map((project) => (
            <Reveal as="article" key={project.title}>
              <FeatureCard project={project} />
            </Reveal>
          ))}
        </div>

        {compactProjects.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {compactProjects.map((project) => (
              <Reveal as="article" key={project.title}>
                <CompactCard project={project} />
              </Reveal>
            ))}
          </div>
        )}

        <ProjectArchive />
      </Container>
    </section>
  )
}
