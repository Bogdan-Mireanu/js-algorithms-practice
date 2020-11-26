/*
Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words. 

Notes:
* If there is a tie, it should return the first word in the tie.

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
*/

function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let arr = [];
    for(i =0; i<arguments.length;i++){
      arr.push(arguments[i].length);
    }
    console.log(arr);
    return [...arguments].find(el => el.length === Math.max(...arr));
  }
  //or
  
function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    const arr = [...arguments].sort((a,b) => b.length -a.length);
    console.log(arr);
    return arr[0];
  }