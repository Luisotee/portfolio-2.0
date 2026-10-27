import type { Graph, Person, ProfilePage, Thing, WebSite } from "schema-dts"

import { seo, site, socials } from "@/content/site"

// Stable node ids, so pages reference the Person and WebSite instead of repeating them.
const personId = `${site.url}/#person`
const websiteId = `${site.url}/#website`

/** Absolute http(s) links to somewhere other than this site's own domain. */
function isOffSite(href: string) {
  if (!URL.canParse(href)) return false
  const { protocol, hostname } = new URL(href)
  const isOwn = hostname === site.domain || hostname.endsWith(`.${site.domain}`)
  return (protocol === "https:" || protocol === "http:") && !isOwn
}

/** Profiles on this site's own domain are left out of `sameAs`. */
function personNode() {
  return {
    "@type": "Person",
    "@id": personId,
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
    sameAs: socials.map((social) => social.href).filter(isOffSite),
  } satisfies Person
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": personId },
    author: { "@id": personId },
  } satisfies WebSite
}

/** The home page. Its id and url match the rendered canonical. */
export function profilePageNode() {
  return {
    "@type": "ProfilePage",
    "@id": site.url,
    url: site.url,
    name: site.title,
    description: site.description,
    inLanguage: "en",
    isPartOf: { "@id": websiteId },
    mainEntity: { "@id": personId },
  } satisfies ProfilePage
}

/** One graph per page: the site-wide Person and WebSite, then the page's own nodes. */
export function jsonLdGraph(...pageNodes: Thing[]): Graph {
  return {
    "@context": "https://schema.org",
    "@graph": [personNode(), websiteNode(), ...pageNodes],
  }
}
