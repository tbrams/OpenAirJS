import {convert} from './latlng.js';
import {toRadians, toDegrees} from './utils.js'

const fmod = (a, b) => Number((a - (Math.floor(a / b) * b)).toPrecision(8));

/**
 * Returns the heading from one LatLng to another LatLng. Headings are expresss
 * in degrees clockwise from North within the range [-180, 180).
 * @param {LatLng} from
 * @param {LatLng} to
 * @returns {number}
 */
export default function computeHeading(from, to) {
	from = convert(from); to = convert(to);
	const fromLat = toRadians(from.lat()),
		toLat = toRadians(to.lat()),
		deltaLng = toRadians(to.lng()) - toRadians(from.lng());
	
	const angle = toDegrees(
		Math.atan2(
			Math.sin(deltaLng) * Math.cos(toLat), 
			Math.cos(fromLat) * Math.sin(toLat) - 
			Math.sin(fromLat) * Math.cos(toLat) * Math.cos(deltaLng)
		)
	);

	if (angle === 180) return angle;
	else return fmod( (fmod((angle - -180), 360) + 360), 360 ) + -180;
}