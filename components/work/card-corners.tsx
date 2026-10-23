import { cn } from "@/lib/utils"

const corners = [
  "top-3.5 left-3.5 origin-top-left border-t-[1.5px] border-l-[1.5px]",
  "top-3.5 right-3.5 origin-top-right border-t-[1.5px] border-r-[1.5px]",
  "bottom-3.5 left-3.5 origin-bottom-left border-b-[1.5px] border-l-[1.5px]",
  "bottom-3.5 right-3.5 origin-bottom-right border-b-[1.5px] border-r-[1.5px]",
]

/** Accent brackets that grow into the card corners on hover. */
export function CardCorners() {
  return corners.map((position) => (
    <span
      key={position}
      aria-hidden
      className={cn(
        "pointer-events-none absolute size-6.5 scale-50 border-primary opacity-0 transition-[transform,opacity] duration-500 ease-out-expo group-hover/card:scale-100 group-hover/card:opacity-100",
        position
      )}
    />
  ))
}
