var app = app || {};
// var url1 = 'https://api.nutritionix.com/v1_1/search/' + 'mcdonalds' + '?results=0:2&' +
// 	'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb';
// var url2 = 'https://api.nutritionix.com/v1_1/search/' + 'mcdonalds' + '?results=3:5&' +
// 	'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb';

app.FoodListView = Backbone.View.extend({
	el: '#foods',

	// Delegated event for creating new items.
	events: {
		'keypress #new-food': 'createFoodItem'
	},

	initialize: function() {
		// Reference to the input form.
		this.$input = this.$('#new-food');
		// Reference to the food list.
		this.$list = $('#food-list');

		// Bind the relevant events to the collection.
		// this.listenTo(app.foodList, 'add', this.addOne);
		// this.listenTo(app.foodList, 'reset', this.render);
		// this.listenTo(app.foodList, 'all', this.render);

		this.listenTo(this.collection, 'reset change', this.render);

		// app.foodList.fetch({ reset: true });

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
						'nf_serving_weight_grams']
				}),
				reset: true,
				// success: function(response) {
				// 	console.log(response);
				// 	console.log(response.models[0].attributes.hits);
				// 	console.log(response.models[0].attributes.hits[1].fields.item_name);

				// 	var self = this;

				// 	_.each(response.models[0].attributes.hits, function(item, index) {
				// 		console.log(index);


				// 		var member = new self.model();
				// 		member.set('_id', index);
				// 		self.collection.push(member);
				// 		console.log(member);


				// 	});

				// 	// console.log('length: ' + self.collection.length);
				// 	// return self.collection.models;
				// }

				// success: function(collection) {
				// 	console.log(collection.models[0].attributes);
				// 	self.collection.forEach(function(item, index) {
				// 		console.log(item.get('item_name'));
				// 	});
				// }




				success: function() {
					console.log(self.collection);
				}




				// function(response) {
				// 	processData(response);
					// console.log(response);
					// console.log(self.collection);


					// self.render();


				// }
		});

		// this.render();


		function processData(response) {
			// console.log(response);
			console.log(response.models[0].attributes.hits);
			console.log(response.models[0].attributes.hits[1].fields.item_name);
			// var responseArray = response.models[0].attributes.hits;
			// for object in self.collection.models {
			// 	console.log(object);
			// }


			// return _.map(response.content, function(model, id) {
			// 	model.id = id;
			// 	console.log(model);
			// 	return model;
			// });


			// console.log(response);



			// console.log(self.collection.models);

			// var model = self.collection.at(1);
			// console.log(model);

			// console.log(response.toJSON()[0].hits[0].fields.brand_name);
			// for(var i = 0; i < 2; i++) {
			// 	self.collection.add({
			// 		brandName: response.toJSON()[0].hits[i].fields.brand_name,
			// 		itemName: response.toJSON()[0].hits[i].fields.item_name,
			// 		itemCalories: response.toJSON()[0].hits[i].fields.nf_calories,
			// 		itemQuantity: response.toJSON()[0].hits[i].fields.nf_serving_size_qty
			// 	});
			// }

			// console.log(self.collection.length);

			// Log each itemName attribute. Cut the first stored result in collection as
			// it is not a useful value.
			// for(var i = 1; i <= 2; i++) {
				// console.log(self.collection.models.get('itemName'));
			// }


			// self.collection.each(function(item) {
			// 	// this.renderFood(item);
			// 	// console.log(item.attributes.hits);
			// 	console.log(item.toJSON());
			// }, this);


			// console.log(response.attributes.hits[0].fields);
			// // console.log(response.attributes.foods[0].food_name);

			// // Store the first item retrieved by the API.
			// var foodItem = response.attributes.hits[0].fields;

			// // var foodItem = response.attributes.foods[0];
			// // Set the Model attributes to the retrieved values.
			// self.model.set({
			// 	brandName: response.attributes.hits[0].fields.brand_name,
			// 	itemName: response.attributes.hits[0].fields.item_name,
			// 	itemCalories: response.attributes.hits[0].fields.nf_calories,
			// 	itemQuantity: response.attributes.hits[0].fields.nf_serving_weight_grams
			// 	// itemName: foodItem.food_name,
			// 	// itemCalories: foodItem.nf_calories,
			// 	// itemQuantity: foodItem.nf_serving_size_qty
			// });
			// for (var i = 0; i < responseArray.length; i++) {
			// 	self.collection.add(responseArray[i]);
			// }
		};
		// },


		// this.food1 = new app.Food({url: url1});
		// this.food2 = new app.Food({url: url2});
		// console.log(this.food1.url);
		// console.log(this.food.query);
		// this.collection.add([
		// app.foodList.add([
		// 	app.food1,
		// 	app.food2
		// ]);
		// this.render();
	},
	render: function() {
		console.log('A');
		console.log(this.collection);
		console.log(this.collection.length);
		// app.foodList.each(function(item) {
		this.collection.each(function(item) {
			this.renderFood(item);
			console.log(item.attributes.hits);
		}, this);
		// console.log(app.foodList.length);
		// this.$list.html('');
		// app.foodList.each(this.addOne, this);
		// console.log(app.foodList.length);

	},
	// addOne: function(food) {
	// 	var foodView = new app.FoodView({
	// 		model: food
	// 	});
	// 	this.$el.append(foodView.render().el);
	// },
	// addAll: function() {
	// 	this.$list.html('');
	// 	app.foodList.each(this.addOne, this);
	// },
	renderFood: function(item) {
		var foodView = new app.FoodView({
			model: item.attributes.hits
		});
		console.log(foodView);
		this.$el.append(foodView.render().el);
	}

	// ,

	// generate the attributes for a new Food item.
	// newAttributes: function() {
	// 	return {
	// 		// brandName: this.$input.val().trim(),
	// 		query: this.$input.val().trim(),
	// 		// order: app.todos.nextOrder(),
	// 		// completed: false

	// 		// brandName: '',
	// 		// itemName: '',
	// 		// itemCalories: '',
	// 		// itemQuantity: 1
	// 	};
	// },

	// Create a new **Food** model as you hit return in the main input field.
	// createFoodItem: function(e) {
	// 	if(e.which === ENTER_KEY && this.$input.val().trim()) {
	// 		console.log(this.$input.val());
	// 		app.foodList.create(this.newAttributes());
	// 		this.$input.val('');
	// 	}
	// }
});