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
      boxShadow: {
        "service-shadow":
          "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",
        "ServiceHover-shadow":
          "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 146, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 196, 170, 0.1) 0px 20px, rgba(240, 146, 170, 0.05) 0px 25px",
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
