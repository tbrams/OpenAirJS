## Constants

<dl>
<dt><a href="#EARTH_RADIUS">EARTH_RADIUS</a> : <code>number</code></dt>
<dd><p>Earth&#39;s radius (at the Ecuator) of 6378137 meters.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#convert">convert(like, [Class])</a> ⇒ <code>LatLng</code></dt>
<dd><p>Converts an object into a LatLng. Tries a few different methods:</p>
<ol>
<li>If instanceof LatLng, clone and return the object</li>
<li>If it has &#39;lat&#39; and &#39;lng&#39; properties...
2a. if the properties are functions (like Google LatLngs), <pre><code>use the lat() and lng() values as lat and lng
</code></pre>2b. otherwise get lat and lng, parse them as floats and try them</li>
<li>If it has &#39;lat&#39; and <em>&#39;long&#39;</em> properties,
parse them as floats and return a LatLng</li>
<li>If it has number values for 0 and 1, use 1 as latitude and 0
as longitude.</li>
<li>If it has x and y properties, try using y as latitude and x and 
longitude.</li>
</ol>
</dd>
<dt><a href="#equals">equals(one, two)</a> ⇒ <code>boolean</code></dt>
<dd><p>Comparison function</p>
</dd>
<dt><a href="#computeDistanceBetween">computeDistanceBetween(from, to, [radius])</a> ⇒ <code>number</code></dt>
<dd><p>Returns the distance, in meters, between to LatLngs. You can optionally 
specify a custom radius. The radius defaults to the radius of the Earth.</p>
</dd>
<dt><a href="#computeSignedArea">computeSignedArea(loop, [radius])</a> ⇒ <code>number</code></dt>
<dd><p>Returns the signed area of a closed path. The signed area may be used to 
determine the orientation of the path. The computed area uses the same units 
as the radius. The radius defaults to the Earth&#39;s radius in meters, in which 
case the area is in square meters.</p>
</dd>
<dt><a href="#computeSphericalExcess">computeSphericalExcess(polygon)</a> ⇒ <code>number</code></dt>
<dd><p>Computes the spherical excess.
Uses L&#39;Huilier&#39;s Theorem.</p>
</dd>
<dt><a href="#computeArea">computeArea(path, [radius])</a> ⇒ <code>number</code></dt>
<dd><p>Returns the area of a closed path. The computed area uses the same units as 
the radius. The radius defaults to the Earth&#39;s radius in meters, in which 
case the area is in square meters.</p>
</dd>
<dt><a href="#computeHeading">computeHeading(from, to)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the heading from one LatLng to another LatLng. Headings are expresss
in degrees clockwise from North within the range [-180, 180).</p>
</dd>
<dt><a href="#computeLength">computeLength(path, [radius])</a> ⇒ <code>number</code></dt>
<dd><p>Returns the length of the given path.</p>
</dd>
<dt><a href="#computeOffset">computeOffset(from, distance, heading, [radius])</a> ⇒ <code>LatLng</code></dt>
<dd><p>Returns the LatLng resulting from moving a distance from an origin in the 
specified heading (expressed in degrees clockwise from north).</p>
</dd>
<dt><a href="#interpolate">interpolate(from, to, fraction)</a> ⇒ <code>LatLng</code></dt>
<dd><p>Returns the LatLng which lies the given fraction of the way between the 
origin LatLng and the destination LatLng.</p>
</dd>
</dl>

<a name="EARTH_RADIUS"></a>

## EARTH_RADIUS : <code>number</code>
Earth's radius (at the Ecuator) of 6378137 meters.

**Kind**: global constant  
<a name="convert"></a>

## convert(like, [Class]) ⇒ <code>LatLng</code>
Converts an object into a LatLng. Tries a few different methods:1. If instanceof LatLng, clone and return the object2. If it has 'lat' and 'lng' properties...   2a. if the properties are functions (like Google LatLngs),        use the lat() and lng() values as lat and lng   2b. otherwise get lat and lng, parse them as floats and try them3. If it has 'lat' and *'long'* properties,   parse them as floats and return a LatLng4. If it has number values for 0 and 1, use 1 as latitude and 0   as longitude.5. If it has x and y properties, try using y as latitude and x and    longitude.

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| like | <code>any</code> |  | 
| [Class] | <code>function</code> | <code>LatLng</code> | 

<a name="equals"></a>

## equals(one, two) ⇒ <code>boolean</code>
Comparison function

**Kind**: global function  

| Param | Type |
| --- | --- |
| one | <code>LatLng</code> | 
| two | <code>LatLng</code> | 

<a name="computeDistanceBetween"></a>

## computeDistanceBetween(from, to, [radius]) ⇒ <code>number</code>
Returns the distance, in meters, between to LatLngs. You can optionally specify a custom radius. The radius defaults to the radius of the Earth.

**Kind**: global function  
**Returns**: <code>number</code> - distance  

| Param | Type |
| --- | --- |
| from | <code>LatLng</code> | 
| to | <code>LatLng</code> | 
| [radius] | <code>number</code> | 

<a name="computeSignedArea"></a>

## computeSignedArea(loop, [radius]) ⇒ <code>number</code>
Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path. The computed area uses the same units as the radius. The radius defaults to the Earth's radius in meters, in which case the area is in square meters.

**Kind**: global function  

| Param | Type |
| --- | --- |
| loop | <code>Array.&lt;LatLng&gt;</code> | 
| [radius] | <code>number</code> | 

<a name="computeSphericalExcess"></a>

## computeSphericalExcess(polygon) ⇒ <code>number</code>
Computes the spherical excess.Uses L'Huilier's Theorem.

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| polygon | <code>Array.&lt;LatLng&gt;</code> |  | 
| [options.signed] | <code>boolean</code> | <code>true</code> | 

<a name="computeArea"></a>

## computeArea(path, [radius]) ⇒ <code>number</code>
Returns the area of a closed path. The computed area uses the same units as the radius. The radius defaults to the Earth's radius in meters, in which case the area is in square meters.

**Kind**: global function  
**Returns**: <code>number</code> - area  

| Param | Type |
| --- | --- |
| path | <code>Array.&lt;LatLng&gt;</code> | 
| [radius] | <code>number</code> | 

<a name="computeHeading"></a>

## computeHeading(from, to) ⇒ <code>number</code>
Returns the heading from one LatLng to another LatLng. Headings are expresssin degrees clockwise from North within the range [-180, 180).

**Kind**: global function  

| Param | Type |
| --- | --- |
| from | <code>LatLng</code> | 
| to | <code>LatLng</code> | 

<a name="computeLength"></a>

## computeLength(path, [radius]) ⇒ <code>number</code>
Returns the length of the given path.

**Kind**: global function  

| Param | Type |
| --- | --- |
| path | <code>Array.&lt;LatLng&gt;</code> | 
| [radius] | <code>number</code> | 

<a name="computeOffset"></a>

## computeOffset(from, distance, heading, [radius]) ⇒ <code>LatLng</code>
Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north).

**Kind**: global function  

| Param | Type |
| --- | --- |
| from | <code>LatLng</code> | 
| distance | <code>number</code> | 
| heading | <code>number</code> | 
| [radius] | <code>number</code> | 

<a name="interpolate"></a>

## interpolate(from, to, fraction) ⇒ <code>LatLng</code>
Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.

**Kind**: global function  

| Param | Type |
| --- | --- |
| from | <code>LatLng</code> | 
| to | <code>LatLng</code> | 
| fraction | <code>number</code> | 

