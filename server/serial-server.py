#!/usr/bin/env python3
import asyncio
import websockets
import io, os

async def serve(websocket, path):
	for line in iter(tty.readline, None):
		print(line.strip())
		await websocket.send(line.strip())

tty = io.TextIOWrapper(
	io.FileIO(
		os.open("/dev/ttyACM0",
		os.O_NOCTTY | os.O_RDWR),
	"r+")
)

# for line in iter(tty.readline, None):
# 	print(line.strip())

loop = asyncio.get_event_loop()
asyncio.get_event_loop().run_until_complete(websockets.serve(serve, 'localhost', 8765))
asyncio.get_event_loop().run_forever()