/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'youtube-red': '#ff0000',
        'youtube-black': '#0f0f0f',
        'youtube-dark': '#272727',
        'youtube-gray': '#303030',
      },
    },
  },
  plugins: [],
} 