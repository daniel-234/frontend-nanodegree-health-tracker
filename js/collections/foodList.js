var app = app || {};

// Food Collection
// ---------------
app.FoodList = Backbone.Collection.extend({
	// Model reference.
	model: app.Food,
	url: 'https://api.nutritionix.com/v1_1/search',
	// parse: function(response, options) {
	// 	var self = this;

	// 	_.each(response.models[0].attributes.hits, function(item, index) {

	// 		console.log(index);

	// 		// var member = new self.model();
	// 		// member.set('_id', index);
	// 		// self.push(member);


	// 	});

	// }

	parse: function(response) {
		console.log(response);
		var self = this;

		_.each(response.hits, function(item, index) {
			// console.log(item.fields);
			console.log(item.fields.item_name);
			var servingQuantity = item.fields.nf_serving_weight_grams !== null ? item.fields.nf_serving_weight_grams : item.fields.nf_serving_size_qty;
			console.log(servingQuantity);

			var member = new self.model();
			member.set('_id', index);
			member.set('brandName', item.fields.brand_name);
			member.set('itemName', item.fields.item_name);
			member.set('itemCalories', item.fields.nf_calories);
			// member.set('itemWeight', item.fields.nf_serving_weight_grams);
			member.set('itemWeight', servingQuantity);

			self.push(member);
		});
		// return response;
		console.log('length of this collection: ' + this.length);
		console.log(this);
		return this.models;
	}




					// _.each(response.models[0].attributes.hits, function(item, index) {
					// 	console.log(index);


					// 	var member = new self.model();
					// 	member.set('_id', index);
					// 	self.collection.push(member);
					// 	console.log(member);


					// });


	// 	console.log('length: ' + this.length);
	// 	return this.models;
	// }
});
