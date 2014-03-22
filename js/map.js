//function initialize() {
$( document ).ready(function() {

  // $(".map-area #map-canvas").fancybox({
  //   'hideOnContentClick': true,
  //   'overlayColor'    : '#6b0202',
  //   'overlayOpacity'  : 0.8
  //   });


  var map = "";

  $('#place').fancybox({
    'hideOnContentClick': false, // so you can handle the map
      'overlayColor'      : '#ccffee',
      'overlayOpacity'    : 0.2,
      'autoDimensions': true, // the selector #mapcontainer HAS css width and height
      'beforeShow': function(){
        google.maps.event.trigger(map, "resize");
    },
    'onCleanup': function() {
       var myContent = this.href;
       $(myContent).unwrap();
      } // fixes inline bug
  });

  var myLatlng = new google.maps.LatLng(25.003882,121.504922);
    var mapOptions = {
      zoom: 10,
      center: myLatlng
    };

    //var map = new google.maps.Map(document.getElementById('map-canvas'),
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

  });

//initialize();