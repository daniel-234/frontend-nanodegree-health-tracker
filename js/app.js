var templateString = '<h3>I really like <%= who %>.</h3><h3>Lets\'s see how many calories it has.' +
	' Uhm, it has <%= cal %>!</h3>';
var AppView = Backbone.View.extend({
	// The element associated with the View, where content will be rendered
	el: '#container',
	// Add a JS Undescore template, that can seem an unnecessary solution in this case,
	// but will help to create dynamic rendering when things get more complicated.
	// Template has the placeholder 'who' that will be substituted later in our code.
	template: _.template(templateString),
	// Call initialize when this view is instantiated
	initialize: function() {
		this.render();
	},
	render: function() {
		// URL to query the Nutritionix API, copied from the 'Get Started' section of their website.
		var queryUrl = 'https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:2&' +
			'fields=item_name,brand_name,item_id,nf_calories&appId=497ef47e&appKey=790e824a496fcc65e9fa3132a5d2d8fb';
		var itemName,
			itemCalories;
		// Store the value of `this` inside the View, to use it later inside the callback function.
		var that = this;
		$.ajax({
			url: queryUrl,
			type: 'get',
			dataType: 'json',
			success: function(result) {
				itemName = result.hits[0].fields.item_name;
				itemCalories = result.hits[0].fields.nf_calories;
				// Use jQuery to get the 'el' element in this View and set its HTML content
				// to the template string, assigning a value to the placeholders 'who' and 'cal.
				that.$el.html(that.template({who: itemName, cal: itemCalories}));
			}
		});
	}
});

// Initialize the View.
var appView = new AppView();