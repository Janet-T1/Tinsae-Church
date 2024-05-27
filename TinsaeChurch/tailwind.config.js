/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        smalltext: ['Inter', 'sans-serif'],
        bigtext: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': '#FFFFFF', 
        'secondary':'#1C1C1C',
        'teritary': '#9197AE',
        'fourth': '#F02D3A'
      },
    },
  },
  plugins: [

    // function ({addUtilities}) {
    //   const newUtilities = {
    //     ".no-scrollbar::-webkit-scrollbar": {
    //       display: "none", 
    //     }, 

    //     ".no-scrollbar":{
    //       "-ms-overflow-style":"none", 
    //       "scrollbar-width":"none"
    //     }

    //   }

    //   addUtilities(newUtilities); 
    // }



  ],
};
