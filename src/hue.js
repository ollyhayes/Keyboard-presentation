import request from 'request-promise-native';
import * as colorsys from 'colorsys';
import {map} from 'ramda';

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

const layerColours = map(rgbHexValue => {
	const {h, s, l} = colorsys.hex2Hsl(rgbHexValue);
	return [h, s, l];
}, {
	default: 'ffebb5',
	num: 'baffb4',
	arrows: 'b5b4ff',
	punc: 'ffb5ff',
	functions: 'ffbab5',
	specials: 'a9fffb',
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