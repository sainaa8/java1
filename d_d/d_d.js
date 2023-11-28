const draggableImages = document.querySelectorAll("img");
const droppableBox = document.querySelectorAll(".container1 div");
const turn = document.getElementById("turns");
const div1 = document.getElementById("divImg1");
// const div2 = document.getElementById("divImg2");
// const div3 = document.getElementById("divImg3");
// const div4 = document.getElementById("divImg4");
const Img1 = document.getElementById("Img1");
let temp;
let count = 0;
draggableImages.forEach((el) => {
  el.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("image", event.target.id);
  });
});
droppableBox.forEach((el) => {
  el.addEventListener("dragover", function (event) {
    if (event.target === this) {
      event.preventDefault();
    }
  });
  el.addEventListener("drop", (event) => {
    temp = event.dataTransfer.getData("image");
    const draggedElement = document.getElementById(temp);
    el.appendChild(draggedElement);
    count++;
    turn.innerHTML = count;
  });
});
if ((containsChild = div1.contains(Img1)));
{
  // console.log(containsChild);
  alert("u win");
}
// if ((containsChild = true)) {
//   alert("u win");
// }
// let stubAss = div1.includes("Img1");
// if ((stubAss = true)) {
//   console.log(stubAss);
// }
