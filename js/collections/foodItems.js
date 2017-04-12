/* Code reorganized following the structure of the ToDo Backbone
 * application developed by Addy Osmani:
 * [BackboneJS - TodoMVC](http://todomvc.com/examples/backbone/)
 */

/* global Backbone */
var app = app || {};

// IIFE JavaScript construct.
(function() {
	// Place the function in a `strict` operating context.
	'use strict';

	// FoodItem Collection
	// -------------------

	var FoodItems = Backbone.Collection.extend({
		model: app.FoodItem,
		url: 'https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:2&' +
				'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb'
	});

	// Create a global collection of **FoodItems**.
	app.foodItems = new FoodItems();
	app.foodItems.reset();
})();