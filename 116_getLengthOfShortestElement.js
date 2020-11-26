/*
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
*/

function getLengthOfShortestElement(arr) {
    // your code here
    const myArr = [];
   for (const el of arr){
     myArr.push(el.length);
   }
    return arr.length == 0 ? 0 : Math.min(...myArr);
  }
  