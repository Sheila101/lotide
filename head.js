const assertEqual = require('./assertEqual');

//Function Implemntation - Getting the head
const head = function (actual, expected) {
  //Set "expected" with the first element of the "actual" array
  expected = actual.shift();
  console.log(expected);
  //If the array length is 0
  if (actual.length === 0) {
    return 'undefinded';
  }
  return expected;
};

module.exports = head;
