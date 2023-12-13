const a = 11;
const b = 7;
const c = 4;
if (a > b && a > c && b > c) {
  console.log(a, b, c);
} else if (a > b && a > c && c > b) {
  console.log(a, c, b);
} else if (b > a && b > c && a > c) {
  console.log(b, a, c);
} else if (b > a && b > c && c > a) {
  console.log(b, c, a);
} else if (c > a && c > b && b > a) {
  console.log(c, b, a);
} else {
  c > a && c > b && a > b;
}
