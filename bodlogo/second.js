const num1_input = document.getElementById("num1");
const num2_input = document.getElementById("num2");
// const equal_btn = document.getElementById("equal");
const result = document.getElementById("result");

const sumt_btn = document.getElementById("summ");
const ylgawar_btn = document.getElementById("difference");
const urjwer_btn = document.getElementById("urjih");
const huwaah_btn = document.getElementById("huwaah");
const modul_btn = document.getElementById("modul");
//numbers
const one_btn = document.getElementById("one");
const two_btn = document.getElementById("two");
const three_btn = document.getElementById("three");
const four_btn = document.getElementById("four");
const five_btn = document.getElementById("five");
const six_btn = document.getElementById("six");
const seven_btn = document.getElementById("seven");
const eight_btn = document.getElementById("eight");
const nine_btn = document.getElementById("nine");
const zero_btn = document.getElementById("zero");
const dot_btn = document.getElementById("dot");
const reset_btn = document.getElementById("c");

let num1;
let num2;
let operator;
let kep;
let neg;
one_btn.addEventListener("click", (event) => {
  num1_input.value += "1";
});
// te_btn.addEventListener("click", (event) => {
//   num2_input.innerHTML = num1_input.value;
// });
// one_btn.addEventListener("click", (event) => {
//   num1_input.value += "1";
// });

// function Multiply(number1, number2) {
//   let result = number1 * number2;
//   return result;
// }
// function Suma(number1, number2) {
//   let niilber = number1 + number2;
//   return niilber;
// }
// function has(number1, number2) {
//   let ylgawr = number1 - number2;
//   return ylgawr;
// }
// function huwaah(number1, number2) {
//   let noogdwor = number1 / number2;
//   return noogdwor;
// }
// function modul(number1, number2) {
//   let mod = number1 % number2;
//   return mod;
// }

sumt_btn.addEventListener("click", (event) => {
  operator = "nemeh";
  let ng = num1_input.value;
  num2_input.value = ng;
  num1_input.value = "";
});
ylgawar_btn.addEventListener("click", (event) => {
  operator = "hasah";
});
urjwer_btn.addEventListener("click", (event) => {
  operator = "urjih";
});
huwaah_btn.addEventListener("click", (event) => {
  operator = "huwaah";
});
modul_btn.addEventListener("click", (event) => {
  operator = "moduld";
});

num1_input.addEventListener("change", (event) => {
  num1 = parseFloat(event.target.value);
});

num2_input.addEventListener("change", (event) => {
  num2 = parseFloat(event.target.value);
});

const uildel = () => {
  switch (operator) {
    case "nemeh":
      kep = num1 + num2;
      break;
    case "hasah":
      kep = num1 - num2;
      break;
    case "urjih":
      kep = num1 * num2;
      break;
    case "huwaah":
      kep = num1 / num2;
      break;
    case "moduld":
      kep = num1 % num2;
      break;
  }
  result.value = kep;
};

// tentsuu_btn.addEventListener("click", () => {
//   if (
//     sumt_btn.addEventListener("click", () => {
//       let niilber = Suma(num1, num2);
//       result.innerHTML = niilber;
//     })
//   });

//       let result1 = Multiply(num1, num2);
//       result.innerHTML = result1;
//     }
//    (action_in.value == "+") {
//   }
//   if (action_in.value == "-") {
//     let h = has(num1, num2);
//     result.innerHTML = h;
//   }
//   if (action_in.value == "/") {
//     let noogdwr = huwaah(num1, num2);
//     result.innerHTML = noogdwr;
//   }
//   if (action_in.value == "%") {
//     let modd = modul(num1, num2);
//     result.innerHTML = modd;
//   }
// });
