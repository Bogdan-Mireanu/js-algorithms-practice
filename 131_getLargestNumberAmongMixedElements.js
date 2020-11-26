/*
Write a function called "getLargestNumberAmongMixedElements". 

Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:
* The array might contain values of a type other than numbers.
* If the array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
*/

function getLargestNumberAmongMixedElements(arr) {
    // your code here
    const arrNumbers = [];
    for (const el of arr){
      if(typeof el === "number"){
        arrNumbers.push(el);
      }
    }
    return arr.length === 0 || arrNumbers.length === 0 ? 0 : Math.max(...arrNumbers);
  }
  