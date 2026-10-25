# Portfolio

Next.js (App Router) · Tailwind CSS v4 · shadcn/ui (Base UI) · Motion.

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build && pnpm start
pnpm lint
```

## Editing content

All copy lives in typed files in `content/`. Components only render it.

- `content/projects.ts`: `priority: 1` is a feature card, `2` a compact card, `3` an archive row. Archive filters come from the tags of priority 3 entries.
- `content/experience.ts`: roles past `visibleRoles` sit behind the "Show earlier roles" toggle. Education is here too.
- `content/stack.ts`: stack groups, the big marquee words and the hero ticker.
- `content/github.ts`: stats, achievements, pinned languages, pinned repos.
- `content/site.ts`: name, email, hero, nav, section headings, socials and interface labels.

## Theme

Colors, fonts, display sizes and keyframes are shadcn/Tailwind theme tokens in `app/globals.css`. It is the only stylesheet.
