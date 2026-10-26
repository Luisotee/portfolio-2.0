import type { Metadata } from "next"

import { seo, site } from "@/content/site"

// Metadata merges shallowly, so a page that sets openGraph must spread this to keep the shared fields.
export const openGraph = {
  type: "profile",
  siteName: site.name,
  title: site.title,
  description: site.description,
  locale: seo.locale,
  firstName: site.firstName,
  lastName: site.lastName,
  username: site.handle,
} satisfies Metadata["openGraph"]
