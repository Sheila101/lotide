//Function Implemntation - eqArray
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//Fucntion implementation - middle
const middle = function (array) {
  if (array.length <= 2) {
    return [];
  }
  const returnedNum = Math.floor(array.length / 2);
  if (array.length % 2 !== 0) {
    return [array[returnedNum]];
  } else {
    return [array[returnedNum - 1], array[returnedNum]];
  }
};

module.exports = middle;


