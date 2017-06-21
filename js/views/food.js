var app = app || {};

// Food Item View
// --------------
app.FoodView = Backbone.View.extend({
	// Create a new `tr` for each Model View.
	tagName: 'tr',
	className: 'foodContainer',

	// Cache the template function for a single item.
	template: _.template($('#food-template').html()),

	// Delegated event on click.
	events: {
		'click td': 'clicked'
	},

	initialize: function() {
		// Hold daily calories count.
		var calories = 0;
	},

	// When a user clicks an item that had not yet been selected, push
	// the new item into a Collection of selected foods and update the
	// calories count.
	clicked: function(e) {
		e.preventDefault();
		// Push the selected Model into the Collection of selected
		// elements if not already there.
		app.selectedFoods.push(this.model);

		this.getCalories();
	},

	// Calculate the calories assumed today.
	getCalories: function() {
		// Reset calories count before a new calculation based
		// on the elements inside the collection.
		calories = 0;
		// Loop over the collection and calculate the calories
		// of the items inside it.
		app.selectedFoods.each(function(item) {
			calories += item.get('itemCalories');
			console.log(item.get('itemCalories'));
		}, this);

		// console.log(calories);

		// Render the calculation taking the calories result
		// as a parameter.
		app.displayCaloriesView.render(calories);
	},

	// Render this view.
	render: function() {
		/* The `this.el` is the element defined in tagName.
		 * `this.$el` is its jQuery object, on which we can use
		 * the jQuery `html()` function.
		 */
		this.$el.html(this.template(this.model.attributes));

		return this;
	}
});
