#!/usr/bin/env python3
import asyncio
import websockets
import io, os
import sys, tty, termios
from threading import Thread

queue = asyncio.Queue()

async def serve(websocket, path):
	print("connected")
	# queue = asyncio.Queue() # at the moment, on refresh, both old & new websocket battle for codes
	# the above would make on the latest receive them, except that receive_keycods still pipes into the previous
	# could stop the loop below when the websockets ends, but what if two taps connected at once?
	# really I think queue is wrong, need to be able to broadcast it to all websockets

	while True:
		code = await queue.get()
		print(code)
		await websocket.send(code)

def receive_keycodes():
	ttyACM = io.FileIO(
		os.open("/dev/ttyACM1", os.O_NOCTTY | os.O_RDWR),
		"r+")
	tty.setcbreak(ttyACM.fileno())

	while True:
		code = str(int.from_bytes(ttyACM.read(1), "big"))
		print(code)
		loop.call_soon_threadsafe(queue.put_nowait, code)
	
	# while True:
	# 	code = int.from_bytes(ttyACM.read(1), "big")
	# 	print(code)

receive_thread = Thread(target=receive_keycodes)
receive_thread.start()

loop = asyncio.get_event_loop()
asyncio.get_event_loop().run_until_complete(websockets.serve(serve, 'localhost', 8765))
asyncio.get_event_loop().run_forever()