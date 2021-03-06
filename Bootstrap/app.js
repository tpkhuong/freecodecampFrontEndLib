/*** 
 * const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput = "",
      toDoList = []
    }
    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(','); <=== spliting the text of the textarea in to an array. saving that array to itemsArray
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(function printToDos(eachItem){
      
    }); // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
 * 
 * 
 * ***/

const items = this.state.toDoList.map(function listOfToDos(eachItem) {
  /*** we want to render an <li> for each item enter in the text area
   * eachItem will be a string that we want to render as an <li>
   * ***/
  return <li>{eachItem}</li>;
});

const frontEndFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Knockout",
  "Backbone",
  "Vue",
];

function uniqueNumber() {
  return Math.random() * 10;
}

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(function liWithUniqueId(
    eachitem
  ) {
    return <li key={uniqueNumber()}>{eachItem}</li>;
  }); // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}

/***
 *
 * Second Challenge
 *
 * ***/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: "Jeff",
          online: true,
        },
        {
          username: "Alan",
          online: false,
        },
        {
          username: "Mary",
          online: true,
        },
        {
          username: "Jim",
          online: false,
        },
        {
          username: "Sara",
          online: true,
        },
        {
          username: "Laura",
          online: true,
        },
      ],
    };
  }
  render() {
    const usersOnline = this.state.users.filter(function filterOnline(
      eachItem
    ) {
      return eachItem.online === true;
    }); // Change this line
    const renderOnline = null; // Change this line
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}

var state = {
  users: [
    {
      username: "Jeff",
      online: true,
    },
    {
      username: "Alan",
      online: false,
    },
    {
      username: "Mary",
      online: true,
    },
    {
      username: "Jim",
      online: false,
    },
    {
      username: "Sara",
      online: true,
    },
    {
      username: "Laura",
      online: true,
    },
  ],
};

const usersOnline = state.users
  .filter(function filterOnline(eachItem) {
    return eachItem.online === true;
  })
  .map(function makeLi(eachValue) {
    console.log(eachValue.username);
    return {
      key: uniqueNumber(),
      username: eachValue.username,
    };
  }); // Change this line

/******** CS Bin *********/

/*
Challenge 9
Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it.
To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array.
If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
*/

/*
function: two arrays as parameters and a callback. 3 parameters in total.
*/

/* example of output */

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

/*
we are passing the value from the first array into the callback. we want to check if the value that is returned from the callback matches the value in the second array
by index.
*/

function objOfMatches(list1, list2, callback) {
  var copiedArr = [...list1];
  var ourReturnedObj = copiedArr.reduce(
    function returnArrWithNewValueFromCallback(
      buildingUp,
      currentValue,
      currentIndex
    ) {
      /* have to matched index and the return value from running the callback must equal the value in list2 */
      var valueReturnedFromCallback = callback(currentValue);
      var findIndexOfValueInList2 = list2.indexOf(valueReturnedFromCallback);
      if (currentIndex == findIndexOfValueInList2) {
        /* explore returning an object.assign where our buildingUp is an object instead of an array with an obj*/
        // return buildingUp.concat({ [currentValue]: valueReturnedFromCallback });
        return Object.assign(buildingUp, {
          [currentValue]: valueReturnedFromCallback,
        });
      }

      return buildingUp;
    },
    {}
  );

  return ourReturnedObj;
  /*** we used the code below because our first attempt we looped over list1 using reduce and returned an array of objects
   * but our algorithm using reducing and Object.assign we were able to return an object wit the key:value pairing that satisfied the challenge.
   *  ***/

  // var whatIsThisValue = arrOfObjs.reduce(function combineObjs(
  //   buildingUp,
  //   currentValue
  // ) {
  //   return Object.assign(buildingUp, currentValue);
  // },
  // {});
  /* both reduce and map works if we want an array that has the returned values from passing eachValue into the callbackFunc*/
  // var usingMapFunc = copiedArr.map(function sameLengthArr(eachValue) {
  //   return callback(eachValue);
  // });
  // console.log(whatIsThisValue);
  /*checkTheseValuesWithList2Values will be an array of values that is return from passing the values in list1 to the callback*/

  /***return an object. ***/
}

function upperCareLetters(strInput) {
  return strInput.toUpperCase();
}

/*just in case*/
function runOnce(callback) {
  var counter = 0;

  return function (input) {
    if (counter < 1) {
      var result = callback(input);
      counter += 1;
      return result;
    }
  };
}

/*** might not have to use for loop inside of reduce
 * var valueForOurReturnedObj;
  for (let innerIndex = 0; innerIndex < list2.length; innerIndex++) {
      let eachSubValue = list2[innerIndex];
      if (
        currentIndex == innerIndex &&
        valueReturnedFromCallback == eachSubValue
      ) {
        valueForOurReturnedObj = eachSubValue;
        /* once we use the return inside a reduce it goes to the next value in the array.
        return buildingUp.concat([{ [currentValue]: valueForOurReturnedObj }]);
        // if (currentIndex < innerIndex && valueForOurReturnedObj != undefined)
        //   break;
      }
    }
  ***/

/* 
Challenge 10
Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values.
The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
*/

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

function multiMap(arrOfVals, arrOfCallbacks) {
  /*returning an object. the key of our obj will be the values from the arrOfVals. we will pass eachValue in the arrOfValues as input into each functions in the arrOfFuncs
  the values in our obj will be the RETURNED value of passing each value in the arrOfValues as input to each functions in the arrOfCallbacks in an array.
  */
  var [firstFunc, secondFunc, thirdFunc] = arrOfCallbacks;
  var objOfArrAsValues = arrOfVals.reduce(
    function passValIntoEachFuncInSecondList(buildingUp, currentValue) {
      var firstValue = firstFunc(currentValue);
      var secondValue = secondFunc(currentValue);
      var thirdValue = thirdFunc(currentValue);

      return Object.assign(buildingUp, {
        [currentValue]: [firstValue, secondValue, thirdValue],
      });
    },
    {}
  );

  return objOfArrAsValues;
}

var ourStrings = ["catfood", "marvel", "drinks"];
var ourFuncs = [toUpperCase, capitalizeFirstStr, concatSameWord];

function toUpperCase(strInput) {
  return strInput.toUpperCase();
}

function capitalizeFirstStr(strInput) {
  return strInput.charAt(0).toUpperCase() + strInput.slice(1).toLowerCase();
}

function concatSameWord(strInput) {
  return `${strInput}${strInput}`;
}

/***
 * Challenge 11
Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter. objectFilter will return a new object.
The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback.
 *  ***/

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

function objectFilter(objInput, callback) {
  var arrOfKeysValuesPair = Object.entries(objInput);

  var ourObj = arrOfKeysValuesPair.reduce(function matchTheValue(
    buildingUp,
    currentValue
  ) {
    var [ourKey, ourValue] = currentValue;
    var checkThisValue = callback(ourKey);
    if (checkThisValue == ourValue) {
      return Object.assign(buildingUp, { [ourKey]: checkThisValue });
    }
    return buildingUp;
  },
  {});

  console.log(ourObj);
}

function toUpperCase(strInput) {
  return strInput.toUpperCase();
}

/*
Challenge 12
Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback
on each element until it can be determined
if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

*/

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

function majority(arrInput, callbackFunc) {
  var objOfBooleanFreqCount = arrInput.reduce(function countTheBoolean(
    buildingUp,
    currentValue
  ) {
    var ourBoolean = callbackFunc(currentValue);
    buildingUp[ourBoolean] = (buildingUp[ourBoolean] || 0) + 1;
    return buildingUp;
  },
  {});

  return objOfBooleanFreqCount["true"] <= objOfBooleanFreqCount["false"]
    ? false
    : true;
}

function isOdd(numInput) {
  return numInput % 2 !== 0;
}

/*
Challenge 13
Create a function prioritize that accepts an array and a callback.
The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array,
where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.
*/

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
//['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

// make two arrays. one will hold values that the callback returned true and one array will hold values that the callback returned false.
function prioritize(arrInput, callbackFunc) {
  var valuesThatPassedCheck = [];
  var valuesThatDidNotPassCheck = [];

  arrInput.forEach(function separateTheValues(eachValue) {
    var ourBooleanValue = callbackFunc(eachValue);

    if (ourBooleanValue) {
      valuesThatPassedCheck.push(eachValue);
    } else {
      valuesThatDidNotPassCheck.push(eachValue);
    }
  });
  return [...valuesThatPassedCheck, ...valuesThatDidNotPassCheck];
}

/* 
Challenge 14
Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element.
Each return value from the callback will be saved as a key on the object.
The value associated with each key will be the number of times that particular return value was returned.
*/

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }

function countBy(arrInput, callbackFunc) {
  return arrInput.reduce(function freqCounter(buildingUp, currentValue) {
    var oddOrEven = callbackFunc(currentValue);

    buildingUp[oddOrEven] = (buildingUp[oddOrEven] || 0) + 1;
    return buildingUp;
  }, {});
}

/*
Challenge 15
Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element.
Each return value from the callback will be saved as a key on the object.
The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.
*/

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

function groupBy(arrInput, callbackFunc) {
  return arrInput.reduce(function returnObj(buildingUp, currentValue) {
    var ourKey = callbackFunc(currentValue);
    // var ourArray = []

    if (!buildingUp[ourKey]) {
      buildingUp[ourKey] = [];
    }
    // works
    // return Object.assign(buildingUp, {
    //   [ourKey]: [...buildingUp[ourKey], currentValue],
    // });
    return Object.assign(buildingUp, {
      [ourKey]: [...buildingUp[ourKey], currentValue],
    });
  }, {});
  /*or*/
  /* 
  var ourKey = callbackFunc(currentValue);
    if (!buildingUp[ourKey]) {
      buildingUp[ourKey] = [];
    }
    buildingUp[ourKey].push(currentValue);
    return buildingUp;
  },
  {});
  */
}

/*
Challenge 16
Create a function goodKeys that accepts an object and a callback. The callback will return either true or false.
goodKeys will iterate through the object and perform the callback on each value.
goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.
*/

// /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

function goodKeys(objInput, callbackFunc) {
  /* using for in loop: works!*/
  // var arrOfKeys = []
  // for (let eachKey in objInput) {
  //   var ourBooleanCheck = callbackFunc(objInput[eachKey]);

  //   if (ourBooleanCheck) {
  //     arrOfKeys.push(eachKey);
  //   }
  // }

  // console.log(arrOfKeys);
  /* using reduce: works! */
  var convertObjToArray = Object.entries(objInput);

  var returnThisArr = convertObjToArray.reduce(function getObjKeys(
    buildingUp,
    currentValue
  ) {
    var [objKey, objValue] = currentValue;
    var ourBoolean = callbackFunc(objValue);
    if (ourBoolean) {
      return [...buildingUp, objKey];
    }
    return buildingUp;
  },
  []);

  console.log(returnThisArr);
}

var testObj = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};

var addToObj = {};

for (let eachKey in testObj) {
  Object.assign(addToObj, { [eachKey]: testObj[eachKey] + "!" });
}

/* 
Challenge 17
Create a function commutative that accepts two callbacks and a value. commutative will return a boolean indicating if the passing the value into the first function,
and then passing the resulting output into the second function, yields the same output as the same operation with the order of the functions reversed
(passing the value into the second function, and then passing the output into the first function).
*/

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

function commutative(firstCallback, secondCallback, valueInput) {
  var firstOrder = secondCallback(firstCallback(valueInput));
  var secondOrder = firstCallback(secondCallback(valueInput));

  return firstOrder == secondOrder ? true : false;
  /* return a boolean */
}

/*
Challenge 18
Create a function objFilter that accepts an object and a callback. objFilter should make a new object, and then iterate through the passed-in object, using each key as input for the callback.
If the output from the callback is equal to the corresponding value, then that key-value pair is copied into the new object. objFilter will return this new object.
*/

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

function objFilter(objInput, callbackFunc) {
  /* using for in */
  // var ourObj = {};

  // for (let eachKey in objInput) {
  //   var resultOfCalculation = callbackFunc(eachKey);
  //   var eachValue = objInput[eachKey];

  //   if (resultOfCalculation == eachValue) {
  //     Object.assign(ourObj, { [eachKey]: objInput[eachKey] });
  //   }
  // }
  // console.log(ourObj);
  /* using reduce */
  var convertObjToArray = Object.entries(objInput);
  var returnThisObj = convertObjToArray.reduce(function filterTheValues(
    buildingUp,
    currentValue
  ) {
    var [ourKey, ourValue] = currentValue;
    var calculatedValue = callbackFunc(ourKey);
    if (calculatedValue == ourValue) {
      return Object.assign(buildingUp, { [ourKey]: ourValue });
    }
  },
  {});
}

function half(numInput) {
  return numInput / 2;
}

const half = (numInput) => numInput / 2;

var passObjIntoFunc = {
  6: 3,
  2: 1,
  12: 4,
};

/* 
Challenge 19
Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false.
rating should return the percentage of functions from the array that return true when the value is used as input.
*/

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

function ratings(arrOfFuncs, valueInput) {
  var lengthOfFuncArr = arrOfFuncs.length;

  var numOfTimesCallbackReturnedTrue = arrOfFuncs.reduce(
    function lengthToUseInCalc(buildingUp, currentValue) {
      //currentValue will be each callback
      var ourBoolean = currentValue(valueInput);
      if (ourBoolean) {
        return [...buildingUp, ourBoolean];
      }
      return buildingUp;
    },
    []
  );
  //we want to use the length of the array that numOfTimesCallbackReturnedTrue return to calculate the percentage
  var lengthOftruthyArr = numOfTimesCallbackReturnedTrue.length;
  var getPercentage = (lengthOftruthyArr / lengthOfFuncArr) * 100;
  console.log(getPercentage);
}

/*
Challenge 20
Create a function pipe that accepts an array (of functions) and a value. pipe should input the value into the first function in the array,
and then use the output from that function as input for the second function, and then use the output from that function as input for the third function, and so forth,
until we have an output from the last function in the array. Pipe should return the final output.
*/

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

function pipe(arrOfFuncs, valueInput) {
  // var strOrNum = (typeof valueInput == 'string') ? "" : (typeof valueInput == "number") ? 0 : [];
  var calculatedValue = arrOfFuncs.reduce(function passTheValue(
    buildingUp,
    currentValue
  ) {
    return currentValue(buildingUp);
  },
  valueInput);

  console.log(calculatedValue);
}

/*
Challenge 21
Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value).
highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, when the subject is given as input.
*/

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

function highestFunc(objOfFunctions, subjectInput) {
  /* return the key  */
  var convertingObjToArr = Object.entries(objOfFunctions);
  /* use Math.max() */
  var arrWithHighestValueAndFunc;
  convertingObjToArr.reduce(function returnObjWithKeyAndCalcSubjInput(
    buildingUp,
    currentValue
  ) {
    var [ourKey, ourFuncAsValue] = currentValue;
    var checkThisValue = ourFuncAsValue(subjectInput);

    if (buildingUp < checkThisValue) {
      arrWithHighestValueAndFunc = [ourKey, checkThisValue];
    }
    return Math.max(buildingUp, checkThisValue);
  },
  0);

  return arrWithHighestValueAndFunc[0];
}

/*
Challenge 22
Create a function, combineOperations, that takes two parameters: a starting value and an array of functions.
combineOperations should pass the starting value into the first function in the array.
combineOperations should pass the value returned by the first function into the second function, and so on until every function in the array has been called.
combineOperations should return the final value returned by the last function in the array.
*/

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function addTen(num) {
  return num + 10;
}

function multiplyFive(num) {
  return num * 5;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

function combineOperations(startingValue, arrOfOurFunctions) {
  return arrOfOurFunctions.reduce(function passingValuesIntoEachFuncInArr(
    buildingUp,
    currentValue
  ) {
    return currentValue(buildingUp);
  },
  startingValue);
}

/*
Challenge 23
Define a function myFunc that takes an array and a callback. myFunc should pass each element from the array (in order) into the callback.
If the callback returns true, myFunc should return the index of the current element. If the callback never returns true, myFunc should return -1;

*/

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

function myFunc(arrInput, callbackFunc) {
  var lengthOfArr = arrInput.length;

  for (let i = 0; i < lengthOfArr; i++) {
    let eachValue = arrInput[i];
    let lastIndex = arrInput.length - 1;
    let ourBoolean = callbackFunc(eachValue);

    if (ourBoolean) {
      return i;
    }
  }
  return -1;
}

/*
Challenge 24
Write a function myForEach that accepts an array and a callback function. Your function should pass each element of the array (in order) into the callback function.
The behavior of this function should mirror the functionality of the native .forEach() JavaScript array method as closely as possible.
*/

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6

function myForEach(list, callback) {
  for (let index = 0; index < list.length; index++) {
    callback(list[index], index, list);
  }
}
