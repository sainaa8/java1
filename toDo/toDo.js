const big = document.getElementById("bigOpac");
const addCard = document.querySelectorAll(".bottomOfDone");
const title = document.getElementById("bottonOFtitle");
const description = document.getElementById("bottonOFdescription");

// const Status = document.getElementById("bottonOFStatus");

const status2 = document.getElementById("bottonOFStatus");
const Priority = document.getElementById("bottonOFPriority");
// console.log(status2);
const addTask = document.getElementById("addTsk");
const parentDiv = document.getElementById("parentdiv");
const todoMiddle = document.getElementById("todo-middle");
const inpMiddle = document.getElementById("inp-middle");
const stuckMiddle = document.getElementById("stuck-middle");
const doneMiddle = document.getElementById("done-middle");

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

let states = [];
const firstGet = JSON.parse(localStorage.getItem("keyToDo"));
states = firstGet ? firstGet : [];

let newTask = {
  title: "",
  description: "",
  status: "To-do",
  Priority: "high",
};

const setData = (obj) => {
  states.push({ ...obj });
  let temp = JSON.stringify(states);
  localStorage.setItem("keyToDo", temp);

  render();
};

let myObject = () => {
  (title.value = ""),
    (description.value = ""),
    (status2.value = "To-do"),
    (Priority.value = "low");

  newTask = {
    title: "",
    description: "",
    status: "To-do",
    Priority: "high",
  };
};

addTask.addEventListener("click", () => {
  newTask = {
    title: title.value,
    description: description.value,
    status: status2.value,
    Priority: Priority.value,
  };

  setData(newTask);
  myObject();
  big.style.display = "none";
});

const card = (prop) => {
  const { title, description, status, Priority } = prop;

  return `<div class="ass1" id="ass" draggable="true">
               <div id="currect">
                  <div id="in" >${
                    status == "Done" ? "&#xf058;" : "&#10003"
                  }</div>
               </div>
               <div id="rightOfMiddle">
                  <div id="midOfMid"> 
                   <h2>${title}</h2>
                   <h2>${description}</h2>
                   <div id="leftOfMid"> ${Priority}</div>
   
                  </div>
                  <div class="atLast">
                     <div id="ex">&#215;</div>
                     <div id="note">&#x2660;</div>
                   </div>
               </div>
            </div>
            
    `;
};

const render = () => {
  const response = JSON.parse(localStorage.getItem("keyToDo"));
  todoMiddle.innerHTML = "";
  inpMiddle.innerHTML = "";
  stuckMiddle.innerHTML = "";
  doneMiddle.innerHTML = "";

  console.log(response);

  response.forEach((el) => {
    const result = card(el);
    switch (el.status) {
      case "To-do":
        todoMiddle.innerHTML += result;
        break;
      case "In-progress":
        inpMiddle.innerHTML += result;
        break;
      case "Stuck":
        stuckMiddle.innerHTML += result;
        break;
      case "Done":
        doneMiddle.innerHTML += result;
        break;
    }
  });
};
render();

let temp;
const drags = document.querySelectorAll(".ass1");
console.log(drags);
const layout = document.querySelectorAll(".done");
drags.forEach((el) => {
  el.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("todo", event.target.value);
  });
});
layout.forEach((el) => {
  el.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
});
const todoCard = document.getElementById("todoCard");
const progcard = document.getElementById("progcard");
const stuckcard = document.getElementById("stuccard");
const donecard = document.getElementById("donecard");

todoCard.addEventListener("drop", (event) => {
  temp = event.dataTransfer.getData("todo");
  const draggedEl = document.getElementById(temp);
  todoMiddle.appendChild(draggedEl);
});
progcard.addEventListener("drop", (event) => {
  temp = event.dataTransfer.getData("todo");
  const draggedprog = document.getElementById(temp);
  inpMiddle.appendChild(draggedprog);
});
stuckcard.addEventListener("drop", (event) => {
  temp = event.dataTransfer.getData("todo");
  const draggedstck = document.getElementById(temp);
  stuckMiddle.appendChild(draggedstck);
});
donecard.addEventListener("drop", (event) => {
  temp = event.dataTransfer.getData("todo");
  const draggeddone = document.getElementById(temp);
  doneMiddle.appendChild(draggeddone);
});
