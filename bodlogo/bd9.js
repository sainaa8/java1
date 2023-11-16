let a = 1904;

if (a >= 1904 && a % 4 == 0 && (a % 400 == 0 || a % 100 !== 0)) {
  console.log(a, "ondor jil mon");
} else {
  console.log(a, "ondor jil bish");
}
