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

function helloGoodbye() {
  console.log("Hello");
  setTimeout(function sayBye() {
    console.log("good bye");
  }, 2000);
}

/*

Challenge 4
Create a function brokenRecord that console logs hi again every second. Use the End Code button to stop the console logs when you are satisfied that it is working.

*/

function brokenRecord() {
  var intervalId = setInterval(function sayHi() {
    console.log("hi again");
  }, 1000);

  function innerFunc(endCode) {
    if (endCode.toLowerCase() == "end") {
      clearInterval(intervalId);
    }
  }
  return innerFunc;
}

/*

Challenge 5
Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.

*/

function limitedRepeat() {
  var counter = 1;
  var intervalID = setInterval(function limitedHi() {
    console.log("hi");
    if (counter == 5) {
      clearInterval(intervalID);
    }
    counter++;
  }, 1000);
}

/*

Challenge 6
Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, and another number duration.

everyXsecsForYsecs will execute the given function every interval number of milliseconds, but then automatically stop after duration milliseconds.

Then pass the below sayHi function into an invocation of everyXsecsForYsecs with 1000 interval time an 5000 duration time.
What do you expect to happen?

*/

function everyXsecsForYsecs(func, intervalNumber, durationNumber) {
  var counter = 1;
  var stopFunc = Math.floor(durationNumber / intervalNumber);
  var stopIntervalID = setInterval(function callUpTo() {
    func();
    if (counter == `${stopFunc}`) {
      clearInterval(stopIntervalID);
    }
    counter++;
  }, `${intervalNumber}000`);
}

function theEnd() {
  console.log("This is the end!");
}

/*

Challenge 7
Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.

When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.

*/

function delayCounter(target, wait) {
  var counter = 1;
  function innerFunc() {
    var stopID = setInterval(function () {
      console.log(counter);
      if (counter == target) {
        clearInterval(stopID);
      }
      counter++;
    }, wait);
  }

  return innerFunc;
}

/*

Challenge 8
Write a function, promised, that takes in a value. This function will return a promise that will resolve after 2 seconds.

Hint: take a look at the Promise object docs on MDN.

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val)); 
// will log "wait for it..." to the console after 2 seconds

*/

function promised(strInput) {
  return new Promise((resolve, reject) => {
    setTimeout(function resolved() {
      resolve(strInput);
    }, 2000);
  });
}

var makePromise = promised("hello world in 2 second");

makePromise.then((value) => {
  console.log(value);
});

var _ = {};

_.forEach = function (list, callbackFunc) {
  for (let index = 0; index < list.length; index++) {
    // let currValue = list[index];
    callbackFunc(list[index], index, list);
  }
};
