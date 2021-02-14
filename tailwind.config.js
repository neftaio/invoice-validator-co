module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
		extend: {
			colors: {
				greenr : {
					1000: '#00ff00'
				},
				yellowr: {
					1000: '#ffff00'
				},
				bluer: {
					1000: '#0000ff'
				},
				redr: {
					1000: '#ff0000'
				}
			},
			fontFamily: {
				'sans': ['ui-sans-serif', 'system-ui'],
				'serif': ['ui-serif', 'Georgia'],
				'mono': ['ui-monospace', 'SFMono-Regular'],
				'quickSand': ['Quicksand', 'sans-serif'],
				'pressStart': ['"Press Start 2P"', 'cursive']
			}
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
