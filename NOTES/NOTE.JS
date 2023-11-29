const image = document.querySelectorAll("img");
const allBox = document.querySelectorAll(".container div");
console.log(allBox);
let temp;
image.forEach((el) => {
  el.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("imgee", event.target.id);
  });
});

allBox.forEach((el) => {
  el.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  el.addEventListener("drop", (event) => {
    temp = event.dataTransfer.getData("imgee");
    const draggedEl = document.getElementById(temp);
    el.appendChild(draggedEl);
  });
});
