module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui'), require("@tailwindcss/typography")],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
