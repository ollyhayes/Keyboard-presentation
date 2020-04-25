import asyncio
import websockets

async def serve(websocket, path):
	print(websocket)

asyncio.get_event_loop().run_until_complete(websockets.serve(serve, 'localhost', 8765))
asyncio.get_event_loop().run_forever()