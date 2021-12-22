#!/usr/bin/node
const firstArglens = process.argv[2];
let output;
if (firstArglens === undefined) {
  console.log('No argument');
} else {
  output = firstArglens;
  console.log(output);
}
