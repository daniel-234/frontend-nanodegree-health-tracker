var app = app || {};

// Selected Food Collection View
// -----------------------------
app.SelectedFoodListView = Backbone.View.extend({
	el: '#foods',

	initialize: function() {
		this.$selected = $('#selected-food-items');

		this.listenTo(app.selected1, 'change add', this.render);
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