/**
 * Spherical Geometry Library v2.0.0
 * This code is a port of some classes from the Google Maps Javascript API
 * @module spherical-geometry
 * @todo computeOffsetOrigin
 */

export {default as computeArea} from './compute-area.js';
export {default as computeDistanceBetween} from './compute-distance-between.js';
export {default as computeHeading} from './compute-heading.js';
export {default as computeLength} from './compute-length.js';
export {default as computeOffset} from './compute-offset.js';
//export {default as computeOffsetOrigin} from './compute-offset-origin.js';
export {default as computeSignedArea} from './compute-signed-area.js';
export {default as interpolate} from './interpolate.js';

export {default as LatLng, 
	convert as convertLatLng, equals as equalLatLngs} from './latlng.js';
export * from './utils.js';