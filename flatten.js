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


//Function implementation - flatten 
const flatten = (arr1) => {
  //takes in an array of arrays and flatten it into a single array
  let newArray = [];
  //Iterate over arr1
  //then check if array element is array or just an element
  for (let i = 0; i < arr1.length; i++){
    if (Array.isArray(arr1[i])) {
      //iterate over arr1[i] and push each element
      arr1[i].forEach((element) => newArray.push(element));
    } else {
      newArray.push(arr1[i]);
    }
  }
  console.log(newArray);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]