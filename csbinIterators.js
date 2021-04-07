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

function setIterator(set) {
  var convertToArr = [...set];
  var index = 0;
  return {
    next() {
      var getValue = convertToArr[index];
      index++;
      return getValue;
    },
  };
}

/*

Challenge 5
Create an iterator with a next method that returns an array with two elements (where the first element is the index and the second is the value at that index) when .next is called.

// Uncomment the lines below to test your work
// const array5 = ['a', 'b', 'c', 'd'];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']

*/

function indexIterator(arr) {
  /*ways to copy array*/
  // var copiedArr = [].concat(arr);
  // var copiedArr = [...arr];
  var copiedArr = arr.slice();
  var index = 0;
  // var copiedArr = Array.prototype.slice.call(arr);
  var arrOfSubarrays = copiedArr.reduce(function keyValuePairArr(
    buildingUp,
    currentValue,
    currIndex
  ) {
    var ourSubarray = [currIndex, currentValue];
    /*we want an array with subarray so we have to nest our array inside another array when we use .concat*/
    return buildingUp.concat([ourSubarray]);
    // return [...buildingUp, ourSubarray];
  },
  []);
  return {
    next() {
      var ourSubarray = arrOfSubarrays[index];
      index++;
      return ourSubarray;
    },
  };
  /***** without having to make our subarrays *****/
  // return {
  //     next() {
  //         var ourValue = arr[index];
  //         index++;
  //         return [index-1,ourValue];
  //     }
  // }
  /***** without having to make our subarrays *****/
}

/*

Challenge 6
Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!)
Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!

// Uncomment the lines below to test your work
// const helloWorld = new Words('Hello World');
// for (word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

*/

class Words {
  constructor(strInput) {
    this.strInput = strInput;
    this.index = 0;
  }
  *[Symbol.iterator]() {
    var arrOfStr = this.strInput.split(" ");
    for (let i = 0; i < arrOfStr.length; i++) {
      yield arrOfStr[i];
    }
  }
}

/*

Challenge 7
Build a function that walks through an array and returns the element concatenated with the string "was found after index x", where x is the previous index.
Note: if it is the first element it should say that it is the first

const returnedSentence = valueAndPrevIndex([4,5,6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());

*/

function valueAndPrevIndex(arrInput) {
  var index = 0;
  function innerFunc() {
    if (index == 0) {
      var valueInArr = arrInput[index];
      index += 1;
      return `${valueInArr} is the first element`;
    } else {
      var prevIndex = index - 1;
      var valueInArr = arrInput[index];
      index += 1;
      return `${valueInArr} was found after index ${prevIndex}`;
    }
  }

  return innerFunc;
}
