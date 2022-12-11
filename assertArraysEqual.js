const eqArrays = require('./eqArrays');

//Fucntion implementation - assertArraysEqual
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`${arr1} is equal to ${arr2}`);
  } else {
    console.log(`${arr1} is not equal to ${arr2}`);
  }
};
module.exports = assertArraysEqual;


