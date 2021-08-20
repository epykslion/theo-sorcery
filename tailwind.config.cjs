const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans]
    },
    extend: {}
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
};

module.exports = config;
