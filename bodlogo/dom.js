// const htmlBody = document.getElementsByTagName("body")[0];
// const newH1Element = document.createElement("h1");
// htmlBody.appendChild(newH1Element);
// // newH1Element.innerHTML = "Hi i'm created by create element function";
// let changedText = "";
// const printChanges = (event) => {
//   changedText = event.target.value;
// };
// const logger = () => {
//   newH1Element.innerHTML = changedText;
//   // onload();
// };
// newH1Element.innerHTML = "HELLO JS";
// const sayHelloWhenMouseOverSomething = () => {
//   console.log("Hello World");
// };
// newH1Element.onmouseover = sayHelloWhenMouseOverSomething;
// newH1Element.onmouseout = sayHelloWhenMouseOverSomething;
// const htmlbody = document.getElementsByTagName("body")[0];
// const newH1Element = document.createElement("h1");
// htmlbody.appendChild(newH1Element);
// newH1Element.innerHTML = "hello js";

const plusButton = document.getElementById("plus_button");
const minusButton = document.getElementById("minus_button");
const input = document.getElementById("input");
let counter = parseInt(input.value);
input.value = counter;
const adder = (param) => {
  param = param + 1;
  return param;
};
const reducer = (param) => {
  param = param - 1;
  return param;
};
const logger = () => {
  console.log(counter);
};
plusButton.addEventListener("click", (event) => {
  const result = adder(counter);
  counter = result;
  input.value = result;
});
minusButton.addEventListener("click", () => {
  const result = reducer(counter);
  counter = result;
  input.value = result;
});
input.addEventListener("change", (event) => {
  counter = parseInt(event.target.value);
});
