var Backbone = require('backbone');
var ProductModel = require('./product');

var CartCollection = Backbone.Collection.extend({
  model: ProductModel
});

module.exports = CartCollection;
