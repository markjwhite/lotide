const takeUntil = (arr, callback) => {
  const results = [];
  for (ele of arr) {
    if (callback(ele)) {
      return results;
    } else {
      results.push(ele);
    }
  }
};

module.exports = takeUntil;

