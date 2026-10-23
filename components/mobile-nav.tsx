"use client"

import { Menu } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { labels, nav } from "@/content/site"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="outline" size="icon" className="size-11 rounded-full md:hidden" />}
      >
        <Menu />
        <span className="sr-only">{labels.openMenu}</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-4/5 bg-background">
        <SheetHeader className="p-6">
          <SheetTitle className="font-mono text-sm font-normal text-muted-foreground">{labels.menu}</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="px-6">
          <ul className="flex flex-col gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                {/* Plain links (not SheetClose) so they keep the link role. */}
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center font-display text-3xl font-semibold tracking-tight hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
