/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aboutMeBgDark: '#b8c2a7',
        bgBlue: '#C3D9D9',
        borderColor: '#B68E76',
        textColor: '#125050',
        linkColor: '#4B8483',
        openLinkColor: '#B68E76'
      },
      fontFamily:{
        roboto: ['Roboto']
      }
    },
  },
  plugins: [],
};
