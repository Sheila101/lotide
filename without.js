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

//Function implementation - without
const without = function(sourceArr, itemsToRemoveArr) {
  //return elements from source that are not pesent in itemsToRemoveArr - original array not modified so return a new array
  let compareArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    if (!itemsToRemoveArr.includes(sourceArr[i])) {
      compareArr.push(sourceArr[i]);
    }
  }
  return compareArr;
};

assertArraysEqual(without([1, 2, 3], [1]),[2,3]); // => [2, 3]
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']); // => ["1", "2"]
assertArraysEqual(without(['dog', 'cat', 'milk'], ['dog', 'cat', 'cow']), ['milk']); // => ["milk"]
