/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
*/

function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (arr.length == 0){
      return '';
    } else {
      let lengths = [];
      for(const el of arr){
        if(typeof el == "string"){
          lengths.push(el.length); 
        }  
      }
       console.log(lengths);
       const min = Math.min(...lengths);
       console.log(min);
       return lengths.length !== 0 ? arr.find(el =>el.length === min) : ''; 
     }
  }
  
  