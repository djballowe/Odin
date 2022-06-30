const cipher = require('./cipher');

test('outputs test into uftu', () => {
  expect(cipher('test')).toBe('uftu');
});
