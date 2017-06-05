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
		console.log(options);
		this.options = options;
		// this.render(options);
		// this.render();
	},

	render: function() {

		var markup;

		markup = '<div>' + this.options.elem + '</div>';

		console.log(markup);

		this.$el.html(markup);

		/* The `this.el` is the element defined in tagName.
		 * `this.$el` is its jQuery object, on which we can use
		 * the jQuery `html()` function.
		 */

		// console.log(options.elem);
		// this.$el.html(this.template(options.elem));
		console.log(this);

		return this;
	}
});
