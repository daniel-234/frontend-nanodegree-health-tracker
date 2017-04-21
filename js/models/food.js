var app = app || {};

// Food Model
// ----------
// The basic **Food** Model has `brandName`, `itemName`,
// `itemCalories` and `itemQuantity` attributes.
app.Food = Backbone.Model.extend({
	idAttribute: '_id',
	defaults: {
		brandName: '',
		itemName: '',
		itemCalories: '',
		itemWeight: ''
	}
});
