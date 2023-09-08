/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"node_modules/daisyui/dist/**/*.js",
		"node_modules/react-daisyui/dist/**/*.js",
	],
	daisyui: {
		themes: ["acid"],
	},
	plugins: [require("daisyui")],
};
