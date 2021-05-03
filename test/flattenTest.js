const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5] if [1, [2, 3], [4, [5]]] is the input", () => {
    assert.deepEqual(flatten([1, [2, 3], [4, [[5]]]]), [1, 2, 3, 4, 5]);
  });
  it("should return [1, 2, 3, 4, 5] if [1, 2, 3, 4, 5] is the input", () => {
    assert.deepEqual(flatten([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });
});