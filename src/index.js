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

openSocket(data => {
	const [direction, row, column] = data;
	const isPressed = direction === "P";
	const isLeft = row <= 3;
	const index = +column + (row % 4) * 6

	// take account the last row having high column indices
	
	updateKeyState(store, isLeft, index, isPressed);

	// console.log(Date.now(), isLeft, index, isPressed);
});

// document.addEventListener('keydown', event => handleKey(event, true));
// document.addEventListener('keyup', event => handleKey(event, false));