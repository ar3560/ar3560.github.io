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

if (mouseX > 10 && mouseX < 40 && mouseY < 60 && mouseY > 370)    
      {fill(0);
      textSize(24);
      text('Staten Island - 39.8k', 80, 410);}

else if (mouseX > 10 && mouseX < 116 && mouseY < 60 && mouseY > 280)    
      {fill(0);
      textSize(24);
      text('Bronx - 116k', 156, 320);}

else if (mouseX > 10 && mouseX < 218 && mouseY < 60 && mouseY > 190)    
      {fill(0);
      textSize(24);
      text('Manhattan - 218k', 258, 230);}

else if (mouseX > 10 && mouseX < 227 && mouseY < 60 && mouseY > 100)    
      {fill(0);
      textSize(24);
      text('Queens - 227k', 267, 140);}

else if (mouseX > 10 && mouseX < 267 && mouseY < 60 && mouseY > 10)    
      {fill(0);
      textSize(24);
      text('Brooklyn - 267k', 307, 50);}


  textSize(32);
  fill(0);
  text('Number of Collisions per Borough: July 2012 - Feb 2018', 10, 500);
}

