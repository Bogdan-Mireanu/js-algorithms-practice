/*
Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
*/

function getLengthOfLongestElement(arr) {
    // your code here
    if(arr.length == 0){
      return 0;
    }else {
       const arr2 = arr.map(el => el.length);
       console.log(arr2);
       return Math.max(...arr2);
    }
  }