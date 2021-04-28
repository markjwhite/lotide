const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (obj, val) => {
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
};
