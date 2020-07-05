
export function updateKeyState(store, key, isPressed) {
	const keyName = deduceKeyName(key);
	store.updateValue(state => ({
		...state,
		...updateLayers(state, keyName, isPressed),
		keys: {
			...state.keys,
			left: updateKeys(state.keys.left, keyName, {isPressed}),
			right: updateKeys(state.keys.right, keyName, {isPressed})
		}
	}))
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

function deduceKeyName(key) {
	key = key.toLowerCase()
	// should really map to index here instead of default layer key
	const eventToKey = {
		'escape': 'esc',
		'control': 'lctrl',
		'shift': 'lshift',
		'comma': ',',
		'slash': '/',
		'period': '.',
		'backslash': 'z',
		'semicolon': ';',
		'shift_l': 'lshift',
		'shift_r': 'rshift',
		'control_l': 'lctrl',
		'control_r': 'rctrl',
		'super_l': 'c',
		'super_r': '.',
		'alt_l': 'v',
		'alt_r': 'm',
		'return': 'enter',
		'[65329]': 'lpunc',
		'[65332]': 'rpunc',
		'atakana': 'arrows',
		'up': 'e',
		'down': 'n',
		'left': 'h',
		'right': 'i'
	};
	return eventToKey[key] || key;
}

function updateKeys(keys, keyName, update) {
	return keys.map(key => key.name === keyName
		? {...key, ...update}
		: key)
}