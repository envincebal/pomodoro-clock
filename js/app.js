(function () {
  const setWork = document.querySelector(".work-time"); // Selects work time element
  const setBreak = document.querySelector(".break-time"); // Selects work time element
  const status = document.querySelector(".status"); // Selects status element
  const minutes = document.querySelector(".minute"); // Selects minute element
  const seconds = document.querySelector(".seconds"); // Selects  second element
  let initialWork = 25; // Sets initial work minutes
  let initialBreak = 5; // Sets initial break minutes
  let isCounting = false;
  let workTick; // Declares setInterval for work countdown
  let breakTick; // Declares setInterval for break countdown

  // This event listener increments or decrements work and break minutes
  document.querySelector(".set-time").addEventListener("click", function (e) {
    const workMinus = e.target.classList.contains("work-minus");
    const workPlus = e.target.classList.contains("work-plus");
    const breakMinus = e.target.classList.contains("break-minus");
    const breakPlus = e.target.classList.contains("break-plus");

    if (workMinus && !isCounting && initialWork > 1) {
      initialWork--
      setWork.textContent = initialWork;
      minutes.textContent = initialWork;
    }else if (workPlus && !isCounting) {
      initialWork++;
      setWork.textContent = initialWork;
      minutes.textContent = initialWork;
    }else if (breakMinus && !isCounting && initialBreak > 1) {
      initialBreak--
      setBreak.textContent = initialBreak;
    }else if (breakPlus && !isCounting) {
      initialBreak++;
      setBreak.textContent = initialBreak;
    }
  })

  // Start button event listener
  document.querySelector(".play-button").addEventListener("click", function () {
    // Starts or restart break or work countdown and changes isCounting status
    if (!isCounting && status.textContent === "Work") {
      workCountdown(minutes.textContent, seconds.textContent);
    } else if (!isCounting && status.textContent === "Break") {
      breakCountdown(minutes.textContent, seconds.textContent);
    }
    isCounting = true;
  });

  // Pause button event listener
  document.querySelector(".pause-button").addEventListener("click", function () {
    // Stops work or break countdown and changes isCounting status
    clearInterval(workTick);
    clearInterval(breakTick);
    isCounting = false;
  });

  // Reset button event listener
  document.querySelector(".reset-button").addEventListener("click", function () {
    // Stops work or break countdown, resets initial values and changes isCounting status
    clearInterval(workTick);
    clearInterval(breakTick);
    minutes.textContent = initialWork;
    seconds.textContent = "00";
    setWork.textContent = initialWork;
    setBreak.textContent = initialBreak;
    isCounting = false;
  });

  // Work countdown
  const workCountdown = (minute, second) => {
    let mins = minute;
    let secs = second;
    const chime = new Audio("http://www.wavlist.com/soundfx/014/cricket-1.wav");

    workTick = setInterval(function () {
      // When countdown begins the status changes
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
      // Work alarm goes off and switches to break countdown
      if (minutes.textContent === "0" && seconds.textContent === "00") {
        clearInterval(workTick);
        chime.play();
        breakCountdown(setBreak.textContent, seconds.textContent);
      }
    }, 1000);
  }

  // Break countdown
  const breakCountdown = (minute, second) => {
    let mins = minute;
    let secs = second;
    const rooster = new Audio("http://www.wavlist.com/soundfx/009/rooster-2.wav");

    breakTick = setInterval(function () {
      // When countdown begins the status changes
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
      // Break alarm goes off and switches to work countdown
      if (minutes.textContent === "0" && seconds.textContent === "00") {
        clearInterval(breakTick);
        rooster.play();
        workCountdown(setWork.textContent, seconds.textContent);
      }
    }, 1000);
  }
})();
