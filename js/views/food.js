var app = app || {};

// var url = 'https://api.nutritionix.com/v1_1/search';

// Food Item View
// --------------
app.FoodView = Backbone.View.extend({
	// The DOM element for a food item is a list tag.
	tagName: 'li',
	// Cache the template function for a single item.
	template: _.template($('#food-template').html()),

	initialize: function() {
		// console.log(this.model.url);

		// Store the original value of `this` in the `self` alias for
		// later access.
		var self = this;
		this.listenTo(this.model, 'change', this.render);
		this.model.fetch({
			url: this.model.url,
			type: 'post',
			contentType: 'application/json',
			data: JSON.stringify({
				'appId': '497ef47e',
				'appKey': '790e824a496fcc65e9fa3132a5d2d8fb',
				'query': 'Starbucks OR frapp*',
				'fields': [
					'item_name',
					'brand_name',
					'nf_calories',
					'nf_serving_weight_grams']
			}),
			reset: true,
			success: function(response) {
				processData(response);
				console.log(response);
			}
		},
		{
			credentials: 'same-origin'
		});




		function processData(response) {
			console.log(response);
			console.log(response.attributes.hits[0].fields);
			// console.log(response.attributes.foods[0].food_name);

			// Store the first item retrieved by the API.
			var foodItem = response.attributes.hits[0].fields;

			// var foodItem = response.attributes.foods[0];
			// Set the Model attributes to the retrieved values.
			self.model.set({
				brandName: response.attributes.hits[0].fields.brand_name,
				itemName: response.attributes.hits[0].fields.item_name,
				itemCalories: response.attributes.hits[0].fields.nf_calories,
				itemQuantity: response.attributes.hits[0].fields.nf_serving_weight_grams
				// itemName: foodItem.food_name,
				// itemCalories: foodItem.nf_calories,
				// itemQuantity: foodItem.nf_serving_size_qty
			});
		}
	},

	render: function() {
		console.log(this.model);
		console.log(this.model.attributes);
		// console.log(this.model.attributes.brandName);
		// `this.el` is the element defined in tagName.
		// `this.$el` is its jQuery object, on which we can use
		// the jQuery `html()` function.
		this.$el.html(this.template(this.model.attributes));

		return this;
	}
});
