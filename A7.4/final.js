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
  Roboto_Light = loadFont('Roboto-Light.ttf');
  Roboto_Regular = loadFont('Roboto-Regular.ttf');
}

function setup() {
  createCanvas(1450, 800);
  loadData();

//   var mydiv = createDiv(columnWithName[i]);
// mydiv.addClass (name to change with css)
// mydiv.positiion(i*10, startTime[i]);
// mydiv.style('width', 10) or ('width', '10px')
// mydiv.style('height', endDate[i] - startTime[i]) or mydiv.style('height', endDate[i] - startTime[i] + 'px')

// create dropdown menus

selTime = createSelect();
selTime.addClass('mymenu');
selTime.position(925,110);
selTime.option('TIME');
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
selTime.changed(mySelectOverall);

selBoro = createSelect();
selBoro.addClass('mymenu2');
selBoro.position(425,110);
selBoro.option('BOROUGH');
selBoro.option('Manhattan');
selBoro.option('Brooklyn');
selBoro.option('Queens');
selBoro.option('Bronx');
selBoro.option('Staten Island');
selBoro.changed(mySelectOverall);

selDay = createSelect();
selDay.addClass('mymenu3');
selDay.position(675,110);
selDay.option('DAY');
selDay.option('Monday');
selDay.option('Tuesday');
selDay.option('Wednesday');
selDay.option('Thursday');
selDay.option('Friday');
selDay.option('Saturday');
selDay.option('Sunday');
selDay.changed(mySelectOverall);

}

// get information from .csv file

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

// get information from dropdown menus

function mySelectOverall() {
	finalLocations.length = 0;

	currentTime = selTime.value();
	currentDay = selDay.value();
	currentBorough = selBoro.value();
	//console.log("Time"+currentTime + "Day" + currentDay + "Borough" + currentBorough);


	for(var i = 1; i < startTimeS.length; i++) {
		if (currentBorough == boroughS[i]) {

			// console.log(boroughS[i]);
			// if (Number(currentTime) >= startTimeS[i] && currentTime <= endTimeS) {
			// 	console.log(startTimeS[i]);
				if (currentDay == dayS[i]) {
					finalLocations.push(i);
					//console.log("The Index is" + i);
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

background(255, 194, 150);


// axis labels
textSize(12);
textFont(Roboto_Light);
  fill(105,130,65);
  text('6 AM', 10, 75);
  text('7 AM', 10, 120);
  text('8 AM', 10, 165);
  text('9 AM', 10, 210);
  text('10 AM', 10, 255);
  text('11 AM', 10, 300);
  text('12 PM', 10, 345);
  text('1 PM', 10, 390);
  text('2 PM', 10, 435);
  text('3 PM', 10, 480);
  text('4 PM', 10, 525);
  text('5 PM', 10, 570);
  text('6 PM', 10, 615);
  text('7 PM', 10, 660);
  text('8 PM', 10, 705);
  text('9 PM', 10, 750);

// draw and edit axis lines
stroke(214,115,90);
    strokeWeight(2);
    line(50, 60, 50, 775);

//6AM
 stroke(57,73,52);
        if (selTime.value()=='6AM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='6AM') {strokeWeight(.25)};
 	line(50, 70, 1400, 70);
//7AM    
 stroke(57,73,52);
        if (selTime.value()=='7AM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='7AM') {strokeWeight(.25)};
    line(50, 115, 1400, 115);
 //8AM
 stroke(57,73,52);
        if (selTime.value()=='8AM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='8AM') {strokeWeight(.25)};
    line(50, 160, 1400, 160);
 //9AM
 stroke(57,73,52);
        if (selTime.value()=='9AM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='9AM') {strokeWeight(.25)};
    line(50, 205, 1400, 205);
 //10AM
 stroke(57,73,52);
        if (selTime.value()=='10AM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='10AM') {strokeWeight(.25)};
    line(50, 250, 1400, 250);
 //11AM
 stroke(57,73,52);
        if (selTime.value()=='11AM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='11AM') {strokeWeight(.25)};
    line(50, 295, 1400, 295);
 //12PM
 stroke(57,73,52);
        if (selTime.value()=='12PM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='12PM') {strokeWeight(.25)};
    line(50, 340, 1400, 340);
 //1PM
 stroke(57,73,52);
        if (selTime.value()=='1PM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='1PM') {strokeWeight(.25)};
    line(50, 385, 1400, 385);
 //2PM
 stroke(57,73,52);
        if (selTime.value()=='2PM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='2PM') {strokeWeight(.25)};
    line(50, 430, 1400, 430);
 //3PM
 stroke(57,73,52);
        if (selTime.value()=='3PM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='3PM') {strokeWeight(.25)};
    line(50, 475, 1400, 475);
 //4PM
 stroke(57,73,52);
        if (selTime.value()=='4PM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='4PM') {strokeWeight(.25)};
    line(50, 520, 1400, 520);
 //5PM
 stroke(57,73,52);
        if (selTime.value()=='5PM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='5PM') {strokeWeight(.25)};
    line(50, 565, 1400, 565);
 //6PM
 stroke(57,73,52);
        if (selTime.value()=='6PM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='6PM') {strokeWeight(.25)};
    line(50, 610, 1400, 610);
 //7PM
 stroke(57,73,52);
        if (selTime.value()=='7PM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='7PM') {strokeWeight(.25)};
    line(50, 655, 1400, 655);
 //8PM
 stroke(57,73,52);
        if (selTime.value()=='8PM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='8PM') {strokeWeight(.25)};
    line(50, 700, 1400, 700);
 //9PM
 stroke(57,73,52);
        if (selTime.value()=='9PM') {
        	strokeWeight(1.5);
        	stroke(255);
        }
 		else if (selTime.value()!='9PM') {strokeWeight(.25)};
    line(50, 745, 1400, 745);


// location results
	document.getElementById("results").innerHTML = "";

	for(var i = 0; i < finalLocations.length; i++) {
		document.getElementById("results").innerHTML += (i+1) + "." + " " + locationS[finalLocations[i]] + "<br>";
		// console.log(finalLocations[0]);
	}

// draw rectangles
	for(var i = 0; i < startTimeS.length; i++) {

		fill(136,153,78,95);
		noStroke();

		for(var j = 0; j < finalLocations.length; j++) {
			if (i == finalLocations[j]) {
				fill(255,109,80,95);
				noStroke();
				// console.log(finalLocations[j]);
			}
		}




		rect((i*13) + 60, -200 + startTimeS[i] * 45, 13, (endTimeS[i]-startTimeS[i])*45);


	}



}
