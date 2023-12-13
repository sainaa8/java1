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
  {
    mainInfo: [
      { name: "Vegeta" },
      { DOB: "Sayajin" },
      { IDno: "12334536" },
      { issued: "January2011" },
      { expires: " Dcember2013" },
    ],
  },

  { Bname: "Vegeta" },
  { POS: "Maintenanse Services" },

  // { name: "Vegeta" },
  // { DOB: "Sayajin" },
  // { IDno: "12334536" },
  // { issued: "January2011" },
  // { expires: " Dcember2013" },
  // { Bname: "Vegeta" },
  // { POS: "Maintenanse Services" },
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
rightDood.style.width = "360px";
rightDood.style.height = "260px";
rightDood.style.marginTop = "13px";

rightDood.style.display = "flex";
rightDood.style.alignItems = "center";
rightDood.style.flexDirection = "column";
////

//const rigthSide = document.createElement("div");
//const lowerDiv = document.createElement("div");
const innerRight = document.createElement("div");
innerRight.style.height = "250px";
innerRight.style.width = "280px";
innerRight.style.gap = "3px";
innerRight.style.display = "flex";
innerRight.style.flexDirection = "column";

rightDood.appendChild(innerRight);
// lowerDiv.append( rigthSide);
// cardDiv.appendChild(lowerDiv);
// lowerDiv.style.display = "flex";
// const image = document.createElement("img");
// myInfoArray.forEach((el) => {
//   if (el.image && el.image != undefined) {
//     image.src = el.image;
//   }
// });
// leftSide.appendChild(image);
const mainInfo = myArray.filter((el) => {
  if (el.mainInfo && el.mainInfo != undefined) {
    return true;
  }
});
const realMainInfo = mainInfo[0].mainInfo;
const realMainKeys = realMainInfo.map((el) => {
  const result = Object.keys(el)[0];
  return result;
});
realMainKeys.forEach((el, index) => {
  const infoDiv = document.createElement("div");
  const infoDivLeftChild = document.createElement("div");
  const infoDivRigthChild = document.createElement("div");
  infoDiv.style.display = "flex";
  infoDiv.style.justifyContent = "space-between";
  infoDivLeftChild.innerHTML = `${el}:`;
  infoDivRigthChild.innerHTML = realMainInfo[index][el];
  infoDiv.append(infoDivLeftChild, infoDivRigthChild);
  innerRight.appendChild(infoDiv);
  infoDivLeftChild.style.fontSize = "18px";
  infoDivLeftChild.style.fontFamily = "roboto";
  infoDivLeftChild.style.color = "grey";

  //
  infoDivRigthChild.style.display = "flex";
  infoDivRigthChild.style.justifyContent = "flex-start";
  infoDivRigthChild.style.width = "170px";
  infoDivRigthChild.style.fontSize = "24px";
  infoDivRigthChild.style.fontFamily = "roboto";
});

///one
// const oneOfBottom = document.createElement("div");
// rightDood.appendChild(oneOfBottom);

// myArray.forEach((el) => {
//   if (el.name != "" && el.name != undefined) {
//     oneOfBottom.innerHTML = ` name:            ${el.name}`;
//   }
// });

// oneOfBottom.style.width = "280px";
// oneOfBottom.style.height = "30px";
// oneOfBottom.style.wordSpacing = "33px";
// oneOfBottom.style.fontSize = "20px";
// oneOfBottom.style.fontFamily = "roboto";
// oneOfBottom.style.display = "flex";
// oneOfBottom.style.justifyContent = "spaceAround";
// //two
// const twoOfBottom = document.createElement("div");
// rightDood.appendChild(twoOfBottom);

// myArray.forEach((el) => {
//   if (el.DOB != "" && el.DOB != undefined) {
//     twoOfBottom.innerHTML = ` D.O.B:            ${el.DOB}`;
//   }
// });

// twoOfBottom.style.width = "280px";
// twoOfBottom.style.height = "30px";
// twoOfBottom.style.wordSpacing = "34px";
// twoOfBottom.style.fontSize = "20px";
// twoOfBottom.style.fontFamily = "roboto";
// twoOfBottom.style.display = "flex";
// twoOfBottom.style.justifyContent = "spaceAround";
// //three
// const threeOfBottom = document.createElement("div");
// rightDood.appendChild(threeOfBottom);

// myArray.forEach((el) => {
//   if (el.IDno != "" && el.IDno != undefined) {
//     threeOfBottom.innerHTML = ` IDNo:            ${el.IDno}`;
//   }
// });

// threeOfBottom.style.width = "280px";
// threeOfBottom.style.height = "30px";
// threeOfBottom.style.wordSpacing = "35px";
// threeOfBottom.style.fontSize = "20px";
// threeOfBottom.style.fontFamily = "roboto";
// threeOfBottom.style.display = "flex";
// threeOfBottom.style.justifyContent = "spaceAround";
// //four

// const fourOfBottom = document.createElement("div");
// rightDood.appendChild(fourOfBottom);

// myArray.forEach((el) => {
//   if (el.issued != "" && el.issued != undefined) {
//     fourOfBottom.innerHTML = ` Issued:            ${el.issued}`;
//   }
// });

// fourOfBottom.style.width = "280px";
// fourOfBottom.style.height = "30px";
// fourOfBottom.style.wordSpacing = "20px";
// fourOfBottom.style.fontSize = "20px";
// fourOfBottom.style.fontFamily = "roboto";
// fourOfBottom.style.display = "flex";
// fourOfBottom.style.justifyContent = "spaceAround";
// // five;
// const fiveOfBottom = document.createElement("div");
// rightDood.appendChild(fiveOfBottom);

// myArray.forEach((el) => {
//   if (el.expires != "" && el.expires != undefined) {
//     fiveOfBottom.innerHTML = ` expires:            ${el.expires}`;
//   }
// });

// fiveOfBottom.style.width = "280px";
// fiveOfBottom.style.height = "30px";
// fiveOfBottom.style.wordSpacing = "16px";
// fiveOfBottom.style.fontSize = "20px";
// fiveOfBottom.style.fontFamily = "roboto";
// fiveOfBottom.style.display = "flex";
// fiveOfBottom.style.justifyContent = "spaceAround";
// //six
const sixOfBottom = document.createElement("div");
innerRight.appendChild(sixOfBottom);
myArray.forEach((el) => {
  if (el.Bname != "" && el.Bname != undefined) {
    sixOfBottom.innerHTML = el.Bname;
  }
});
sixOfBottom.style.fontSize = "40px";

sixOfBottom.style.width = "240px";
// sixOfBottom.style.height = "50px";

sixOfBottom.style.color = "blue";
sixOfBottom.style.marginLeft = "40px";

sixOfBottom.style.fontFamily = "roboto";
//seven
const sevenOfBottom = document.createElement("div");
innerRight.appendChild(sevenOfBottom);
myArray.forEach((el) => {
  if (el.POS != "" && el.POS != undefined) {
    sevenOfBottom.innerHTML = el.POS;
  }
});
sevenOfBottom.style.fontSize = "20px";

sevenOfBottom.style.width = "280px";
// sevenOfBottom.style.height = "30px";

sevenOfBottom.style.fontFamily = "roboto";
