var app = app || {};

// Food Item View
// --------------
app.DisplayItemView = Backbone.View.extend({
	className: 'itemSelected',

	render: function(calories) {

		$('#selected-name').empty();

		var markup;

		markup = '<div>' + 'Total calories:  ' + calories + '</div>';

		console.log(markup);

		$('#selected-name').append(markup);

	}
});
