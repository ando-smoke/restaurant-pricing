restaurant.factory('ProductFactory', function ProductFactory() {
  var factory= {};
  factory.basket = [];
  factory.offeredItems = [
    {type: 'Cheese', price: 9.99, foodCategory: "pizza"},
    {type: 'Mushroom', price: 12.50, foodCategory: "pizza"},
    {type: 'Pepperoni', price: 12.75, foodCategory: "pizza"},
    {type: 'Canadian Bacon', price: 13.50, foodCategory: "pizza"},
    {type: 'Veggie Deluxe', price: 14.50, foodCategory: "pizza"},
    {type: 'Supreme', price: 15.99, foodCategory: "pizza"},
    {type: 'Single Scoop', price: 2.25, foodCategory: "ice cream"},
    {type: 'Double Scoop', price: 3.35, foodCategory: "ice cream"},
    {type: 'Triple Scoop', price: 3.99, foodCategory: "ice cream"},
    {type: 'Sundae', price: 4.69, foodCategory: "ice cream"},
    {type: 'Banana Split', price: 5.99, foodCategory: "ice cream"}
  ];

  factory.totalPurchaseAmount = function() {
    var total = factory.basket.reduce(function(prevVal, currVal) {
      return prevVal + currVal.price;
    }, 0);
    return total;
  };

  factory.categoryPurchaseAmount = function(passedFoodType) {
    var total = 0;
    factory.basket.forEach(function(item) {
      if (passedFoodType === item.foodCategory) {
        total += item.price;
      }
    });
    return total;
  };

  return factory;
});
