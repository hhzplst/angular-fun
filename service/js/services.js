app.service("mathService", function(){
  return {
    add: function(x,y){
      return x+y;
    },
    subtract: function(x,y){
      return x-y;
    },
    multiply: function(x,y){
      return x*y;
    },
    divide: function(x,y){
      return x/y;
    },
    power: function(x,y){
      return Math.pow(x, y);
    }
  };
});

app.service("todoService", function(){
  var todos = [];
  return {
    allTodos: function(){
      return todos;
    },
    add:  function(todo){
      todos.push(todo);
    },
    edit: function(index, todo){
      todos[index] = todo;
      todo.showEdit = false;
    },
    delete: function(index){
      todos.splice(index,1);
    }
  };
});