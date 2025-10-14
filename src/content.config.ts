import { defineCollection, z } from 'astro:content'

const bio = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    email: z.string().email().optional(),
    image: z.string().optional(),
    cv_url: z.string().optional(),
    contact: z.object({
      phone: z.object({
        value: z.string(),
        icon: z.string(),
      }),
      email: z.object({
        value: z.string().email(),
        icon: z.string(),
      }),
      address: z.object({
        value: z.string(),
        icon: z.string(),
      }),
    }).optional(),
    socialLinks: z.array(z.object({
      text: z.string(),
      href: z.string().url(),
    })).optional(),
  })
})

const parts = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string()
  })
})

const hidden = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string()
  })
})

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
    summary: z.string().optional(),
    status: z.enum(['current', 'past']).optional(),
  })
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
    summary: z.string().optional(),
  })
});

export const collections = { bio, parts, hidden, projects, publications }
