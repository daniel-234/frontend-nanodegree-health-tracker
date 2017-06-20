var app = app || {};

// Food Item View
// --------------
app.DisplayItemView = Backbone.View.extend({
	className: 'itemSelected',

	render: function(calories) {

		$('#selected-name').empty();

		var markup;

		markup = '<div>' + calories + '</div>';

		console.log(markup);

		$('#selected-name').append(markup);

	}
});
