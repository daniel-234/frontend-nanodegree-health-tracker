var app = app || {};

app.FoodListView = Backbone.View.extend({
	el: '#foods',

	initialize: function() {
		this.collection = new app.FoodList();
		this.food = new app.Food();
		this.collection.add(this.food);
		this.render();
	},
	render: function() {
		this.collection.each(function(item) {
			this.renderFood(item);
		}, this);
	},
	renderFood: function(item) {
		var foodView = new app.FoodView({
			model: item
		});
		this.$el.append(foodView.render().el);
	}
});