"use client"

import { Check, Copy } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { labels } from "@/content/site"

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      return
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 1800)
  }

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={copy}
      className="h-12 rounded-full border-foreground/18 px-5 font-mono text-sm hover:border-foreground/30 data-[copied=true]:border-primary data-[copied=true]:bg-primary data-[copied=true]:text-primary-foreground"
      data-copied={copied}
    >
      {copied ? <Check data-icon="inline-start" /> : <Copy data-icon="inline-start" />}
      <span aria-live="polite">{copied ? labels.copied : labels.copyEmail}</span>
    </Button>
  )
}
