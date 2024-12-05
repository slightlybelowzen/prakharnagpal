// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    mdx({
      shikiConfig: { theme: "github-light" },
    }),
    react(),
  ],
  devToolbar: {
    enabled: false,
  },
  experimental: {
    svg: {
      mode: "inline",
    },
  },
});
