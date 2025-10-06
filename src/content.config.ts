import { defineCollection, z } from 'astro:content'

const bio = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    email: z.string().email().optional(),
    image: z.string().optional(),
    cv_url: z.string().optional(),
  })
})

const parts = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string()
  })
})

export const collections = { bio, parts }
