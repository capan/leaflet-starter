var ls = document.getElementById("listtype");


var app = angular.module("coordList", []);
app.controller("myCtrl", function($scope) {
  $scope.products = [1];
  $scope.addItem = function(){
    $scope.errortext = "";
    if($scope.addMe){return addMe;}
    if($scope.products.indexOf($scope.addMe) == -1){
      $scope.products.push($scope.addMe);
    } else {
      $scope.errortext = "Same Point Can't Be Added !";
    }
  }
  $scope.removeItem = function(x){
    $scope.errortext = "";
    $scope.products.splice(x,1);
  }
});

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



