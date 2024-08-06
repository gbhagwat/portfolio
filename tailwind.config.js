/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'light-purple' : '#6D66CC',
      'white' : '#FFFFFF',
      'dark-purple' : '#383899'
    },
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        mytheme: {         
        "primary": "#F05271",               
        "secondary": "#5850d1",  
        "accent": "#4ecdc4",                 
        "neutral": "#151214cc",                 
        "base-100": "#ffffff",                 
        "info": "#0894c4",                 
        "success": "#52cd83",                 
        "warning": "#ffbc28",                 
        "error": "#dc3818",    
          },
        },
      ],
    }
  }
 
