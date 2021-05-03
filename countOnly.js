const countOnly = (allItems, itemsToCount) => {
  const counted = {};
  for (let i = 0; i < allItems.length; i++) {
    let name = allItems[i];
    if (itemsToCount[name] && !counted[name]) {
      counted[name] = 1;
    } else if (itemsToCount[name]) {
      counted[name] += 1;
    }
  }
  return counted;
};

module.exports = countOnly;