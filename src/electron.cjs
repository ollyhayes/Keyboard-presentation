const electron = require('electron');
const { app, BrowserWindow } = electron;

app.on('ready', () => {
	const {bounds} = electron.screen.getAllDisplays()[3];

	const window = new BrowserWindow({
		x: bounds.x + bounds.width - 600,
		y: bounds.y + bounds.height - 290,
		width: 500,
		height: 300,
		show: true,
		// frame: false,
		autoHideMenuBar: true,
		alwaysOnTop: true,
		// skipTaskbar: true,
		// focusable: false
	});

	window.loadURL('http://localhost:8764/');
});

// app.on('window-all-closed', e => e.preventDefault());