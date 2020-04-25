const keyPositions = {
	left: [
		'↹', 'q', 'w', 'f', 'p', 'g',
		'esc', 'a', 'r', 's', 't', 'd',
		'⇑', 'z', 'x', 'c', 'v', 'b',
		'ctrl', '!?$', '←↓↑→'
	],
	right: [
		'↤', ';', 'y', 'u', 'l', 'j',
		'↲', 'o', 'i', 'e', 'n', 'h',
		'⇑', '/', '.', ',', 'm', 'k',
		'ctrl', '!?$', 'space'
	],
};

const config = {
	keys: {
		left: keyPositions.left.map(text => ({text})),
		right: keyPositions.right.map(text => ({text}))
	}
};

export default config;