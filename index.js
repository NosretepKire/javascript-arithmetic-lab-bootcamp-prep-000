function add(a, b) {
  return a+b;
}
function subtract(a, b) {
  return a-b;
}
function multiply(a, b) {
  return a*b;
}
function divide(a, b) {
  return a/b;
}
function inc(n) {
  return ++n;
}
function dec(n) {
  return --n;
}
function makeInt(n) {
  return parseInt(n, 10) 
}
function preserveDecimal(n) {
  return preserves n's decimals (it parses n as a floating point number) and returns the parsed number: