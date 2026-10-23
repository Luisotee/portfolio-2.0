import { ArrowUpRight } from "lucide-react"

import { CopyEmailButton } from "@/components/contact/copy-email-button"
import { Container } from "@/components/container"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { sections, site, socials } from "@/content/site"

export function ContactSection() {
  const heading = sections.contact
  return (
    <section
      id={heading.id}
      aria-labelledby={`${heading.id}-title`}
      className="relative mt-24 overflow-hidden border-t border-foreground/8 md:mt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid mask-radial-[80%_70%] mask-radial-from-30% mask-radial-to-75% mask-radial-at-[60%_30%]"
      />
      <Container className="relative flex flex-col gap-10 pt-20 pb-1 md:gap-16 md:pt-36">
        <SectionHeading heading={heading} variant="contact" className="mb-0 md:mb-0" />

        <Reveal className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href={`mailto:${site.email}`}
            className="font-display text-xl font-semibold tracking-tight wrap-anywhere hover:text-primary sm:text-4xl lg:text-5xl"
          >
            {site.email}
          </a>
          <CopyEmailButton email={site.email} />
        </Reveal>

        <RevealGroup as="ul" className="grid gap-4 md:grid-cols-3">
          {socials.map((social) => (
            <RevealItem as="li" key={social.label}>
              <Card className="group/social relative rounded-2xl bg-transparent ring-foreground/12 hover:bg-foreground/3 hover:ring-primary">
                <CardContent className="flex min-h-12 items-center justify-between gap-4 px-7 py-2">
                  <span className="flex flex-col gap-1">
                    <span className="font-mono text-xs tracking-widest text-faint uppercase">{social.label}</span>
                    <a
                      href={social.href}
                      className="font-display text-xl font-semibold tracking-tight after:absolute after:inset-0 after:rounded-2xl"
                    >
                      {social.handle}
                    </a>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-5.5 text-soft transition-transform duration-500 ease-out-expo group-hover/social:translate-x-1 group-hover/social:-translate-y-1 group-hover/social:text-primary"
                  />
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
