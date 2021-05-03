const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("should only count x & y if { x: true, y: true, z: false }", () => {
    assert.deepEqual(countOnly(['x', 'x', 'x', 'y', 'y', 'z'], { x: true, y: true, z: false }), { x: 3, y: 2 });

  });
});