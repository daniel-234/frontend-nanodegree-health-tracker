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
		brandName: 'Coca Cola',
		itemName: 'Coca',
		itemCalories: '200',
		itemQuantity: 1
	},
	{
		brandName: 'McDonald',
		itemName: 'McBurger',
		itemCalories: '1000',
		itemQuantity: 1
	},
	{
		brandName: 'Nestle',
		itemName: 'Chocolate',
		itemCalories: '2500',
		itemQuantity: 1
	}
]);

foodItemsList.add({
	brandName: 'McPizza',
	itemName: 'pizza Nutella Gigante',
	itemCalories: '5000',
	itemQuantity: 1
});

console.log(foodItemsList.toJSON());
console.log(foodItemsList.models[0].get('itemCalories'));


for(var i=0; i < foodItemsList.length; i++) {
	totalCalories += parseInt(foodItemsList.models[i].get('itemCalories'));
}

console.log(totalCalories);

var FoodItemsView = Backbone.View.extend({
	render: function() {
		var source = $('#food-template').html();
		var template = Handlebars.compile(source);
		var rendered = template({foodItemsList: this.collection.toJSON()});
		this.$el.append(rendered);
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
