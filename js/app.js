var initialWork = 25;
var initialBreak = 5;
var setWork = document.querySelector(".work-time");
var setBreak = document.querySelector(".break-time");
var counter = document.querySelector(".timer");
var isCounting = false;
var workTime;
var breakTime;

document.querySelector(".work-minus").addEventListener("click", function () {

  if (!isCounting && initialWork > 1) {
    initialWork--
    setWork.textContent = initialWork;
    counter.textContent = initialWork;
  }
});

document.querySelector(".work-plus").addEventListener("click", function () {

  if (!isCounting) {
    initialWork++;
    setWork.textContent = initialWork;
    counter.textContent = initialWork;
  }
});

document.querySelector(".break-minus").addEventListener("click", function () {

  if (!isCounting && initialBreak > 1) {
    initialBreak--
    setBreak.textContent = initialBreak;
  }
});

document.querySelector(".break-plus").addEventListener("click", function () {

  if (!isCounting) {
    initialBreak++;
    setBreak.textContent = initialBreak;
  }
});

document.querySelector(".clock-circle").addEventListener("click", function () {

  if (!isCounting) {
    workSession(counter.textContent);
    isCounting = true;
  }
});

document.querySelector(".reset-circle").addEventListener("click", function () {
  document.querySelector(".status").textContent = "Session";
  document.querySelector(".clock-circle").style.backgroundColor = "#06032a";
  setWork.textContent = initialWork;
  counter.textContent = initialWork;
  setBreak.textContent = initialBreak;
  isCounting = false;
  clearTimeout(workTime);
  clearTimeout(breakTime);
});

function workSession(minutes) {
  var seconds = 60;
  var mins = minutes;
  var status = document.querySelector(".status");
  var clock = document.querySelector(".clock-circle");
  var chime = new Audio("http://www.wavlist.com/soundfx/014/cricket-1.wav");

  function workTick() {

    var current_minutes = mins - 1;

    clock.style.backgroundColor = "#f43a3a";
    status.textContent = "Session";
    seconds--;
    counter.textContent = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);

    if (seconds >= 0) {
      workTime = setTimeout(workTick, 1000);

    } else if (mins >= 1) {
      workSession(mins - 1);
    }

    if (counter.textContent === "0:00") {
      chime.play();
      counter.textContent = initialBreak;
      breakSession(counter.textContent);
    }
  }
  workTick();
}

function breakSession(minutes) {
  var seconds = 60;
  var mins = minutes;
  var status = document.querySelector(".status");
  var clock = document.querySelector(".clock-circle");
  var rooster = new Audio("http://www.wavlist.com/soundfx/009/rooster-2.wav");

  function breakTick() {
    var current_minutes = mins - 1;

    clock.style.backgroundColor = "#0daa32";
    status.textContent = "Break";
    seconds--;
    counter.textContent = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);

    if (seconds >= 0) {
      breakTime = setTimeout(breakTick, 1000);
    } else if (mins > 1) {
      breakSession(mins - 1);
    }

    if (counter.textContent === "0:00") {
      rooster.play();
      counter.textContent = initialWork;
      workSession(counter.textContent);
    }
  }
  breakTick();
}
