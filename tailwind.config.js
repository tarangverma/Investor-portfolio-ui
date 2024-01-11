/** @type {import('tailwindcss').Config} */



module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'new': ['Merriweather' , 'serif']
    }
  },
  variants: {
    extend: {
      display: ['responsive', 'group-hover', 'group-focus'],
    }
  },
  plugins: [],
}

