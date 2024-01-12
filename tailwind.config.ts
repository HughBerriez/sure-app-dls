import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          DEFAULT: "#18AAA1", // Default brand color
          light: "#31BFB7", // Light brand color
          dark: "#137A74", // Dark brand color
        },
      },
    },
  },
  plugins: [],
};

export default config;
