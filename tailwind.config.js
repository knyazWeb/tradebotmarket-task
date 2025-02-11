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
        'xs': '340px', // Add custom screen breakpoint for 340px
      },
    },
  },
  plugins: [],
};
