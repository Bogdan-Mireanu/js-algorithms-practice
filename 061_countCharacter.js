/*
Write a function called "countCharacter".

Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
*/

function countCharacter(str, char) {
    // your code here
    const myArr = [...str];
    let count=0;
    for (el of myArr){
      if (el === char){
        count++;
      }
    }
    return count;
  }