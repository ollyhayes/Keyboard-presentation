import React from 'react';
import { useState } from './store.js';
import Key from './Key.js';

export default function Legend() {
	const state = useState();

	const layers = [
		{
			text: state.baseLayer[0].toUpperCase() + state.baseLayer.slice(1),
			names: ['base'],
			x: 0,
			y: 0,
		},
		{text: 'Navigation', names: ['arrows'], x: 0, y: 1},
		{text: 'Symbols', names: ['puncLeft', 'puncRight'], x: 1, y: 0},
		{text: 'Specials', names: ['specialLeft', 'specialRight'], x: 1, y: 1},
		{text: 'Numbers', names: ['num'], x: 2, y: 0},
		{text: 'Functions', names: ['functions'], x: 2, y: 1},
	];

	const legendKeys = layers.map(({text, names, x, y}, i) => ({
		x: 100 + x * 170,
		y: 90 + y * 54,
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