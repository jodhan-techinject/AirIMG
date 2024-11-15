/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/**/*.{html, js, ts, vue}", 
  "./src/**/*"],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter var', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
      colors : {
        primary :{
          400 : '#121517',
          300 : '#3C3D37',
          200 : '#697565',
          100 : '#ECDFCC',
          50 : '#15668b',
        }
      }
    },
  },
  plugins: [],
};