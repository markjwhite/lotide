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


const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = (array) => {
  const middleIndex = Math.floor(array.length / 2);
  const middleArr = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleArr.push(array[middleIndex - 1], array[middleIndex]);
    } else {
      middleArr.push(array[middleIndex]);
    }
  }
  return middleArr;
};
