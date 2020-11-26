/*
Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3
*/

function findMaxLengthOfThreeWords(word1, word2, word3) {
    // your code here
    const arr = [];
    for(let i = 0; i< arguments.length; i++){
      arr.push(arguments[i].length);
      console.log(arr);
    }
    return Math.max(...arr);
  }