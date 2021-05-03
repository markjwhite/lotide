const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return [3, 4] from [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("should return [] because there isn't a middle", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});