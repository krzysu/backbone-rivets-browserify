var Backbone = require('backbone');

var ProductModel = Backbone.Model.extend({
	defaults: {
		name: 'default name',
		price: 'default price'
	}
});

module.exports = ProductModel;

