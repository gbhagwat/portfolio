/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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
        "neutral": "#f05271be",                 
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
 