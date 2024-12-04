import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

// All the collections defined here
const experiments = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "../src/experiments" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    pubDate: z.string(),
    categories: z.array(z.string()),
  }),
});
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "../src/projects" }),
});
const writings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "../src/writings" }),
});

// Export all the collections
export const collections = { experiments, projects, writings };
