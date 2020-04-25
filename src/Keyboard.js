import React from 'react';

export default function Keyboard() {
	const keySize = 39.263

	const keys = [
		{ x: 445.553, y: 508.28 },
		{ x: 445.553, y:454.418 },
		{ x: 445.553, y:400.556 },
		{ x: 499.417, y:508.28 },
		{ x: 499.417, y:454.418 },
		{ x: 499.417, y:400.556 },
		{ x: 553.279, y:521.745 },
		{ x: 553.279, y:467.883 },
		{ x: 553.279, y:414.022 },
		{ x: 607.141, y:528.479 },
		{ x: 607.141, y:474.616 },
		{ x: 607.141, y:420.754 },
		{ x: 661.003, y:521.745 },
		{ x: 661.003, y:467.883 },
		{ x: 661.003, y:414.022 },
		{ x: 714.865, y:515.013 },
		{ x: 714.865, y:461.15 },
		{ x: 714.865, y:407.288 },
		{ x: 634.072, y:358.388 },
		{ x: 690.072, y:355.388, rotation: -15 },
		{ x: 750.072, y:352.388, rotation: -30 },
	];

	const keysMatchingDefaultPath = [
		{ x: -152.470, y: 114.403},
		{ x: -152.470, y: 60.541},
		{ x: -152.470, y: 6.679},
		{ x: -98.606, y: 114.403},
		{ x: -98.606, y: 60.541},
		{ x: -98.606, y: 6.679},
		{ x: -44.744, y: 127.868},
		{ x: -44.744, y: 74.006},
		{ x: -44.744, y: 20.145},
		{ x: 9.117, y: 134.602},
		{ x: 9.117, y: 80.739},
		{ x: 9.117, y: 26.877},
		{ x: 62.980, y: 127.868},
		{ x: 62.980, y: 74.006},
		{ x: 62.980, y: 20.145},
		{ x: 116.841, y: 121.136},
		{ x: 116.841, y: 67.273},
		{ x: 116.841, y: 13.411},
		{ x: 36.048, y: -35.488},
		{ x: 92.048, y: -38.488, "rotation": -15 },
		{ x: 152.048, y: -41.488, "rotation": -30 }
	];
	const resquared = [
		{ "x": -132.8385, "y": 134.0345 },
		{ "x": -132.8385, "y": 80.1725 },
		{ "x": -132.8385, "y": 26.310499999999998 },
		{ "x": -78.97449999999999, "y": 134.0345 },
		{ "x": -78.97449999999999, "y": 80.1725 },
		{ "x": -78.97449999999999, "y": 26.310499999999998 },
		{ "x": -25.1125, "y": 147.49949999999998 },
		{ "x": -25.1125, "y": 93.6375 },
		{ "x": -25.1125, "y": 39.7765 },
		{ "x": 28.7485, "y": 154.2335 },
		{ "x": 28.7485, "y": 100.3705 },
		{ "x": 28.7485, "y": 46.5085 },
		{ "x": 82.61149999999999, "y": 147.49949999999998 },
		{ "x": 82.61149999999999, "y": 93.6375 },
		{ "x": 82.61149999999999, "y": 39.7765 },
		{ "x": 136.4725, "y": 140.76749999999998 },
		{ "x": 136.4725, "y": 86.9045 },
		{ "x": 136.4725, "y": 33.0425 },
		{ "x": 55.679500000000004, "y": -15.8565 },
		{ "x": 114, "y": -24, "rotation": 15 },
		{ "x": 178, "y": -34, "rotation": 30, height: keySize * 1.5 }
	  ].map(key => ({
		  height: keySize,
		  width: keySize,
		  ...key
	  }));

	const originedKeys = [
		{ x: -355.8385, y: 50.9654},
		{ x: -355.8385, y: 104.8275 },
		{ x: -355.8385, y: 158.6895 },
		{ x: -301.9745, y: 50.96549},
		{ x: -301.9745, y: 104.8275 },
		{ x: -301.9745, y: 158.6895 },
		{ x: -248.1125, y: 37.50050},
		{ x: -248.1125, y: 91.3625 },
		{ x: -248.1125, y: 145.2235 },
		{ x: -194.2515, y: 30.76650},
		{ x: -194.2515, y: 84.6295 },
		{ x: -194.2515, y: 138.4915 },
		{ x: -140.3885, y: 37.50050},
		{ x: -140.3885, y: 91.3625 },
		{ x: -140.3885, y: 145.2235 },
		{ x: -86.5275, y: 44.232500},
		{ x: -86.5275, y: 98.0955 },
		{ x: -86.5275, y: 151.9575 },
		{ x: -167.3204, y: 200.8565 },
		{ x: -109, y: 209, rotation: 15 },
		{ x: -45, y: 219, rotation: 30, height: keySize * 1.5 }
	  ].map(key => ({
		  height: keySize,
		  width: keySize,
		  ...key
	  }));

	const oldPath = [
		{ command: 'm', args: [0,0]},
		{ command: 'c', args: [-0.266,0.266,-0.626,0.415,-1.002,0.415]},
		{ command: 'h', args: [-102.055 -5.67 -48.192]},
		{ command: 'c', args: [-0.783,0,-1.417,0.635,-1.417,1.418]},
		{ command: 'v', args: [156.625]},
		{ command: 'c', args: [0,0.783,0.634,1.417,1.417,1.417]},
		{ command: 'h', args: [48.192,5.67,51.028]},
		{ command: 'c', args: [0.782,0,1.417,0.635,1.417,1.418]},
		{ command: 'v', args: [10.631]},
		{ command: 'c', args: [0,0.782,0.634,1.417,1.417,1.417]},
		{ command: 'H', args: [1.833]},
		{ command: 'c', args: [0.782,0,1.417,0.635,1.417,1.418]},
		{ command: 'v', args: [3.543]},
		{ command: 'c', args: [0,0.783,0.635,1.418,1.418,1.418]},
		{ command: 'H', args: [52.86]},
		{ command: 'c', args: [0.783,0,1.417,-0.635,1.417,-1.418]},
		{ command: 'v', args: [-3.543]},
		{ command: 'c', args: [0,-0.783,0.635,-1.418,1.417,-1.418]},
		{ command: 'h', args: [51.028]},
		{ command: 'c', args: [0.783,0,1.418,-0.635,1.418,-1.417]},
		{ command: 'v', args: [-4.253]},
		{ command: 'c', args: [0,-0.782,0.634,-1.417,1.417,-1.417]},
		{ command: 'h', args: [51.027]},
		{ command: 'c', args: [0.783,0,1.418,-0.635,1.418,-1.418]},
		{ command: 'v', args: [-3.499]},
		{ command: 'L', args: [161.999,115.243,162,23.704]},
		{ command: 'c', args: [0.232,-1.086,0.808,-2.069,1.641,-2.806]},
		{ command: 'l', args: [54.076,-31.287]},
		{ command: 'c', args: [1.495,-1.123,1.954,-3.165,1.085,-4.821]},
		{ command: 'l', args: [-37.524,-65.31]},
		{ command: 'c', args: [-0.013,-0.02,-0.027,-0.04,-0.041,-0.06,-0.788,-1.114,-2.331,-1.38,-3.445,-0.592]},
		{ command: 'l', args: [-41.811,24.066]},
		{ command: 'c', args: [-0.258,0.089,-0.524,0.158,-0.794,0.204]},
		{ command: 'L', args: [30.89,-41.398]},
		{ command: 'c', args: [-0.367,0.037,-0.713,0.185,-0.993,0.424]},
		{ command: 'C', args: [29.897,-40.974,-0.01,0.014,0,0]},
	];
	const path = [ 
		{ command: "m", args: [ -223, 185 ] },
		{ command: "c", args: [ -0.266, -0.266, -0.626, -0.415, -1.002, -0.415 ] },
		{ command: "h", args: [ -155.917 ] },
		{ command: "c", args: [ -0.783, 0, -1.417, -0.635, -1.417, -1.418 ] },
		{ command: "v", args: [ -156.625 ] },
		{ command: "c", args: [ 0, -0.783, 0.634, -1.417, 1.417, -1.417 ] },
		{ command: "h", args: [ 48.192, 5.67, 51.028 ] },
		{ command: "c", args: [ 0.782, 0, 1.417, -0.635, 1.417, -1.418 ] },
		{ command: "v", args: [ -10.631 ] },
		{ command: "c", args: [ 0, -0.782, 0.634, -1.417, 1.417, -1.417 ] },
		{ command: "H", args: [ -221.167 ] },
		{ command: "c", args: [ 0.782, 0, 1.417, -0.635, 1.417, -1.418 ] },
		{ command: "v", args: [ -3.543 ] },
		{ command: "c", args: [ 0, -0.783, 0.635, -1.418, 1.418, -1.418 ] },
		{ command: "H", args: [ -170.14 ] },
		{ command: "c", args: [ 0.783, 0, 1.417, 0.635, 1.417, 1.418 ] },
		{ command: "v", args: [ 3.543 ] },
		{ command: "c", args: [ 0, 0.783, 0.635, 1.418, 1.417, 1.418 ] },
		{ command: "h", args: [ 51.028 ] },
		{ command: "c", args: [ 0.783, 0, 1.418, 0.635, 1.418, 1.417 ] },
		{ command: "v", args: [ 4.253 ] },
		{ command: "c", args: [ 0, 0.782, 0.634, 1.417, 1.417, 1.417 ] },
		{ command: "h", args: [ 51.027 ] },
		{ command: "c", args: [ 0.783, 0, 1.418, 0.635, 1.418, 1.418 ] },
		{ command: "v", args: [ 3.499 ] },
		{ command: "L", args: [ -61.001000000000005, 69.757, -61, 161.296 ] },
		{ command: "c", args: [ 0.232, 1.086, 0.808, 2.069, 1.641, 2.806 ] },
		{ command: "l", args: [ 54.076, 31.287 ] },
		{ command: "c", args: [ 1.495, 1.123, 1.954, 3.165, 1.085, 4.821 ] },
		{ command: "l", args: [ -37.524, 65.31 ] },
		{ command: "c", args: [ -0.013, 0.02, -0.027, 0.04, -0.041, 0.06, -0.788, 1.114, -2.331, 1.38, -3.445, 0.592 ] },
		{ command: "l", args: [ -41.811, -24.066 ] },
		{ command: "c", args: [ -0.258, -0.089, -0.524, -0.158, -0.794, -0.204 ] },
		{ command: "L", args: [ -192.11, 226.398 ] },
		{ command: "c", args: [ -0.367, -0.037, -0.713, -0.185, -0.993, -0.424 ] },
		{ command: "C", args: [ -193.103, 225.974, -223.01, 184.986, -223, 185 ] }
	]

	// const diff = [-598.023-223,393.8761+185,0]
	// const diff = [-598.023,-393.8761,0]
	// const diff = [keySize / 2,keySize / 2,0]
	const diff = [0,0,0]
	// const diff = [-223, 185, 0]
	// const mult = [1,1,1]
	const mult = [1, 1, 1]

	const translatedKeys = originedKeys.map(key => ({...key, x: key.x * mult[0] + diff[0], y: key.y * mult[1] + diff[1]}))


	// const xDiff = 0.01;//598.023;
	// const yDiff = 141.398;//393.8761;
	// const pathDiff = [-223, 185, 0]
	const pathDiff = [0,0,0]
	// const pathMult = [1,-1,1]
	const pathMult = [1, 1, 1]

	const translatedPath = path.map(c => ({...c, args: c.args.map((a, i) =>
			a * pathMult[getDimensionRelative(c.command, i)] + pathDiff[getDimension(c.command, i)]
	)}))

	function getDimension(command, index) {
		return command === 'C' || command === 'L' || command === 'm'
			? index % 2 === 0 ? 0 : 1
			: command === 'H'
				? 0
				: command === 'V'
					? 1
					: 2
	}

	function getDimensionRelative(command, index) {
		return command.toUpperCase() === 'C' || command.toUpperCase() === 'L' || command.toUpperCase() === 'm'
			? index % 2 === 0 ? 0 : 1
			: command.toUpperCase() === 'H'
				? 0
				: command.toUpperCase() === 'V'
					? 1
					: 2
	}

	console.log(JSON.stringify(translatedPath, undefined, ' '))

	const pathString = translatedPath.reduce((pathString, {command, args}) => `${pathString}${command} ${args.join(' ')} `, '') + ' Z';

	let keysXMin = 999;
	let keysYMin = 99;
	
	keys.forEach(key => {
	  keysXMin = Math.min(key.x, keysXMin);
	  keysYMin = Math.min(key.y, keysYMin);
	})
	
	console.log(`keys: ${keysXMin}, ${keysYMin}`)
	
	// let pathXMin = 999;
	// let pathYMin = 999;
	
	// translatedPath.forEach(command => {
	//   if (command.command === command.command.toUpperCase())
	// 	 command.args.forEach((arg, index) => {
	// 		getDimension(command.command, index) === 0
	// 			? pathXMin = Math.min(arg, pathXMin)
	// 			: pathYMin = Math.min(arg, pathYMin)
	// 	 })
	// });
								  
	// console.log(`path: ${pathXMin}, ${pathYMin}`)

	return <svg className="keyboard" viewBox="-500 -500 1122.52 793.70135" height="793.70135" width="1122.52">
		<path d={pathString}/>
		{/* {
			translatedKeys.map(({x, y, rotation, color}, index) =>
				<path
					key={index}
					stroke={color || 'red'}
					transform={rotation && `rotate(${rotation}, ${x}, ${y})`}
					d={`m ${x},${y} h 39.263 v 39.262 h -39.263 z`}
				/>)
		} */}
		{
			translatedKeys.map(({x, y, height, width, rotation, color}, index) =>
				<rect 
					key={index}
					stroke={color || 'green'}
					transform={rotation && `rotate(${rotation}, ${x}, ${y})`}
					x={x - width / 2}
					y={y - height / 2}
					height={height}
					width={width}
				/>)
				// <path
				// 	key={index}
				// 	stroke={color || 'green'}
				// 	transform={rotation && `rotate(${rotation}, ${x}, ${y})`}
				// 	d={`m ${x},${y} h 39.263 v 39.262 h -39.263 z`}
				// />)
		}
		<line x1="-1000" x2="1000"/>
		<line y1="-1000" y2="1000"/>
	</svg>;
}