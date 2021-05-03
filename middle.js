const middle = (array) => {
  const middleIndex = Math.floor(array.length / 2);
  const middleArr = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleArr.push(array[middleIndex - 1], array[middleIndex]);
    } else {
      middleArr.push(array[middleIndex]);
    }
  }
  return middleArr;
};

module.exports = middle;
