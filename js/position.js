
var uPosx = 0;
var uPosy = 0;

function showPosition(position) {

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      uPosx =position.coords.latitude.toFixed(5);
      uPosy =position.coords.longitude.toFixed(5);
     
       L.marker([uPosx, uPosy]).addTo(mymap)
          .bindPopup('<b>Your Position</b><br/>'+uPosx+'<br/>'+uPosy).openPopup();

          mymap.setView([uPosx,uPosy],13);
  } else {
     alert("Geolocation is not supported by this browser.");
}}
