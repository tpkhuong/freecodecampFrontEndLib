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

/*
Challenge 10
Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument.
defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument.
Additional arguments needed by the passed-in function will need to be passed into the returned function.

*/

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

function defineFirstArg(callbackFunc, userInput) {
  function innerFunc(...args) {
    /* this function will invoked the callbackFunc*/
    /*the callbackFunc will take at least one argument*/
    /*userInput will be the first argument for the callbackFunc*/
    var result = callbackFunc(userInput, ...args);
    /*we can use callbackFunc.apply(null, args) because args will be an array of the arguments/values passed in */
    return result;
  }

  return innerFunc;
}

/*
Challenge 11
Create a function dateStamp that accepts a function and returns a function.
The returned function will accept however many arguments the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation,
and an output key that contains the result from invoking the passed-in function.
HINT: You may need to research how to access information on Date objects.

*/

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

function dateStamp(callbackFunc) {
  function innerFunc(...args) {
    var date = Date().slice(0, 15);

    var output = callbackFunc(...args);
    return {
      date,
      output,
    };
  }

  return innerFunc;
}

/*

Challenge 12
Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given,
the returned function will hold onto the two strings as a pair, for future use. When one string is given,
the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).
*/

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

function censor() {
  // check the length of our array
  // if the length is two save the pair of strings in an array. if the length is 1 and the array of pair values is 0 we will return the string.
  //if the array of pair of strings is greater than 0 we will look for the first value in the array in the string and replace it with the second value in the array.
  //we will return -1 if the single string does not include the first value of our two pair array

  var lengthOfListOfArgs;
  var arrOfPairOfStrings = [];

  function innerFunc(...listOfArgs) {
    lengthOfListOfArgs = listOfArgs.length;
    console.log(lengthOfListOfArgs);
    if (lengthOfListOfArgs == 0) {
      return `We require 1 string. Thank you. Try again`;
    } else if (lengthOfListOfArgs < 2) {
      if (arrOfPairOfStrings.length < 1) {
        return `Please add a pair of strings. There is no pair of strings in our array. Which means we can't replace the first value with the second value.`;
      } else {
        // work on this algorithm
        //in the single string, look for the first value then replace it with the second value in the array.
        var splitThisStr = listOfArgs[0].split(" "); //loop through arrOfPairOfStrings, search for the index of the first value in that arr in the splitThisStr array or we can use reduce build our string that way

        /* split the punctuation from the word first */
        var arrayWithWordAndPuncSeperated = splitThisStr.reduce(
          function rebuildStrWithPuncSeparated(buildingUp, currentValue) {
            /* what to do if our string contains a punctuation */
            var nonLettersAndNum = currentValue.match(/\W/);

            if (nonLettersAndNum == null) {
              return [...buildingUp, currentValue];
            } else {
              if (currentValue.includes(...nonLettersAndNum)) {
                let indexOfPunc = currentValue.indexOf(...nonLettersAndNum);
                let ourWord = currentValue.slice(0, indexOfPunc);
                let ourPunctuation = currentValue.slice(indexOfPunc);
                return [...buildingUp, ourWord, ourPunctuation];
              }
            }
          },
          []
        );

        /* working with an array of strings and punctuations:["The", "quick", ",", "brown", "fox", "jumps", "over",  "the",  "lazy", "dogs", "."]  */
        var arrayOfReplacedMatchingStr = arrayWithWordAndPuncSeperated.reduce(
          function findAndReplace(buildingUp, currentValue) {
            /* if our currentValue is a puncturation use this line of code to copy the current array of str which will be buildingUp(using spread operator) with currentValue. [...buildingUp, currentValue] */
            var replaceCurrStrWithThisStr;
            var addPunctuation = currentValue.match(/\W/);
            if (addPunctuation == null) {
              /* might have to loop through another array inside this reduce */
              /* loop through arrOfPairOfStrings check if the first value of each subarray match currentValue of arrayWithWordAndPuncSeperated */
              arrOfPairOfStrings.forEach(function findTheMatchingStr(
                eachSubarray
              ) {
                var [
                  checkThisValue,
                  assignThisValueToReplaceCurrStrVariable,
                ] = eachSubarray;
                if (checkThisValue == currentValue) {
                  replaceCurrStrWithThisStr = assignThisValueToReplaceCurrStrVariable;
                }
              });
              if (replaceCurrStrWithThisStr == undefined) {
                return [...buildingUp, currentValue];
              } else {
                return [...buildingUp, replaceCurrStrWithThisStr];
              }
            } else {
              /* currentValue is a punctuation. we can split the str before our punctuation and combine our str and punctuation into a single str */
              /* using the currentIndex will not work because the length of the buildingUp array will be different once we combine the string with the punctuaion
              better to use the length of the buildingUp array and copy the last value in that array and the values before the last value in that array.
              */
              var lengthOfBuildingUpArray = buildingUp.length;
              let stringsBeforeReplacedWord = buildingUp.slice(
                0,
                lengthOfBuildingUpArray - 1
              );
              let wordBeforePunc = buildingUp.slice(
                lengthOfBuildingUpArray - 1
              )[0];
              /* spliting wordBeforePunc then combine it with our punctuation into a single string. */
              let replacedWordCombinedWithPunctuation = [
                ...wordBeforePunc,
                currentValue,
              ].join("");

              return [
                ...stringsBeforeReplacedWord,
                replacedWordCombinedWithPunctuation,
              ];
            }
          },
          []
        );
        /* combine the strings into a single string */
        return arrayOfReplacedMatchingStr.join(" ");
      }
    } else {
      // here we will be working with two string values. we want to add these pair of strings to our array
      //list of args is an array.
      arrOfPairOfStrings = arrOfPairOfStrings.concat([[...listOfArgs]]);
    }
    console.log(arrOfPairOfStrings);
  }

  return innerFunc;
}

// var ourBoolean = arrOfPairOfStrings.every(function getBoolean(eachSubarray) {
//   var [firstValue, secondValue] = eachSubarray;
//   return eachValue != firstValue;
// })
// console.log(ourBoolean);
// var thisStrIsNotOneOfTheValueInOurArrOfStrings;

/* 
Challenge 13
There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret)
which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret
*/

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5)
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2

function createSecretHolder(secret) {
  var objFullOfSecrets = { secret };

  // objFullOfSecrets[secret] = secret;

  console.log(objFullOfSecrets);
  function getSecret() {
    return objFullOfSecrets.secret;
  }
  function setSecret(secretForSetMethod) {
    objFullOfSecrets = Object.assign(objFullOfSecrets, {
      secret: secretForSetMethod,
    });

    /* if we want to have more than one secrets in our obj */

    // var hasProperty = objFullOfSecrets.hasOwnProperty(secretForSetMethod);
    // if (!hasProperty) {
    // } else {
    //   return `Sorry this secret already exist, Try Again`;
    // }
  }

  return {
    getSecret,
    setSecret,
  };
}

/*
Challenge 14
Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called.

*/

// CHALLENGE 14

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2

function callTimes() {
  var counter = 0;

  function innerFunc() {
    counter += 1;
    return counter;
  }

  return innerFunc;
}

/*
Challenge 15
Create a function russianRoulette that accepts a number (let us call it n), and returns a function.
The returned function will take no arguments, and will return the string 'click' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string 'bang'.
On every invocation after that, the returned function returns the string 'reload to play again'.
*/

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'bang'
// console.log(play()); // => should log 'reload to play again'
// console.log(play()); // => should log 'reload to play again'

function russianRoulette(numInput) {
  var counter = 1;
  function innerFunc() {
    if (counter < numInput) {
      counter += 1;
      return `click`;
    } else if (counter > numInput) {
      return `reload to play again`;
    } else {
      counter += 1;
      return `bang`;
    }
  }

  return innerFunc;
}

/*

Challenge 16

Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all).
When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number).
When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.

*/

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8

function average() {
  var storageOfNumInputs = [];
  var sum = 0;
  var avgSoFar = 0;

  function innerFunc(numInput) {
    if (numInput != undefined) {
      storageOfNumInputs = [...storageOfNumInputs, numInput];
      var lengthOfArr = storageOfNumInputs.length;
      var addThisValue = storageOfNumInputs[lengthOfArr - 1];
      sum += addThisValue;

      avgSoFar = sum / lengthOfArr;
    } else {
      if (numInput == undefined && storageOfNumInputs.length === 0) {
        return avgSoFar;
      } else if (numInput == undefined && storageOfNumInputs.length > 0) {
        return avgSoFar;
      }
    }
  }
  return innerFunc;
}
