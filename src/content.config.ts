import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const postSchema = ({ image }: { image: () => z.ZodTypeAny }) =>
	z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.optional(image()),
	});

const research = defineCollection({
	// Load Markdown and MDX files in the `src/content/research/` directory.
	loader: glob({ base: './src/content/research', pattern: '**/*.{md,mdx}' }),
	schema: postSchema,
});

const caseStudies = defineCollection({
	// Load Markdown and MDX files in the `src/content/case-studies/` directory.
	loader: glob({ base: './src/content/case-studies', pattern: '**/*.{md,mdx}' }),
	schema: postSchema,
});

export const collections = { research, 'case-studies': caseStudies };