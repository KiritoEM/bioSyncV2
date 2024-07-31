import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22C55E",
        secondary: "#0A110B",
        secondary01: "rgba(10, 17, 11, 0.81)",
      },
      fontFamily: {
        calSans: "Cal Sans",
        lato: "Lato",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
