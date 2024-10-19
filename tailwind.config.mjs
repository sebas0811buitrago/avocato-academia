/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			"background-color": "hsl(var(--background-color))",
			"primary": "hsl(var(--primary))",
			"light-primary": "hsl(var(--ligh-primary))",
			"dark-primary": "hsl(var(--dark-primary))",
			"accent": "hsl(var(--accent))",
			"foreground-color": "hsl(var(--foreground-color))",
			"neutral-primary": "hsl(var(--neutral-primary))",
			"neutral-secondary": "hsl(var(--neutral-secondary))",
		},
	},

	plugins: [],
}
