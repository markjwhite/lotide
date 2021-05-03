const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  const arrOfKeys1 = Object.keys(object1);
  const arrOfKeys2 = Object.keys(object2);
  let temp = false;
  if (arrOfKeys1.length !== arrOfKeys2.length) {
    return false;
  }
  for (let key of arrOfKeys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      temp = eqArrays(object1[key], object2[key]);
      return temp;
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
