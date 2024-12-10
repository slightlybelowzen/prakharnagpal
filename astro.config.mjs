// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercelLight from "./src/utils/themes/vercel-light.json";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [react(), mdx()],
  markdown: {
    shikiConfig: {
      theme: vercelLight,
    },
  },
  devToolbar: {
    enabled: false,
  },
  experimental: {
    svg: {
      mode: "inline",
    },
  },
});
