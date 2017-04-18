var app = app || {};
var url1 = 'https://api.nutritionix.com/v1_1/search/' + 'mcdonalds' + '?results=0:2&' +
	'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb';
var url2 = 'https://api.nutritionix.com/v1_1/search/' + 'mcdonalds' + '?results=3:5&' +
	'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb';

app.FoodListView = Backbone.View.extend({
	el: '#foods',

	events: {
		'keypress #new-food': 'getFoodItemData'
	},

	initialize: function() {
		this.$input = this.$('#new-food');
		this.collection = new app.FoodList();
		this.food1 = new app.Food({url: url1});
		this.food2 = new app.Food({url: url2});
		console.log(this.food1.url);
		// console.log(this.food.query);
		this.collection.add([
			this.food1,
			this.food2
		]);
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
	},
	getFoodItemData: function(e) {
		if(e.which === ENTER_KEY && this.$input.val().trim()) {
			console.log(this.$input.val());
		}
	}
});