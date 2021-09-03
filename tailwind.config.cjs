const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');


const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			lightBlue: colors.lightBlue, // Only in Tailwind CSS <=v2.1
			sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`  
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			warmGray: colors.warmGray,
			trueGray: colors.trueGray,
			gray: colors.gray,
			blueGray: colors.blueGray,
			coolGray: colors.coolGray,
		},
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
    require('@tailwindcss/aspect-ratio'),
  ]
};

module.exports = config;
