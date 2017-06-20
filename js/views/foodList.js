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
		// 'click .foodContainer': 'selectContent',
		// 'click .small-only': 'selectContentOnSmallerScreens'
	},

	initialize: function() {
		// Reference to the input form.
		this.$input = this.$('#new-food');
		console.log(this.$input);
		// Reference to the food list.
		this.$list = $('#food-items');
		this.$selected = $('#selected-items');

		// this.selectedCollection = new app.SelectedFoodList();

		// this.selectedFoodListView = new app.SelectedFoodListView({ collection: this.selectedCollection });

		app.selected1 = new app.SelectedFoodList();

		app.selectedFoodListView = new app.SelectedFoodListView({ collection: app.selected1 });

		// app.calories = this.model.get('itemCalories');




		// app.calories = 0;

		app.selectedItemView = new app.DisplayItemView({  });

		console.log('Prova1');






		///////////////////
		// TODO Move it from here!!! It is created before the click!
		// app.calories = 0;

		// var selectedItemView = new app.DisplayItemView({ elem: app.calories });

		///////////////////




		// Bind this collection to a `reset` or `change` event on itself
		// and call `this.render` if it happens.
		this.listenTo(this.collection, 'reset change', this.render);
	},

	// Render this View.
	render: function() {
		console.log('render');
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
		this.$list.append(foodView.render().el);
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

	// TODO  clean code
	// Show the content of the clicked element on bigger screens.
	selectContent: function(e) {
		var self = this;

		enquire.register('screen and (min-width: 451px)', {
			match: function() {
				e.preventDefault();
				// Get the clicked element.
				var elem = $(e.currentTarget);
				// Get the `div` element inside the second child of the clicked element.
				var itemDiv = elem.find('div').eq(1);
				// Get the content of the selected element.
				// var name = itemDiv.html();

				var name = itemDiv;

				console.log(name);

				console.log(self);

				// self.displayName(name);

				self.displayName(elem);

				var id = elem.attr('name');
				console.log(elem);
				console.log(id);
			}
		});
	},

	// TODO  clean code
	// Show the content of the clicked element on smaller screens
	selectContentOnSmallerScreens: function(e) {
		var self = this;

		enquire.register('screen and (max-width: 450px)', {
			match: function() {
				e.preventDefault();
				// Get the clicked element.
				var elem = $(e.currentTarget);
				// Get the `div` element inside the second child of the clicked element.
				var itemDiv = elem.find('div').eq(1);
				// Get the content of the selected element.
				var name = itemDiv.html();

				console.log(name);

				console.log(this);

				self.displayName(name);


				var id = elem.data('_id');
				console.log(id);
			}
		});
	},

	// TODO  adapt name to better purpose
	// Display selected item in another div
	displayName: function(name) {
		// TODO  pass the element instead of name.
		// Instantiate a View, passing as parameter the name of the selected element.
		// var selectedItemView = new app.DisplayItemView({ elem: name });

		// this.$selected.append(selectedItemView.render().el);
		// this.$selected.append(name);

		console.log(name);
		// console.log(selectedItemView.render().options);
		// console.log(selectedItemView);


		// this.selectedCollection = new app.SelectedFoodList();
		this.selectedCollection.push(name);

		console.log(this.selectedCollection.length);
		console.log(this.selectedCollection.models[0]);

		this.selectedFoodListView.render();

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
	}
});