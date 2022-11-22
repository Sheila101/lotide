//Function Implemntation - Assert Equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.assert(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function Implementation - Getting the tail
// Created a new array to save items from the original array, populated this array by using the push method
const tail = function(actual) {
  let newArray = [];
  for (let i = 1; i < actual.length; i++) {
    newArray.push(actual[i]);
    //expected += actual[i];
    //console.log(expected);
    console.log(newArray);
  }
  return newArray;
};

//calling this to test
tail(["milk", "eggs", "sugar"]);
