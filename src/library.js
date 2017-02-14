'use strict';

var inquirer = require('inquirer');
var unirest = require('unirest');

module.exports = {
	getCity: function(callback) {
		var questions = {
			name: 'city',
			type: 'input',
			message: 'Enter the city whose weather you want to look up:',
			validate: function( value ) {
				if (value.length) {
					return true;
				} else {
					return 'Please enter a city:';
				}
			}
		};

		inquirer.prompt(questions).then(callback);
	},

	printWeather: function(cityURL) {
		unirest.get(cityURL)
		.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
		.send({})
		.end(function (response) {
			console.log("It is " + response.body.data.day + " " + response.body.data.date + 
				" in " + response.body.data.location + "\n" + 
				"Temperature is " + response.body.data.temperature + "\n" +
				response.body.data.skytext + "\n" +
				"Humidity is " + response.body.data.humidity + "\n" +
				"Wind speed is " + response.body.data.wind + "\n");
		});
	}
}