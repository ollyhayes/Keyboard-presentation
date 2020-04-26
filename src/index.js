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

openSocket(json => {
	const data = JSON.parse(json);
	console.log(Date.now(), data.key, data.isPressed);
	
	updateKeyState(store, data.key, data.isPressed);
});

// document.addEventListener('keydown', event => handleKey(event, true));
// document.addEventListener('keyup', event => handleKey(event, false));

function handleKey(event, isPressed) {
	event.preventDefault();

	updateKeyState(store, event.key, isPressed);
}