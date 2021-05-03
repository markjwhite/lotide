//function that returns all but the head of an array
const tail = (array) => {
  let tailArr = array.slice(1);
  return tailArr;
};

module.exports = tail;
