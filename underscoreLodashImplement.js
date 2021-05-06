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
    var keysOfObj = Object.keys(list);
    var keyValuePairsSubarray = Object.entries(properties);

    reduce(
      list,
      function findMatchingKeyValuePair(buildingUp, currentValue) {},
      []
    );
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

var testObj = {
  year: 1918,
  newsroom: "The New York Times",
  reason:
    "For its public service in publishing in full so many official reports documents and speeches by European statesmen relating to the progress and conduct of the war.",
};
