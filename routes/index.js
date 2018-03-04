var express = require('express');
var router = express.Router();
const winston = require('winston');
var path    = require("path");
const request = require('request');

const logger = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({ colorize: true })
  ]
});

logger.level='debug';

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//   winston.log('info', 'get root');
// });

// store all files in view folder.
router.use(express.static(__dirname + '/../views'));

// store all files in public folder
router.use(express.static(__dirname + '/public'));


router.get('/',function(req,res){
     res.sendFile('index.html');
});

// server weather request
let apiKey = '8628814f3ffe26394e3549979ec7e64b';
let city = 'Portland';
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

router.get('/serverWeather', function(req, res){
  UpdateWeatherData();
  res.send(serverWeatherData);
});

module.exports = router;
