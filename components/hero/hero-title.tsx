"use client"

import { motion, stagger } from "motion/react"

import { site } from "@/content/site"
import { cn } from "@/lib/utils"

const letter = {
  hidden: { y: "108%" },
  visible: { y: 0, transition: { duration: 1.1, ease: [0.16, 0.84, 0.24, 1] as const } },
}

function Letters({ text, className }: { text: string; className?: string }) {
  return [...text].map((char, i) => (
    <motion.span key={i} variants={letter} className={cn("inline-block", className)}>
      {char}
    </motion.span>
  ))
}

/** The name, rising letter by letter. Screen readers get the plain name. */
export function HeroTitle() {
  return (
    <motion.h1
      id="hero-title"
      className="font-display text-hero"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { delayChildren: stagger(0.05, { startDelay: 0.12 }) } } }}
    >
      <span className="sr-only">{site.name}</span>
      {/* The clip lets each letter rise from below the baseline. */}
      <span aria-hidden className="block">
        <span className="inline-block overflow-hidden pe-[0.08em] pb-[0.06em] align-top">
          <Letters text={site.firstName} />
        </span>
      </span>
      {/* nowrap keeps the period on the same line as the last name. */}
      <span aria-hidden className="block">
        <span className="inline-block overflow-hidden pe-[0.08em] pb-[0.06em] align-top whitespace-nowrap">
          <Letters text={site.lastName} className="text-outline" />
          <Letters text="." className="text-primary" />
        </span>
      </span>
    </motion.h1>
  )
}
