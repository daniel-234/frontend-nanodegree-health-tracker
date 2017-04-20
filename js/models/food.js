var app = app || {};

// var url1 = 'https://api.nutritionix.com/v1_1/search/' + 'mcdonalds' + '?results=0:2&' +
// 	'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb';
// var url2 = 'https://api.nutritionix.com/v1_1/search/' + 'mcdonalds' + '?results=3:5&' +
// 	'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb';

// Food Model
// ----------
// The basic **Food** Model has `brandName`, `itemName`,
// `itemCalories` and `itemQuantity` attributes.
app.Food = Backbone.Model.extend({
	// var query = '',
	// initialize: function(options) {
	// 	this.query = options.query;
	// 	console.log(this.query);
	// },
	defaults: {
		brandName: '',
		itemName: '',
		itemCalories: '',
		itemQuantity: 1,
		query: ''
	},
	// url: 'https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:2&' +
	// 	'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb'
	// url: 'https://api.nutritionix.com/v1_1/search/' + this.query + '?results=0:2&' +
	// 	'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb'
	// console.log(this.query);
	// query: '',
	url: 'https://api.nutritionix.com/v1_1/search',
	initialize: function() {
		// Get the brand name of this model and store it in a variable.
		var brandName = this.get('brandName');
		// this.url = 'https://api.nutritionix.com/v1_1/search/' + brandName + '?results=0:2&' +
		// 	'fields=item_name&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb';
		// this.url = 'https://trackapi.nutritionix.com/v2/search/item?nix_item_id=513fc9e73fe3ffd40300109f&x-app-id=497ef47e&x-app-key=2911873def920ae94a2440382f56e9b6';
		// this.url = 'AAA ' + brandName;
		console.log(brandName);
		// console.log(this.url);
	}
});

// Request to search/item/Endpoint for common foods
// var one = 'https://trackapi.nutritionix.com/v2/search/instant?query=chicken&x-app-id=497ef47e&x-app-key=2911873def920ae94a2440382f56e9b6';

// var three = 'https://trackapi.nutritionix.com/v2/search/item?nix_item_id=513fc9e73fe3ffd40300109f&x-app-id=497ef47e&x-app-key=2911873def920ae94a2440382f56e9b6';

// // Request to natural/nutrients
// var two = 'https://trackapi.nutritionix.com/v2/natural/nutrients&query=chocolate&content-type=application/json&appId=497ef47e&appKey=2911873def920ae94a2440382f56e9b6';


// app.food1 = new app.Food();
// app.food2 = new app.Food();
// console.log(app.food1.url);
