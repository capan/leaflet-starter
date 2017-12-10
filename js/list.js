var ls = document.getElementById("listtype");

ls.addEventListener("click", function(e){
  var lo = document.getElementById("listtype").selectedIndex;
  switch (document.getElementById("listtype").selectedIndex) {
    case 0:
      document.getElementById("h").innerHTML = "Point List";
      break;
      case 1:
      document.getElementById("h").innerHTML = "Line List";
      break;
      case 2:
      document.getElementById("h").innerHTML = "Polygon List";
      break;
  }

});
