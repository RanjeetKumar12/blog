const typography = require('@tailwindcss/typography')
const daisyui = require('daisyui')

module.exports = {
  content: ['./src/**/*.{html,md,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'emerald', 'valentine', 'synthwave', 'halloween', 'aqua', 'dracula']
  }
}