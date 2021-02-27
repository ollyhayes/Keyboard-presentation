#!/usr/bin/env python3
import asyncio
import websockets
import io, os
import sys, tty, termios
from threading import Thread

queue = asyncio.Queue()
sockets = []

async def serve(websocket, path):
	sockets.append(websocket)
	print(f"connected, {len(sockets)} websockets")

	while True:
		await asyncio.sleep(1000) # The socket closes when this method ends

async def send_codes():
	while True:
		code = await queue.get()
		print(code)

		for socket in sockets:
			try:
				await socket.send(code)
			except Exception as e:
				print(f"error: {e}")
				sockets.remove(socket)

def receive_keycodes():
	ttyACM = io.FileIO(
		os.open("/dev/ttyACM0", os.O_NOCTTY | os.O_RDWR),
		"r+")
	tty.setcbreak(ttyACM.fileno())

	while True:
		code = str(int.from_bytes(ttyACM.read(1), "big"))
		if code == 0:
			exit()
		loop.call_soon_threadsafe(queue.put_nowait, code)

receive_thread = Thread(target=receive_keycodes)
receive_thread.start()

loop = asyncio.get_event_loop()
asyncio.get_event_loop().run_until_complete(websockets.serve(serve, 'localhost', 8765))
asyncio.get_event_loop().run_until_complete(send_codes())
asyncio.get_event_loop().run_forever()