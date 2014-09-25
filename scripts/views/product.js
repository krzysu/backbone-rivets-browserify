var Backbone = require('backbone');
Backbone.$ = jQuery; //jQuery is outside of browserify

var ProductView = Backbone.View.extend({

  el: ".product",

  events: {
    "click .js-product-add-to-cart": "addToCart"
  },

  addToCart: function(event) {
    var $parent = $(event.currentTarget).parents('.product')

    var product = {
      id: $parent.attr('id'),
      name: $parent.find('.product-name').text(),
      price: $parent.find('.product-price').text()
    }

    this.trigger('addToCart', product);
  }

});

module.exports = ProductView;