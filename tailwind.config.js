/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "1180px": "1180px",
      },
      colors: {
        "blue": "#35afbf",
        "darkblue": "#2c353e",
        "gray": "#707273",
        "black": "#252626",
        "lightblue": "#F3FEFF"
      },
      backgroundImage: {
        'work': "url('/src/assets/images/work.jpg')"
      }
    },
  },
  plugins: [],
}