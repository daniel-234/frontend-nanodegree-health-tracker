var app = app || {};
// var url1 = 'https://api.nutritionix.com/v1_1/search/' + 'mcdonalds' + '?results=0:2&' +
// 	'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb';
// var url2 = 'https://api.nutritionix.com/v1_1/search/' + 'mcdonalds' + '?results=3:5&' +
// 	'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb';

app.FoodListView = Backbone.View.extend({
	el: '#foods',

	// Delegated event for creating new items.
	events: {
		'keypress #new-food': 'createFoodItem'
	},

	initialize: function() {
		// Reference to the input form.
		this.$input = this.$('#new-food');
		// Reference to the food list.
		this.$list = $('#food-list');

		// Bind the relevant events to the collection.
		this.listenTo(app.foodList, 'add', this.addOne);
		this.listenTo(app.foodList, 'reset', this.render);
		// this.listenTo(app.foodList, 'all', this.render);

		// app.foodList.fetch({ reset: true });

		// this.collection = new app.FoodList();
		// this.food1 = new app.Food({url: url1});
		// this.food2 = new app.Food({url: url2});
		// console.log(this.food1.url);
		// console.log(this.food.query);
		// this.collection.add([
		// app.foodList.add([
		// 	app.food1,
		// 	app.food2
		// ]);
		// this.render();
	},
	render: function() {
		// app.foodList.each(function(item) {
		// 	this.renderFood(item);
		// }, this);
		console.log(app.foodList.length);
		this.$list.html('');
		app.foodList.each(this.addOne, this);
		console.log(app.foodList.length);

	},
	addOne: function(food) {
		var foodView = new app.FoodView({
			model: food
		});
		this.$el.append(foodView.render().el);
	},
	// addAll: function() {
	// 	this.$list.html('');
	// 	app.foodList.each(this.addOne, this);
	// },
	// renderFood: function(item) {
	// 	var foodView = new app.FoodView({
	// 		model: item
	// 	});
	// 	this.$el.append(foodView.render().el);
	// },

	// generate the attributes for a new Food item.
	newAttributes: function() {
		return {
			// brandName: this.$input.val().trim(),
			query: this.$input.val().trim(),
			// order: app.todos.nextOrder(),
			// completed: false

			// brandName: '',
			// itemName: '',
			// itemCalories: '',
			// itemQuantity: 1
		};
	},

	// Create a new **Food** model as you hit return in the main input field.
	createFoodItem: function(e) {
		if(e.which === ENTER_KEY && this.$input.val().trim()) {
			console.log(this.$input.val());
			app.foodList.create(this.newAttributes());
			this.$input.val('');
		}
	}
});