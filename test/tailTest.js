const assert = require('chai').assert;

const assertEqual = require('../assertEqual');
const tail = require('../tail');

//calling this to test
//tail(['milk', 'eggs', 'sugar']);

describe('#tail', () => {
  it('returns "sugar" for ["milk", "eggs", "sugar"]', () => {
    assert.deepEqual(tail(['milk', 'eggs', 'sugar']), ['eggs','sugar']);
  });
});
