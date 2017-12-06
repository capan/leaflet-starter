
	var mymap = L.map('map').setView([51.505, -0.09], 13);
    
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            id: 'mapbox.streets'
        }).addTo(mymap);
    
        L.marker([51.5, -0.09]).addTo(mymap)
            .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
    
        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(mymap);
        }
    
        mymap.on('click', onMapClick);