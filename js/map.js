 function initMap() {
    var simplon = {lat: -20.898319, lng: 55.473887};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: simplon,
      styles: [
      {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#efdf31'}]
      },
      {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#2a4789'}]
      },
      {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#2a4789'}]
      },
            ]
        });
    var icon = 'images/markeur_blanc.png';
    var marker = new google.maps.Marker({
      position: simplon,
      icon,
      map: map
  });
}
