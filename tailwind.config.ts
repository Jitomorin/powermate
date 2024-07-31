import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(255,255,255,1) 0%,  rgba(93,200,122,1) 100%)",
        "dark-gradient":
          "linear-gradient(90deg, rgba(14,7,111,1) 0%,  rgba(93,200,122,1) 100%)",
        "background-gradient": "linear-gradient(to left, #8f94fb, #4e54c8)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        slide: "slide 15s linear infinite",
        animate: "animate 25s linear infinite",
      },
      keyframes: {
        animate: {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "1",
            borderRadius: "0",
          },
          "100%": {
            transform: "translateY(-1000px) rotate(720deg)",
            opacity: "0",
            borderRadius: "50%",
          },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        trueGray: colors.neutral,
        dark_bg: "#171717",
        light_bg: "#ffffff",
        lightenedGreen: "#29A84D",
      },
    },

    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
