const input = document.getElementById("deed");
const clear_btn = document.getElementById("AC");
const negative = document.getElementById("sum");
const button_percent = document.getElementById("modul");
const button_division = document.getElementById("huwaah");
const button_7 = document.getElementById("seven");
const button_8 = document.getElementById("eight");
const button_9 = document.getElementById("nine");
const button_multi = document.getElementById("urjih");
const button_4 = document.getElementById("four");
const button_5 = document.getElementById("five");
const button_6 = document.getElementById("six");
const button_sub = document.getElementById("hasah");
const button_1 = document.getElementById("one");
const button_2 = document.getElementById("two");
const button_3 = document.getElementById("three");
const button_add = document.getElementById("nemeh");
const button_0 = document.getElementById("zero");
const button_decimal = document.getElementById("dot");
const button_equal = document.getElementById("uildel");

//
let result = "";
let clickednumbers = "";
let operator = "";
let isOperatorClicked = false;

//
const whenNumberClicked = (whatNumber) => {
  operatorafterNumber();
  if (input.value == "0") {
    input.value = whatNumber;
  } else {
    input.value = input.value + whatNumber;
  }
};
button_0.addEventListener("click", () => {
  whenNumberClicked("0");
});

button_1.addEventListener("click", () => {
  whenNumberClicked("1");
});
button_2.addEventListener("click", () => {
  whenNumberClicked("2");
});
button_3.addEventListener("click", () => {
  whenNumberClicked("3");
});
button_4.addEventListener("click", () => {
  whenNumberClicked("4");
});
//
button_add.addEventListener("click", (whatOperator) => {
  operator = whatOperator;
  clickednumbers = input.value;
  isOperatorClicked = true;
});
const operatorafterNumber = () => {
  if (isOperatorClicked === true) {
    input.value = "0";
    isOperatorClicked === false;
  }
};
clear_btn.addEventListener("click",()=>{
    
})

