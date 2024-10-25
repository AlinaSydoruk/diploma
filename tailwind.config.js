/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#6A6A6A',
      'light-gray': '#D9D9D9',
      'light-blue': '#F3F4FF',
      'light-violet': '#D0D0E7',
      'light-blue-gray': '#E6E6E6',
      'light-night-blue': '#03213F',
      'night-blue': '#001122',
      'yellow' : '#F9E789'
    },
  },
  plugins: [],
}
