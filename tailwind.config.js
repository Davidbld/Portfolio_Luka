/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      'darkBlue': {
        800:'#6497b1',
        900:'#03396c',
      },
      'marineBlue': {
          100: '#eaf6ff',
          200: '#b3cde0',
          300: '#6497b1',
          400: '#005b96',
          500: '#03396c',
          600: '#011f4b',
      },
    },
    fontFamily: {
      'Titles':['Raleway'],
      'Body' : ['Mulish']
    }
  },
  plugins: [],
}
}