/*
Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
*/

function getAllElementsButNth(array, n) {
    // your code here
    array.splice(n,1);
    return array;
  }

//or

function getAllElementsButNth(array, n) {
    // your code here
    let newArr = [];
    array.forEach((el, index) => {
      if (index !== n) {
        newArr.push(el);
      }
    })
    return newArr;
  }

  //or
  function getAllElementsButNth(array, n) {
    // your code here
    const newArr = array.filter((el, index) => {
      return index !== n;
    })
    console.log(newArr);
    return newArr;
  }
  