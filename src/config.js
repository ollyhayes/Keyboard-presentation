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
const puncKeyPositions = {
	left: [
		'tab', '!', '"', '€', '$', '%',
		'esc', '|', '¬', '[', ']', '~',
		'lshift', '\\', '`', 'meta', 'alt', '#',
		'lctrl', 'lpunc', 'arrows'
	],
	right: [
		'backspace', ')', '(', '*', '&', '^',
		'enter', '+', '-', '}', '{', '\'',
		'rshift', '=', '_', 'meta', 'alt', '@',
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
		left: keyPositions.left.map((text, index) => ({
			text,
			name: text,
			...keyDefinitions[text],
			puncText: puncKeyPositions[index]
		})),
		right: keyPositions.right.map((text, index) => ({
			text,
			name: text,
			...keyDefinitions[text],
			puncText: puncKeyPositions[index]
		})),
	}
};

export default config;