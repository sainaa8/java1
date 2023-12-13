const input = document.getElementById("deed");
// const result = document.getElementById("result");
const clear = document.getElementById("AC");
const nega = document.getElementById("sum");
const module = document.getElementById("modul");
const devide = document.getElementById("huwaah");
const num7 = document.getElementById("seven");
const num8 = document.getElementById("eight");
const num9 = document.getElementById("nine");
const multi = document.getElementById("urjih");
const num4 = document.getElementById("four");
const num5 = document.getElementById("five");
const num6 = document.getElementById("six");
const minus = document.getElementById("hasah");
const num1 = document.getElementById("one");
const num2 = document.getElementById("two");
const num3 = document.getElementById("three");
const plus = document.getElementById("nemeh");
const num0 = document.getElementById("zero");
const point = document.getElementById("dot");
const equals = document.getElementById("uildel");

let numbers = "";
let operator = "";
let operatedClicked = false;
let hariu = 0;

input.addEventListener("change", (event) => {
  input.value = parseFloat(event.target.value);
});

point.addEventListener("click", () => {
  if (touchAdded === 1) {
    input.value = 0;
  } else {
    input.value = input.value + "0";
  }
});

num0.addEventListener("click", () => {
  if (operatedClicked === true) {
    input.value = "";
  }

  if (input.value === "" || input.value === "0") {
    input.value = "0";
  } else {
    input.value += "0";
  }
});

num1.addEventListener("click", () => {
  if (operatedClicked === true) {
    input.value = "";
  }

  if (input.value === "" || input.value === "0") {
    input.value = "1";
  } else {
    input.value += "1";
  }
});

num2.addEventListener("click", () => {
  if (operatedClicked === true) {
    input.value = "";
  }

  if (input.value === "" || input.value === "0") {
    input.value = "2";
  } else {
    input.value += "2";
  }
});

num3.addEventListener("click", () => {
  if (operatedClicked === true) {
    input.value = "";
  }

  if (input.value === "" || input.value === "0") {
    input.value = "3";
  } else {
    input.value += "3";
  }
});

num4.addEventListener("click", () => {
  if (operatedClicked === true) {
    input.value = "";
  }

  if (input.value === "" || input.value === "0") {
    input.value = "4";
  } else {
    input.value += "4";
  }
});

// num5.addEventListener("click", () => {
//   if (num != "") {
//     input.value = "5";
//     num = "";
//   } else {
//     input.value += "5";
//     num = "";
//   }
// });

// num6.addEventListener("click", () => {
//   if (num != "") {
//     input.value = "6";
//     num = "";
//   } else {
//     input.value += "6";
//     num = "";
//   }
// });
// num7.addEventListener("click", () => {
//   if (num != "") {
//     input.value = "7";
//     num = "";
//   } else {
//     input.value += "7";
//     num = "";
//   }
// });
// num8.addEventListener("click", () => {
//   if (num != "") {
//     input.value = "8";
//     num = "";
//   } else {
//     input.value += "8";
//     num = "";
//   }
// });
// num9.addEventListener("click", () => {
//   if (num != "") {
//     input.value = "9";
//     num = "";
//   } else {
//     input.value += "9";
//     num = "";
//   }
// });

plus.addEventListener("click", () => {
  operator = "+";
  operatedClicked = true;
  numbers = input.value;
});

module.addEventListener("click", () => {
  operator = "%";
  operatedClicked = true;
  numbers = input.value;
});

devide.addEventListener("click", () => {
  operator = "/";
  operatedClicked = true;
  numbers = input.value;
});

multi.addEventListener("click", () => {
  operator = "*";
  operatedClicked = true;
  numbers = input.value;
});
minus.addEventListener("click", () => {
  operator = "-";
  operatedClicked = true;
  numbers = input.value;
});

nega.addEventListener("click", () => {
  touchAdded = 1;
  input.value += "";
});

equals.addEventListener("click", () => {
  giveResult();
});

clear.addEventListener("click", () => {
  input.value = "0";
  numbers = "";
  operator = "";
  operatedClicked = false;
  hariu = "";
});

const giveResult = () => {
  switch (operator) {
    case "+":
      hariu = parseFloat(numbers) + parseFloat(input.value);
      break;
    case "+":
      hariu = parseFloat(numbers) + parseFloat(input.value);
      break;
    case "+":
      hariu = parseFloat(numbers) + parseFloat(input.value);
      break;
    case "+":
      hariu = parseFloat(numbers) + parseFloat(input.value);
      break;
    case "+":
      hariu = parseFloat(numbers) + parseFloat(input.value);
      break;
    case "+":
      hariu = parseFloat(numbers) + parseFloat(input.value);
      break;
  }
  input.value = hariu;
};
