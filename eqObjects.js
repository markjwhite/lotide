const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = (object1, object2) => {
  const arrOfKeys1 = Object.keys(object1);
  const arrOfKeys2 = Object.keys(object2);
  if (arrOfKeys1.length !== arrOfKeys2.length) {
    return false;
  }
  for (let key of arrOfKeys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};