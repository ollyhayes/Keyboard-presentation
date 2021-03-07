
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

		// if punc pressed and still says punc, change the other key to äß (if it doesn't say punc then do nothing)
		// if punc released and the other key is also not pressed, change both keys to punc

		const leftPunc = stateWithPresses.keys.left[puncKeyIndex];
		const rightPunc = stateWithPresses.keys.right[puncKeyIndex];
		const stateWithUpdatedPuncKeys = index === puncKeyIndex && isLeft && isPressed && !rightPunc.isPressed
			? {
				...stateWithPresses,
				keys: {
					...stateWithPresses.keys,
					right: updateKey(stateWithPresses.keys.right, puncKeyIndex, key => ({...key, default: {...key.default, ...key.default.specialsKey }}))
				}
			}
			: index === puncKeyIndex && !isLeft && isPressed && !leftPunc.isPressed
				? {
					...stateWithPresses,
					keys: {
						...stateWithPresses.keys,
						left: updateKey(stateWithPresses.keys.left, puncKeyIndex, key => ({...key, default: {...key.default, ...key.default.specialsKey}}))
					}
				}
				: index === puncKeyIndex && !isPressed && !leftPunc.isPressed && !rightPunc.isPressed
					? {
						...stateWithPresses,
						keys: {
							...stateWithPresses.keys,
							left: updateKey(stateWithPresses.keys.left, puncKeyIndex, key => ({...key, default: {...key.default, ...key.default.puncKey}})),
							right: updateKey(stateWithPresses.keys.right, puncKeyIndex, key => ({...key, default: {...key.default, ...key.default.puncKey}}))
						}
					}
					: stateWithPresses;

		return {
			...stateWithUpdatedPuncKeys,
			...updateLayers(stateWithUpdatedPuncKeys, isLeft, index, isPressed),
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

function updateLayers(state, isLeft, index, isPressed) {
	if (index === puncKeyIndex && (state.currentLayer === 'colemak' || state.currentLayer === 'punc' || state.currentLayer === 'specials'))
		return {
			...state,
				currentLayer: isPressed && isPuncPressed(state, !isLeft)
					? 'specials'
					: isPressed && !isPuncPressed(state, !isLeft)
						? 'punc'
						: !isPressed && isPuncPressed(state, !isLeft)
							? 'punc'
							: 'colemak'
					// ? 'punc'
					// : isPuncPressed(state)
					// 	? 'punc'
					// 	: 'colemak'
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