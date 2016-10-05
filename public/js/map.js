// var mapModule = (function(){
  function initializeMap(){

  var fullstackAcademy = new google.maps.LatLng(40.705086, -74.009151);

  var styleArr = [{
    featureType: 'landscape',
    stylers: [{ saturation: -100 }, { lightness: 60 }]
  }, {
    featureType: 'road.local',
    stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
  }, {
    featureType: 'transit',
    stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
  }, {
    featureType: 'administrative.province',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'water',
    stylers: [{ visibility: 'on' }, { lightness: 30 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
  }];

  var mapCanvas = document.getElementById('map-canvas');

  var currentMap = new google.maps.Map(mapCanvas, {
    center: fullstackAcademy,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styleArr
  });

  return currentMap;


   
  // };

  // drawMarker('hotel', [40.705137, -74.007624]);
  // drawMarker('restaurant', [40.705137, -74.013940]);
  // drawMarker('activity', [40.716291, -73.995315]);

}

var iconURLs = {
  hotel: '/images/lodging_0star.png',
  restaurant: '/images/restaurant.png',
  activity: '/images/star-3.png'
};

function drawMarker (map, type, coords) {
  var latLng = new google.maps.LatLng(coords[0], coords[1]);
  var iconURL = iconURLs[type];
  var marker = new google.maps.Marker({
    icon: iconURL,
    position: latLng
  });
  marker.setMap(map);
}

// var getCoords = function(map, type, address){
//   var geocoder = new google.maps.Geocoder();
//   geocoder.geocode({'address': address}, function(results,status){
//     if (status == 'OK')  {
//       var location = results[0].geometry.location;
//       var iconURL = iconURLs[type];
//       var marker = new google.maps.Marker({
//           icon: iconURL,
//           map: map,
//           position: results[0].geometry.location
//         });
//       // map.setCenter(results[0].geometry.location);
//       };
//       // var latLng = results[0].geometry.location.LatLng();
//       // alert("this is latLng " + LatLng);
//     });
//   };
// });

