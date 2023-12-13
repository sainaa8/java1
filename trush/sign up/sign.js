const FirstName = document.getElementById("one");
const lastName = document.getElementById("two");
const number = document.getElementById("number");
const pass = document.getElementById("pass");
const create = document.getElementById("bb");
const day = document.getElementById("day");
const monts = document.getElementById("month");
const year = document.getElementById("year");
const gender = document.getElementById("2");
const gen = document.getElementById("1");
const tmm = document.getElementById("bottom");

let temp = [];

create.addEventListener("click", (newTask) => {
  newTask = {
    FirstName: FirstName.value,
    lastName: lastName.value,
    number: number.value,
    pass: pass.value,
    birthday: [monts.value, day.value, year.value],
  };
  if (gender.checked) {
    newTask.gender = "female";
  } else if (gen.checked) {
    newTask.gender = "male";
  } else {
    newTask.gender = "";
  }

  temp.push(newTask);

  let dda = JSON.stringify(temp);

  localStorage.setItem("keyitem", dda);

  console.log(temp);
  const card = (prop) => {
    const { FirstName, lastName, number, pass, gender, birthday } = prop;
    return `<div>${FirstName}</div>
            <div>${lastName}</div>
            <div>${number}</div>
            <div>${pass}</div>
            <div>${gender}</div> 
            <div>${birthday}</div> 
            `;
  };
  const render = () => {
    const response = JSON.parse(localStorage.getItem("keyitem"));
    console.log(response);
    const newState = response[response.length - 1];
    const result = card(newState);
    tmm.innerHTML = result;
  };
  render();
});
