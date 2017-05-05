var app = app || {};

// Food Collection View
// --------------------
app.FoodListView = Backbone.View.extend({
	// el: '#main',
	// el: '#food-items',


	// Set `el` to #foods to make the View get the value of the input
	// field. Setting `el` to '#food-items' as before it wasn't able
	// to get it.
	el: '#foods',
	// tagName: 'table',

	// Delegated event for creating new items.
	events: {
		// 'keypress #new-food': 'createFoodItem'
		// 'change #new-food': 'createFoodItem'
		'keypress #new-food': 'createFoodItem'
	},

	initialize: function() {
		// TODO
		// Uncomment to implement the input functionality

		// Reference to the input form.
		this.$input = this.$('#new-food');
		console.log(this.$input);
		// Reference to the food list.
		this.$list = $('#food-items');

		// Bind this collection to a `reset` or `change` event on this
		// collection and call `this.render` if it happens.
		this.listenTo(this.collection, 'reset change', this.render);

		this.collection = new app.FoodList();
		var self = this;

		this.collection.fetch({
			url: this.collection.url,
				type: 'post',
				contentType: 'application/json',
				data: JSON.stringify({
					'appId': '497ef47e',
					'appKey': '790e824a496fcc65e9fa3132a5d2d8fb',
					'query': 'Starbucks OR frapp*',
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
					// Uncomment to check the collection on the console.
					// console.log(self.collection);
					self.render();

					// Check if the user is using a small screen (less than
					// 450px) and in this case display the table as card table.
					self.enquireScreen();

				}
				// TODO
				// handle `error`
		});
	},

	// Render this View.
	render: function() {
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
		// Append it to the `el` element defined above.
		// this.$el.append(foodView.render().el);
		// var $tr = foodView.render().$el;
		// this.$el.append($tr);
		// this.$el.append(foodView.render().el);
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

	// TODO
	// Handle input by the user.
	createFoodItem: function(event) {
		// if (event.which !== ENTER_KEY || !this.$input.val().trim()) {
		// 	return;
		// }
		if (event.keyCode == 13) {
			console.log('input value');
		}


	}
});