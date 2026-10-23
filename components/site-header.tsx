import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { labels, nav, site } from "@/content/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/7 bg-background/72 backdrop-blur-md backdrop-saturate-150">
      <Container as="nav" aria-label="Primary" className="flex h-18 items-center justify-between gap-6">
        <Tooltip>
          <TooltipTrigger
            render={<a href="#top" />}
            className="flex items-center gap-3"
          >
            <span aria-hidden className="inline-flex size-9.5 items-center justify-center rounded-lg border border-foreground/16 font-display text-sm font-bold tracking-tight">
              {site.initials}
            </span>
            <span className="font-mono text-sm text-soft">{site.handle}</span>
            <span className="sr-only">, {labels.backToTop}</span>
          </TooltipTrigger>
          <TooltipContent side="bottom">{labels.backToTop}</TooltipContent>
        </Tooltip>

        <ul className="hidden items-center gap-8 font-mono text-sm md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-soft after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-500 after:ease-out-expo hover:text-foreground hover:after:origin-left hover:after:scale-x-100"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            render={<a href="#contact" />}
            nativeButton={false}
            className="h-11 rounded-full px-4.5 font-mono text-sm hover:-translate-y-0.5 hover:bg-primary"
          >
            {labels.contact}
            <ArrowRight data-icon="inline-end" className="transition-transform duration-300 group-hover/button:translate-x-1" />
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
