//Function Implemntation - Assert Equal
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.assert(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function Implementation - Count Letters
const countLetters = (word) => {
  //we can save the counted letters into an object
  const letterObject = {}
  for(letter of word){
    //Checking to see of the letter is in the object
    if(letterObject[letter]){
      letterObject[letter] += 1;
    }else {
      letterObject[letter] = 1;
    }
  }
  
  console.log(letterObject);
  return letterObject; 
};


//console.log(countLetters('Jason')); 
//Test
assertEqual(countLetters('Jason'), {
  J: 1,
  a: 1,
  s: 1,
  o: 1,
  n: 1
});
assertEqual(countLetters('Karima'), {
  K: 1,
  a: 2,
  r: 1, 
  i: 1,
  m: 1
});
assertEqual(countLetters('Fang'), {
  F: 1,
  a: 1, 
  n: 1,
  g: 1
});
assertEqual(countLetters('Agouhanna'),{
  A: 1,
  g: 1,
  o: 1,
  u: 1,
  h: 1,
  a: 2,
  n: 2,
});