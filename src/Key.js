import React from 'react';
import classNames from 'classnames';

function getKeyTransform(x, y, height, width, rotation) {
	const translate = ` translate(${x}, ${y})`;
	const rotate = rotation && `rotate(${rotation}, ${x}, ${y})`;

	return rotate
		? rotate + translate 
		: translate;
}

export default function Key({
	x,
	y,
	height,
	width,
	rotation,
	text,
	isPressed,
	bump,
	layerName,
	layerSwitching,
	currentLayer,
}) {
	return <g
		className={classNames('key', {"is-pressed": isPressed}, layerSwitching ?? layerName)}
		transform={getKeyTransform(x, y, height, width, rotation)}>
		<g>
			<rect class="category-indicator" x={-width / 2} y={-height / 2} width={width} height={height}/>
			<rect class="click-indicator" x={-width / 2} y={-height / 2} width={width} height={height}/>
			<text 
				textAnchor="middle" 
				dominantBaseline="central"
				style={{
					fontSize: text.length === 1 ? '25px' : '16px',
				}} >
				{text}
			</text>
			{
				bump
					? <line class="bump" x1="-6" x2="6" y1="16" y2="16"/>
					: null
			}
		</g>
	</g>;
}