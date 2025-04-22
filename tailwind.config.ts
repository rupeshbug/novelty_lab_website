import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
