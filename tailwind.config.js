/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'alegreya': ['Alegreya', 'serif'],
      'alegreya-sans': ['Alegreya-sans', 'sans-serif'],
      'oswald': ['Oswald', 'sans-serif'],
    }
  },
  plugins: [],
}

