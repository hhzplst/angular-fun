var app = angular.module("myApp", []);

app.controller("myController", function($scope){
  $scope.gatherData = function(){
    $scope.result = $scope.data;
  };
});

app.controller("SignUpController", function($scope){
});