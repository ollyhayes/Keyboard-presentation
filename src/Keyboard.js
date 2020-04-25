import React from 'react';

export default function Keyboard() {
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
	const path = [
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
	const pathString = path.reduce((pathString, {command, args}) => `${pathString}${command} ${args.join(' ')} `, '') + ' Z';

	return <svg className="keyboard" viewBox="0 0 1122.52 793.70135" height="793.70135" width="1122.52">
		<g transform="translate(598.023,393.8761)" id="g204">
			<path d={pathString}/>
		</g>
		{
			keys.map(({x, y, rotation, color}, index) =>
				<path
					key={index}
					stroke={color || 'red'}
					transform={rotation && `rotate(${rotation}, ${x}, ${y})`}
					d={`m ${x},${y} h 39.263 v 39.262 h -39.263 z`}
				/>)
		}
	</svg>;
}