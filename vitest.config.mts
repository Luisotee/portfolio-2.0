import { fileURLToPath } from "node:url"

import { defineConfig } from "vitest/config"

// Content tests only: plain data, no DOM.
export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL(".", import.meta.url)) } },
  test: {
    environment: "node",
    include: ["**/*.test.ts"],
    exclude: ["node_modules/**", ".next/**"],
  },
})
