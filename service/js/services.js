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