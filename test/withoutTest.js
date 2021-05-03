const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it("should return [1, 2, 3] if [1, 2, 3, 4, 5], [3, 4, 5] are the inputs", () => {
    assert.deepEqual(without([1, 2, 3, 4, 5], [3, 4, 5]), [1, 2]);
  });
  it("should return [] if [1, 2, 3], [1, 2, 3] are the inputs", () => {
    assert.deepEqual(without(["emptied"], ["emptied"]), []);
  });
});