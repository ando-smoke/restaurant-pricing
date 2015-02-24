restaurant.controller('IceCreamCtrl',
  function IceCreamCtrl ($scope, ProductFactory) {

  $scope.basket = ProductFactory.basket;

  $scope.addIceCream = function() {
    var iceCream = {type: $scope.iceCreamType,
      price: parseFloat($scope.iceCreamPrice)};
    $scope.basket.push(iceCream);
    $scope.iceCreamType = null;
    $scope.iceCreamPrice = null;
  };
});
