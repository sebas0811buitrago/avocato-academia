import { defineCollection, reference, z } from "astro:content"

const authorCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			description: z.string(),
			thumbnail: z.object({
				image: image(),
				alt: z.string(),
			}),
		}),
})

const postCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			pubDate: z.date(),
			description: z.string(),
			author: reference("authors"),
			thumbnail: z.object({
				image: image(),
				alt: z.string(),
			}),
			tags: z.array(z.string()),
		}),
})

export const collections = {
	posts: postCollection,
	authors: authorCollection,
}
