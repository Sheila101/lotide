//Function Implemntation - Assert Equal
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.assert(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//Function Implementation - map
const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    results.push(callback(item)); //returns a new array - that's why we have defined this line here
  }
  console.log(results); 
  return results;
};

//Callback Function
const callBackFunction = item => item[0]; 

//Test
assertEqual(eqArrays(map(['ground', 'control'], callBackFunction), ['g', 'c'])); 


