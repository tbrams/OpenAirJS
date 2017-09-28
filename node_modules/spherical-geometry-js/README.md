# Spherical Geometry Library

This library provides classes and functions for the computation of geometric data on the surface of the Earth.

This library ports a small but useful subset of classes from the Google Maps Javascript API version 3, to use as a seperate module or in node.

## How to use
```javascript
import * as geometry from 'spherical-geometry-js';
```
Or import individual modules

```javascript
import {computeArea} from 'spherical-geometry-js'
import computeArea from 'spherical-geometry-js/compute-area'
```

Notes:
* The API is nearly identical to the Google Maps Javascript API.
* `computeOffsetOrigin` has not yet been implemented
* All computed lengths are returned in **meters**.

## API
Classes and libraries ported from the Google Maps Javascript API:
* [google.maps.geometry.spherical](https://developers.google.com/maps/documentation/javascript/3.exp/reference#spherical)
* [google.maps.LatLng](https://developers.google.com/maps/documentation/javascript/3.exp/reference#LatLng)

For convenience, LatLng includes some extra methods. 

```javascript
const latlng = new LatLng(123, 56);
// Alias getters for longitude and latitude

latlng.x === latlng.lng();
latlng.y === latlng.lat();

latlng[0] === latlng.lng();
latlng[1] === latlng.lat();
```

```javascript
import {equalLatLngs} from 'spherical-geometry-js';

equalLatLngs(latlng1, latlng2) === latlng1.equals(latlng2);
```

A function called convertLatLng can be used. It tries to convert an object into a LatLng.
### convertLatLng(like, [Class]) ⇒ `Class`
Converts an object into a LatLng. Tries a few different methods:
1. If instanceof LatLng, clone and return the object
2. If it has 'lat' and 'lng' properties...

   2a. if the properties are functions (like Google LatLngs), 
       use the lat() and lng() values as lat and lng
		 
   2b. otherwise get lat and lng, parse them as floats and try them

3. If it has 'lat' and *'long'* properties,
   parse them as floats and return a LatLng
4. If it has number values for 0 and 1, use 1 as latitude and 0
   as longitude.
5. If it has x and y properties, try using y as latitude and x and 
   longitude.
#### Params
* like `any` - an object resembling a LatLng
* [Class] `function` - class constructor called as `new Class(latitude, longitude)`
