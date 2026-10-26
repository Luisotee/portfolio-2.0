# TODO

The project's running task list. Add to it, and tick or remove items as they're done.

Tasks describe goals, not specs. Pick the approach you think is best, within the rules in `CLAUDE.md`.

**Flags**
- 🙋 **Needs owner:** you can't finish it without something from Luis, such as a file, a figure, a decision or an account action. Do the code side first and leave a clear placeholder, or ask.
- ⏸ **Later:** parked by Luis; don't start it unasked.
- No flag: an agent can do it alone.

---

## 1. Quick fixes

- [x] **Search Console.** Domain property `sc-domain:luisotee.com` is verified (Cloudflare TXT record) and owned by Luis's Google account. `/sitemap.xml` was submitted on 2026-10-26 and read with no errors.
  - 🙋 Optional: click "Request indexing" for `https://www.luisotee.com/` under URL Inspection. Google last crawled it on 2026-10-13, before the new metadata.
- [x] **Say what Luis is looking for, and where he is.** `hero.status` shows two lines under the eyebrow: contract and B2B work, remote, hybrid or on-site; Essen, Germany (CET), EU citizen, open to relocation.
- [x] **Résumé link.** `/resume` redirects (307) to the PDF on Google Drive, which stays synced with the LaTeX source. It's linked from a hero button and a contact card; change `resume.driveUrl` in `content/site.ts` if the file ever moves.

## 2. Performance

- [x] **Hero shouldn't wait for JS.** The hero entrance is CSS now, so the server HTML shows it before hydration.
- [x] **Sections below the hero show without JS.** Elements that motion starts hidden (`Reveal`, `RevealItem`, archive rows, language bar segments) carry `data-reveal`, which an `@media (scripting: none)` rule in `globals.css` forces visible. It doesn't cover JS that is enabled but fails to load: those blocks still wait for hydration.
- [x] **Lighter analytics bundle.** posthog-js loads after the page is idle, out of first-load JS (377 → 273 KB gzipped, measured locally).

## 3. Content and hierarchy

- [x] **Proof above the fold.** The proof row sits in the first screen at 1440×900 and 390×844, and the headline says what Luis builds. The "where" part comes with the availability/status line task above (`hero.status` in `content/site.ts` renders under the eyebrow once set).
- [ ] **Metrics that are outcomes.** Some feature-card metrics describe the work, not results: "Multi-tenant" (Akdo), "Merged" (Google Routes). Tapnote's 30k counts users of the app it extends. Reframe or replace these.
  - 🙋 Luis provides real figures where they exist, such as users, adoption or time saved.
  - Curupira and OCA IÊ now show FleetView's message totals (2026-10-26). Akdo, Google Routes and Tapnote are still open.
- [ ] ⏸ **Later.** **Visuals for featured work.** The page has zero images, so about 6,000px of text-only cards is hard to skim. Add a screenshot, short clip or diagram per featured project. Design how they fit the cards.
  - 🙋 Luis provides material for anything behind a login (Tapnote web, Akdo, the bots' chats). Public sites can be captured by an agent.
- [ ] **Short stints and the "3+ years" stat.** Tapnote (5 months) and Akdo (7 months) read as short stays. Label the contract roles as contracts if they were. The "3+ years" stat counts the Huawei internship.
  - 🙋 Luis confirms the contract types and how he wants the years framed.
- [ ] **Link the hero graph to Curupira's case study.** The graph now shows Curupira's architecture at a high level; link it to the case study once that page exists. Blocked on the case-study pages below.

## 4. Bigger additions

- [ ] ⏸ **Later.** **Case-study pages** for the strongest AI work, starting with Curupira and OCA IÊ. Cover the problem, the architecture, key decisions and the alternatives rejected, what went wrong and what changed, and results. For the bots, include evals, latency and cost per conversation. This is what AI hiring managers say sets candidates apart. Keep the content-as-data approach, and give each page its own link preview.
  - Repo research for Curupira, OCA IÊ and FleetView is done (2026-10-26) and kept outside this public repo. The repos give architecture, decisions and failures in detail, but no usage numbers, no LLM evals and no token or latency logging, so evals and cost per conversation need new instrumentation in the bots first. FleetView fits better as a section of a bot-fleet case study than as its own page.
  - 🙋 Luis provides the details the code can't tell you: numbers, eval results, and Terra Krya's OK to publish a case study.
- [ ] **A bot people can try.** A public demo of one of the bots, such as a Telegram demo bot, or failing that a short recording of a real conversation. Don't link the production Curupira or OCA IÊ bots: they are client deployments, not demos. A demo needs its own instance with demo data.
  - 🙋 Luis creates the bot account/token or records the conversation, and decides what the demo is allowed to do.
- [ ] ⏸ **Later.** **Writing.** Add 3–5 short notes on real problems, for example lessons from building WhatsApp agents, evals for a group-chat bot, or how agent-mesh works. Decide on the format and where it lives on the site.
  - 🙋 Luis writes or approves the content.
- [ ] ⏸ **Later.** **Testimonials.** Add one or two named quotes from Terra Krya or past clients/employers, with name, role and org.
  - 🙋 Luis collects the quotes and permission.

## Deliberately skipped

The research flagged these as gimmicks for this audience, so they're not on the list: "chat with my portfolio" bot, ⌘K command palette, full PT/EN translation, 3D or gamified effects, sound or custom cursors, `llms.txt` (cheap but near-zero value; fine to add if a case-study pass touches it anyway).
