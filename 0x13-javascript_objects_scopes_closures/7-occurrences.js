#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  let timesOccur = 0;
  list.forEach(element => {
    if (element === searchElement) timesOccur++;
  });
  return timesOccur;
};
