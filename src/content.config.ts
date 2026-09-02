import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({
    pattern: '**/index.*.{md,mdx}',
    base: './content/blog',
    // Always derive the id from the path; a `slug` frontmatter field must not replace it.
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.coerce.date(),
      dateModified: z.coerce.date().optional(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      keywords: z.array(z.string()).optional(),
      banner: image().optional(),
      bannerStyle: z.enum(['FULL_WIDTH', 'NORMAL']).default('FULL_WIDTH'),
      socialImageUrl: z.string().url().optional(),
      isDraft: z.boolean().default(false),
      slug: z.string().optional(),
      publisher: z
        .object({
          name: z.string(),
          id: z.string().optional(),
          url: z.string().url().optional(),
          logoUrl: z.string().url().optional(),
        })
        .optional(),
      reviewers: z
        .array(z.object({ name: z.string(), url: z.string().url().optional() }))
        .default([]),
      externalLinks: z
        .object({
          canonical: z.string().url().nullish(),
          devto: z.string().url().nullish(),
          github: z.string().url().nullish(),
        })
        .default({}),
    }),
})

export const collections = { blog }
