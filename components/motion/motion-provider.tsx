"use client"

import { MotionConfig } from "motion/react"

/** Follows the OS reduced-motion setting: transforms are skipped, opacity fades remain. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
