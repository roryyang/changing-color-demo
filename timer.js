var MoonCalc = require('mooncalc');

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var t = window.setTimeout(startTime, 500);
    
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    
    }

var day = new Date();
var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

var m = month[day.getMonth()];
    document.getElementById("day2").innerHTML = m + " .";

var date = day.getDate();
    document.getElementById('day3').innerHTML = date;

var year = day.getFullYear();
    document.getElementById('day1').innerHTML = year + ".";

var week = new Array(7);
    week[0] = "Sunday";
    week[1] = "Monday";
    week[2] = "Tuesday";
    week[3] = "Wednesday";
    week[4] = "Thursday";
    week[5] = "Friday";
    week[6] = "Saturday";

var w = week[day.getDay()];
    document.getElementById('weekTime').innerHTML = w;



function checkTime(i) {
if (i < 10) {i = "0" + i};
return i;
}