const big = document.getElementById("bigOpac");

const addTask = document.getElementById("addTsk");

const addcard = document.querySelectorAll(".bottomOfDone");
const titleTA = document.getElementById("bottonOFtitle");
const descriptionTA = document.getElementById("bottonOFdescription");
const statusSO = document.getElementById("bottonOFStatus");

const PrioritySO = document.getElementById("bottonOFPriority");

const todoMiddle = document.getElementById("todo-middle");
const progMidle = document.getElementById("inp-middle");
const stuckMiddle = document.getElementById("stuck-middle");
const doneMiddle = document.getElementById("done-middle");

addcard.forEach((el) => {
  el.onclick = function () {
    big.style.display = "block";
  };
});
window.onclick = function (ev) {
  if (ev.target == big) {
    big.style.display = "none";
  }
};
let states = [];
states = JSON.parse(localStorage.getItem("keyToDo"));

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
  states.push(obj);

  let temp = JSON.stringify(states);

  localStorage.setItem("keytodo", temp);
  location.reload();
  render();
};
let myObject = () => {
  (titleTA.value = ""),
    (descriptionTA.value = ""),
    (statusSO.value = "To-do"),
    (PrioritySO.value = "low");
};
addTask.addEventListener("click", () => {
  const newtask = {
    title: titleTA.value,
    description: descriptionTA.value,
    status: statusSO.value,
    Priority: PrioritySO.value,
  };

  setData(newtask);
  myObject();
  big.style.display = "none";
});
const card = (prop) => {
  const { title, description, status, id, Priority } = prop;

  return `<div class="as1" id="${id}" draggable="true">
            <div id="currect">
                <div id=${id} class="done-status" >${ status == "Done" ? `<div class="aa">&#10003</div>` : "&#10003"}</div>
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
  const response = JSON.parse(localStorage.getItem("keytodo"));

  todoMiddle.innerHTML = "";
  progMidle.innerHTML = "";
  stuckMiddle.innerHTML = "";
  doneMiddle.innerHTML = "";

  response?.forEach((el) => {
    const result = card(el);
    switch (el.status) {
      case "To-do":
        todoMiddle.innerHTML += result;
        break;

      case "In-progress":
        progMidle.innerHTML += result;
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
