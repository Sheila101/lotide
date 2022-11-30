//Function Implemntation - Assert Equal
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function Implementation - findKeyByValue
const findKeyByValue = function (obj, value) {
  const keysOfObjectReturned = Object.keys(obj);
  for (const item of keysOfObjectReturned) {
    if (obj[item] === value) {
      return item;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

//Test
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
