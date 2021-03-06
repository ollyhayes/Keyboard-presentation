import React from 'react';
import { useState } from './store.js'
import classNames from 'classnames';

export default function Legend() {
	const state = useState();

	const layers = [
		{text: "Default", name: "default"},
		{text: "Punctuation", name: "punc"},
		{text: "Arrows", name: "arr"},
		{text: "Numbers", name: "numbrs"},
	];

	return <div>
		{
			layers.map(({text, name}) =>
				<div key={name} class={classNames({'is-selected': name === state.currentLayer})}>
					{text}
				</div>
			)
		}
	</div>
}