const SerialPort = require('serialport');
const { map } = require('ramda');
const colorsys = require('colorsys');
const Websocket = require('ws');
const Phea = require('phea');
const { createStore } = require('./store');

const bridgeDetails = {
	address: '192.168.0.15',
	username: 'bB8qVwOWQLvcJU6Wad80o0hkE9YZIXFEm9HEmeTH',
	psk: 'CE8837BE11743A8BB7CC73E35FABF57F'
}
const entertainmentGroupId = 4;

async function startPhea() {
	// seemed this was actually the easiest way to get esm modules in
	const { updateKeyState } = await import('../src/actions.js');
	const { keyDataToKey } = await import('../src/keyCode.js');
	const config = await import('../src/config.js');

	console.log("Starting Phea");
	// await new Promise(resolve => setTimeout(resolve, 5000)); // nodemon restarts it too fast

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

	// define these somewhere better and set them as the css variables
	const layerColours = map(rgbHexValue => {
		const {r, g, b} = colorsys.hex2Rgb(rgbHexValue);
		return [r, g, b];
	}, {
		default: 'ffebb5',
		num: 'baffb4',
		arrows: 'b5b4ff',
		puncLeft: 'ffb5ff',
		puncRight: 'ffb5ff',
		functions: 'ffbab5',
		specialLeft: 'a9fffb',
		specialRight: 'a9fffb',
	});

	const store = createStore(config.default);

	store.subscribe(state => {
		const rgb = layerColours[state.currentLayer];

		bridge.transition([0], rgb, 0);
	});

	return {
		send: data => {
			const {
				isLeft,
				keyCode,
				isPressed
			} = keyDataToKey(data);

			updateKeyState(store, isLeft, keyCode, isPressed);

			// bridge.transition([0], colours[colourIndex++ % colours.length], 0);
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

function startSerial(handleData) {
	let port = null;

	function open() {
		console.log('opening port');
		port = new SerialPort('/dev/ttyACM0');

		port.on('data', data => {
			try {
				console.log(`Recieved: ${data}`);

				handleData(data.readUInt8());
			} catch (error) {
				console.log(error);
			}
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
		'beforeExit', 'unhandledRejection', 
		'SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 
		'SIGABRT','SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 
		'SIGUSR2', 'SIGTERM', 
	].forEach(event => process.on(event, exitHandler));
}

start();