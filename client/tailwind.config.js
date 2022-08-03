/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f87307",
        secondary: "#fbbc8b",
        contentBg: "#f4f6fd"
      }
    },
  },
  plugins: [],
}
