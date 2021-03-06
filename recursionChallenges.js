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
