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

  function addTwo(list) {
    //we pass in subarray ["a","b"]
    return map(list, function (value, index, innerList) {
      //inside of map our each() will check if list is an array. ["a","b"] is an array so it won't go into the else statement.
      return (value += 2);
    });
  }

  function invoke(list, methodName, ...extraArgs) {
    //another approach get length of each subarrays
    var ourArgs = [...extraArgs];
    var copyOfList = list.slice();
    var combineListAndExtraArgsIntoArr = [...copyOfList, ourArgs];
    let result;

    if (ourArgs.length === 0) {
      //we want to loop through list and call each value in the list with methodName, using reduce might not be best solution
      // result = reduce(
      //   combineListAndExtraArgsIntoArr,
      //   function loopThroughOuterList(
      //     buildingUp,
      //     currentValue,
      //     currIndex,
      //     list
      //   ) {
      //     //buildingUp is our array
      //     //each value in the array will be called with methodName
      //     // var funcReference = methodName.bind(null, currentValue, ourArgs);
      //     let returnedArr = methodName(currentValue);
      //     return [...buildingUp, returnedArr];
      //   },
      //   []
      // );
      /***** when we call methodName in invoke how do we pass in the callback argument/value to that methodName call/execution
       * most array method takes a value and a callback
       *  *****/

      // each(list, function callMethodName(subarray) {
      //   //the keyword this in bind() will be subarray ["a","b"];
      //   methodName.call(subarray, ourArgs);
      // });

      /*********github INVOKE*********/
      // _.invoke = function (collection, func, args) {
      //   return _.map(collection, function (el) {
      //     return func instanceof Function
      //       ? func.apply(el, args)
      //       : el[func].apply(el, args);
      //   });
      // };
      /*********INVOKE*********/

      /*
      
      if Array.isArray(container)
      for element in container
        element[methodName].apply(element, [].slice.call(arguments, 2))
    else
      for key of container
        container[key][methodName].apply(container[key], [].slice.call(arguments, 2))
      */
      return map(list, function (element) {
        //[["a", "b"],["c", "d"],["e", "f"],];
        //element parameter will be the subarrays ["a","b"]

        return methodName instanceof Function
          ? /***** since we are using map, it will return an array with the same length as list that is passed into map *****/
            /***** element will be each subarray that is passed into invoke ["a","b"] *****/
            /***** ourArgs will be the 3rd args passed into invoke *****/
            /***** when we passed in each as methodName our invoke return [undefined,undefined,undefined] because each does not return anything *****/
            /***** we were on the right track, we had this
             * each(list, function callMethodName(subarray) {
             * methodName.call(subarray); *****/
            //when we passed in addTwo into invoke. our addTwo func declaration was addTwo(list, callback)
            //.apply() will pass in an array of arg into the addTwo func call. the element was subarray [1,2]
            //inside addTwo call it was calling addTwo(1, 2). one is the list and 2 is the callback
            // methodName.apply(null, element, ourArgs)
            /***** using .call instead of .apply() when we call methodName(our addTwo() method) we will be working with an array when addTwo is called by this map()
             * our addTwo's map method won't go in to the else statement of the each because map method takes these parameters map(list, callback) then we pass list to the each()
             * inside each() we check if list is an array or not.
             * *****/
            methodName.call(element, [].slice.call(arguments, 2).pop(), ourArgs)
          : /***** element[methodName] will be undefined so it will be undefined.apply(element, ourArgs) *****/
            // element[methodName].apply(null, element, ourArgs);
            element[methodName].call(
              element,
              [].slice.call(arguments, 2),
              ourArgs
            );
      });
    } else {
      //using map method because we are returning an array with the same length as the list/collection passed in
      return map(list, function (element) {
        return methodName instanceof Function
          ? //list will be [["a", "b"],["c", "d"],["e", "f"]];
            //with how our join method is implemented, when we call methodName we want element to be [["a", "b"],["c", "d"],["e", "f"]]
            methodName.call(element, [].slice.call(arguments, 2).pop(), ourArgs)
          : // element will be ["a","b"]
            //ourArgs will be the values passed in when we called ourFunc.invoke(arr, methodName, "%", "$", "&") in an array ["%", "$", "&"]
            element[methodName].call(
              element,
              [].slice.call(arguments, 2),
              ourArgs
            );
      });
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
    */
      /***** one way to implement invoke *****/
      // return map(copyOfList, function callMethodOnEachValue(valueInput) {
      //   return methodName
      //     ? methodName.apply(valueInput, [...ourArgs])
      //     : valueInput[methodName].apply(valueInput, ourArgs);
      // });
      /***** another way to implement invoke *****/
      // return map(list, function (element) {
      //   return (methodName instanceof Function) ? methodName.apply(element, ourArgs) : element[methodName].apply(element, ourArgs);
      // });
    }
  }

  /*
  
    var manyThings = [ 
    ['apple', 'banana', 'mango'],
    ['pepsi', 'fanta', 'sprite'],
    ['bear', 'wolf', 'parrot'] 
  ];
  join(manyThings, "#")
  return ["apple#banana#mango", "pepsi#fanta#sprite", "bear#wolf#parrot"]

  we could use map()
  */

  //join without multiple separators

  /*
  
  isMatch_.isMatch(object, properties)
Tells you if the keys and values in properties are contained in object.

var stooge = {name: 'moe', age: 32};
_.isMatch(stooge, {age: 32});
=> true

  
  */

  function isMatch(object, properties = {}) {
    var arrOfBooleans = [];
    //convert to array [key,value]
    //[[key,value], [key,value]]
    var keyValuePairSubarray = Object.entries(properties);
    //check of object contain all keys of properties
    var keysOfObject = Object.keys(object);
    var keysOfProperty = Object.keys(properties);
    if (keysOfProperty.length === 0) return false;
    if (keysOfProperty.length == 1) {
      let [keyOfProperty] = keysOfProperty;
      let [keyOfObject] = keysOfObject;

      if (object[keyOfObject] === properties[keyOfProperty]) return true;
      return false;
    }
    //looking for a solution where Big O is better than n2
    //solution of Big O n2. using some method will break once the callback returns true
    //example at bottom of file
    var ifTrueReturnFalse = some(
      keysOfProperty,
      function checkIfKeysIsInObject(eachKey) {
        var ourBoolean = object.hasOwnProperty(eachKey);
        return ourBoolean === false;
      }
    );

    if (ifTrueReturnFalse) {
      return false;
    }
    //solution of Big O n2. using every method will break once the callback returns false

    var ifEveryReturnFalseReturnFalse = every(function checkKeysInObj(key) {
      var ourBoolean = object.hasOwnProperty(key);
      return ourBoolean === true;
    });

    if (!ifEveryReturnFalseReturnFalse) {
      return false;
    }
    //keysOfProperty.length is greater than 1
    //use recursion to check if object has keys of properties {}
    //if our object does not include all the keys of properties return false
    //loop through properties
    function recursiveHelper(arrInput, index = 0) {
      var arrLength = arrInput.length;
      if (index == arrLength) {
        return;
      }
    }
  }

  /*

identity_.identity(value)
Returns the same value that is used as the argument. In math: f(x) = x
This function looks useless, but is used throughout Underscore as a default iteratee.

var stooge = {name: 'moe'};
stooge === _.identity(stooge);
=> true

*/

  function identity(value) {}

  /*

matcher_.matcher(attrs) Alias: matches
Returns a predicate function that will tell you if a passed in object contains all of the key/value properties present in attrs.

var ready = _.matcher({selected: true, visible: true});
var readyToGoList = _.filter(list, ready);

*/

  function matcher(attrs) {}

  /*
  
  iteratee_.iteratee(value, [context])
Generates a callback that can be applied to each element in a collection. _.iteratee supports a number of shorthand syntaxes for common callback use cases.
Depending upon value's type, _.iteratee will return:

// No value
_.iteratee();
=> _.identity()

// Function
_.iteratee(function(n) { return n * 2; });
=> function(n) { return n * 2; }

// Object
_.iteratee({firstName: 'Chelsea'});
=> _.matcher({firstName: 'Chelsea'});

// Anything else
_.iteratee('firstName');
=> _.property('firstName');
The following Underscore methods transform their predicates through _.iteratee: countBy, every, filter, find, findIndex, findKey,
findLastIndex, groupBy, indexBy, map, mapObject, max, min, partition, reject, some, sortBy, sortedIndex, and uniq

You may overwrite _.iteratee with your own custom function, if you want additional or different shorthand syntaxes:

// Support `RegExp` predicate shorthand.
var builtinIteratee = _.iteratee;
_.iteratee = function(value, context) {
  if (_.isRegExp(value)) return function(obj) { return value.test(obj) };
  return builtinIteratee(value, context);
};

  */
  function iteratee() {}
  /***** implementing join without passing multiple separators. we will pass the extra separators when we execute/call invoke. invoke(arr/list, methodName, ...separators)  *****/
  function join(list, separator = ",") {
    //["a","b","c","d","e"]
    var result;
    var resultStr = "";
    if (separator === "") {
      //use reduce
      result = reduce(
        list,
        function buildStr(buildingUp, currentValue) {
          //buildingUp will be ""
          //currentValue will be values in list. first it will be "a"
          buildingUp = buildingUp + String(currentValue);
          return buildingUp;
        },
        ""
      );
      //for each
      // each(list, function buildingOurStr(eachStr) {
      //   resultStr = resultStr + String(eachStr);
      // });
    } else {
      //use reduce
      result = reduce(
        list,
        function buildingStrWithReduce(
          buildingUp,
          currentValue,
          currIndex,
          listOfReduce
        ) {
          var lengthOfList = listOfReduce.length;
          if (currIndex == lengthOfList - 1) {
            buildingUp = buildingUp + String(currentValue);
            return buildingUp;
          } else {
            buildingUp = buildingUp + String(currentValue) + separator;
            return buildingUp;
          }
        },
        ""
      );
      //use for each
      // each(
      //   list,
      //   function buildingOurStrWithForEach(eachStr, index, listOfEach) {
      //     var lengthOfList = listOfEach.length;
      //     if (index == lengthOfList - 1) {
      //       resultStr = resultStr + String(eachStr);
      //     } else {
      //       resultStr = resultStr + String(eachStr) + separator;
      //     }
      //   }
      // );
    }
    return result;
  }

  //join with multiple separators
  // function join(list, ...separator) {
  //   /***** this is where we used two reduce inside a while loop. our while loop will loop while reverseCopyOfSeparators.length is greater than 0
  //    *
  //    * *****/
  //   // var resultStr = "";
  //   var arrOfStrCombinedWithSeparator = [];
  //   var copyOfSeparators = [...separator];
  //   if (copyOfSeparators.length === 0) {
  //     each(list, function concatStrValue(eachValue) {
  //       var strForm = String(eachValue);
  //       resultStr = resultStr + strForm;
  //       // resultStr.concat(strForm);
  //     });
  //     /***** code below we are using reduce to build up our string  *****/
  //     // let result = reduce(
  //     //   list,
  //     //   function concatStrValue(buildingUp, currentValue) {
  //     //     var strForm = String(currentValue);
  //     //     buildingUp = buildingUp + strForm;
  //     //     return buildingUp;
  //     //   },
  //     //   ""
  //     //   );
  //     //   return result;
  //     /***** code below we are using reduce to build up our string  *****/
  //   } else {
  //     var reverseCopyOfSeparators = [];
  //     for (let index = copyOfSeparators.length - 1; index >= 0; index--) {
  //       let element = copyOfSeparators[index];
  //       reverseCopyOfSeparators.push(element);
  //     }

  //     while (reverseCopyOfSeparators.length > 0) {
  //       //["#","$","%"]
  //       let eachSeparator = String(reverseCopyOfSeparators.pop()); //"%"
  //       /***** map() version *****/
  //       // map will return an array of the same length but the value inside that array can be anything we want
  //       //so inside our map we use reduce method to loop through ["a","b"] build up our str "a#b#" assigned/save to a variable then after we build up our str we return that string
  //       var resultStrMap = map(
  //         list,
  //         function loopThroughSubarray(value, index) {
  //           /*
  //         list will be
  //         [
  //           ["a", "b"],
  //           ["c", "d"],
  //           ["e", "f"],
  //         ];
  //         */
  //           //value will be subarrays: first subarray will be ["a","b"]
  //           var buildUpStrMapVersion = reduce(
  //             value,
  //             function concatValueWithSeparator(buildingUp, currentValue) {
  //               //currentValue will be each value in our subarray. buildingUp will start as in empty string
  //               //what do we want to return
  //               var buildOurStr =
  //                 buildingUp + String(currentValue) + eachSeparator;
  //               //first loop through subarray
  //               //"" + "a" + "%"
  //               //second loop through subarray
  //               //"a%" + "b" + "%"
  //               return buildOurStr;
  //             },
  //             ""
  //           );
  //           // buildUpStrMapVersion will be "a%b%"
  //           return buildUpStrMapVersion;
  //           //resultStrMap after first iteration will be ["a%b%"];
  //         }
  //       );
  //       /***** reduce() version *****/
  //       let resultStr = reduce(
  //         /*
  //         [
  //           ["a", "b"],
  //           ["c", "d"],
  //           ["e", "f"],
  //         ];
  //         */

  //         list,
  //         function concatStrWithSeparators(buildingUp, currentValue) {
  //           //building is our empty array
  //           //currentValue will start with ["a","b"]
  //           // one way is to loop through currentvalue which will be our subarray.
  //           //buildOurStr will be "a%b%" after working with "%""
  //           var buildOurStr = reduce(
  //             currentValue,
  //             function loopingThroughSubarray(buildingUp, currentValue) {
  //               //inner reduce
  //               //buildingUp will be ""
  //               //curentValue will start as "a"
  //               //in this reduce our currentvalue will be each value in the subarray
  //               var strForm = String(currentValue);
  //               buildingUp = buildingUp + strForm + eachSeparator;
  //               return buildingUp;
  //             },
  //             ""
  //           );
  //           // outer reduce
  //           // buildingUp = [...buildingUp, buildOurStr];
  //           // buildingUp.push(buildOurStr);
  //           //since we're not going to return an array, we want to use concat or buildingUp which starts as an empty str with the string that is return from reduce() and saved/assigned to buildOurStr
  //           //variable
  //           //concat our strings:
  //           buildingUp.push(buildOurStr);
  //           //or
  //           // buildingUp.concat(buildOurStr)
  //           return buildingUp;
  //         },
  //         []
  //       );
  //       // arrOfStrCombinedWithSeparator.push(resultStr);
  //       //after working with first separator arrOfStrCombineWithSeparator, [["a$b$", "c$d$", "e$f$"]]
  //       //use spread operator if we want arrOfStrCombinedWithSeparator to be an array of strings
  //       // arrOfStrCombinedWithSeparator = [...[], ...["a$b$", "c$d$", "e$f$"]] => ["a$b$", "c$d$", "e$f$"]
  //       //map version
  //       arrOfStrCombinedWithSeparator = [
  //         ...arrOfStrCombinedWithSeparator,
  //         ...resultStrMap,
  //       ];
  //       //reduce version
  //       // arrOfStrCombinedWithSeparator = [
  //       //   ...arrOfStrCombinedWithSeparator,
  //       //   ...resultStr,
  //       // ];
  //     }
  //     // return result;
  //   }
  //   return arrOfStrCombinedWithSeparator;
  // }

  /* pluck */

  /*
  pluck_.pluck(list, propertyName)
A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.pluck(stooges, 'name');
=> ["moe", "larry", "curly"]
*/
  function pluck(list, propertyName) {
    var result = map(list, function getPropertyOfObj(value) {
      //value will be an obj
      return value[propertyName];
    });

    return result;
  }

  /* Max */
  /*
max_.max(list, [iteratee], [context])
Returns the maximum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. 
-Infinity is returned if list is empty, so an isEmpty guard may be required. This function can currently only compare numbers reliably. This function uses operator < (note).

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.max(stooges, function(stooge){ return stooge.age; });
=> {name: 'curly', age: 60};
  */
  function max(list, iteratee, context) {}
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
    addTwo,
    invoke,
    join,
    pluck,
    isMatch,
    max,
  };
}

function pluck(list, propertyName) {
  return list.map(function getProperty(value) {
    return value[propertyName];
  });
}
function thisWorked() {
  // return map(list, function (element) {
  // return methodName instanceof Function
  //   ? //list will be [["a", "b"],["c", "d"],["e", "f"]];
  //     //with how our join method is implemented, when we call methodName we want element to be [["a", "b"],["c", "d"],["e", "f"]]
  //     methodName.call(null, element, ...ourArgs)
  //   : // element will be ["a","b"]
  //     //ourArgs will be the values passed in when we called ourFunc.invoke(arr, methodName, "%", "$", "&") in an array ["%", "$", "&"]
  //     element[methodName].call(null, element, ...ourArgs);
}

alert(
  "join method should accept two parameters, a list/collection/array and the second parameter is optional it will be the separator"
);
alert("if user passed in ['a','b'], '%'");
alert("join will concat a%b%");
alert(
  "our invoke will take an array with subarrays, methodName(join), optional additional args"
);
alert(
  "invoke will call join passing each subarray of the array passed into invoke with the separator"
);
alert(
  "out current code our join method is doing that. more fun with invoke =)"
);
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
    alert("worked!");
    joinRecursive(list, copyOfSeparators);
    function joinRecursive(list, arrOfSeparators) {
      var result = [];
      /* have a copy of the list array outside the scope of the innerRecursive func. 
      when we had the copy of the list array in innerRecursive, when we remove from the end it mutated the original list too
      when we call innerRecursive we want to pass in the original list array with nothing removed
      */
      // var copyOfList = [...list];
      /* find a way to make this work without mutating the array */
      // var notMutated = list.slice();
      // var mutateThisList = [...list];
      innerRecursive(arrOfSeparators);
      /***** what if we just passed the original array to secondInnerRecur *****/
      function innerRecursive(arrOfSeparators) {
        //work with copy of original passed in list
        // var copyOfList = innerList.slice();
        // var copyOfList = [...list];
        // var copyOfList = [].concat(list);
        var copyOfList = list.slice();
        //([["a","b"],["c","d"],["e","f"]], ["#","$","%"]);
        if (arrOfSeparators.length === 0) {
          return;
        }

        var removeFromEndSeparator = arrOfSeparators.pop(); //%;
        //recursive call innerRecursive
        //call secondInnerRecur in innerRecursive

        secondInnerRecur(copyOfList, removeFromEndSeparator);
        //when we call innerRecursive we want to pass the original array into secondInnerRecur
        //in our secondInnerRecur we are removing from the end / mutating the array to get the length of the array length to 0 so we can break out of our recursive call
        //but our top recursive or innerRecursive we want to call innerRecursive with the list of subarray [["a","b"],["c","d"],["e","f"]] and an array with
        //separator decrement by one item from the end because we need to break out of our innerRecur func that is our base case for innerRecur
        //when this array ["#","$","%"] becomes []
        innerRecursive(arrOfSeparators);
      }

      function secondInnerRecur(secondList, poppedSeparator) {
        //copy list in this func
        // var mutateList = secondList.slice();
        //([["a","b"],["c","d"],["e","f"]], %);
        //work with copy of original passed in list
        if (secondList.length === 0) {
          // return "" from our secondInnerRecur if we want to return a string of the subarray combined with the separator
          // "a%b%c%d%e%f%"
          return;
        }
        /* code below we are mutated the original array: */
        var removeFromEndList = secondList.pop(); //["e","f"]
        /***** these algorithm is for when we want to combine the values in the nested array with the separator into one string
         * "a%b%c%d%e%f%"
         *  *****/
        //we should send a copy of ["e","f"] in to call of thirdInnerRecur
        var copyOfArrRemovedFromList = removeFromEndList.slice();
        var buildUpStrWithSeparator = thirdInnerRecur(
          removeFromEndList,
          poppedSeparator
        );
        /*return*/ secondInnerRecur(secondList, poppedSeparator) +
          buildUpStrWithSeparator;
        /***** these algorithm is for when we want to combine the values in the nested array with the separator into one string
         * "a%b%c%d%e%f%"
         *  *****/
        /***** we want to make a string with the separator for each subarray/nested arrays *****/

        //we should send a copy of ["e","f"] in to call of thirdInnerRecur
        var copyOfArrRemovedFromList = removeFromEndList.slice();

        var buildUpStrWithSeparator = thirdInnerRecur(
          copyOfArrRemovedFromList,
          poppedSeparator
        );

        //add buildupStr using thirdInnerRecur to our array that we want to return
        //unshift to add shift to remove
        result.unshift(buildUpStrWithSeparator);
        // we don't have to return anything from our secondInnerRecur
        /*return*/ secondInnerRecur(secondList, poppedSeparator);

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
          thirdInnerRecur(poppedSubarrayOfList, separator) +
          buildStrWithSeparator
        );
      }
    }

    return arrOfStrCombinedWithSeparator;
  }
}

function joinRecursiveCopiedListInnerRecurOneParamater(list, arrOfSeparators) {
  var result = [];
  /* have a copy of the list array outside the scope of the innerRecursive func. 
      when we had the copy of the list array in innerRecursive, when we remove from the end it mutated the original list too
      when we call innerRecursive we want to pass in the original list array with nothing removed
      */
  // var copyOfList = [...list];
  /* find a way to make this work without mutating the array */
  // var notMutated = list.slice();
  // var mutateThisList = [...list];
  innerRecursive(arrOfSeparators);
  /***** what if we just passed the original array to secondInnerRecur *****/
  function innerRecursive(arrOfSeparators) {
    //work with copy of original passed in list
    // var copyOfList = innerList.slice();
    // var copyOfList = [...list];
    // var copyOfList = [].concat(list);
    var copyOfList = list.slice();
    //([["a","b"],["c","d"],["e","f"]], ["#","$","%"]);
    if (arrOfSeparators.length === 0) {
      return;
    }

    var removeFromEndSeparator = arrOfSeparators.pop(); //%;
    //recursive call innerRecursive
    //call secondInnerRecur in innerRecursive

    secondInnerRecur(copyOfList, removeFromEndSeparator);
    //when we call innerRecursive we want to pass the original array into secondInnerRecur
    //in our secondInnerRecur we are removing from the end / mutating the array to get the length of the array length to 0 so we can break out of our recursive call
    //but our top recursive or innerRecursive we want to call innerRecursive with the list of subarray [["a","b"],["c","d"],["e","f"]] and an array with
    //separator decrement by one item from the end because we need to break out of our innerRecur func that is our base case for innerRecur
    //when this array ["#","$","%"] becomes []
    innerRecursive(arrOfSeparators);
  }

  function secondInnerRecur(secondList, poppedSeparator) {
    //copy list in this func
    // var mutateList = secondList.slice();
    //([["a","b"],["c","d"],["e","f"]], %);
    //work with copy of original passed in list
    if (secondList.length === 0) {
      // return "" from our secondInnerRecur if we want to return a string of the subarray combined with the separator
      // "a%b%c%d%e%f%"
      return;
    }
    /* code below we are mutated the original array: */
    var removeFromEndList = secondList.pop(); //["e","f"]
    /***** these algorithm is for when we want to combine the values in the nested array with the separator into one string
     * "a%b%c%d%e%f%"
     *  *****/
    //we should send a copy of ["e","f"] in to call of thirdInnerRecur
    var copyOfArrRemovedFromList = removeFromEndList.slice();
    var buildUpStrWithSeparator = thirdInnerRecur(
      removeFromEndList,
      poppedSeparator
    );
    /*return*/ secondInnerRecur(secondList, poppedSeparator) +
      buildUpStrWithSeparator;
    /***** these algorithm is for when we want to combine the values in the nested array with the separator into one string
     * "a%b%c%d%e%f%"
     *  *****/
    /***** we want to make a string with the separator for each subarray/nested arrays *****/

    //we should send a copy of ["e","f"] in to call of thirdInnerRecur since we are using .pop() or mutating the ["e","f"] we want to work with a copied version in thirdRecur scope
    //or else when we work with the second value in arrOfSeparator the subarrays in list [["e","f"]] will be empty [[],[],[]]
    var copyOfArrRemovedFromList = removeFromEndList.slice();

    var buildUpStrWithSeparator = thirdInnerRecur(
      copyOfArrRemovedFromList,
      poppedSeparator
    );

    //add buildupStr using thirdInnerRecur to our array that we want to return
    //unshift to add shift to remove
    result.unshift(buildUpStrWithSeparator);
    // we don't have to return anything from our secondInnerRecur
    /*return*/ secondInnerRecur(secondList, poppedSeparator);

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
  return result;
}

function weLearned() {
  alert(
    "we learned that when we are working with nested arrays and we plan to mutate the arrays we want to make a copy of that array"
  );
  alert(
    "our code structure, we made the copy of the array before passing that array into the innerRecur func"
  );
  alert("ex: original array passed into joinRecur");
  alert(
    "inside innerRecur we made a copy of the array passed in right before we pass that array into the func execution of secondInnerRecur"
  );
  alert(
    "inside secondInnerRecur we used pop() to remove the subarray ['e','f'] from [['a','b'],['c','d'],['e','f']]"
  );
  alert(
    "then we made a copy of that array, we passed the copied array into the thirdInnerRecur, inside thirdInnerRecur we are working with a copy of ['e','f']"
  );
  alert(
    "since we are not passing [['a','b'],['c','d'],['e','f']] into innerRecur, everytime we call innerRecur we are resetting var copyOfList = list.slice();"
  );
  alert(
    "before we made the copy of ['e','f'] after working with the first separator remove from the separator array"
  );
  alert("our list array looked like this: [[],[],[]]");
  alert(
    "let pass in an array into innerRecur to test our understanding and see what happens"
  );
}
/***** using recursion: our recursive func wil be a nested func inside of join() *****/

/***** testing our understanding and see what happens: pass an array into innerRecur then make a copy of the array/list passed into innerRecur *****/
function joinRecursivePassingOriginalListIntoInnerRecurAsValue(
  list,
  arrOfSeparators
) {
  var result = [];
  /* have a copy of the list array outside the scope of the innerRecursive func. 
      when we had the copy of the list array in innerRecursive, when we remove from the end it mutated the original list too
      when we call innerRecursive we want to pass in the original list array with nothing removed
      */
  // var copyOfList = [...list];
  /* find a way to make this work without mutating the array */
  // var notMutated = list.slice();
  // var mutateThisList = [...list];
  innerRecursive(list, arrOfSeparators);
  /***** what if we just passed the original array to secondInnerRecur *****/
  function innerRecursive(innerList, arrOfSeparators) {
    //work with copy of original passed in list
    // var copyOfList = innerList.slice();
    // var copyOfList = [...list];
    // var copyOfList = [].concat(list);
    var copyOfList = innerList.slice();
    //([["a","b"],["c","d"],["e","f"]], ["#","$","%"]);
    if (arrOfSeparators.length === 0) {
      return;
    }

    var removeFromEndSeparator = arrOfSeparators.pop(); //%;
    //recursive call innerRecursive
    //call secondInnerRecur in innerRecursive

    secondInnerRecur(copyOfList, removeFromEndSeparator);
    //when we call innerRecursive we want to pass the original array into secondInnerRecur
    //in our secondInnerRecur we are removing from the end / mutating the array to get the length of the array length to 0 so we can break out of our recursive call
    //but our top recursive or innerRecursive we want to call innerRecursive with the list of subarray [["a","b"],["c","d"],["e","f"]] and an array with
    //separator decrement by one item from the end because we need to break out of our innerRecur func that is our base case for innerRecur
    //when this array ["#","$","%"] becomes []
    innerRecursive(innerList, arrOfSeparators);
  }

  function secondInnerRecur(secondList, poppedSeparator) {
    //copy list in this func
    // var mutateList = secondList.slice();
    //([["a","b"],["c","d"],["e","f"]], %);
    //work with copy of original passed in list
    if (secondList.length === 0) {
      // return "" from our secondInnerRecur if we want to return a string of the subarray combined with the separator
      // "a%b%c%d%e%f%"
      return;
    }
    /* code below we are mutated the original array: */
    var removeFromEndList = secondList.pop(); //["e","f"]
    /***** these algorithm is for when we want to combine the values in the nested array with the separator into one string
     * "a%b%c%d%e%f%"
     *  *****/
    //we should send a copy of ["e","f"] in to call of thirdInnerRecur
    var copyOfArrRemovedFromList = removeFromEndList.slice();
    var buildUpStrWithSeparator = thirdInnerRecur(
      removeFromEndList,
      poppedSeparator
    );
    /*return*/ secondInnerRecur(secondList, poppedSeparator) +
      buildUpStrWithSeparator;
    /***** these algorithm is for when we want to combine the values in the nested array with the separator into one string
     * "a%b%c%d%e%f%"
     *  *****/
    /***** we want to make a string with the separator for each subarray/nested arrays *****/

    //we should send a copy of ["e","f"] in to call of thirdInnerRecur
    var copyOfArrRemovedFromList = removeFromEndList.slice();

    var buildUpStrWithSeparator = thirdInnerRecur(
      copyOfArrRemovedFromList,
      poppedSeparator
    );

    //add buildupStr using thirdInnerRecur to our array that we want to return
    //unshift to add shift to remove
    result.unshift(buildUpStrWithSeparator);
    // we don't have to return anything from our secondInnerRecur
    /*return*/ secondInnerRecur(secondList, poppedSeparator);

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
  return result;
}

/***** testing our understanding and see what happens: pass an array into innerRecur then make a copy of the array/list passed into innerRecur *****/

function moreLearning() {
  alert(
    "as long as we make a copy of the original list [['a','b'],['c','d'],['e','f']] passed into joinRecur or innerRecur then passed that copied version into the func call of secondInnerRecur"
  );
  alert(
    "our original list [['a','b'],['c','d'],['e','f']] will not be mutated "
  );
  alert(
    "every time we call innerRecur it will reset this variable: var copyOfList = innerList.slice(); or var copyOfList = list.slice();"
  );
}

/***** what wil happen if we didnt make a copy of original list array passed into joinRecursive *****/

function joinRecursiveDidnotCopyOriginalList(list, arrOfSeparators) {
  var result = [];
  /* have a copy of the list array outside the scope of the innerRecursive func. 
      when we had the copy of the list array in innerRecursive, when we remove from the end it mutated the original list too
      when we call innerRecursive we want to pass in the original list array with nothing removed
      */
  // var copyOfList = [...list];
  /* find a way to make this work without mutating the array */
  // var notMutated = list.slice();
  // var mutateThisList = [...list];
  innerRecursive(list, arrOfSeparators);
  /***** what if we just passed the original array to secondInnerRecur *****/
  function innerRecursive(innerList, arrOfSeparators) {
    //work with copy of original passed in list
    // var copyOfList = innerList.slice();
    // var copyOfList = [...list];
    // var copyOfList = [].concat(list);
    // var copyOfList = innerList.slice();
    //([["a","b"],["c","d"],["e","f"]], ["#","$","%"]);
    if (arrOfSeparators.length === 0) {
      return;
    }

    var removeFromEndSeparator = arrOfSeparators.pop(); //%;
    //recursive call innerRecursive
    //call secondInnerRecur in innerRecursive

    secondInnerRecur(innerList, removeFromEndSeparator);
    //when we call innerRecursive we want to pass the original array into secondInnerRecur
    //in our secondInnerRecur we are removing from the end / mutating the array to get the length of the array length to 0 so we can break out of our recursive call
    //but our top recursive or innerRecursive we want to call innerRecursive with the list of subarray [["a","b"],["c","d"],["e","f"]] and an array with
    //separator decrement by one item from the end because we need to break out of our innerRecur func that is our base case for innerRecur
    //when this array ["#","$","%"] becomes []
    innerRecursive(innerList, arrOfSeparators);
  }

  function secondInnerRecur(secondList, poppedSeparator) {
    //copy list in this func
    // var mutateList = secondList.slice();
    //([["a","b"],["c","d"],["e","f"]], %);
    //work with copy of original passed in list
    if (secondList.length === 0) {
      // return "" from our secondInnerRecur if we want to return a string of the subarray combined with the separator
      // "a%b%c%d%e%f%"
      return;
    }
    /* code below we are mutated the original array: */
    var removeFromEndList = secondList.pop(); //["e","f"]
    /***** these algorithm is for when we want to combine the values in the nested array with the separator into one string
     * "a%b%c%d%e%f%"
     *  *****/
    //we should send a copy of ["e","f"] in to call of thirdInnerRecur
    var copyOfArrRemovedFromList = removeFromEndList.slice();
    var buildUpStrWithSeparator = thirdInnerRecur(
      removeFromEndList,
      poppedSeparator
    );
    /*return*/ secondInnerRecur(secondList, poppedSeparator) +
      buildUpStrWithSeparator;
    /***** these algorithm is for when we want to combine the values in the nested array with the separator into one string
     * "a%b%c%d%e%f%"
     *  *****/
    /***** we want to make a string with the separator for each subarray/nested arrays *****/

    //we should send a copy of ["e","f"] in to call of thirdInnerRecur
    var copyOfArrRemovedFromList = removeFromEndList.slice();

    var buildUpStrWithSeparator = thirdInnerRecur(
      copyOfArrRemovedFromList,
      poppedSeparator
    );

    //add buildupStr using thirdInnerRecur to our array that we want to return
    //unshift to add shift to remove
    result.unshift(buildUpStrWithSeparator);
    // we don't have to return anything from our secondInnerRecur
    /*return*/ secondInnerRecur(secondList, poppedSeparator);

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
  return result;
}

function learningIsAwesome() {
  alert(
    "joinRecur implement above: we didnt make a copy of the [['a','b'],['c','d'],['e','f']] passed into joinRecur, innerRecur, and secondInnerRecut"
  );
  alert(
    "after working with the first separator, our list, innerlist was emptry"
  );
}
/***** what wil happen if we didnt make a copy of original list array passed into joinRecursive *****/

/***** we can also implement joinRecur without mutating the list, we can pass in an index for secondInnerRecur and thirdInnerRecur
 * each time we call secondInnerRecur or thirdInnerRecur we want to increment that index then we will break when our index === arr.length - 1
 *  *****/

function joinRecursive(list, arrOfSeparators) {
  var result = [];

  innerRecursive(list, arrOfSeparators);
  //default value for our index should be 0
  function innerRecursive(innerList, arrOfSeparators, innerRecurIndex = 0) {
    //([["a","b"],["c","d"],["e","f"]], ["#","$","%"]);
    //["#","$","%"]
    var lengthOfArrOfSeparators = arrOfSeparators.length;
    //our base case
    //innerRecurIndex will start at 0
    //if innerRecurIndex == arrOfSeparators.length return;
    if (innerRecurIndex == lengthOfArrOfSeparators) {
      return;
    }

    var copyValueOfArrOfSeparatorsAtZero = arrOfSeparators[innerRecurIndex];
    //when we call innerRecur we want to increment innerRecurIndex by 1
    secondInnerRecur(innerList, copyValueOfArrOfSeparatorsAtZero);
    innerRecursive(innerList, arrOfSeparators, innerRecurIndex + 1);
  }
  //default value for our index should be 0
  function secondInnerRecur(
    secondList,
    copiedSeparatorStartingLeft,
    secondRecurIndex = 0
  ) {
    //[["a","b"],["c","d"],["e","f"]]
    var lengthOfSecondList = secondList.length;
    //base case
    //when secondRecurIndex == lengthOfSecondList we break
    if (secondRecurIndex == lengthOfSecondList) {
      return;
    }
    var copySubarrayOfListStartingAtZero = secondList[secondRecurIndex];
    //we want to pass in the copid subarray of the original list into thirdRecr with the copiedSeparatorStartingLeft
    //thirdInnerRecur(["a","b"], "#", 0);
    var builtUpStrFromThirdInnerRecur = thirdInnerRecur(
      copySubarrayOfListStartingAtZero,
      copiedSeparatorStartingLeft
    );
    //then add the string builtUp in thirdRecur to our result array
    //we are using push add to the end instead of using unshift add the beginnging because we are copying each subarray starting at 0
    //first time running we will be working with this subarray ["a","b"] then ["c","d"]
    //first adding to result: ["a#b#", "c#d#", "e#f#"]
    //if we starting at the end of [["a","b"],["c","d"],["e","f"]]
    //it will be this: ["e","f"] then ["c","d"]
    //then use unshift to result: ["c#d#","e#f#"]
    result.push(builtUpStrFromThirdInnerRecur);
    //then we want to call secondInnerRecur
    secondInnerRecur(
      secondList,
      copiedSeparatorStartingLeft,
      secondRecurIndex + 1
    );
  }

  function thirdInnerRecur(
    copiedSubarrayOfList,
    separator,
    thirdRecurIndex = 0
  ) {
    //(["a","b"],%, 0)
    var lengthOfSubarrayOfList = copiedSubarrayOfList.length;

    //base case
    if (thirdRecurIndex == lengthOfSubarrayOfList) {
      return "";
    }
    var valueOfSubarrayStartingAtZero = copiedSubarrayOfList[thirdRecurIndex];
    var valueConcatWithSeparator = valueOfSubarrayStartingAtZero + separator;
    return (
      valueConcatWithSeparator +
      thirdInnerRecur(copiedSubarrayOfList, separator, thirdRecurIndex + 1)
    );
  }
  //result will have these values ["a#b#","c#d#","e#f#","a$b$","c$d$","e$f$","a%b%","c%d%","e%f%"]
  //from passing these arrays into joinRecursive ([["a","b"],["c","d"],["e","f"]], ["#","$","%"]);
  return result;
}

/***** we can also implement joinRecur without mutating the list, we can pass in an index for secondInnerRecur and thirdInnerRecur
 * each time we call secondInnerRecur or thirdInnerRecur we want to increment that index then we will break when our index === arr.length - 1
 *  *****/

/***** implement reverse string in place *****/

function reverseStrInPlace(strInput) {
  var convertToArrOfStrChars = strInput.split("");
  // [1,2,3,4,5,6,7,8]
  //  0 1 2 3 4 5 6 7
  // [1,2,3,4,5,6,7,8].length - 1
  // 8 - 1 = 7
  var leftPointer = 0;
  //1
  var rightPointer = convertToArrOfStrChars.length - 1;
  //8
  //[1,2,3,4,5];
  //swap 1 and 5
  //arr[0] and arr[6 - 1]
  while (leftPointer != rightPointer) {
    swapHelper(convertToArrOfStrChars, leftPointer, rightPointer);
    leftPointer += 1;
    rightPointer -= 1;
  }

  return convertToArrOfStrChars;
}

function swapHelper(arrInput, firstIndex, secondIndex) {
  //we might not have to return the array;
  // return ([arrInput[firstIndex], arrInput[secondIndex]] = [
  //   arrInput[secondIndex],
  //   arrInput[firstIndex],
  // ]);
  [arrInput[firstIndex], arrInput[secondIndex]] = [
    arrInput[secondIndex],
    arrInput[firstIndex],
  ];
}
/***** implement reverse string in place *****/

function changeTheValue(arrInput, value) {
  var key = "a";
  var indexOfSubarray;
  console.log(this);
  for (let eachKey in this) {
    //when we pass a "hello" string into changeTheValue using .call()
    //it will be like calling new String("hello"). when we save the returned value of new String("hello"), it will return String("hello");
    //each key will be str 0,1,2,3,4
    let eachStr = this[eachKey];
    console.log(eachStr);
  }
  arrInput.forEach(function findValue(subarray, index) {
    var eachKey = subarray[0];
    if (eachKey === key) {
      indexOfSubarray = index;
    }
  });
  var mutateSubarray = arrInput[indexOfSubarray];
  mutateSubarray[1] = value;
  // var [, ourValue] = arrInput[indexOfSubarray];
  // ourValue = value;
  console.log(arrInput);
}

var arrOfSubarrays = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"],
];

var arrOfNums = [
  [1, 2],
  [3, 4],
  [5, 6],
];

var testArr = [1, 2, 3, 4, 5];

/***** keyword this in .call()  will be wrapper with the new String("hello") the String form *****/
changeTheValue.call("hello", arr, value);
/***** keyword this in .call()  will be wrapper with the new Number(8). the obj form *****/
changeTheValue.call(8, arr, value);
/***** keyword this will .apply below will be testArr which is [1,2,3,4,5] *****/
changeTheValue.apply(testArr, arrOfSubarrays, value);

var testObj = {
  name: "Deadpool",
  age: 21,
  location: "Seattle",
  profession: "Cool Dude",
};

var testObjTwo = {
  name: "Deadpool",
  age: 21,
  location: "Seattle",
  profession: "Cool Dude",
  country: "Japan",
};

var keysOfObjTwo = Object.keys(testObjTwo);

var valueOfSome = keysOfObjTwo.some(function findKey(key) {
  var ourBoolean = testObj.hasOwnProperty(key);
  return ourBoolean === false;
});

var usingEvery = keysOfObjTwo.every(function checkBoolean(key) {
  var ourBoolean = testObj.hasOwnProperty(key);
  return ourBoolean === true;
});
