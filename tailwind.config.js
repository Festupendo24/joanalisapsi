/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#333333",
        stone: "#555555",
      }
    },
  },
  plugins: [],
}
