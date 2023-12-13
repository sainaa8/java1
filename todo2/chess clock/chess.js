const startBtn1 = document.getElementById("start");
const startBtn2 = document.getElementById("start1");
const display1 = document.getElementById("display");
const display2 = document.getElementById("display1");

const resetBtn = document.getElementById("reset");
const stopBtn = document.getElementById("stop");
let timer;

let seconds = 0;
let minutes = 0;
let hours = 0;

function stop() {
  clearInterval(timer);
  timer = null;
}

resetBtn.addEventListener("click", () => {
  stop();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
});

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
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
  console.log("asdasd");
  if (!timer) {
    timer = setInterval(updateTimer, 1000);
  }
  clearInterval(timer1);
  timer1 = null;
  //   stop(updateDisplay1());
});
startBtn2.addEventListener("click", () => {
  if (!timer1) {
    timer1 = setInterval(updateTimer1, 1000);
  }
  clearInterval(timer);
  timer = null;
  //   stop(updateDisplay());
});
///////////////
let timer1;

let seconds1 = 0;
let minutes1 = 0;
let hours1 = 0;
function stop1() {
  clearInterval(timer1);
  timer1 = null;
}
resetBtn.addEventListener("click", () => {
  stop1();
  seconds1 = 0;
  minutes1 = 0;
  hours1 = 0;

  updateDisplay1();
});

function updateTimer1() {
  seconds1++;
  if (seconds1 === 60) {
    seconds1 = 0;
    minutes1++;
    if (minutes1 === 60) {
      minutes1 = 0;
      hours1++;
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
