# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Single-page personal portfolio: Next.js 16 (App Router, Turbopack, `cacheComponents` on), Tailwind CSS v4, shadcn/ui on **Base UI** (not Radix), Motion (`motion/react`). Use pnpm for everything.

Next.js 16 has breaking changes compared with older versions. Before using an unfamiliar Next API, read the bundled docs in `node_modules/next/dist/docs/` (see `AGENTS.md`).

## Commands

```bash
pnpm dev                     # dev server
pnpm build                   # production build; also type-checks
pnpm start                   # serve the build
pnpm lint                    # eslint
pnpm test                    # vitest: content invariants (node only, no DOM)
pnpm exec tsc --noEmit       # type-check only (LayoutProps types appear after a dev/build run)
pnpm dlx shadcn@latest add <component>
```

`pnpm test` runs `content/*.test.ts` in Node: plain data checks, no component tests. CI (`.github/workflows/ci.yml`) runs lint, test, build, then `tsc` on every push to `main` and every PR.

`content/claims.test.ts` checks featured figures against the private résumé. It reads `RESUME_TEX`, or `../Resume/resume.tex` next to the repo, and is skipped when neither exists (CI and Vercel). Run it locally with `RESUME_TEX=~/projects/Resume/resume.tex pnpm test` from a worktree.

## Tasks

`TODO.md` is the project's running task list. Tasks there are goals, not specs, so choose the implementation within the rules in this file. A task flagged 🙋 needs something from Luis, such as a file, a figure, a decision or an account action. Build the code side and leave a clear placeholder, or ask. Tick or remove a task when it's done, and add new ones as they come up.

## Deployment

Vercel deploys `main` automatically. The canonical domain is `www.luisotee.com`; `portfolio-20-neon.vercel.app` serves the same site.

## Architecture

**Content is data, components only render it.** All copy lives in typed files in `content/`, with types in `content/types.ts`:
- `projects.ts` holds every project.
- `experience.ts` holds roles, `visibleRoles` and education.
- `stack.ts` holds the stack groups, the marquee band words and the hero ticker.
- `github.ts` holds stats, pinned languages and repos.
- `site.ts` holds identity, hero, nav, section headings, socials and `labels`. `labels` is the interface copy such as "Problem" or "Copy email".

Adding an entry should never require touching a component. Keep it that way, and put new copy in `content/` rather than in JSX.

**Copy rules.** This repo is public.
- Luis's location is Essen, Germany (CET/CEST). Use that wherever copy, metadata or structured data gives a location or timezone.
- Brazil as where Luis is from or has worked (Huawei, freelance, Terra Krya) is fine to mention. He is an EU citizen.
- Every figure on a priority 1/2 card (`metric`, `impact`, `built`) is on the résumé, or sits in a `Stat` whose `source` says where it came from (`{ from, asOf }`). A figure in `built` or `impact` records its source in the project's `figureSources`. Never change a figure to make the check pass.
- Mindprint and BrightConnect Voicebot are throwaway projects. Keep them as priority 3 archive rows and never feature them.

**Project priority system.** `Project` is a union keyed on `priority`. `lib/projects.ts` derives every view from it:
- `1` renders as `FeatureCard`.
- `2` renders as `CompactCard`.
- `3` renders as an archive row in `ProjectArchive`.

Feature and compact cards share one running number (01, 02, …), with priority 1 first. Archive filters ("All" plus each tag, with counts) are built only from priority 3 tags. Archive rows flagged `minor: true` sort after all others, so they stay behind "Show more".

**Page composition.** `app/page.tsx` stacks the sections. Each section in `components/<section>/` is a server component that pulls its heading from `sections` in `site.ts` through `SectionHeading`. Client components are limited to state and motion: `ProjectArchive`, `RolesList`, `MobileNav`, `CopyEmailButton`, `LanguageBar` and `components/motion/*`. `ListRow` renders the archive rows.

**Structured data.** `lib/json-ld.ts` builds the schema.org nodes, typed with `schema-dts`. The layout emits none: each page renders its own `<JsonLd data={jsonLdGraph(...pageNodes)} />`, which adds the site-wide Person and WebSite, so a new route must opt in. Pages reference the Person by `@id` and never repeat it. Don't add dates from `new Date()`.

**Links.** External links open in the same tab: no `target="_blank"`. Visitors who want a new tab can middle-click or ⌘-click, and Back restores the page from the back-forward cache.

## Styling rules

- **`app/globals.css` is the only stylesheet.** Use Tailwind utilities and shadcn tokens; no inline `style=` and no other CSS files. Theme values, `@keyframes`/`--animate-*` and the few `@utility` effects (`text-outline`, `bg-grid`, `animation-paused`) live there.
  - The one exception is `app/opengraph-image.tsx`. `ImageResponse` only understands inline style objects, so leave its `style={{…}}` and its palette constant (a mirror of `:root`) as they are.
- **The site is dark only.** The palette is in `:root`, and `<html>` carries the `dark` class so shadcn's `dark:` variants apply. The brand accent is `primary`, `#C8F560`. Extra tokens: `soft` (body copy), `faint` (labels), `elevated` (card hover) and `lang-*` (language colors).
- **Display sizes** are theme tokens `text-hero`, `text-section` and `text-contact`. A new custom `text-*` size must also be registered in `lib/utils.ts`. Without that, `cn` treats it as a color and drops it in merges.
- **Imports:** `cn` is created with `createCn` from the `cn` package, not clsx/tailwind-merge. Generated `components/ui/*` files are switched to import from `@/lib/utils`; do the same for newly added shadcn components.
- **Language bar widths:** these use dynamic `grow-<n>` classes, safelisted by `@source inline("grow-{1..12}")` in `globals.css`.

## Motion rules

- **Animate only transform and opacity.** Generated shadcn components had `transition-all`/`transition` swapped for `transition-transform` or `transition-[transform,opacity]`, so hover color changes are instant. Re-apply that change to any new shadcn component.
- **Reduced motion:** `MotionProvider` sets `MotionConfig reducedMotion="user"`. CSS loops must use `motion-safe:animate-*`, and purely decorative motion can use `motion-reduce:hidden`.
- **Scroll reveals** use `Reveal`, or `RevealGroup` + `RevealItem` for staggers, from `components/motion/reveal.tsx`.
- **Above-the-fold entrances are CSS**, so the server HTML shows before JS loads: `motion-safe:animate-rise` (or `animate-letter`, `animate-packet`) plus tw-animate-css's `delay-*` (`animate-rise-sm` for small nested items). Those animations live in an `@theme inline` block so `--tw-animation-delay` resolves on the element; keep new ones there. Delay classes must be literal, or safelisted like `delay-{0..1000..50}`.
- **Stagger delays:** child variants must not set their own `delay`, because that overrides the parent's `delayChildren: stagger()`.

## Base UI / shadcn notes

- **Polymorphism** uses `render` rather than `asChild`. A Button rendered as a link needs `render={<a href=… />}` plus `nativeButton={false}`.
- **ToggleGroup** `value` is an array, and clicking the active item yields `[]`. `ProjectArchive` ignores that so one filter is always selected.
- **`SheetClose` with an `<a>`** gets `role="button"`. The mobile nav therefore uses plain links that close a controlled `Sheet`.
- **`Card` is a plain `div`** with no `render` prop. Wrap it in `Reveal as="article"` for semantics, and resize its padding with `[--card-spacing:--spacing(n)]`.

## Analytics

- **PostHog** is initialized in `instrumentation-client.ts`, in production only and only when `NEXT_PUBLIC_POSTHOG_KEY` is set (see `.env.example`). posthog-js is loaded with a dynamic `import()` at the first idle moment (`requestIdleCallback`, 1.5 s timeout), so it stays out of first-load JS; keep it that way rather than importing it statically. Trade-off: anything before init, usually the first second or so (an instant bounce, a very fast click), isn't captured, and replays start at init. It runs with `cookieless_mode: "always"`. Autocapture records clicks, page views, scroll depth, heatmaps and replays, so components need no tracking code.
- **Proxy:** PostHog requests go through the `/ingest` rewrites in `next.config.ts`, to EU Cloud. `skipTrailingSlashRedirect` has to stay on, or capture breaks.
- **Vercel:** `<Analytics />` and `<SpeedInsights />` sit in `app/layout.tsx`. Both are cookieless.
- **No consent banner** is needed only while nothing is stored on the device. Don't call `posthog.identify()`, and don't add cookies or localStorage tracking, without adding a consent banner first.
