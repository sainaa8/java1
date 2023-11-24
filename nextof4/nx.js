const left = document.getElementById("left");
const right = document.getElementById("right");
const reset = document.getElementById("reset");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
let counter = 50;
let counter2 = 50;
let pasd = 500;
let rpasd = 500;
blue.style = `width:${pasd}px`;
//blue.style = `width:500px;
red.style = `width:${pasd}px`;
function myFunction() {
  alert("game over, blue win");
}
function funcreset() {
  counter = 50;
  counter2 = 50;
  pasd = 500;
  rpasd = 500;

  blue.innerHTML = blue.style = `width:${pasd}px`;
  red.innerHTML = red.style = `width:${rpasd}px`;

  left.innerHTML = counter;
  right.innerHTML = counter;
}
function myFun() {
  alert("game over, red win");
}
reset.addEventListener("click", () => {
  funcreset();
});
blue.addEventListener("click", () => {
  counter2--;
  left.innerHTML = counter2;
  counter++;
  right.innerHTML = counter;
  blue.style = `width:${(pasd += 10)}px`;
  red.style = `width:${(rpasd = rpasd - 10)}px`;

  console.log(pasd);
  if (counter === 101) {
    myFunction();
    funcreset();
  }
});
red.addEventListener("click", () => {
  counter2++;
  left.innerHTML = counter2;
  counter--;
  right.innerHTML = counter;
  red.style = `width:${(rpasd += 10)}px`;
  blue.style = `width:${(pasd = pasd - 10)}px`;
  if (counter2 == 101) {
    myFun();
    funcreset();
  }
});

document.addEventListener("keypress", logKey);

function logKey(e) {
  if (e.code === "KeyA") {
    // red_sqr.addEvexxntListener("click", () => {
    counter2++;
    left.innerHTML = counter2;
    counter--;
    right.innerHTML = counter;
    red.style = `width:${(rpasd += 10)}px`;
    blue.style = `width:${(pasd = pasd - 10)}px`;
    if (counter2 == 101) {
      myFun();
      funcreset();
    }
    // });
  } else if (e.code === "KeyL") {
    // blue_sqr.addEventListener("click", () => {.

    //
    counter2--;
    left.innerHTML = counter2;
    counter++;
    right.innerHTML = counter;
    blue.style = `width:${(pasd += 10)}px`;
    red.style = `width:${(rpasd = rpasd - 10)}px`;

    console.log(pasd);
    if (counter === 101) {
      myFunction();
      funcreset();
    }
  } else if (e.code === "KeyR") {
    funcreset();
  }
  console.log(e.code);
}
