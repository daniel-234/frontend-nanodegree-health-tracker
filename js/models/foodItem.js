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

	// FoodItem Model
	// --------------

	// The basic **FoodItem** Model has `brandName`, `itemName`,
	// `itemCalories` and `itemQuantity` attributes.
	app.FoodItem = Backbone.Model.extend({
		defaults: {
			brandName: '',
			itemName: 'Prova',
			itemCalories: '',
			itemQuantity: 1
		}
	});
})();