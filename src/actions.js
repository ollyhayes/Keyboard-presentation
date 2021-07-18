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
	});
}

function updateKey(keys, index, update) {
	return keys.map((key, keyIndex) =>
		index === keyIndex
			? update(key)
			: key);
}

const puncKeyIndex = 19;
const arrowsKeyIndex = 20;
const tabKeyIndex = 0;
const qKeyIndex = 1;
const aKeyIndex = 7;
const shiftKeyIndex = 12;
const escKeyIndex = 6;

function isPuncPressed(state, isLeft) {
	return isKeyPressed(state, puncKeyIndex, isLeft);
}

function isKeyPressed(state, keyIndex, isLeft) {
	const leftPressed = state.keys.left[keyIndex].isPressed;
	const rightPressed = state.keys.right[keyIndex].isPressed;

	return isLeft
		? leftPressed
		: isLeft === false
			? rightPressed
			: leftPressed || rightPressed;
}

function isLayer(state, ...layers) {
	return layers.includes(state.currentLayer);
}

function updateLayers(state, isLeft, index, isPressed) {
	if (index === puncKeyIndex && isLayer(state, 'default', 'puncLeft', 'puncRight', 'specialLeft', 'specialRight'))
		return {
			...state,
			currentLayer: isPressed && isPuncPressed(state, !isLeft)
				? isLeft ? 'specialLeft' : 'specialRight'
				: isPressed && !isPuncPressed(state, !isLeft)
					? isLeft ? 'puncLeft' : 'puncRight'
					: !isPressed && isPuncPressed(state, !isLeft)
						? isLeft ? 'puncRight' : 'puncLeft'
						: 'default'
		};
	else if (index === arrowsKeyIndex && isLeft && isLayer(state, 'default', 'arrows'))
		return {
			...state,
			currentLayer: isPressed ? 'arrows' : 'default'
		};
	else if (index === tabKeyIndex && isLeft && isLayer(state, 'default', 'num', 'functions'))
		return {
			...state,
			currentLayer: isPressed ? 'num' : 'default'
		};
	else if (index === qKeyIndex && isLeft && isLayer(state, 'num', 'functions'))
		return {
			...state,
			currentLayer: isPressed ? 'functions' : 'num'
		};
	else if (isLeft && [tabKeyIndex, aKeyIndex].every(i => isKeyPressed(state, i, true))) {
		return index === escKeyIndex
			? { ...state, baseLayer: 'qwerty' }
			: index === shiftKeyIndex
				? { ...state, baseLayer: 'colemak' }
				: state;
	}
	else
		return state;
}