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

		console.log(this.model.get('itemCalories'));
		app.calories += this.model.get('itemCalories');
		console.log(app.calories);

		// this.selectedCollection = new app.SelectedFoodList();

		// selectedCollection.push(this.model);

		// var selectedItemView = new app.DisplayItemView({ elem: name });

		console.log(this);
		console.log(app.selected1);

		app.selected1.push(this.model);

		app.selectedItemView.getCalories();
		app.selectedItemView.render();

		console.log(app.selected1);
		console.log(app.selected1.length);


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
