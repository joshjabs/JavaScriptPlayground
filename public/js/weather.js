// Weather API Key
let apiKey = '8628814f3ffe26394e3549979ec7e64b';
let defaultCity='Denver';

function BuildURLFromCity( city ) {
  return `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
}

function BuildHTMLFromJSON( header, jsonObj ) {
  console.log( jsonObj );
  let html ='<h3>'+header+'</h3>';
  html += '<h2>'+jsonObj.main.temp+'&deg;F'+'</h2>';
  html += '<h3>'+jsonObj.weather[0].description+'</h3>';
  html += '<ul><li>'+jsonObj.name+', '+jsonObj.sys.country+'</li>';
  return html;
}

// set local storage and get weather data
function setClientLocation( newCity ) {
  console.log("set client city to " + newCity);
  localStorage.setItem('city', newCity);
  GetClientWeatherData();
}

// request json from weather api without using jQuery
// jQuerys AJAX request is really just a wrapper on XMLHttpRequest anyways

// let's also make it polymorphic with an empty string default value
// if no value is passed, we try to use local storage

// GetClientWeatherData() => will use local storage
// GetClientWeatherData('Chicago') => will return weather data for Chicago
function GetClientWeatherData( city='' ) {

  if (city=='') {
    try {
      console.log('using local storage:', localStorage.getItem('city'));
      city = localStorage.getItem('city');
    } catch (e){
      console.log("local storage not supported - using default");
      city = defaultCity;
    }
  }

  console.log('getting client weather data for ', city);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', BuildURLFromCity(city) );
  xhr.onload = function() {
      if (xhr.status === 200) {
        let html = BuildHTMLFromJSON( 'Client', JSON.parse( xhr.responseText ) );
        document.getElementById("weatherClient").innerHTML = html;
      }
      else {
          alert ('Request failed.  Returned status of ' + xhr.status );
      }
  };
  xhr.send();
}

function GetServerWeatherData() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'serverWeather');
  xhr.onload = function() {
      if (xhr.status === 200) {
        let html = BuildHTMLFromJSON( 'Server', JSON.parse( xhr.responseText ) );
        document.getElementById("weatherServer").innerHTML = html;
      }
      else {
          alert ('Request failed.  Returned status of ' + xhr.status );
      }
  };
  xhr.send();
}

// toggle showing dropdown content
function dropDown() {
    document.getElementById("clientLocationDropdown").classList.toggle("show");
}

// close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// try to get local storage for city or set default to Denver
try {
  let city = localStorage.getItem('city');
  if (!city) {
    console.log('no local storage - setting to default');
    localStorage.setItem('city', 'Denver');
  }
  console.log('local storage city:', city);
} catch(e) {
  console.log("local storage not supported");
}


// load initial weather data
GetClientWeatherData();
GetServerWeatherData();
