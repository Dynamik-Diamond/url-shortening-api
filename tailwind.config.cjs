/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        //  primary
        Cyan: 'hsl(180, 66%, 49%)',
        DarkViolet: 'hsl(257, 27%, 26%)',
        // secondary
        Red: 'hsl(0, 87%, 67%)',
        // Neutral
        Gray: 'hsl(0, 0%, 75%)',
        GrayishViolet: 'hsl(257, 7%, 63%)',
        VeryDarkBlue: 'hsl(255, 11%, 22%)',
        VeryDarkViolet: 'hsl(260, 8%, 14%)',
      },
    },

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
