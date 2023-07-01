/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Open Sans'", "sans-serif"],
      },
      colors: {
        page: "#F9FAFB",
        theme: {
          DEFAULT: "#272e71", //Default theme color
        },
      },
      borderRadius: {
        DEFAULT: "4px",
      },
    },
  },
  plugins: [],
}