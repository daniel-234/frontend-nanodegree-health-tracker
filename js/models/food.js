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
		itemQuantity: ''
	}
});
