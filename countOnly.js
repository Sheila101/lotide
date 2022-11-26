//Function Implemntation - Assert Equal
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.assert(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function Implementation - Count Only

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  //loop over all items in the array
  for (const item of allItems) {
    //console.log(item);

    //if item is found in the itemsToCount object, then increment
    if (itemsToCount[item]) {
      //increment the count of each item into results as we encounter each string item in the array
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  console.log(results); 
  return results; 
};

//Test
const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1['Jason'], 1);
assertEqual(result1['Karima'], undefined);
assertEqual(result1['Fang'], 2);
assertEqual(result1['Agouhanna'], undefined);
