/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "background-color": "hsl(var(--background-color))",
      primary: "hsl(var(--primary))",
      accent: "hsl(var(--accent))",
    },
  },

  plugins: [],
};
