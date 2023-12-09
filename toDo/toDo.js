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
const time = document.getElementById("clock");
function displayTime() {
  var d = new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var amOrFm = "AM";
  if (hour >= 12) {
    amOrFm = "PM";
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  time.innerHTML = hour + ":" + min + ":" + sec + amOrFm;
}
setInterval(displayTime, 1000);

document.addEventListener("DOMContentLoaded", function () {
  const draggableElement = document.getElementById("cloc");
  let offsetX,
    offsetY,
    isDragging = false;

  // Event listeners for mouse/touch events
  draggableElement.addEventListener("mousedown", startDrag);
  draggableElement.addEventListener("touchstart", startDrag);

  document.addEventListener("mousemove", drag);
  document.addEventListener("touchmove", drag);

  document.addEventListener("mouseup", endDrag);
  document.addEventListener("touchend", endDrag);

  function startDrag(e) {
    e.preventDefault();
    isDragging = true;

    // Set initial mouse/touch position
    const event = e.touches ? e.touches[0] : e;
    offsetX = event.clientX - draggableElement.getBoundingClientRect().left;
    offsetY = event.clientY - draggableElement.getBoundingClientRect().top;

    // Add class for styling or additional behavior during drag
    draggableElement.classList.add("dragging");
  }

  function drag(e) {
    if (!isDragging) return;

    // Update element position based on mouse/touch movement
    const event = e.touches ? e.touches[0] : e;
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;

    // Set new element position
    draggableElement.style.left = x + "px";
    draggableElement.style.top = y + "px";
  }

  function endDrag() {
    isDragging = false;

    // Remove class added during drag
    draggableElement.classList.remove("dragging");
  }
});

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

const uniqId = () => {
  const uniq = "id" + new Date().getTime();
  return uniq;
};

const setData = (obj) => {
  obj.id = uniqId();
  states.push({ ...obj });
  let temp = JSON.stringify(states);
  localStorage.setItem("keyToDo", temp);

  location.reload();

  render();
};

let myObject = () => {
  (title.value = ""),
    (description.value = ""),
    (status2.value = "To-do"),
    (Priority.value = "low");
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
  const { title, description, status, id, Priority } = prop;

  return `<div class="ass1" id="ass${id}" draggable="true">
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

  response?.forEach((el) => {
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

let drags = document.querySelectorAll(".ass1");
let layout = document.querySelectorAll(".done");
let check = document.getElementById("in");

drags.forEach((el) => {
  el.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("todo", event.target.id);

    // event.dataTransfer.setData("box", event.target.id);
    // console.log(box);
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
let temp;
todoCard.addEventListener("drop", (event) => {
  event.preventDefault();
  temp = event.dataTransfer.getData("todo");
  const draggedEl = document.getElementById(temp);
  todoMiddle.appendChild(draggedEl);
});

progcard.addEventListener("drop", (event) => {
  event.preventDefault();
  temp = event.dataTransfer.getData("todo");
  const draggedprog = document.getElementById(temp);

  inpMiddle.appendChild(draggedprog);
});

stuckcard.addEventListener("drop", (event) => {
  event.preventDefault();
  temp = event.dataTransfer.getData("todo");
  const draggedstck = document.getElementById(temp);
  stuckMiddle.appendChild(draggedstck);
});

donecard.addEventListener("drop", (event) => {
  event.preventDefault();
  temp = event.dataTransfer.getData("todo");
  const draggeddone = document.getElementById(temp);
  doneMiddle.appendChild(draggeddone);
});
let drags1 = document.getElementsByClassName("ass1")[0];
console.log(drags1);
function chec(event) {
  event.forEach((el) => {
    el.dataTransfer.setData("todos", el.target.id);
  });
}

check.addEventListener("click", (event) => {
  chec(drags1);
  temp = event.dataTransfer.getData("todos");
  const draggedstck = document.getElementById(temp);
  stuckMiddle.appendChild(draggedstck);
});
const box = document.querySelectorAll(".done");

const findCount = () => {
  box.forEach((el) => {
    const tasks = el.querySelectorAll(".ass1");

    const taskCount = el.getElementsByClassName("coun")[0];

    taskCount.innerHTML = tasks.length;
  });
};
findCount();
