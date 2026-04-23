/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#02000F", // Deep Midnight
        secondary: "#aaa6c3",
        tertiary: "#0E0A1E", // Darker Midnight for cards
        "black-100": "#0A051A",
        "black-200": "#050210",
        accent: "#B026FF", // Neon Electric Purple
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['"Noto Serif"', 'serif'],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}
