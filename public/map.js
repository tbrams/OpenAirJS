function initMap() {

  // Create the map.
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {
      lat: 39.48583333333333,
      lng: -119.76694444444445
    },
    mapTypeId: 'terrain'
  });



  $.get('/api/polygons', function(data) {
    var stringData = JSON.stringify(data);
    polygon_objects = JSON.parse(stringData);

    // Construct a polygon for each set of coordinates
    for (var i = 0; i < polygon_objects.length; i++) {
      var polyCoords = polygon_objects[i];

      // Construct the polygon.
      var polygon = new google.maps.Polygon({
        paths: polyCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
      });
      // display polygon
      polygon.setMap(map);
    }

  });

}
