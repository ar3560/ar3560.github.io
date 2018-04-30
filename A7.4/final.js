var table;
var finalLocations = [];
var selTime;
var selDay;
var selBoro;

var startTimeS;
var endTimeS;
var boroughS;
var locationS;
var mondayS;
var name;
var dayS;

var currentTime;
var currentDay;
var currentBorough;
var currentMonday;



function preload(){
  table = loadTable('NYC_Food_Scrap_Drop-off_Sites.csv', 'csv', 'header');
}

function setup() {
  createCanvas(2000, 900);
  loadData();

selTime = createSelect();
selTime.position(205,60);
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
selTime.changed(mySelectOverall);

selBoro = createSelect();
selBoro.position(5,60);
selBoro.option('Manhattan');
selBoro.option('Brooklyn');
selBoro.option('Queens');
selBoro.option('Bronx');
selBoro.option('Staten Island');
selBoro.changed(mySelectOverall);

selDay = createSelect();
selDay.position(105,60);
selDay.option('Monday');
selDay.option('Tuesday');
selDay.option('Wednesday');
selDay.option('Thursday');
selDay.option('Friday');
selDay.option('Saturday');
selDay.option('Sunday');
selDay.changed(mySelectOverall);

}

function loadData() {
	startTimeS = table.getColumn("Start Time");
	endTimeS = table.getColumn("End Time");
	boroughS = table.getColumn("Borough");
	locationS = table.getColumn("Site Location");
	mondayS = table.getColumn("Monday");
	name = table.getColumn("Drop-Off Site Name");
	dayS = table.getColumn("Days");

}

// $(document).ready(function() {
// 	init();
// });

// var init = function () {
// 	$('#sumbit').click(function(e) {
// 		e.preventDefault();
// 		setParameters();
// 	})
// }

// var setParameters = function(){
// 	currentTime = $('.currentTime').val();
// 	currentBorough = $('.currentBorough').val();
// 	currentDay = $('.currentDay').val();
// 	console.log("Selected");
// }

function mySelectOverall() {
	finalLocations.length = 0;

	currentTime = selTime.value();
	currentDay = selDay.value();
	currentBorough = selBoro.value();
	console.log("Time"+currentTime + "Day" + currentDay + "Borough" + currentBorough);


	for(var i = 1; i < startTimeS.length; i++) {
		if (currentBorough == boroughS[i]) {

			// console.log(boroughS[i]);
			// if (Number(currentTime) >= startTimeS[i] && currentTime <= endTimeS) {
			// 	console.log(startTimeS[i]);
				if (currentDay == dayS[i]) {
					finalLocations.push(i);
					console.log("The Index is" + i);
				}
			// } else {
			// 	console.log("time doesnt match");
			// }
		}
		else {
			//console.log("Nothing Fits");
		}

	}

}

function draw() {
	// console.log(boroughS[10]);

textSize(12);
  fill(0);
  text('6 AM', 10, 80);
  text('7 AM', 10, 125);
  text('8 AM', 10, 170);
  text('9 AM', 10, 215);
  text('10 AM', 10, 260);
  text('11 AM', 10, 305);
  text('12 PM', 10, 350);
  text('1 PM', 10, 395);
  text('2 PM', 10, 440);
  text('3 PM', 10, 485);
  text('4 PM', 10, 530);
  text('5 PM', 10, 575);
  text('6 PM', 10, 620);
  text('7 PM', 10, 665);
  text('8 PM', 10, 710);
  text('9 PM', 10, 755);
  text('10 PM', 10, 800);

stroke(0);
    strokeWeight(1);
    line(50, 60, 50, 820);

 stroke(0);
    strokeWeight(0.07);
    line(50, 70, 1100, 70);
 stroke(0);
    strokeWeight(0.07);
    line(50, 115, 1100, 115);
 stroke(0);
    strokeWeight(0.07);
    line(50, 160, 1100, 160);
 stroke(0);
    strokeWeight(0.07);
    line(50, 205, 1100, 205);
 stroke(0);
    strokeWeight(0.07);
    line(50, 250, 1100, 250);
 stroke(0);
    strokeWeight(0.07);
    line(50, 295, 1100, 295);
 stroke(0);
    strokeWeight(0.07);
    line(50, 340, 1100, 340);
 stroke(0);
    strokeWeight(0.07);
    line(50, 385, 1100, 385);
 stroke(0);
    strokeWeight(0.07);
    line(50, 430, 1100, 430);
 stroke(0);
    strokeWeight(0.07);
    line(50, 475, 1100, 475);
 stroke(0);
    strokeWeight(0.07);
    line(50, 520, 1100, 520);
 stroke(0);
    strokeWeight(0.07);
    line(50, 565, 1100, 565);
 stroke(0);
    strokeWeight(0.07);
    line(50, 610, 1100, 610);
 stroke(0);
    strokeWeight(0.07);
    line(50, 655, 1100, 655);
 stroke(0);
    strokeWeight(0.07);
    line(50, 700, 1100, 700);
 stroke(0);
    strokeWeight(0.07);
    line(50, 745, 1100, 745);
 stroke(0);
    strokeWeight(0.07);
    line(50, 790, 1100, 790);



	document.getElementById("results").innerHTML = "";

	for(var i = 0; i < finalLocations.length; i++) {
		document.getElementById("results").innerHTML += (i+1) + "." + " " + locationS[finalLocations[i]] + "<br>";
		// console.log(finalLocations[0]);
	}

	//noStroke();

	for(var i = 0; i < startTimeS.length; i++) {

		fill(160,193,26,50);
		noStroke();

		for(var j = 0; j < finalLocations.length; j++) {
			if (i == finalLocations[j]) {
				fill(255,179,0,50);
				noStroke();
				// console.log(finalLocations[j]);
			}
		}

		rect((i*10) + 60, -200 + startTimeS[i] * 45, 10, (endTimeS[i]-startTimeS[i])*45);


	}

}
