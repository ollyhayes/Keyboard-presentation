import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider, createStore } from './store.js'
import config from './config';
import openSocket from './socket';
import { updateKeyState } from './actions';

const store = createStore(config);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);

openSocket(keyCode => {
	keyCode -= 40;
	const isPressed = keyCode < 50;
	keyCode %= 50;

	const isLeft = keyCode < 24;
	keyCode %= 24;

	keyCode = keyCode >= 21 ? keyCode - 3 : keyCode;
	
	// // take account the last row having high column indices
	
	updateKeyState(store, isLeft, keyCode, isPressed);
	console.log(Date.now(), isLeft, keyCode, isPressed);
});

// document.addEventListener('keydown', event => handleKey(event, true));
// document.addEventListener('keyup', event => handleKey(event, false));