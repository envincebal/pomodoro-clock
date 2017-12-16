(function () {
	const setWork = document.querySelector(".work-time");
	const setBreak = document.querySelector(".break-time");
	const status = document.querySelector(".status");
	const minutes = document.querySelector(".minute");
	const seconds = document.querySelector(".seconds");
	let initialWork = 25;
	let initialBreak = 5;
	let isCounting = false;
	let workTick;
	let breakTick;

	timerHandlers();

	function timerHandlers() {
		const setTimer = document.getElementsByClassName("set-timer");

		for (let i = 0; i < setTimer.length; i++) {
			setTimer[i].addEventListener("click", function (e) {
				const workMinus = e.target.classList.contains("work-minus");
				const workPlus = e.target.classList.contains("work-plus");
				const breakMinus = e.target.classList.contains("break-minus");
				const breakPlus = e.target.classList.contains("break-plus");

				if (workMinus && !isCounting && initialWork > 1) {
					initialWork--
					setWork.textContent = initialWork;
					minutes.textContent = initialWork;
				} else if (workPlus && !isCounting) {
					initialWork++;
					setWork.textContent = initialWork;
					minutes.textContent = initialWork;
				} else if (breakMinus && !isCounting && initialBreak > 1) {
					initialBreak--
					setBreak.textContent = initialBreak;
				} else if (breakPlus && !isCounting) {
					initialBreak++;
					setBreak.textContent = initialBreak;
				}

			})
		}
	}

	function workCountdown(minute, second) {
		let mins = minute;
		let secs = second;
		const chime = new Audio("http://www.wavlist.com/soundfx/014/cricket-1.wav");

		workTick = setInterval(function () {

			status.style.color = "#f43a3a";
			status.textContent = "Work";

			if (secs <= 0) {
				secs = 59;
				seconds.textContent = secs;

			} else {
				secs--;
				seconds.textContent = (secs < 10) ? "0" + secs : secs;
			}

			if (secs === 59) {
				mins--;
				minutes.textContent = mins;

			}

			if (minutes.textContent === "0" && seconds.textContent === "00") {
				clearInterval(workTick);
				chime.play();
				breakCountdown(setBreak.textContent, seconds.textContent);
			}
		}, 1000);
	}

	function breakCountdown(minute, second) {
		let mins = minute;
		let secs = second;
		const rooster = new Audio("http://www.wavlist.com/soundfx/009/rooster-2.wav");

		breakTick = setInterval(function () {


			status.style.color = "#0daa32";
			status.textContent = "Break";


			if (secs <= 0) {
				secs = 59;
				seconds.textContent = secs;

			} else {
				secs--;
				seconds.textContent = (secs < 10) ? "0" + secs : secs;
			}

			if (secs === 59) {
				mins--;
				minutes.textContent = mins;

			}

			if (minutes.textContent === "0" && seconds.textContent === "00") {
				clearInterval(breakTick);
				rooster.play();
				workCountdown(setWork.textContent, seconds.textContent);
			}
		}, 1000);

	}

	document.querySelector(".play-button").addEventListener("click", function () {

		if (!isCounting && status.textContent === "Work") {
			workCountdown(minutes.textContent, seconds.textContent);
		} else if (!isCounting && status.textContent === "Break") {
			breakCountdown(minutes.textContent, seconds.textContent);
		}

		isCounting = true;

	});

	document.querySelector(".pause-button").addEventListener("click", function () {
		clearInterval(workTick);
		clearInterval(breakTick);

		isCounting = false;

	});

	document.querySelector(".reset-button").addEventListener("click", function () {
		clearInterval(workTick);
		clearInterval(breakTick);
		minutes.textContent = initialWork;
		seconds.textContent = "00";
		setWork.textContent = initialWork;
		setBreak.textContent = initialBreak;
		isCounting = false;
	});
})();
