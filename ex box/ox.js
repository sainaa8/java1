// const one = document.getElementById("1");
// const two = document.getElementById("2");
// const three = document.getElementById("3");
// const four = document.getElementById("4");
// const five = document.getElementById("5");
// const six = document.getElementById("6");
// const seven = document.getElementById("7");
// const eight = document.getElementById("8");
// const nine = document.getElementById("9");

const array = [1, 2, 3, 4, 5];
const element1 = 3;
const element2 = 4;

const index1 = array.indexOf(element1);
const index2 = array.indexOf(element2);

if (index1 !== -1 && index2 !== -1 && index1 === index2) {
  console.log(
    `${element1} and ${element2} are at the same position in the array.`
  );
} else {
  console.log(
    `${element1} and ${element2} are not at the same position in the array.`
  );
}
