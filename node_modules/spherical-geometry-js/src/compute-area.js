import {computeSphericalExcess} from './compute-signed-area.js'
import {convert} from './latlng.js';

/**
 * Returns the area of a closed path. The computed area uses the same units as 
 * the radius. The radius defaults to the Earth's radius in meters, in which 
 * case the area is in square meters.
 * @param {LatLng[]} path
 * @param {number} [radius]
 * @returns {number} area
 */
export default function computeArea(path, radius) {
	if (path.length < 3) return 0;
	path = path.map(v => convert(v));

	let e = 0;
	for (let i = 1; i < path.length - 1; i++) 
		e += computeSphericalExcess([path[0], path[i], path[i+1]], {signed: false});

	return e * Math.pow(radius, 2);
}