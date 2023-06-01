/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          950: '#00000076',
          131324:'#131324',
          00000076:'#00000076',
          39 : '#ffffff39'
          
        },
        extra:{
          400 : '#997af0',
          500 : '#4e0eff'
        },
        height: {
          'screen': '100vh',
          'width':'100vw',
          'containerh' :'85vh',
          'containerw':'85vw',
        
          
        },
        width:{
          'containerw':'85vw'
        }
      },
    },
 
  },
  plugins: [],
};
