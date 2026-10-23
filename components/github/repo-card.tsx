import { BookMarked, GitFork, Star } from "lucide-react"

import { LanguageDot } from "@/components/github/language-dot"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { labels } from "@/content/site"
import type { Repo } from "@/content/types"

/** Pinned repository. The title link stretches over the whole card. */
export function RepoCard({ repo }: { repo: Repo }) {
  return (
    <Card className="relative h-full gap-3.5 rounded-2xl text-base ring-foreground/9 transition-transform duration-500 ease-out-expo [--card-spacing:--spacing(6.5)] hover:-translate-y-1 hover:ring-foreground/22">
      <CardHeader className="grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <CardTitle className="flex min-w-0 items-center gap-2.5 font-mono text-sm font-medium">
          <BookMarked aria-hidden className="size-4.5 flex-none text-faint" />
          <h3 className="wrap-anywhere">
            <a
              href={repo.href}
              className="group-hover/card:text-primary after:absolute after:inset-0 after:rounded-2xl"
            >
              {repo.name}
            </a>
          </h3>
        </CardTitle>
        {repo.badge && (
          <Badge variant="outline" className="border-foreground/16 font-mono font-normal text-muted-foreground">
            {repo.badge}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-[0.9375rem] text-soft">{repo.desc}</CardDescription>
      </CardContent>
      <CardFooter className="flex-wrap gap-x-4.5 gap-y-2 border-0 bg-transparent pt-0 font-mono text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <LanguageDot lang={repo.lang} />
          {repo.lang}
        </span>
        {repo.stars && (
          <span className="inline-flex items-center gap-1.5">
            <Star aria-hidden className="size-3.5" />
            {repo.stars}
            <span className="sr-only">{labels.stars}</span>
          </span>
        )}
        {repo.forks && (
          <span className="inline-flex items-center gap-1.5">
            <GitFork aria-hidden className="size-3.5" />
            {repo.forks}
            <span className="sr-only">{labels.forks}</span>
          </span>
        )}
      </CardFooter>
    </Card>
  )
}
