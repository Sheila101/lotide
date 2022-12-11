const assertEqual = require('./assertEqual');

//Function Implementation - Getting the tail
// Created a new array to save items from the original array, populated this array by using the push method
const tail = function (actual) {
  let newArray = [];
  for (let i = 1; i < actual.length; i++) {
    newArray.push(actual[i]);
    //expected += actual[i];
    //console.log(expected);
    console.log(newArray);
  }
  return newArray;
};

module.exports = tail;
