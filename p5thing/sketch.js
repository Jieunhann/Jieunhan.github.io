function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#fae');
  colorMode(HSB);
}

let x = 20
let y = 50
let a = 10
let b = 20
let pink = 0
let myColor = 10

function draw() {

  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
    a = mouseX
    b = mouseY

  strokeWeight (1);
  let c;
  c = color (mouseX, myColor, mouseY);

   x = x+1
  if(x > 100){
  x = 90
  y = 210
  }

   y = y+1
   if (y > 220){
   y=0
   x=100
   }

   black = blue+1
  if (black > 100){
    white = 130
  }

   white = black+1
  if (white > 100){
    white = 0
  }

   b = b + 1
  if (a > 250){
    a = 0
  }

  fill(mouseX,mouseY,mouseX);
   textSize(100)
 textAlign (CENTER);
 textFont('Helvetica')
 text('JIEUN',700/2,700-490)

}


function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  ellipse(x, y, speed, speed);
}
