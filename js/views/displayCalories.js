var app = app || {};

// Food Item View
// --------------
app.DisplayCaloriesView = Backbone.View.extend({
	className: 'itemSelected',

	// Render this View.
	render: function(calories) {
		// Remove all child nodes of the $list element from the DOM
		// using the jQuery `empty()` method.
		$('#selected-name').empty();

		var markup;
		markup = '<div class="daily-calories">' + 'Total daily calories:  ' + calories + '</div>';
		// console.log(markup);

		$('#selected-name').append(markup);
	}
});
