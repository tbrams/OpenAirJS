function initMap() {

  // Create the map.
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {
      lat: 55.5,
      lng: 11.0
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
