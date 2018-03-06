# JavaScriptPlayground
A little playground for JS stuff

1) This project is written on top of Node JS which allows Javascript to run on the server side. You mentioned you wanted to see if developers could do common Javascript tasks without being dependent on a framework like jQuery. I am using some Javascript frameworks that mirror some of the technologies I'm familiar with (Laravel has a very similar logging and routing package) but I specifically opted to not use jQuery - things like AJAX requests and updating the DOM are written manually in JS.

2) The server side uses a logging package with multiple logging targets - both console and log file (logs/info.log). The logger is initialized in the main routes file (routes/index.js).

3) I'm using a weather API to grab weather data and display it to the user (public/js/weather.js). Specifically showing calls to the API on both the client and the server. I'm not actually using geo-location, just hard-coded strings. There are some examples of local storage and polymorphism in public/js/weather.js. I know the API requests might be a few lines cleaner making an AJAX request with the jQuery library but I wanted to show this can also be done with just XMLHttpRequests in JS. The JSON is then parsed and used to build HTML that is updated to the DOM.

4) The menu uses CSS for the transition effects and javascript to update and push elements into the DOM. I'm using this in a way that somewhat mirrors Meteor's single page apps but written manually in Javascript.

I understand there's probably a lot of other high-level Javascript things you might be looking for such as closures and more OOPness but I didn't incorporate much of that into this example.

If you're running unix, you can quickly serve this up on your local system but you will need npm and node. From inside the project folder:

sudo apt-get install npm
sudo apt-get install nodejs
npm start

should get the project up and running on http://localhost:3000

I have also hosted the project on a Git repo here: https://github.com/joshjabs/JavaScriptPlayground
This is being live updated to a Digital Ocean Droplet server here: http://162.243.167.102/
