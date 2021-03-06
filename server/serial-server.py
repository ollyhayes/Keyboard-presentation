#!/usr/bin/env python3
import asyncio
import websockets
import io, os, sys
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
	try:
		port = "ttyACM0"
		with io.FileIO(
			os.open(f"/dev/{port}", os.O_NOCTTY | os.O_RDWR),
			"r+") as file:
			print(f"listening on {port}")

			tty.setcbreak(file.fileno())

			while True:
				code = str(int.from_bytes(file.read(1), "big"))
				# if code == "52":
				if code == "0":
					raise Exception("null character found, exiting!")

					sys.exit()

				loop.call_soon_threadsafe(queue.put_nowait, code)
	except Exception as e:
		print("Caught exception:")
		print(e)

		# write a change to the file system to trigger nodemon to restart the process
		with open("server/trigger.json", "a") as trigger_file:
			trigger_file.write("nothing")

receive_thread = Thread(target=receive_keycodes)
receive_thread.start()

loop = asyncio.get_event_loop()
asyncio.get_event_loop().run_until_complete(websockets.serve(serve, 'localhost', 8765))
asyncio.get_event_loop().run_until_complete(send_codes())
asyncio.get_event_loop().run_forever()