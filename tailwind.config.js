/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    './src/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg1: 'var(--background-color1)',
        bg2: 'var(--background-color2)',
        btnPrimary1: 'var(--primary-button-color1)',
        btnPrimaryHover1: 'var(--primary-button-color1-hover)',
        btnPrimary2: 'var(--primary-button-color2)',
        btnPrimaryHover2: 'var(--primary-button-color2-hover)',
      },
    },
  },
  plugins: [],
};
