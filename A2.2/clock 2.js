function setup(){
  createCanvas(1000,500);
}

function draw() {
  background('white');

  fill(255, 0, 0);
  ellipse(map(hour(), 0, 24, 0, width), 50, 10, 10);

  fill(0, 255, 0);
  ellipse(map(minute(), 0, 60, 0, width), 100, 10, 10);

  fill(0, 0, 255);
  ellipse(map(second(), 0, 60, 0, width), 150, 10, 10);
 }