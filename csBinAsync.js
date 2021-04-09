/*

Challenge 1
Thinking point (no writing code necessary for this challenge): Inspect the code given to you in Challenge 1. In what order should the console logs come out? Howdy first or Partnah first?

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

"Partnah" will be logged first then "Howdy" because setTimeout will be added to the callback queue. The functions in the callback queue will run once
the callstack and execution context is empty.

*/

/*

Challenge 2
Create a function delayedGreet that console logs welcome after 3 seconds

*/

function delayedGreet() {
  setTimeout(() => {
    console.log("Welcome");
  }, 3000);
}

/*

Challenge 3
Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds.

*/

var _ = {};

_.forEach = function (list, callbackFunc) {
  for (let index = 0; index < list.length; index++) {
    // let currValue = list[index];
    callbackFunc(list[index], index, list);
  }
};
