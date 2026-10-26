"use client"

import { motion, stagger, type Variants } from "motion/react"

export const EASE_OUT = [0.2, 0.8, 0.2, 1] as const

/** Fade up. `custom` is an optional delay, only used when the element animates on its own. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay?: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT, ...(delay ? { delay } : {}) },
  }),
}

const elements = {
  div: motion.div,
  li: motion.li,
  ul: motion.ul,
  ol: motion.ol,
  p: motion.p,
  article: motion.article,
}

type RevealProps = {
  as?: keyof typeof elements
  className?: string
  children?: React.ReactNode
  /** Seconds before the animation starts. */
  delay?: number
}

// Above-the-fold content uses CSS entrances (animate-rise) instead, so it shows before JS.
const trigger = { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.15 } } as const

/** Fades a single element up into place. */
export function Reveal({ as = "div", className, children, delay = 0 }: RevealProps) {
  const Element = elements[as] as typeof motion.div
  return (
    <Element className={className} variants={fadeUp} custom={delay} {...trigger}>
      {children}
    </Element>
  )
}

/** Staggers the `RevealItem`s inside it. */
export function RevealGroup({
  as = "div",
  className,
  children,
  delay = 0,
  gap = 0.08,
}: RevealProps & { gap?: number }) {
  const Element = elements[as] as typeof motion.div
  return (
    <Element
      className={className}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren: stagger(gap, { startDelay: delay }) } },
      }}
      {...trigger}
    >
      {children}
    </Element>
  )
}

export function RevealItem({ as = "div", className, children }: Omit<RevealProps, "delay">) {
  const Element = elements[as] as typeof motion.div
  return (
    <Element className={className} variants={fadeUp}>
      {children}
    </Element>
  )
}
