/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['Inter', 'sans-serif'],
    },
    extend: {
      colors : {
        abu : "#D9D9D9",
        item : "#100E09",
        ijotua : "#709069",
        ijomuda : "#C5DFB8",
        ijosedang : "#9EBF83"
      }
    },
  },
  plugins: [],
}