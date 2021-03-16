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
      var resultFromInvo"king"Callback = callbackFunc(inputForCallback);

      returnThisObj = Object.assign(returnThisObj, {
        [inputForCallback]: resultFromInvo"king"Callback,
      });
      console.log(resultFromInvo"king"Callback);
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
and an output key that contains the result from invo"king" the passed-in function.
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

        /* wor"king" with an array of strings and punctuations:["The", "quick", ",", "brown", "fox", "jumps", "over",  "the",  "lazy", "dogs", "."]  */
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
      // here we will be wor"king" with two string values. we want to add these pair of strings to our array
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

/*

Challenge 17
Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback).
The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array).
Otherwise, the returned function should return false.

*/

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

function makeFuncTester(arrInput) {
  function innerFunc(callbackFunc) {
    return arrInput.every(function matchSecondValue(eachSubarray) {
      var [passAsArg, matchReturnValue] = eachSubarray;
      var returnValueFromCallback = callbackFunc(passAsArg);
      return returnValueFromCallback == matchReturnValue;
    });
  }

  return innerFunc;
}

/*

Challenge 18
Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string).
The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only).
Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space).
However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that deleted string with the word 'undone' after (separated by a space).
If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.
*/

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'

function makeHistory(limitInput) {
  var history = [];
  function innerFunc(strInput) {
    if (strInput == "undo" && history.length == 0) {
      return "nothing to undo";
    }

    if (strInput != "undo" && history.length >= 0) {
      history = [...history, strInput];
      if (history.length > limitInput) {
        let limitExceeded = history.length - limitInput;
        return `${strInput} done. we passed the limit. use 'undo' ${limitExceeded} times to reach our max limit`;
      } else {
        return `${strInput} done`;
      }
    } else {
      if (history.length > limitInput) {
        let removeMostRecentEntry = history.pop();
        /***** calculate how many time we need to use undo to get to limit number *****/
        var exceededLimit = history.length - limitInput;
        return history.length == limitInput
          ? `${removeMostRecentEntry} undone. we are at our limit`
          : `${removeMostRecentEntry} undone. We exceeded the limit by ${exceededLimit}, pass in 'undo' ${exceededLimit} times to reach our limit`;
      } else {
        let removeEntry = history.pop();
        console.log("We are at or below our limit");
        return `${removeEntry} undone`;
      }
    }
  }

  return innerFunc;
}

/*

Create a function blackjack that accepts an array (which will contain numbers ranging from 1 through 11), and returns a DEALER function.
The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.
On the FIRST invocation of the PLAYER function, it will return the sum of the two numbers passed into the DEALER function.

On the SECOND invocation of the PLAYER function, it will return either:

the first number in the array that was passed into blackjack PLUS the sum of the two numbers passed in as arguments into the DEALER function, IF that sum is 21 or below, OR
the string 'bust' if that sum is over 21.

If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are done!' (but unlike 'bust', the 'you are done!'
output will NOT use a number in the array). If it is NOT 'bust', then the next invocation of the PLAYER function will return either:

the most recent sum plus the next number in the array (a new sum) if that new sum is 21 or less, OR
the string 'bust' if the new sum is over 21.

And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you are done!'.
Otherwise, it can continue on to give the next sum with the next number in the array, and so forth.
You may assume that the given array is long enough to give a 'bust' before running out of numbers.

BONUS: Implement blackjack so the DEALER function can return more PLAYER functions that will each continue to take the next number in the array after the previous PLAYER function left off.
You will just need to make sure the array has enough numbers for all the PLAYER functions.

*/

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, "ace", 7, 11, 4, 6, 3, 9, 8,"ace", 9, 3, 10, 4, 5,"ace", 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
function blackjack(arrOfNumbers) {
  var dealerDeckOfCards = [...arrOfNumbers];
  

  function dealer(firstNum, secondNum) {
    /***** we want to return the str of card shapes and value the first time. use the once helper function *****/ 
      var counter = 0;
      /***** we want to return the str of card shapes and value the first time. use the once helper function *****/ 
    var firstPlayerSum;
    var firstDealerSum;
    var currrentSum;
    var playerCurrentSum;
    var dealerCurrentSum;
    var bustStr;
    var weHaveAwinner;

    var faceCards = ["jack", "queen", "king"];
    /***** when we called/execute/invoked drawCards() in player(). everytime we called player() we got two new cards *****/ 
    var [{ cardSuit: firstPlayerCard, cardValue: firstPlayerCardValue }, { cardSuit: secondPlayerCard, cardValue: secondPlayerCardValue }] = drawCards();
    var [{ cardSuit: firstDealerCard, cardValue: firstDealerCardValue }, { cardSuit: secondDealerCard, cardValue: secondDealerCardValue }] = drawCards();
    /***** when we called/execute/invoked drawCards() in player(). everytime we called player() we got two new cards *****/ 
    // var firstCard;
    // var firstCardValue;
    // var secondCard;
    // var secondCardValue;

    firstPlayerSum = calculateSum(faceCards, firstPlayerCardValue, secondPlayerCardValue);
    firstDealerSum = calculateSum(faceCards, firstDealerCardValue, secondDealerCardValue);
    playerCurrentSum = firstPlayerSum;
    dealerCurrentSum = firstDealerSum;
    /***** algorithm to calculate when we get an "ace" *****/ 
    function player(strInput) {
      
    /***** return this string the first time and only once. use the once helper function *****/
      var dealerAndPlayerCards = {
          player: {
            firstCard: firstPlayerCard,
            firstCardValue:firstPlayerCardValue,
            secondCard: secondPlayerCard,
            secondCardValue:secondPlayerCardValue,
            sum: firstPlayerSum
          },
          dealer:{
            firstCard:firstDealerCard,
            firstCardValue:firstDealerCardValue,
            secondCard:secondDealerCard,
            secondCardValue:secondDealerCardValue,
            sum:firstDealerSum
          }
        };
      if (counter == 0) {

        counter += 1;
        setTimeout(function waitForResponse() {
          console.log(`Dealer Sum: ${firstDealerSum}`);
          console.log(`Player Sum: ${firstPlayerSum}`)
          console.log("Player: Hit or Hold?")
          if (typeof firstDealerSum == "string") {
          if (firstDealerSum.includes('Blackjack')) {
            console.log(`Dealer got BlackJack. Dealer Wins`);
            console.log(`Call the function again with 'yes' to play again or 'no' to stop. Save it to a variable`);
          }
        }
        if (typeof firstPlayerSum == "string") {
          if (firstPlayerSum.includes('Blackjack')) {
            console.log(`Player got BlackJack. Player Wins`);
            console.log(`Call the function again with 'yes' to play again or 'no' to stop. Save it to a variable`);
          }
          }
        }, 1500)
        
        return dealerAndPlayerCards;
        // return `Drawn Cards: [suit: ${firstCard},value:${firstCardValue}][suit:${secondCard},value:${secondCardValue}]. Sum:${firstSum}`;
        
      } else if (strInput == 'hold' || strInput == "hit") {
        
      /***** check if player want to "hit" or "hold" *****/
        if (strInput == "hold") {
          if (dealerCurrentSum >= 17 && playerCurrentSum > dealerCurrentSum) {
            weHaveAwinner = "player";
            return checkForWinner(weHaveAwinner);
          } else if (dealerCurrentSum >= 17 && dealerCurrentSum > playerCurrentSum) {
            weHaveAwinner = "dealer";
            return checkForWinner(weHaveAwinner);
          } else if (dealerCurrentSum == playerCurrentSum) {
            console.log("Push");
            weHaveAwinner = "push";
            return checkForWinner(weHaveAwinner)
          } else {
            let checkForType;
            while (typeof weHaveAwinner != "string") {
              /***** function to calculate dealer sum. if dealer sum is less than 16 hit else dealer has to hit until dealer wins or bust(player will win) *****/
              checkForType = dealersTurn(dealerDeckOfCards, dealerCurrentSum, playerCurrentSum);
              if (typeof checkForType == "object") {
                let { strForm } = checkForType;
                bustStr = strForm;
                weHaveAwinner = "player";
                return checkForWinner(weHaveAwinner,bustStr);
              } else {
                dealerCurrentSum = checkForType;
                if (typeof checkForType == "number" && dealerCurrentSum > playerCurrentSum) {
                weHaveAwinner = "dealer";
                } else if (typeof checkForType == "number" && dealerCurrentSum == playerCurrentSum) {
                  console.log("Push");
                  weHaveAwinner = "push";
                  return checkForWinner(weHaveAwinner);
              }
                console.log(dealerCurrentSum);
              }
            }
            /***** function to calculate dealer sum. if dealer sum is less than 16 hit else dealer has to hit until dealer wins or bust(player will win) *****/
          }

          
        } else {
          /***** first value we pass into playerCalledHit will be firstPlayerSum which we assigned to playerCurrentSum and passed it into playerCalledHit
           * the second time playerCalledHit is called the value of playerCurrentSum will be
           * the value that is return from playerCalledHit. everytime we call playerCalledHit the playerCurrentSum value that is passed into the func call will be the value console.log(ed from the 
           * previous func call of playerCalledHit
           *  *****/
          // console.log(firstPlayerSum);
          // console.log(playerCurrentSum);
          
          playerCurrentSum = playerCalledHit(dealerDeckOfCards, playerCurrentSum);
          if (typeof playerCurrentSum == "string") {
            weHaveAwinner = "dealer";
            return checkForWinner(weHaveAwinner, bustStr);
          } else {
            console.log(playerCurrentSum);

          }
          // console.log(strInput);
        }
      /***** check if player want to "hit" or "hold" *****/
        
      } else {
        
        if (strInput == "yes") {
          console.log("Pass in 'yes' to save the blackjack function to a variable.");
          console.log("Call that variable with a new deck of cards.");
          console.log("The variable will hold the value that is returned from blackjack func which is another func");
          console.log("save return function to a var/identifier");
          console.log("that function will return another function, save that to a variable.");
          console.log("Call that variable it will be a function.");
          console.log("The game will start again");
          return blackjack;
        } else {
          return "We are done!"
        }
        // if (weHaveAwinner == "player") {
        //       return checkForWinner(weHaveAwinner,playAgain, bustStr)
        //     } else {
        //       return checkForWinner(weHaveAwinner,playAgain)
        //     }
      }
      /***** return this string the first time and only once. use the once helper function *****/ 
      /***** if firstCardValue or secondCardValue is an "ace" *****/
      /***** the value of "ace" will depend on the currentSum. if currentSum/firstSum is <= 10, value of "ace" will be 11 
       * if currentSum/firstSum is greater than >= 11 value of "ace" will be 1
       * *****/ 
      /***** if firstCardValue or secondCardValue is an "ace" *****/
      /***** if strInput is "hit" we will draw a card from deal deck else  *****/ 
      
      // firstSum = drawCards().reduce(function getSum(buildingUp, currentValue) {
        // firstCard = first;
        // firstCardValue = firstValue;
        // secondCard = second;
        // secondCardValue = secondValue;
        // console.log(firstCard);
        // console.log(firstCardValue);
        // console.log(secondCard);
        // console.log(secondCardValue);
        
      //   return buildingUp += currentValue;
      // }, 0);
      // return firstSum;
      // console.log(firstNum, secondNum);
      /***** more than one player have each player function return a player function *****/
      // function secondPlayer() {
      //   console.log(firstNum.secondNum)
      // }
      // return secondPlayer;
      
      
    
    }

    return player;
  }
  return dealer;
}

/***** play again? *****/
/***** play again algorithm *****/
  function playAgain(askPlayer = "", blackjackFunc) {
    console.log(weHaveAwinner);
    if (weHaveAwinner) {
      console.log("Play Again? Enter the string 'Yes' or 'No'");
      askPlayer.toLowerCase();
      if (askPlayer == "yes") {
        console.log("we are in the playAgain function");
        return blackjack;
        // return dealer;
      }
    }
    
  }
  /***** play again algorithm *****/ 
/***** play again? *****/

function checkForWinner(strInput, isItBust = "") {
  var lowerCaseBust = isItBust.toLowerCase();
  if (strInput == "dealer" && lowerCaseBust == "bust") {
    console.log(`Player Bust. Dealer Wins`);
    console.log("Enter 'yes' to play again or 'no'")
  } else if (strInput == "player" && lowerCaseBust == "bust") {
    console.log(`Dealer bust. Player Wins`)
    console.log("Enter 'yes' to play again or 'no'")
  } else if(strInput == "push") {
    console.log("Push!")
    console.log("Enter 'yes' to play again or 'no'")
  } else {
    if (strInput == "dealer") {
      console.log(`Dealer Wins`)
      console.log("Enter 'yes' to play again or 'no'");
    } else {
      console.log(`Player Wins`);
      console.log("Enter 'yes' to play again or 'no'");
    }
  }
}

function drawCards() {
  var deckOfCards = {
    spades: ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"],
    clubs: ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"],
    diamonds: ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"],
    hearts: ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"],
  };
  
  return pickRandomCards(deckOfCards);
  // var arrOfCardShape = ["spades", "clubs", "diamonds", "hearts"];
}

function dealersTurn(arrOfCardsToDraw,dealerSum, playerSum) {
  var randomValueCard = drawRandomCardFromDealerDeck(arrOfCardsToDraw);

  /***** if dealer draws ace *****/
  if (randomValueCard == "ace") {
    if (dealerSum >= 11) {
      randomValueCard = 1;
    } else {
      randomValueCard = 11;
    }
  }
  console.log(`DrawnValue: ${randomValueCard}`);
/***** if dealer draws ace *****/
  var newSum = dealerSum + randomValueCard;
  if (newSum > 21) {
    return {
      strForm: `BUST`,
      newSum
    }
  } else {
    return newSum;
  }
}

function playerCalledHit(arrDrawCard, playerSum) {
  
  // var copiedOfArrCards = [...arrDrawCard];
  // var lengthOfDrawCards = copiedOfArrCards.length;
  // var randomIndex = Math.floor(Math.random() * lengthOfDrawCards);
  var randomValueCard = drawRandomCardFromDealerDeck(arrDrawCard);
  

/***** if player draws ace *****/
  if (randomValueCard == "ace") {
    if (playerSum >= 11) {
      randomValueCard = 1;
    } else {
      randomValueCard = 11;
    }
  }
/***** if player draws ace *****/
  console.log(`DrawnValue: ${randomValueCard}`);
  var newSum = playerSum + randomValueCard;
  if (newSum > 21) {
    return `BUST`
  } else {
    return newSum;
  }
  // console.log(playerSum)
  // console.log(randomValueCard)

  // return "hello from playerCalledHit func";
}

function drawRandomCardFromDealerDeck(arrDrawCard) {
  var copiedOfArrCards = [...arrDrawCard];
  var lengthOfDrawCards = copiedOfArrCards.length;
  var randomIndex = Math.floor(Math.random() * lengthOfDrawCards);
  var randomValueCard = copiedOfArrCards[randomIndex];

  return randomValueCard;
}

function calculateSum(arrOfFaceCards,firstValueInput, secondValueInput) {
  var sum;

  if (arrOfFaceCards.includes(firstValueInput)) {
      firstValueInput = 10;
  }
  if (arrOfFaceCards.includes(secondValueInput)) {
      secondValueInput = 10;
    }
  /***** algorithm to calculate when we get an "ace" *****/
    if (firstValueInput == "ace" && secondValueInput != "ace") {
      if (secondValueInput == 10) {
        sum = 21;
        
        return `Blackjack!!! You Win!!!`
      } else {
        firstValueInput = 11;
        sum = firstValueInput + secondValueInput;
      }
    } else if (secondValueInput == "ace" && firstValueInput != "ace") {
      if (firstValueInput == 10) {
        sum = 21;
        return `Blackjack!!! You Win!!!`;
      } else {
        secondValueInput = 11;
        sum = firstValueInput + secondValueInput;
      }
    } else if(firstValueInput == "ace" && secondValueInput == "ace") {
        sum = 12;
    } else {
      /***** when we get to this "else" both card are not "ace" ****/
        sum = firstValueInput + secondValueInput;
        /***** when we get to this "else" both card are not "ace" ****/ 
      }
  
  return sum;
}

// function handleFaceCardValue() {
  
// }

function pickRandomCards(objDeckOfCards) {
  
  var arrayCardSuits = Object.keys(objDeckOfCards);
  var lengthOfCardSuits = arrayCardSuits.length;
  var lengthOfArrayDeckOfCards;
  /***** since we are using the length of an array, we don't want to use +1 to include the length of the array because the index of an array starts at 0 and ends 1 length below the
   * length of array.
   * *****/
  var arrOfCardDraw = [];

  for (let i = 0; i < 2; i++) {
    let randomIndexForShapes = Math.floor(Math.random() * lengthOfCardSuits);
    let randomSingleCardSuit = arrayCardSuits[randomIndexForShapes];
    let lengthDeckOfCards = objDeckOfCards[randomSingleCardSuit].length
    let randomIndexForDeckOfCards = Math.floor(
      Math.random() * lengthDeckOfCards
    );
    let cardValue = objDeckOfCards[randomSingleCardSuit][randomIndexForDeckOfCards];
  
    arrOfCardDraw = [...arrOfCardDraw, {cardSuit: randomSingleCardSuit, cardValue}]
  }
  return arrOfCardDraw;
}

// function randomNumber() {
//   var arrOfCardShape = ["spades", "clubs", "diamonds", "hearts"];
//   var randomIndexForShapes = Math.floor(Math.random() * arrOfCardShape.length);

//   /***** change string of "jack", "queen", "king" to the value 10 *****/ 
//     if (faceCards.includes(firstCardValue)) {
//       firstCardValue = 10;
//     } else if (faceCards.includes(secondCardValue)) {
//       secondCardValue = 10;
//     }
// /***** change string of "jack", "queen", "king" to the value 10 *****/ 
//   /***** algorithm to calculate when we get an "ace" *****/
//     if (firstCardValue == "ace") {
//       if (secondCardValue == 10) {
//         return `Blackjack!!! You Win!!!`
//       } else {

//         firstSum = firstCardValue + secondCardValue;
//       }
//     } else if (secondCardValue == "ace") {
//       if (firstCardValue == 10) {
//         return `Blackjack!!! You Win!!!`;
//       } else {
//         firstSum = firstCardValue + secondCardValue;
//       }
//     } else {
//       if (firstCardValue == "ace" && secondCardValue == "ace") {
//         firstSum = 12;
//       } else {
//       /***** when we get to this "else" both card are not "ace" ****/
//         firstSum = firstCardValue + secondCardValue;
//         /***** when we get to this "else" both card are not "ace" ****/ 
//       }
//     }

//   return randomIndexForShapes;
// }


// function Foo(name) {
//   this.name = name;
//   this.score = 0;
//   this.sayHi = "Hi"
// }

// Foo.prototype.sayName = function () {
//   console.log(`my name is ${this.name}. I want to say ${this.sayHi}`);
// }

// var user1 = new Foo("Marvel");