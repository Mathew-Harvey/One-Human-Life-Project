var cols = 52;
var rows = 100;
var cells = [];
var userAge = 45


function myFunction() {
  const test = document.getElementById("search").value;
  console.log(test);
  
}


function make2Darray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  var canvas = createCanvas(1040, 2000);
  canvas.parent('timeLeft');
  cells = make2Darray(cols, rows);
  for (var i = 0; i < cols; i++) {
    cells[j] = [];
    for (var j = 0; j < rows; j++) {
      let index = j * cols + i;
      if (index > ageInWeeks) {
        fill(255);
      } else {
        fill(100);
      }

      cells[i][j] = 255;
      var x = i * 20;
      var y = j * 20;

      stroke(0);
      rect(x, y, 30, 30);
    }
  }
}

function draw() {
  textAlign(CENTER, CENTER);
}

var ageInYears = userAge;
var ageInWeeks = ageInYears * 52;
