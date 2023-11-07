const a = 11,
  b = 9,
  c = 4,
  d = 3,
  e = 3,
  f = 5;
let mult = 1;
let helper = 0;
if (a > 5) {
  (mult = mult * a), helper++;
}
if (b > 5) {
  (mult = mult * b), helper++;
}
if (c > 5) {
  (mult = mult * c), helper++;
}
if (d > 5) {
  (mult = mult * d), helper++;
}
if (e > 5) {
  (mult = mult * e), helper++;
}
if (f > 5) {
  (mult = mult * f), helper++;
}
if (helper == 0) {
  (mult = 0), console.log(mult);
} else {
  console.log(mult);
}
