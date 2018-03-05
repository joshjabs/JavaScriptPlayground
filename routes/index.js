// some imports
var express = require('express'); // express routing package
var router = express.Router();
const winston = require('winston'); // winston logging package
var path = require("path");
const request = require('request');


// create a logger with multiple transports/targets
// logs to the console as well as a log file @ different log levels
const logger = new (winston.Logger)({
  transports: [
    new winston.transports.File({ filename: 'logs/info.log', level: 'info' }),
    new (winston.transports.Console)({ colorize: true })
  ]
});

logger.level='debug';

// store all files in view folder.
router.use(express.static(__dirname + '/../views'));

// store all files in public folder
router.use(express.static(__dirname + '/public'));


// root route
router.get('/',function(req,res){
     res.sendFile('index.html');
});

// server weather request
let apiKey = '8628814f3ffe26394e3549979ec7e64b';
let city = 'Seattle';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
let serverWeather = null;
UpdateWeatherData();

function UpdateWeatherData() {
  request(url, function (err, response, body) {
    if(err){
      logger.error(err);
    } else {
      logger.debug('api response:', body);
    }
    serverWeatherData = body;
    logger.info('server updated weather information');

  });
}

// a get request will also trigger the server to update its own weather data
router.get('/serverWeather', function(req, res){
  UpdateWeatherData();
  res.send(serverWeatherData);
});

module.exports = router;
