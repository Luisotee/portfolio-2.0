const key = process.env.NEXT_PUBLIC_POSTHOG_KEY

// Production only, so local dev doesn't pollute the data. Cookieless: nothing is stored on the
// device and visitors are counted by a daily-salted hash on PostHog's servers, so no consent banner.
if (key && process.env.NODE_ENV === "production") {
  // posthog-js is ~100 KB gzipped; load it once the page is idle so it stays out of first-load JS
  // and off the main thread during hydration. init still sends the pageview.
  const load = () => {
    void import("posthog-js").then(({ default: posthog }) => {
      posthog.init(key, {
        api_host: "/ingest",
        ui_host: "https://eu.posthog.com",
        defaults: "2026-08-30",
        cookieless_mode: "always",
      })
    })
  }
  const whenIdle = () =>
    "requestIdleCallback" in window ? requestIdleCallback(load, { timeout: 3000 }) : setTimeout(load, 1000)

  if (document.readyState === "complete") whenIdle()
  else window.addEventListener("load", whenIdle, { once: true })
}
