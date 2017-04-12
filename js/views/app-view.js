/* Code reorganized following the structure of the ToDo Backbone
 * application developed by Addy Osmani:
 * [BackboneJS - TodoMVC](http://todomvc.com/examples/backbone/)
 */

/* global Backbone */
var app = app || {};

// IIFE JavaScript construct.
(function($) {
	// Place the function in a `strict` operating context.
	'use strict';

	// FoodItem View
	// -------------

	app.AppView = Backbone.View.extend({
		// The element associated with the View, where content will be injected.
		// The `this.el` reference can be created from a View's `el`, `tagName`, `className`,
		// `id` or `attributes` properties. If none of these are specified, then `this.el` is
		// an empty div.
		// [Adrian Majia - Backbone JS for Absolute Beginners Part 2](http://adrianmejia.com/...
		// ...blog/2012/09/13/backbone-js-for-absolute-beginners-getting-started-part-2/#view-el)
		el: '#container',
		// Add a JS Undescore template, that can seem an unnecessary solution in this simple case,
		// but will help to create dynamic rendering when things get more complicated.
		// Template has the placeholders 'which' and 'cal' that will be substituted later in our code.
		template: _.template($('#foot-template').html()),
		// Call initialize when this view is instantiated.
		initialize: function() {
			console.log(this.model);
			console.log(this.collection);
			// console.log(app.FoodItem.get('itemName'));
			this.listenTo(this.collection, 'change reset', this.render, this);
			this.collection.fetch({
				reset: true,
				success: function(response) {
					processData(response);
					console.log(response.toJSON());
					console.log(response.toJSON()[0].hits[0].fields.brand_name);
				}
			});
			// if (this.model.has('itemName')) {
			// 	this.render();
			// }
			// app.FoodItem.makeRequest();
			// this.render();
		},
		render: function() {
			// // URL to query the Nutritionix API, copied from the 'Get Started' section of their website.
			// var queryUrl = 'https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:2&' +
			// 	'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb';
			// var itemName,
			// 	itemCalories;
			// // Store the value of `this` inside the View, to use it later inside the callback function.
			// var that = this;
			// $.ajax({
			// 	url: queryUrl,
			// 	type: 'get',
			// 	dataType: 'json',
			// 	success: function(result) {
			// 		itemName = result.hits[0].fields.item_name;
			// 		itemCalories = result.hits[0].fields.nf_calories;
			// 		// Use jQuery to get the 'el' element in this View and set its HTML content
			// 		// to the template string, assigning a value to the placeholders 'who' and 'cal.
			// 		that.$el.html(that.template({who: itemName, cal: itemCalories}));
			// 	}
			// });
			console.log(this.collection);
			console.log(this.collection.models[0].attributes.hits[0].fields.item_name);
			console.log(this.collection.models[0].attributes.hits[1].fields.item_name);
			// this.$el.html(this.template(this.model.toJSON()));
			// this.$el.html(this.template({
			// 	which: this.model.get('itemName'),
			// 	cal: this.model.get('itemCalories')
			// }));
			/* TODO
			 * Add results to collection as models. Here it is just replicating the JSON data.
			 */
			this.$el.html(this.template({
				which: this.collection.models[0].attributes.hits[0].fields.item_name,
				cal: this.collection.models[0].attributes.hits[0].fields.nf_calories
			}));

			// return this;
		}
	});

	function processData(response) {
		console.log(response.toJSON());
		console.log(response.toJSON()[0].hits[0].fields.brand_name);
		for(var i = 0; i < 2; i++) {
			app.foodItems.add({
				brandName: response.toJSON()[0].hits[i].fields.brand_name,
				itemName: response.toJSON()[0].hits[i].fields.item_name,
				itemCalories: response.toJSON()[0].hits[i].fields.nf_calories,
				itemQuantity: response.toJSON()[0].hits[i].fields.nf_serving_size_qty
			});
		}

		console.log(app.foodItems.length);

		// Log each itemName attribute. Cut the first stored result in collection as
		// it is not a useful value.
		for(var i = 1; i <= 2; i++) {
			console.log(app.foodItems.models[i].get('itemName'));
		}
	}
})(jQuery);