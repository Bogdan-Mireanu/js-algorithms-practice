/*
Write a function called "findShortestOfOfThreeWords".

Given 3 strings, "findShortestOfOfThreeWords" returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

var output = findShortestOfOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
*/

function findShortestOfOfThreeWords(word1, word2, word3) {
    // your code here
    let arrLengths = [];
    for( let i = 0; i < arguments.length; i++){
      arrLengths.push(arguments[i].length);
    }
    return [...arguments].find(el => el.length === Math.min(...arrLengths));
  }
  