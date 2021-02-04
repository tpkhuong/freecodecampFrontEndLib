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
