import test from 'tape';
import * as S from '../src/index.js';
/*global google */

const places = {
	donostia: new S.LatLng(43.320812, -1.984447),
	london: new S.LatLng(51.508129, -0.128005),
	newyork: new S.LatLng(40.71417, -74.00639),
	sydney: new S.LatLng(-33.873651, 151.20689),
	moscow: new S.LatLng(55.7522222, 37.6155556),
	buenosaires: new S.LatLng(-34.608418, -58.373161)
};

const googlePlaces = {};
for (const place in places) {
	const coord = places[place];
	googlePlaces[place] = new google.maps.LatLng(coord.lat(), coord.lng());
}

test('LatLng class', t => {
	t.equal(places.sydney.toString(), googlePlaces.sydney.toString(),
		'toString()');
	
	t.equal(places.sydney.toUrlValue(), googlePlaces.sydney.toUrlValue(),
		'toUrlValue()');
	
	t.equal(places.sydney.toUrlValue(3), googlePlaces.sydney.toUrlValue(3),
		'toUrlValue(3)');

	t.assert(places.donostia.equals(googlePlaces.donostia), 
		'donostia equals(donostia)');
	t.assert(places.buenosaires.equals(googlePlaces.buenosaires), 
		'buenosaires equals(buenosaires)');
})

test('Spherical geometry static class', t => {
	t.equal(
		S.computeArea(
			[places.london, places.donostia, places.newyork]
		),
		google.maps.geometry.spherical.computeArea(
			[googlePlaces.london, googlePlaces.donostia, googlePlaces.newyork]
		),
		'computeArea(london, donostia, newyork)'
	)

	t.equal(
		S.computeDistanceBetween(
			places.london, places.newyork
		),
		google.maps.geometry.spherical.computeDistanceBetween(
			googlePlaces.london, googlePlaces.newyork
		),
		'computeDistanceBetween(london, newyork)'
	)

	t.equal(
		S.computeHeading(
			places.london, places.newyork
		),
		google.maps.geometry.spherical.computeHeading(
			googlePlaces.london, googlePlaces.newyork
		),
		'computeHeading(london, newyork)'
	)

	t.equal(
		S.computeLength([
			places.london, places.newyork,
			places.moscow, places.sydney
		]),
		google.maps.geometry.spherical.computeLength([
			googlePlaces.london, googlePlaces.newyork, 
			googlePlaces.moscow, googlePlaces.sydney
		]),
		'computeLength(london, newyork, moscow, sydney)'
	)

	t.equal(
		S.computeOffset(
			places.london, 5576353.232683, -71.669371
		),
		google.maps.geometry.spherical.computeOffset(
			googlePlaces.london, 5576353.232683, -71.669371
		),
		'computeOffset(london, 5576353.232683, -71.669371)'
	)

	t.equal(
		S.computeSignedArea(
			[places.london, places.donostia, places.newyork]
		),
		google.maps.geometry.spherical.computeSignedArea(
			[googlePlaces.london, googlePlaces.donostia, googlePlaces.newyork]
		),
		'computeSignedArea(london, donostia, newyork)'
	)

	t.equal(
		S.interpolate(
			places.newyork, places.sydney, 0.7
		),
		google.maps.geometry.spherical.interpolate(
			googlePlaces.newyork, googlePlaces.sydney, 0.7
		),
		'interpolate(newyork, sydney, 0.7)'
	)
})