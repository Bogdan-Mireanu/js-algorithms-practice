/*
Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/

function findSmallestNumberAmongMixedElements(arr) {
    // your code here
    const numberArr = [];
    for(const el of arr){
      if(typeof el === "number"){
        numberArr.push(el);
      }
    }
    return arr.length === 0 || numberArr.length === 0 ? 0 : Math.min(...numberArr);
  }