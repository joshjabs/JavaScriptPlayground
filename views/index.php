<html>

<head>
<title>JS Laboratory</title>
<script src="js/jquery.js"></script>

<script src="js/menu.js"></script>
<link rel="stylesheet" type="text/css" href="stylesheets/menu.css">

<script src="js/weather.js"></script>
<link rel="stylesheet" type="text/css" href="stylesheets/weather.css">

</head>

<?php
    header('X-Frame-Options: GOFORIT');
?>

<div id="sideNav" class="sidenav">
  <a class="closebtn" onclick="closeNav()">&times;</a>
  <a href="/">Reload</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>

  <div class="dropdown">
    <button onclick="dropDown()" class="dropbtn">Select Client Location</button>
    <div id="clientLocationDropdown" class="dropdown-content">
      <a href="javascript:setClientLocation('Denver')">Denver</a>
      <a href="javascript:setClientLocation('Portland')">Portland</a>
      <a href="javascript:setClientLocation('London')">London</a>
    </div>
  </div>

</div>

<span style="font-size:30px;cursor:pointer" onclick="openNav()" class="burger">&#9776;</span>
<div id="weatherClient">Client Weather Data</div>
<div id="weatherServer">Server Weather Data</div>


</html>
