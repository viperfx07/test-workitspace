const toRem = (px, base = 16) => `${px / base}rem`;

const customSpacing = (spacingArrayInPx) => {
	const spacing = {}
	spacingArrayInPx.forEach((space) => {
		spacing[`${space / 4}`] = toRem(space)
	})
	return spacing
}

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				...customSpacing([30, 414]),
			},
			border: (theme) => ({
				...theme('colors'),
				DEFAULT: theme('colors.grey.divider', 'currentColor'),
			}),
			colors: {
				primary: {
					900: '#4D6772',
					500: '#728F9B',
				},
				black: {
					'high-emphasis': 'rgba(0,0,0,.87)',
					'medium-emphasis': 'rgba(0,0,0,.6)',
				},
				grey: {
					divider: '#E5E5E5',
				},
			},
			fontSize: {
				subtitle1: ['16px', { lineHeight: '1.5', letterSpacing: '.15px' }],
				body2: ['14px', { lineHeight: '1.5', letterSpacing: '.25px' }],
				h6: ['20px', { lineHeight: '1.5', letterSpacing: '.15px' }],
				h6: ['20px', { lineHeight: '1.5', letterSpacing: '.15px' }],
			},
			fontFamily: {
				sans: [
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},
			maxWidth: (theme) => ({
				...theme('spacing'),
			}),
			minWidth: (theme) => ({
				...theme('spacing'),
			}),
			minHeight: (theme) => {
				return {
					...theme('spacing'),
				}
			},
		},
	},
	variants: {
		extend: {
			padding: ['responsive', 'first']
		},
	},
	plugins: [],
}
