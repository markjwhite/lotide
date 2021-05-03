const findKey = (obj, callback) => {
  for (const y in obj) {
    if (callback(obj[y])) {
      return y;
    }
  }
};

module.exports = findKey;
