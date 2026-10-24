import { cn } from "@/lib/utils"

/**
 * Decorative, endlessly scrolling row. The children are rendered twice so the
 * track can loop at -50%. Pauses on hover; still when reduced motion is on.
 */
export function Marquee({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div aria-hidden className={cn("group overflow-hidden whitespace-nowrap", className)}>
      <div
        className="flex w-max group-hover:animation-paused motion-safe:animate-marquee"
      >
        {children}
        {children}
      </div>
    </div>
  )
}
