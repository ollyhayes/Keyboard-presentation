import React from 'react';
import { useState } from './store.js'
import Key from './Key.js';

export default function Legend() {
	const state = useState();

	const layers = [
		{text: state.baseLayer === "colemak" ? "Colemak" : "Qwerty", names: ["default"], x: 0, y: 0},
		{text: "Navigation", names: ["arrows"], x: 0, y: 1},
		{text: "Symbols", names: ["puncLeft", "puncRight"], x: 0, y: 2},
		{text: "Specials", names: ["specialLeft", "specialRight"], x: 1, y: 2},
		{text: "Numbers", names: ["num"], x: 0, y: 3},
		{text: "Functions", names: ["functions"], x: 1, y: 3},
	];

	const legendKeys = layers.map(({text, names, x, y}, i) => ({
		x: x * 180,
		y: y * 54,
		height: 39.263,
		width: 130,
		text,
		isPressed: names.includes(state.currentLayer),
		layerName: names[0],
	}));

	return <g
		class="legend"
		transform="translate(-300, 235)">
		{
			legendKeys.map(legendKey =>
				<Key {...legendKey}/>
			)}
	</g>;
}