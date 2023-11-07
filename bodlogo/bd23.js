const a = 9,
  b = 3,
  c = 2,
  d = 4;
let mult = 1;
let helper = 0;
if (a < 5) {
  (mult = mult * a), helper++;
}
if (b < 5) {
  (mult = mult * b), helper++;
}
if (c < 5) {
  (mult = mult * c), helper++;
}
if (d < 5) {
  (mult = mult * d), helper++;
}
if (helper == 0) {
  (mult = 0), console.log(mult);
} else {
  console.log(mult);
}
