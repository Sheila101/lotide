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

//Function Implemntation - Assert Equal
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function Implementation - eqobjects

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let newObjArray1 = Object.keys(object1);
  let newObjArray2 = Object.keys(object2);
  let newObjArrayValue1 = Object.values(object1);
  let newObjArrayValue2 = Object.values(object2);
  if (newObjArray1.length === newObjArray2.length) {
    for (let key in object1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;

  //   if(!eqArrays(newObjArray1, newObjArray2)){
  //     return false;
  //   }
  //   if(!eqArrays(newObjArrayValue1, newObjArrayValue2)){
  //     return false;
  //   }
  // return true;
};

//Objects
const shirtObject = { color: 'red', size: 'medium' };
const anotherShirtObject = { size: 'medium', color: 'red' };

const longSleeveShirtObject = {
  size: 'medium',
  color: 'red',
  sleeveLength: 'long',
};

//Tests
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); //True

//Tests
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); //False
