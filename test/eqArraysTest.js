const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 'hello', 3]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 'hello', 3]), false); // => should PASS