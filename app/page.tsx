import { ContactSection } from "@/components/contact/contact-section"
import { ExperienceSection } from "@/components/experience/experience-section"
import { GithubSection } from "@/components/github/github-section"
import { Hero } from "@/components/hero/hero"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WorkSection } from "@/components/work/work-section"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <WorkSection />
        <ExperienceSection />
        <GithubSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
