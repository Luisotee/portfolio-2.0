# TODO

The project's running task list. Add to it, and tick or remove items as they're done.

Tasks describe goals, not specs. Pick the approach you think is best, within the rules in `CLAUDE.md`.

**Flags**
- 🙋 **Needs owner:** you can't finish it without something from Luis, such as a file, a figure, a decision or an account action. Do the code side first and leave a clear placeholder, or ask.
- No flag: an agent can do it alone.

---

## 1. Quick fixes

- [ ] **Sharing and search basics.** Today a link shared on LinkedIn or Slack shows a bare URL. The site needs proper link previews (title, description, image), a canonical URL, robots, a sitemap and structured data describing Luis as a person. Use the Next 16 metadata file conventions.
- [ ] **One canonical domain.** The site is served at both `www.luisotee.com` and `portfolio-20-neon.vercel.app`. Make `www.luisotee.com` the only one that counts: a canonical tag at minimum, and a redirect if you can do it in code (e.g. a host-based redirect).
  - 🙋 *Optional:* if you'd rather redirect in Vercel's domain settings, Luis does that in the dashboard (the Vercel CLI isn't installed or logged in here).
- [ ] **Say what Luis is looking for, and where he is.** Nothing on the page says whether he's available, and the latest role ended Jun 2026 with no "Present" role after it. Add an availability/status line and the location (Essen, Germany · CET) somewhere above the fold. Make the CTAs read right for both hiring managers and clients.
  - 🙋 Luis decides: full-time, freelance or both, and the exact wording.
- [ ] **Résumé link.** Add a résumé download in the hero and/or contact section, at a stable URL.
  - 🙋 Luis provides the PDF (the LaTeX source lives in the sibling `Resume` repo).
- [ ] **Replace the "Website: luisotee.com" contact card.** That domain is this site, so the card links back to the page you're on. Use the slot for something useful, such as the résumé.
- [ ] **Archive order.** Mindprint, BrightConnect and the SENTINEL take-home are the 2nd–4th archive rows. Move them below the fold of the archive, behind "Show more", so stronger work shows first.
- [ ] **GitHub numbers drift.** WAppAI stars and forks are typed by hand in three places and already disagree (124/38 vs 125/39). Make them come from one place: fetch them at build time with caching, round them, or something else. The "Bing AI" wording in the WAppAI descriptions reads as dated, so refresh it.
  - 🙋 *Only if you fetch from the GitHub API and hit rate limits:* Luis adds a token to the Vercel env.
- [ ] **Small accessibility fixes.** The skip link is cramped and overlaps the LO logo when focused. Archive row links are announced as run-on text ("2026agent-meshClaude Code and…"). Also decide whether external links should open in a new tab.

## 2. Performance

- [ ] **Hero shouldn't wait for JS.** The server HTML starts the hero name and intro at opacity 0 or translated off-screen. Mobile LCP is 3.8s, measured on the intro paragraph. Make the above-the-fold content visible without JS while keeping a tasteful entrance.
- [ ] **Lighter analytics bundle.** posthog-js, including session replay, is imported eagerly in `instrumentation-client.ts` and ends up in the main first-load chunk. The page ships about 330 KB of gzipped JS for static content. Defer it or slim it down without losing the analytics we rely on. Keep the cookieless setup and the `/ingest` proxy working.

## 3. Content and hierarchy

- [ ] **Proof above the fold.** At 1440px the first screen is the name, a generic line and a decorative graph. The strongest proof (30,000+ subscribers, 3rd place in the Amazon Challenge) sits below it, and further down on mobile. Rework the hero so a recruiter gets who, what, where and the best proof in about five seconds. Sharpen the headline copy while you're there.
- [ ] **Metrics that are outcomes.** Some feature-card metrics describe the work, not results: "Multi-tenant" (Akdo), "Merged" (Google Routes). Tapnote's 30k counts users of the app it extends. Reframe or replace these.
  - 🙋 Luis provides real figures where they exist, such as users, adoption or time saved.
- [ ] **Visuals for featured work.** The page has zero images, so about 6,000px of text-only cards is hard to skim. Add a screenshot, short clip or diagram per featured project. Design how they fit the cards.
  - 🙋 Luis provides material for anything behind a login (Tapnote web, Akdo, the bots' chats). Public sites can be captured by an agent.
- [ ] **Stale project copy.** akdo.ai now calls itself "The AI Safety and Procedure Platform", which doesn't match the "Enterprise Training Platform" card. web.tapnote.app opens on a login page, so make clear there's no public demo.
  - 🙋 Luis confirms how the Akdo work should be described.
- [ ] **Short stints and the "3+ years" stat.** Tapnote (5 months) and Akdo (7 months) read as short stays. Label the contract roles as contracts if they were. The "3+ years" stat counts the Huawei internship.
  - 🙋 Luis confirms the contract types and how he wants the years framed.
- [ ] **Location consistency.** Check that the location copy across the site, metadata and structured data agrees with Essen, Germany, including the experience intro and the role entries.
  - 🙋 Luis approves any change to how past roles are described.
- [ ] **Hero graph with a purpose.** The agent graph is decorative today (product → frontend/api/…). Consider making it show the real architecture of a shipped bot, linking to that bot's case study once one exists.

## 4. Bigger additions

- [ ] **Case-study pages** for the strongest AI work, starting with Curupira and OCA IÊ. Cover the problem, the architecture, key decisions and the alternatives rejected, what went wrong and what changed, and results. For the bots, include evals, latency and cost per conversation. This is what AI hiring managers say sets candidates apart. Keep the content-as-data approach, and give each page its own link preview.
  - 🙋 Luis provides the details the code can't tell you: decisions, failures, numbers, eval results.
- [ ] **A bot people can try.** A public demo of one of the bots, such as a Telegram demo bot, or failing that a short recording of a real conversation.
  - 🙋 Luis creates the bot account/token or records the conversation, and decides what the demo is allowed to do.
- [ ] **Writing.** Add 3–5 short notes on real problems, for example lessons from building WhatsApp agents, evals for a group-chat bot, or how agent-mesh works. Decide on the format and where it lives on the site.
  - 🙋 Luis writes or approves the content.
- [ ] **Testimonials.** Add one or two named quotes from Terra Krya or past clients/employers, with name, role and org.
  - 🙋 Luis collects the quotes and permission.
- [ ] **Languages note.** Add a one-line mention of the languages Luis works in (e.g. English, Portuguese) near the contact section. Don't build full translation.

## Deliberately skipped

The research flagged these as gimmicks for this audience, so they're not on the list: "chat with my portfolio" bot, ⌘K command palette, full PT/EN translation, 3D or gamified effects, sound or custom cursors, `llms.txt` (cheap but near-zero value; fine to add if a case-study pass touches it anyway).
