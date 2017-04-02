/* healthTracker.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against our application.
 */

/* The first test helps ensure that when creating instances without
 * a value set for any specific attribute, a default one (e.g. an empty
 * screen) is used instead.
 * This ensures that the application will interact with our models
 * without any unexpected behavior.
 *
 * Code taken from Addy Osmani's book 'Developing Backbone.js Applications' and
 * adapted for this application. The actual section of the book where this code
 * resides is [Unit Testing, Jasmine - Suites, Specs and Spies](
 * https://addyosmani.com/backbone-fundamentals/#suites-specs-spies).
 */
describe('New food items', function() {
	// Place the instance of FoodItem in the same Functional Scope
	var item1;

	beforeEach(function() {
		item1 = new FoodItem();
	});

	it('should be correctly defined', function() {
		expect(item1).toBeDefined();
	});

	it('should be an instance of FoodItem', function() {
		expect(item1 instanceof FoodItem).toBe(true);
	});

 	it('can be created with default attributes for their values', function() {
 		expect(item1.get('brandName')).toBe('');
 		expect(item1.get('itemName')).toBe('');
 		expect(item1.get('itemCalories')).toBe('');
 		expect(item1.get('itemQuantity')).toBe(1);
 	});

 	it('can be created with overridden attributes for their values', function() {
 		item1.set({
 			itemQuantity: 5
 		});
 		expect(item1.get('brandName')).toBe('');
 		expect(item1.get('itemQuantity')).toBe(5);
 	});
});

/* The second test helps mock an AJAX request using spies and test both the code
 * that initiates the AJAX request and the code executed upon its completion.
 *
 * Code taken from Addy Osmani's book 'Developing Backbone.js Applications' and
 * adapted for this application. The actual section of the book where this code
 * resides is [Unit Testing, Jasmine - Suites, Specs and Spies](
 * https://addyosmani.com/backbone-fundamentals/#suites-specs-spies).
 */
describe('An AJAX request', function() {
	// Fake an AJAX request and verify that the request was both calling the
	// correct URL and executed a callback where one was provided
	it('should execute a callback on success', function() {
		// Call a passed function when a spy has been called
 		spyOn($, 'ajax').and.callFake(function(options) {
 			options.success();
 		});;

 		// Create a new spy
 		var callback = jasmine.createSpy();
 		// Create a query
 		var queryUrl = '/fooditems/';

 		// Execute the spy callback if the request is successful
 		getFoodItem(queryUrl, callback);

 		// Verify that the url of the most recent call matches
 		// the expected FoodItem
 		expect($.ajax.calls.mostRecent().args[0]['url']).toEqual(queryUrl);

 		expect(callback).toHaveBeenCalled();
 	});

 	function getFoodItem(queryUrl, callback) {
		$.ajax({
			url: queryUrl,
			type: 'get',
			dataType: 'json',
			success: callback
		});
	}
});

/*
 * Test a Backbone collection of foodItems Models.
 *
 * Code taken from Addy Osmani's book 'Developing Backbone.js Applications' and
 * adapted for this application. The actual section of the book where this code
 * resides is [Unit Testing, Jasmine - Suites, Specs and Spies](
 * https://addyosmani.com/backbone-fundamentals/#suites-specs-spies).
 */
describe('A FoodItems Collection', function() {
	var aFoodList;

	beforeEach(function() {
		aFoodList = new FoodItemList();
	});

	it('has no items when instantiated', function() {
		expect(aFoodList.length).toBe(0);
	});

	it('can add Model instances', function() {
		aFoodList.add({
			brandName: 'Coca Cola'
		});

		expect(aFoodList.length).toBe(1);
		expect(aFoodList.models[0].get('brandName')).toBe('Coca Cola');
		expect(aFoodList.models[0].get('itemName')).toBe('');
		expect(aFoodList.models[0].get('itemCalories')).toBe('');
		expect(aFoodList.models[0].get('itemQuantity')).toBe(1);
	});
});
