/* 
Write a function called "getLongestElement".

Given an array, "getLongestElement" returns the longest string in the given array.

Notes:
* If there are ties, it returns the first element to appear.
* If the array is empty, tt should return an empty string.

var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
*/ 

function getLongestElement(arr) {
    // your code here
    if(arr.length == 0) {
      return '';
    } else {
      const arrLengths =[];
      for(const el of arr){
        arrLengths.push(el.length);
      }
      const max = Math.max(...arrLengths);
      return arr.find(el => el.length == max);
    }
  }
  
  