var initialWork = 25;
var initialBreak = 5;
var setWork = document.querySelector(".work-time");
var setBreak = document.querySelector(".break-time");
var currentMinutes = document.querySelector(".minutes");
var currentSeconds = document.querySelector(".seconds");

document.querySelector(".work-minus").addEventListener("click", function(){

	if (initialWork > 1) {
		initialWork--
		setWork.innerHTML = initialWork;
    currentMinutes.innerHTML = initialWork;
	} 
});

document.querySelector(".work-plus").addEventListener("click", function(){
  
		initialWork++;
		setWork.innerHTML = initialWork;
    currentMinutes.innerHTML = initialWork;
})

document.querySelector(".break-minus").addEventListener("click", function(){

	if (initialBreak > 1) {
		initialBreak--
		setBreak.innerHTML = initialBreak;
	} 
})

document.querySelector(".break-plus").addEventListener("click", function(){

		initialBreak++;
		setBreak.innerHTML = initialBreak;
})