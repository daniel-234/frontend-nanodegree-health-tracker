var app = app || {};

// Food Item View
// --------------
app.DisplayItemView = Backbone.View.extend({
	// Create a new `tr` for each Model View.
	// tagName: 'tr',
	// el: '#selected-name'
	className: 'itemSelected',
	// Cache the template function for a single item.
	// template: _.template($('#item-template').html()),

	initialize: function(options) {
		console.log(options.elem);
		console.log(options);
		this.options = options;
		// this.render(options);
		// this.calories = 0;

		// this.getCalories();
		// this.render();
		this.listenTo(app.selected1, 'change add', this.getCalories());
		// this.listenTo(app.selected1, 'change add', this.render());
	},

	getCalories: function() {
		// app.selected1.each(function(item) {
		// 	calories += this.model.get('itemCalories');
		// }, this);

		console.log(app.calories);
		console.log(app.selected1);
	},

	render: function() {

		$('#selected-name').empty();

		var markup;

		// markup = '<div>' + this.options.elem + '</div>';
		markup = '<div>' + app.calories + '</div>';

		console.log(markup);
		console.log(this.options.elem);

		// this.$el.html(markup);

		/* The `this.el` is the element defined in tagName.
		 * `this.$el` is its jQuery object, on which we can use
		 * the jQuery `html()` function.
		 */

		$('#selected-name').append(markup);

		// console.log(options.elem);
		// this.$el.html(this.template(options.elem));
		console.log(this);

		return this;
	}
});
