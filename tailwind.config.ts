import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0px' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0px' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    plugin(function ({addBase}:{addBase:any}) {
			addBase({
				'[type="search"]::-webkit-search-decoration': {display: 'none'},
				'[type="search"]::-webkit-search-cancel-button': {display: 'none'},
				'[type="search"]::-webkit-search-results-button': {display: 'none'},
				'[type="search"]::-webkit-search-results-decoration': {display: 'none'},
			})
		}),
  ],
}
export default config
