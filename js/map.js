 function initMap() {
    let simplon = {lat: -20.898389, lng: 55.473833};
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
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

    let contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Simplon Réunion</h1>'+
      '<div id="bodyContent">'+
      '<p>Dans les locaux de la <b>Ressourcerie, <a href="https://www.facebook.com/La-Ressourcerie-L%C3%A9L%C3%A0-ADRIE-249023225256835/">ADRIE</a></b>.</p>' + '<p>21 rue Vavangues, ZAC Finette, 97490 Sainte-Clotilde</p>' + '</div>'+ '</div>';

    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    let icon = 'images/markeur_blanc.png';
    let marker = new google.maps.Marker({
      position: simplon,
      icon,
      map: map
  });
    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
