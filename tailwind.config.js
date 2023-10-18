/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blockbuster: {
          50: '#0c3ca4',
          100: '#0b3694',
          200: '#0a3083',
          300: '#082a73',
          400: '#072462',
          500: '#061e52',
          600: '#051842',
          700: '#041231',
          800: '#020c21',
          900: '#010610',
          950: '#000000',
        }
      }
    },
  },
  plugins: [],
}
