import { Container } from "@/components/container"
import { RecentActivity } from "@/components/github/recent-activity"
import { RepoCard } from "@/components/github/repo-card"
import { StatsCard } from "@/components/github/stats-card"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { UnderlineLink } from "@/components/underline-link"
import { github, pinnedRepos } from "@/content/github"
import { sections } from "@/content/site"

export function GithubSection() {
  const heading = sections.github
  return (
    <section id={heading.id} aria-labelledby={`${heading.id}-title`} className="pt-24 md:pt-40">
      <Container>
        <SectionHeading
          heading={heading}
          action={<UnderlineLink href={github.profile.href}>{github.profile.label}</UnderlineLink>}
        />

        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <Reveal>
            <StatsCard />
          </Reveal>
          <RevealGroup as="ul" className="grid gap-4 md:grid-cols-2">
            {pinnedRepos.map((repo) => (
              <RevealItem as="li" key={repo.name}>
                <RepoCard repo={repo} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal className="mt-4">
          <RecentActivity />
        </Reveal>
      </Container>
    </section>
  )
}
