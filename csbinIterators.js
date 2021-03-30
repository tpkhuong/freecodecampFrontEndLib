/*

Challenge 1
A) Create a for loop that iterates through an array and returns the sum of the elements of the array.
B) Create a functional iterator for an array that returns each value of the array when called, one element at a time.


// Uncomment the lines below to test your work
// const array = [1, 2, 3, 4];
// console.log(sumFunc(array)); // -> should log 10

*/

function sumOfArr(arrInput) {
  var total = 0;
  for (let i = 0; i < arrInput.length; i++) {
    let eachValue = arrInput[i];
    total += eachValue;
  }

  return total;
}

var getValues;

function arrIterator(arrInput) {
  var index = 0;
  function innerFunc() {
    var eachValue = arrInput[index];
    index++;
    return eachValue;
  }

  getValues = innerFunc;
}

/*

Challenge 2
Create an iterator with a next method that returns each value of the array when .next is called.

// Uncomment the lines below to test your work
// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3

*/

function nextIterator(arrInput) {
  var index = 0;

  return {
    next: function () {
      var eachValue = arrInput[index];
      index++;
      return eachValue;
    },
  };
}

/*

Challenge 3
Write code to iterate through an entire array using your nextIterator and sum the values.

// Uncomment the lines below to test your work
// const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4)); // -> should log 10

*/

const array4 = [1, 2, 3, 4];

function calculateSum(arrInput) {
  var total = 0;
  let eachValueForSum = nextIterator(arrInput);
  for (let i = 0; i < arrInput.length; i++) {
    total += eachValueForSum.next();
  }
  return total;
}

/*

Challenge 4
Create an iterator with a next method that returns each value of a set when .next is called

// Uncomment the lines below to test your work
// const mySet = new Set('hey');
// const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'

*/
