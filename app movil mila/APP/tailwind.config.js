/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#161622',
        400: "#FFD700", //dorado
        beige:'#F5F5DC',
        darkbeige: '#D2B48C',
        secondary:{
          DEFAULT:"#FF9C01",
          100:"#FF9001",
          200:"#FF8E01",
          300: "#F5F5DC"
        },
        black:{
          DEFAULT:"#000",
          100:"#1E1E2D",
          200:"#232533",
        },
        gray:{
          100:"#CDCDE0"
        }
      },
      fontFamily:{
        pthin:["Poppins-thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight","sans-serif"],
        pliht:["Poppins-light","sans-serif"],
        pregular: ["Poppins-Regula","sans-serif"],
        pmedium: ["Poppins-Medium","sans-serif"],
        psemibold: ["Poppins-Semibold","sans-serif"],
        pbold: ["Poppins-Bold","sans-serif"],
        pextrabold:["Poppins-ExtraBold","sans-serif"],
        pblack: ["Poppins-Black","sans-serif"],
      }
    },
  },
  plugins: [],
}


