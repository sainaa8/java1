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
const uild = document.getElementById("uildel");
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
// let operator;
// let kep;

//
nemeh.addEventListener("click", () => {
  //   operator = "nemeh";
  // deed.value += "+";
  let num2 = deed.value;
  ddeed.value = num2;
  deed.value = "";
});
urjih.addEventListener("click", () => {
  let num2 = deed.value;
  ddeed.value = num2;
  deed.value = num1;
});

function Nmh(number1, number2) {
  let rec = number1 + number2;
  return rec;
}

//

deed.addEventListener("change", (event) => {
  num1 = parseFloat(event.target.value);
});

ddeed.addEventListener("change", (event) => {
  num2 = parseFloat(event.target.value);
});
uild.addEventListener("click", () => {
  num1 = deed.value;
  let result1 = Nmh(num1, num2);
  result.innerHTML = result1;
});

/////////                                        ////////////////////////
//   a = "3"
//   b = "6"

//   sum = parseFloat(a) + parseFloat(b);

//   let ng = num1_input.value;
//   num2_input.value = ng;
//   num1_input.value = "";

//////////////////////////////////////////                       /////////
// uild.addEventListener("click", () => {
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
// });
