// some kind of controller

// require dependencies
var ProductView = require('./views/product.js');
var CartView = require('./views/cart.js');
var CartCollection = require('./models/cart.js');

// init objects
var productView = new ProductView();
var cartCollection = new CartCollection();

var cartView = new CartView({
  collection: cartCollection
}).render();

// some controller logic
productView.on('addToCart', function(item) {
  cartCollection.add(item);
});





