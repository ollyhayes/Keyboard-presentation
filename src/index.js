import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { Provider, createStore } from './store.js';
import config from './config.js';
import openSocket from './socket.js';
import { updateKeyState } from './actions.js';
import { keyDataToKey } from './keyCode.js';
// import setHueLayer from './hue';

const store = createStore(config);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);

openSocket(keyData => {
	const {
		isLeft,
		keyCode,
		isPressed
	} = keyDataToKey(keyData);
	
	updateKeyState(store, isLeft, keyCode, isPressed);
	// console.log(Date.now(), isLeft, keyCode, isPressed);

	// store.subscribe(state => setHueLayer(state.currentLayer));
});

// document.addEventListener('keydown', event => handleKey(event, true));
// document.addEventListener('keyup', event => handleKey(event, false));