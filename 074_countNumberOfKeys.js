/*
Write a function called "countNumberOfKeys".

Given an object, "countNumberOfKeys" returns how many properties the given object has.

var obj = {
  a: 1,
  b: 2,
  c: 3
};
var output = countNumberOfKeys(obj);
console.log(output); // --> 3
*/

function countNumberOfKeys(obj) {
    // your code here
     let count = 0;
    for (const [key] of Object.entries(obj)){
      count+=1;
    }
    return count;
  }