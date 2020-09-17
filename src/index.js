function setup() {
  var canvas = document.getElementById("myCanvas");
  var slider1 = document.getElementById("slider1");
  var slider2 = document.getElementById("slider2");
  function draw() {
    var context = canvas.getContext("2d");
    canvas.width = canvas.width;
    // use the sliders to get various parameters
    var dx = slider1.value;
    var theta = (slider2.value * Math.PI) / 180;
    var brightness = parseFloat(slider3.value) / 100;
    console.log(brightness);

    function DrawOuterShape(color) {
      context.fillStyle = color;
      context.lineWidth = 4;

      //top left
      context.beginPath();
      context.moveTo(dx, 100);
      context.lineTo(200, 100);
      context.lineTo(300 - dx, 200);
      context.lineTo(100, 200);
      context.closePath();
      //context.stroke();
      context.fill();

      //bottom left
      context.beginPath();
      context.moveTo(100, 200);
      context.lineTo(300 - dx, 200);
      context.lineTo(200, 300);
      context.lineTo(dx, 300);
      context.closePath();
      //context.stroke();
      context.fill();

      //top right
      context.beginPath();
      context.moveTo(200, 100);
      context.lineTo(400 - dx, 100);
      context.lineTo(300, 200);
      context.lineTo(100 + parseInt(dx), 200);
      context.closePath();
      //context.stroke();
      context.fill();

      //bottom right
      context.beginPath();
      context.moveTo(100 + parseInt(dx), 200);
      context.lineTo(300, 200);
      context.lineTo(400 - dx, 300);
      context.lineTo(200, 300);
      context.closePath();
      //context.stroke();
      context.fill();
    }

    function DrawCenterShape(color) {
      context.fillStyle = color;
      context.beginPath();
      context.moveTo(200, 100);
      context.lineTo(100 + parseInt(dx), 200);
      context.lineTo(200, 300);
      context.lineTo(300 - dx, 200);
      context.closePath();
      //context.stroke();
      context.fill();
    }

    function DrawCircle() {
      var gradient = context.createRadialGradient(500, 200, 0, 500, 200, 100);
      gradient.addColorStop(0, "yellow");
      gradient.addColorStop(brightness, "orange");
      gradient.addColorStop(1, "black");
      context.fillStyle = gradient;

      context.arc(500, 200, 100, 0, 2 * Math.PI);
      context.fill();
    }

    context.save();
    context.translate(200, 200); // translate to center of shape
    context.rotate(theta);
    context.translate(-200, -200); //translate back to (0,0)
    DrawCenterShape("red");
    DrawOuterShape("black");
    context.restore();
    DrawCircle();
  }
  slider1.addEventListener("input", draw);
  slider2.addEventListener("input", draw);
  slider3.addEventListener("input", draw);
  draw();
}
window.onload = setup;
