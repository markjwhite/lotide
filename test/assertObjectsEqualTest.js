const assertObjectsEqual = require('../assertObjectsEqual');

//asserts true
const greatest = { 66: "Lemieux", 99: "Gretzky" };
const tsetaerg = { 99: "Gretzky", 66: "Lemieux" };
const goons = { 28: "Domi", 24: "Probert" };

//asserts true
assertObjectsEqual(greatest, tsetaerg);

//Asserts false
assertObjectsEqual(greatest, goons);

//with arrays as values
const ab = { a: "1", b: ["2", 3] };
const ba = { b: ["2", 3], a: "1" };
assertObjectsEqual(ab, ba);

