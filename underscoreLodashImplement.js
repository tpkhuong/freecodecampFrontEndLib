function funcScoped() {
  function each(list, callbackFunc) {
    if (Array.isArray(list)) {
      for (let index = 0; index < list.length; index++) {
        let element = list[index];
        callbackFunc(element, index, list);
      }
    } else {
      for (let key in list) {
        let eachValue = list[key];
        callbackFunc(eachValue, key, list);
      }
    }
  }

  function eachRight(list, callbackFunc) {
    for (let index = list.length - 1; index >= 0; index--) {
      let element = list[index];
      callbackFunc(element, index, list);
    }
  }

  function map(list, callback) {
    var result = [];

    each(list, function addValueToArr(currValue, currIndex, list) {
      // result = [...result, callback(currValue, currIndex, list)]
      result.push(callback(currValue, currIndex, list));
    });
    return result;
  }

  function reduce(list, howToCombine, initialValue) {
    var momoValue = initialValue;
    each(list, function reduceAlgorithm(currValue, currIndex, reduceList) {
      if (momoValue == undefined && currIndex == 0) {
        momoValue = currValue;
      } else {
        momoValue = howToCombine(momoValue, currValue, currIndex, reduceList);
      }
    });
    return momoValue;
  }

  function reduceRight(list, howToCombine, initialValue) {
    var momoValue = initialValue;
    eachRight(
      list,
      function reduceRightAlgor(currValue, currIndex, reduceList) {
        if (momoValue == undefined && currIndex == list.length - 1) {
          momoValue = currValue;
        } else {
          momoValue = howToCombine(momoValue, currValue);
        }
      }
    );

    return momoValue;
  }

  function find(list, predicate) {
    for (let index = 0; index < list.length; index++) {
      let element = list[index];
      if (predicate(element)) return element;
    }
  }

  function filter(list, predicate) {
    var result = [];

    each(list, function onlyTrue(currValue, currIndex, list) {
      if (predicate(currValue, currIndex, list)) {
        result = [...result, currValue];
      }
    });

    return result;
  }

  function findWhere(list, properties) {
    //each value in the list is an object
    if (list.length === 0) return undefined;
    var keysOfObj = Object.keys(properties);
    var keyValuePairsSubarray = Object.entries(properties);
    //if our obj in our array does not have all the properties in the properties value we pass into our func return undefined
    var objHasAllProps = list.every(function objHasAllProps(eachObj) {
      //loops through keysObj check if eachObj has all the props
      return keysOfObj.every(function loopThroughKeysObj(eachProps) {
        return eachObj.hasOwnProperty(eachProps);
      });
    });
    if (!objHasAllProps) {
      return undefined;
    } else {
      //or we can use some() since the some() will break after the first true
      // for (let index = 0; index < list.length; index++) {

      // }
      var ourResult = list.reduce(function firstObjMatchingAllKeyValues(
        buildingUp,
        currentValue
      ) {
        var ourBoolean = keyValuePairsSubarray.every(
          function matchingAllKeyValuesPair(eachSubarray) {
            var [ourKey, ourValue] = eachSubarray;
            return currentValue[ourKey] == ourValue;
          }
        );

        if (ourBoolean) {
          return [...buildingUp, currentValue];
        }
        return buildingUp;
      },
      []);
    }

    return ourResult;
    //find the obj that matches all the key-value pairs
    // for (let index = 0; index < list.length; index++){
    //   let element = list[index];

    // }
    // reduce(
    //   list,
    //   function findMatchingKeyValuePair(buildingUp, currentValue) {},
    //   []
    // );
  }

  function where(list, properties) {
    /*
    Looks through each value in the list, returning an array of all the values that matches the key-value pairs listed in properties.
    */
    var ourProps = Object.keys(properties);
    var keysValuesPair = Object.entries(properties);

    var hasAllProps = list.every(function findAllProps(eachObj) {
      return ourProps.every(function objHasAllProps(eachProp) {
        return eachObj.hasOwnProperty(eachProp);
      });
    });

    if (!hasAllProps) {
      return undefined;
    } else {
      //return an array
      var ourResult = list.reduce(function valuesMatchAllProps(
        buildingUp,
        currentValue
      ) {
        var ourBoolean = keysValuesPair.every(function matchTheValues(
          eachSubarray
        ) {
          var [ourKey, ourValue] = eachSubarray;
          return currentValue[ourKey] == ourValue;
        });
        if (ourBoolean) {
          return [...buildingUp, currentValue];
        }
        return buildingUp;
      },
      []);

      return ourResult;
    }
  }
  /*
  
  Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter. predicate is transformed through iteratee to facilitate shorthand syntaxes.

  */
  function reject(list, predicate) {
    var result = [];

    each(list, onlyFalse);
    // each(list, function justFalse(currValue, currIndex, currList) {
    //   if (!predicate(currValue, currIndex, currList)) {
    //     result.push(currValue);
    //   }
    // });

    function onlyFalse(currValue, currIndex, currList) {
      if (!predicate(currValue, currIndex, currList)) {
        result = [...result, currValue];
      }
    }
  }

  function every(list, predicate) {
    //will break when predicate returns false;
    var result = true;
    var index = 0;
    while (index < list.length) {
      if (!predicate(list[index], index, list)) {
        return false;
      }
      index++;
    }
    return result;
  }

  function every(list, predicate) {
    //will break when predicate returns false;
    var result = true;
    for (let index = 0; index < list.length; index++) {
      let element = list[index];
      if (!predicate(element, index, list)) {
        return false;
      }
    }

    return result;
  }

  function some(list, predicate) {
    var result = false;
    var index = 0;
    while (index < list.length) {
      if (predicate(list[index], index, list)) {
        return true;
      }
      index++;
    }
    return result;
  }

  function some(list, predicate) {
    var result = false;

    for (let index = 0; index < list.length; index++) {
      if (predicate(list[index], index, list)) {
        return true;
      }
    }
    return result;
  }

  /*
  
  Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index.

  */
  function contains(list, value, fromIndex = 0) {
    if (!Array.isArray(list) && typeof list == "object" && list != null) {
      //list is an object
      //convert to array
      var ourValues = Object.values(list);
      for (let index = fromIndex; index < ourValues.length; index++) {
        let element = ourValues[index];
        if (element === value) return true;
      }
      return false;
    }
    if (Array.isArray(list)) {
      //list is an array
      for (let index = fromIndex; index < list.length; index++) {
        let element = list[index];
        if (element === value) return true;
      }
      return false;
    }
  }

  /*
    
    Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.

    _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
    => [[1, 5, 7], [1, 2, 3]]

    Whats the function of args?
    Take a look at join array method - it joins elements into a string, and if we pass something - it would be used as a separator.

    var things = ['apple', 'banana', 'mango'];

    things.join('#') // 'apple#banana#mango'
    So, join can take arguments. Lets use it with invoke now.

    var manyThings = [ 
    ['apple', 'banana', 'mango'],
    ['pepsi', 'fanta', 'sprite'],
    ['bear', 'wolf', 'parrot'] 
  ];

    // Pass '#' as a third argument - is like join('#')
    console.log(_.invoke(arr, 'join', '#'));

    // ["apple#banana#mango", "pepsi#fanta#sprite", "bear#wolf#parrot"]
    We passed '#' to that join method! That's the situation when we use that additional arguments.

    How it works?

    var args = slice.call(arguments, 2);
    We store all arguments passed to invoke, starting from third (first is a list, second is a method name). We store '#' in our manyThings case.

    Every invoke argument we pass after methodName becomes arguments for this methodName function.

    _.invoke(obj, 'methodName', '#', 2, false, '--')
    // It's like do obj.methodName('#', 2, false, '--')
    */

  function invoke(list, methodName, ...extraArgs) {
    //another approach get length of each subarrays
    var ourArgs = [...extraArgs];
    var copyOfList = list.slice();
    var combineListAndExtraArgsIntoArr = [...copyOfList, ...ourArgs];
    let result;

    if (ourArgs.length === 0) {
      result = reduce(
        combineListAndExtraArgsIntoArr,
        function loopThroughOuterList(
          buildingUp,
          currentValue,
          currIndex,
          list
        ) {
          //buildingUp is our array
          //each value in the array will be called with methodName
          // var funcReference = methodName.bind(null, currentValue, ourArgs);
          let returnedArr = methodName(currentValue);
          return [...buildingUp, returnedArr];
        },
        []
      );
    } else {
      // what do we want to do when extraArgs is not empty it means a value is passed in
      //   result = reduce(
      //     list,
      //     function loopThroughOuterArray(
      //       buildingUp,
      //       currentValue,
      //       currIndex,
      //       reduceList
      //     ) {
      //       // let returnArr = methodName(currentValue).bind(null, ...ourArgs);
      //       let returnArr = methodName(currentValue).apply(null, ...ourArgs);
      //       return [...buildingUp, returnArr];
      //     },
      //     []
      //   );
      // }
      // return result;
      /*
      _.invoke = function(collection, func, args) {
    return _.map(collection, function(el) {
        return (func instanceof Function) ? func.apply(el, args) : el[func].apply(el, args);
    });
};
      */
      /*
      _.invoke = function(obj, method) {
    var args = _.rest(arguments, 2);
    return _.map(obj, function(value) {
      return (method ? value[method] : value).apply(value, args);
    });
  };
      */
      return map(copyOfList, function callMethodOnEachValue(valueInput) {
        return method
          ? method.apply(valueInput, ourArgs)
          : valueInput[method].apply(valueInput, ourArgs);
      });
    }

    function join(list, ...separator) {
      var resultStr = "";
      var arrOfStrCombinedWithSeparator = [];
      var copyOfSeparators = [...separator];
      if (copyOfSeparators.length === 0) {
        each(list, function concatStrValue(eachValue) {
          var strForm = String(eachValue);
          resultStr = resultStr + strForm;
          // resultStr.concat(strForm);
        });
        let result = reduce(
          list,
          function concatStrValue(buildingUp, currentValue) {
            var strForm = String(currentValue);
            buildingUp = buildingUp + strForm;
            return buildingUp;
          },
          ""
        );
        return result;
      } else {
        var reverseCopyOfSeparators = [];
        for (let index = copyOfSeparators.length - 1; index >= 0; index--) {
          let element = copyOfSeparators[index];
          reverseCopyOfSeparators.push(element);
        }

        while (reverseCopyOfSeparators.length > 0) {
          let eachSeparator = String(reverseCopyOfSeparators.pop());
          resultStr = reduce(
            list,
            function concatStrWithSeparators(buildingUp, currentValue) {
              // one way is to loop through currentvalue which will be our subarray.
              var buildOurStr = reduce(
                currentValue,
                function loopingThroughSubarray(buildingUp, currentValue) {
                  //inner reduce
                  //in this reduce our currentvalue will be each value in the subarray
                  var strForm = String(currentValue);
                  buildingUp = buildingUp + strForm + eachSeparator;
                  return buildingUp;
                },
                ""
              );
              // outer reduce
              // buildingUp = [...buildingUp, buildOurStr];
              buildingUp.push(buildOurStr);
            },
            []
          );

          arrOfStrCombinedWithSeparator.push(resultStr);
        }
        // return result;
      }
      return resultStr;
    }
  }
  return {
    each,
    eachRight,
    map,
    reduce,
    reduceRight,
    find,
    filter,
    findWhere,
    where,
    reject,
    every,
    some,
    contains,
    invoke,
    join,
  };
}

function invoke(list, methodName, ...extraArgs) {
  //another approach get length of each subarrays
  console.log(extraArgs);
  var copyOfList = list.slice();
  copyOfList = [...copyOfList, extraArgs];
}

var goal = [
  {
    category: "other",
    title: "harry University",
    value: 50000,
    id: "1",
  },
  {
    category: "traveling",
    title: "tommy University",
    value: 50000,
    id: "2",
  },
  {
    category: "education",
    title: "marvel",
    value: 30000,
    id: "3",
  },
  {
    category: "business",
    title: "Charlie University",
    value: 50000,
    id: "4",
  },
  {
    category: "education",
    title: "marvel",
    value: 40000,
    id: "4",
  },
];

findWhere(goal, {
  category: "education",
  title: "marvel",
  marvel: "Superheroes",
});

findWhere(goal, {
  category: "education",
  title: "marvel",
});

var testObj = {
  year: 1918,
  newsroom: "The New York Times",
  reason:
    "For its public service in publishing in full so many official reports documents and speeches by European statesmen relating to the progress and conduct of the war.",
};
alert("join looks complete");

function join(list, ...separator) {
  var resultStr = "";
  var arrOfStrCombinedWithSeparator = [];

  var copyOfSeparators = [...separator];
  if (copyOfSeparators.length === 0) {
    list.forEach(function concatStrValue(eachValue) {
      var strForm = String(eachValue);
      resultStr = resultStr + strForm;
      // resultStr.concat(strForm);
    });
    // each(list, );
    let result = list.reduce(function concatStrValue(buildingUp, currentValue) {
      var strForm = String(currentValue);
      buildingUp = buildingUp + strForm;
      return buildingUp;
    }, "");
    return result;
  } else {
    var reverseCopyOfSeparators = [];
    for (let index = copyOfSeparators.length - 1; index >= 0; index--) {
      let element = copyOfSeparators[index];
      reverseCopyOfSeparators.push(element);
    }

    while (reverseCopyOfSeparators.length > 0) {
      let eachSeparator = String(reverseCopyOfSeparators.pop());

      // let subarray = list.reduce(function addSubarrayToArr(
      //   buildingUp,
      //   currentValue
      // ) {
      //   //each currentValue is our subarray
      //   var builtUpStr = currentValue.reduce(function concatStrWithSeparators(
      //     buildingUp,
      //     currentValue
      //   ) {
      //     //each currentValue is our individual str
      //     var strForm = String(currentValue);
      //     buildingUp = buildingUp + strForm + eachSeparator;
      //     return buildingUp;
      //   },
      //   "");
      //   buildingUp.push([builtUpStr]);
      //   // buildingUp = [...buildingUp, [builtUpStr]];
      //   return buildingUp;
      // },
      // []);
      //line below is if we didnt use reduce
      // arrOfStrCombinedWithSeparator.push(resultStr);
      /***** use map and reduce: using these methods and our algorithm we will return an array with the length according to the number of args passed in
       * the subarray will be the length of the number of values of the array passed into join
       *  *****/

      var subarray = list.map(function builtUpSubarray(innerArray) {
        //innerArray is our subarray
        return innerArray.reduce(function buildUpStr(buildingUp, currentValue) {
          var strForm = String(currentValue);
          buildingUp = buildingUp + strForm + eachSeparator;
          return buildingUp;
        }, "");
      });

      /***** use map and reduce: using these methods and our algorithm we will return an array with the length according to the number of args passed in
       * the subarray will be the length of the number of values of the array passed into join
       *  *****/
      arrOfStrCombinedWithSeparator.push(subarray);
      /***** we can loop through the array passed in, use reduce to build the string, push each string we build to an array that is outside of our while loop
       * which means we will have an array of strings instead of an array with subarrays with string values
       *  *****/

      for (let subarray of list) {
        var buildOurStr = subarray.reduce(function ourString(
          buildingUp,
          currentValue
        ) {
          var strForm = String(currentValue);
          buildingUp = buildingUp + strForm + eachSeparator;
          return buildingUp;
        },
        "");

        arrOfStrCombinedWithSeparator.push(buildOurStr);
      }

      for (let index = 0; index < list.length; index++) {
        var subarray = list[index];
        var buildOurStr = subarray.reduce(function ourString(
          buildingUp,
          currentValue
        ) {
          var strForm = String(currentValue);
          buildingUp = buildingUp + strForm + eachSeparator;
          return buildingUp;
        },
        "");

        arrOfStrCombinedWithSeparator.push(buildOurStr);
      }

      list.forEach(function loopThroughArray(subarray) {
        var buildOurStr = subarray.reduce(function ourString(
          buildingUp,
          currentValue
        ) {
          var strForm = String(currentValue);
          buildingUp = buildingUp + strForm + eachSeparator;
          return buildingUp;
        },
        "");

        arrOfStrCombinedWithSeparator.push(buildOurStr);
      });
      /***** we can loop through the array passed in, use reduce to build the string, push each string we build to an array that is outside of our while loop
       * which means we will have an array of strings instead of an array with subarrays with string values
       *  *****/
    }
    // return result;
  }
  return arrOfStrCombinedWithSeparator;
}

/***** using recursion: our recursive func wil be a nested func inside of join() *****/

function join(list, ...separator) {
  var resultStr = "";
  var arrOfStrCombinedWithSeparator = [];

  var copyOfSeparators = [...separator];
  if (copyOfSeparators.length === 0) {
    list.forEach(function concatStrValue(eachValue) {
      var strForm = String(eachValue);
      resultStr = resultStr + strForm;
      // resultStr.concat(strForm);
    });
    // each(list, );
    let result = list.reduce(function concatStrValue(buildingUp, currentValue) {
      var strForm = String(currentValue);
      buildingUp = buildingUp + strForm;
      return buildingUp;
    }, "");
    return result;
  } else {
    /***** recursive approach *****/
    function joinRecursive(list, arrOfSeparators) {
      var result = [];
    }
    function innerRecursive(list, arrOfSeparators) {
      //([["a","b"],["c","d"],["e","f"]], ["#","$","%"]);
      if (copyOfSeparators.length === 0) {
        return;
      }

      var removeFromEndSeparator = copyOfSeparators.pop(); //%;
      //recursive call innerRecursive
      //call secondInnerRecur in innerRecursive
    }

    function secondInnerRecur(list, poppedSeparator) {
      //([["a","b"],["c","d"],["e","f"]], %);
      if (list.length === 0) {
        return "";
      }

      var removeFromEndList = list.pop(); //["e","f"]
      /***** these algorithm is for when we want to combine the values in the nested array with the separator into one string
       * "a%b%c%d%e%f%"
       *  *****/
      var buildUpStrWithSeparator = thirdInnerRecur(
        removeFromEndList,
        poppedSeparator
      );
      /*return*/ secondInnerRecur(list, poppedSeparator) +
        buildUpStrWithSeparator;
      /***** these algorithm is for when we want to combine the values in the nested array with the separator into one string
       * "a%b%c%d%e%f%"
       *  *****/
      /***** we want to make a string with the separator for each subarray/nested arrays *****/

      var buildUpStrWithSeparator = thirdInnerRecur(
        removeFromEndList,
        poppedSeparator
      );

      //add buildupStr using thirdInnerRecur to our array that we want to return
      arrOfStrCombinedWithSeparator.shift(buildUpStrWithSeparator);
      return secondInnerRecur(list, poppedSeparator);

      /***** we want to make a string with the separator for each subarray/nested arrays *****/
    }

    function thirdInnerRecur(poppedSubarrayOfList, separator) {
      //(["e","f"],%)
      if (poppedSubarrayOfList.length === 0) {
        return "";
      }

      var removedValuedFromList = poppedSubarrayOfList.pop(); //f
      var buildStrWithSeparator = removedValuedFromList + separator;
      //recursively call thirdInnerRecur
      return (
        thirdInnerRecur(poppedSubarrayOfList, separator) + buildStrWithSeparator
      );
    }
    return arrOfStrCombinedWithSeparator;
  }
}
/***** using recursion: our recursive func wil be a nested func inside of join() *****/
