//Function Implemntation - Assert Equal
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.assert(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


//Fucntion Implemntation - findKey 
const findKey = function (obj, callback) {
  const keys = Object.keys(obj);
  for (const item of keys) {
    if (callback(obj[item])) {
      return item;
    }
  }
  return undefined;

}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))