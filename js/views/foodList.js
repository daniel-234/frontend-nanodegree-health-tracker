var app = app || {};
var url = 'https://api.nutritionix.com/v1_1/search/' + 'mcdonalds' + '?results=0:2&' +
		'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb';

app.FoodListView = Backbone.View.extend({
	el: '#foods',

	initialize: function() {
		this.collection = new app.FoodList();
		this.food = new app.Food({url: url});
		console.log(this.food.url);
		// console.log(this.food.query);
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