restaurant.controller('PizzaCtrl',
  function PizzaCtrl ($scope, ProductFactory) {

  $scope.basket = ProductFactory.basket;
  $scope.offeredPizzas = ProductFactory.offeredPizzas;

  $scope.addPizza = function() {
    var pizza = {type: $scope.pizzaPie.type,
      price: parseFloat($scope.pizzaPie.price)};
    $scope.basket.push(pizza);
    $scope.pizzaPie = null;
  };

});
