import { DashList } from "@/components/dash-list"
import { Reveal } from "@/components/motion/reveal"
import { TagList } from "@/components/tag-list"
import type { Role } from "@/content/types"

/** One timeline entry: dates, rail with dot, then the role. */
export function RoleItem({ role }: { role: Role }) {
  return (
    <Reveal
      as="li"
      className="group/role grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4.5 border-t py-9 md:grid-cols-[minmax(0,13.75rem)_1.75rem_minmax(0,1fr)] md:gap-x-7"
    >
      <div className="col-start-2 row-start-1 flex flex-col gap-1 pb-3 font-mono text-sm text-muted-foreground md:col-start-1 md:pt-1.5 md:pb-0">
        <span>{role.period}</span>
        <span className="text-faint">{role.where}</span>
      </div>

      <div aria-hidden className="relative col-start-1 row-span-2 row-start-1 flex justify-center md:col-start-2 md:row-span-1">
        <span className="absolute top-0 -bottom-9 w-px bg-border" />
        <span className="relative mt-2.5 size-2.75 rounded-full border-[1.5px] border-primary bg-background transition-transform duration-400 ease-out-expo group-hover/role:scale-125 group-hover/role:bg-primary" />
      </div>

      <div className="col-start-2 flex min-w-0 flex-col gap-4 md:col-start-3 md:row-start-1">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5">
          <h3 className="font-display text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
            {role.company}
          </h3>
          <span className="text-soft">{role.role}</span>
        </div>
        <DashList
          items={role.highlights}
          className="grid gap-x-8 gap-y-3 text-[0.9375rem] text-soft lg:grid-cols-2"
        />
        <TagList tags={role.stack} variant="secondary" />
      </div>
    </Reveal>
  )
}
