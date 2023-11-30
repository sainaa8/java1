const big = document.getElementById("bigOpac");
const addCard = document.querySelectorAll(".bottomOfDone");
const title = document.getElementById("bottonOFtitle");
const description = document.getElementById("bottonOFdescription");

// const Status = document.getElementById("bottonOFStatus");

const status2 = document.querySelectorAll("#bottonOFStatus")[0];
const Priority = document.getElementById("bottonOFPriority");
console.log(status2);
const addTask = document.getElementById("addTsk");

// display: block
addCard.forEach((el) => {
  el.onclick = function () {
    big.style.display = "block";
  };
});

window.onclick = function (event) {
  if (event.target == big) {
    big.style.display = "none";
  }
};
//
let ttle = "";
title.addEventListener("change", () => {
  ttle = title.value;
  console.log(ttle);
});

let desc = "";
description.addEventListener("change", () => {
  desc = description.value;
  console.log(desc);
});

addTask.addEventListener("click", () => {
  var temp = status2.value;

  console.log(temp);
  var pri = Priority.value;
  console.log(pri);
  big.style.display = "none";
});
