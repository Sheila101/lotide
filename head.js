//Function Implemntation - Assert Equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.assert(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function Implemntation - Getting the head
const head = function(actual, expected) {
  //Set "expected" with the first element of the "actual" array
  expected = actual.shift();
  console.log(expected);
  //If the array length is 0
  if (actual.length === 0) {
    return 'undefinded';
  }
  return expected;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
