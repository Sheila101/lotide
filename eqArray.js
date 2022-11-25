//Function Implemntation - Assert Equal
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.assert(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//How to comapre using the 'every' function?
const eqArrays = (arr1, arr2) => {

  //check to make sure the arrays have the same length
  if(arr1.lenght != arr2.lenght){
    return false
  }else {
    //compare each element of both the arrays
    for (let i = 0; i < arr1.lenght; i++) {
      if (arr1[i] === arr2[i]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

//Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //true 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); //false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); //true 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); //false
assertEqual(eqArrays([1, 2, 3,5], [1, 2, 3]), false); //false 
