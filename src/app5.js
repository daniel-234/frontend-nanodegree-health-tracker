// var data;

var FoodItem = Backbone.Model.extend({
	defaults: {
		brandName: '',
		itemName: '',
		itemCalories: '',
		itemQuantity: 1
	}
});

var foodItem = new FoodItem();
console.log(foodItem.get('itemQuantity'));

var FoodItemList = Backbone.Collection.extend({
	model: FoodItem
});

var foodListCollection = new FoodItemList();

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

// Code taken from file CollectionViewSpec.js found in the
// Backbone course hosted in 'teaching-materials.org'.
var FoodItemView = Backbone.View.extend({
	render: function() {
		console.log(foodListCollection.toJSON());
		var source = $('#food-template').html();
		var template = Handlebars.compile(source);
		var rendered = template({foodListCollection: this.collection.toJSON()});
		this.$el.append(rendered);
		return this;
	}
});

var foodItemView = new FoodItemView({
	collection: foodListCollection
});

// console.log(foodListCollection);

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
	$('body').append(foodItemView.render().$el);
});
