@const startBtn1 = document.getElementById("start");
const startBtn2 = document.getElementById("start1");
const display1 = document.getElementById("display");
const display2 = document.getElementById("display1");

const resetBtn = document.getElementById("reset");
const stopBtn = document.getElementById("stop");
const input = document.getElementById("input");

const startButton = document.getElementById("startbtn");

let timer;

let seconds = 0;
let minutes = 0;
let hours = 0;

function stop() {
  console.log("stopbt");
  clearInterval(timer);
  timer = null;
}

resetBtn.addEventListener("click", () => {
  stop();
  seconds = 0;
  minutes = input.value;
  hours = 0;
  updateDisplay();
});

function updateTimer() {
  seconds--;
  if (seconds <= -1) {
    if (display1.innerHTML === "00:00:00") {
      startBtn1.innerHTML = "LOSER";
      startBtn2.innerHTML = "WINNER";
      console.log("stopped");
      alert("player2 WIN");
      stop();
      seconds = 0;
      minutes = 0;
      hours = 0;
    } else {
      seconds = 59;
      minutes--;
    }

    // if (minutes === 60) {
    //   minutes = 0;
    //   hours++;
    // }
  }
  updateDisplay();
}

let formattedTime = "";
function updateDisplay() {
  formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  display1.innerText = formattedTime;
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}
startBtn1.addEventListener("click", () => {
  if (!timer1) {
    timer1 = setInterval(updateTimer1, 1000);
  }
  clearInterval(timer);
  timer = null;
  //   stop(updateDisplay1());
});
startBtn2.addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(updateTimer, 1000);
  }
  clearInterval(timer1);
  timer1 = null;
  //   stop(updateDisplay());
});
///////////////
let timer1;

let seconds1 = 0;
let minutes1 = input.value;
let hours1 = 0;
function stop1() {
  clearInterval(timer1);
  timer1 = null;
}
resetBtn.addEventListener("click", () => {
  stop1();
  seconds1 = 0;
  minutes1 = input.value;
  hours1 = 0;

  updateDisplay1();
});

function updateTimer1() {
  seconds1--;
  if (seconds1 <= -1) {
    if (display2.innerHTML === "00:00:00") {
      console.log("stopped");
      startBtn1.innerHTML = "WINNER";
      startBtn2.innerHTML = "LOSER";
      alert("player1 WIN");
      stop1();
      seconds1 = 0;
      minutes1 = 0;
      hours1 = 0;
    } else {
      seconds1 = 59;
      minutes1--;
    }
  }

  updateDisplay1();
}

let formattedTime1 = "";
function updateDisplay1() {
  formattedTime1 = pad1(hours1) + ":" + pad1(minutes1) + ":" + pad1(seconds1);
  display2.innerText = formattedTime1;
}
function pad1(number) {
  return number < 10 ? "0" + number : number;
}
document.addEventListener("keypress", logKey);
function logKey(e) {
  if (e.code === "KeyA") {
    if (!timer1) {
      timer1 = setInterval(updateTimer1, 1000);
    }
    clearInterval(timer);
    timer = null;
  } else if (e.code === "KeyL") {
    if (!timer) {
      timer = setInterval(updateTimer, 1000);
    }
    clearInterval(timer1);
    timer1 = null;
  }
}
startButton.addEventListener("click", () => {
  console.log(input.value);
  minutes = input.value;
  minutes1 = input.value;
  display1.innerHTML = `00:0${input.value}:00`;
  display2.innerHTML = `00:0${input.value}:00`;
});
