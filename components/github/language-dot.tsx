import type { Language } from "@/content/types"
import { languageColor } from "@/lib/languages"
import { cn } from "@/lib/utils"

export function LanguageDot({ lang }: { lang: Language }) {
  return <span aria-hidden className={cn("inline-block size-2.5 flex-none rounded-full", languageColor[lang])} />
}
