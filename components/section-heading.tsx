import { Reveal } from "@/components/motion/reveal"
import type { SectionHeading as SectionHeadingData } from "@/content/types"
import { cn } from "@/lib/utils"

export function SectionHeading({
  heading,
  action,
  variant = "section",
  className,
}: {
  heading: SectionHeadingData
  /** Shown opposite the title instead of the intro. */
  action?: React.ReactNode
  /** "contact" is larger and outlines the last line. */
  variant?: "section" | "contact"
  className?: string
}) {
  const lastLine = heading.titleLines.length - 1
  return (
    <Reveal
      className={cn("mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-16", className)}
    >
      <div>
        <p className="mb-4 font-mono text-sm text-primary">
          {heading.number} / {heading.eyebrow}
        </p>
        <h2
          id={`${heading.id}-title`}
          className={cn("font-display", variant === "contact" ? "text-contact" : "text-section")}
        >
          {heading.titleLines.map((line, i) => (
            <span
              key={line}
              className={cn("block", variant === "contact" && i === lastLine && i > 0 && "text-outline")}
            >
              {line}
            </span>
          ))}
        </h2>
      </div>
      {heading.intro && <p className="max-w-sm text-muted-foreground">{heading.intro}</p>}
      {action}
    </Reveal>
  )
}
