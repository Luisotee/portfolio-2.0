"use client"

import { motion, stagger } from "motion/react"

import { LanguageDot } from "@/components/github/language-dot"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import type { Language } from "@/content/types"
import { languageColor } from "@/lib/languages"
import { cn } from "@/lib/utils"

/** Proportional bar plus legend. Segments grow in from the left when scrolled into view. */
export function LanguageBar({ languages }: { languages: { lang: Language; count: number }[] }) {
  return (
    <div>
      <motion.div
        className="flex h-2 gap-0.75 overflow-hidden rounded-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        variants={{ visible: { transition: { delayChildren: stagger(0.15) } } }}
      >
        {languages.map(({ lang, count }) => (
          <Tooltip key={lang}>
            <TooltipTrigger
              render={
                <motion.span
                  data-reveal
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: { scaleX: 1, transition: { duration: 1.4, ease: [0.2, 0.8, 0.2, 1] } },
                  }}
                />
              }
              // Dynamic grow-* classes are safelisted in globals.css.
              className={cn("basis-0 origin-left", `grow-${count}`, languageColor[lang])}
            />
            <TooltipContent>
              {lang} {count}
            </TooltipContent>
          </Tooltip>
        ))}
      </motion.div>
      <ul className="mt-3 flex flex-wrap gap-x-4.5 gap-y-1.5 font-mono text-xs text-muted-foreground">
        {languages.map(({ lang, count }) => (
          <li key={lang} className="inline-flex items-center gap-2">
            <LanguageDot lang={lang} /> {lang} {count}
          </li>
        ))}
      </ul>
    </div>
  )
}
