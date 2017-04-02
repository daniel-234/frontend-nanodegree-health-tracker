var data;

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

function processData(response) {
	data = response;
	console.log(data);
	console.log(response);
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

