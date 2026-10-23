import { LanguageDot } from "@/components/github/language-dot"
import { ListRow } from "@/components/list-row"
import { LiveDot } from "@/components/live-dot"
import { recentRepos } from "@/content/github"
import { labels } from "@/content/site"

export function RecentActivity() {
  return (
    <div className="overflow-hidden rounded-3xl border border-foreground/9">
      <h3 className="flex items-center gap-2.5 border-b border-foreground/8 px-6.5 py-4.5 font-mono text-xs tracking-widest text-faint uppercase">
        <LiveDot /> {labels.recentlyActive}
      </h3>
      <ul>
        {recentRepos.map((repo) => (
          <li key={repo.name} className="border-b border-foreground/6 last:border-b-0">
            <ListRow
              href={repo.href}
              lead={repo.when}
              title={repo.name}
              description={repo.desc}
              mono
              className="px-6.5 py-5"
              meta={
                <span className="inline-flex items-center gap-2">
                  <LanguageDot lang={repo.lang} />
                  {repo.lang}
                </span>
              }
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
