function setup() {
  createCanvas(windowWidth,windowHeight);
}


function draw() {
  background(220);
  strokeWeight(1);
  fill(173,216,230);
  stroke(70,130,180);
  arc(200,130, 100, 135, PI, PI+PI);
  rect(150,120,100,110,5);
  
  //lampje hoofd
  line(200,40,200,63);
  fill(255, 255, 143);
  ellipse(200,40,13,13);
  
  //ogen
  strokeWeight(2);
  fill(255);
  ellipse (180,90,15,15);
  ellipse(220,90,15,15);
  ellipse(180,90,2,2);
  ellipse(220,90,2,2);
  
  //mond
  strokeWeight(1);
  fill(204, 204, 255)
  rect(175,100,50,10,10);
  line(200,100,200,110);
  line(210,100,210,110);
  line(190,100,190,110);
  
  //benen
  fill(70,130,180);
  rect(165,230,20,40);
  rect(215,230,20,40);
  
  //riem
  fill(160,188,200);
  rect(150,190,100,12);
  
  //armen
  strokeWeight(2);
  line(150,150,110,180);
  line(250,150,290,180);
  
  //lampjes op lichaam
  strokeWeight(1);
  ellipseMode(CENTER);
  fill(255);
  ellipse(230,160,12,12);
  ellipse(215,160,12,12);
  fill(50,205,50);
  ellipse(230,160,8,8);
  fill(210, 4, 45);
  ellipse(215,160,8,8);
}
