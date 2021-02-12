/* Closures, Scope, and Execution Context */

/*
Challenge 1
Create a function createFunction that creates and returns a function. When that created function is called,
it should print "hello". When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.
*/

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

function createFunction() {
  return function () {
    console.log("hello");
  };
}

/*
Challenge 2
Create a function createFunctionPrinter that accepts one input and returns a function.
When that created function is called, it should print out the input that was used when the function was created.
*/

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');

function createFunctionPrinter(ourInput) {
  return function () {
    console.log(ourInput);
  };
}

/*
Challenge 3
Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
Uncomment those lines of code. Try to deduce the output before executing. Now we are going to create a function addByX that returns a function that will add an input by x.
*/

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(numInput) {
  var counter = 0;
  function incrementByNumInput() {
    counter += numInput;
    console.log(`this is counter: ${counter}`);
  }

  return incrementByNumInput;
}

/*
Challenge 4
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output.
If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
*/

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6

function once(callbackFunc) {
  var counter = 0;
  let result;

  return function innerFunc(valueInput) {
    if (counter == 0) {
      result = callbackFunc(valueInput);
      counter += 1;
      return result;
    } else {
      return result;
    }
  };
}

function addByTwo(numInput) {
  return (numInput += 2);
}

/*
Challenge 5
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
*/

// /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

function after(numOfTimeCalls, callbacFunc) {
  var counter = 0;

  return function innerFunc() {
    counter += 1;
    if (counter == numOfTimeCalls) {
      let result = callbacFunc();
      return result;
    }
  };
}

/*
Challenge 6
Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter.
Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
*/

function delay(callbackFunc, waitInMillisec, ...listOfArgs) {
  setTimeout(function () {
    callbackFunc(...listOfArgs);
  }, waitInMillisec);
}

delay(
  (...input) => {
    input.forEach(function print(eachValue) {
      console.log(eachValue);
    });
  },
  500,
  "hello",
  "world",
  "cat",
  "dog"
);
