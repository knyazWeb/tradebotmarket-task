/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
      },
    },
  },
  plugins: [],
};
