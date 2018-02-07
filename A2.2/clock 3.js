function setup(){
  createCanvas(460,500);
}

function draw() {
  background(100);

  fill(255, 0, 0);
  rect(50, 20, 60, map(second(), 0, 60, 0, 400));

  fill(0, 255, 0);
  rect(200, 20, 60, map(minute(), 0, 60, 0, 400));

  fill(0, 0, 255);
  rect(350, 20, 60, map(hour(), 0, 24, 0, 400));
}