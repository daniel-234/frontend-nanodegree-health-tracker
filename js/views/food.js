var app = app || {};

// Food Item View
// --------------
app.FoodView = Backbone.View.extend({
	// Create a new `tr` for each Model View.
	tagName: 'tr',
	className: 'foodContainer',

	// Cache the template function for a single item.
	template: _.template($('#food-template').html()),

	events: {
		'click td': 'clicked'
	},

	clicked: function(e) {
		e.preventDefault();
		var name = this.model.get('itemName');
		console.log(this.model);
		console.log(name);
	},

	render: function() {
		// Uncomment to check the model property in the console.
		// console.log(this.model);
		// console.log(this.model.attributes);
		// console.log(this.model.attributes.brandName);

		/* The `this.el` is the element defined in tagName.
		 * `this.$el` is its jQuery object, on which we can use
		 * the jQuery `html()` function.
		 */
		this.$el.html(this.template(this.model.attributes));

		return this;
	}
});
