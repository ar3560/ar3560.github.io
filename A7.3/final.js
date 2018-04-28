var sel;

function preload(){
  table = loadTable('NYC_Food_Scrap_Drop-off_Sites.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 440);
  loadData();

background(100);

selDay = createSelect();
selDay.position(600,60);
selDay.option('Monday');
selDay.option('Tuesday');
selDay.option('Wednesday');
selDay.option('Thursday');
selDay.option('Friday');
selDay.option('Saturday');
selDay.option('Sunday');
// selDay.changed(myselectDay);

selTime = createSelect();
selTime.position(600,90);
selTime.option('6AM');
selTime.option('7AM');
selTime.option('8AM');
selTime.option('9AM');
selTime.option('10AM');
selTime.option('11AM');
selTime.option('12PM');
selTime.option('1PM');
selTime.option('2PM');
selTime.option('3PM');
selTime.option('4PM');
selTime.option('5PM');
selTime.option('6PM');
selTime.option('7PM');
selTime.option('8PM');
selTime.option('9PM');
selTime.option('10PM');
// selTime.changed(mySelectTime);

selBoro = createSelect();
selBoro.position(600,120);
selBoro.option('Manhattan');
selBoro.option('Brooklyn');
selBoro.option('Queens');
selBoro.option('Bronx');
selBoro.option('StatenIsland');
// selBoro.changed(mySelectBoro);

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

function draw() {
	for (var i=0; i < table.getRowCount(); i++) {
		print(table.getRow(i).get("Start Time"));	// start time of first compost
	}
	

}

function mySelectDay() {
	var item = selDay.value();

}