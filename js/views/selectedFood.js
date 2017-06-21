var app = app || {};

// Selected Food Item View
// -----------------------
app.SelectedFoodView = Backbone.View.extend({
	// Create a new `tr` for each Model View.
	tagName: 'tr',
	className: 'foodContainer',

	// Cache the template function for a single item.
	template: _.template($('#food-template').html()),

	// Render this View.
	render: function() {
		this.$el.html(this.template(this.model.attributes));

		return this;
	}
});