/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      bg: "#0E0E11",
      surface: "#16161A",
      primary: "#14B8A6",
      accent: "#2DD4BF",
      text: "#FAFAFA",
      muted: "#A1A1AA",
      border: "#262626",
    },
     container: {
       center: true,
       padding:{
        DEFAULT:'1rem',
        sm: '2rem',
        lg:'4rem',
        xl:'5rem',
        '2xl':'6rem',
       }
    }
  },
},
  plugins: [],
}