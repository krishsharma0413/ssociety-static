/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        "background": "#181818",
        "primary": "#F2CFA9",
        "text": "#FFFFFF"
      },
      fontFamily:{
        "stalber": "stalber",
        "bokor": "bokor"
      }
    },
  },
  plugins: [],
}

