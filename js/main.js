
	var mymap = L.map('map').setView([39, 35], 6);
    var clickedCoord = [];
    var addCoord;

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            id: 'mapbox.streets'
        }).addTo(mymap);
			  var popup = L.popup();

        mymap.on('click', onMapClick);
 function onMapClick(e) {
           clickedCoord = e.latlng;
           popup.setLatLng(clickedCoord).setContent("You clicked the map at " + e.latlng.toString()).openOn(mymap);
            
        }