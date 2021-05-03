//function that returns all but the head of an array
const tail = (arr) => {
  let tailArr = arr.slice(1);
  return tailArr;
};

module.exports = tail;
