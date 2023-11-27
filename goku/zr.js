const prev = document.getElementById("prevous");
const image = document.getElementById("image");
const next = document.getElementById("next");

let img = [
  "./goku2.jpeg",
  "./veg.jpeg",
  "./vegeta.jpeg",
  "./goku3.jpeg",
  "./goku4.jpeg",
  "./goku5.jpeg",
  "./goku6.jpeg",
];

let index = 0;

function changer(aa) {
  image.src = img[aa];
}

prev.addEventListener("click", () => {
  if (index === 0) {
    index = img.length - 1;
  } else {
    index--;
  }
  changer(index);
});

next.addEventListener("click", () => {
  if (index === img.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changer(index);
});

/// appendChild  ///  draggable ///  appendchild
