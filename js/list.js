var ls = document.getElementById("typeList");


var app = angular.module("coordList", []);

app.controller("myCtrl", function($scope) {
  
  $scope.products = [];
  $scope.addItem = function(){
    
    $scope.errortext = "";

    if(!$scope.addMe){
      $scope.errortext = "You should add something !";
      return addMe;
    }
    if($scope.products.indexOf($scope.addMe) == -1){
      $scope.products.push($scope.addMe);
      $scope.products.indexOf($scope.addMe) = addCoord;
          } else {
      $scope.errortext = "Same Point Can't Be Added !";
    }
  }
  $scope.removeItem = function(x){
    $scope.errortext = "";
    $scope.products.splice(x,1);
  }
});

var myscope = angular.element("myCtrl").scope();

ls.addEventListener("click", function(e){
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



