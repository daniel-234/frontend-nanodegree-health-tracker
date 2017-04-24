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

* I took some code from these two answers on Stackoverflow to make the AJAX request:
* [Stackoverflow - jQuery async and JSON data](http://stackoverflow.com/questions/5644451/jquery-async-and-json-data)
* [Stackoverflow - Append AJAX result to div](http://stackoverflow.com/questions/29432997/append-ajax-result-to-div)
* To refactor the app, I started from a simple `Hello, world!` page writing piece by piece the code taken from this post:
* [Adrian Mejia - Backbone.JS for Absolute Beginners - Getting Started (Part1: Intro)](http://adrianmejia.com/blog/2012/09/11/backbone-dot-js-for-absolute-beginners-getting-started/)
* And then revisited the Backbone JS modules in this second article:
* [Adrian Mejia - Backbone JS for Absolute Beginners - Getting Started (Patt 2: Models, Collections and Views)](http://adrianmejia.com/blog/2012/09/13/backbone-js-for-absolute-beginners-getting-started-part-2/)
* A very helpful resource on AJAX requests:
* [Stackoverflow - How do I return the response from an asynchronous call?](http://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call)
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
* How to make a POST request in JSON:
* [Stackoverflow - Backbone Post JSON instead of Get](http://stackoverflow.com/questions/21564806/backbone-post-json-instead-of-get)
* [Stackoverflow - jQuery AJAX How to send JSON instead of QueryString](http://stackoverflow.com/questions/12693947/jquery-ajax-how-to-send-json-instead-of-querystring)
* Error in BackboneJS: a URL property or function must be specified in BackboneJS
* [Stackoverflow - A URL property or function must be specified - Error in Backbone](http://stackoverflow.com/questions/6030677/a-url-property-or-function-must-be-specified-error-in-backbone-js)
* The most useful resources I used to learn about fetching from a server and parsing a response into a collection of models in Backbone:
* [Stackoverflow - BackboneJS fetch a collection of models and render them](http://stackoverflow.com/questions/17604374/backbone-js-fetch-a-collection-of-models-and-render-them)
* [Stackoverflow - Backbone collection length always set to one with nested views](http://stackoverflow.com/questions/18007118/backbone-collection-length-always-set-to-one-with-nested-views)
* [Stackoverflow - Why is this Backbone model's attribute undefined when I try to get it?](http://stackoverflow.com/questions/22100774/why-is-this-backbone-models-attribute-undefined-when-i-try-to-get-it)
* [Stackoverflow - Handling response from BackboneJS collection using fetch](http://stackoverflow.com/questions/12992460/handeling-response-from-backbone-js-collection-using-fetch)
* [Stackoverflow - BackboneJS fecth not actually setting attributes](http://stackoverflow.com/questions/9584870/backbone-js-fetch-not-actually-setting-attributes)
* [Stackoverflow - Backbone model fetch returns data but does not update model](http://stackoverflow.com/questions/14025415/backbone-model-fetch-returns-data-but-does-not-update-model)
* [Stackoverflow - How to parse a Backbone collection in a template view](http://stackoverflow.com/questions/14573900/how-to-parse-a-backbone-collection-in-a-template-view)
* [Miguel Mota - Getting started with BackboneJS](https://miguelmota.com/blog/getting-started-with-backbonejs/)
* Bootstrap Responsive Tables:
* [Stakoverflow - How to set the size of a column in a Bootstrap responsive table](http://stackoverflow.com/questions/25385289/how-to-set-the-size-of-a-column-in-a-bootstrap-responsive-table)
* [Stackoverflow - Render HTML table with underscore template engine using a Backbone complex model](http://stackoverflow.com/questions/10257401/render-html-table-with-underscore-template-engine-using-a-backbone-complex-model)