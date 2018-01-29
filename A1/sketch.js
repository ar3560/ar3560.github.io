function setup() {
  createCanvas(640, 480);
}

function draw() {
  background('blue');
  fill(255, 255, 255);

  // Map the function second() to values from 0~400
  rect(20, 20, 60, map(second(), 0, 60, 0, 400));

  push(); // Start a new drawing state
  scale(12, 5); // Use function hour() directly to apply scale
  ellipse(56, 46, 55, 55);
  pop(); // Restore original state (scale, specifically)

  var h = hour();
  fill(250, 0, 0);
  text('Hour:\n' + h, 100, 50);
  var h = map(h, 0, 100, 0, width);
  ellipse(h, 25, 25, 25);

  var m = minute();
  text('Minute:\n' + m, 100, 150)

  // First change the mode to degrees (default is radians)
  angleMode(DEGREES);
  // Map the function minute() to values from 0~360
  rotate(map(minute(), 0, 60, 0, 360));
  textSize(32);
  fill(0, 103, 204);
  text('Ashna says Hello World', 100, 60);
}
  