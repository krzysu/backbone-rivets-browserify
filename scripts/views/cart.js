var Backbone = require('backbone');
var rivets = require('../../node_modules/rivets-backbone-adapter.rivets-backbone');
Backbone.$ = jQuery; //jQuery is outside of browserify

console.log(rivets);

var CartView = Backbone.View.extend({

  el: ".cart",

  render: function() {
    
    this.binding = rivets.bind(this.el, {collection: this.collection});
    return this;
  },

  remove: function() {
    this.binding.unbind();
  },

  log: function() {
    console.log(this.collection);
  }

});

module.exports = CartView;