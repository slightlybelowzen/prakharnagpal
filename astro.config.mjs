// @ts-check
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [svelte()],
  devToolbar: {
    enabled: false,
  },
  experimental: {
    svg: {
      mode: "inline",
    },
  },
});
