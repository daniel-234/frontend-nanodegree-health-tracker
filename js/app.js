/*global $ */
var app = app || {};


$(function () {
	'use strict';

	// Initialize the View.
	new app.AppView({
		collection: app.foodItems
	});
});

// // Initialize the View.
// app.foodItem = new app.FoodItem();
// app.foodItems = new app.FoodItems();
// app.foodItems.reset();
// app.appView = new app.AppView({
// 	// model: app.foodItem
// 	collection: app.foodItems
// });