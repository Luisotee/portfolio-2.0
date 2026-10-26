import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google"

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
        <a
          href="#main"
          className="sr-only rounded-full bg-primary px-4 py-2 font-mono text-sm text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100"
        >
          {labels.skipToContent}
        </a>
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
