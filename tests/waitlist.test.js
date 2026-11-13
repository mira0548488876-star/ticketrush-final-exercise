const assert = require('node:assert/strict');
const { joinWaitlist } = require('../js/waitlist');

test('normalizes email and returns a new list', function () {
  const original = ['first@example.com'];
  const result = joinWaitlist(original, '  NEW@Example.COM  ');
  assert.deepEqual(result, ['first@example.com', 'new@example.com']);
  assert.notEqual(result, original);
  assert.deepEqual(original, ['first@example.com']);
});

test('does not add duplicate email addresses', function () {
  const result = joinWaitlist(['first@example.com'], ' FIRST@EXAMPLE.COM ');
  assert.deepEqual(result, ['first@example.com']);
});

test('does not add invalid email addresses', function () {
  const original = ['first@example.com'];
  assert.deepEqual(joinWaitlist(original, 'invalid'), original);
  assert.deepEqual(joinWaitlist(original, 'missing-dot@example'), original);
});