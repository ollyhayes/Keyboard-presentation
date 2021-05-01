
export function updateKeyState(store, isLeft, index, isPressed) {
	store.updateValue(state => {
		const stateWithPresses = {
			...state,
			keys: {
				...state.keys,
				left: isLeft ? updateKey(state.keys.left, index, key => ({...key, isPressed})) : state.keys.left,
				right: !isLeft ? updateKey(state.keys.right, index, key => ({...key, isPressed})) : state.keys.right,
			}
		};

		return {
			...stateWithPresses,
			...updateLayers(stateWithPresses, isLeft, index, isPressed),
		};
	})
}

function updateKey(keys, index, update) {
	return keys.map((key, keyIndex) =>
		index === keyIndex
			? update(key)
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

function isLayer(state, ...layers) {
	return layers.includes(state.currentLayer)
}

function updateLayers(state, isLeft, index, isPressed) {
	if (index === puncKeyIndex && isLayer(state, 'colemak', 'qwerty', 'puncLeft', 'puncRight', 'specialLeft', 'specialRight'))
		return {
			...state,
			currentLayer: isPressed && isPuncPressed(state, !isLeft)
				? isLeft ? 'specialLeft' : 'specialRight'
				: isPressed && !isPuncPressed(state, !isLeft)
					? isLeft ? 'puncLeft' : 'puncRight'
					: !isPressed && isPuncPressed(state, !isLeft)
						? isLeft ? 'puncRight' : 'puncLeft'
						: 'colemak'
		};
	else if (index === arrowsKeyIndex && isLeft === true && isLayer(state, 'colemak', 'arrows'))
		return {
			...state,
			currentLayer: isPressed ? 'arrows' : 'colemak'
		};
	else if (index === tabKeyIndex && isLeft === true && isLayer(state, 'colemak', 'num', 'functions'))
		return {
			...state,
			currentLayer: isPressed ? 'num' : 'colemak'
		};
	else if (index === qKeyIndex && isLeft === true && isLayer(state, 'num', 'functions'))
		return {
			...state,
			currentLayer: isPressed ? 'functions' : 'num'
		};
	else
		return state;
}