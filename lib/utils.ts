import { createCn } from "cn/config"

// Teach the merger about the display sizes defined in globals.css, so
// `text-hero` is treated as a font size and not as a text color.
export const cn = createCn({
  extend: {
    classGroups: { "font-size": [{ text: ["hero", "section", "contact"] }] },
  },
})
