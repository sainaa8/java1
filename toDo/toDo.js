const big = document.getElementById("bigOpac");
const addCard = document.querySelectorAll(".bottomOfDone");
const title = document.getElementById("bottonOFtitle");
const description = document.getElementById("bottonOFdescription");

// const Status = document.getElementById("bottonOFStatus");

const status2 = document.querySelectorAll("#bottonOFStatus")[0];
const Priority = document.getElementById("bottonOFPriority");
// console.log(status2);
const addTask = document.getElementById("addTsk");
const parentDiv = document.getElementById("parentdiv");

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

const states = [];
let myObject = () => {
  (title.value = ""),
    (description.value = ""),
    (status2.value = "To-do"),
    (Priority.value = "low");
};
addTask.addEventListener("click", (newTask) => {
  newTask = {
    title: title.value,
    description: description.value,
    status: status2.value,
    Priority: Priority.value,
  };
  states.push(newTask); 
  console.log(states);
  big.style.display = "none";

  myObject();
});
// title.addEventListener("change", (event) => {
//   myObject.title = event.target.value;
// });

// description.addEventListener("change", (event) => {
//   myObject.description = event.target.value;
// });

// addTask.addEventListener("click", () => {
//   var temp = status2.value;
//   myObject.status = temp;

//   var pri = Priority.value;

//   myObject.Priority = pri;
//   big.style.display = "none";
//   states.push(myObject);
//   console.log(states);
//   myObject.title = "";
//   myObject.description = "";
//   status2.value = "";
//   Priority.value = "";
// });
////function///////////////////////////////////////////

//
