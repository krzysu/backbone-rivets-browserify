var Backbone = require('backbone');
var ProductModel = require('./product');

var CartCollection = Backbone.Collection.extend({
  model: ProductModel,

  initialize: function() {
    this.on('add', this.onAdd);
  },

  onAdd: function(newItem) {
    console.log('collection new item added', newItem);

    // check if collection contains this id, if yes, then increment count
  }

});

module.exports = CartCollection;
