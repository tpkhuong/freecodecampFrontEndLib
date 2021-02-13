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

/*
Challenge 7

Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console.
The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.

*/

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'

function rollCall(arrInput) {
  var index = 0;
  var lengthOfArr = arrInput.length;

  function innerFunc() {
    var printMe = arrInput[index];
    /* when we have the index + = 1 ahead of our ternary when printMe = arrInput[2] it will assign "Ruth" to printMe BUT
    our code index += 1 will add 1 to the index which makes it 3 that will satisfied our condition of index == lengthOfArr so it will assign "everyone account for"
    to logThis
    */
    index += 1;
    var logThis = index == lengthOfArr ? "Everyone account for" : printMe;
    console.log(logThis);
  }

  return innerFunc;
}

/*

Challenge 8

Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password).
saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument.
When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.

*/

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

function saveOutput(callbackFunc, passwordStr) {
  var returnThisObj = {};

  function innerFunc(inputForCallback) {
    if (inputForCallback == passwordStr) {
      console.log(returnThisObj);
    } else {
      var resultFromInvokingCallback = callbackFunc(inputForCallback);

      returnThisObj = Object.assign(returnThisObj, {
        [inputForCallback]: resultFromInvokingCallback,
      });
      console.log(resultFromInvokingCallback);
    }
  }

  return innerFunc;
}

/* 
Challenge 9
Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments.
When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth.
After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

*/

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

function cycleIterator(arrInput) {
  var index = 0;
  var lengthOfArr = arrInput.length;

  function innerFunc() {
    if (index == lengthOfArr) {
      index = 0;
    }
    var itemInArr = arrInput[index];
    index += 1;
    return itemInArr;
  }

  return innerFunc;
}
