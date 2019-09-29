var wakeuptime = 0;
var lunchtime = 0;
var naptime = 0;
var noon = 12;
var partytime;

var currentTime = function() {
  var clock = document.getElementById("clock");
  var currTime = new Date();

  var hours = currTime.getHours();
  var minutes = currTime.getMinutes();
  var meridan = "AM";

  if (hours >= noon) {
    meridan = "PM";
  }
  if (hours > noon) {
    hours = hours - noon;
  }

  var showTime = hours + ":" + minutes + meridan;

  clock.innerText = showTime;
};

var updateClock = function() {
  var time = new Date().getHours();
  var messageText;
  var image =
    "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById("lolcatImage");

  if (time == partytime) {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
  } else {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }
  console.log(messageText);
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;

  currentTime();
};
updateClock();
// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyButton = document.getElementById("partyTimeButton");

var partying = function() {
  if (partytime < 0) {
    partytime = new Date().getHours();
    partyButton.innerText = "its over bitch";
    partyButton.style.background = "#0A8DAB";
  } else {
    partytime = -1;
    partyButton.innerText = "Party on Bitches!";
    partyButton.style.background = "#222";
  }
};

partyButton.addEventListener("click", partying);
partying();

var loll = function() {
  var lol = document.getElementById("timeEvent");
  lol.innerText = "loll";
};

loll();
currentTime();
var oneMinute = 6000;
setInterval(updateClock, oneMinute);
