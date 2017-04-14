var app = app || {};

// Food Collection
// ---------------
app.FoodList = Backbone.Collection.extend({
	// Model reference.
	model: app.Food
});