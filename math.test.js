const { multiply } = require('./math.js');

test('base test', () => {
  expect(1 + 1).toBe(2);
});

test('multiply 1 * 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2)
});

test('multiply 5 * -10 to equal -50', () => {
  expect(multiply(5, -10)).toBe(-50);
});

test('multiply -2 * -8 to equal 16', () => {
  expect(multiply(-2, -8)).toBe(16);
});

test('if the second value is not passed in, return 0', () => {
  expect(multiply(6)).toBe(0);
});

test('if no parameter is passed in, return 0', () => {
  expect(multiply()).toBe(0);
});

test('multiply "2" * 90 to equal 180', () => {
  expect(multiply("2", 90)).toBe(180);
});

test('multiply 6 * "5" to equal 30', () => {
  expect(multiply(6, "5")).toBe(30);
});