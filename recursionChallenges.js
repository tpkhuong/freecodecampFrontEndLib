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
// => 10
// => adding the number all the way up to index 2 (1 + 4 + 5)
addingUpTo([4, 3, 1, 5], 1)
// => 7
// => adding the number all the way up to index 1 (4 + 3)
 */
