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

initialiseSocket(json => {
	const data = JSON.parse(json);
	console.log(Date.now(), data.key, data.isPressed);
	
	store.updateValue(state => ({
		...state,
		keys: {
			...state.keys,
			left: updateKey(state.keys.left, data.key, {isPressed: data.isPressed}),
			right: updateKey(state.keys.right, data.key, {isPressed: data.isPressed})
		}
	}))
});

// document.addEventListener('keydown', event => handleKey(event, true));
// document.addEventListener('keyup', event => handleKey(event, false));

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
	key = key.toLowerCase()
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
		'return': 'enter',
		'[65329]': 'lpunc',
		'[65332]': 'rpunc',
		'atakana': 'arrows',
	};
	const withText = eventToKey[key] || key;

	return keys.map(key => key.name === withText
		? {...key, ...update}
		: key)
}