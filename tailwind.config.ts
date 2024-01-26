const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: "#27debf",
				secondary: "#101010",
				textColor: "#ffffff",
				bgColor: "#ffffff",
				bgColorDark: "#101010",
				textLight: "#939da4",
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
});
