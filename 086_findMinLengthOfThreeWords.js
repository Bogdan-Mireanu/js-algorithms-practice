/*
Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
*/

function findMinLengthOfThreeWords(word1, word2, word3) {
    // your code here
    const arr = [word1.length, word2.length, word3.length];
    return Math.min(...arr);
  }
  
//or

/*
Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
*/

function findMinLengthOfThreeWords(word1, word2, word3) {
    // your code here
    const arr = [];
    for(i=0; i< arguments.length; i++){
      arr.push(arguments[i].length);
    }
    console.log(arr);
    return Math.min(...arr);
  }