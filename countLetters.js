const countLetters = (str) => {
  str = str.split(' ').join('');
  const counted = {};
  for (let char of str) {
    if (!counted[char]) {
      counted[char] = 1;
    } else {
      counted[char] += 1;
    }
  }
  return counted;
};

module.exports = countLetters;
