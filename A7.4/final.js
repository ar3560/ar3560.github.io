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
  createCanvas(2000, 800);
  loadData();

selTime = createSelect();
selTime.position(205,60);
selTime.option('6');
selTime.option('7');
selTime.option('8');
selTime.option('9');
selTime.option('10');
selTime.option('11');
selTime.option('12');
selTime.option('13');
selTime.option('14');
selTime.option('15');
selTime.option('16');
selTime.option('17');
selTime.option('18');
selTime.option('19');
selTime.option('20');
selTime.option('21');
selTime.option('22');
selTime.changed(mySelectOverall);

selBoro = createSelect();
selBoro.position(5,60);
selBoro.option('Manhattan');
selBoro.option('Brooklyn');
selBoro.option('Queens');
selBoro.option('Bronx');
selBoro.option('StatenIsland');
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

	document.getElementById("results").innerHTML = "";

	for(var i = 0; i < finalLocations.length; i++) {
		document.getElementById("results").innerHTML += (i+1) + " " + locationS[finalLocations[i]] + "<br>";
		// console.log(finalLocations[0]);
	}

	//noStroke();

	for(var i = 0; i < startTimeS.length; i++) {

		fill(160,193,26);
		noStroke();

		for(var j = 0; j < finalLocations.length; j++) {
			if (i == finalLocations[j]) {
				fill(255,179,0);
				noStroke();
				// console.log(finalLocations[j]);
			}
		}

		rect((i*10) + 50, -200 + startTimeS[i] * 45, 10, (endTimeS[i]-startTimeS[i])*45);

	}

}
