/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: { max: '767px' },
      tablet: { min: '768px' },
      smallDesktop: { min: '1024px' },
      bigDesktop: { min: '1280px' },
    },
    fontFamily: {
      'body': ['"IBM Plex Sans", sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
