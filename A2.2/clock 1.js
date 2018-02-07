function setup(){
  createCanvas(500,500);
}
function draw() {
  background('blue');

   fill(255, 255, 255);
   ellipse(map(second(), 0, 60, 0, width), 50, 10, 10);

   fill(0, 0, 0);
   ellipse(250, 300, map(minute(), 0, 60, 0, 400), map(hour(), 0, 24, 0, 400));
}