var myFont;
var headlines = [];
var maxHeadLen, minHeadLen;
var poli = [
"Trump", "Donald", "Pence", "White House", "Senate", 
"Congress", "Vote", "Democrat", "Republican", "Elections", "Ivanka", "Melania",
"Trump's", "Pence's", "Don Jr."];

function preload() {

  myFont = loadFont('Roboto-Light.ttf');

  // Assemble url for API call
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "b849eb6d180c4cfab298bcf573781bdf"; // see: https://developer.nytimes.com
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
  // loadJSON() is asynchronous, but calling it inside preload() guarantees
  // we'll have a response before setup() and draw() is run.
}

function setup() {
  createCanvas(800, 1000);

  textSize(10);
  textFont(myFont);
  textAlign(LEFT);

  noLoop(); // since we're not animating, one frame is sufficient: run draw() just once

  extractHeadlines();
}

function draw() {
  background(120);

  // Set the left and top margin
  var margin = 40;
  translate(margin, margin);

  var lineheight = 30;

  for (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], ' ');

    var nextX = 0;

    var linelength = map(headlines[i].length,minHeadLen, maxHeadLen, margin, width-margin*2);
    stroke(255);
    strokeWeight(0.15);
    line(0, i*lineheight, linelength, i*lineheight);

    if(poli.includes(words[i])) {
      noStroke();
      fill(0);
      ellipse(linelength, i*lineheight, 20, 20);
    } else {
      noStroke();
      fill(255);
      ellipse(linelength, i*lineheight, 20, 20);
    };
    
  }
}


function extractHeadlines() {

  // console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;
    // besides .title, other text data available to you include:
    // .abstract, .byline, .section, etc. etc.

    if (!maxHeadLen) {
      maxHeadLen = h.length;
    } else if (h.length > maxHeadLen) {
      maxHeadLen = h.length;
    }

    if (!minHeadLen) {
      minHeadLen = h.length;
    } else if (h.length < minHeadLen) {
      minHeadLen = h.length;
    }
    append(headlines, h);
  }

  // console.log(headlines); // make sure counted data looks as expected
  // console.log(maxHeadLen);
  // console.log(minHeadLen);
}