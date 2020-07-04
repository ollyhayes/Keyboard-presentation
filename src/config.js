import { map, toPairs, pipe, values, mergeAll, reduce, mapObjIndexed, zip, zipWith, addIndex } from "ramda";

const layerDefinitions = {
	default: {
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
	},
	punc: {
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
	},
	arr: {
		left: [
			'', '', '', '', '', '',
			'', '', '←', '↑', '↓', '→',
			'', '', '', '', '', '',
			'', '', 'arrows'
		],
		right: [
			'', '', '', '', '', '',
			'', '', '→', '↑', '↓', '←',
			'', '', '', '', '', '',
			'', '', ''
		],
	}
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

// const applyToLayer = callback => (layer, name) => ({
// 		name,
// 		...layer,
// 		left: callback(layer.left),
// 		right: callback(layer.right)
// 	});

const mapIndexed = addIndex(map);

const applyToKeys = (keys, layerName) => mapIndexed((key, index) => ({
		index,
		name: key,
		[`text-${layerName}`]: keyDefinitions[key]?.text || key
}))(keys);

const logAll = map(a => console.log('logging: ', a));

const process = pipe(
	mapObjIndexed((layer, name) => ({
		name,
		...layer,
		left: applyToKeys(layer.left, name),
		right: applyToKeys(layer.right, name)
	})),
	values,
	reduce((keyboard, layer) => ({
		...keyboard,
		left: keyboard.left
			? zipWith((left, right) => ({...left, ...right}), layer.left, keyboard.left)
			: layer.left,
		right: keyboard.right
			? zipWith((left, right) => ({...left, ...right}), layer.right, keyboard.right)
			: layer.right
	}), {})
);

const keyboard = process(layerDefinitions);
// apply defnition to each key in each half of each layer
// merge keys of each layer to make one
// const processLayer = map(
// 	map(applyToLayer(keys => keys.map(substituteText(

console.log(keyboard);

const config = {
	keys: {
		left: [],
		right: []
	},
	currentLayer: 'colemak'
	// keys: {
	// 	left: keyPositions.left.map((name, index) => ({
	// 		name,
	// 		puncName: puncKeyPositions.left[index],
	// 		arrName: arrKeyPositions.left[index],
	// 	})).map(({name, puncName, arrName}) => ({
	// 		text: keyDefinitions[name]?.text || name,
	// 		puncText: keyDefinitions[puncName]?.text || name,
	// 		arrText: keyDefinitions[arrName]?.text || name
	// 	})),
	// 	right: keyPositions.right.map((name, index) => ({
	// 		name,
	// 		puncName: puncKeyPositions.right[index],
	// 		arrName: arrKeyPositions.right[index],
	// 	})).map(({name, puncName, arrName}) => ({
	// 		text: keyDefinitions[name]?.text || name,
	// 		puncText: keyDefinitions[puncName]?.text || name,
	// 		arrText: keyDefinitions[arrName]?.text || name
	// 	})),
	// },
	// currentLayer: 'colemak'
};

export default config;