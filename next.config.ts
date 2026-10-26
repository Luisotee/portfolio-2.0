import type { NextConfig } from "next";

import { site } from "./content/site";

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
  // The Vercel production alias serves the same site; send it to the canonical domain.
  // Exact host only, so preview deployments on other *.vercel.app hosts keep working.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "portfolio-20-neon.vercel.app" }],
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
