import { cn } from "@/lib/utils"

/** Centered page column with the site's side gutters. */
export function Container({
  as: Element = "div",
  className,
  ...props
}: React.ComponentProps<"div"> & { as?: "div" | "nav" | "footer" }) {
  return <Element className={cn("mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16", className)} {...props} />
}
