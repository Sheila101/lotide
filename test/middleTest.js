const assert = require('chai').assert;

const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe('#middle', () => {
  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('returns [2,3] for [1,2,3,4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });
  it('returns [2] for [1,2,3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns [3] for [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('returns [4] for [1,2,3,4,5,6,7]', () => {
    assert.deepEqual(middle([1, 2, 3, 4,5,6,7]), [4]);
  });
});

/* //Test
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [ 4] */