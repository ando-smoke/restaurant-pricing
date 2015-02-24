restaurant.controller('IceCreamCtrl',
  function IceCreamCtrl ($scope, ProductFactory) {

  $scope.basket = ProductFactory.basket;
  $scope.offeredIceCreams = ProductFactory.offeredIceCreams;

  $scope.addIceCream = function() {
    var iceCream = {type: $scope.iceCream.type,
      price: parseFloat($scope.iceCream.price)};
    $scope.basket.push(iceCream);
    $scope.iceCream = null;
  };
});
