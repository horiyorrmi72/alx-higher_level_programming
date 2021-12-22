#!/usr/bin/node
const value1 = parseInt(process.argv[2]);
const value2 = parseInt(process.argv[3]);
function add (a, b) {
  if (isNaN(value1) || isNaN(value2)) {
    return NaN;
  } else {
    return a + b;
  }
}
console.log(add(value1, value2));
