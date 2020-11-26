/*
Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear.
* If the given array is empty, it should return an empty string.

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
*/

function findShortestElement(arr) {
    // your code here
     if(arr.length == 0){
       return '';
     }else {
       const arrLengths = arr.map(el => el.length);
       return arr.find(el => el.length === Math.min(...arrLengths));
     }
  }
  