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
				flyUp: {
					"0%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-20px)" },
					"100%": { transform: "translateY(0)" },
				},
				dotWave: {
					"0%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-2px)" },
					"100%": { transform: "translateY(0)" },
				},
			},
			animation: {
				ledBlink: "ledBlink 200ms linear infinite",
				dotScale: "dotScale 1000ms linear infinite",
				flyUp: "flyUp 5000ms cubic-bezier(0.70, 0.30, 0.30, 0.70) infinite",
				dotWave: "dotWave 200ms linear infinite",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
	variants: {
		scrollbar: ["rounded"],
	},
};
