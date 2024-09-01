/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--font-cormorant_upright)",
        secondary: "var(--font-open_sans)",
        "myriad-light": ["MyriadProLight", "sans-serif"],
        "myriad-semibold": ["MyriadProSemibold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
