app.controller("MathController", ["$scope", "mathService", function($scope, mathService){
  $scope.operations = Object.keys(mathService);
  $scope.operation = "add";
  $scope.cal = function(operation,firstNum, secondNum){
    $scope.result = mathService[operation](firstNum, secondNum);
  };
}]);