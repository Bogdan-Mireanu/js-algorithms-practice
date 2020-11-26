/*
Write a function called "calculateBillTotal".

Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.

Notes:
* Assume that sales tax is 9.5% and tip is 15%.
* Do NOT tip on the sales tax, only on the pre tip amount.

var output = calculateBillTotal(20);
console.log(output); // --> 24.9
*/

function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    const tax = 9.5 / 100 * preTaxAndTipAmount;
    const tip = 15 / 100 * preTaxAndTipAmount;
    return preTaxAndTipAmount + tax + tip;
  }
  
  