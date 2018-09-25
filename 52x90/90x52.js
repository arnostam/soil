

function createYWKdivs(){
   var numWeeks = 52;
          var numYears = 90;
          for (yy = 1; yy <= numYears; yy++) {
            var g = document.createElement('div');
            g.className = "yearRow";
            yearID = "y" + yy;
            g.id = yearID;
            document.getElementById("board").appendChild(g);
            for (ww = 1; ww <= numWeeks; ww++) {
              var a = document.createElement('div');
              a.className = "weekBox";
              a.id = "wk" + ww;
              document.getElementById(yearID).appendChild(a);
            }
          }
};

function testJS(){
document.documentElement.style.setProperty('--testColor', getRandomColor());
document.getElementById("myText").innerHTML = wkColorBdNow();
};

function wkColorBdNow() {
  var bD = new Date();
  var testbD = new Date(1982,10,12);
  var bD = testbD
//  var bDY = bD.getFullYear().toString();
//  var bDM = (bD.getMonth() + 1).toString();
//  var bDD = bD.getDate().toString();
//  var bDR = bDY.concat(' ',bDM,' ', bDD);
var nowD= new Date();

deltaDate = (nowD - bD);
//take out milliseconds
  deltaDate = deltaDate/1000;
  var seconds = Math.floor(deltaDate % 60);
  deltaDate = deltaDate/60;
  var minutes = Math.floor(deltaDate % 60);
  deltaDate = deltaDate/60;
  var hours = Math.floor(deltaDate % 24);
  var days = Math.floor(deltaDate/24);

  return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds';
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

window.onload =  function(){
    createYWKdivs();
};
