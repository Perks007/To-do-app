const test = require('node:test');
const assert = require('node:assert/strict');

const { extractBearerToken } = require('./auth');

test('extractBearerToken returns the token from a bearer header', () => {
  assert.equal(extractBearerToken('Bearer abc123'), 'abc123');
});

test('extractBearerToken returns null for missing or invalid headers', () => {
  assert.equal(extractBearerToken(), null);
  assert.equal(extractBearerToken('Token abc123'), null);
  assert.equal(extractBearerToken('Bearer'), null);
});