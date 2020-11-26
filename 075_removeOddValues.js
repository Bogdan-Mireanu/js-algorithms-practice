/*
Write a function called "removeOddValues".

Given an object, "removeOddValues" removes any properties whose valuse are odd numbers.

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
*/

function removeOddValues(obj) {
    // your code here
    for (const [key,value] of Object.entries(obj)) {
      if (typeof value == "number" && value % 2 != 0){
        delete obj[key];
      }
    }
  }