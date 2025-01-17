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
        green01: "#6CE89A",
        secondary: "rgba(10, 17, 11, 0.90)",
        green02: "rgba(10, 17, 11, 0.81)",
        input: "#F3F9FA",
        gray02: "rgba(10, 17, 11, 0.81)",
        gray03: "rgba(10, 17, 11, 0.30)",
        yellow01: "#FFC957",
        blue01: "#3da5d9",
        white01: "#fff",
      },
      fontFamily: {
        calSans: "Cal Sans",
        lato: "Lato",
      },
      backgroundImage: {
        linearPrimary:
          "linear-gradient(103deg, #064121 19.49%, #22C55E 109.34%)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
