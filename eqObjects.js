const eqArrays = require('./eqArrays');

const eqObjects = (obj1, obj2) => {
  const arrOfKeys1 = Object.keys(obj1);
  const arrOfKeys2 = Object.keys(obj2);
  let temp = false;
  if (arrOfKeys1.length !== arrOfKeys2.length) {
    return false;
  }
  for (let key of arrOfKeys1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      temp = eqArrays(obj1[key], obj2[key]);
      return temp;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
