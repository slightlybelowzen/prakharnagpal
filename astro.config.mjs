// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [],
  markdown: {},
  devToolbar: {
    enabled: false,
  },
  experimental: {
    svg: {
      mode: "inline",
    },
  },
});
