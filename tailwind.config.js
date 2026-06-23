/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        dark: "#0D1117",
        grayCustom: "#1E293B"
      }
    }
  },
  plugins: []
}