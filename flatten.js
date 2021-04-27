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

const flatten = (arr) => {
  let flattened = [];
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      for (let item of ele) {
        flattened.push(item);
      }
    } else {
      flattened.push(ele);
    }
  }
  return flattened;
};