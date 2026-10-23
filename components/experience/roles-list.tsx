"use client"

import { useState } from "react"

import { RoleItem } from "@/components/experience/role-item"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { roles, visibleRoles } from "@/content/experience"
import { labels } from "@/content/site"

/** The timeline; roles past `visibleRoles` sit behind a toggle. */
export function RolesList() {
  const [open, setOpen] = useState(false)
  const shown = roles.slice(0, visibleRoles)
  const earlier = roles.slice(visibleRoles)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <ol className="flex flex-col">
        {shown.map((role) => (
          <RoleItem key={role.company} role={role} />
        ))}
      </ol>
      {earlier.length > 0 && (
        <>
          <CollapsibleContent render={<ol className="flex flex-col" />}>
            {earlier.map((role) => (
              <RoleItem key={role.company} role={role} />
            ))}
          </CollapsibleContent>
          <div className="border-t pt-7">
            <CollapsibleTrigger
              render={
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full border-foreground/18 px-5.5 font-mono text-sm hover:border-foreground/30"
                />
              }
            >
              {open ? labels.showFewerRoles : labels.showEarlierRoles(earlier.length)}
            </CollapsibleTrigger>
          </div>
        </>
      )}
    </Collapsible>
  )
}
