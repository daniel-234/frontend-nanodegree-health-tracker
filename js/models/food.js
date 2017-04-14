var app = app || {};

// Food Model
// ----------
// The basic **Food** Model has `brandName`, `itemName`,
// `itemCalories` and `itemQuantity` attributes.
app.Food = Backbone.Model.extend({
	defaults: {
		brandName: '',
		itemName: '',
		itemCalories: '',
		itemQuantity: 1
	},
	url: 'https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:2&' +
		'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb'
});