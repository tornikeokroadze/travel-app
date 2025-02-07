import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#72c6e7",
          DEFAULT: "#0dcaf0"
        },
        secondary: {
          "100": "#787780",
          DEFAULT: "#313041"
        },
        filter: {
          "100": "#313041",
          DEFAULT: "#3130412e"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
