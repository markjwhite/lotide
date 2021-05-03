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

module.exports = flatten;