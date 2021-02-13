
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

function updateLayers(state, isLeft, index, isPressed) {
	if (index === 19)
		return {
			...state,
				currentLayer: isPressed ? 'punc' : 'colemak'
		};
	else if (index === 20 && isLeft === true)
		return {
			...state,
				currentLayer: isPressed ? 'arrows' : 'colemak'
		};
	else
		return state;
}