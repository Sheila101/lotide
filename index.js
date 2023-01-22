// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKeys = require('./findKeys');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqObjects,
  findKeys,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without,
};
