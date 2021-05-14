// const request = require('request-promise-native');
// const convert = require('

import request from 'request-promise-native';
import * as convert from 'color-convert'; // convert always undefined, must switch to diferent library
import {mapObjIndexed} from 'ramda';

const bridgeIp = '192.168.0.15';
const username = 'z113OjEddHlIbUrcagx7LL49ePgPgm3bB92aWE5H';
const rooms = {
	'bedroom': '1',
	'lounge': '2'
};

// async function discover() {
// 	return '192.168.0.15';
	
// 	console.log('Discovering bridge...')
// 	const bridges = await request({url: 'https://discovery.meethue.com', json: true})
// 	const address = bridges[0].internalipaddress
// 	console.log('Bridge: ', address)

// 	return address
// }

const layerColours = mapObjIndexed((layerName, rgbHexValue) => ({
	layerName,
	hsl: convert.rgbHex.hsl(rgbHexValue)
}), {
	default: 'FFEBB5',
	numbers: 'BAFFB4',
	control: 'B5B4FF',
	punc: 'FFB5FF',
	functions: 'FFBAB5',
	specials: 'A9FFFB',
});

export default async function setHueLayer(layerName) {
	const [hue, sat, bri] = layerColours[layerName];

	console.log('hsl: ', hue, sat, bri);

	const response = await request(
		{
			url: `http://${bridgeIp}/api/${username}/groups/${rooms.lounge}/action`,
			json: true,
			method: 'PUT',
			body: {hue, sat, bri}
		});

	console.log('Result: ', response);
}