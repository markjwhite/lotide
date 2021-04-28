const eqObjects = (object1, object2) => {
  const arrOfKeys1 = Object.keys(object1);
  const arrOfKeys2 = Object.keys(object2);
  let temp = false;
  if (arrOfKeys1.length !== arrOfKeys2.length) {
    return false;
  }
  for (let key of arrOfKeys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      console.log('hello');
      temp = eqArrays(object1[key], object2[key]);
      return temp;
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
