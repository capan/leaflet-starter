var ls = document.getElementById("typeList");

var app = angular.module("coordList", []);

app.controller("myCtrl", function ($scope) {

  $scope.products = [];
  $scope.addItem = function () {

    $scope.errortext = "";

    if (!$scope.addMe) {
      $scope.errortext = "You should add something !";
      return addMe;
    }
    if ($scope.products.indexOf($scope.addMe) == -1) {
      var ekle = $scope.addMe.split(" ");
      if (ekle.length == 2) {
        $scope.products.push($scope.addMe);
        MarkerNo = $scope.products.indexOf($scope.addMe)
        L.marker([ekle[0], ekle[1]]).addTo(mymap)
          .bindPopup('<b>My Marker' + MarkerNo + '</b> <br/>' + ekle[0] + '<br/>' + ekle[1]).openPopup();
        mymap.setView([ekle[0], ekle[1]], 13);

      } else {
        $scope.errortext = "You should seperate Lat Lon with an empty space!";
      }
    }
    else {
      $scope.errortext = "Same Point Can't Be Added !";
    }

  }
  $scope.removeItem = function (x) {
    $scope.errortext = "";
    $scope.products.splice(x, 1);
  }
});

var myscope = angular.element("myCtrl").scope();

ls.addEventListener("click", function (e) {
  var lo = document.getElementById("typeList").selectedIndex;
  switch (document.getElementById("typeList").selectedIndex) {
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



