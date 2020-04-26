const keyPositions = {
	left: [
		'tab', 'q', 'w', 'f', 'p', 'g',
		'esc', 'a', 'r', 's', 't', 'd',
		'lshift', 'z', 'x', 'c', 'v', 'b',
		'lctrl', 'lpunc', 'arrows'
	],
	right: [
		'backspace', ';', 'y', 'u', 'l', 'j',
		'enter', 'o', 'i', 'e', 'n', 'h',
		'rshift', '/', '.', ',', 'm', 'k',
		'rctrl', 'rpunc', 'space'
	],
};

const keyDefinitions = {
	tab: { text: '↹' },
	lshift: { text: '⇑' },
	rshift: { text: '⇑' },
	lpunc: { text: '!?$' },
	rpunc: { text: '!?$' },
	lctrl: { text: 'ctrl' },
	rctrl: { text: 'ctrl' },
	arrows: { text: '←↓↑→' },
	enter: { text: '↲' },
	backspace: { text: '↤' },
};

const config = {
	keys: {
		left: keyPositions.left.map(text => ({
			text,
			...keyDefinitions[text]
		})),
		right: keyPositions.right.map(text => ({
			text,
			name: text,
			...keyDefinitions[text]
		})),
	}
};

export default config;