const SerialPort = require('serialport');
const Websocket = require('ws');

function startWss() {
	const wss = new Websocket.Server({ port: 8765 });
	const websockets = [];

	wss.on('connection', ws => {
		websockets.push(ws);
		console.log(`Connected websocket, ${websockets.length} total`);

		ws.on('close', () => {
			websockets.splice(websockets.indexOf(ws));
			console.log(`Closed websocket, ${websockets.length} left`);
		});
	});

	return {
		send: data => {
			websockets.forEach(ws => ws.send(data));
		},
		close: () => {
			console.log(`Closing ${websockets.length} websockets`);
			websockets.forEach(ws => ws.close());
		}
	};
}

function startSerial(sendWs) {
	let port = null;

	function open() {
		console.log('opening port');
		port = new SerialPort('/dev/ttyACM0');

		port.on('data', data => {
			console.log(`Recieved: ${data}`);

			sendWs(data.readUInt8());
		});

		port.on('error', error => console.log(error));
		port.on('close', async error => {
			console.log("Port closed error: ", error)
			open();
		});
	}

	open();

	return {
		close() {
			if (port) {
				console.log('Closing serial');
				port.close();
				port = null;
			}
		}
	};
}

function start() {
	const {send,  close: closeWs} = startWss()

	const {close: closeSerial} = startSerial(send);

	process.on('exit', () => {
		console.log('process exited');
		closeWs();
		closeSerial();
	});

	process.on('SIGINT', () => process.exit(0));
	process.on('SIGTERM', () => process.exit(0));
}

start();