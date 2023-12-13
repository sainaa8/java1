const a = 1;
const b = 3;
const c = 3.4;
const d = 7;
const e = 8.7;
let f = 0;
if (Number.isInteger(a)) {
  f = f + a;
}
if (Number.isInteger(b)) {
  f = f + b;
}
if (Number.isInteger(c)) {
  f = f + c;
}
if (Number.isInteger(d)) {
  f = f + d;
}
if (Number.isInteger(e)) {
  f = f + e;
}
console.log(f);
