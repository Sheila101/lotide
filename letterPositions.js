//Function implementation - eqArray
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

//Function implementation of letterPositions 
const letterPositions = (sentence) => {
  const results = {};

  for(let i = 0; i<sentence.length; i++){
    console.log(sentence[i]);
    if(sentence[i] !== " "){
      //If there is no array
      if(!results[sentence[i]]){
        results[sentence[i]] = [i]
      }else{
        results[sentence[i]].push(i);
      }
    }
  }
  console.log(results)
  return results;
};

//letterPositions('lighthouse in the house');

//Test
assertArraysEqual(letterPositions("hello").e, [1]); 
