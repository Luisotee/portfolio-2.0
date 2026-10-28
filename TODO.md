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
  - 🙋 Optional: click "Request indexing" for `https://www.luisotee.com/` under URL Inspection. Google last crawled it on 2026-10-13, before the new metadata. Only the Search Console UI can do this: the URL Inspection API is read-only, and the Indexing API only accepts job-posting and livestream pages.
- [x] **Say what Luis is looking for, and where he is.** `hero.status` shows two lines under the eyebrow: full-time, contract and B2B work, remote, hybrid or on-site; Essen, Germany (CET), EU citizen, open to relocation.
- [x] **Résumé link.** `/resume` redirects (307) to the PDF on Google Drive, which stays synced with the LaTeX source. It's linked from a hero button and a contact card; change `resume.driveUrl` in `content/site.ts` if the file ever moves.
- [x] **X cards must follow each page's Open Graph.** `app/layout.tsx` sets `twitter.title` and `twitter.description`. Next copies those from `openGraph` only when `twitter` has none (`postProcessMetadata` in `next/dist/lib/metadata/metadata-resolution-primitives.js`), so any future subpage that sets only `openGraph` would share on X with the home title. Reduce the root to `twitter: { card: "summary_large_image" }`. The home output stays the same. *(peer round 2026-10-27, alemoraru-research)*
- [x] **Tell the browser the site is dark.** There is no `viewport` export, so there's no `theme-color` and no `color-scheme` meta; `color-scheme: dark` exists only in CSS. Add `export const viewport = { themeColor: <the --background value>, colorScheme: "dark" }` to `app/layout.tsx`. *(mldangelo-research)*
- [x] **Cut repeated copy.** The Amazon Challenge card's `impact` lines repeated its `metric` word for word. Compact cards don't render `impact`, so dropping them is a data cleanup with no visible change; the file holds no other outcome to put there. *(mldangelo-research)*
- [x] **Achievement badges.** Dropped from the GitHub card: the research found they read as trivia to a hiring manager. *(mldangelo-research)*
- [x] **Show hand-kept GitHub counts as minimums.** `content/github.ts` counts (stars, forks, public repos) are kept by hand and render as floors ("125+ ★") through `formatFloor`, so they stay true as they grow. Keep each at or below GitHub's live count (public repos went 48 → 47 on 2026-10-27). *(mldangelo-research)*

## 2. Performance

- [x] **Hero shouldn't wait for JS.** The hero entrance is CSS now, so the server HTML shows it before hydration.
- [x] **Sections below the hero show without JS.** Elements that motion starts hidden (`Reveal`, `RevealItem`, archive rows, language bar segments) carry `data-reveal`, which an `@media (scripting: none)` rule in `globals.css` forces visible. It doesn't cover JS that is enabled but fails to load: those blocks still wait for hydration.
- [x] **Lighter analytics bundle.** posthog-js loads after the page is idle, out of first-load JS (377 → 273 KB gzipped, measured locally).

## 3. Content and hierarchy

- [x] **Proof above the fold.** The proof row sits in the first screen at 1440×900 and 390×844, and the headline says what Luis builds. The "where" part comes with the availability/status line task above (`hero.status` in `content/site.ts` renders under the eyebrow once set).
- [ ] **Metrics that are outcomes.** Some feature-card metrics described the work, not results. Synced with the résumé on 2026-10-27: Tapnote now shows its 10,000+ web users, Akdo the 50+ courses its LLM tools helped produce, and the merged Curupira & OCA IÊ card the résumé's 118 users and 8,900+ messages.
  - 🙋 Tapnote and Akdo cards say what was built but not what was hard. Luis supplies one concrete detail each (e.g. how Tapnote's RAG tutoring is grounded, how Akdo isolates tenants) to replace the generic `built` lines.
  - agent-mesh now shows 85+ PRs merged from mesh workers across 9 repos (counted on GitHub over `mesh/*` branches on 2026-10-27: 91 opened across 12 repos, 86 merged across 9, 49 of them in agent-mesh itself). Recount merged PRs and their repos with `gh api search/issues -f q='is:pr is:merged head:mesh/ involves:Luisotee'`, and keep the figure a floor.
  - Still work-shaped: Google Routes (565 merged lines), AI Agent Boilerplate (2,400+ tests) and TourLore (30 languages, pre-launch).
  - 🙋 Luis provides outcome figures as they appear, such as TourLore waitlist sign-ups.
- [ ] ⏸ **Later.** **Visuals for featured work.** The page has zero images, so about 6,000px of text-only cards is hard to skim. Add a screenshot, short clip or diagram per featured project. Design how they fit the cards.
  - 🙋 Luis provides material for anything behind a login (Tapnote web, Akdo, the bots' chats). Public sites can be captured by an agent.
- [x] **Short stints and the "3+ years" stat.** Contract and freelance roles now carry the résumé's labels: Terra Krya and the self-employed stint (Freelance), Tapnote, Underdogs and Awana (Contract). Akdo was full-time, so it stays unlabeled, as on the résumé. The "3+ years" stat still counts the Huawei internship, as the résumé does.
  - Luis decided on 2026-10-27 to keep counting the internship.
- [x] **Hiring-review edits (2026-10-27).** Experience now comes before Work, so roles start right after the hero. Curupira and OCA IÊ merged into one card; WAppAI moved to a compact card; 7 feature cards became 5. The hero row shows the bots' 8,900+ messages instead of repeating WAppAI's stars, and names Meta's challenge instead of "Amazon Challenge". The hero intro names Siemens Energy (Henkel stays on the Akdo card), and the meta description pitches full-stack and AI together. Dropped the SENTINEL take-home and the tutorial-era archive rows (Frontend Mentor challenges, to-do list, planner, Express starter).
- [ ] **Link the hero graph to Curupira's case study.** The graph now shows Curupira's architecture at a high level; link it to the case study once that page exists. Blocked on the case-study pages below.

## 4. Bigger additions

- [ ] ⏸ **Later.** **Case-study pages** for the strongest AI work, starting with Curupira and OCA IÊ. Cover the problem, the architecture, key decisions and the alternatives rejected, what went wrong and what changed, and results. For the bots, include evals, latency and cost per conversation. This is what AI hiring managers say sets candidates apart. Keep the content-as-data approach, and give each page its own link preview.
  - Repo research for Curupira, OCA IÊ and FleetView is done (2026-10-26) and kept outside this public repo. The repos give architecture, decisions and failures in detail, but no usage numbers, no LLM evals and no token or latency logging, so evals and cost per conversation need new instrumentation in the bots first. FleetView fits better as a section of a bot-fleet case study than as its own page.
  - 🙋 Luis provides the details the code can't tell you: numbers, eval results, and Terra Krya's OK to publish a case study.
  - **Design notes from the peer round (2026-10-27, all four `portfolios` peers):**
    - **Model:** typed TS in `content/case-studies.ts`, not MDX. A priority-1 project gets an optional `caseStudy` slug (a union type, so a typo fails the build). Fields: one `outcome` sentence reused for the card teaser, meta description, OG image and JSON-LD; `problem`; `constraints`; `architecture`; `decisions: { choice, why, rejected: { option, whyNot }[] }[]`; `wentWrong: { what, change }[]`; `results: Stat[]` shown first under the title and again at the end; optional evals/cost/latency `Stat`s that don't render until they exist; role, team, period; `published` and an `updated` ISO date.
    - **One publish gate.** A `publishedCaseStudies` list in `lib/` feeds `generateStaticParams`, the sitemap, card links, JSON-LD and the OG route, so an unapproved page can't leak anywhere.
    - **Route traps:** `dynamicParams` fails the build under `cacheComponents`; call `notFound()` for unknown slugs. The root `app/opengraph-image.tsx` applies to child routes, so `app/work/[slug]/opengraph-image.tsx` is required, with its own `generateStaticParams`. Don't spread the profile `openGraph` as is: set `type: "article"`, `url` and `alternates.canonical` per page. No `new Date()` in render, sitemap or JSON-LD; use `updated`. Format dates as UTC on the server.
    - **Page:** a ToC rendered on the server from section ids, prev/next between case studies (no "Related" until there are 4+), a "Read the case study" label in `labels`, `Article` JSON-LD with `author` → the Person `@id`, plus a `BreadcrumbList`.
- [ ] ⏸ **Later.** **A bot people can try.** A public demo of one of the bots, such as a Telegram demo bot, or failing that a short recording of a real conversation. Don't link the production Curupira or OCA IÊ bots: they are client deployments, not demos. A demo needs its own instance with demo data.
  - 🙋 Luis creates the bot account/token or records the conversation, and decides what the demo is allowed to do.
  - On hold (2026-10-27): Luis plans a bot that chats about his résumé or speaks as him, which may become this demo.
- [ ] ⏸ **Later.** **Writing.** Add 3–5 short notes on real problems, for example lessons from building WhatsApp agents, evals for a group-chat bot, or how agent-mesh works. Decide on the format and where it lives on the site.
  - 🙋 Luis writes or approves the content.
- [ ] ⏸ **Later.** **Testimonials.** Add one or two named quotes from Terra Krya or past clients/employers, with name, role and org.
  - 🙋 Luis collects the quotes and permission.
  - Model from the peer round: name, role, org, relationship (manager, peer or client), quote, source URL, date. One static block, no marquee. *(erlandv-case-research, chanhdai-research)*

## 5. Quality and SEO groundwork

From the peer research round of 2026-10-27 (`portfolios` group: `mldangelo-research`, `erlandv-case-research`, `alemoraru-research`, `chanhdai-research`). Ask them again with `mesh ask <name>`.

- [x] **Content tests and CI.** There is no test suite and no `.github/`; Vercel's build is the only gate and it doesn't lint. Add Vitest (node environment, no jsdom) with `content/content.test.ts`: unique project titles, every `href` parses and is `https:`, every priority 1/2 project has a `metric`, Mindprint and BrightConnect stay priority 3, archive filter counts match `lib/projects.ts`, `visibleRoles` fits the roles list. Add `.github/workflows/ci.yml` running lint, test, build, then `tsc` (build first, since it generates the route types). Update the "There is no test suite" line in `CLAUDE.md`. *(alemoraru, chanhdai, mldangelo)*
- [x] **Check site figures against the résumé.** Every number in a priority 1/2 `metric`, `impact` or `built` must appear in `../Resume/resume.tex`, or sit in a `Stat` that records where it came from (`source: { from, asOf }`). Strip years and ranges first. The Resume repo is private, so read the local checkout when it exists and skip the test otherwise (Vercel and CI won't have it). A dry run on 2026-10-27 found `experience.ts` in sync; the per-bot FleetView figures (34/84 users, 400/8,500 messages) and the 68 brigade docs need a `source`. *(mldangelo-research)*
  - Curupira's "68 brigade documents" comes from FleetView (confirmed by Luis on 2026-10-27) and is recorded in the project's `figureSources`.
- [x] **Linked structured data.** `components/person-json-ld.tsx` emits a Person with no `@id`. Give it `@id: ${site.url}/#person`, add a `WebSite` and a home `ProfilePage` whose `mainEntity` points at it, in one `@graph`, built in `lib/` with a shared `JsonLd` script component (keep the `<` escaping and the off-site `sameAs` filter). Type it with `schema-dts` (dev dependency). No `dateModified` from `new Date()`. *(chanhdai, mldangelo, erlandv-case)*

## Deliberately skipped

The research flagged these as gimmicks for this audience, so they're not on the list (a "chat with my résumé" bot was among them, but Luis plans one; see "A bot people can try"): ⌘K command palette, full PT/EN translation, 3D or gamified effects, sound or custom cursors, `llms.txt` (cheap but near-zero value; fine to add if a case-study pass touches it anyway).
