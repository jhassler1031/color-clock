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

  //Sets clock to the html element of class clock
  let clock = document.querySelector(".clock");

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
  //If number is less than 10, add a 0 so all times have two digits
  if (s < 10) {
    s = "0" + s;
  }

  console.log(`The time is ${h}:${m}:${s}`);

  //Adds the time to the html to display on the page
  clock.textContent = `${h}:${m}:${s}`
}
