import { hero } from "@/content/site"
import { cn } from "@/lib/utils"

const CENTER = 240
// Node centers on a hexagon around the core, clockwise from the top. Each is 166 units from the
// core, the distance the packet keyframe travels.
const POSITIONS = [
  [240, 74],
  [384, 157],
  [384, 323],
  [240, 406],
  [96, 323],
  [96, 157],
] as const

// Literal classes so Tailwind sees them. Packets leave 0.45s apart; labels rise after the core.
const PACKET_DELAYS = ["delay-0", "delay-450", "delay-900", "delay-1350", "delay-1800", "delay-2250"]
const LABEL_DELAYS = ["delay-300", "delay-350", "delay-400", "delay-450", "delay-500", "delay-550"]

/** Decorative diagram: product at the core, the layers around it, packets flowing along the edges. */
export function AgentGraph() {
  const nodes = hero.graph.nodes.slice(0, POSITIONS.length).map((label, i) => {
    const [x, y] = POSITIONS[i]
    // Rotation that turns the upward packet path onto this edge.
    const angle = (Math.atan2(x - CENTER, CENTER - y) * 180) / Math.PI
    return { label, x, y, angle, outbound: i % 2 === 0 }
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

        {/* Each packet travels up its own rotated edge; inbound ones play in reverse. Hidden for reduced motion. */}
        <g className="motion-reduce:hidden">
          {nodes.map((node, i) => (
            <g key={`packet-${node.label}`} transform={`rotate(${node.angle} ${CENTER} ${CENTER})`}>
              <circle
                cx={CENTER}
                cy={CENTER}
                r="3.5"
                className={cn(
                  "fill-primary opacity-0 animate-packet",
                  PACKET_DELAYS[i],
                  !node.outbound && "direction-reverse",
                )}
              />
            </g>
          ))}
        </g>

        <g className="font-mono text-xs" textAnchor="middle">
          {nodes.map((node, i) => (
            <g key={node.label} className={cn("motion-safe:animate-rise", LABEL_DELAYS[i])}>
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
            </g>
          ))}
        </g>

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
