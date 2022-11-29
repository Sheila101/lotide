//Function Implemntation - eqArray
//How to comapre using the 'every' function?
const eqArrays = (arr1, arr2) => {
  //check to make sure the arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    //compare each element of both the arrays
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
};

//Fucntion implementation - assertArraysEqual
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`${arr1} is equal to ${arr2}`);
  } else {
    console.log(`${arr1} is not equal to ${arr2}`);
  }
};

//Function Implementation - takeUntil
let array = [2, 4, 6, 8, 10, 3, 5, 7, 9, 11];

const takeUntil = function (array, callback) {
  //callback - return the even values
  let newArray = [];
  for (let item of array) {
    if (callback(item)) {
      return newArray;
    }
    //if even, keep pushing the numbers into the array
    newArray.push(item);
  }
  console.log(item);
  return newArray;
};

//Callback Function - to break out of loop when it encounters an odd number
const callBackFunction = (item) => {
  return item % 2 !== 0;
};

//Test
assertArraysEqual(takeUntil([2, 4, 6, 8, 10, 3, 5, 7, 9, 11], callBackFunction),
  [2, 4, 6, 8, 10]
);
