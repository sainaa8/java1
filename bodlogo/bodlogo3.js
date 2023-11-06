const a = 1;
const b = 7;
const c = 2;
if (c > b && b > a) {
  console.log("true");
} else {
  console.log("false");
}

const num1 = 6;
const num2 = 9;
const num3 = 8;

if (num3 > num2 && num3 > num1) {
  console.log(num3);
} else if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
}

const nm1 = 3;
const nm2 = 8;
const nm3 = 1;
if (nm1 > nm2 > nm3) {
  console.log(nm1, nm2, nm3);
} else if (nm1 > nm3 > nm2) {
  console.log(nm1, nm3, nm2);
} else if (nm2 > nm1 > nm3) {
  console.log(nm2, nm1, nm3);
} else if (nm2 > nm3 > nm1) {
  console.log(nm2, nm3, nm1);
} else if (nm3 > nm2 > nm1) {
  console.log(nm3, nm2, nm1);
} else {
  console.log(nm3, nm1, nm2);
}
