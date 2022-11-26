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

//Test
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [ 4]
