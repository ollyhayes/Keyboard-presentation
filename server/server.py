import asyncio
import websockets
from pyxhook import HookManager

queue = asyncio.Queue()

def handle_key_down(event):
	hm.printevent(event)
	loop.call_soon_threadsafe(queue.put_nowait, event.Key)

def handle_key_up(event):
	hm.printevent(event)
	loop.call_soon_threadsafe(queue.put_nowait, event.Key)

async def serve(websocket, path):
	print('websocket connected')
	while True:
		message = await queue.get()
		await websocket.send(message)

hm = HookManager()
hm.KeyDown = handle_key_down
hm.KeyUp = handle_key_up
hm.start()

loop = asyncio.get_event_loop()
asyncio.get_event_loop().run_until_complete(websockets.serve(serve, 'localhost', 8765))
asyncio.get_event_loop().run_forever()