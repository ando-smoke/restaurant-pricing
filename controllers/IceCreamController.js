restaurant.controller('IceCreamCtrl',
  function IceCreamCtrl ($scope, ProductFactory) {

  $scope.basket = ProductFactory.basket;
  $scope.ProductFactory = ProductFactory;

  $scope.addIceCream = function() {
    var iceCream = {type: $scope.iceCream.type,
      price: parseFloat($scope.iceCream.price),
      foodCategory: $scope.iceCream.foodCategory};
    $scope.basket.push(iceCream);
    $scope.iceCream = null;
  };

  $scope.deleteIceCream = function(iceCream) {
    var index = $scope.basket.indexOf(iceCream);
    $scope.basket.splice(index, 1);
  };
});
