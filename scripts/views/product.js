var Backbone = require('backbone');
Backbone.$ = jQuery; //jQuery is outside of browserify

var ProductView = Backbone.View.extend({

  el: ".product",

  events: {
    "click .js-product-add-to-cart": "addToCart"
  },

  addToCart: function(event) {
    console.log('event', event);

    var id = $(event.currentTarget).parents('.product').attr('id');

    var product = {
      name: 'xx',
      price: 'xx EUR'
    }

    this.trigger('addToCart', product);
  }

});

module.exports = ProductView;