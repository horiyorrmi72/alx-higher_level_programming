#!/usr/bin/node
const printNumber = parseInt(process.argv[2]);
if (isNaN(printNumber)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + printNumber);
}
