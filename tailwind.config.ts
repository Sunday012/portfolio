/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor:{
        "blur": "rgb(225, 225, 225, 0.1)",
        "blursm": "rgb(225, 225, 225, 0.05)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "scrollsm":{
          from:{left: "translateX(0)"},
          to:{transform : "translateX(-100%)"}
        },
        "scroll":{
          from:{left: "translateX(0)"},
          to:{transform : "translateX(-100%)"}
        },
       
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll": "scroll 35s  linear infinite ",
        "scrollsm": "scrollsm 20s  linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}