/* healthTracker.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against our application.
 */

$(function() {
	/* The first test helps ensure that when creating instances without
	 * a value set for any specific attribute, a default one (e.g. an empty
	 * screen) is used instead.
	 * This ensures that the application will interact with our models
	 * without any unexpected behavior.
	 */
	 describe('New food items tests', function() {
	 	it('can be created with default attributes for their values', function() {
	 		var foodItem = new FoodItem();
	 		expect(foodItem.get('brandName')).toBe('');
	 		expect(foodItem.get('itemName')).toBe('');
	 		expect(foodItem.get('itemCalories')).toBe('');
	 		expect(foodItem.get('itemQuantity')).toBe(1);
	 	});

	 	it('can be created with overridden attributes for their values', function() {
	 		var foodItem = new FoodItem();
	 		foodItem.set({
	 			itemQuantity: 5
	 		});
	 		expect(foodItem.get('brandName')).toBe('');
	 		expect(foodItem.get('itemQuantity')).toBe(5);
	 	});
	 });
});