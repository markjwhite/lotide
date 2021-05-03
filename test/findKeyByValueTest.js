const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it("should return they gretzky if value is 99", () => {
    const greatest = {
      gretzky: 99,
      lemieux: 66,
      orr: 4,
      crosby: 87

    };
    assert.strictEqual(findKeyByValue(greatest, 99), 'gretzky');
  });
});