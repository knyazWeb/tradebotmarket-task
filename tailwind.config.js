/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: '#1D2739',
        lightOcean: '#232C3E',
        gray: '#546076',
        orange: '#E4972D',
        green: '#78A659',
        pink: '#D2457B',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
      },
      screens: {
        xs: '340px', // Add custom screen breakpoint for 340px
      },
      boxShadow: {
        'inner-custom': 'inset 0 0px 20px 1px rgba(53, 162, 235, 0.3)',
      },
    },
  },
  plugins: [],
};
