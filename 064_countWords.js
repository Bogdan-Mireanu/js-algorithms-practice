/*
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/

function countWords(str) {
    // your code here
    const obj ={};
    if (!str.length){
      return {};
    } else {
      const myStr = str.split(' ');
      for ( el of myStr){
        if (!obj[el]) {
          obj[el] = 1;
        } else {
          obj[el] += 1;
        }
      }
    }
    return obj;
  }