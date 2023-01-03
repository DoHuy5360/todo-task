module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			keyframes: {
				ledBlink: {
					"0%": { color: "red" },
					"50%": { color: "yellow" },
					"100%": { color: "green" },
				},
				dotScale: {
					"0%": { transform: "scale(1)" },
					"100%": { transform: "scale(4)" },
				},
			},
			animation: {
				ledBlink: "ledBlink 200ms linear infinite",
				dotScale: "dotScale 1000ms linear infinite",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
	variants: {
		scrollbar: ["rounded"],
	},
};
