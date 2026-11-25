// Experiment (currently unused): change the colour of my Philips Hue lights to match
// the active layer. It was too slow from the browser because of the CORS preflight,
// so I moved it to the server (see startPhea in server/serial-server.js).
import * as colorsys from 'colorsys';
import {map} from 'ramda';

const bridgeIp = '192.168.0.15';
const username = '<hue-bridge-username>'; // placeholder: get one by pairing with the bridge
const rooms = {
	'bedroom': '1',
	'lounge': '2'
};

// define these somewhere better and set them as the css variables
const layerColours = map(rgbHexValue => {
	const {h, s, l} = colorsys.hex2Hsl(rgbHexValue);
	return [h, s, l];
}, {
	default: 'ffebb5',
	num: 'baffb4',
	arrows: 'b5b4ff',
	puncLeft: 'ffb5ff',
	puncRight: 'ffb5ff',
	functions: 'ffbab5',
	specialLeft: 'a9fffb',
	specialRight: 'a9fffb',
});

let currentLayer = null;
export default async function setHueLayer(layerName) {
	if (currentLayer === layerName)
		return;

	currentLayer = layerName;
	const [hue, sat, bri] = layerColours[layerName];

	console.log('setting hsl: ', hue, sat, bri);

	// it's slow because of the preflight. consider converting backend to js so I can
	// get the layer and send the hue request directly
	const response = await fetch(
		`http://${bridgeIp}/api/${username}/groups/${rooms.lounge}/action`,
		{
			method: 'PUT',
			body: JSON.stringify({hue: hue * 182, sat, bri, transitiontime: 0})
		});

	console.log('Result: ', await response.json());
}