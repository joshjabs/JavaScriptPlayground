function openNav() {
    document.getElementById("sideNav").style.width = "500px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

function viewWeather() {
  document.getElementById("mainView").innerHTML = '<div id="weatherClient">Client Weather Data</div><div id="weatherServer">Server Weather Data</div>';
  GetClientWeatherData();
  GetServerWeatherData();
}

function viewCanvas() {
  document.getElementById("mainView").innerHTML = '<canvas id="canvas"/>';
  playWithCanvas();
}
