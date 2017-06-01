var app = app || {};

// Food Item View
// --------------
app.DisplayItemView = Backbone.View.extend({
	// Create a new `tr` for each Model View.
	// tagName: 'tr',
	className: 'itemSelected',
	// Cache the template function for a single item.
	template: _.template($('#item-template').html()),

	initialize: function(options) {
		console.log(options.elem);
	},

	render: function() {


		/* The `this.el` is the element defined in tagName.
		 * `this.$el` is its jQuery object, on which we can use
		 * the jQuery `html()` function.
		 */


		// this.$el.html(this.template("a"));

		// return this;
	}
});
