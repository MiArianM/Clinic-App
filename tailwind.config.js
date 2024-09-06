/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        menu: ["Menu", "sans-serif"],
        Alertdescription: ["Alertdescription", "sans-serif"],
      },
      spacing: {
        144: "36rem",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
