import { map, pipe, values, reduce, mapObjIndexed, zipWith, addIndex, mergeRight } from "ramda";

const layerDefinitions = {
	default: {
		left: [
			'tab', 'q', 'w', 'f', 'p', 'g',
			'esc', 'a', 'r', 's', 't', 'd',
			'shift', 'z', 'x', 'c', 'v', 'b',
			'ctrl', 'punc', 'arrows'
		],
		right: [
			'backspace', ';', 'y', 'u', 'l', 'j',
			'enter', 'o', 'i', 'e', 'n', 'h',
			'shift', '/', '.', ',', 'm', 'k',
			'ctrl', 'punc', 'space'
		],
	},
	qwerty: {
		left: [
			'tab', 'q', 'w', 'e', 'r', 't',
			'esc', 'a', 's', 'd', 'f', 'g',
			'shift', 'z', 'x', 'c', 'v', 'b',
			'ctrl', 'punc', 'arrows'
		],
		right: [
			'backspace', 'p', 'o', 'i', 'u', 'y',
			'enter', ';', 'l', 'k', 'j', 'h',
			'shift', '/', '.', ',', 'm', 'n',
			'ctrl', 'punc', 'space'
		],
	},
	puncLeft: { // punc & special is repeated twice because the specials key 'ß' needs to switch depending on which
		left: [
			'a/t', '!', '"', '€', '$', '%',
			'', '|', '¬', '[', ']', '~',
			'', '\\', '`', 'meta', 'alt', '#',
			'', '', ''
		],
		right: [
			'', ')', '(', '*', '&', '^',
			'', '+', '-', '}', '{', '\'',
			'', '=', '_', 'meta', 'alt', '@',
			'', 'ß', ''
		],
	},
	puncRight: {
		left: [
			'a/t', '!', '"', '€', '$', '%',
			'', '|', '¬', '[', ']', '~',
			'', '\\', '`', 'meta', 'alt', '#',
			'', 'ß', ''
		],
		right: [
			'', ')', '(', '*', '&', '^',
			'', '+', '-', '}', '{', '\'',
			'', '=', '_', 'meta', 'alt', '@',
			'', '', ''
		],
	},
	specialLeft: {
		left: [
			'', '', '', '£', '', '',
			'', 'ä', '', 'ß', '✓', '',
			'', '', '✗', '', '', '',
			'', 'ß', ''
		],
		right: [
			'', '', '', 'ü', '', '',
			'', 'ö', '', '', '', '°',
			'', '', '', '', '', '',
			'', '', ''
		],
	},
	specialRight: {
		left: [
			'', '', '', '£', '', '',
			'', 'ä', '', 'ß', '✓', '',
			'', '', '✗', '', '', '',
			'', '', ''
		],
		right: [
			'', '', '', 'ü', '', '',
			'', 'ö', '', '', '', '°',
			'', '', '', '', '', '',
			'', 'ß', ''
		],
	},
	arrows: {
		left: [
			'', '‽', 'home', 'pgu', 'pgd', 'end',
			'enter', 'del', '←', '↑', '↓', '→',
			'', 'ins', 'c←', 'meta', 'alt', 'c→',
			'', 'F12', ''
		],
		right: [
			'', '‽', 'end', 'pgu', 'pgd', 'home',
			'', 'del', '→', '↑', '↓', '←',
			'', 'ins', 'c→', '↑↑↑↑', '↓↓↓↓', 'c←',
			'', 'F12', ''
		],
	},
	num: {
		left: [
			'', 'Fn', '1', '2', '3', '',
			'', '', '4', '5', '6', '',
			'', '', '1', '2', '9', '',
			'', '', ''
		],
		right: [
			'', '', '9', '8', '7', '',
			'', '', '6', '5', '4', '',
			'', '', '3', '2', '1', '',
			'.', '0', ''
		],
	},
	functions: {
		left: [
			'', 'Fn', 'F7', 'F8', 'F9', 'F12',
			'', '', 'F4', 'F5', 'F6', 'F11',
			'', '', 'F1', 'F2', 'F3', 'F10',
			'', '', ''
		],
		right: [
			'', '', 'F9', 'F8', 'F7', 'F12',
			'', '', 'F6', 'F5', 'F4', 'F11',
			'', '', 'F3', 'F2', 'F1', 'F10',
			'', '', ''
		],
	},
};

// function getPuncText(isLeft) {
// 	return state => isPuncPressed(state, isLeft)
// 		? "!?$"
// 		: "äß";
// }

const puncKey = { text: '!?$', layerSwitching: "punc" };
const specialsKey = { text: 'ä', layerSwitching: "specials" };

const keyDefinitions = {
	tab: { text: '↹', layerSwitching: "num"},
	shift: { text: '⇑' },
	punc: {...puncKey, puncKey, specialsKey },
	arrows: { text: '←↓↑→', layerSwitching: "arrows" },
	enter: { text: '↲' },
	backspace: { text: '↤' },
	Fx: { layerSwitching: "functions" },
	ß: { layerSwitching: 'specials' }
};

const mapIndexed = addIndex(map);

//bad name, applying what? pass definitions to make pure
const applyToKeys = (keys, layerName) => mapIndexed((key, index) => ({
		index,
		name: key,
		[layerName]: {
			name: key,
			layerName,
			...keyDefinitions[key]
		}
}))(keys);

const process = pipe(
	mapObjIndexed((layer, name) => ({
		...layer,
		left: applyToKeys(layer.left, name),
		right: applyToKeys(layer.right, name)
	})),
	values,
	reduce((keyboard, layer) => ({
		...keyboard,
		left: keyboard.left
			? zipWith(mergeRight, layer.left, keyboard.left)
			: layer.left,
		right: keyboard.right
			? zipWith(mergeRight, layer.right, keyboard.right)
			: layer.right
	}), {})
);

const keyboard = process(layerDefinitions);

console.log('Keyboard: ', keyboard);

const config = {
	keys: keyboard,
	currentLayer: 'colemak'
};

export default config;