import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          cf_white: "#FFFFFF",
        },
        black: {
          cf: "#2B2B2B",
        },
        yellow: {
          cf_yellow: "#DEBA3B",
        },
        blue: {
          cf_blue: "#1A1363",
        },
        purple: {
          cf_purple1: "#77749B",
          cf_purple2: "#332F64",
        },
        gray: {
          cf_gray1: "#ECE9E9",
          cf_gray2: "#969292",
          cf_gray3: "#4B4B4B",
        },
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}
export default config
