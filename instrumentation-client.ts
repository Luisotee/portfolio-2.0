import posthog from "posthog-js"

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY

// Production only, so local dev doesn't pollute the data. Cookieless: nothing is stored on the
// device and visitors are counted by a daily-salted hash on PostHog's servers, so no consent banner.
if (key && process.env.NODE_ENV === "production") {
  posthog.init(key, {
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    defaults: "2026-08-30",
    cookieless_mode: "always",
  })
}
