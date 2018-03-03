// Weather API Key
let apiKey = '8628814f3ffe26394e3549979ec7e64b';

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

// request json from weather api without using jQuery
// jQuerys AJAX request is really just a wrapper on XMLHttpRequest anyways
function GetClientWeatherData( city="Denver" ) {
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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDown() {
    document.getElementById("clientLocationDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
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

function setClientLocation( newCity ) {
  console.log("set client city to " + newCity);
  GetClientWeatherData(newCity);
}

GetClientWeatherData();
GetServerWeatherData();
