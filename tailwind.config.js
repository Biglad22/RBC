/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary' : '#F9B520',
        'primary-rxn' : '#FFAF00', 
        'light' : '#FAFAFA', // main background color in light mode
        'dark' : '#464B4D',  // main background color in dark mode
        'sur-l' : '#EBEBEB',  // surface color in light mode  
        'sur-d' : '#242424',  // surface color in dark mode
        'link-l' : '#427283', // color of links in light mode
        'link-d' : '#93AFB9',  // color of links in dark mode 
        'delete': '#FF3B30', // custom color of delete button
        // text color from high emphasis to low for light mode (-l) and dark mode (-d)
        'high-d': 'rgba(240, 240, 240, 0.86)', 
        'medium-d': 'rgba(240, 240, 240, 0.65)',
        'low-d': 'rgba(240, 240, 240, 0.3)',
        'high-l': 'rgba(5, 5, 5, 0.86)',
        'medium-l': 'rgba(5, 5, 5, 0.65)',
        'low-l': 'rgba(5, 5, 5, 0.3)'
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        none: 'none',
      },
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addUtilities, theme }) {
      const textShadow = theme('textShadow');
      const textShadowUtilities = Object.entries(textShadow).map(([key, value]) => {
        return {
          [`.text-shadow-${key}`]: { textShadow: value },
        };
      });
      addUtilities(textShadowUtilities);
    }
  ],
}

