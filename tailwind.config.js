/* eslint-disable global-require */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        lg: '10vw',
        md: '7vw',
        sm: '3vw',
        xs: '2vw',
        halfHeight: '50vh',
        15: '4vw',
      },
      colors: {
        primary: '#0290ff',
        blueCustomize: '#4386bf',
      },
      fontFamily: {
        mont: ['Montserrat'],
        robSlab: ['"Roboto Slab"'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')], // eslint-disable-line
};
