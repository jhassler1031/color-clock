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

  //If number is less than 10, add a 0 so all times have two digits
  if (s < 10) {
    s = "0" + s;
  }

  console.log(`The time is ${h}:${m}:${s}`);
  console.log(percentOfMinute);

  //Determine the length of the progress bar, cutting percentOfMinute in half so the bar doesn't get too long
  let bar = "_".repeat(percentOfMinute / 2);
  console.log(bar);

  //Adds the time to the html to display on the page
  clock.textContent = `${h}:${m}:${s}`
  timerBar.textContent = bar;
}
