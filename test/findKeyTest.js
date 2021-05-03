const assert = require("chai").assert;
const findKey = require("../findKey");

describe("#findKey", () => {
  it("should return 'Akelarre' if object1, key => key.stars === 4 is the input", () => {
    object1 = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 4 }
    };
    assert.strictEqual(findKey(object1, key => key.stars === 4), "Akelarre");
  });
  it("should return undefined if object1, key => key.stars === 8 is the input", () => {
    object1 = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 1 },
      "noma": { stars: 1 },
      "elBulli": { stars: 2 },
      "Ora": { stars: 1 },
      "Akelarre": { stars: 1 }
    };
    assert.strictEqual(findKey(object1, key => key.stars === 8), undefined);
  });
  it("should return 'elBulli' if object1, key => key.stars !== 1 is the input", () => {
    object1 = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 1 },
      "noma": { stars: 1 },
      "elBulli": { stars: 2 },
      "Ora": { stars: 1 },
      "Akelarre": { stars: 1 }
    };
    assert.strictEqual(findKey(object1, key => key.stars !== 1), "elBulli");
  });
});