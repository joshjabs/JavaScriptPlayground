function playWithCanvas() {
  console.log("started playing with canvas");
  var canvas = document.querySelector('canvas'),
      ctx = canvas.getContext('2d');


  canvas.width = window.innerWidth * .9;
  canvas.height = window.innerHeight * .9;

  canvas.setAttribute("align", "center");
  canvas.setAttribute("border-width", "3px");

  var pos, vel;
  pos = {
    x: 10,
    y: 10
  };
  vel = {
    x: 1,
    y: 1
  };

  var loop = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pos.x += vel.x;
    pos.y += vel.y;
    if (pos.x < 5 || pos.x > canvas.width - 5) {
      vel.x *= -1;
    }
    if (pos.y < 5 || pos.y > canvas.height - 5) {
      vel.y *= -1;
    }
    ctx.fillStyle='#fff';
    ctx.fillRect(pos.x - 5, pos.y - 5, 30, 30);
  };

  setInterval(loop, 1000 / 60);
  console.log("finished playing with canvas");
}
