import { z, defineCollection } from "astro:content";

const blogPostCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    emoji: z.string().optional(),
    url: z.string(),
    publishDate: z.string(),
    excerpt: z.string(),
    categories: z.array(z.string()),
  }),
});

export const collections = {
  posts: blogPostCollection,
};
