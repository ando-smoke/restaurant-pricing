restaurant.controller('PizzaCtrl',
  function PizzaCtrl ($scope, ProductFactory) {

  $scope.basket = ProductFactory.basket;
  $scope.ProductFactory = ProductFactory;

  $scope.addPizza = function() {
    var pizza = {type: $scope.pizzaPie.type,
      price: parseFloat($scope.pizzaPie.price),
      foodCategory: $scope.pizzaPie.foodCategory};
    $scope.basket.push(pizza);
    $scope.pizzaPie = null;
  };

  $scope.deletePizza = function(pizza) {
    var index = $scope.basket.indexOf(pizza);
    $scope.basket.splice(index, 1);
  };
});
