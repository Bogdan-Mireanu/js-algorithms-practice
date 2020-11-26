/*
Write a function called "squareElements".

Given a array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
*/

function squareElements(arr) {
    // your code here
    return arr.map(el => Math.pow(el,2));
  }
  
  