import { add } from './calculator';
import { subtract } from './calculator';
import { divide } from './calculator';
import { multiply } from './calculator';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 2 - 1 to equal 3', () => {
  expect(subtract(2, 1)).toBe(1);
});

test('divide 4 / 2 to equal 2', () => {
  expect(divide(4, 2)).toBe(2);
});

test('multiply 1 * 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});
