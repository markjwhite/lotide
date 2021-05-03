const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("should return true if arrays are the same", () => {
    assert.deepEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true);
  });
  it("should return false if data types are different", () => {
    assert.deepEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false);
  });
  it("should return false if arrays are different lengths", () => {
    assert.deepEqual(eqArrays(["a", "b", "c"], ["a", "b", "c", "d"]), false);
  });
});