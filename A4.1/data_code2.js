function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(255);
  noStroke()
  //Brooklyn rect
  fill(50, 0, 200);
  rect(10, 10, 267, 60);
  //Queens rect
  fill(50, 50, 255);
  rect(10, 100, 227, 60);
  //Manhattan rect
  fill(100, 50, 255);
  rect(10, 190, 218, 60);
  //Bronx rect
  fill(150, 100, 255);
  rect(10, 280, 116, 60);
  //Staten Island rect
  fill(200, 50, 255);
  rect(10, 370, 40, 60);
  textSize(24);
  fill(0);
  text('Brooklyn - 267k', 307, 50);
  text('Queens - 227k', 267, 140);
  text('Manhattan - 218k', 258, 230);
  text('Bronx - 116k', 156, 320);
  text('Staten Island - 39.8k', 80, 410);
  textSize(32);
  text('Number of Collisions per Borough: July 2012 - Feb 2018', 10, 500);
}