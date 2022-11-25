//Function Implemntation - eqArray
//How to comapre using the 'every' function?
const eqArrays = (arr1, arr2) => {
  //check to make sure the arrays have the same length
  if (arr1.length != arr2.length) {
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
const assertArraysEqual = (arr1, arr2) =>{
 if(eqArrays(arr1, arr2)){
  console.log(`${arr1} is equal to ${arr2}`);
 }else{
  console.log(`${arr1} is not equal to ${arr2}`);
 }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); //true 
assertArraysEqual([1, 2, 3], [3, 2, 1]); //false