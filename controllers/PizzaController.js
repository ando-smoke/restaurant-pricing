restaurant.controller('PizzaCtrl',
  function PizzaCtrl ($scope, ProductFactory) {

  $scope.basket = ProductFactory.basket;

  $scope.addPizza = function() {
    var pizza = {type: $scope.pizzaType,
      price: parseFloat($scope.pizzaPrice)};
    $scope.basket.push(pizza);
    $scope.pizzaType = null;
    $scope.pizzaPrice = null;
  };

});
