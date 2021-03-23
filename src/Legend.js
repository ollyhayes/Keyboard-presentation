import React from 'react';
import { useState } from './store.js'
import Key from './Key.js';

export default function Legend() {
	const state = useState();

	const layers = [
		{text: "Default", name: "default", x: 0, y: 0},
		{text: "Navigation", name: "arrows", x: 0, y: 1},
		{text: "Symbols", name: "punc", x: 0, y: 2},
		{text: "Specials", name: "specials", x: 1, y: 2},
		{text: "Numbers", name: "num", x: 0, y: 3},
		{text: "Functions", name: "functions", x: 1, y: 3},
	];

	const legendKeys = layers.map(({text, name, x, y}, i) => ({
		x: x * 180,
		y: y * 54,
		height: 39.263,
		width: 130,
		text,
		isPressed: name === state.currentLayer,
		layerName: name,
	}));

	return <g
		class="legend"
		transform="translate(-300, 235)">
		{
			legendKeys.map(legendKey =>
				<Key {...legendKey}/>
			)}
		{/* {
			layers.map(({text, name}) =>
				<g key={name} class={classNames({'is-selected': name === state.currentLayer})}>
					<rect class="category-indicator" x={-width / 2} y={-height / 2} width={width} height={height}/>
					<rect class="click-indicator" x={-width / 2} y={-height / 2} width={width} height={height}/>
					<text 
						textAnchor="middle" 
						dominantBaseline="central"
						style={{
							fontSize: text.length === 1 ? '25px' : '16px',
						}}>
						{text}
					</text>
				</g>
			)
		} */}
	</g>;
}