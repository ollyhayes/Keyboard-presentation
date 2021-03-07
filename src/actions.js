
export function updateKeyState(store, isLeft, index, isPressed) {
	store.updateValue(state => {
		const stateWithPresses = {
			...state,
			keys: {
				...state.keys,
				left: isLeft ? updateKey(state.keys.left, index, isPressed) : state.keys.left,
				right: !isLeft ? updateKey(state.keys.right, index, isPressed) : state.keys.right,
			}
		};

		return {
			...state,
			...updateLayers(stateWithPresses, isLeft, index, isPressed),
		};
	})
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

export function isPuncPressed(state, isLeft) {
	const leftPressed = state.keys.left[puncKeyIndex].isPressed;
	const rightPressed = state.keys.right[puncKeyIndex].isPressed;

	return isLeft
		? leftPressed
		: isLeft === false
			? rightPressed
			: leftPressed || rightPressed;
}

function updateLayers(state, isLeft, index, isPressed) {
	if (index === puncKeyIndex && (state.currentLayer === 'colemak' || state.currentLayer === 'punc'))
		return {
			...state,
				currentLayer: isPressed
					? 'punc'
					: isPuncPressed(state)
						? 'punc'
						: 'colemak'
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