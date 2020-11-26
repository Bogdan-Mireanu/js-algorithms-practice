
/*
Write a function called "computeSquareRoot".
Given a number, "computeSquareRoot" returns its square root.
var output = computeSquareRoot(9);
console.log(output); // --> 3

Do not use Math.sqrt(); for this problem. Instead, use this iterative way of solving the problem:

https://blogs.sas.com/content/iml/2016/05/16/babylonian-square-roots.html
*/

function computeSquareRoot(num) {
    // your code here
     var guess = Math.floor(num / 2);
    var division = 0;
    
    while(division != guess) {  
      division = parseFloat((num / guess).toFixed(8));
      guess = (guess + division) / 2;
    }
    
    return division; 
  }