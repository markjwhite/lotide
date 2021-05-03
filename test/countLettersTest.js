const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("should return {m: 1, o: 1, u: 1, n: 2, t: 1, a: 1, i:, 1} for mountain", () => {
    assert.deepEqual(countLetters("mountain"), { m: 1, o: 1, u: 1, n: 2, t: 1, a: 1, i: 1 });
  });
});