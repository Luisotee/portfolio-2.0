import type { NextConfig } from "next";

import { resume, site } from "./content/site";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Production also answers on its *.vercel.app aliases; send every other host to the canonical
  // domain. Only production builds get the rule, so preview deployments and local dev keep working.
  async redirects() {
    // Not permanent, so browsers don't cache it and the Drive link can change.
    const resumeRedirect = { source: resume.path, destination: resume.driveUrl, permanent: false };
    if (process.env.VERCEL_ENV !== "production") return [resumeRedirect];
    return [
      resumeRedirect,
      {
        source: "/:path*",
        missing: [{ type: "host", value: new URL(site.url).host }],
        destination: `${site.url}/:path*`,
        permanent: true,
      },
    ];
  },
  // Proxy PostHog through our own domain so ad blockers don't drop events.
  async rewrites() {
    return [
      { source: "/ingest/static/:path*", destination: "https://eu-assets.i.posthog.com/static/:path*" },
      { source: "/ingest/array/:path*", destination: "https://eu-assets.i.posthog.com/array/:path*" },
      { source: "/ingest/:path*", destination: "https://eu.i.posthog.com/:path*" },
    ];
  },
  // PostHog's API uses trailing slashes (/e/); redirecting them breaks capture.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
