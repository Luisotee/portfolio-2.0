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

// Entrances are CSS so the hero shows before JS. Stat n rises at 250 + n * 50 ms; the delay-*
// classes are safelisted in globals.css up to 1000.
const proofDelay = (i: number) => `delay-${Math.min(250 + i * 50, 1000)}`

/**
 * Who, what and proof in the first screen. Mobile stacks text, proof, CTAs, graph; from xl the
 * graph sits beside the text and CTAs, with the proof row spanning both underneath.
 */
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-8 md:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid mask-radial-[80%_70%] mask-radial-from-30% mask-radial-to-75% mask-radial-at-[60%_30%]"
      />

      <Container className="relative grid gap-y-8 xl:grid-cols-[minmax(0,1fr)_28rem] xl:gap-x-16">
        <div className="flex min-w-0 flex-col gap-6 xl:col-start-1 xl:row-start-1">
          <div className="flex flex-col gap-2 font-mono text-sm text-soft motion-safe:animate-rise">
            <p className="inline-flex items-center gap-3">
              <LiveDot /> {hero.eyebrow}
            </p>
            {hero.status && <p className="ps-5">{hero.status}</p>}
          </div>

          <HeroTitle />

          <p className="max-w-2xl text-xl/snug text-soft delay-150 motion-safe:animate-rise md:text-2xl/snug">
            {hero.intro.before}
            <span className="text-foreground">{hero.intro.emphasis}</span>
            {hero.intro.after}
            <span
              aria-hidden
              className="ml-1.5 inline-block h-[1em] w-[0.5em] translate-y-[0.14em] bg-primary motion-safe:animate-blink"
            />
          </p>
        </div>

        <ul className="grid border-t sm:grid-cols-2 lg:grid-cols-4 xl:col-span-2 xl:row-start-3">
          {proof.map((stat, i) => (
            <li
              key={stat.label}
              className={cn(
                "grid grid-cols-[8.5rem_minmax(0,1fr)] items-center gap-4 border-b py-4 motion-safe:animate-rise sm:flex sm:flex-col sm:items-start sm:gap-1.5 sm:py-6 sm:pr-6",
                proofDelay(i),
              )}
            >
              <span className="font-display text-3xl leading-none font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {stat.value}
              </span>
              <span className="max-w-60 text-sm text-muted-foreground">{stat.label}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 delay-200 motion-safe:animate-rise xl:col-start-1 xl:row-start-2">
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

        <div className="mx-auto mt-6 w-full max-w-md delay-150 motion-safe:animate-rise xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:mt-0 xl:max-w-none xl:self-center">
          <AgentGraph />
        </div>
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
