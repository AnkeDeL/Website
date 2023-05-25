let x = 0;
let y = 500;
let middelpuntX = 0;
let backgroundImg;
let flicker = false; // initialize the flicker variable to false

function preload() {
  backgroundImg = loadImage("sky.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setInterval(flickerAnimation, 500); // call the flickerAnimation function every 500 ms
}

function draw() {
  background(backgroundImg);
  ellipseMode(RADIUS);

  translate(mouseX, y); // alles bewegen volgens mouseX

  if (mouseIsPressed) {
    scale(0.45);
  } else {
    scale(0.4); // 60% size when mouse is pressed
  }

  //vorm lichaam en hoofd
  strokeWeight(1);
  fill(173, 216, 230);
  stroke(70, 130, 180);
  arc(0, 0, 100, 135, PI, PI + PI);
  rect(middelpuntX - 100, 0, 200, 220, 5);

  //lampje hoofd
  line(middelpuntX, -135, middelpuntX, -158);
  if (flicker) {
    fill(255, 255, 143);
    ellipse(middelpuntX, -171, 13, 13);
  } else {
    fill(0, 0, 0);
    ellipse(middelpuntX, -171, 13, 13);
  }

  //ogen
  strokeWeight(3);
  fill(255);
  ellipse(middelpuntX - 45, -60, 15, 15);
  ellipse(middelpuntX + 45, -60, 15, 15);
  ellipse(middelpuntX - 45, -60, 2, 2);
  ellipse(middelpuntX + 45, -60, 2, 2);

  //mond
  strokeWeight(1);
  fill(204, 204, 255);
  rect(middelpuntX - 35, -32, 70, 20, 10);
  line(middelpuntX - 20, -32, middelpuntX - 20, -13);
  line(middelpuntX, -32, middelpuntX, -13);
  line(middelpuntX + 20, -32, middelpuntX + 20, -13);

  //benen
  fill(70, 130, 180);
  rect(middelpuntX - 80, 220, 40, 80);
  rect(middelpuntX + 40, 220, 40, 80);

  //riem
  fill(160, 188, 200);
  rect(middelpuntX - 100, 150, 200, 24);

  //armen
  strokeWeight(2);
  line(middelpuntX - 100, 50, middelpuntX - 140, 110);
  line(middelpuntX + 100, 50, middelpuntX + 140, 110);

  //lampjes op lichaam
  strokeWeight(2);
  ellipseMode(CENTER);
  fill(255);
  ellipse(40, 70, 24, 24);
  ellipse(70, 70, 24, 24);
  fill(50, 205, 50);
  ellipse(70, 70, 16, 16);
  fill(210, 4, 45);
  ellipse(40, 70, 16, 16);
}

function flickerAnimation() {
  flicker = !flicker; // inverse the flicker value every time the function is called
}
