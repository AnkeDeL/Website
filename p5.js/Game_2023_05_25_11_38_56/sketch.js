let bullets = [];
let enemies = [];
score = 0;
let backgroundImg
let laserSound
let GameOverSound
let robot
let x = 0;
let y = 400;
let middelpuntX = 0;
let flicker = false; // initialize the flicker variable to false

function preload(){
  backgroundImg=loadImage("sky.jpg")
  laserSound=loadSound("laser.wav")
  GameOverSound=loadSound("GameOver.wav")
}

function flickerAnimation() {
  flicker = !flicker; // inverse the flicker value every time the function is called
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  robot = new Robot(x,height+900, middelpuntX,0.4);
  setInterval(flickerAnimation, 500); // call the flickerAnimation function every 500 ms
  //10 keer door loop
  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(0, width),
      y: random(-800, 0),
    };
    enemies.push(enemy);
  }
}

function draw() {
  background(backgroundImg);
  rectMode(CENTER);
  // tekenen robot
  robot.display();
  // kogels updaten en tekenen
  for (let bullet of bullets) {
    bullet.y -= 15;
    noStroke();
    circle(bullet.x, bullet.y, 10);
  }

  //vijand elke keer updaten en tekenen
  for (let enemy of enemies) {
    enemy.y += 1.5;
    noStroke();
    rect(enemy.x, enemy.y, 10);
    if (enemy.y > height) {
      background(250, 0, 0);
      noStroke();
      fill('black');
      textSize(24);
      text("Game Over!", width / 2, height / 2);
      GameOverSound.play()

      noLoop();
    }
  }

  //als vijand geraakt wordt verwijderen
  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet, 1));
        let newEnemy = {
          x: random(0, width),
          y: random(-800, 0),
        };
        enemies.push(newEnemy);
        score += 1;
      }
    }
  }
  noStroke();
  text(score, 15, 25);
  
  robot.move();
}

function mousePressed() {
  //elke keer een kogel aanmaken wanneer muis klikt
  let bullet = {
    x: mouseX,
    y: height - 50,
  };
  bullets.push(bullet);
  laserSound.play();
}

class Robot{
  constructor(x,y, middelpuntX, size) {
        this.x = x;
        this.y = y;
        this.middelpuntX = middelpuntX;
        this.size = size;
  }
  
  move(){
    this.middelpuntX = mouseX/this.size;
  }
  display() {
    ellipseMode(RADIUS);
    //vorm lichaam en hoofd
    strokeWeight(1*this.size);
    fill(173, 216, 230);
    stroke(70, 130, 180);
    arc(this.middelpuntX*this.size, (this.y-400)*this.size, 100*this.size, 135*this.size, PI, PI + PI);
    rect(this.middelpuntX*this.size, (this.y-300)*this.size, 200*this.size, 220*this.size, 5*this.size);

    //lampje hoofd
    line(this.middelpuntX*this.size, (this.y-535)*this.size, this.middelpuntX*this.size, (this.y-558)*this.size);
    if (flicker) {
      fill(255, 255, 143);
      ellipse(this.middelpuntX*this.size, (this.y-571)*this.size, 13*this.size, 13*this.size);
    } else {
      fill(0, 0, 0);
      ellipse(this.middelpuntX*this.size, (this.y-571)*this.size, 13*this.size, 13*this.size);
    }

    //ogen
    strokeWeight(3*this.size);
    fill(255);
    ellipse((this.middelpuntX - 45)*this.size, (this.y-470)*this.size, 15*this.size, 15*this.size);
    ellipse((this.middelpuntX + 45)*this.size, (this.y-470)*this.size, 15*this.size, 15*this.size);
    ellipse((this.middelpuntX - 45)*this.size, (this.y-470)*this.size, 2*this.size, 2*this.size);
    ellipse((this.middelpuntX + 45)*this.size, (this.y-470)*this.size, 2*this.size, 2*this.size);

    //mond
    strokeWeight(1*this.size);
    fill(204, 204, 255);
    rect(this.middelpuntX*this.size, (this.y-432)*this.size, 70*this.size, 20*this.size, 10*this.size);
    line((this.middelpuntX - 20)*this.size, (this.y-442)*this.size, (this.middelpuntX - 20)*this.size, (this.y-422)*this.size);
    line(this.middelpuntX*this.size, (this.y-442)*this.size, this.middelpuntX*this.size, (this.y-422)*this.size);
    line((this.middelpuntX + 20)*this.size, (this.y-442)*this.size, (this.middelpuntX + 20)*this.size, (this.y-422)*this.size);

    //benen
    fill(70, 130, 180);
    rect((this.middelpuntX-60)*this.size, (this.y-150)*this.size, 40*this.size, 80*this.size);
    rect((this.middelpuntX+60)*this.size, (this.y-150)*this.size, 40*this.size, 80*this.size);

    //riem
    fill(160, 188, 200);
    rect(this.middelpuntX*this.size, (this.y-250)*this.size, 200*this.size, 24*this.size);

    //armen
    strokeWeight(2*this.size);
    line((this.middelpuntX - 100)*this.size, (this.y-350)*this.size, (this.middelpuntX - 140)*this.size, (this.y-290)*this.size);
    line((this.middelpuntX + 100)*this.size, (this.y-350)*this.size, (this.middelpuntX + 140)*this.size, (this.y-290)*this.size);

    //lampjes op lichaam
    strokeWeight(2*this.size);
    ellipseMode(CENTER);
    fill(255);
    ellipse((this.middelpuntX+40)*this.size, (this.y-330)*this.size, 24*this.size, 24*this.size);
    ellipse((this.middelpuntX+70)*this.size, (this.y-330)*this.size, 24*this.size, 24*this.size);
    fill(50, 205, 50);
    ellipse((this.middelpuntX+70)*this.size, (this.y-330)*this.size, 16*this.size, 16*this.size);
    fill(210, 4, 45);
    ellipse((this.middelpuntX+40)*this.size, (this.y-330)*this.size, 16*this.size, 16*this.size);
  }
}
