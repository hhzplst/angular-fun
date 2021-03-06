var app = angular.module("service", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
  $routeProvider
    .when("/math", {
      templateUrl: "partials/math.html",
      controller: "MathController"
    })
    .when("/todo", {
      templateUrl: "partials/todo.html",
      controller: "TodoController"
    });
}]);