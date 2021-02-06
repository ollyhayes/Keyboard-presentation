
export function updateKeyState(store, isLeft, index, isPressed) {
	store.updateValue(state => ({
		...state,
		// ...updateLayers(state, keyName, isPressed),
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

function updateLayers(state, key, isPressed) {
	switch (key) {
		case 'lpunc':
		case 'rpunc':
			return {
				...state,
				currentLayer: isPressed ? 'punc' : 'colemak'
			};
		case 'arrows':
			return {
				...state,
				currentLayer: isPressed ? 'arrows' : 'colemak'
			};
		default:
			return state;
	}
}