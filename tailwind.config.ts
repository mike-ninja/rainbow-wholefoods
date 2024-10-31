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
        // primary_one: "#FFFFFF",
        primary_two: "#F8F0DE",
        // secondary_one: "#227A7C",
        // secondary_two: "#AEC6CF",
        secondary_three: "#A68671",
      },
    },
  },
  plugins: [],
};
export default config;
