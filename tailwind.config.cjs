/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // valeurs par défaut — modifiez-les selon votre charte
        primary: '#222831',   
        secondary: '#00adb5', 
        success: '#10b981'    
      }
    }
  },
  plugins: []
}
