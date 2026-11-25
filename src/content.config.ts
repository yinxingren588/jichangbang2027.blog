import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    updatedDate: z.string().optional(),
    author: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faqs' }),
  schema: z.object({
    title: z.string(),
    question: z.string(),
    summary: z.string(),
    category: z.string(),
    keywords: z.array(z.string()).optional(),
    pubDate: z.string().optional(),
    updatedDate: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  posts,
  faqs,
};
