#!/usr/bin/node
const Arglens = process.argv.length - 2;
if (Arglens === 0) {
  console.log('No argument');
} else if (Arglens === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
