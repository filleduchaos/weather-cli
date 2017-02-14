/*This app retrieves and displays the weather of a given city*/
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');

var lib = require('./src/library.js');

clear();
console.log(
  chalk.blue(
    figlet.textSync('Weather', { horizontalLayout: 'full' })
  )
);

lib.getCity(function(){
  console.log("Getting weather...");
  cityURL = "http://weathers.co/api.php?city=" + arguments[0].city;
  lib.printWeather(cityURL);
});