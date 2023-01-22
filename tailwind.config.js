/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'dark-elements': '#2b3945',
      'dark-bg': '#202c37',
      'light-text': '#111517',
      'light-input': '#858585',
      'light-bg': '#fafafa',
      'light-elements': '#ffffff',
      'dark-text': '#ffffff',
    },
  },
  plugins: [],
};
