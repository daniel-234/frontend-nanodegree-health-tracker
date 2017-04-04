/* The skeleton of this code was taken from a test guided exercise that I did
 * to learn Backbone. The code is almost identical to that of the exercise and
 * has just been adapted to the purpose of this app.
 */
var totalCalories = 0;

var FoodItem = Backbone.Model.extend({
	defaults: {
		brandName: '',
		itemName: '',
		itemCalories: '',
		itemQuantity: 1
	}
});

var FoodItemsList = Backbone.Collection.extend({
	model: FoodItem
});

var foodItem = new FoodItem();

var foodItemsList = new FoodItemsList([
	{
		brandName: 'Pizza Hut',
		itemName: 'Cheese Only Pizza',
		itemCalories: '589',
		itemQuantity: 1
	},
	{
		brandName: 'McDonald\'s',
		itemName: 'Cheeseburger',
		itemCalories: '300',
		itemQuantity: 1
	},
	{
		brandName: 'Starbucks',
		itemName: 'Hot Chocolate with Whole Milk',
		itemCalories: '165',
		itemQuantity: 1
	}
]);

foodItemsList.add({
	brandName: 'Dunkin\'Donuts',
	itemName: 'Blueberry Cake Donut',
	itemCalories: '340',
	itemQuantity: 1
});

console.log(foodItemsList.toJSON());
console.log(foodItemsList.models[0].get('itemCalories'));

// Calculate the total calories
for(var i=0; i < foodItemsList.length; i++) {
	totalCalories += parseInt(foodItemsList.models[i].get('itemCalories'));
}

console.log(totalCalories);

var FoodItemsView = Backbone.View.extend({
	render: function() {
		// Render the food items
		var source = $('#food-template').html();
		var template = Handlebars.compile(source);
		var rendered = template({foodItemsList: this.collection.toJSON()});
		this.$el.append(rendered);
		// Render the total calories
		var source2 = $('#calories-sum').html();
		var template2 = Handlebars.compile(source2);
		var context = { calories: totalCalories };
		var caloriesCount = template2(context);
		this.$el.append(caloriesCount);
		return this;
	}
});

var foodItemsView = new FoodItemsView({
	collection: foodItemsList
});

$(document).ready(function() {
	$('body').append(foodItemsView.render().$el);
});
