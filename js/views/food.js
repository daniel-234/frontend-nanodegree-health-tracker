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

	initialize: function() {
		var calories = 0;
	},

	clicked: function(e) {
		e.preventDefault();

		// Push the selected Model into the Collection of selected
		// elements if not already there.
		app.selected1.push(this.model);

		this.getCalories();
	},

	getCalories: function() {
		calories = 0;

		app.selected1.each(function(item) {
			calories += item.get('itemCalories');
			console.log(item.get('itemCalories'));
		}, this);

		console.log(calories);

		app.selectedItemView.render(calories);
	},

	render: function() {
		/* The `this.el` is the element defined in tagName.
		 * `this.$el` is its jQuery object, on which we can use
		 * the jQuery `html()` function.
		 */
		this.$el.html(this.template(this.model.attributes));

		return this;
	}
});
