// const one = document.getElementById("1");
// const two = document.getElementById("2");
// const three = document.getElementById("3");
// const four = document.getElementById("4");
// const five = document.getElementById("5");
// const six = document.getElementById("6");
// const seven = document.getElementById("7");
// const eight = document.getElementById("8");
// const nine = document.getElementById("9");

// const array = [1, 2, 3, 4, 5];
// const element1 = 3;
// const element2 = 4;

// const index1 = array.indexOf(element1);
// const index2 = array.indexOf(element2);

// if (index1 !== -1 && index2 !== -1 && index1 === index2) {
//   console.log(
//     `${element1} and ${element2} are at the same position in the array.`
//   );
// } else {
//   console.log(
//     `${element1} and ${element2} are not at the same position in the array.`
//   );
// }
const myArray = [
  { id: "INDENTIFICATION CARD" },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaRuRrEv3vECsWQ_Gq3kLFayXKw0fi_NYnA&usqp=CAU",
  },
  { name: "Vegeta" },
  { DOB: "prince of sayajin" },
  { IDno: "12334536" },
  { issued: "January 2011" },
  { expires: " Dcember 2013" },
  { Bname: "Vegeta" },
  { POS: "Maintenanse Services" },
];
const Container = document.getElementsByClassName("container")[0];
Container.style.display = "flex";
Container.style.justifyContent = "center";
Container.style.alignItems = "center";

console.log(Container);
//big one

const cardDiv = document.createElement("div");
cardDiv.style.width = "550px";
cardDiv.style.height = "360px";
// cardDiv.style.border = "1px solid black";
cardDiv.style.boxShadow = "2px 2px 30px 2px #888888";
cardDiv.style.overflow = "hidden";

cardDiv.style.borderRadius = "10px";
Container.appendChild(cardDiv);
// deed blue

const upperId = document.createElement("div");
myArray.forEach((el) => {
  if (el.id != "" && el.id != undefined) {
    upperId.innerHTML = el.id;
  }
});

cardDiv.appendChild(upperId);
upperId.style.width = "550px";
upperId.style.height = "80px";

upperId.style.fontSize = "40px";
upperId.style.display = "flex";
upperId.style.justifyContent = "center";
upperId.style.alignItems = "center";
upperId.style.fontFamily = "roboto";
upperId.style.color = "white";
upperId.style.backgroundColor = "blue";
// dood

const dood = document.createElement("div");
cardDiv.appendChild(dood);
dood.style.width = "550px";
dood.style.height = "260px";

dood.style.display = "flex";

/// letf of bottom
const leftDood = document.createElement("div");
dood.appendChild(leftDood);
leftDood.style.width = "200px";
leftDood.style.height = "260px";

//zurag
const upperImg = document.createElement("img");
leftDood.appendChild(upperImg);
// console.log(upperImg);

myArray.forEach((el) => {
  if (el.image != "" && el.image != undefined) {
    upperImg.src = el.image;
  }
});
upperImg.style.width = "160px";
upperImg.style.height = "220px";
upperImg.style.marginLeft = "27px";
upperImg.style.marginTop = "10px";
upperImg.style.border = "7px solid blue";
/// right of dood
const rightDood = document.createElement("div");
dood.appendChild(rightDood);
rightDood.style.width = "330px";
rightDood.style.height = "260px";
rightDood.style.border = "1px solid red";
