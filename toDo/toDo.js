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
    location.reload();
  }
};

let states = [];
const firstGet = JSON.parse(localStorage.getItem("keyToDo"));

states = firstGet ? firstGet : [];

// let newTask = {
//   title: "",
//   description: "",
//   status: "To-do",
//   Priority: "high",
// };

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

let editActive = false;

addTask.addEventListener("click", () => {
  if (editActive) {
    edittedTask();
  } else {
    newTask = {
      title: title.value,
      description: description.value,
      status: status2.value,
      Priority: Priority.value,
    };

    setData(newTask);
    myObject();
    big.style.display = "none";
  }
});

const card = (prop) => {
  const { title, description, status, id, Priority } = prop;

  return `<div class="as1" id="${id}" draggable="true">
               <div id="currect">
                  <div id=${id} class="done-status" >${
    status == "Done" ? `<div class="aa">&#10003</div>` : "&#10003"
  }</div>
               </div>
               <div id="rightOfMiddle">
                  <div id="midOfMid"> 
                   <h2>${title}</h2>
                   <h2>${description}</h2>
                   <div id="leftOfMid"> ${Priority}</div>
   
                  </div>
                  <div class="atLast">
                     <div id="ex" onclick = "deleteBtn('${id}')"  >&#215;</div>
                     <div class="note" id="edit-${id}">&#9998;</div>
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
  const check = document.querySelectorAll(".done-status");
  check.forEach((el) => {
    el.addEventListener("click", (event) => {
      let parentId = el.parentElement.parentElement.id;

      const responseDn = JSON.parse(localStorage.getItem("keyToDo"));
      console.log(responseDn);
      const neueArr = responseDn.map((el) => {
        if (el.id === parentId) {
          return { ...el, status: "Done" };
        }
        return el;
      });
      localStorage.setItem("keyToDo", JSON.stringify(neueArr));

      render.call(this);
      location.reload();
    });
  });
};
render();

let drags = document.querySelectorAll(".as1");
let layout = document.querySelectorAll(".done");

drags.forEach((el) => {
  el.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("todo", event.target.id);
    console.log(event.target.id);
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
  temp = event.dataTransfer.getData("todo");

  const responseFromLS = JSON.parse(localStorage.getItem("keyToDo"));
  const newArr = responseFromLS.map((el) => {
    if (el.id === temp) {
      return { ...el, status: "To-do" };
    }
    return el;
  });
  localStorage.setItem("keyToDo", JSON.stringify(newArr));

  render();
  findCount();
  location.reload();
});

progcard.addEventListener("drop", (event) => {
  temp = event.dataTransfer.getData("todo");

  const responseFromLS = JSON.parse(localStorage.getItem("keyToDo"));
  const newArr = responseFromLS.map((el) => {
    if (el.id === temp) {
      return { ...el, status: "In-progress" };
    }
    return el;
  });
  localStorage.setItem("keyToDo", JSON.stringify(newArr));

  render();
  findCount();
  location.reload();
});

stuckcard.addEventListener("drop", (event) => {
  temp = event.dataTransfer.getData("todo");

  const responseFromLS = JSON.parse(localStorage.getItem("keyToDo"));
  const newArr = responseFromLS.map((el) => {
    if (el.id === temp) {
      return { ...el, status: "Stuck" };
    }
    return el;
  });
  localStorage.setItem("keyToDo", JSON.stringify(newArr));

  render();
  findCount();
  location.reload();
});

donecard.addEventListener("drop", (event) => {
  temp = event.dataTransfer.getData("todo");

  const responseFromLS = JSON.parse(localStorage.getItem("keyToDo"));
  const newArr = responseFromLS.map((el) => {
    if (el.id === temp) {
      return { ...el, status: "Done" };
    }
    return el;
  });
  localStorage.setItem("keyToDo", JSON.stringify(newArr));

  render();
  findCount();
  location.reload();
});

const box = document.querySelectorAll(".done");

const findCount = () => {
  box.forEach((el) => {
    const tasks = el.querySelectorAll(".as1");

    const taskCount = el.getElementsByClassName("coun")[0];

    taskCount.innerHTML = tasks.length;
  });
};
findCount();

function deleteBtn(id) {
  const newArr = states.filter((item) => {
    return item.id !== id;
  });
  states = localStorage.setItem("keyToDo", JSON.stringify(newArr))
    ? localStorage.setItem("keyToDo", JSON.stringify(newArr))
    : [];
  location.reload();
}
const edit = document.querySelectorAll(".note");

const addtask = document.getElementById("addtask");
const addTskBtn = document.getElementById("addTsk");

let edittedTaskID = "";

edit.forEach((element) => {
  element.addEventListener("click", (event) => {
    addtask.innerHTML = "Edit task";
    addTskBtn.innerHTML = "save";
    big.style.display = "block";
    editActive = true;
    const data = JSON.parse(localStorage.getItem("keyToDo"));
    const ID = event.target.id.split("-")[1];
    console.log(ID);
    edittedTaskID = ID;
    const task = data.find(({ id }) => id == ID);
    title.value = task.title;
    description.value = task.description;
    status2.value = task.status2;
    Priority.value = task.Priority;
  });
});

function edittedTask() {
  const data = JSON.parse(localStorage.getItem("keyToDo"));
  const task = data.find(({ id }) => id == edittedTaskID);
  const filter = data.filter(({ id }) => id != edittedTaskID);

  task.title = title.value;
  task.description = description.value;
  task.status = status2.value;
  task.Priority = Priority.value;
  editActive = false;

  localStorage.setItem("keyToDo", JSON.stringify([...filter, task]));
  big.style.display = "none";
  render();
  location.reload();
}
//L9S79Z3QB