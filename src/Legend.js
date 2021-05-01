import React from 'react';
import { useState } from './store.js';
import Key from './Key.js';

export default function Legend() {
	const state = useState();

	const layers = [
		{text: state.baseLayer === 'colemak' ? 'Colemak' : 'Qwerty', names: ['base'], x: 0, y: 0},
		{text: 'Navigation', names: ['arrows'], x: 0, y: 1},
		{text: 'Symbols', names: ['puncLeft', 'puncRight'], x: 0, y: 2},
		{text: 'Specials', names: ['specialLeft', 'specialRight'], x: 1, y: 2},
		{text: 'Numbers', names: ['num'], x: 0, y: 3},
		{text: 'Functions', names: ['functions'], x: 1, y: 3},
	];

	const legendKeys = layers.map(({text, names, x, y}, i) => ({
		x: x * 170,
		y: y * 54,
		height: 39.263,
		width: 130,
		text,
		isPressed: names.includes(state.currentLayer),
		layerName: names[0],
	}));

	return <g
		className="legend"
		transform="translate(-300, 235)">
		{
			legendKeys.map((legendKey, index) =>
				<Key key={index} {...legendKey}/>
			)}
	</g>;
}