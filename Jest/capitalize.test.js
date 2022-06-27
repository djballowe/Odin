const capitalize = require('./capitalize');

test('turns test to Test', () => {
  expect(capitalize('test')).toBe('Test');
});
