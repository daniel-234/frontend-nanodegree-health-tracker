# Health Tracker Project

This is an optional project in the Front-End Nanodegree Program and consists of a single page app, developed using the JavaScript library Backbone.js, that tracks the user's calorie intake.
Typing food names into the search field will display a list of matching foods as provided by the health API. Users will be able to select an item from the list and the item will be added to the list of foods the user is tracking.
The total calorie count will also update to reflect the new daily total.

## Getting Started

To load the app, download a copy of the project to your local machine and open the file index.html with your browser. You should replace the API key with your own key, after getting it from [Nutritionix](https://www.nutritionix.com/). Alternatively, you can load the app online from this [GitHub Pages project repository](https://daniel-234.github.io/frontend-nanodegree-health-tracker/).

## Built With

* [UnderscoreJS](http://underscorejs.org/) - A JavaScript library that provides a set of useful functional programming helpers
* [BackboneJS](http://backbonejs.org/) - A framework to supply structure to JavaScript-heavy applications
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
* A very helpful resource on AJAX requests:
* [Stackoverflow - How do I return the response from an asynchronous call?](http://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call)
* To develop the tests for the View and to adjust the first testss I wrote, I took some code from a course on Backbone developed by [Girl Develop It SF](https://www.meetup.com/Girl-Develop-It-San-Francisco/) and tried to adapt it to my needs:
* [Backbone 101](http://www.teaching-materials.org/backbone/#/)
* To refactor the app, I started from a simple `Hello, world!` page writing piece by piece the code taken from this post:
* [Adrian Mejia - Backbone.JS for Absolute Beginners - Getting Started (Part1: Intro)](http://adrianmejia.com/blog/2012/09/11/backbone-dot-js-for-absolute-beginners-getting-started/)
* And then revisited the Backbone JS modules in this second article:
* [Adrian Mejia - Backbone JS for Absolute Beginners - Getting Started (Patt 2: Models, Collections and Views)](http://adrianmejia.com/blog/2012/09/13/backbone-js-for-absolute-beginners-getting-started-part-2/)
* Learn how to render something in a Backbone JS View after getting its value from an asynchronous AJAX request:
* [Stackoverflow - AJAX request in Backbone View render function](http://stackoverflow.com/questions/17113263/ajax-request-in-backbone-view-render-function)
* Some articles helped me solve the problem of moving the AJAX call from the View to the Model and separate concerns according to the MV* pattern:
* [Stackoverflow - Backbone set Model inside AJAX request](http://stackoverflow.com/questions/17485915/backbone-set-model-inside-ajax-request)
* [Stackoverflow - Reload Backbone View after AJAX request, how?](http://stackoverflow.com/questions/29437140/reload-backbone-view-after-ajax-request-how)
* [BarDev - Re-Learning BackboneJS - Binding Models to Views](https://www.bardev.com/2012/12/03/re-learning-backbone-js-binding-views-to-models/)
* Improving UnderscoreJS templates in Backbone JS:
* [Coderbeerstartups - How to improve templates in BackboneJS - Learning BackboneJS](http://codebeerstartups.com/2012/12/how-to-improve-templates-in-backbone-js-learning-backbone-js/)
* [Stackoverflow - How to use Underscore.JS as a template engine?](http://stackoverflow.com/questions/4778881/how-to-use-underscore-js-as-a-template-engine)
* Populate Collection from external JSON:
* [Stackoverflow - Backbone populate Collection from external JSON](http://stackoverflow.com/questions/20591083/backbone-populate-collection-from-external-json)
* [Michielvaneerd - Backbone and JSONP](https://gist.github.com/michielvaneerd/5989839)
* [Stackoverflow - BackboneJS fetch a Collection of models and populate them](http://stackoverflow.com/questions/17604374/backbone-js-fetch-a-collection-of-models-and-render-them)
* These articles explain well the new syntax rules introduced when the code was refactored and separated into different files, following the code organization of the todoMVC app developed by Addy Osmani:
* [Stackoverflow - IIFE construct in JavaScript](http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript)
* [Stackoverflow - What does `use strict` do in JavaScript and what is the reasoning behind it?](http://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it)
* [Stackoverflow - What does (function $ jQuery mean)?](http://stackoverflow.com/questions/2937227/what-does-function-jquery-mean)
* The meaning of an alias to `this` in JavaScript:
* [Stackoverflow - What does `var that = this` mean in JavaScript?](http://stackoverflow.com/questions/4886632/what-does-var-that-this-mean-in-javascript)
* Adding new Models to a Backbone Collection:
* [Stackoverflow - Adding new Models to a Backbone Collection](http://stackoverflow.com/questions/18298877/adding-new-models-to-a-backbone-collection-not-replace)
* To proceed in the app development I needed to move from a fixed URL to a string that could be made up taking as input a query inserted by the user. I relied on some answers on Stackoverflow to adapt my code:
* [Stackoverflow - How can I pass properties into a Backbone Model which I do not wish to be treated as attributes?](http://stackoverflow.com/questions/7084651/how-can-i-pass-properties-into-a-backbone-model-which-i-do-not-wish-to-be-treate)
* [Stackoverflow - Backbone passing parameters to a Backbone URL](http://stackoverflow.com/questions/20004615/backbone-passing-parameters-to-a-model-url)
* [Stackoverflow - What is `options` in BackboneJS?](http://stackoverflow.com/questions/8997714/what-is-options-in-backbone-js)
* How to add an array of models to a collection:
* [Stackoverflow - Backbone event: add array of models to collection](http://stackoverflow.com/questions/21879345/backbone-event-add-array-of-models-to-collection)