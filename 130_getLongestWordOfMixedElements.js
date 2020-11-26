/*
Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

Notes:
* If the array is empty, it should return an empty string (""). 
* If the array contains no strings; it should return an empty string.

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
*/

function getLongestWordOfMixedElements(arr) {
    // your code here
    const strLengths = [];
    for(const el of arr){
      if(typeof el === "string"){
        strLengths.push(el.length);
      }
    }
    return arr.length === 0 || strLengths.length === 0 ? "" : arr.find(el => el.length === Math.max(...strLengths));
  }