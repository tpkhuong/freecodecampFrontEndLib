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
