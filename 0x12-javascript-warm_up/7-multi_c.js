#!/usr/bin/node
const numberofTimes = parseInt(process.argv[2]);
const wordToPrint = 'C is fun';
if (isNaN(numberofTimes)) {
  console.log('Missing number of occurences');
} else {
  for (let i = 0; i < numberofTimes; i++) {
    console.log(wordToPrint);
  }
}
