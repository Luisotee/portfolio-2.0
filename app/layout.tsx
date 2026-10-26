import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google"

import { Container } from "@/components/container"
import { MotionProvider } from "@/components/motion/motion-provider"
import { PersonJsonLd } from "@/components/person-json-ld"
import { TooltipProvider } from "@/components/ui/tooltip"
import { labels, site } from "@/content/site"
import { openGraph } from "@/lib/metadata"
import { cn } from "@/lib/utils"

import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  openGraph,
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("dark antialiased", geistSans.variable, geistMono.variable, bricolage.variable)}
    >
      <body className="min-h-svh overflow-x-clip">
        {/* Fixed Container so the focused link lines up with the page gutter, below the header. */}
        <Container className="pointer-events-none fixed inset-x-0 top-21 z-100">
          <a
            href="#main"
            className="pointer-events-auto sr-only items-center rounded-full bg-primary font-mono text-sm text-primary-foreground focus:not-sr-only focus:inline-flex focus:h-11 focus:px-5"
          >
            {labels.skipToContent}
          </a>
        </Container>
        <PersonJsonLd />
        <MotionProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
