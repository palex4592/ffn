import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      // fontSize: {
      //   "auto-sm": "clamp(5rem, 4vw, 6rem)",
      //   "auto-md": "clamp(5rem, 5vw, 6rem)",
      //   "auto-lg": "clamp(5rem, 4vw, 6rem)",
      //   "auto-xl": "clamp(5rem, 4vw, 6rem)",
      // },
      // lineHeight: {
      //   "auto-sm": "clamp(3rem, 4vw, 6rem)",
      //   "auto-md": "clamp(5rem, 4vw, 6rem)",
      //   "auto-lg": "clamp(3rem, 4vw, 6rem)",
      //   "auto-xl": "clamp(3rem, 4vw, 6rem)",
      // },
      colors: {
        "custom-blue": "#000091",
      },
      letterSpacing: {
        "-2%": "-0.02em",
        "10p": "0.1em", // This is equivalent to 10% tracking
      },
      inset: {
        "107px": "107px",
        "623px": "623px",
      },
    },
  },
  plugins: [],
};
export default config;
