/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
<<<<<<< HEAD
        title: ["Title", "sans-serif"],
        button: ["button", "sans-serif"],
=======
>>>>>>> 219abd36599a1acddd9505b34939ae3db466a2e8
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
