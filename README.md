# Keyboard Presentation

A live, on-screen view of my split keyboard (a 42-key [Corne](https://github.com/foostan/crkbd)) that highlights keys as I press them and shows which layer is active.

I built it for a talk about keyboard layouts and keymaps. With so few keys, most characters sit on layers (symbols, navigation, numbers, function keys), and a slide can't show how that works. This lets the audience watch the keyboard while I type with some nice smooth animations.

![The base layer, rendered by this project](https://i.imgur.com/uxLJzul.png)

The screenshots of every layer in [my keymap's readme](https://github.com/ollyhayes/qmk_firmware/blob/master/keyboards/crkbd/keymaps/ollyhayes/readme.md) were made with this project.

<!-- TODO: add a GIF of it running, e.g. ![demo](docs/demo.gif) -->

## Firmware

The keyboard runs my own [QMK](https://github.com/qmk/qmk_firmware) keymap, which lives in [my QMK fork](https://github.com/ollyhayes/qmk_firmware/blob/master/keyboards/crkbd/keymaps/ollyhayes/readme.md). It's also [included in QMK upstream](https://github.com/qmk/qmk_firmware/tree/4908d4b1ca260efecf3613e6517aa3a6f2034876/keyboards/crkbd/keymaps/ollyhayes), added in [qmk/qmk_firmware#16632](https://github.com/qmk/qmk_firmware/pull/16632).

The code that sends key events over serial to this project is in my [shared user code](https://github.com/ollyhayes/qmk_firmware/blob/b1ad416e1c2db4c062331ec0fb3b4aadf633d494/users/ollyhayes/ollyhayes.c#L46-L54) in the fork.

## How it works

```
keyboard firmware --(serial, 1 byte per key event)--> Python server --(websocket)--> React app (browser / Electron)
```

- **Firmware** ([see above](#firmware)): the keyboard [reports each key press/release](https://github.com/ollyhayes/qmk_firmware/blob/b1ad416e1c2db4c062331ec0fb3b4aadf633d494/users/ollyhayes/ollyhayes.c#L46-L54) over USB serial as one byte. That byte encodes the half, the key index and pressed/released (see [`src/keyCode.js`](src/keyCode.js)).
- **Server** ([`server/serial-server.py`](server/serial-server.py)): reads from `/dev/ttyACM0` and sends each byte to all connected websocket clients on `ws://localhost:8765`.
- **Frontend** (React + SVG):
  - [`src/config.js`](src/config.js) defines every layer of the keymap and merges them into a single key model.
  - [`src/actions.js`](src/actions.js) follows the firmware's layer-switching rules, so the screen shows the same layer as the keyboard.
  - [`src/Keyboard.js`](src/Keyboard.js) draws both halves from coordinates digitised from the keyboard's plate outline.
- **Electron** ([`src/electron.cjs`](src/electron.cjs), optional): opens the page in a small always-on-top window, so it can sit over slides or a screen share.

The layers are colour-coded and shown in a legend. Pressed keys flash and then fade slowly, so the audience can follow fast key combinations.

## Running it

Requirements: Node.js, Python 3 with the `websockets` package, and a keyboard whose firmware sends the serial protocol described above.

```sh
npm install
pip install websockets

npm start                  # React dev server on http://localhost:8764
npm run start:server-py    # serial -> websocket bridge (restarts automatically via nodemon)
npm run start:electron     # optional: always-on-top window
```

[`tmux.sh`](tmux.sh) starts the frontend and the server together in tmux.

## Repo notes

This was a personal tool for a single talk, so parts of it are hard-coded to my setup (serial port, monitor index, layout).

Some files are experiments I kept for reference:

- `server/server.py`: the first version, which captured key events from X11 (pyxhook) instead of the firmware.
- `server/serial-server.js`: a Node version of the server that also changed my Philips Hue lights to match the active layer.
- `server/hid-server.py`: an abandoned attempt to use raw HID instead of serial.
- `todo`: my working notes, including the outline of the talk.

Built with React, SVG, Ramda, Python `asyncio`/`websockets` and Electron.
