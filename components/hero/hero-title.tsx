import { site } from "@/content/site"
import { cn } from "@/lib/utils"

// Letter n starts rising at START + n * STEP ms; the delay-* classes are safelisted in globals.css.
const START = 100
const STEP = 50
const MAX_DELAY = 1000

function Letters({ text, from, className }: { text: string; from: number; className?: string }) {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={cn(
        "inline-block motion-safe:animate-letter",
        `delay-${Math.min(START + (from + i) * STEP, MAX_DELAY)}`,
        className,
      )}
    >
      {char}
    </span>
  ))
}

/** The name, rising letter by letter in CSS so it plays before JS. Screen readers get the plain name. */
export function HeroTitle() {
  const first = site.firstName.length
  const last = site.lastName.length
  return (
    <h1 id="hero-title" className="font-display text-hero">
      <span className="sr-only">{site.name}</span>
      {/* The clip lets each letter rise from below the baseline. */}
      <span aria-hidden className="block">
        <span className="inline-block overflow-hidden pe-[0.08em] pb-[0.06em] align-top">
          <Letters text={site.firstName} from={0} />
        </span>
      </span>
      {/* nowrap keeps the period on the same line as the last name. */}
      <span aria-hidden className="block">
        <span className="inline-block overflow-hidden pe-[0.08em] pb-[0.06em] align-top whitespace-nowrap">
          <Letters text={site.lastName} from={first} className="text-outline" />
          <Letters text="." from={first + last} className="text-primary" />
        </span>
      </span>
    </h1>
  )
}
