function setup() {
  createCanvas(640, 480);
}

function draw() {
  background('blue');
  fill(255, 255, 255);
  rect(10, 10, 700, 60);
  fill(255, 0, 0);
  ellipse(70, 300, 200, 20);
  textSize(48);
  fill(0, 255, 0);
  text('Ashna says - Hello, World', 10, 50);
}