var app = app || {};

// Selected Food Collection
// ------------------------
app.SelectedFoodList = Backbone.Collection.extend({
	// Model reference.
	model: app.Food

});