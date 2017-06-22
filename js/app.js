var initialWork = 25;
var initialBreak = 5;
var setWork = document.querySelector(".work-time");
var setBreak = document.querySelector(".break-time");
var status = document.querySelector(".status");
var counter = document.querySelector(".timer");
var state = true;
var isCounting = false;

document.querySelector(".work-minus").addEventListener("click", function(){

	if (isCounting) {
		return;
	} else if (initialWork > 1){
    initialWork--
		setWork.textContent = initialWork;
    counter.textContent = initialWork;
  }
});

document.querySelector(".work-plus").addEventListener("click", function(){
  
	if (isCounting) {
		return;
	} else if (initialWork > 1){
  initialWork++;
  setWork.textContent = initialWork;
  counter.textContent = initialWork;
  }
});

document.querySelector(".break-minus").addEventListener("click", function(){

	if (isCounting) {
		return;
	} else if (initialBreak > 1){
    initialBreak--
    setBreak.textContent = initialBreak;
  } 
});

document.querySelector(".break-plus").addEventListener("click", function(){

  if (isCounting) {
		return;
	} else if (initialBreak > 1){
    initialBreak++;
    setBreak.textContent = initialBreak;
  }
});

document.querySelector(".clock-circle").addEventListener("click", function(){
  if(!isCounting && counter.textContent !== "0:00"){
    workSession(counter.textContent);
    isCounting = true;  
  }


});

function workSession(minutes) {
  var seconds = 60;
  var mins = minutes
  function workTick() {
    var current_minutes = mins-1;
    seconds--;
    counter.textContent = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    if(seconds > 0) {
      setTimeout(workTick, 1000);
    } else {
      if(mins > 1){
        workSession(mins-1);           
      }
    }
    if (counter.textContent === "0:00"){
      status.textContent = "Break";
      counter.textContent = initialBreak;
      breakSession(counter.textContent);
    }
  }
  workTick();
  
}

function breakSession(minutes) {
  var seconds = 60;
  var mins = minutes
  function breakTick() {
    var current_minutes = mins-1;
    seconds--;
    counter.textContent = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    if(seconds > 0) {
      setTimeout(breakTick, 1000);
    } else {
      if(mins > 1){
        breakSession(mins-1);           
      }
    }
  }
  breakTick();
}