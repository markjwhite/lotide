const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it("should return [1, 3, 5] if [1, 3, 5, 8, 9, 11], number => number % 2 === 0", () => {
    assert.deepEqual(takeUntil([1, 3, 5, 8, 9, 11], number => number % 2 === 0), [1, 3, 5]);
  });
});