function playWithCanvas() {
  console.log("setting up canvas");
  var canvas = document.querySelector('canvas'),
      ctx = canvas.getContext('2d');

// set canvas dimensions to fill window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.setAttribute("align", "center");
  canvas.setAttribute("border-width", "3px");

  var pos, vel;

  // starting position
  pos = {
    x: canvas.width/2,
    y: canvas.height/2
  };

  // velocity
  vel = {
    x: 10,
    y: 10
  };

  // move a rectangle aroound
  var loop = function () {
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // change coordinated
    pos.x += vel.x;
    pos.y += vel.y;
    //manage walls
    if (pos.x < 5 || pos.x > canvas.width - 5) {
      vel.x *= -1;
    }
    if (pos.y < 5 || pos.y > canvas.height - 5) {
      vel.y *= -1;
    }
    //color
    ctx.fillStyle='#fff';
    //fill rectangle
    ctx.fillRect(pos.x - 5, pos.y - 5, 30, 30);
  };

  // call loop at regular intervals
  setInterval(loop, 1000 / 60);
  console.log("finished configuring canvas");
}
