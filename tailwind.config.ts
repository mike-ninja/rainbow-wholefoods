import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#545454",
        error: "#f87171",
        accent: "#F8F0DE",
        success: "#4ade80",
        warning: "#facc15",
        primary_one: "#8FAF69",
        primary_two: "#AEC78B",
        secondary_one: "##F8F0DE",
        secondary_two: "#D9DED6",
        secondary_three: "#A68671",
      },
    },
  },
  plugins: [],
};
export default config;
