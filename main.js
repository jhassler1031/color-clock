// var everySecond = setInterval(greeting, 1000);
//
// function greeting() {
//   console.log('hey');
//   return;
// }

//Creating the interval to change the time every second (1000 here is in miliseconds)
var everySecond = setInterval(getTime, 1000);

//Creating the function called in everySecond
function getTime() {
  //Sets today to the current date/time
  let today = new Date();

  //Get HTML elements to modify
  let clock = document.querySelector(".clock");
  let timerBar = document.querySelector(".timer-bar");
  let background = document.querySelector(".clock-container");

  //.getHours() used on Date object to get hours
  let h = today.getHours();
  //If number is less than 10, add a 0 so all times have two digits
  if (h < 10) {
    h = "0" + h;
  }

  //.getMinutes() used to get minutes from Date object
  let m = today.getMinutes();
  //If number is less than 10, add a 0 so all times have two digits
  if (m < 10) {
    m = "0" + m;
  }

  //.getSeconds() used to get seconds from Date object
  let s = today.getSeconds();

  //Calculate the percentage of a minute the seconds represent
  let percentOfMinute = (s/60) * 100;
  //Round the decimal to the nearest whole number
  percentOfMinute = Math.round(percentOfMinute);

  //Get the hex of seconds using the toString() method
  let hexNumber = s.toString(16);
  //If the hex is single digit, add a 0 to the beginning
  if (hexNumber.length < 2) {
    hexNumber = "0" + hexNumber;
  }
  //Add the beginning of the hex color to the variable
  hexNumber = "#F088" + hexNumber;

  //If number is less than 10, add a 0 so all times have two digits
  if (s < 10) {
    s = "0" + s;
  }

  console.log(`The time is ${h}:${m}:${s}`);
  console.log(percentOfMinute);
  console.log(hexNumber);

  //Determine the length of the progress bar, cutting percentOfMinute in half so the bar doesn't get too long
  //.repeat(number of times tor repeat) is a function that can be called on a string
  let bar = "_".repeat(percentOfMinute / 2);
  console.log(bar);

  //Adds the time to the html to display on the page
  clock.textContent = `${h}:${m}:${s}`
  //Adjust the progress bar
  timerBar.textContent = bar;
  //Change the background color
  background.style.backgroundColor = hexNumber;
}
