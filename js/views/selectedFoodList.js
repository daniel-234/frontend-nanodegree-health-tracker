var app = app || {};

// Selected Food Collection View
// -----------------------------
app.SelectedFoodListView = Backbone.View.extend({
	el: '#foods',

	initialize: function() {
		// Store the selected items table body reference.
		this.$selected = $('#selected-food-items');
		// Store the selected items table reference.
		this.$selectedTable = $('#selected-food-table');

		// Bind this collection to a `reset` or `change` event on itself
		// and call `this.render` if it happens.
		this.listenTo(app.selectedFoods, 'change add', this.render);
	},

	// Render this View.
	render: function() {
		// Call the clear method every time the View renders itself.
		this.clear();
		// Define a table header with 4 cells inside a row.
		var tableHeader =
			'<thead id="selected-food-table-header">' +
				'<tr>' +
					'<th class="col-xs-3 text-center"></th>' +
					'<th class="col-xs-3 text-center"></th>' +
					'<th class="col-xs-3 text-center"></th>' +
					'<th class="col-xs-3 text-center"></th>' +
				'</tr>' +
			'</thead>';

		// Append the header to the table as first element (the table
		// has already been appended to the table in the DOM.
		this.$selectedTable.prepend(tableHeader);
		// Call renderFood for every model in the collection.
		app.selectedFoods.each(function(item) {
			console.log(item);
			this.renderFood(item);
		}, this);
	},

	// Define a new model View passing `item` as its reference model.
	renderFood: function(item) {
		var selectedFoodView = new app.SelectedFoodView({
			model: item
		});

		// Append it to a container in the DOM.
		// After calling `view.render()`, pass its `el` DOM element property
		// into the jQuery `.append()` method of the `$list` object.
		this.$selected.append(selectedFoodView.render().el);
	},

	// Remove the old view elements from the DOM.
	clear: function() {
		// If there is no collection yet, just return.
		if (!app.selectedFoods) {
			return;
		}
		// Remove all child nodes of the $list element from the DOM
		// using the jQuery `empty()` method.
		this.$selected.empty();
		// Remove the table header.
		this.$selectedTable.find('thead').remove();
	}
});