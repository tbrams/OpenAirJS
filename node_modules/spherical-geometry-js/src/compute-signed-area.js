import {EARTH_RADIUS, toRadians} from './utils.js';
import computeDistanceBetween from './compute-distance-between.js';
import {convert} from './latlng.js';

/**
 * Returns the signed area of a closed path. The signed area may be used to 
 * determine the orientation of the path. The computed area uses the same units 
 * as the radius. The radius defaults to the Earth's radius in meters, in which 
 * case the area is in square meters.
 * @param {LatLng[]} loop
 * @param {number} [radius]
 * @returns {number}
 */
export default function computeSignedArea(loop, radius = EARTH_RADIUS) {
	if (loop.length < 3) return 0;
	loop = loop.map(v => convert(v));

	let e = 0;
	for (let i = 1; i < loop.length - 1; i++) {
		e += computeSphericalExcess([loop[0], loop[i], loop[i+1]]);
	}

	return e * Math.pow(radius, 2);
}

/**
 * Computes the spherical excess.
 * Uses L'Huilier's Theorem.
 * @param {LatLng[]} polygon
 * @param {boolean} [options.signed=true]
 * @returns {number}
 */
export function computeSphericalExcess(polygon, options = {}) {
	const {signed = true} = options;
	if (polygon.length !== 3) throw TypeError();
	let distances = [], sumOfDistances = 0;

	for (let i = 0; i < polygon.length - 1; i++) {
		distances[i] = computeDistanceBetween(
			polygon[i], polygon[i + 1],
			1
		);
		sumOfDistances += distances[i];
	}

	const semiPerimeter = sumOfDistances / 2;
	let tan = Math.tan(semiPerimeter / 2);
	for (const distance of distances) 
		tan *= Math.tan((semiPerimeter - distance) / 2);
	
	const sphericalExcess = 4 * Math.atan(Math.sqrt(Math.abs(tan)));

	if (!signed) return sphericalExcess;
	
	const v = polygon.map(point => {
		const lat = toRadians(point.lat()), lng = toRadians(point.lng());
		return [
			Math.cos(lat) * Math.cos(lng),
			Math.cos(lat) * Math.sin(lng),
			Math.sin(lat)
		];
	});

	const sign = 
		( v[0][0] * v[1][1] * v[2][2] 
		+ v[1][0] * v[2][1] * v[0][2] 
		+ v[2][0] * v[0][1] * v[1][2] 
		- v[0][0] * v[2][1] * v[1][2] 
		- v[1][0] * v[0][1] * v[2][2] 
		- v[2][0] * v[1][1] * v[0][2] ) > 0 ? 1 : -1;
	
	return sphericalExcess * sign;
}