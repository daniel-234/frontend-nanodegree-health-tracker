var app = app || {};

// var url = 'https://api.nutritionix.com/v1_1/search';

// Food Item View
// --------------
app.FoodView = Backbone.View.extend({
	// The DOM element for a food item is a list tag.
	// tagName: 'li',
	tagName: 'div',
	// Cache the template function for a single item.
	template: _.template($('#food-template').html()),


	render: function() {
		console.log(this.model);
		console.log(this.model.attributes);
		// console.log(this.model.attributes.brandName);
		// `this.el` is the element defined in tagName.
		// `this.$el` is its jQuery object, on which we can use
		// the jQuery `html()` function.
		this.$el.html(this.template(this.model.attributes));

		return this;
	}
});
