var app = app || {};

// Selected Food Collection View
// -----------------------------
app.SelectedFoodListView = Backbone.View.extend({
	el: '#foods',

	initialize: function() {
		// this.collection = new app.SelectedFoodList();

		this.$selected = $('#selected-food-items');


		this.listenTo(this.collection, 'reset change', this.render);
	},

	render: function() {
		this.collection.each(function(item) {
			console.log(item);
			this.renderFood(item);
		}, this);
	},

	renderFood: function(item) {

		// Refactor
		var foodView = new app.FoodView({
			model: item
		});

		console.log(foodView);

		this.$selected.append(foodView.render().el);
	}
});