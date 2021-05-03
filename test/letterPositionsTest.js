const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("should return { h: [0], a: [1], p: [2, 3], y: [4] } for input happy", () => {
    assert.deepEqual(letterPositions("happy"), { h: [0], a: [1], p: [2, 3], y: [4] });
  });
});