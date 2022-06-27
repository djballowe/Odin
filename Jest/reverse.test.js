const reverse = require('./reverse');

test('reverses test to tset', () => {
  expect(reverse('test')).toBe('tset');
});
