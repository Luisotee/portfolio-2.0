"use client"

import { motion, stagger } from "motion/react"

import { hero } from "@/content/site"

const CENTER = 240
// Node centers on a hexagon around the core, clockwise from the top.
const POSITIONS = [
  [240, 74],
  [384, 157],
  [384, 323],
  [240, 406],
  [96, 323],
  [96, 157],
] as const

const PACKET_DURATION = 2.6

/** Decorative diagram: product at the core, the layers around it, packets flowing along the edges. */
export function AgentGraph() {
  const nodes = hero.graph.nodes.slice(0, POSITIONS.length).map((label, i) => {
    const [x, y] = POSITIONS[i]
    return { label, x, y, outbound: i % 2 === 0 }
  })

  return (
    <div className="motion-safe:animate-float">
      <svg viewBox="0 0 480 480" className="block w-full overflow-visible">
        <g className="origin-[240px_240px] motion-safe:animate-orbit">
          <circle cx={CENTER} cy={CENTER} r="212" fill="none" className="stroke-foreground/12" strokeDasharray="2 10" />
          <circle cx={CENTER} cy="28" r="3.5" className="fill-primary" />
        </g>
        <g className="origin-[240px_240px] motion-safe:animate-orbit-slow">
          <circle cx={CENTER} cy={CENTER} r="128" fill="none" className="stroke-foreground/8" />
          <circle cx="368" cy={CENTER} r="2.5" className="fill-foreground" />
        </g>

        {nodes.map((node) => (
          <line
            key={`edge-${node.label}`}
            x1={CENTER}
            y1={CENTER}
            x2={node.x}
            y2={node.y}
            className="stroke-foreground/25"
            strokeDasharray="3 7"
          />
        ))}

        {/* Packets travel by translating along each straight edge. Hidden for reduced motion. */}
        <g className="motion-reduce:hidden">
          {nodes.map((node, i) => {
            const dx = node.x - CENTER
            const dy = node.y - CENTER
            const timing = {
              duration: PACKET_DURATION,
              repeat: Infinity,
              delay: i * 0.45,
              ease: [0.45, 0, 0.55, 1] as const,
            }
            return (
              <motion.circle
                key={`packet-${node.label}`}
                cx={CENTER}
                cy={CENTER}
                r="3.5"
                className="fill-primary"
                initial={{ opacity: 0 }}
                animate={{
                  x: node.outbound ? [0, dx] : [dx, 0],
                  y: node.outbound ? [0, dy] : [dy, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  x: timing,
                  y: timing,
                  opacity: { ...timing, ease: "linear", times: [0, 0.12, 0.88, 1] },
                }}
              />
            )
          })}
        </g>

        <motion.g
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { delayChildren: stagger(0.1, { startDelay: 0.5 }) } } }}
          className="font-mono text-xs"
          textAnchor="middle"
        >
          {nodes.map((node) => (
            <motion.g
              key={node.label}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } },
              }}
            >
              <rect
                x={node.x - 44}
                y={node.y - 16}
                width="88"
                height="32"
                rx="16"
                className="fill-popover stroke-foreground/20"
              />
              <text x={node.x} y={node.y + 4} className="fill-foreground">
                {node.label}
              </text>
            </motion.g>
          ))}
        </motion.g>

        <circle
          cx={CENTER}
          cy={CENTER}
          r="46"
          fill="none"
          strokeWidth="1.5"
          className="origin-center stroke-primary transform-fill motion-safe:animate-pulse-ring"
        />
        <circle cx={CENTER} cy={CENTER} r="46" className="fill-primary" />
        <text
          x={CENTER}
          y={CENTER + 5}
          textAnchor="middle"
          className="fill-primary-foreground font-mono text-[13px] font-medium"
        >
          {hero.graph.core}
        </text>
      </svg>
    </div>
  )
}
