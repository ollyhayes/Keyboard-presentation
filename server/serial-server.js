const SerialPort = require('serialport');
const Websocket = require('ws');
const Phea = require('phea');

const bridgeDetails = {
	address: '192.168.0.15',
	username: 'bB8qVwOWQLvcJU6Wad80o0hkE9YZIXFEm9HEmeTH',
	psk: 'CE8837BE11743A8BB7CC73E35FABF57F'
}
const entertainmentGroupId = 4;

async function startPhea() {
	console.log("Starting Phea");
	await new Promise(resolve => setTimeout(resolve, 5000)); // nodemon restarts it too fast

	const bridge = await Phea.bridge(bridgeDetails);
	// const groups = await bridge.getGroup(0);
	// console.log(groups);

	await bridge.start(entertainmentGroupId);

	let colourIndex = 0;
	const colours = [
		[255, 0, 0],
		[0, 255, 0],
		[0, 0, 255]
	];

	return {
		send: data => {
			bridge.transition([0], colours[colourIndex++ % colours.length], 0);
		},
		close: async () => {
			console.log('Closing phea');
			await bridge.stop();
			console.log('Closed phea');
		}
	};
}

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


async function start() {
	const {send: sendWs, close: closeWs} = startWss();
	const {send: sendPhea, close: closePhea} = await startPhea().catch(console.log);

	function send(data) {
		sendWs(data);
		sendPhea(data);
	}

	const {close: closeSerial} = startSerial(send);

	async function exitHandler() {
		console.log('process exited');
		closeWs();
		closeSerial();
		await closePhea();
		process.exit();
	}

	[
		'beforeExit', 'uncaughtException', 'unhandledRejection', 
		'SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 
		'SIGABRT','SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 
		'SIGUSR2', 'SIGTERM', 
	].forEach(event => process.on(event, exitHandler));
}

start();