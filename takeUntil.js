const takeUntil = (array, callback) => {
  const results = [];
  for (ele of array) {
    if (callback(ele)) {
      return results;
    } else {
      results.push(ele);
    }
  }
};

module.exports = takeUntil;

