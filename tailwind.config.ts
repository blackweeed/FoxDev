/* eslint-disable import/no-default-export */
import type { Config } from "tailwindcss";

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"turquoise-gradient":
					"linear-gradient(to right, #27debf, #53e0c7, #80e3d0, #add6d9, #c7d7e8, #e1e6f8)",
			},
			colors: {
				colorPrimary: "rgb(var(--color-primary) / <alpha-value>)",
				colorBackground: "rgb(var(--color-background) / <alpha-value>)",
				colorBackgroundDark: "rgb(var(--color-background-dark) / <alpha-value>)",
				colorText: "rgb(var(--color-text) / <alpha-value>)",
				colorTextLighter: "rgb(var(--color-text-lighter) / <alpha-value>)",
				colorNatura: "rgb(var(--color-natural) / <alpha-value>)",
				colorAccent: "rgb(var(--color-accent) / <alpha-value>)",
				colorTransparent: "transparent",
				colorCurrent: "currentColor",
			},
			animation: {
				blob: "blob 10s infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -50px) scale(1.1)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.9)",
					},
					"80%": {
						transform: "tranlate(-10px, -12px) scale(0.95)",
					},
					"100%": {
						transform: "tranlate(0px, 0px) scale(1)",
					},
				},
			},
		},
	},
	plugins: [],
	darkMode: "class",
} satisfies Config);
