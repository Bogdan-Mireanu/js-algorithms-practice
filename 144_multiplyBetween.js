/*
Write a function called "multiplyBetween".

Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.

Notes:
* The product between 1 and 4 is 1 * 2 * 3 = 6.
* If num2 is not greater than num1, it should return 0.

var output = multiplyBetween(2, 5);
console.log(output); // --> 24
*/

function multiplyBetween(num1, num2) {
    // your code here
    
    let product = num1;
    for (let i = (num1+1);i < num2; i++){
      product *= i;
    }
    return num2 < num1 || num1 === num2 ? 0 : product;
  }