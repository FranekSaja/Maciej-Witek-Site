import { defineCollection, z } from 'astro:content'

const bio = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    email: z.string().email().optional(),
  })
})

const parts = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string()
  })
})

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),
    authors: z.array(z.string()),
    link: z.string().url().optional(),
  })
})

export const collections = { bio, parts, publications }
