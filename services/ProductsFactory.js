restaurant.factory('ProductFactory', function ProductFactory() {
  var factory= {};
  factory.basket = [];
  factory.offeredPizzas = [
    {type: 'Cheese', price: 9.99},
    {type: 'Mushroom', price: 12.50},
    {type: 'Pepperoni', price: 12.75},
    {type: 'Canadian Bacon', price: 13.50},
    {type: 'Veggie Deluxe', price: 14.50},
    {type: 'Supreme', price: 15.99}
  ];
  factory.offeredIceCreams = [
    {type: 'Single Scoop', price: 2.25},
    {type: 'Double Scoop', price: 3.35},
    {type: 'Triple Scoop', price: 3.99},
    {type: 'Sundae', price: 4.69},
    {type: 'Banana Split', price: 5.99}
  ];
  return factory;
});
