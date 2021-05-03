const assert = require("chai").assert;
const map = require("../map");

describe("#map", () => {
  it("should return [2, 4, 6, 8, 10] if [1, 2, 3, 4, 5], number => number * 2 in the input ", () => {
    assert.deepEqual(map([1, 2, 3, 4, 5], number => number * 2), [2, 4, 6, 8, 10]);
  });
});