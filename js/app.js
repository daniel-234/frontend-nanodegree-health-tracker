// Create a Namespace for our app.
var app = app || {};

// var templateString = ;

app.FoodItem = Backbone.Model.extend({
	defaults: {
		brandName: '',
		itemName: 'Prova',
		itemCalories: '',
		itemQuantity: 1
	},
	initialize: function() {
		// console.log(get('itemName'));
		this.getFoodData();
	},
	getFoodData: function() {
		// URL to query the Nutritionix API, copied from the 'Get Started' section of their website.
		var queryUrl = 'https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:2&' +
			'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb';
		// var itemName,
		// 	itemCalories;
		// Store the value of `this` inside the View, to use it later inside the callback function.
		var model = this;
		$.ajax({
			url: queryUrl,
			type: 'get',
			dataType: 'json',
			success: function(result) {
				console.log(result);
				model.set({
					brandName: result.hits[0].fields.brand_name,
					itemName: result.hits[0].fields.item_name,
					itemCalories: result.hits[0].fields.nf_calories,
					itemQuantity: result.hits[0].fields.nf_serving_size_qty
				});
				console.log(model.itemName);
				console.log(this.itemName);
				// itemName = result.hits[0].fields.item_name;
				// itemCalories = result.hits[0].fields.nf_calories;
				// // Use jQuery to get the 'el' element in this View and set its HTML content
				// // to the template string, assigning a value to the placeholders 'who' and 'cal.
				// that.$el.html(that.template({who: itemName, cal: itemCalories}));
			}
		});
	}
});

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
		// console.log(app.FoodItem.get('itemName'));
		this.listenTo(this.model, 'change', this.render);
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
		console.log(this.model.toJSON());
		// this.$el.html(this.template(this.model.toJSON()));
		this.$el.html(this.template({
			which: this.model.get('itemName'),
			cal: this.model.get('itemCalories')
		}));
	}
});

// Initialize the View.
app.foodItem = new app.FoodItem();
app.appView = new app.AppView({ model: app.foodItem });