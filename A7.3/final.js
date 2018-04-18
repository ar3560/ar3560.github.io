var sel;

function preload(){
  table = loadTable('NYC_Food_Scrap_Drop-off_Sites.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 440);
  loadData();

background(100);

sel = createSelect();
sel.position(600,60);
sel.option('Monday');
sel.option('Tuesday');
sel.option('Wednesday');
sel.option('Thursday');
sel.option('Friday');
sel.option('Saturday');
sel.option('Sunday');
sel.changed(mySelectEvent);

sel = createSelect();
sel.position(600,90);
sel.option('6AM');
sel.option('7AM');
sel.option('8AM');
sel.option('9AM');
sel.option('10AM');
sel.option('11AM');
sel.option('12PM');
sel.option('1PM');
sel.option('2PM');
sel.option('3PM');
sel.option('4PM');
sel.option('5PM');
sel.option('6PM');
sel.option('7PM');
sel.option('8PM');
sel.option('9PM');
sel.option('10PM');
sel.changed(mySelectEvent);

sel = createSelect();
sel.position(600,120);
sel.option('Manhattan');
sel.option('Brooklyn');
sel.option('Queens');
sel.option('Bronx');
sel.option('StatenIsland');
sel.changed(mySelectEvent);

textSize(12);
  fill(255);
  text('6 AM', 10, 60);
  text('7 AM', 10, 80);
  text('8 AM', 10, 100);
  text('9 AM', 10, 120);
  text('10 AM', 10, 140);
  text('11 AM', 10, 160);
  text('12 PM', 10, 180);
  text('1 PM', 10, 200);
  text('2 PM', 10, 220);
  text('3 PM', 10, 240);
  text('4 PM', 10, 260);
  text('5 PM', 10, 280);
  text('6 PM', 10, 300);
  text('7 PM', 10, 320);
  text('8 PM', 10, 340);
  text('9 PM', 10, 360);
  text('10 PM', 10, 380);

stroke(255);
    strokeWeight(1);
    line(50, 40, 50, 400);

noStroke();
text('TODAY IS:', 500, 75);
text('THE TIME IS:', 500, 105);
text('I AM IN:', 500, 135);

}

function loadData() {
	var open = table.getColumn("Start Time");

	var closed = table.getColumn("End Time");


}

function mySelectEvent() {
	var item = sel.value();

}