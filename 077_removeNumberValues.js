/*
Write a function called "removeNumberValues".

Given an object, "removeNumberValues" removes any properties whose valuse are numbers.

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
*/

function removeNumberValues(obj) {
    // your code here
    for (const [key,value] of Object.entries(obj)) {
      if(typeof value == "number"){
        delete obj[key];
      }
    }
  }
  