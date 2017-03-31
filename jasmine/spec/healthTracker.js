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
describe('New food items tests', function() {
	// Place the instance of FoodItem in the same Functional Scope
	var foodItem = new FoodItem();

	it('should be correctly defined', function() {
		expect(foodItem).toBeDefined();
	});

 	it('can be created with default attributes for their values', function() {
 		expect(foodItem.get('brandName')).toBe('');
 		expect(foodItem.get('itemName')).toBe('');
 		expect(foodItem.get('itemCalories')).toBe('');
 		expect(foodItem.get('itemQuantity')).toBe(1);
 	});

 	it('can be created with overridden attributes for their values', function() {
 		foodItem.set({
 			itemQuantity: 5
 		});
 		expect(foodItem.get('brandName')).toBe('');
 		expect(foodItem.get('itemQuantity')).toBe(5);
 	});
});

/* The second test helps test an AJAX request and verify that it was both calling
 * the correct URL and executed a callback.
 *
 * Code taken from Addy Osmani's book 'Developing Backbone.js Applications' and
 * adapted for this application. The actual section of the book where this code
 * resides is [Unit Testing, Jasmine - Suites, Specs and Spies](
 * https://addyosmani.com/backbone-fundamentals/#suites-specs-spies).
 */
describe('An AJAX request', function() {
	// Fake an AJAX request and verify that the request was both calling the
	// correct URL and executed a callback where one was provided
	it('the callback should be executed on success', function() {
		// Call a passed function when a spy has been called
 		spyOn($, 'ajax').and.callFake(function(options) {
 			options.success();
 		});;

 		// Create a new spy
 		var callback = jasmine.createSpy();

 		// Execute the spy callback if the request is successful
 		getFoodItem(callback);

 		// Verify that the url of the most recent call matches
 		// the expected FoodItem
 		expect($.ajax.calls.mostRecent().args[0]['url']).toEqual('/fooditems/');

 		expect(callback).toHaveBeenCalled();
 	});
});

function getFoodItem(callback) {
	var queryUrl = '/fooditems/';
	$.ajax({
		url: queryUrl,
		type: 'get',
		dataType: 'json',
		success: callback
	});
}