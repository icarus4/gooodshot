//function initialize() {
$( document ).ready(function() {
  var myLatlng = new google.maps.LatLng(25.003882,121.504922);
  var mapOptions = {
    zoom: 10,
    center: myLatlng
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);


});

//initialize();