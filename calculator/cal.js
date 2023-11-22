const deed = document.getElementById("deed");
const ddeed = document.getElementById("ddeed");
const AC = document.getElementById("AC");
const Sum = document.getElementById("sum");
const modul = document.getElementById("modul");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const huwaah = document.getElementById("huwaah");
const urjih = document.getElementById("urjih");
const hasah = document.getElementById("hasah");
const nemeh = document.getElementById("nemeh");
const tentsuu = document.getElementById("tentsuu");
const result = document.getElementById("result");
one.addEventListener("click", () => {
  deed.value += "1";
});
two.addEventListener("click", () => {
  deed.value += "2";
});
three.addEventListener("click", () => {
  deed.value += "3";
});
four.addEventListener("click", () => {
  deed.value += "4";
});
five.addEventListener("click", () => {
  deed.value += "5";
});
six.addEventListener("click", () => {
  deed.value += "6";
});
seven.addEventListener("click", () => {
  deed.value += "7";
});
eight.addEventListener("click", () => {
  deed.value += "8";
});
nine.addEventListener("click", () => {
  deed.value += "9";
});
AC.addEventListener("click", () => {
  deed.value = "";
  ddeed.value = "";
});
zero.addEventListener("click", () => {
  deed.value += "0";
});
dot.addEventListener("click", () => {
  deed.value += ".";
});

// copy
let num1 = "";

let num2 = "";
let operator;
let kep;

//
// nemeh.addEventListener("click", () => {
//   operator = "nemeh";
//   let num2 = deed.value;
//   ddeed.value = num2;
//   deed.value = num1;

//   hasah.addEventListener("click", (event) => {
//     operator = "hasah";
//   });
//   urjih.addEventListener("click", (event) => {
//     operator = "urjih";
//   });
//   huwaah.addEventListener("click", (event) => {
//     operator = "huwaah";
//   });
//   modul.addEventListener("click", (event) => {
//     operator = "moduld";
//   });

//   deed.addEventListener("change", (event) => {
//     num1 = parseFloat(event.target.value);
//   });

//   ddeed.addEventListener("change", (event) => {
//     num2 = parseFloat(event.target.value);
//   });

//   //   a = "3"
//   //   b = "6"

//   //   sum = parseFloat(a) + parseFloat(b);

//   //   let ng = num1_input.value;
//   //   num2_input.value = ng;
//   //   num1_input.value = "";
// });

// const uildel = () => {
//   switch (operator) {
//     case "nemeh":
//       kep = num1 + num2;

//       break;
//     case "hasah":
//       kep = num1 - num2;
//       break;
//     case "urjih":
//       kep = num1 * num2;
//       break;
//     case "huwaah":
//       kep = num1 / num2;
//       break;
//     case "moduld":
//       kep = num1 % num2;
//       break;
//   }

//   deed.value = "";
//   ddeed.value = "";
//   result.innerHTML = kep;
// };
