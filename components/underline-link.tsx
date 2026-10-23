import { ArrowUp, ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

const arrows = {
  external: { Icon: ArrowUpRight, hover: "group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" },
  up: { Icon: ArrowUp, hover: "group-hover/link:-translate-y-0.5" },
}

/** Mono text link whose underline draws in on hover. */
export function UnderlineLink({
  href,
  children,
  arrow = "external",
  className,
}: {
  href: string
  children: React.ReactNode
  arrow?: keyof typeof arrows
  className?: string
}) {
  const { Icon, hover } = arrows[arrow]
  return (
    <a
      href={href}
      className={cn(
        "group/link inline-flex min-h-11 items-center gap-2 self-start font-mono text-sm text-foreground",
        className
      )}
    >
      <span className="relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 after:ease-out-expo group-hover/link:after:scale-x-100">
        {children}
      </span>
      <Icon aria-hidden className={cn("size-4 transition-transform duration-400 ease-out-expo", hover)} />
    </a>
  )
}
