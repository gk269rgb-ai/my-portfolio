/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // scan all React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
