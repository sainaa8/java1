// let a = 0;
// for(let i =4, i =< 4, i ++){
//     a=a+3
// }
// for (let i = 0; i <= 28; i++) {
//   console.log("pinecone");
// }
// let a = 3;
// for (let i = 1; i <= 10; i++) {
//   console.log("3 x", i, "=", a * i);
// }

//22 hurtelh tooniii niilber
// let b = 0;
// for (let a = 1; a <= 22; a++) {
//   b = b + a;
//   console.log(b);
// }

//8iin bakterial
// let a = 8;
// let fact = 1;
// for (let i = 1; i <= 8; i++) {
//   fact = fact * i;
// }
// console.log(fact);

//5**9
// const too1 = 5;
// let too = 5;
// for (let a = 1; a <= 9; a++) {
//   too = too * too1;
//   console.log(too);
// }

//30 hurtelh sondgoi tooni niilber
// let counter = 0;
// for (let i = 1; i <= 30; i++) {
//   if (i % 2 !== 0) {
//     counter = counter + i;
//   }
//   console.log(counter);
// }

//100 hurtel tegsh toonii niilber
// let counter = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     counter = counter + i;
//   }
//   console.log(counter);
// }

//148 hurtel heden sondgoi too baigaa ve
// let counter = 0;
// for (let i = 1; i <= 148; i++) {
//   if (i % 2 == 1) {
//     counter = counter + 1;
//     console.log(counter, "dd");
//     console.log(i);
//   }
// }

//20 hurtelh tegsh tsipriig tool

// let counter = 0;
// for (let i = 0; i <= 290; i++) {
//   if (i % 2 == 0) {
//     counter = counter + 1;
//     console.log(counter, "dd");
//     console.log(i);
//   }
// }

//200 hurtelh tegsh toonii urjwer
// let a = 1;
// for (let i = 1; i <= 200; i++) {
//   if (i % 2 == 0) {
//     a = a * i;
//   }
// }
// console.log(a);

//200 hurtel sondgoi tooni urjwriig ol
// let a = 1;
// for (let i = 1; i <= 200; i++) {
//   if (i % 2 == 1) {
//     a = a * i;
//   }
// }
// console.log(a);
//ogogdson 2 toonii niilber
// const a = 23;
// b = 12;
// c = a + b;
// console.log(c);
// 3valjinii p ol
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// var numbers = [1, 2]; // sums to 10
// var Sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   Sum += numbers[i];
//   //   console.log(i);
//   console.log(Sum);
// }
// var numbers = [3, 4, 5];
// var p = 0;

// for (var i = 0; i < numbers.length; i++) {

// }

// p = numbers[0] + numbers[1] + numbers[2];
// console.log(p);
// var numbers = [6, 4];
// var p = 0;
// s = 0;
// s = numbers[0] * numbers[1];
// p = (numbers[0] + numbers[1]) * 2;
// console.log(s, p);

// var x = 1;
// y = 3 * x - 5;
// console.log(y);

//y=4x** - 3x +5
// var x = -2;
// y = 4(x) ** -3 + 5;
// console.log(y);

// let a = "4235";
// let p = a[3];
// console.log(p);

//suuliin tsipriig ol
// let a = "473";
// p = a[2];
// console.log(p);
//1 deh odr 0,5

////////////////////////////////////////////////////

// ogogdson toog ogsoh uruudah daraalald bich

//dugaariin hyzgaaralt

// let today = new Date();
// let day = today.getDay();

// let
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   default:
//     console.log("Iim udur alga");
// }

//daraa

///// ARRAY///////////

// const a = [1, 5, 8];
// let temporarey = a[0];
// a[0] = a.length - 1;
// a[a.lenght - 1] = temporarey;
// console.log(a);

//1. Өгөгдсөн n массивийн нийлбэрийг олж буцаа. (n = [1,5,7,9,2])
// let n = [1, 5, 7, 9, 2];
// let niilber = 0;
// for (let i = 0; i < n.length; i++) {
//   niilber = niilber + n[i];
// }
// console.log(niilber);

//2. Өгөгдсөн n массивийн дунджийг олж буцаа. (n = [1,5,7,9,2])
// let n = [1, 5, 6];
// let niilber = 0;
// let dundaj = 0;
// for (let i = 0; i < n.length; i++) {
//   niilber = niilber + n[i];
// }
// dundaj = niilber / n.length;
// console.log(dundaj);

//3. A болон B тоо өгөгдөв. А тооны B зэргийг давталт ашиглан олж буцаа.

// const a = 2;
// const b = 3;
// let sum = 0;

// for (let i = 0; i <= b; i++) {
//   sum = a ** b;
// }
// console.log(sum);
//4. Өгөгдсөн массивийн хамгийн их тоог олж буцаа. (n = [1,5,7,9,2])

// let n = [1, 5, 7, 9, 12];
// let max = 0;
// for (let i = 0; i < n.length; i++) {
//   if (max < n[i]) {
//     max = n[i];
//   }
// }
// console.log(max);
//5. Өгөгдсөн массивийн elementuudiig 2t huvaan butsaa. (n = [1,5,7,9,2])

// let n = [1, 5, 7, 9, 2];
// let b = 0;
// for (let i = 0; i < n.length; i++) {
//   b = n[i] / 2;
//   console.log(b);
// }

//1. Хүмүүсийн төрсөн онууд өгөгдсөн бол насуудыг бодож гарга. int birthYear = [1994, 1997, 2003, 1993, 2001]
// let Year = [1994, 1997, 2003, 1993, 2001];
// let nas = 0;
// for (let i = 0; i < Year.length; i++) {
//   nas = 2023 - Year[i];
//   console.log(nas);
// }

//2. Array -н бүх утгыг 2 дахин ихэсгэ. int a = [1, 2, 3, 4]

// let a = [1, 2, 3, 4];
// let urjver = 0;
// for (let i = 0; i < a.length; i++) {
//   urjver = 2 * a[i];
//   console.log(urjver);
// }

//3. Array-н тэгш элемэнтүүдийн тоог ол. element garaas avna. [1, 2, 3, 4]
// let n = [1, 2, 8, 4];
// let tegsh = 0;
// for (let i = 0; i < n.length; i++) {
//   if (n[i] % 2 == 0) {
//     tegsh = tegsh + 1;
//   }
// }
// console.log(tegsh);

//4. Array доторх анхны тоонуудыг хэвлэ. Element garaas avna.[1, 2, 3, 4, 0, 149, 214, 11]

// const a = [1, 2, 3, 4, 0, 149, 214, 11, 601];

// for (let i = 0; i < a.length; i++) {
//   if (
//     (((a[i] - 1) / 6) % 2 === 0 ||
//       ((a[i] + 1) / 6) % 2 === 0 ||
//       a[i] == 2 ||
//       a[i] == 3) &&
//     a[i] != 1
//   ) {
//     console.log(a[i]);
//   }
// }
//5. N ширхэг тоо агуулах массивын тэгш дугаартай тоог 2-т хувааж, сондгой дугаартай тоог 7-д хувааж тухайн элемэнтийн ноогдворыг  тухайн элемэнтийн байрлалд тавь. Хэрвээ N нь сондгой бол N тооны сүүлийн цифрийг нь 2-т хувааж ногдворыг нь тавина.
// const a = [1, 2, 3, 4, 0, 149, 214, 11, 601, 23, 23, 45, 67];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 == 0) {
//     a[i] = a[i] / 2;
//   } else if (a[i] % 2 != 0) {
//     a[i] = a[i] / 7;
//   }

//   // console.log(n[-1]);
//   // console.log(a[i]);
// }
// let a_num = a.length;
// // console.log(a_num);
// let a_last = a_num % 10;
// // console.log(a_last);
// if (a_num % 2 !== 0) {
//   a_last = a_last / 2;
//   a.push(a_last);
// }
// console.log(a);
// const a = [1, 2, 3, 4, 0, 149, 214, 11, 24, 51, 516, 731, 24];
// let lst = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 == 0) {
//     a[i] = a[i] / 2;
//   } else {
//     a[i] = a[i] / 7;
//   }
//   //   console.log(a[i]);
// }
// let a_num = a.length;
// // console.log(a_num);
// let a_last = a_num % 10;
// // console.log(a_last);

// if (a_num % 2 !== 0) {
//   a_last = a_last / 2;
//   a.push(a_last);
//   // console.log(a_last);
//   // console.log(a_last);
//   console.log(a[i]);
// }
// let a = [89, 2, 7, 1, 11, 0];
// // // let b = [2, 89, 1, 7, 0, 11];

// for (let i = 0; i < a.length; i++) {
//   for (let j = i; j < a.length; j++) {
//     let temp;
//     if (a[j] > a[i]) {
//       temp = a[j];
//       a[j] = a[i];
//       a[i] = temp;
//     }
//   }
// }
// console.log(a);
//1. Ямар нэгэн text өгөгдөхөд палиндром эсэхийг шалгана уу. text = "level"

// let a = "lal";
// let b = "";

// for (let i = a.length - 1; i >= 0; i--) {
//   b = b + a[i];
// }

// if (b == a) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//1. Ямар нэгэн text өгөгдөхөд палиндром эсэхийг шалгана уу. text = "level"
//2. Array dotor heden palindrom text baigaag tool. ["madam", "hello", "radar", "world"]

// let a = ["madam", "hello", "radar", "world"];
// let counter = 0;
// let c = "";
// let mm = "";
// console.log(a);
// for (let i = 0; i < a.length; i++) {
//   for (let j = a[i].length - 1; j >= 0; j--) {
//     c = c + a[i][j];

//     console.log(c);

//     if (c == a[i]) {
//       counter++;
//       break;
//     }
//   }
// }

// console.log(counter);

// if (b == a) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//3. Шүлэг өгөгдсөн бол хэдэн үсэг орсныг тоолно уу.
//I'm tired of being what you want me to be
//Feeling so faithless, lost under the surface
//Don't know what you're expecting of me
//Put under the pressure of walking in your shoes
// const shuleg =
//   "i'm tired of being what you want me to be feeling so faithless, lodt under the surfice don't know what you are expecting of me put under the pressure of walking in your";
// let counter = "0";
// console.log(shuleg[3]);
// for (let i = 0; i < shuleg.length; i++) {
//   if (shuleg[i] !== " ") counter++;
// }
// console.log(counter);
//4. Ugugdsun string dund tsipr baigaag esehiig shalga. "4life"

//1. Өгөгдсөн массивийн нийлбэрийг олж буцаа. [2,511,123,5]
// const a = [2, 1, 3, 5];
// let counter = 0;
// for (let i = 0; i < a.length; i++) {
//   counter += a[i];
//   console.log(counter);
//
// const num = [2, 1, 3, 5];
// function niilber(add) {
//   let a = 0;
//   for (let i = 0; i < num.length; i++) {
//     a += num[i];
//   }
//   console.log(a / add.length);
// }
// niilber(num);

//bodlogo1 ^

// const arr = [2, 511, 123, 5];
// function Niilber(num) {
//   let a = 0;
//   for (let i = 0; i < num.length; i++) {
//     a = a + num[i];
//   }
//   console.log(a);
//   console.log(a / num.length);
// }
// Niilber(arr);

//2. Өгөгдсөн массивийн дунджийг олж буцаа. [2,511,123,5]

// let FindAvg = (sum, len) => {
//   let avg = sum / len;
//   return avg;
// };

// console.log(FindSum(a));
// console.log(FindAvg(sum, a.length));

// console.log(dundaj);
//3. A болон B тоо өгөгдөв. А тооны B зэргийг давталт ашиглан олж буцаа. 12, 7
// const a = 3,
//   b = 2;
// let c = a;
// for (let i = 1; i < b; i++) {
//   c = c * a;
//   console.log(c);
// }
//bodlogo3

// let num1 = 3;
// let num2 = 2;
// let num3 = 1;

// function Power(a, b, c) {
//   for (let i = 0; i < b; i++) {
//     c *= a;
//   }
//   console.log(c);
// }
// Power(num1, num2, num3);

//4. Өгөгдсөн массивийн хамгийн их тоог олж буцаа. [2,511,123,5, 999, 9999, 99999]
// const a = [2, 511, 123, 5, 999, 9999, 99999];

// let max = 0;
// for (let i = 0; i < a.length; i++) {
//   if (max < a[i]) {
//     max = a[i];
//   }
//   console.log(max);
// }

// const numb = [2, 511, 123, 5, 999, 9999, 99999, 1000000];
// const dumb = [2, 4, 6, 8];

// function Maxim(numbers) {
//   let max = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (max < numbers[i]) {
//       max = numbers[i];
//     }
//   }
//   return max;
// }

// console.log(Maxim(dumb));
// console.log(Maxim(numb));

// a + b = sum    a=2; b=3
// const a = 2;
// const c = 1;
// const b = 3;

// let FindSum = (x1, x2, x3) => {
//   let sum = x1 + x2 + x3;
//   return sum;
// };

// console.log(FindSum(a, b, c));
// a b toonii urjweriig ol
// const a = 5,
//   b = 5;
// let urjwer = ()

//5. Өгөгдсөн string-ийн урвууг буцаа. (Hello -> olleH).
// const a = "hello";
// let rev = "";
// let urwuu = (array) => {
//   for (let i = array.length - 1; i >= 0; i--) {
//     rev += array[i];
//     return rev;

//   }
// };
// console.log(urwuu(a));

//6. Өгөгдсөн string-ийн тэмдэгт бүр давхардаж ороогүй эсэхийг шалга. (abcdea)

// const a = "abcdeb";
// for (let i = 0; i < a.length; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[i] == a[j]) {
//       console.log(a[i], "dawhardaj orson bn");
//     }
//   }
// }

//8. Array ashiglan пирамид ‘*’ ашиглан хэвлэ.

// {
// for (let i = 0; i < 5; i++) {
//   // Create an array to hold the elements for this row
//   let row = [];

//   // Add spaces to the array
//   for (let j = 0; j < 5 - i - 1; j++) {
//     row.push(" ");
//   }

//   // Add '*' characters to the array
//   for (let k = 0; k < 2 * i + 1; k++) {
//     row.push("*");
//   }

//   // Print the elements of the row
//   console.log(row.join(""));
// }

//9. Өгөгдсөн N тооны факториалыг олж буцаа. N = 12
// const n = 3;
// let a = 1;
// for (let i = 1; i <= n; i++) {
//   a = a * i;
//   console.log(a);
// }

//10. Өгөгдсөн N тоо хүртэлх бүх тэгш тоог хэвлэ. N = 290
// const n = 290;
// for (let i = 0; i <= 290; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
//11. Өгөгдсөн N тоо палиндром тоо эсэхийг шалгаад мөн бол true, биш бол false буцаа. 1990991
// const an = "12697621",
//   ass = "1221";
// let Sumt = (n) => {
//   let b = "";
//   for (let i = n.length - 1; i >= 0; i--) {
//     b = b + n[i];
//   }
//   if (n == b) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// Sumt(ass);

//12. Өгөгдсөн N тоо анхны тоо мөн эсэхийг шалгаад мөн бол true, биш бол false буцаа. 1990991
// let an = 18;
// let ass = 19;
// let Sumt = (num) => {
//   let id = 0;
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       id = id + 1;
//     }
//   }
//   if (id >= 1) {
//     console.log("bish");
//   } else {
//     console.log("anhnii too mon");
//   }
// };
// Sumt(ass);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const ann = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let SumT = (n) => {
//   let a = 9;
//   for (let i = 0; i < n.length; i++) {
//     for (let j = i + 1; j < n.length; j++) {
//       if (n[j] + n[i] == a) {
//         console.log(j, i);
//       }
//     }
//   }
// };

// SumT(arr);

//21. Өгөгдсөн массивийг өсөх эрэмбээр эрэмблэ. [1,6,3,8,5,0]

// let arr = ["lastname", "firstname", "fullname", "age", "isMarried"];
// let ob2 = {};
// let ob = {
//   lastname: "dorj",
//   firstname: "bat",
//   fullname: "this.firstname",
//   age: "23",
//   gender: "male",
//   isMarried: "no",
// };
// for (let i = 0; i < arr.length; i++) {
//   ob2[arr[i]] = ob[arr[i]];
// }
// console.log(ob2);
// console.log(`lastname is ${ob.lastname},firstname is ${ob.firstname}`);

// const text = "life";
// for (let i = 0; i < text.length; i++) {
//   if (isNaN(text[i])) {
//     console.log("there is");
//   } else {
//     console.log("there isnt");
//   }
// }

// let num = 0;

// for (let i = 0; i < text.length; i++) {
//   if (text[i] % 2 !== NaN) {
//     console.log(text, "too   bhgu bn ");
//   } else {
//     console.log(text, " too bn");
//   }
// }

//   if (isNaN(text[i])) {
//     console.log("there is");
//   } else {
//     console.log("there isnt");
//   }

// for (let i = 0; i < text.length; i++) {
//   if (4 == text[i]) {
//     console.log("theres");
//   } else {
//     console.log("dun");
//   }
// }

////////////////////////////////////////////////////////////////////// ////////////////////////    PUNCTION
const asd = "hello/ ikrudjfhello";
console.log(asd.replace("hello", "olleh"));


 ////trim hoyr taliin hooson zaig ustgadag
 //// "concat " niiluuldeg "+"
 //// toUpperCase  buh usgiig tom bolgone 
 /////   
 