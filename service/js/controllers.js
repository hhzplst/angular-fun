app.controller("MathController", ["$scope", "mathService", function($scope, mathService){
  $scope.operations = Object.keys(mathService);
  $scope.operation = "add";
  $scope.cal = function(operation,firstNum, secondNum){
    $scope.result = mathService[operation](firstNum, secondNum);
  };
}]);

app.controller("TodoController", ["$scope", "todoService", function($scope, todoService){
  $scope.form = {};
  $scope.todos = todoService.allTodos();
  
  $scope.showEditToggle = function(todo){
    todo.showEdit = !todo.showEdit;
  };

  $scope.addTodo = function(todo){
    $scope.todoform.$setPristine();
    $scope.data = {};
    todoService.add(todo);
  };

  $scope.editTodo = function(index, todo){
    todoService.edit(index, todo);
  };

  $scope.deleteTodo = function(index){
    todoService.delete(index);
  };

}]);