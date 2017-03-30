# Health Tracker Project

This is an optional project in the Front-End Nanodegree Program and consists of a single page app, developed using the JavaScript library Backbone.js, that tracks the user's calorie intake.
Typing food names into the search field will display a list of matching foods as provided by the health API. Users will be able to select an item from the list and the item will be added to the list of foods the user is tracking.
The total calorie count will also update to reflect the new daily total.

## Getting Started

To load the app, download a copy of the project to your local machine and open the file index.html with your browser. You should replace the API key with your own key, after getting it from [Nutritionix](https://www.nutritionix.com/). Alternatively, you can load the app online from this [GitHub Pages project repository](https://daniel-234.github.io/frontend-nanodegree-health-tracker/).

## Built With

* [BackboneJS](http://backbonejs.org/) - A framework to supply structure to JavaScript-heavy applications
* [JasmineJS](https://jasmine.github.io/index.html) - Behavior-driven development framework for testing JavaScript code
* [jQuery](http://jquery.com/) - A JavaScript library for simpler HTML manipulation and event handling
* [Nutritionix API](https://developer.nutritionix.com/docs/v1_1) - The third party API used to provide information to the user about calories

## Author

* **Daniele Erbì** - [daniel-234](https://github.com/daniel-234)

## Notes

A single page app that loads a food item taken from health API Nutritionix and displays the result on the page.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* As a first step I wanted to get accustomed with the Nutritionix API search, so I just made an AJAX call to it and displayed the first item that was returned from the result. The query I used can be found on the Nutritionix API v1.1 Documentation Quick Start guide:
* [Nutritionix API v1.1 Documentation - Quick Start](https://developer.nutritionix.com/docs/v1_1)
* I took some code from these two answers on Stackoverflow to make the AJAX request:
* [Stackoverflow - jQuery async and JSON data](http://stackoverflow.com/questions/5644451/jquery-async-and-json-data)
* [Stackoverflow - Append AJAX result to div](http://stackoverflow.com/questions/29432997/append-ajax-result-to-div)
* A new application always starts with a blank sheet. As I decided which steps to follow to build this one, I worked through examples and advices in the book 'Developing Backbone.js Applications' written by Addy Osmani. Much of the initial code is taken from that book and as I learned to develop my application following a Behavior Driven Development (BDD) approach I replicated some of his code:
* [Addy Osmani - Developing Backbone.js Applications](https://addyosmani.com/backbone-fundamentals/)