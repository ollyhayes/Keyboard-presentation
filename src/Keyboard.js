import React from 'react';

export default function Keyboard() {
	const keySize = 39.263

	const keys = [
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
		// { command: "L", args: [ 0, 0 ] },
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
	const path2 = [ 
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
		{ command: "l", args: [ 58.8, 0 ] },
		// { command: "c", args: [ 0.783, 0, 1.418, 0.635, 1.418, 1.418 ] },
		{ command: "v", args: [ 181.5 ] },
		// { command: "L", args: [ -61.001000000000005, 69.757, -61, 161.296 ] },
		// { command: "c", args: [ 0.232, 1.086, 0.808, 2.069, 1.641, 2.806 ] },
		// { command: "l", args: [ 54.076, 31.287 ] },
		// { command: "c", args: [ 1.495, 1.123, 1.954, 3.165, 1.085, 4.821 ] },
		{ command: "l", args: [ -37.524, 65.31 ] },
		{ command: "c", args: [ -0.013, 0.02, -0.027, 0.04, -0.041, 0.06, -0.788, 1.114, -2.331, 1.38, -3.445, 0.592 ] },
		{ command: "l", args: [ -41.811, -24.066 ] },
		{ command: "c", args: [ -0.258, -0.089, -0.524, -0.158, -0.794, -0.204 ] },
		{ command: "L", args: [ -192.11, 226.398 ] },
		{ command: "c", args: [ -0.367, -0.037, -0.713, -0.185, -0.993, -0.424 ] },
		{ command: "C", args: [ -193.103, 225.974, -223.01, 184.986, -223, 185 ] }
	]

	function transformKeys(keys, diff, multiplier) {
		diff = diff || [0,0,0]
		multiplier = multiplier || [1, 1, 1]
		return multiplier.map(key => ({...key, x: key.x * multiplier[0] + diff[0], y: key.y * multiplier[1] + diff[1]}))
	}

	function transformPath(path, diff, multiplier) {
		diff = diff || [0,0,0]
		multiplier = multiplier || [1, 1, 1]

		return path.map(c => ({...c, args: c.args.map((a, i) =>
				a * multiplier[getDimensionRelative(c.command, i)] + diff[getDimension(c.command, i)]
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
	}

	function createPath(path) {return path.reduce((pathString, {command, args}) => `${pathString}${command} ${args.join(' ')} `, '') + ' Z'};

	return <svg className="keyboard"  viewBox="-385 0 770 275">
		{/* <path d={createPath(path)}/> */}
		<path d={createPath(path2)}/>
		{
			keys.map(({x, y, height, width, rotation, color}, index) =>
				<rect 
					key={index}
					stroke={color || 'black'}
					transform={rotation && `rotate(${rotation}, ${x}, ${y})`}
					x={x - width / 2}
					y={y - height / 2}
					height={height}
					width={width}
				/>)
		}
		{/* <line x1="-1000" x2="1000"/>
		<line y1="-1000" y2="1000"/> */}
	</svg>;
}