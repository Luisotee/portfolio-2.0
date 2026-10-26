import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google"

import { MotionProvider } from "@/components/motion/motion-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { labels, site } from "@/content/site"
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
  title: site.title,
  description: site.description,
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
          className="sr-only items-center rounded-full bg-primary font-mono text-sm text-primary-foreground focus:not-sr-only focus:fixed focus:inline-flex focus:h-11 focus:px-5 focus:top-21 focus:left-4 focus:z-100 sm:focus:left-8 lg:focus:left-16"
        >
          {labels.skipToContent}
        </a>
        <MotionProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
