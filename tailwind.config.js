/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDarkGradient: '#b8c2a7',
        bgClear: '#EDF0E9',
        bgButton: '#B8C2A7',
        borderColor: '#B68E76',
        textColor: '#125050',
        linkColor: '#4B8483',
        openLinkColor: '#B68E76',
        bgDark: '#5D6D42'
      },
      fontFamily:{
        roboto: ['Roboto']
      }
    },
  },
  plugins: [],
};
