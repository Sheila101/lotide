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
};

// Function Implementation - - assertObjectsEqual.js
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`${inspect(actual)} is equal to ${inspect(expected)}`);
  } else {
    console.log(`${inspect(actual)} is not equal to ${inspect(expected)}`);
  }
};

assertObjectsEqual(
  { color: 'red', size: 'medium' },
  { size: 'medium', color: 'red' }
); //true 
assertObjectsEqual(
  { color: 'red', size: 'medium' },
  {
    size: 'medium',
    color: 'red',
    sleeveLength: 'long',
  }
); //false
