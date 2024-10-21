import type { CollectionEntry } from "astro:content"

const getSortedPosts = (allPosts: CollectionEntry<"posts">[]) =>
	allPosts.sort(
		(post1, post2) =>
			new Date(post2.data.pubDate).getTime() - new Date(post1.data.pubDate).getTime()
	)

export default getSortedPosts
