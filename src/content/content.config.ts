// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const challenges = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/content/challenges",
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        dates: z.object({
            kickoff: z.string().optional(),
            begin: z.string().optional(),
            studioHours: z.array(z.string()).optional(),
            submissionsDue: z.string().optional(),
            demoDay: z.string().optional(),
        })
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { challenges };