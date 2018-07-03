
//Creating the interval to change the time every second (1000 here is in miliseconds)
var everySecond = setInterval(getTime, 1000);

//Variable for checking if the mouse is hovering
let mouseIsOver = false;
let hexNumber;

//Get HTML elements to modify
let $clock = document.querySelector(".clock");
let $timerBar = document.querySelector(".timer-bar");
let $background = document.querySelector(".clock-container");

$clock.onmouseover = function() {
  mouseIsOver = true;
};

$clock.onmouseout = function() {
  mouseIsOver = false;
};


//Creating a function to get the hex number ====================================
function getHex(number) {
  'use strict';
  //Use toString() method to get the hex of the number
  var temp = number.toString(16);
  //If the hex is single digit, add a 0 to the beginning
  if (temp.length < 2) {
    temp = "0" + temp;
  }
  return temp;
}
//Instead of the if statements, could use number.toString().padStart(2, 0);
//best way hours = ('0' + date.getHours()).slice(-2); This adds a 0 to the front and then just
//grabs two chars right to left (leaves off the added 0 if it's not needed)
//alternate if would be hours<10? hours = "0" + hours: null

//Creating the function called in everySecond ==================================
function getTime() {
  'use strict';
  //Sets today to the current date/time
  let today = new Date();

  //Resetting this variable every iteration
  hexNumber = "#";

  //.getHours() used on Date object to get hours ===============================
  let h = today.getHours();
  //Add the hours to the hex number
  let hexH = getHex(h);
  hexNumber = hexNumber + hexH;
  console.log(hexNumber);
  //If number is less than 10, add a 0 so all times have two digits
  if (h < 10) {
    h = "0" + h;
  }

  //.getMinutes() used to get minutes from Date object =========================
  let m = today.getMinutes();
  //Add the minutes to the hex number
  let hexM = getHex(m);
  hexNumber = hexNumber + hexM;
  //If number is less than 10, add a 0 so all times have two digits
  if (m < 10) {
    m = "0" + m;
  }

  //.getSeconds() used to get seconds from Date object =========================
  let s = today.getSeconds();
  //Calculate the percentage of a minute the seconds represent
  let percentOfMinute = (s/60) * 100;
  //Round the decimal to the nearest whole number
  percentOfMinute = Math.round(percentOfMinute);
  //Add the seconds to the hex number
  let hexS = getHex(s);
  hexNumber = hexNumber + hexS;
  
  //If number is less than 10, add a 0 so all times have two digits
  if (s < 10) {
    s = "0" + s;
  }

  //Print variables to the console =============================================
  console.log(`The time is ${h}:${m}:${s}`);
  console.log(`The percent is: ${percentOfMinute}`);
  console.log(`The Hex Color is: ${hexNumber}`);

  //Determine the length of the progress bar, cutting percentOfMinute in half so the bar doesn't get too long
  //.repeat(number of times tor repeat) is a function that can be called on a string
  let bar = "_".repeat(percentOfMinute / 2);
  console.log(bar);

  //Before setting the clock text content, check to see if the mouse is hovering
  // console.log(mouseIsOver);
  if (mouseIsOver) {
    $clock.textContent = `${hexH}:${hexM}:${hexS}`;
    console.log("yes i'm true");
  }
  else {
    //Adds the time to the html to display on the page
    $clock.textContent = `${h}:${m}:${s}`;
  }
  //Adjust the progress bar
  $timerBar.textContent = bar;
  //Change the background color
  $background.style.backgroundColor = hexNumber;
}
