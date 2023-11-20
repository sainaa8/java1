const num1_input = document.getElementById("num1");
const num2_input = document.getElementById("num2");
const equal_btn = document.getElementById("equal");
const result = document.getElementById("result");
const sumt_btn = document.getElementById("summ");

function Multiply(number1, number2) {
  let result = number1 * number2;
  return result;
}
function Suma(number1, number2) {
  let niilber = number1 + number2;
  return niilber;
}
let num1;
let num2;

num1_input.addEventListener("change", (event) => {
  num1 = parseFloat(event.target.value);
});

num2_input.addEventListener("change", (event) => {
  num2 = parseFloat(event.target.value);
});

equal_btn.addEventListener("click", () => {
  let result1 = Multiply(num1, num2);
  result.innerHTML = result1;
});
sumt_btn.addEventListener("click", () => {
  let niilber = Suma(num1, num2);
  result.innerHTML = niilber;
});
