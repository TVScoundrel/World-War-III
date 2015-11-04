Template.PlayMap.onRendered(function () {
  GoogleMaps.load({
    v: '3.exp',
    key: 'AIzaSyDV0pCkydnDN7QXBxlDGmpMJx4hRFOrbqA'
  });
});

Template.PlayMap.helpers({
  mapOptions: function () {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false
      };
    }
  }
});