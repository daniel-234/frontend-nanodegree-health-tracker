var app = app || {};

// Food Item View
// --------------
app.FoodView = Backbone.View.extend({
	tagName: 'div',
	className: 'foodContainer',
	template: _.template($('#food-template').html()),

	initialize: function() {
		// Store the original value of `this` in the `self` alias for
		// later access.
		var self = this;
		this.listenTo(this.model, 'change', this.render);
		this.model.fetch({
			reset: true,
			success: function(response) {
				processData(response);
			}
		});
		function processData(response) {
			console.log(response.attributes.hits[0].fields);
			// Store the first item retrieved by the API.
			var foodItem = response.attributes.hits[0].fields;
			// Set the Model attributes to the retrieved values.
			self.model.set({
				brandName: response.attributes.hits[0].fields.brand_name,
				itemName: response.attributes.hits[0].fields.item_name,
				itemCalories: response.attributes.hits[0].fields.nf_calories,
				itemQuantity: response.attributes.hits[0].fields.nf_serving_size_qty
			});
		}
	},

	render: function() {
		// `this.el` is the element defined in tagName.
		// `this.$el` is its jQuery object, on which we can use
		// the jQuery `html()` function.
		this.$el.html(this.template(this.model.attributes));

		return this;
	}
});