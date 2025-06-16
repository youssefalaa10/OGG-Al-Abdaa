/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#6C47FF',
        secondary: 'black',
        background: '#282828',
      },
      fontFamily: {
        arabic: ['"Noto Kufi Arabic"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
