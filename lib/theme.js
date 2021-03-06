export const preset = {
	colors: {
		text: '#171717',
		background: '#FFFFFF',
		primary: '#7289DA',
		secondary: '#30c',
		muted: '#f6f6f9',
		gray: '#99AAB5',
		dark: '#23272A',

		highlight: 'hsla(205, 100%, 40%, 0.125)'
	},
	fonts: {
		body: 'Work Sans',
		heading: 'Work Sans',
		monospace: 'Menlo, monospace'
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700
	},
	lineHeights: {
		body: 1.5,
		heading: 1.25
	},
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	sizes: {
		avatar: 48
	},
	radii: {
		default: 9,
		circle: 99999
	},
	shadows: {
		card: '0 0 4px rgba(0, 0, 0, .125)'
	},
	// Rebass variants
	text: {
		heading: {
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'heading'
		},
		display: {
			fontFamily: 'heading',
			fontWeight: 'heading',
			lineHeight: 'heading',
			fontSize: [5, 6, 7]
		},
		caps: {
			textTransform: 'uppercase',
			letterSpacing: '0.1em'
		}
	},
	variants: {
		avatar: {
			width: 'avatar',
			height: 'avatar',
			borderRadius: 'circle'
		},
		card: {
			p: 2,
			bg: 'background',
			boxShadow: 'card'
		},
		link: {
			color: 'primary'
		},
		nav: {
			fontSize: 1,
			fontWeight: 'bold',
			display: 'inline-block',
			p: 2,
			color: 'inherit',
			textDecoration: 'none',
			':hover,:focus,.active': {
				color: 'skyblue'
			}
		}
	},
	buttons: {
		primary: {
			px: 3,
			fontSize: [1, 2],
			// FontWeight: 'bold',
			color: 'background',
			bg: 'primary',
			borderRadius: 10
		},
		outline: {
			variant: 'buttons.primary',
			color: 'primary',
			bg: 'transparent',
			boxShadow: 'inset 0 0 2px'
		},
		secondary: {
			variant: 'buttons.primary',
			color: 'background',
			bg: 'secondary'
		},
		blank: {
			color: 'black',
			bg: 'transparent'
		}
	},
	styles: {
		root: {
			fontFamily: 'body',
			fontWeight: 'body',
			lineHeight: 'body'
		}
	}
}

export default preset
