function setup(){
  createCanvas(500,500);
}
function draw() {
  background('blue');

  fill(255, 255, 255);

    rect(20, 20, map(second(), 0, 60, 0, width), 60);

    ellipse(250, 300, map(minute(), 0, 60, 0, width), map(hour(), 0, 24, 0, height));