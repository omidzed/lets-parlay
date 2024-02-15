/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        tiny: '0.6rem',
        thead: '1rem',
        custom: '1.1rem',
        smallest: '.9rem',
        smaller: '1.7rem',
        odds: '1.4rem',
        bigger: '1.2rem',
        username: '1.65rem',
        rounds: '.5rem',
      },

      screens: {
        xs: '375px',
        // => @media (min-width: 375px) { ... }

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
    },
  },
  plugins: [],
};
