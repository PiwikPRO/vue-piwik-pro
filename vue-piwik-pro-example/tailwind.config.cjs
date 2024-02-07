module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui')],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
