import type { Metadata } from "next"

import { ContactSection } from "@/components/contact/contact-section"
import { ExperienceSection } from "@/components/experience/experience-section"
import { GithubSection } from "@/components/github/github-section"
import { Hero } from "@/components/hero/hero"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WorkSection } from "@/components/work/work-section"
import { jsonLdGraph, profilePageNode } from "@/lib/json-ld"
import { openGraph } from "@/lib/metadata"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...openGraph, url: "/" },
}

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLdGraph(profilePageNode())} />
      <SiteHeader />
      <main id="main">
        <Hero />
        <ExperienceSection />
        <WorkSection />
        <GithubSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
