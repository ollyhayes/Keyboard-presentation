const keyPositions = {
	left: [
		'tab', 'q', 'w', 'f', 'p', 'g',
		'esc', 'a', 'r', 's', 't', 'd',
		'shft', 'z', 'x', 'c', 'v', 'b',
		'ctrl', 'punc', 'arrows'
	],
	right: [
		'back', ';', 'y', 'u', 'l', 'j',
		'ret', 'o', 'i', 'e', 'n', 'h',
		'shft', '/', '.', ',', 'm', 'k',
		'ctrl', 'punc', 'space'
	],
	eventToKey: [

	]
};

const config = {
	keys: {
		left: keyPositions.left.map(text => ({text})),
		right: keyPositions.right.map(text => ({text}))
	}
};

export default config;