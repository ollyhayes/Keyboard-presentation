// The keyboard firmware sends one byte per key event over serial:
//   byte = 40 + (released ? 50 : 0) + (right half ? 24 : 0) + keyIndex
// This decodes that byte back into which half, which key and whether it was pressed.
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