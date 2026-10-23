import { cn } from "@/lib/utils"

/** Bulleted list with the accent dash marker. */
export function DashList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-col gap-2.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-3 h-px w-2.5 flex-none bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
