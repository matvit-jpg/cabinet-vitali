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
        navy: { DEFAULT: "#0D1B2A", light: "#1A2E42" },
        gold: { DEFAULT: "#C9A84C", light: "#E2C97E" },
        ivory: "#F8F6F1",
        "grey-light": "#E8E6E1",
        "grey-mid": "#9A9590",
        text: "#1C1C1C",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(13, 27, 42, 0.08)",
        elevated: "0 12px 40px rgba(13, 27, 42, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
