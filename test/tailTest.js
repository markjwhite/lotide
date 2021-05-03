const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return all but the head(first element) of the array", () => {
    assert.deepEqual(tail(["Wishing", "I", "was", "fishing"]), ["I", "was", "fishing"]);
  });
});
