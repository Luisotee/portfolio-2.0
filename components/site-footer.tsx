import { Container } from "@/components/container"
import { UnderlineLink } from "@/components/underline-link"
import { labels, site } from "@/content/site"

export function SiteFooter() {
  return (
    <Container as="footer" className="pt-16 pb-14 md:pb-20">
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-foreground/8 pt-7 font-mono text-xs text-muted-foreground">
        <span>{site.copyright}</span>
        <UnderlineLink href="#top" arrow="up" className="text-xs">
          {labels.backToTop}
        </UnderlineLink>
      </div>
    </Container>
  )
}
