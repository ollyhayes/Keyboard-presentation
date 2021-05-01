import ReconnectingWebSocket from 'reconnecting-websocket';

export default function openSocket(handleData) {
	// const socket = new WebSocket(`ws://${window.location.host}`);
	const socket = new ReconnectingWebSocket('ws://localhost:8765');

	socket.onopen = function () {
		console.log('socket connected');
		socket.send(JSON.stringify('hello!'));
	};

	socket.onerror = function (error) {
		console.log('WebSocket Error ' + error);
	};

	socket.onmessage = function ({data}) {
		handleData(data);
	};
}