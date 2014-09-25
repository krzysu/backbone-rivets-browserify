var Backbone = require('backbone');
require('rivets-backbone-adapter');
var rivets = require('rivets');
Backbone.$ = jQuery; //jQuery is outside of browserify

rivets.formatters.log = function(value) {
  console.log(value);
  return value;
}

rivets.formatters.length = function(value) {
  return value.length;
}

var CartView = Backbone.View.extend({
  el: ".cart",

  render: function() {
    this.binding = rivets.bind(this.el, {
      collection: this.collection.models
    });
    return this;
  },

  remove: function() {
    this.binding.unbind();
  }
});

module.exports = CartView;