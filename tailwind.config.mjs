/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				body: "var(--color-body)",
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				shape: "var(--color-shape)",
			}
		},
	},
	plugins: [],
}
