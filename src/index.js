import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider, createStore } from './store.js';
import config from './config';
import openSocket from './socket';
import { updateKeyState } from './actions';
import setHueLayer from './hue';

const store = createStore(config);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);

const initialOffset = 40;
const releaseOffset = 50;
const righthandOffset = 24;

openSocket(keyCode => {
	keyCode -= initialOffset;
	const isPressed = keyCode < releaseOffset;
	keyCode %= releaseOffset;

	const isLeft = keyCode < righthandOffset;
	keyCode %= righthandOffset;

	keyCode = keyCode >= 21 ? keyCode - 3 : keyCode; // thumb keys are offset by three (because we're using the column to build the index)
	
	updateKeyState(store, isLeft, keyCode, isPressed);
	// console.log(Date.now(), isLeft, keyCode, isPressed);

	store.subscribe(state => setHueLayer(state.currentLayer));
});

// document.addEventListener('keydown', event => handleKey(event, true));
// document.addEventListener('keyup', event => handleKey(event, false));