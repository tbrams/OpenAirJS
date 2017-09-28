import {EARTH_RADIUS} from './utils.js';
import LatLng, {convert} from './latlng.js';

/**
 * Returns the location of origin when provided with a LatLng destination, 
 * meters travelled and original heading. Headings are expressed in degrees
 * clockwise from North. This function returns null when no solution is
 * available.
 * @todo
 * @param {LatLng} to
 * @param {number} distance
 * @param {number} heading
 * @param {number} [radius]
 * @returns {LatLng}
 */
export default function computeOffset(
	to, distance, heading, radius = EARTH_RADIUS
) {
	throw Error('computeOffset not implemented')
}