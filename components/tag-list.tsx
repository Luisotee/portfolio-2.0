import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/** Tech tags. `outline` for project cards, `secondary` for quieter lists. */
export function TagList({
  tags,
  variant = "outline",
  className,
}: {
  tags: string[]
  variant?: "outline" | "secondary"
  className?: string
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            variant={variant}
            className={cn(
              "h-auto rounded-full px-3 py-1.5 font-mono text-xs font-normal text-soft",
              variant === "outline" && "border-foreground/12 group-hover/card:border-foreground/20"
            )}
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  )
}
