# First approach (superseded by serial-server.py): read key events from X11 using
# pyxhook. That only sees the keycodes the OS receives, not which physical key or
# layer was used, which is why the keyboard firmware now reports them over serial.
import asyncio
import websockets
import json
from pyxhook import HookManager

queue = asyncio.Queue()

def handle_key(event):
	hm.printevent(event)
	loop.call_soon_threadsafe(queue.put_nowait, json.dumps({
		"key": event.Key,
		"isPressed": event.MessageName == "key down"
	}))

async def serve(websocket, path):
	print('websocket connected')
	while True:
		message = await queue.get()
		await websocket.send(message)

hm = HookManager()
hm.KeyDown = handle_key
hm.KeyUp = handle_key
hm.start()

loop = asyncio.get_event_loop()
asyncio.get_event_loop().run_until_complete(websockets.serve(serve, 'localhost', 8765))
asyncio.get_event_loop().run_forever()