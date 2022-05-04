
function randomColor() {
    var color = '#';
    var colorCode = ['ffaf40','2A9BFB','ff5967','7870cc','33ccbf']; // colors
    var className = document.getElementsByClassName("change"); // class name to random color
    var i;
    color += colorCode[Math.floor(Math.random() * colorCode.length)];
  for (var i = 0; i < className.length; i ++) {
      className[i].style.backgroundColor = color; }
}









var anythingIWant = document.body;
var isDark = false;
// console.log(anythingIWant);

// var random = Math.random();
// console.log(random);
// // if(random > 0.5) {
// //   console.log ("it's greater than 0.5!!")
// // } else {
// //   console.log(":(");
// // }
// console.log(random > 0.5);



// if i click the button
var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);

// background color changes
// text color changes
function changeToDarkMode(){
  // console.log("lalalala");
  // anythingIWant.style.background = "black";
  // anythingIWant.style.color = "white";
  // isDark = true;

  if(isDark === true) {
    darkModeButton.textContent = "🌞";
  anythingIWant.style.background = "linear-gradient(150deg, #8cc63f 20%, #c8d678 38%, #ffb394 85%)";
  anythingIWant.style.color = "white";
    isDark = false;
    console.log("dark mode is off");
  } else if(isDark === false) {
    darkModeButton.textContent = "🌔";
      anythingIWant.style.background = "linear-gradient(150deg, #000000 20%, #340094 38%,  #830094 85%)";
  anythingIWant.style.color = "white";
      isDark = true;
    console.log("dark mode is on");
  }
}
function func() {
    document.getElementById('accountDetails').value  = 'server';
}



// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("myCanvas");
  colorMode(HSB);
}



let x = 20
let y = 20
let a = 80
let b = 20
let pink = 50
let myColor = 10
let blue = 40;
let white = 70
let black = 15
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

  //  black = blue+1
  // if (black > 100){
  //   white = 130
  // }

   white = black+1
  if (white > 100){
    white = 0
  }

   b = b + 1
  if (a > 250){
    a = 0
  }

  fill(mouseX,mouseY,mouseX);

}


function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  ellipse(x, y, speed, speed);
}
