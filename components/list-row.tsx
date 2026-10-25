import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * One row of a ruled list (project archive).
 * Renders as a link with a turning arrow when `href` is set, otherwise as static text.
 */
export function ListRow({
  href,
  lead,
  title,
  description,
  meta,
  className,
}: {
  href?: string
  lead: string
  title: string
  description: string
  meta: React.ReactNode
  className?: string
}) {
  const shift = "transition-transform duration-500 ease-out-expo group-hover/row:translate-x-2 md:group-hover/row:translate-x-5"
  const content = (
    <>
      <span className={cn("col-span-full font-mono text-sm text-muted-foreground md:col-span-1 md:pt-1", shift)}>
        {lead}
      </span>
      <span className={cn("flex min-w-0 flex-col gap-1.5", shift)}>
        <span className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">{title}</span>
        <span className="text-muted-foreground">{description}</span>
      </span>
      <span className={cn("col-start-1 font-mono text-sm text-muted-foreground md:col-start-auto md:pt-1.5", shift)}>
        {meta}
      </span>
      {href && (
        <span
          aria-hidden
          className="col-start-2 row-start-2 inline-flex size-10 items-center justify-center justify-self-end rounded-full border border-foreground/14 text-soft transition-transform duration-500 ease-out-expo group-hover/row:-rotate-45 group-hover/row:border-primary group-hover/row:text-primary md:col-start-4 md:row-start-1"
        >
          <ArrowRight className="size-4" />
        </span>
      )}
    </>
  )

  const rowClass = cn(
    "grid grid-cols-[minmax(0,1fr)_2.5rem] items-start gap-x-6 gap-y-2 py-6 md:grid-cols-[7.5rem_minmax(0,1fr)_minmax(0,17.5rem)_3rem]",
    className
  )

  return href ? (
    <a href={href} className={cn("group/row hover:bg-foreground/4", rowClass)}>
      {content}
    </a>
  ) : (
    <div className={rowClass}>{content}</div>
  )
}
