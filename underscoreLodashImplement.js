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
  // function flat()

  return {
    each,
    eachRight,
    map,
    reduce,
    reduceRight,
    find,
    filter,
    findWhere,
  };
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
    value: 50000,
    id: "3",
  },
  {
    category: "business",
    title: "Charlie University",
    value: 50000,
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
