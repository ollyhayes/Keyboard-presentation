
export function updateKeyState(store, isLeft, index, isPressed) {
	store.updateValue(state => ({
		...state,
		...updateLayers(state, isLeft, index, isPressed),
		keys: {
			...state.keys,
			left: isLeft ? updateKey(state.keys.left, index, isPressed) : state.keys.left,
			right: !isLeft ? updateKey(state.keys.right, index, isPressed) : state.keys.right,
		}
	}))
}

function updateKey(keys, index, isPressed) {
	return keys.map((key, keyIndex) =>
		index === keyIndex
			? {...key, isPressed }
			: key)
}

const puncKeyIndex = 19;
const arrowsKeyIndex = 20;
const tabKeyIndex = 0;
const qKeyIndex = 1;

function updateLayers(state, isLeft, index, isPressed) {
	if (index === puncKeyIndex && (state.currentLayer === 'colemak' || state.currentLayer === 'punc'))
		return {
			...state,
				currentLayer: isPressed ? 'punc' : 'colemak'
		};
	else if (index === arrowsKeyIndex && isLeft === true && (state.currentLayer === 'colemak' || state.currentLayer === 'arrows'))
		return {
			...state,
				currentLayer: isPressed ? 'arrows' : 'colemak'
		};
	else if (index === tabKeyIndex && isLeft === true && (state.currentLayer === 'colemak' || state.currentLayer === 'num' || state.currentLayer === 'functions'))
		return {
			...state,
				currentLayer: isPressed ? 'num' : 'colemak'
		};
	else if (index === qKeyIndex && isLeft === true && (state.currentLayer === 'num' || state.currentLayer === 'functions'))
		return {
			...state,
				currentLayer: isPressed ? 'functions' : 'num'
		};
	else
		return state;
}