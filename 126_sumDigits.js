/*
Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14

If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4

Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

*/

function sumDigits(num) {
    // your code here
    const str = num.toString().split('');
    return str.reduce(function(acc, curent, index, arr){
      if(curent === '-'){
        curent = 0;
        arr[index+1] *= -1;
      }
        return acc + Number(curent);
    }, 0);
  }