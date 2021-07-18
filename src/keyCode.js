const initialOffset = 40;
const releaseOffset = 50;
const righthandOffset = 24;

export function keyDataToKey(keyData) {
	let keyCode = keyData - initialOffset;
	const isPressed = keyCode < releaseOffset;
	keyCode %= releaseOffset;

	const isLeft = keyCode < righthandOffset;
	keyCode %= righthandOffset;

	keyCode = keyCode >= 21 ? keyCode - 3 : keyCode; // thumb keys are offset by three (because we're using the column to build the index)

	return {
		isLeft,
		keyCode,
		isPressed
	};
}