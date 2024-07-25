import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      person: {
        red: "#e1370b",
        green: "#00d850",
        blue: "#132382",
        brown: "#974e3a",
        yellow: "#ffed00",
        gray: "#a0a0a0",
        pink: "#d6338a",
        lightblue: "#b3e0f8",
        orange: "#f59202"
      },
      white: "#ffffff",
      black: "#000000",
      green: {
        100: "#e0f0e4",
        200: "#b7cbbe",
        300: "#a1c0aa",
        400: "#8bb596",
        500: "#75aa82", //
        600: "#5b8b6a",
        700: "#476f54",
        800: "#33433e",
        900: "#1f1718"
      },
      red: {
        100: "#f9e0e0",
        200: "#f1c1c1",
        300: "#eaa2a2",
        400: "#e28484",
        500: "#e1370b", //
        600: "#b34f4f",
        700: "#8c3a3a",
        800: "#652525",
        900: "#3e1010"
      },
      blue: {
        100: "#e0e5f9",
        200: "#b7c1f1",
        300: "#8faef9",
        400: "#668bf1",
        500: "#3d68e9", //
        600: "#2f56c7",
        700: "#2144a5",
        800: "#132382",
        900: "#051161"
      },
      yellow: {
        100: "#f9f5e0",
        200: "#f1eab7",
        300: "#e9df8e",
        400: "#e1d466",
        500: "#d9c93d", //
        600: "#b3a12f",
        700: "#8c7a21",
        800: "#665314",
        900: "#3f2d06"
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
