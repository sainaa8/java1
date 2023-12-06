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

  let temp = JSON.stringify(states);
  localStorage.setItem("keyToDo", temp);

  big.style.display = "none";
  render();
  myObject();
});

const card = (prop) => {
  const { title, description, status, Priority } = prop;

  return `<div id="ass">
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
  // local get
  const response = JSON.parse(localStorage.getItem("keyToDo"));
  // console.log(response);
  // response -> for foreach map -> el -> cacrd(el) -> result
  // middiv.innerhtl += result
  response.forEach((el) => {
    const result = card(el);

    // let ass = result;
    // containerr.innerHTML = containerr.innerHTML + ass;
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

let temp;
const allBox = document.getElementsByClassName("them");
console.log(allBox);
const alldrag = document.querySelectorAll(".them div");
alldrag.forEach((el) => {
  el.addEventListener("dragstart", (event) => {
    event.dataTransfer.setdata("drag", event.target.id);
  });
});

allBox.forEach((el) => {
  el.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  el.addEventListener("drop", (event) => {
    temp = event.dataTransfer.getData("drag");
    const drr = document.getElementById(temp);
    el.appendchild(drr);
  });
});
render();