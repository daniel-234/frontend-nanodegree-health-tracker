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
		// Reference to the food list.
		this.$list = $('#food-items');

		// Bind this collection to a `reset` or `change` event on itself
		// and call `this.render` if it happens.
		this.listenTo(this.collection, 'reset change', this.render);
	},

	// Render this View.
	render: function() {
		// Call the clear method every time the View renders itself.
		this.clear();
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
		this.$list.append(foodView.render());
	},

	// Respond to a CSS Media Query using the JavaScript library 'enquire.js'
	// and call the function 'cardtable' from the jQuery plugin 'stacktable.js'
	// to display the table like cards.
	enquireScreen: function() {
		enquire.register('screen and (max-width: 450px)', {
			// Triggered when a media query matches.
			match: function() {
				// console.log('Matched');
				$('#food-table').cardtable();
			}
		});
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
		// Create a new collection
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
				// 'query': 'Starbucks OR frapp*',
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
				// Check if the user is using a small screen (less than
				// 450px) and in this case display the table as card table.
				self.enquireScreen();
			}
			// TODO
			// handle `error`
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
	}
});