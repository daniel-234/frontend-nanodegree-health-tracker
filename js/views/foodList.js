var app = app || {};

// Food Collection View
// --------------------
app.FoodListView = Backbone.View.extend({
	// Set `el` to #foods to make the View get the value of the input
	// field and table.
	el: '#foods',

	// Delegated event for creating new items.
	events: {
		'keypress #new-food': 'createFoodItem'
	},

	initialize: function() {
		// Reference to the input form.
		this.$input = this.$('#new-food');
		console.log(this.$input);
		// Store the food table body.
		this.$list = $('#food-items');
		// Store the food table reference.
		this.$foodTable = $('#food-table');

		// Create a new Collection to store the selected items.
		app.selectedFoods = new app.SelectedFoodList();
		// Create a View to render the selected items collection.
		app.selectedFoodListView = new app.SelectedFoodListView({ collection: app.selectedFoods });
		// Create a View to render the daily calories count.
		app.displayCaloriesView = new app.DisplayCaloriesView();

		// Bind this collection to a `reset` or `change` event on itself
		// and call `this.render` if it happens.
		this.listenTo(this.collection, 'reset change', this.render);
	},

	// Render this View.
	render: function() {
		console.log('render');
		// Call the clear method every time the View renders itself.
		this.clear();

		// Define a table header with 4 cells inside a row.
		var tableHeader =
			'<thead>' +
				'<tr>' +
					'<th class="col-xs-3 text-center">Brand</th>' +
					'<th class="col-xs-3 text-center">Item</th>' +
					'<th class="col-xs-3 text-center">Calories</th>' +
					'<th class="col-xs-3 text-center">Quantity</th>' +
				'</tr>' +
			'</thead>';
		// Append the header to the table as first element (the table
		// has already been appended to the table in the DOM.
		this.$foodTable.prepend(tableHeader);

		// Call renderFood for every model in the collection.
		this.collection.each(function(item) {
			console.log(item);
			this.renderFood(item);
		}, this);
	},

	// Define a new model View passing `item` as its reference model.
	renderFood: function(item) {
		var foodView = new app.FoodView({
			model: item
		});
		// Append it to a container in the DOM.
		// After calling `view.render()`, pass its `el` DOM element property
		// into the jQuery `.append()` method of the `$list` object.
		this.$list.append(foodView.render().el);
	},

	// Handle input by the user.
	createFoodItem: function(event) {
		if (event.which !== ENTER_KEY || !this.$input.val().trim()) {
			return;
		}
		console.log(this.$input.val().trim());
		// Call the makeRequest method passing in the input value.
		this.makeRequest(this.$input.val().trim());
	},

	// Make the request to the API passing in the query parameter.
	makeRequest: function(query) {
		// Create a new collection to store the API response items.
		this.collection = new app.FoodList();
		// Cache the reference to this view.
		var self = this;
		// console.log(this.collection.toJSON());

		// Fetch the data.
		this.collection.fetch({
			url: this.collection.url,
			type: 'post',
			contentType: 'application/json',
			data: JSON.stringify({
				'appId': '497ef47e',
				'appKey': '790e824a496fcc65e9fa3132a5d2d8fb',
				'query': query,
				'fields': [
					'item_name',
					'brand_name',
					'nf_calories',
					'nf_serving_weight_grams',
					'nf_serving_size_qty'
				]
			}),
			reset: true,
			success: function() {
				// console.log(self.collection.toJSON());
				// Uncomment to check the collection on the console.
				// console.log(self.collection);

				// Render this view.
				self.render();
			},
			// Handle error if the AJAX method fails to load the API.
			error: function() {
				// Display the error message on the console to let the user have more details about it.

				// console.log(arguments[1].statusText);
				alert("There was an error loading the API");
			}
		});
	},

	// Remove the old view elements from the DOM.
	clear: function() {
		// If there is no collection yet, just return.
		if (!this.collection) {
			return;
		}

		// Remove all child nodes of the $list element from the DOM
		// using the jQuery `empty()` method.
		this.$list.empty();
		// Remove the table header.
		this.$foodTable.find('thead').remove();
	}
});