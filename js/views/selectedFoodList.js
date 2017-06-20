var app = app || {};

// Selected Food Collection View
// -----------------------------
app.SelectedFoodListView = Backbone.View.extend({
	el: '#foods',

	initialize: function() {
		// this.collection = new app.SelectedFoodList();

		this.$selected = $('#selected-food-items');


		// var calories = 0;
		// app.selected1.each(function(item) {
		// 	this.getCalories();
		// }, this);
		// this.getCalories();

		// var selectedItemView = new app.DisplayItemView({ elem: calories });

		// var selectedItemView = new app.DisplayItemView({  });



		// app.calories = 0;

		// app.selectedItemView = new app.DisplayItemView({  });



		this.listenTo(app.selected1, 'change add', this.render);
		// this.listenTo(app.selected1, 'change add', this.render);
	},

	render: function() {
		console.log('render1');
		// Call the clear method every time the View renders itself.
		this.clear();
		// Call renderFood for every model in the collection.
		app.selected1.each(function(item) {
			console.log(item);
			this.renderFood(item);
		}, this);
	},

	renderFood: function(item) {

		// Refactor
		var selectedFoodView = new app.SelectedFoodView({
			model: item
		});

		console.log(selectedFoodView);

		this.$selected.append(selectedFoodView.render().el);
	},

	// getCalories: function() {
	// 	app.selected1.each(function(item) {
	// 		this.getCalories();
	// 	}, this);
	// },

	clear: function() {
		// If there is no collection yet, just return.
		if (!app.selected1) {
			return;
		}
		// Remove all child nodes of the $list element from the DOM
		// using the jQuery `empty()` method.
		this.$selected.empty();
	}
});