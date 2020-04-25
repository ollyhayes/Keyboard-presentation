export function translationSet(store, text, pointerPosition) {
	const overlayPosition = { x: pointerPosition.x + 50, y: pointerPosition.y + 50}

	store.updateValue(state => ({
		...state,
		text: text,
		translatedText: undefined,
		systemStatus: SystemStatus.awaitingTrigger,
		overlayPosition: overlayPosition,
		pointerPosition: pointerPosition,
		opacity: getOpacity(pointerPosition, overlayPosition)
	}))
}

export function 