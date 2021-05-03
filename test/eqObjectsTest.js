const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("should return true of objects are equal", () => {
    assert.deepEqual(eqObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }), true);
  });
  it("should return false if values are different data types", () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2", c: "3" }, { a: 1, b: 2, c: 3 }), false);
  });
  it("should return false if objects are different lengths", () => {
    assert.deepEqual(eqObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3, d: 4 }), false);
  });
});

