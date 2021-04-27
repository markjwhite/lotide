const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🙂  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😠 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (arr) => {
  let tailArr = arr.slice(1);
  return tailArr;
};
