/** @type {import('tailwindcss').Config} */
const url = require("url");
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'explore': "url('assets/background_camp.jpg')"
      },
      width: {
        '340': '340px',
        '200': '200px',
        '300': '300px',
        '280': '280px',
        '268': '268px',
        '684': '684px',
        '1024': '1024px',
      },
      maxWidth: {
        '576': '576px',
        '840': '840px',
      },
      height: {
        '538': '538px',
        '280': '280px',
      },
      fontWeight: {
        'title_bold': '550',
      }
    },

  },
  plugins: [
    require('tailwindcss-font-inter'),
    require('@tailwindcss/line-clamp')
  ],
}
