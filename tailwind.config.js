/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        title: ["Title", "sans-serif"],
        button: ["button", "sans-serif"],
        service: ["Service", "sans-serif"],
        regular: ["regular", "sans-serif"],
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
