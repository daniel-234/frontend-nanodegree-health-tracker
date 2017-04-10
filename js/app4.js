var areGirlDevelopersCool = true;

var FoodItem = Backbone.Model.extend({
	defaults: {
		brandName: '',
		itemName: '',
		itemCalories: '',
		itemQuantity: 1
	},
	// generateUserName: function() {
	// 	var userName = this.get('firstName') + this.get('lastName');
	// 	this.set('userName', userName)
	// 	return userName;
	// },
	// initialize: function() {
	// 	this.generateUserName();
	// }
});

var FoodItemsList = Backbone.Collection.extend({
	model: FoodItem,
	// comparator: function(model) {
	// 	return model.get('lastName').toLowerCase();
	// }
});

var foodItem = new FoodItem({
	// firstName: "Grace",
 //    lastName: "Hopper",
 //    role: "Computer Scientist",
    // imgUrl: "http://www.history.navy.mil/photos/images/h96000/h96920k.jpg"
});

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

// var PersonView = Backbone.View.extend({
// 	className: 'rolodex',
// 	render: function() {
// 		var myImg = $('<img>').attr('src', this.model.get('imgUrl'));
// 		this.$el.append(myImg);
// 		return this;
// 	},
// 	events: {
// 		'click img': 'onClick'
// 	},
// 	onClick: function() {
// 		// do something cool here
// 	}
// });

// var personView = new PersonView({
// 	model: person
// });

// insert new code here

// $(document).ready(function() {
// 	$('body').append(personView.render().$el);
// });

// Exeercise 3: define a Backbone View of a Collection
var FoodItemsView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'change', this.render);
	},
	render: function() {
		var source = $('#food-template').html();
		var template = Handlebars.compile(source);
		var rendered = template({foodItemsList: this.collection.toJSON()});
		this.$el.append(rendered);
		return this;
	}
});

var foodItemsView = new FoodItemsView({
	collection: foodItemsList
});

$(document).ready(function() {
	$('body').append(foodItemsView.render().$el);
});
