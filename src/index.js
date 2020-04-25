import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider, createStore } from './store.js'
import config from './config';
import initialiseSocket from './socket';

const store = createStore(config);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);

initialiseSocket(data => {
	console.log(data);
});

document.addEventListener('keydown', event => handleKey(event, true));
document.addEventListener('keyup', event => handleKey(event, false));

function handleKey(event, isPressed) {
	event.preventDefault();

	store.updateValue(state => ({
		...state,
		keys: {
			...state.keys,
			left: updateKey(state.keys.left, event.key, {isPressed}),
			right: updateKey(state.keys.right, event.key, {isPressed})
		}
	}))
}

function updateKey(keys, key, update) {
	const eventToKey = {
		'Escape': 'esc',
		'Tab': '↹',
		'Enter': '↲',
		'Backspace': '↤',
		'Control': 'ctrl',
		'Shift': '⇑'
	};
	const withText = eventToKey[key] || key;

	return keys.map(key => key.text === withText
		? {...key, ...update}
		: key)
}