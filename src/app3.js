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

// var foodItemsList = new FoodItemsList([
// 	{
// 		brandName: 'Coca Cola',
// 		itemName: 'Coca',
// 		itemCalories: '200',
// 		itemQuantity: 1
// 	},
// 	{
// 		brandName: 'McDonald',
// 		itemName: 'McBurger',
// 		itemCalories: '1000',
// 		itemQuantity: 1
// 	},
// 	{
// 		brandName: 'Nestle',
// 		itemName: 'Chocolate',
// 		itemCalories: '2500',
// 		itemQuantity: 1
// 	}
// ]);

// foodItemsList.add({
// 	brandName: 'McPizza',
// 	itemName: 'pizza Nutella Gigante',
// 	itemCalories: '5000',
// 	itemQuantity: 1
// });

// console.log(foodItemsList.toJSON());


var foodListCollection = new FoodItemsList();


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




function processData(response) {
	// Add a Model to the Collection for each of the 20 query result
	for(var i = 0; i < 20; i++) {
		foodListCollection.add({
			brandName: response.hits[i].fields.brand_name,
			itemName: response.hits[i].fields.item_name,
			itemCalories: response.hits[i].fields.nf_calories,
			itemQuantity: response.hits[i].fields.nf_serving_size_qty
		});
	}

	// Log each itemName attribute
	foodListCollection.forEach(function(model) {
		console.log(model.get('itemName'));
	});

	console.log(foodListCollection.toJSON());


	console.log(response.hits[0].fields);
	console.log('Brand name: ' + response.hits[0].fields.brand_name);
	console.log('Item name: ' + response.hits[0].fields.item_name);
	console.log('Calories: ' + response.hits[0].fields.nf_calories);
	console.log('Serving size quantity: ' + response.hits[0].fields.nf_serving_size_qty);

	var foodItem = 'Brand name: ' + response.hits[0].fields.brand_name + ' ; ' +
		'Item name: ' + response.hits[0].fields.item_name + ' ; ' +
		'Calories: ' + response.hits[0].fields.nf_calories + ' ; ' +
		'Serving quantity: ' + response.hits[0].fields.nf_serving_size_qty;
	$('#items').append(foodItem);
}

retrieveValues(processData);




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
	// collection: foodItemsList
	collection: foodListCollection
});



function retrieveValues(callback) {
	var queryUrl = 'https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&' +
		'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb';
	$.ajax({
		url: queryUrl,
		type: 'get',
		dataType: 'json',
		success: callback
	});
}



$(document).ready(function() {
	$('body').append(foodItemsView.render().$el);
});
