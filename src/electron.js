const electron = require('electron');
const { app, BrowserWindow } = electron;

app.on('ready', () => {
	const {bounds} = electron.screen.getAllDisplays()[0];

	const window = new BrowserWindow({
		x: bounds.x + bounds.width - 600,
		y: bounds.y + bounds.height - 290,
		width: 500,
		height: 190,
		show: true,
		frame: false,
		alwaysOnTop: true,
		skipTaskbar: true,
		focusable: false,
		// transparent: true

		// webPreferences: {
		// 	nodeIntegration: true
		// }
	});

	window.loadURL('http://localhost:3001/');
});

app.on('window-all-closed', e => e.preventDefault());