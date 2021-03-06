/*
1. Reversing a String
/* Instruction:
Given a string, write a recursive function to return the reversed string.
// Example:
// reverseString('covid')
// => 'divoc'
*/

function reverseString(strInput) {
  if (strInput.length == 0) {
    return "";
  }
  var arrOfChar = [...strInput];
  var singleChar = arrOfChar.shift();
  var joinCharBackToStr = arrOfChar.join("");
  /*return [].concat(singleChar);
  return [].concat([singleChar]);
  both will return ["o"]
  */
  return reverseString(joinCharBackToStr).concat(singleChar);
}

/* Instruction:
Given an array and an index, write a recursive function to add up the elements of an array.
// Examples:
addingUpTo([1, 4, 5, 3], 2)
addingUpTo([1, 4, 5, 3,8], 2)
// => 10
// => adding the number all the way up to index 2 (1 + 4 + 5)
addingUpTo([4, 3, 1, 5], 1)
addingUpTo([4, 3, 1, 5,9], 1)
// => 7
// => adding the number all the way up to index 1 (4 + 3)
 */

function addingUpTo(arrInput, limitIndex) {
  if (limitIndex == 0) {
    let firstValueToAdd = arrInput.shift();
    return firstValueToAdd;
  }
  let valueToAdd = arrInput.shift();

  return valueToAdd + addingUpTo(arrInput, limitIndex - 1);
}

/***** another solution *****/

function addUpTo(arrInput, limitIndex) {
  var sum = arrInput[limitIndex];

  if (limitIndex == 0) return sum;

  return sum + addUpTo(arrInput, limitIndex - 1);
}
/***** another solution *****/

/* Instruction:
Given an array, write a recursive function to find the largest integer in an array. 
// Examples:
maxOf([1, 4, 5, 3])
// => 5
maxOf([3, 1, 6, 8, 2, 4, 5])
// => 8
*/

function largestInteger(arrInput) {
  if (arrInput.length == 1) {
    let firstValueToCheck = arrInput.shift();
    return Math.max(0, firstValueToCheck);
  }
  var valueUsedInMathMax = arrInput.shift();
  return Math.max(valueUsedInMathMax, largestInteger(arrInput));
}

/* Instruction:
Given an array and a number, write a recursive function to see if the array includes the given element. 
// Examples:
includesNumber([1, 4, 5, 3], 5)
// => true
includesNumber([3, 1, 6, 8, 2, 4, 5], 9)
// => false
*/
function includesNumber(arrInput, valueInput) {
  var valueToCheck = arrInput.shift();
  if (valueToCheck == valueInput) {
    return true;
  } else if (arrInput.length === 0 && valueToCheck != valueInput) {
    return false;
  } else {
    return includesNumber(arrInput, valueInput);
  }
}

/* Instruction:
Given a string, write a recursive function to see if a word is a palindrome. 
// Examples:
isPalindrome('maddam')
// => true
isPalindrome('covid')
// => false
*/

function isPalindrome(
  strInput,
  startIndex = 0,
  endIndex = strInput.length - 1
) {
  var beginningStr = strInput[startIndex];
  var lastStr = strInput[endIndex];

  if (startIndex === endIndex) {
    return true;
  } else if (startIndex > endIndex && beginningStr === lastStr) {
    return true;
  }

  if (beginningStr != lastStr) {
    return false;
  } else {
    return isPalindrome(strInput, startIndex + 1, endIndex - 1);
  }
}

/***** solution below will mutate the string. *****/

function isPalindrome(str) {
  // base case: reaching midpoint, or empty str
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    return isPalindrome(str.substring(1, str.length - 1));
  }
}

/* Instruction:
Given a string, write a recursive function to print out an array of all possible permutations of the string. */
// Examples:
permutations("abc");
// => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
permutations("aabc");
// => ["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "bcaa", "caab", "caba", "cbaa"]
// ABCD BACD CABD ACBD BCAD CBAD DBAC BDAC ADBC DABC BADC ABDC ACDB CADB DACB ADCB CDAB DCAB DCBA CDBA BDCA DBCA CBDA BCDA

function permutations(strInput, index) {
  if (index == strInput.length) {
    return [];
  }

  var splitStr = strInput.split("");
  var copiedArrOfStrChar = [...splitStr];
  // var copiedArrOfStrChar = splitStr.slice();
  var moveToFront = copiedArrOfStrChar.splice(index, 1);
  var [firstChar, secondChar] = copiedArrOfStrChar;
  var firstToAddToArr = moveToFront.concat(copiedArrOfStrChar).join("");
  var secondToAddTOArr = [...moveToFront, secondChar, firstChar].join("");

  return [firstToAddToArr, secondToAddTOArr].concat(
    permutations(strInput, index + 1)
  );
  /*strings in our array have to be unique*/
  /* use a helper swap function*/
}

/***** more than 3 letters *****/

function memoize(callback) {
  var visited = {};

  /***** we know how to get permutations of string with a length of 3.
   * with a length of 4, we want to run the algorithm of permutations on the three letters after the first character of the string.
   * we will keep track or change the first character of the string then run the algorithm for permutation with 3 string.
   * *****/
  /***** if we move the str char at index to the beginning already/second time or more than once, we will call function again with the next str char in the string. *****/
  function helper(strInput, index, charStrToCheck = strInput[index]) {
    /***** get the first char in str, make it true in visited obj for first iteration *****/
    // use default value in parameter
    /***** get the first char in str, make it true in visited obj for first iteration *****/
    if (visited[charStrToCheck]) {
      /***** when we run into a repeat char str and run permutation on the next char str we want to say we visited that char str before running permutation on it *****/
      let nextCharStr = strInput[index + 1];
      visited[nextCharStr] = true;
      return callback(strInput, index + 1);
    } else {
      visited[charStrToCheck] = true;
      return callback(strInput, index);
    }
  }
  return helper;
}

/***** more than 3 letters *****/

/***** using cached/visited and memorize to run permutations on unique char str. do not want to run permutations on char str that show up in original str more than once *****/

var permutation = memoize(function (strInput, index) {
  // var visited = {};
  if (index == strInput.length) {
    return [];
  }

  var splitTheStr = strInput.split("");
  /***** when we use splice on copyTheStr, it will mutate copyTheStr. it will remove the value at index and the array will the values that wasn't remove in order
   * we will use .join() method to convert it into a string then pass it in to the permutation helper function.
   *  *****/
  var copyTheStr = [...splitTheStr];
  var moveCharToFrontOfStr = copyTheStr.splice(index, 1);
  /***** if the charStr we remove using splice method is in our visited object go to the next iteration or recursive call *****/
  /***** if the charStr we remove using splice method is in our visited object go to the next iteration or recursive call *****/
  var turnIntoStrThenPassToHelperFunc = copyTheStr.join("");
  /***** we want to call/run algorithm on the next three chars then repeat each time we increase the index and pass that increased index to our recursive call *****/
  /***** ["a","b","c","d"] if index was 1. moveCharToFrontOfStr will be ["b"] copyTheStr will be ["a","c","d"] *****/
  /***** we want to call permutationLengthThree on chars that are still in copyTheStr array since we are using splice it will remove the char/value at index *****/
  // alert(
  //   "idea: we can pass in the char we are moving to the front into our permutationLengthThree function then we can add/use that str in that function"
  // );
  // alert(
  //   "then we can return an array with a length of 4 including the char we assigned to moveCharToFrontOfStr"
  // );
  /***** both our permutation and helperPermutation will return an array *****/
  var arrOfWordsBeforeRecursiveCall = permutationLengthThree(
    turnIntoStrThenPassToHelperFunc,
    0,
    moveCharToFrontOfStr
  );

  /***** work on only return unique strings *****/
  var arrOfUniqueStr = arrOfWordsBeforeRecursiveCall.reduce(
    function findUniqueStr(buildingUp, currentValue) {
      if (buildingUp.indexOf(currentValue) == -1) {
        return [...buildingUp, currentValue];
      } else {
        return buildingUp;
      }
    },
    []
  );
  // test on this array ["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "baac", "baca", "bcaa", "bcaa", "caab", "caba", "caab", "caba", "cbaa", "cbaa"]
  /***** work on only return unique strings *****/

  return [
    ...arrOfUniqueStr,
    /***** if we call ...permutation(strInput, index + 1, ...moveCharToFrontOfStr), if we pass in a str "aabb" our algorithm will run permutation on the second "b"
     * we should not pass in a charStrToCheck when we recusively call permutation we want to check the char str before we run permutation.
     * function helper(strInput, index, charStrToCheck = strInput[index]) {}
     * *****/
    ...permutation(strInput, index + 1),
  ];

  function permutationLengthThree(
    helperStrInput,
    helperIndex,
    charFromParentFunc
  ) {
    if (helperIndex == helperStrInput.length) {
      return [];
    }

    var splitStr = helperStrInput.split("");
    var copiedArrOfChar = [...splitStr];
    // var copiedArrOfChar = splitStr.slice()
    var charMoveToFront = copiedArrOfChar.splice(helperIndex, 1);
    var [secondChar, thirdChar] = copiedArrOfChar;
    var firstStrToAddToArr = [
      ...charFromParentFunc,
      ...charMoveToFront,
      ...copiedArrOfChar,
    ].join("");
    var secondStrToaddToArr = [
      ...charFromParentFunc,
      ...charMoveToFront,
      thirdChar,
      secondChar,
    ].join("");

    return [firstStrToAddToArr, secondStrToaddToArr].concat(
      permutationLengthThree(
        helperStrInput,
        helperIndex + 1,
        charFromParentFunc
      )
    );
  }
  /***** we want to call/run algorithm on the next three chars then repeat each time we increase the index and pass that increased index to our recursive call *****/
});

/***** using cached/visited to run permutations on unique char str. do not want to run permutations on char str that show up in original str more than once *****/

/***** permutation with str length greater than 3 works =) *****/
function permutation(strInput, index) {
  var visited = {};
  if (index == strInput.length) {
    return [];
  }

  var splitTheStr = strInput.split("");
  /***** when we use splice on copyTheStr, it will mutate copyTheStr. it will remove the value at index and the array will the values that wasn't remove in order
   * we will use .join() method to convert it into a string then pass it in to the permutation helper function.
   *  *****/
  var copyTheStr = [...splitTheStr];

  var moveCharToFrontOfStr = copyTheStr.splice(index, 1);
  /***** if the charStr we remove using splice method is in our visited object go to the next iteration or recursive call *****/
  if (visited[moveCharToFrontOfStr]) {
    return [...permutation(strInput, index + 1)];
  } else {
    visited[moveCharToFrontOfStr] = true;
    /***** if the charStr we remove using splice method is in our visited object go to the next iteration or recursive call *****/
    var turnIntoStrThenPassToHelperFunc = copyTheStr.join("");
    /***** we want to call/run algorithm on the next three chars then repeat each time we increase the index and pass that increased index to our recursive call *****/
    /***** ["a","b","c","d"] if index was 1. moveCharToFrontOfStr will be ["b"] copyTheStr will be ["a","c","d"] *****/
    /***** we want to call permutationLengthThree on chars that are still in copyTheStr array since we are using splice it will remove the char/value at index *****/
    // alert(
    //   "idea: we can pass in the char we are moving to the front into our permutationLengthThree function then we can add/use that str in that function"
    // );
    // alert(
    //   "then we can return an array with a length of 4 including the char we assigned to moveCharToFrontOfStr"
    // );
    /***** both our permutation and helperPermutation will return an array *****/
    var arrOfWordsBeforeRecursiveCall = permutationLengthThree(
      turnIntoStrThenPassToHelperFunc,
      0,
      moveCharToFrontOfStr
    );

    return [
      ...arrOfWordsBeforeRecursiveCall,
      ...permutation(strInput, index + 1),
    ];
  }

  function permutationLengthThree(
    helperStrInput,
    helperIndex,
    charFromParentFunc
  ) {
    if (helperIndex == helperStrInput.length) {
      return [];
    }

    var splitStr = helperStrInput.split("");
    var copiedArrOfChar = [...splitStr];
    // var copiedArrOfChar = splitStr.slice()
    var charMoveToFront = copiedArrOfChar.splice(helperIndex, 1);
    var [secondChar, thirdChar] = copiedArrOfChar;
    var firstStrToAddToArr = [
      ...charFromParentFunc,
      ...charMoveToFront,
      ...copiedArrOfChar,
    ].join("");
    var secondStrToaddToArr = [
      ...charFromParentFunc,
      ...charMoveToFront,
      thirdChar,
      secondChar,
    ].join("");

    return [firstStrToAddToArr, secondStrToaddToArr].concat(
      permutationLengthThree(
        helperStrInput,
        helperIndex + 1,
        charFromParentFunc
      )
    );
  }
  /***** we want to call/run algorithm on the next three chars then repeat each time we increase the index and pass that increased index to our recursive call *****/
}
/***** permutation with str length greater than 3 works =) *****/

function permutationLengthThree(strInput, index, charFromParentFunc) {
  if (index == strInput.length) {
    return [];
  }

  var splitStr = strInput.split("");
  var copiedArrOfChar = [...splitStr];
  // var copiedArrOfChar = splitStr.slice()
  var charMoveToFront = copiedArrOfChar.splice(index, 1);
  var [secondChar, thirdChar] = copiedArrOfChar;
  var firstStrToAddToArr = [
    ...charFromParentFunc,
    ...charMoveToFront,
    ...copiedArrOfChar,
  ].join("");
  var secondStrToaddToArr = [
    ...charFromParentFunc,
    ...charMoveToFront,
    thirdChar,
    secondChar,
  ].join("");

  return [firstStrToAddToArr, secondStrToaddToArr].concat(
    permutationLengthThree(strInput, index + 1, charFromParentFunc)
  );
}

/***** more than 3 letters *****/

/***** code block is when we declare permutationLengthThree inside permutations with string length of 4 *****/
function permutationLengthThree(
  helperStrInput,
  helperIndex,
  charFromParentFunc
) {
  if (helperIndex == helperStrInput.length) {
    return [];
  }

  var splitStr = helperStrInput.split("");
  var copiedArrOfChar = [...splitStr];
  // var copiedArrOfChar = splitStr.slice()
  var charMoveToFront = copiedArrOfChar.splice(helperIndex, 1);
  var [secondChar, thirdChar] = copiedArrOfChar;
  var firstStrToAddToArr = [
    ...charFromParentFunc,
    ...charMoveToFront,
    ...copiedArrOfChar,
  ].join("");
  var secondStrToaddToArr = [
    ...charFromParentFunc,
    ...charMoveToFront,
    thirdChar,
    secondChar,
  ].join("");

  return [firstStrToAddToArr, secondStrToaddToArr].concat(
    permutationLengthThree(helperStrInput, helperIndex + 1, charFromParentFunc)
  );
}
/***** code block is when we declare permutationLengthThree inside permutations with string length of 4 *****/

/***** permutation will work with any length *****/
function permutation(strInput, index) {
  if (index == strInput.length) {
    return [];
  }

  //copy two str to pass into help permutations
  var longStr = strInput.slice(1);
  var shortStr = strInput.slice(2);
  //one str will have most char
  //one str will have the least char
  //copy the first two char of the str
  //copy the first char of the str
  var twoCharStr = strInput.slice(0, 2);
  var oneCharStr = strInput.slice(0, 1);
  //pass the variable with the one char into the permutations call with the str with the most char
  //pass the variable with the two char str into the permutations call with the str with the least char

  if (strInput.length == 3) {
    return [...permutationHelper()];
  }

  function permutationLongStr(longStr, oneCharStr) {}

  function permutationShortStr(shortStr, twoCharStr) {}

  function permutationHelper(strInput, index, charFromParentFunc) {}
}
/***** permutation will work with any length *****/

/***** jest test *****/

var assert = require("assert");

describe("`const` is like `let` plus read-only for primitive values", () => {
  // this const varialbe is declared in the parent scope
  const notChangeable = 23;
  test("like all variables, const variables are accessible from a child block", () => {
    // this block is nested inside  block
    assert.equal(notChangeable, "23");
  });

  test("like all variables, const variables are not accessible from a parent block", () => {
    {
      // these brackets create a block
      var insideBrackets = 22;
    }
    assert.equal(insideBrackets, "22");
  });
  describe("scalar values are read-only", () => {
    test("e.g. a number", () => {
      // EDIT BELOW HERE --->
      const constNum = 0;
      /*constNum = 1;*/
      // <--- EDIT ABOVE
      assert.equal(constNum, 0);
    });
    test("or a string", () => {
      // EDIT BELOW HERE --->
      const constString = "I am a const";
      /*constString = 'Cant change you?';*/
      // <--- EDIT ABOVE
      assert.equal(constString, "I am a const");
    });
  });
  describe("complex types are NOT fully read-only", () => {
    test("array items can be changed", () => {
      // EDIT BELOW HERE --->
      const arr = [];
      arr[0] = 0;
      // <--- EDIT ABOVE
      assert.equal(arr[0], 0);
    });
    test("but you cannot reassign a new array to the variable", () => {
      // EDIT BELOW HERE --->
      const arr = [1, 2, 3];
      /*arr = [10,11,12];*/
      // <--- EDIT ABOVE
      assert.equal(arr[0], 1);
    });
    test("object key-value pairs can be modified", () => {
      // EDIT BELOW HERE --->
      const obj = { x: 1 };
      obj.x = 2;
      // <--- EDIT ABOVE
      assert.equal(obj.x, 2);
    });
    test("but you cannot reassign a new object to the variable", () => {
      // EDIT BELOW HERE --->
      const obj = { x: 1 };
      /*obj = {y: 2};*/
      // <--- EDIT ABOVE
      assert.equal(obj.x, 1);
    });
  });
});

/***** jest test *****/

/*

7. Fibonacci
/* Instruction:
Given a number, write a recursive function to 
print out the n-th entry in the fibonacci series. 
Fibonacci series is a sequence, 
where each number is the sum of the preceding two: 
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// Example:
fib(3)
// => 2
fib(6)
// => 8

function fib(n) {
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

*/

function memoize(callback) {
  var visited = {};

  function innerFunc(input) {
    if (visited[input]) {
      return visited[input];
    } else {
      let result = callback(input);
      visited[input] = result;
    }
  }

  return innerFunc;
}

var fibonacci = memoize(function cachedOurValue(numInput) {
  if (numInput < 2) return 1;

  return fibonacci(numInput - 1) + fibonacci(numInput - 2);
});

/***** code and coffee *****/

/*
 * Removes duplicates characters from a string
 * @param {string} str - the string
 * @return {string} - a string without duplicates
 */

function removeDuplicates(str) {
  var convertArray = [...str];
  // var convertArray = str.split("");
  var cached = {};

  return convertArray
    .reduce(function uniqueValues(buildingUp, currentValue) {
      if (!cached[currentValue]) {
        cached[currentValue] = true;
        return [...buildingUp, currentValue];
      }
      return buildingUp;
    }, [])
    .join("");
}

// make this true
console.log(removeDuplicates("mississippi") === "misp");

const library = ["Aa", "Ab", "Ba", "Bb", "Ca", "Cb", "Da", "Db", "Ea", "Eb"];
const singleBook = ["Cb"];
const bigLibrary = [
  ...library,
  ...library,
  ...library,
  ...library,
  ...library,
  ...library,
  ...library,
  ...library,
];

function getLastBook(books) {
  console.count("called this many times");
  return books[books.length - 1];
}

// getLastBook(singleBook);
// getLastBook(library);

function getAllBooks(books) {
  books.forEach((book) => {
    console.count("called this many times");
  });
}

// getAllBooks(singleBook)
// getAllBooks(library)

function compareBooks(books) {
  books.forEach((book1) => {
    books.forEach((book2) => {
      console.log(`Does ${book1} equal ${book2}?`, book1 === book2);
      console.count();
    });
  });
}

// compareBooks(singleBook)
// compareBooks(library)

function binarySearch(sortedArray, key) {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    console.count();
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
      // found the key
      return middle;
    } else if (sortedArray[middle] < key) {
      // continue searching to the right
      start = middle + 1;
    } else {
      // search searching to the left
      end = middle - 1;
    }
  }
  // key wasn't found
  return -1;
}

/***** check if an input is an object *****/

Object.prototype.toString.call(null);
// then use a conditional

/***** check if an input is an object *****/

// binarySearch(singleBook, 'Bb')
// binarySearch(library, 'Bb')
// binarySearch(bigLibrary, 'x')

/***** code and coffee *****/

/***** inclusive design code testing *****/

function splitStr(strInput) {
  var arrOfStr = strInput.split(", ");
  console.log(arrOfStr);
}

splitStr("84, Beacon St, Boston, MA 02108, United States");

//hacky solution because not all address will end with the country at the end
//better solution put the address information in an obj

var address = {
  building: "85-87",
  street: "Gwydir St",
  city: "Cambridge",
  country: "UK",
  zipOrPostcode: "CB1 2LG",
};

/***** inclusive design code testing *****/

/***** sum of subarrays *****/

function sum_array(arr) {
  // store our final answer
  var sum = 0;

  // loop through entire array
  for (var i = 0; i < arr.length; i++) {
    // loop through each inner array
    for (var j = 0; j < arr[i].length; j++) {
      // add this number to the current final sum
      sum += arr[i][j];
    }
  }

  return sum;
}

sum_array([[3, 2], [1], [4, 12]]);

/***** sum of subarrays *****/

function sumArray(arr) {
  //[[3, 2], [1], [4, 12]]
  //final answer
  var total = 0;

  firstRecur(arr); //[[3, 2], [1], [4, 12]]

  function firstRecur(arr, index = 0) {
    var lengthOfArr = arr.length;
    if (index === lengthOfArr) {
      return;
    }

    var subarray = arr[index]; //[3,2]
    var sumOfSubarray = secondRecur(subarray); //[3,2]

    total += sumOfSubarray;
    firstRecur(arr, index + 1);
  }

  return total;
}

function secondRecur(arr, index = 0) {
  var lengthOfArr = arr.length;
  if (index === lengthOfArr) {
    return 0;
  }

  var valueOfSubarray = arr[index]; //3

  return secondRecur(arr, index + 1) + valueOfSubarray;
}

sumArray([[3, 2], [1], [4, 12]]);
