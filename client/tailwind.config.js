/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      fontSize: {
        rounds: '.5rem',
        tiny: '0.6rem',
        smallest: '.9rem',
        thead: '1rem',
        custom: '1.1rem',
        bigger: '1.2rem',
        username: '1.2rem',
        odds: '1.4rem',
        menuItem: '1.8rem',
        menu: '2.4rem',
      },
    },
  },
  plugins: [],
};
