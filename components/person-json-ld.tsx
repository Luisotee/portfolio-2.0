import { seo, site, socials } from "@/content/site"

const ownHost = new URL(site.url).hostname.replace(/^www\./, "")

/** schema.org Person for search engines. Profiles on this site's own domain are left out of `sameAs`. */
export function PersonJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    givenName: site.firstName,
    familyName: site.lastName,
    url: site.url,
    jobTitle: site.jobTitle,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: seo.location.locality,
      addressCountry: seo.location.countryCode,
    },
    sameAs: socials
      .map((social) => social.href)
      .filter((href) => !new URL(href).hostname.replace(/^www\./, "").endsWith(ownHost)),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
    />
  )
}
