const electron = require('electron');
const { app, BrowserWindow } = electron;

// Small always-on-top window in the corner of a screen, so the keyboard can be shown
// over a slide deck or a screen share.
app.on('ready', () => {
	// Hard-coded to the 4th monitor of my own setup; this should be configurable.
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