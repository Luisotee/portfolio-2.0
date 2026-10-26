import { readFile } from "node:fs/promises"
import { join } from "node:path"

import { ImageResponse } from "next/og"

import { hero, seo, site } from "@/content/site"

export const alt = seo.ogImageAlt
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// ImageResponse renders style objects only (no Tailwind), so this file is the one place with inline styles.
// The palette mirrors :root in app/globals.css.
const color = {
  background: "#0b0c0e",
  foreground: "#edebe6",
  soft: "#cfcdc7",
  primary: "#c8f560",
  line: "rgb(237 235 230 / 0.06)",
}

const fontDir = join(process.cwd(), "assets/fonts")
const [display, mono] = await Promise.all([
  readFile(join(fontDir, "BricolageGrotesque-Bold.ttf")),
  readFile(join(fontDir, "GeistMono-Regular.ttf")),
])

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: color.background,
        backgroundImage: `linear-gradient(${color.line} 1px, transparent 1px), linear-gradient(90deg, ${color.line} 1px, transparent 1px)`,
        backgroundSize: "56px 56px",
        color: color.foreground,
        fontFamily: "Geist Mono",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 26, color: color.soft }}>
        <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: color.primary }} />
        {hero.eyebrow}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div
          style={{
            fontFamily: "Bricolage Grotesque",
            fontSize: 156,
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
          }}
        >
          {site.name}
        </div>
        <div style={{ maxWidth: 940, fontSize: 28, lineHeight: 1.4, color: color.soft }}>{site.description}</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 26 }}>
        <div style={{ display: "flex", color: color.primary }}>{site.domain}</div>
        <svg width="56" height="56" viewBox="0 0 32 32">
          <path d="M4 8h4v12h6v4H4z" fill={color.primary} />
          <rect x="18" y="10" width="8" height="12" rx="4" fill="none" stroke={color.primary} strokeWidth="4" />
        </svg>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Bricolage Grotesque", data: display, weight: 700, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  )
}
