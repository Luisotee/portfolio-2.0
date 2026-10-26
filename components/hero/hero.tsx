import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { AgentGraph } from "@/components/hero/agent-graph"
import { HeroTitle } from "@/components/hero/hero-title"
import { GithubIcon } from "@/components/icons/github-icon"
import { LiveDot } from "@/components/live-dot"
import { Marquee } from "@/components/motion/marquee"
import { Button } from "@/components/ui/button"
import { hero, proof } from "@/content/site"
import { stream } from "@/content/stack"
import { cn } from "@/lib/utils"

// Entrances are CSS so the hero shows before JS; literal delay classes so Tailwind sees them.
const PROOF_DELAYS = ["delay-350", "delay-400", "delay-450", "delay-500"]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-10 md:pt-20 lg:pt-26">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid mask-radial-[80%_70%] mask-radial-from-30% mask-radial-to-75% mask-radial-at-[60%_30%]"
      />

      <Container className="relative grid items-center gap-10 xl:grid-cols-[minmax(0,1fr)_30rem] xl:gap-16">
        <div className="flex min-w-0 flex-col gap-8">
          <p className="inline-flex items-center gap-3 font-mono text-sm text-soft motion-safe:animate-rise">
            <LiveDot /> {hero.eyebrow}
          </p>

          <HeroTitle />

          <p className="max-w-2xl text-xl/snug text-soft delay-200 motion-safe:animate-rise md:text-2xl/snug">
            {hero.intro.before}
            <span className="text-foreground">{hero.intro.emphasis}</span>
            {hero.intro.after}
            <span
              aria-hidden
              className="ml-1.5 inline-block h-[1em] w-[0.5em] translate-y-[0.14em] bg-primary motion-safe:animate-blink"
            />
          </p>

          <div className="flex flex-wrap gap-3 delay-300 motion-safe:animate-rise">
            <Button
              render={<a href={hero.primaryCta.href} />}
              nativeButton={false}
              size="lg"
              className="h-13.5 rounded-full px-6.5 text-base font-semibold hover:-translate-y-0.5 hover:bg-primary"
            >
              {hero.primaryCta.label}
              <ArrowRight
                data-icon="inline-end"
                className="transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </Button>
            <Button
              render={<a href={hero.secondaryCta.href} />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-13.5 rounded-full border-foreground/20 px-6 text-base hover:-translate-y-0.5 hover:border-primary"
            >
              <GithubIcon data-icon="inline-start" className="size-4.5" />
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md delay-150 motion-safe:animate-rise xl:max-w-none">
          <AgentGraph />
        </div>
      </Container>

      <Container className="relative mt-14 md:mt-24">
        <ul className="grid border-t sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((stat, i) => (
            <li
              key={stat.label}
              className={cn("flex flex-col gap-1.5 border-b py-7 pr-6 motion-safe:animate-rise", PROOF_DELAYS[i])}
            >
              <span className="font-display text-4xl leading-none font-semibold tracking-tight lg:text-5xl">
                {stat.value}
              </span>
              <span className="max-w-60 text-sm text-muted-foreground">{stat.label}</span>
            </li>
          ))}
        </ul>
      </Container>

      <Marquee className="mt-10 border-y border-foreground/7 py-4.5 font-mono text-sm text-faint">
        {stream.map((token) => (
          <span key={token} className="inline-flex items-center gap-5.5 px-5.5">
            {token}
            <span className="text-primary">/</span>
          </span>
        ))}
      </Marquee>
    </section>
  )
}
